import { useMemo, useState } from 'react';
import {
  Building2,
  CheckCircle2,
  ClipboardList,
  Download,
  Printer,
  Stethoscope,
  Trash2,
  UserRoundCog,
} from 'lucide-react';
import { clinicInterviewUi } from '../translations';
import type {
  ClinicInterviewRecord,
  InterviewAnswer,
  InterviewQuestion,
  InterviewRole,
  Language,
} from '../types';

interface ClinicInterviewProps {
  lang: Language;
}

type Stage = 'role' | 'form' | 'questions' | 'summary';
type InterviewForm = Pick<ClinicInterviewRecord, 'date' | 'clinicName' | 'city' | 'interviewee' | 'interviewer' | 'dailyPatients' | 'notes'>;

const STORAGE_KEY = 'hplus_clinic_interviews';

const questions: Record<InterviewRole, InterviewQuestion[]> = {
  administrator: [
    { id: 'admin-1', text: "Bemorlar qabulga asosan qanday yoziladi: telefon, Telegram, Instagram, sayt yoki kelib?", options: ['Telefon', 'Telegram', 'Instagram', 'Sayt', 'Kelib', 'Aralash'] },
    { id: 'admin-2', text: "Yozilgan bemorlar ro'yxati qayerda yuritiladi: daftar, Excel, Telegram, CRM yoki maxsus dasturda?", options: ['Daftar', 'Excel', 'Telegram', 'CRM', 'Maxsus dastur', 'Aralash'] },
    { id: 'admin-3', text: "Bir bemorni ro'yxatdan o'tkazishga o'rtacha qancha vaqt ketadi?", options: ['1 daqiqa', '2-3 daqiqa', '5 daqiqa', '5+ daqiqa'] },
    { id: 'admin-4', text: "Navbatni qanday boshqarasiz: qo'lda, daftar/Excel orqali yoki tizim avtomatik ko'rsatadimi?", options: ["Qo'lda", 'Daftar', 'Excel', 'Tizim', 'Aralash'] },
    { id: 'admin-5', text: "Bemorlar eng ko'p qaysi savol bilan murojaat qiladi?", options: ['Navbatim qachon?', 'Doktor bormi?', 'Narx qancha?', 'Natijam chiqdimi?', 'Ish vaqti', 'Boshqa'] },
    { id: 'admin-6', text: "Bemor kechiksa yoki kelmay qolsa, buni oldindan bilasizmi?", options: ['Ha', "Yo'q", "Ba'zan"] },
    { id: 'admin-7', text: "Qabuldan oldin bemorlarga eslatma yuborasizmi? Agar yuborsangiz, qo'ldami yoki avtomatikmi?", options: ['Yubormaymiz', "Qo'lda", 'Telegram', 'Telefon', 'Avtomatik'] },
    { id: 'admin-8', text: "Tahlil natijalarini bemorga qanday berasiz?", options: ["Qog'ozda", 'Telegramda', 'PDF', 'Telefon orqali', 'Tizimdan', 'Aralash'] },
    { id: 'admin-9', text: "Sizning ishingizda eng ko'p qiyinchilik qaysi joyda?", options: ['Yozilish', 'Navbat', 'Bemor kartasi', "To'lov", 'Shifokor jadvali', 'Tahlil natijalari'] },
    { id: 'admin-10', text: "Hozirgi ishlayotgan tizimingizdan 1 dan 10 gacha nechchi darajada qoniqasiz?", ratingRequired: true },
    { id: 'admin-11', text: "Agar faqat bitta jarayon avtomatlashtirilsa, siz qaysi birini tanlardingiz?", options: ['Online yozilish', 'Navbat', 'Eslatma', 'Bemor kartasi', "To'lov", 'Tahlil natijalari'], followUp: "Nega aynan shu jarayon sizga eng ko'p muammo bo'lyapti? Bu vaqtingizni ko'p olyaptimi yoki xatolar ko'p bo'ladimi?" },
  ],
  director: [
    { id: 'director-1', text: "Klinikangizda bir kunda o'rtacha nechta bemor qabul qilinadi?", options: ['0-20', '20-50', '50-100', '100+'] },
    { id: 'director-2', text: "Hozir klinikada ichki boshqaruv uchun qanday tizim ishlatiladi?", options: ['Excel', '1C', 'CRM', 'Maxsus klinika dasturi', 'Telegram/daftar', 'Aralash'] },
    { id: 'director-3', text: "Bron, navbat, shifokor jadvali, to'lov va bemor ma'lumotlari bitta tizimdami yoki alohida-alohida yuritiladimi?", options: ['Bitta tizimda', 'Alohida', 'Qisman', 'Aralash'] },
    { id: 'director-4', text: "Siz rahbar sifatida kunlik tushum, bemorlar soni, shifokor yuklamasi va xizmatlar bo'yicha hisobotni qayerdan ko'rasiz?", options: ['Excel', '1C', 'CRM', 'Daftar', 'Administrator aytadi', 'Real-time dashboard', 'Boshqa'] },
    { id: 'director-5', text: "Hisobotlar real vaqt rejimida ko'rinadimi yoki kun oxirida qo'lda tayyorlanadimi?", options: ['Real-time', 'Kun oxirida', 'Haftalik', "Qo'lda", 'Aralash'] },
    { id: 'director-6', text: "Klinikada eng ko'p vaqt yoki pul yo'qotadigan jarayon qaysi deb o'ylaysiz?", options: ['Navbat', 'Yozilish', 'Bemor kelmay qolishi', 'Admin ishi', "To'lov", 'Tahlil natijalari', 'Hisobot'] },
    { id: 'director-7', text: "Bemorlar kelmay qolishi yoki kechikishi klinikaga sezilarli ta'sir qiladimi?", options: ['Ha', "Yo'q", "Ba'zan", 'Bilmayman'] },
    { id: 'director-8', text: "Siz uchun eng muhim raqam qaysi?", options: ['Kunlik tushum', 'Bemorlar soni', 'Shifokor samaradorligi', 'Qayta kelgan bemorlar', 'No-show', "Xizmatlar bo'yicha daromad"] },
    { id: 'director-9', text: "Yangi tizim joriy qilishda sizni eng ko'p nima xavotirga soladi?", options: ['Narx', "Xodimlarni o'rgatish", "Ma'lumot xavfsizligi", 'Texnik muammo', "Eski ma'lumotlarni ko'chirish", 'Internet'] },
    { id: 'director-10', text: "Agar tizim bron, navbat, bemor kartasi va hisobotlarni tartibga solsa, bunday yechimni sinab ko'rishga qiziqarmidingiz?", options: ['Ha', "Yo'q", 'Keyinroq', "Demo ko'rsak"] },
    { id: 'director-11', text: "Pilot sinov muvaffaqiyatli bo'ldi deyish uchun siz qanday natijani ko'rishingiz kerak?", followUp: "Agar shu muammo hal bo'lsa, klinikaga qanday foyda beradi: vaqt tejaladimi, tushum oshadimi, bemorlar norozi bo'lishi kamayadimi yoki nazorat kuchayadimi?" },
  ],
  doctor: [
    { id: 'doctor-1', text: "Bir kunda o'rtacha nechta bemor qabul qilasiz?", options: ['0-10', '10-20', '20-30', '30+'] },
    { id: 'doctor-2', text: "Bemor oldin kelgan bo'lsa, uning tibbiy tarixini qanday ko'rasiz?", options: ["Qog'oz karta", 'Excel', 'Dastur', 'Bemor olib keladi', "Ko'ra olmayman", 'Aralash'] },
    { id: 'doctor-3', text: "Oldingi tashxis, retsept va tahlil natijalarini topish siz uchun osonmi?", options: ['Ha', "Yo'q", "Ba'zan"] },
    { id: 'doctor-4', text: "Bemor kartasi yoki tahlil natijasi topilmay qoladigan holatlar bo'ladimi?", options: ['Ha', "Yo'q", "Ba'zan"] },
    { id: 'doctor-5', text: "Qabul vaqtida eng ko'p vaqt nimaga ketadi?", options: ["Bemorni so'roq qilish", 'Tarixini topish', 'Hujjat yozish', 'Retsept yozish', "Tahlil natijalarini ko'rish"] },
    { id: 'doctor-6', text: "Retsept, tavsiya yoki xulosa hozir qanday yoziladi?", options: ["Qog'ozda", 'Word/Excelda', 'Maxsus dasturda', "Qo'lda", 'Aralash'] },
    { id: 'doctor-7', text: "Tahlil natijalari sizga qanday yetib keladi?", options: ['Bemor olib keladi', 'Telegram orqali', "Qog'ozda", 'Tizimda', 'Aralash'] },
    { id: 'doctor-8', text: "Agar bemorning tarixi, tashriflari, tahlillari va retseptlari bitta elektron kartada bo'lsa, bu sizga yordam beradimi?", options: ['Ha', "Yo'q", 'Balki'] },
    { id: 'doctor-9', text: "Siz uchun tizimda eng muhim narsa nima?", options: ['Tezlik', 'Oddiylik', 'Bemor tarixi', 'Tahlil natijalari', 'Retsept shablonlari', 'Shifokor jadvali'] },
    { id: 'doctor-10', text: "Elektron tizim ishlatishda sizni nima xavotirga soladi?", options: ["Vaqt ko'p olishi", 'Murakkabligi', 'Internet', 'Xatolik', "Ma'lumot xavfsizligi"] },
    { id: 'doctor-11', text: "Hozirgi ish jarayoningizdan 1 dan 10 gacha nechchi darajada qoniqasiz?", ratingRequired: true, followUp: "Agar siz uchun bitta narsa yaxshilansa, qaysi biri ishni eng ko'p yengillashtiradi?" },
  ],
};

function localDate() {
  const date = new Date();
  const offset = date.getTimezoneOffset();
  return new Date(date.getTime() - offset * 60_000).toISOString().slice(0, 10);
}

function readSaved(): ClinicInterviewRecord[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) as ClinicInterviewRecord[] : [];
  } catch {
    return [];
  }
}

function downloadFile(filename: string, content: string, type: string) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  URL.revokeObjectURL(url);
}

function csvCell(value: unknown) {
  return `"${String(value ?? '').replaceAll('"', '""')}"`;
}

function exportJson(record: ClinicInterviewRecord) {
  downloadFile(`hplus-interview-${record.clinicName || record.id}.json`, JSON.stringify(record, null, 2), 'application/json;charset=utf-8');
}

function exportCsv(record: ClinicInterviewRecord) {
  const headers = ['id', 'date', 'role', 'clinicName', 'city', 'interviewee', 'interviewer', 'dailyPatients', 'question', 'answer', 'selectedOptions', 'important', 'painLevel'];
  const rows = record.answers.map((answer) => [
    record.id, record.date, record.role, record.clinicName, record.city, record.interviewee, record.interviewer,
    record.dailyPatients, answer.question, answer.text, answer.selectedOptions.join(' | '), answer.important, answer.painLevel ?? '',
  ]);
  downloadFile(`hplus-interview-${record.clinicName || record.id}.csv`, `\uFEFF${[headers, ...rows].map((row) => row.map(csvCell).join(',')).join('\n')}`, 'text/csv;charset=utf-8');
}

export default function ClinicInterview({ lang }: ClinicInterviewProps) {
  const ui = clinicInterviewUi[lang];
  const [stage, setStage] = useState<Stage>('role');
  const [role, setRole] = useState<InterviewRole | null>(null);
  const [form, setForm] = useState<InterviewForm>({ date: localDate(), clinicName: '', city: '', interviewee: '', interviewer: '', dailyPatients: '', notes: '' });
  const [answers, setAnswers] = useState<Record<string, InterviewAnswer>>({});
  const [questionIndex, setQuestionIndex] = useState(0);
  const [error, setError] = useState('');
  const [savedInterviews, setSavedInterviews] = useState<ClinicInterviewRecord[]>(readSaved);
  const [completedRecord, setCompletedRecord] = useState<ClinicInterviewRecord | null>(null);

  const roleQuestions = role ? questions[role] : [];
  const currentQuestion = roleQuestions[questionIndex];
  const currentAnswer = currentQuestion ? answers[currentQuestion.id] ?? emptyAnswer(currentQuestion) : null;

  const roleLabel = (value: InterviewRole) => ui[value];
  const roleCards = [
    { id: 'administrator' as const, icon: UserRoundCog },
    { id: 'director' as const, icon: Building2 },
    { id: 'doctor' as const, icon: Stethoscope },
  ];

  const summaryDetails = useMemo(() => completedRecord ? deriveSummaryDetails(completedRecord, ui.notSpecified) : null, [completedRecord, ui.notSpecified]);

  const selectRole = (selectedRole: InterviewRole) => {
    setRole(selectedRole);
    setStage('form');
    setQuestionIndex(0);
    setAnswers({});
    setError('');
  };

  const startQuestions = () => {
    if (!form.clinicName.trim() || !form.interviewer.trim()) {
      setError(ui.requiredForm);
      return;
    }
    setError('');
    setStage('questions');
  };

  const updateAnswer = (patch: Partial<InterviewAnswer>) => {
    if (!currentQuestion || !currentAnswer) return;
    setAnswers((previous) => ({ ...previous, [currentQuestion.id]: { ...currentAnswer, ...patch } }));
    setError('');
  };

  const toggleOption = (option: string) => {
    if (!currentAnswer) return;
    const selectedOptions = currentAnswer.selectedOptions.includes(option)
      ? currentAnswer.selectedOptions.filter((item) => item !== option)
      : [...currentAnswer.selectedOptions, option];
    updateAnswer({ selectedOptions });
  };

  const goNext = () => {
    if (!currentQuestion || !currentAnswer) return;
    if (currentQuestion.ratingRequired && currentAnswer.painLevel === null) {
      setError(ui.requiredRating);
      return;
    }
    if (questionIndex < roleQuestions.length - 1) {
      setQuestionIndex((index) => index + 1);
      setError('');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    finishInterview();
  };

  const finishInterview = () => {
    if (!role) return;
    const finalAnswers = roleQuestions.map((question) => answers[question.id] ?? emptyAnswer(question));
    const biggestPain = [...finalAnswers].filter((answer) => answer.painLevel !== null).sort((a, b) => (b.painLevel ?? 0) - (a.painLevel ?? 0))[0];
    const automationAnswer = role === 'administrator' ? finalAnswers.find((answer) => answer.questionId === 'admin-11') : null;
    const pilotAnswer = role === 'director' ? finalAnswers.find((answer) => answer.questionId === 'director-10') : null;
    const record: ClinicInterviewRecord = {
      id: typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : `interview-${Date.now()}`,
      ...form,
      role,
      answers: finalAnswers,
      summary: {
        biggestPain: biggestPain ? answerDisplay(biggestPain) : ui.notSpecified,
        automationChoice: automationAnswer ? answerDisplay(automationAnswer) : ui.notSpecified,
        pilotInterest: pilotAnswer ? answerDisplay(pilotAnswer) : ui.notSpecified,
        conclusion: '',
      },
      createdAt: new Date().toISOString(),
    };
    const nextSaved = [record, ...savedInterviews];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextSaved));
    setSavedInterviews(nextSaved);
    setCompletedRecord(record);
    setStage('summary');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const updateConclusion = (conclusion: string) => {
    if (!completedRecord) return;
    const updated = { ...completedRecord, summary: { ...completedRecord.summary, conclusion } };
    const nextSaved = savedInterviews.map((record) => record.id === updated.id ? updated : record);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextSaved));
    setSavedInterviews(nextSaved);
    setCompletedRecord(updated);
  };

  const resetInterview = () => {
    setStage('role');
    setRole(null);
    setAnswers({});
    setQuestionIndex(0);
    setCompletedRecord(null);
    setError('');
    setForm({ date: localDate(), clinicName: '', city: '', interviewee: '', interviewer: '', dailyPatients: '', notes: '' });
  };

  const removeInterview = (id: string) => {
    const nextSaved = savedInterviews.filter((record) => record.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextSaved));
    setSavedInterviews(nextSaved);
    if (completedRecord?.id === id) resetInterview();
  };

  const viewInterview = (record: ClinicInterviewRecord) => {
    setCompletedRecord(record);
    setRole(record.role);
    setStage('summary');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="interview-page">
      <div className="interview-shell">
        <section className="interview-hero">
          <div>
            <span className="interview-kicker"><ClipboardList size={16} /> H+ Research</span>
            <h1>{ui.title}</h1>
            <p>{ui.subtitle}</p>
          </div>
          {role && stage !== 'summary' && <button className="interview-link-button" onClick={() => setStage('role')}>{ui.changeRole}</button>}
        </section>

        {stage === 'role' && (
          <section>
            <h2 className="interview-section-title">{ui.selectRole}</h2>
            <div className="interview-role-grid">
              {roleCards.map(({ id, icon: Icon }) => (
                <button key={id} className="interview-role-card" onClick={() => selectRole(id)}>
                  <span className="interview-role-icon"><Icon size={26} /></span>
                  <strong>{roleLabel(id)}</strong>
                  <span>11 savol</span>
                </button>
              ))}
            </div>
          </section>
        )}

        {stage === 'form' && role && (
          <section className="interview-form-card">
            <div className="interview-card-heading">
              <div><span>{roleLabel(role)}</span><h2>{ui.clinicDetails}</h2></div>
              <CheckCircle2 size={24} />
            </div>
            <div className="interview-form-grid">
              <Field label={ui.clinicName} required value={form.clinicName} onChange={(value) => setForm({ ...form, clinicName: value })} />
              <Field label={ui.city} value={form.city} onChange={(value) => setForm({ ...form, city: value })} />
              <Field label={ui.interviewee} value={form.interviewee} onChange={(value) => setForm({ ...form, interviewee: value })} />
              <Field label={ui.date} type="date" value={form.date} onChange={(value) => setForm({ ...form, date: value })} />
              <Field label={ui.interviewer} required value={form.interviewer} onChange={(value) => setForm({ ...form, interviewer: value })} />
              <Field label={ui.dailyPatients} type="number" value={form.dailyPatients} onChange={(value) => setForm({ ...form, dailyPatients: value })} />
              <label className="interview-field interview-field-wide"><span>{ui.notes}</span><textarea value={form.notes} onChange={(event) => setForm({ ...form, notes: event.target.value })} /></label>
            </div>
            {error && <p className="interview-error">{error}</p>}
            <button className="interview-primary-button" onClick={startQuestions}>{ui.start}</button>
          </section>
        )}

        {stage === 'questions' && currentQuestion && currentAnswer && role && (
          <section className="interview-question-wrap">
            <div className="interview-progress-meta"><span>{roleLabel(role)}</span><strong>{questionIndex + 1}/{roleQuestions.length}</strong></div>
            <div className="interview-progress"><span style={{ width: `${((questionIndex + 1) / roleQuestions.length) * 100}%` }} /></div>
            <article className="interview-question-card">
              <span className="interview-question-number">{String(questionIndex + 1).padStart(2, '0')}</span>
              <h2>{currentQuestion.text}</h2>
              {currentQuestion.options && <div className="interview-chips">{currentQuestion.options.map((option) => <button key={option} className={`answer-chip ${currentAnswer.selectedOptions.includes(option) ? 'is-selected' : ''}`} onClick={() => toggleOption(option)}>{option}</button>)}</div>}
              <textarea className="interview-answer" placeholder={ui.answer} value={currentAnswer.text} onChange={(event) => updateAnswer({ text: event.target.value })} />
              {currentQuestion.followUp && <div className="interview-follow-up"><strong>Follow-up</strong><p>{currentQuestion.followUp}</p></div>}
              <div className="interview-question-controls">
                <label className="interview-checkbox"><input type="checkbox" checked={currentAnswer.important} onChange={(event) => updateAnswer({ important: event.target.checked })} /> {ui.important}</label>
                <div><span className="interview-rating-label">{ui.pain}{currentQuestion.ratingRequired ? ' *' : ''}</span><div className="rating-row">{Array.from({ length: 10 }, (_, index) => index + 1).map((rating) => <button key={rating} className={`rating-button ${currentAnswer.painLevel === rating ? 'is-selected' : ''}`} onClick={() => updateAnswer({ painLevel: rating })}>{rating}</button>)}</div></div>
              </div>
              {error && <p className="interview-error">{error}</p>}
              <div className="interview-nav-buttons">
                <button className="interview-secondary-button" disabled={questionIndex === 0} onClick={() => setQuestionIndex((index) => Math.max(0, index - 1))}>{ui.previous}</button>
                <button className="interview-primary-button" onClick={goNext}>{questionIndex === roleQuestions.length - 1 ? ui.finish : ui.next}</button>
              </div>
            </article>
          </section>
        )}

        {stage === 'summary' && completedRecord && summaryDetails && (
          <section className="interview-summary">
            <div className="interview-summary-header"><div><span>{ui.result}</span><h2>{completedRecord.clinicName}</h2><p>{roleLabel(completedRecord.role)} · {completedRecord.date}</p></div><span className="interview-saved-status"><CheckCircle2 size={16} /> {ui.savedStatus}</span></div>
            <div className="interview-summary-grid">
              <SummaryItem label={ui.biggestPain} value={completedRecord.summary.biggestPain} />
              <SummaryItem label={ui.automation} value={completedRecord.summary.automationChoice} />
              <SummaryItem label={ui.pilot} value={completedRecord.summary.pilotInterest} />
              <SummaryItem label={ui.lowRatings} value={summaryDetails.lowRatings} />
              <SummaryItem label={ui.importantAnswers} value={summaryDetails.importantAnswers} wide />
            </div>
            <label className="interview-conclusion"><span>{ui.conclusion}</span><textarea value={completedRecord.summary.conclusion} onChange={(event) => updateConclusion(event.target.value)} /></label>
            <div className="interview-export-row">
              <button onClick={resetInterview}>{ui.newInterview}</button>
              <button onClick={() => exportJson(completedRecord)}><Download size={16} /> {ui.json}</button>
              <button onClick={() => exportCsv(completedRecord)}><Download size={16} /> {ui.csv}</button>
              <button onClick={() => window.print()}><Printer size={16} /> {ui.print}</button>
            </div>
          </section>
        )}

        <section className="saved-interviews">
          <div className="saved-interviews-heading"><div><span>Local research archive</span><h2>{ui.saved}</h2></div><strong>{savedInterviews.length}</strong></div>
          {savedInterviews.length === 0 ? <p className="interview-empty">{ui.noSaved}</p> : <div className="saved-interviews-list">{savedInterviews.map((record) => (
            <article key={record.id} className="saved-interview-row">
              <div><strong>{record.clinicName}</strong><span>{roleLabel(record.role)} · {record.date}</span><p>{record.summary.biggestPain}</p></div>
              <div className="saved-interview-actions">
                <button onClick={() => viewInterview(record)}>{ui.view}</button>
                <button onClick={() => exportJson(record)}>JSON</button>
                <button onClick={() => exportCsv(record)}>CSV</button>
                <button className="is-danger" aria-label={ui.remove} onClick={() => removeInterview(record.id)}><Trash2 size={16} /></button>
              </div>
            </article>
          ))}</div>}
        </section>
      </div>
    </div>
  );
}

function emptyAnswer(question: InterviewQuestion): InterviewAnswer {
  return { questionId: question.id, question: question.text, text: '', selectedOptions: [], important: false, painLevel: null };
}

function answerDisplay(answer: InterviewAnswer) {
  return [...answer.selectedOptions, answer.text].filter(Boolean).join(' · ');
}

function deriveSummaryDetails(record: ClinicInterviewRecord, fallback: string) {
  const rated = record.answers.filter((answer) => answer.painLevel !== null);
  const minimum = rated.length ? Math.min(...rated.map((answer) => answer.painLevel as number)) : null;
  const lowRatings = minimum === null ? fallback : rated.filter((answer) => answer.painLevel === minimum).map((answer) => `${answer.question} (${answer.painLevel}/10)`).join(' | ');
  const importantAnswers = record.answers.filter((answer) => answer.important).map((answer) => `${answer.question}: ${answerDisplay(answer) || fallback}`).join(' | ') || fallback;
  return { lowRatings, importantAnswers };
}

function Field({ label, value, onChange, type = 'text', required = false }: { label: string; value: string; onChange: (value: string) => void; type?: string; required?: boolean }) {
  return <label className="interview-field"><span>{label}{required ? ' *' : ''}</span><input type={type} value={value} onChange={(event) => onChange(event.target.value)} /></label>;
}

function SummaryItem({ label, value, wide = false }: { label: string; value: string; wide?: boolean }) {
  return <div className={`interview-summary-item ${wide ? 'is-wide' : ''}`}><span>{label}</span><p>{value}</p></div>;
}
