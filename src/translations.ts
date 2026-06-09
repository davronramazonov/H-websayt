import { Language } from './types';

const uz = {
  common: {
    demoBtn: "Aloqa so'rash",
    partnerBtn: "Investor ma'lumoti",
    learnMore: "Batafsil",
    submit: "Yuborish",
    submitting: "Yuborilmoqda...",
    close: "Yopish",
    contactUs: "Bog'lanish",
    countries: "Bozor strategiyasi",
    audience: "Maqsadli auditoriya",
    success: "Qabul qilindi",
    dashboard: "Boshqaruv paneli",
    mobileApp: "Mobil ilova",
    metrics: "Holat",
    annual: "Yillik",
    monthly: "Oylik",
    perMonth: "/oy",
    getStarted: "Qiziqish bildirish",
    comingSoon: "Ishlab chiqilmoqda",
    popular: "MVP rejasi",
    healthcare: "Sog'liqni saqlash",
    language: "Til",
    targetMarket: "Bozor roli",
    savePercent: "Rejalashtirilgan",
    completed: "Tasdiqlangan",
    activeItem: "Joriy",
    nextItem: "Reja",
    capitalRaise: "INVESTITSIYA HOLATI",
    leadership: "JAMOA VA MASLAHATCHI",
    roadmapLabel: "YO'L XARITASI",
    platformLabel: "PLATFORMA",
    moduleLabel: "MODUL",
    advantagesLabel: "MVP doirasidagi imkoniyatlar",
    regionalPresenceLabel: "MARKAZIY OSIYO BOZOR XARITASI",
    checkSolutions: "Yechimlarni ko'rish",
    connectCloudHeadline: "Klinika, shifokor va bemorlar uchun infratuzilma",
    connectCloudDesc: "H+ Markaziy Osiyoda xususiy tibbiyot operatsiyalari uchun yozuvlar, navbat, yozilish va integratsiyalarni bir platformada jamlashni maqsad qilgan.",
    enforcingCompliance: "Regulyatorlar va ekotizim hamkorlari bilan moslashuv",
    primaryMarket: "Asosiy bozor",
    secondaryMarkets: "Ikkinchi bosqich bozorlari",
    futureExpansion: "Kelajakdagi kengayish",
    mvpDevelopment: "MVP ishlab chiqilmoqda",
    marketResearch: "Tadqiqot davom etmoqda",
    laterExpansion: "Keyingi kengayish",
    tbd: "Aniqlanadi",
    toValidate: "Tekshiriladi",
    conceptData: "Konsept ma'lumot",
    sampleOnly: "Namuna",
    planned: "Rejada",
    inDevelopment: "Ishlab chiqilmoqda",
    preMvp: "Pre-MVP",
    ongoing: "Davom etmoqda",
    stageValues: {
      preMvp: "Pre-MVP",
      inDev: "Ishlab chiqilmoqda",
      ongoing: "Davom etmoqda",
      itPark: "IT Park"
    },
    demoModalCountries: {
      uzbekistan: "O'zbekiston",
      kazakhstan: "Qozog'iston",
      kyrgyzstan: "Qirg'iziston",
      tajikistan: "Tojikiston",
      uae: "UAE",
      other: "Boshqa davlat"
    },
  },
  nav: {
    product: "Mahsulot",
    solutions: "Yechimlar",
    market: "Bozor",
    traction: "Holat",
    pricing: "Tariflar",
    company: "Kompaniya",
    investors: "Investorlar"
  },
  hero: {
    badge: "Pre-MVP bosqichidagi healthtech infratuzilma startapi",
    headline: "Markaziy Osiyo uchun tibbiyot infratuzilmasi qurilmoqda",
    subheadline: "H+ xususiy klinikalar, shifokorlar va bemorlar uchun operatsion jarayonlarni raqamlashtirishga qaratilgan erta bosqichdagi platforma.",
    trustedClinics: "H+ hozircha pre-MVP bosqichida",
    stats: {
      registered: "Joriy bosqich",
      clinics: "Mahsulot holati",
      transactions: "Bozor tekshiruvi",
      uptime: "Ekotizim"
    }
  },
  home: {
    mockup: {
      activeQueue: "MVP navbat moduli",
      patientsInLine: "Konsept workflow",
      doctorAvailability: "Klinika jadvali",
      cliniciansReady: "Prototip holati",
      uptime: "Mahsulot",
      securityStatus: "Dizayn bosqichida",
      clinicGrowthIndex: "Founder tadqiqot paneli",
      nextBooking: "Yozilish namunasi",
      drName: "Demo bemor oqimi",
      drRole: "MVP konsepti",
      activeQueueLine: "Navbat moduli",
      minWait: "reja",
      secureRecord: "XAVFSIZLIK DIZAYNDAN",
      ehrStandard: "Arxitektura loyihasi",
      hPatientApp: "H+ bemor ilovasi",
      tomorrow: "Rejada",
    }
  },
  product: {
    headline: "H+ - klinikalar va bemorlar uchun yagona tibbiyot OS",
    subheadline: "Onlayn bron, aqlli navbat, klinika paneli, bemor ilovasi, EHR, analitika va integratsiyalarni bitta xavfsiz ekotizimda birlashtiradi.",
    modules: {
      queue: {
        title: "Aqlli bron va navbat",
        desc: "Bemorlar onlayn yoziladi, klinika esa qabul oqimini real vaqt rejimida boshqaradi. Eslatmalar kechikish va bekor bo'lishlarni kamaytiradi.",
        benefits: ["Onlayn bron va check-in", "SMS/Telegram eslatmalar", "Navbat va xona yuklamasini nazorat qilish"]
      },
      clinic: {
        title: "Klinika paneli",
        desc: "Administrator, shifokor va menejerlar uchun navbatlar, xodimlar, to'lovlar, ombor va hisobotlarni boshqaradigan yagona panel.",
        benefits: ["Navbatlar, xodimlar va hisob-kitob bir joyda", "Filiallar bo'yicha ko'rsatkichlar", "Ombor va xizmatlar nazorati"]
      },
      ehr: {
        title: "Tibbiy yozuvlar va EHR",
        desc: "Bemor tarixi, tashriflar, retseptlar, tahlil fayllari va hujjatlarni tartibli saqlash uchun raqamli karta.",
        benefits: ["Bemor tarixi yo'qolmaydi", "Tahlil va hujjatlar biriktiriladi", "Qog'ozbozlik kamayadi"]
      },
      ai: {
        title: "Analitika & AI",
        desc: "Klinika yuklamasi, daromad, bemorlarning qayta kelishi va operatsion samaradorlikni ko'rsatadigan aqlli analitik qatlam.",
        benefits: ["Daromad va retention tahlili", "Yuklama prognozi", "Rahbar uchun tushunarli hisobotlar"]
      },
      app: {
        title: "Bemor ilovasi",
        desc: "Bemor shifokor tanlaydi, bron qiladi, navbatini kuzatadi, tahlil natijalarini ko'radi va klinika bilan aloqa qiladi.",
        benefits: ["Bir necha bosishda bron", "QR/ID orqali tez identifikatsiya", "Natijalar va eslatmalar telefonda"]
      },
      integrations: {
        title: "Integratsiyalar",
        desc: "Laboratoriya, dorixona, sug'urta va kelajakdagi davlat e-sog'liq tizimlari bilan ulanishga tayyor API yondashuvi.",
        benefits: ["LIS va laboratoriya almashinuvi", "Dorixona va ombor oqimi", "Sug'urta jarayonlari uchun tayyor struktura"]
      }
    },
    dashboardMockup: {
      searchPatient: "Bemor qidirish...",
      status: "Holati",
      diagnose: "Tashrif tarixi",
      waitingTime: "O'rtacha kutish",
      waitingValue: "Tekshiriladi",
      waitingNote: "MVP sinovida o'lchanadi",
      queueHandled: "Bugungi qabullar",
      queueValue: "Qabul oqimi",
      queueNote: "Konsept ma'lumot",
      nextToken: "Keyingi navbat ID",
      nextTokenValue: "#H-UZ-182",
      nextTokenNote: "EHR bilan bog'langan",
      liveAiQueue: "Jonli navbat balansi",
      checkedIn: "Ro'yxatdan o'tgan",
      calling: "Chaqirilmoqda",
      roomLabel: "4-xona",
      revenueThisMonth: "Oylik tushum",
      revenueValue: "MVPda o'lchanadi",
      revenueNote: "Moliyaviy ko'rinish",
      pharmacy: "Dorixona va ombor",
      inventoryItem1: "Dori vositasi A",
      inventoryItem1Value: "Omborda",
      inventoryItem2: "Dori vositasi B",
      inventoryItem2Value: "Kam qoldi",
      occupancyRate: "Klinika yuklamasi",
      occupancyValue: "Prognoz",
      occupancyLabel: "Namuna yuklama",
      patientAge: "Yosh: 42 - Erkak - Toshkent",
      idLabel: "ID: DEMO-001",
      secureRecord: "Xavfsiz yozuv",
      vitalSigns: "Hayotiy ko'rsatkichlar",
      vitalValues: "72 bpm - 36.6 C",
      diagnoseCode: "Oxirgi tashrif yozuvi",
      chronicCondition: "Tashrif tarixi",
      predictiveEngine: "Rahbarlar uchun AI yordamchi analitika",
      mondayForecast: "AI moduli shifokor qarorini almashtirmaydi; u klinika yuklamasi, daromad va operatsion samaradorlikni tushunarli ko'rsatadi.",
      diagnosisMatch: "Yuklama prognozi",
      insightVal: "Operatsion insight",
      insightDesc: "Klinik tashxis claimi emas",
      timeSaved: "Rahbar hisoboti",
      hrsPerDay: "Tushunarli panel",
      perPhysician: "qaror qabul qilish uchun",
      today: "Bugun",
      todayAppointment: "Bugungi qabul",
      appAppointment: "15:30 - Dr. S. Kamalova",
      labName: "Mustaqil lab",
      pharmacyName: "Dorixona oqimi",
      insuranceName: "Sug'urta jarayoni",
      coreApi: "H+ Core API",
      syncing: "Rejada",
      realtimeClaim: "API struktura",
      apiDesc: "H+ laboratoriya, dorixona va sug'urta workflowlarini kelajakdagi e-sog'liq integratsiyalariga tayyor API yondashuvi bilan bog'lashni maqsad qiladi.",
      osVersion: "H+ OS - MVP"
    },
    workflow: {
      title: "Mahsulot qanday ishlaydi?",
      steps: [
        "Bemor ilovadan yoki web orqali bron qiladi",
        "Klinika paneli navbat va resurslarni boshqaradi",
        "Shifokor EHR orqali bemor tarixini ko'radi",
        "Rahbar analitika orqali daromad, yuklama va o'sishni kuzatadi"
      ]
    }
  },
  solutions: {
    eyebrow: "H+ yechimlari",
    headline: "Har bir ishtirokchi uchun yagona tibbiy ekotizim",
    subheadline: "H+ klinika, shifokor, bemor, laboratoriya, dorixona, sug'urta va kelajakdagi e-sog'liq integratsiyalarini bitta xavfsiz operatsion tizimga birlashtiradi.",
    cards: {
      clinics: {
        title: "Xususiy klinikalar",
        tag: "Operatsion boshqaruv",
        desc: "Klinika qabul, navbat, xodimlar, to'lovlar, ombor va hisobotlarni bir panel orqali boshqaradi.",
        bullets: ["Onlayn bron va aqlli navbat", "Filiallar bo'yicha ko'rsatkichlar", "Daromad, xizmatlar va ombor nazorati"]
      },
      doctors: {
        title: "Shifokorlar",
        tag: "Kamroq qog'ozbozlik",
        desc: "Shifokor bemor tarixini, tashriflarni, retseptlarni va tahlil fayllarini tartibli raqamli kartada ko'radi.",
        bullets: ["EHR orqali bemor tarixi", "Retsept va hujjat shablonlari", "Shaxsiy jadval va qabul boshqaruvi"]
      },
      patients: {
        title: "Bemorlar",
        tag: "Qulay tibbiy tajriba",
        desc: "Bemor shifokor tanlaydi, yoziladi, navbatni kuzatadi, natijalarni oladi va klinika bilan bog'lanadi.",
        bullets: ["Bir necha bosishda bron qilish", "Navbat va eslatmalar telefonda", "Tahlil natijalari va hujjatlar bir joyda"]
      },
      partners: {
        title: "Laboratoriya, dorixona va sug'urta",
        tag: "Integratsiya tayyorligi",
        desc: "H+ tashqi xizmatlar bilan ma'lumot almashish, buyurtma, natija va hisob-kitob oqimlarini tartibga solish uchun API yondashuvini taklif qiladi.",
        bullets: ["Laboratoriya natijalarini ulash", "Dorixona va ombor oqimlari", "Sug'urta jarayonlari uchun tayyor struktura"]
      },
      government: {
        title: "Davlat va e-sog'liq tizimlari",
        tag: "Auditga tayyor arxitektura",
        desc: "H+ kelajakdagi davlat e-sog'liq integratsiyalari, anonimlashtirilgan statistik hisobotlar va auditga tayyor ma'lumot arxitekturasi uchun moslashtiriladi.",
        bullets: ["Role-based access", "Audit log va xavfsizlik yondashuvi", "Kelajakdagi e-sog'liq API integratsiyalari"]
      }
    },
    workflow: {
      title: "Muammo -> H+ yechimi -> Natija",
      subtitle: "H+ tibbiyotdagi tarqoq jarayonlarni bitta boshqariladigan oqimga aylantiradi.",
      labels: { problem: "Muammo", solution: "H+ yechimi", result: "Natija" },
      items: [
        { problem: "Bronlar telefon va chatlarda tarqalib ketadi.", solution: "H+ bron, check-in va navbatni yagona oqimga yig'adi.", result: "Klinika qabul jarayonini real vaqt rejimida ko'radi." },
        { problem: "Bemor tarixi qog'ozlarda yoki alohida fayllarda qolib ketadi.", solution: "EHR bemor tashriflari, retseptlari va tahlillarini tartibli saqlaydi.", result: "Shifokor kerakli ma'lumotni tezroq topadi." },
        { problem: "Laboratoriya, dorixona va sug'urta jarayonlari alohida yuradi.", solution: "H+ API yondashuvi orqali tashqi xizmatlarni ulashga tayyor bo'ladi.", result: "Ma'lumot almashinuvi va hisob-kitoblar ancha tartibli bo'ladi." },
        { problem: "Rahbar klinika yuklamasi va daromadni kech ko'radi.", solution: "Analytics & AI operatsion ko'rsatkichlarni tushunarli panelga chiqaradi.", result: "Boshqaruv qarorlari aniqroq ma'lumotga tayanadi." }
      ]
    },
    banner: {
      eyebrow: "Yagona tibbiy infratuzilma",
      title: "H+ klinikani oddiy CRM emas, to'liq operatsion tizim sifatida boshqaradi",
      desc: "Platforma klinika ichidagi kundalik jarayonlarni, bemor tajribasini va tashqi integratsiyalarni yagona xavfsiz ekotizimga yig'adi."
    }
  },
  market: {
    eyebrow: "Bozor imkoniyati",
    headline: "Markaziy Osiyo xususiy tibbiyoti raqamli operatsion tizimga tayyorlanmoqda",
    subheadline: "H+ O'zbekiston bozoridan boshlanib, Qozog'iston, Qirg'iziston, Tojikiston va Turkmaniston kabi mintaqaviy bozorlarga moslashish imkoniyatiga ega.",
    estimateNote: "Bozor raqamlari ochiq manbalar va ehtiyotkor ichki rejalashtirish modeli asosida ko'rsatiladi. Har bir davlatda xususiy klinika tushunchasi turlicha yuritilgani sababli raqamlar investor sahifasida taxminiy / publicly available data sifatida talqin qilinishi kerak.",
    population: "Aholi",
    privateClinics: "Xususiy klinikalar / providerlar",
    annualGrowth: "Yillik o'sish",
    confidence: "Data ishonchliligi",
    marketReadiness: "Bozor tayyorligi",
    mapLabel: "Real chegaralarga asoslangan Markaziy Osiyo xaritasi",
    profileLabel: "Bozor profili",
    opportunityLabel: "Imkoniyat",
    dataNoteLabel: "Data izohi",
    countriesData: {
      uzbekistan: { name: "O'zbekiston", mapName: "O'zbekiston", desc: "H+ uchun boshlang'ich bozor. Xususiy tibbiyot tez rivojlanmoqda, klinikalar soni oshgan va raqamlashtirishga talab kuchaymoqda.", popVal: "37M+", privateClinicsVal: "9,000+", growthVal: "~10-15%", confidenceVal: "Yuqori", digitVal: "O'sish bosqichida", opportunity: "Pilot va birinchi tijoriy joriy etish uchun eng mos bozor.", dataNote: "Ochiq manbalarda xususiy klinikalar 2016-yildagi 3,200 atrofidan 2026-yil yakunida 8,700 taga yetishi kutilayotgani va 2025-yilda 1,329 ta yangi xususiy klinika litsenziya olgani ko'rsatilgan." },
      kazakhstan: { name: "Qozog'iston", mapName: "Qozog'iston", desc: "Mintaqadagi xarid qobiliyati yuqori bo'lgan bozor. Xususiy providerlar davlat moliyalashtirish va sug'urta tizimiga faolroq kirib bormoqda.", popVal: "20M+", privateClinicsVal: "1,200+", growthVal: "~7% CAGR", confidenceVal: "O'rta", digitVal: "O'rta", opportunity: "Keyingi regional kengayish uchun kuchli bozor.", dataNote: "Bu raqam barcha xususiy klinikalar emas, davlat buyurtmasi yoki sug'urta tizimi bilan ishlayotgan xususiy providerlar bo'yicha ochiq indikator sifatida ishlatiladi." },
      kyrgyzstan: { name: "Qirg'iziston", mapName: "Qirg'iziston", desc: "Kichikroq, lekin moslashuvchan bozor. Xususiy klinikalar raqamli tizimlarga ulanish va tartibga solish jarayoniga kirib bormoqda.", popVal: "7M+", privateClinicsVal: "540+ inspected", growthVal: "N/A", confidenceVal: "Past-o'rta", digitVal: "Past", opportunity: "Yengil integratsiya va hamkorlik modeli uchun mos bozor.", dataNote: "Ochiq manbalarda to'liq milliy xususiy klinikalar soni bo'yicha aniq vaqt qatori yo'q. 2025-yilda 541 ta xususiy tibbiy/farmatsevtik tashkilot tekshiruvdan o'tgani bozor indikatori sifatida ishlatiladi." },
      tajikistan: { name: "Tojikiston", mapName: "Tojikiston", desc: "Raqamli tibbiyotga ehtiyoj yuqori bo'lgan, xususiy sektor asta-sekin kengayayotgan bozor.", popVal: "10M+", privateClinicsVal: "900", growthVal: "~12% recent", confidenceVal: "O'rta", digitVal: "Past", opportunity: "Uzoq muddatli kengayish va infratuzilma yaratish imkoniyati.", dataNote: "Ochiq xabarlarda 2024-yilda 801+ xususiy tibbiyot muassasasi, 2025-yilda esa 900 ta xususiy tibbiyot muassasasi faoliyat yuritayotgani ko'rsatilgan." },
      turkmenistan: { name: "Turkmaniston", mapName: "Turkmaniston", desc: "Yopiqroq va davlat nazorati kuchli bo'lgan bozor. Xususiy tibbiyot sektori bo'yicha ochiq ma'lumotlar cheklangan.", popVal: "6M+", privateClinicsVal: "Limited data", growthVal: "N/A", confidenceVal: "Past", digitVal: "Juda past", opportunity: "Uzoq muddatli kuzatuv va ehtiyotkor regional strategiya uchun bozor.", dataNote: "Ishonchli ochiq clinic-count data topilmagan. Manbalarda xususiy tibbiyot sektori juda kichik yoki cheklangan deb tasvirlanadi, shuning uchun aniq son yozilmasin." }
    },
    drivers: {
      title: "Nega aynan hozir?",
      subtitle: "H+ bozorga kirayotgan vaqtda klinikalar operatsion samaradorlik, bemor tajribasi va integratsiyalarga ko'proq e'tibor qaratmoqda.",
      items: [
        { title: "Xususiy klinikalar o'smoqda", desc: "Klinikalar filiallar, xizmatlar va bemor oqimini yaxshiroq boshqarish uchun yagona panelga ehtiyoj sezmoqda." },
        { title: "Bemorlar raqamli qulaylik kutmoqda", desc: "Online bron, navbat holati, eslatmalar va natijalarni telefonda ko'rish yangi standartga aylanmoqda." },
        { title: "Jarayonlar hanuz tarqoq", desc: "Ko'plab klinikalarda telefon, chat, Excel, qog'oz va alohida dasturlar bir-biriga ulanmagan." },
        { title: "Integratsiya talabi oshmoqda", desc: "Laboratoriya, dorixona, sug'urta va kelajakdagi e-sog'liq tizimlari bilan ma'lumot almashish muhim bo'lib bormoqda." }
      ]
    }
  },
  traction: {
    eyebrow: "Loyiha holati",
    statusBadge: "Pre-MVP bosqichi",
    headline: "H+ hozir MVP emas - pilotga tayyorlanayotgan tibbiyot OS loyihasi",
    subheadline: "H+ konsepsiya, mahsulot arxitekturasi, asosiy modullar va pilot ssenariylari shakllantirilgan bosqichda. Keyingi maqsad - ishlaydigan MVP va klinikalar bilan real pilot sinovlarini boshlash.",
    statusNote: "Hozirgi holat: concept + prototype + pilot preparation. Mahsulot hali ommaviy ishga tushirilmagan.",
    metrics: {
      concept: { title: "Konsept tayyor", desc: "H+ ning asosiy pozitsiyasi, muammo, yechim, bozor va mahsulot modullari aniqlangan." },
      architecture: { title: "Arxitektura yo'nalishi belgilangan", desc: "Klinika paneli, bemor ilovasi, EHR, aqlli navbat, Analytics & AI va integratsiyalar bo'yicha mahsulot struktura ishlab chiqilmoqda." },
      prototype: { title: "Prototype bosqichi", desc: "Web taqdimot, UI yo'nalishi va asosiy foydalanuvchi oqimlari shakllantirilmoqda." },
      pilot: { title: "Pilotga tayyorgarlik", desc: "Klinikalar bilan sinov ssenariylari, texnik talablar va MVP scope aniqlashtirilmoqda." }
    },
    progress: {
      headline: "Bosqichma-bosqich rivojlanish",
      subtitle: "H+ hozircha yakuniy mahsulot emas. Loyiha aniq MVP va pilot bosqichiga tartibli ravishda olib chiqilmoqda.",
      items: [
        { label: "01", title: "Muammo va bozor aniqlangan", desc: "Klinikalardagi bron, navbat, qog'ozbozlik, tarqoq tizimlar va bemor tajribasidagi asosiy muammolar belgilangan.", status: "Tayyor" },
        { label: "02", title: "Mahsulot scope shakllanmoqda", desc: "Onlayn bron, aqlli navbat, klinika paneli, bemor ilovasi, EHR, analitika va integratsiyalar MVP scope uchun ajratilmoqda.", status: "Jarayonda" },
        { label: "03", title: "Prototype va UI yo'nalishi", desc: "Sayt, pitch deck va interfeys konsepti orqali H+ ning qanday ishlashi vizual va funksional tomondan aniqlashtirilmoqda.", status: "Jarayonda" },
        { label: "04", title: "MVP ishlab chiqish", desc: "Keyingi bosqichda asosiy funksiyalar ishlaydigan minimal mahsulotga yig'iladi.", status: "Rejada" },
        { label: "05", title: "Klinikalar bilan pilot", desc: "MVP tayyor bo'lgach, tanlangan klinikalar bilan real ish jarayonida sinovdan o'tkaziladi.", status: "Rejada" }
      ]
    },
    validation: {
      headline: "Hozircha traction emas, validation bosqichi",
      subtitle: "Bu sahifada real ishga tushirilgan mahsulot emas, balki H+ ning tayyorgarlik va validatsiya holati ko'rsatiladi.",
      items: [
        { title: "Klinika muammolari aniq", desc: "Loyiha navbat, bron, hujjatlar, integratsiya va boshqaruvdagi real og'riqli nuqtalarga qaratilgan." },
        { title: "MVP scope ehtiyotkor tuzilmoqda", desc: "Birinchi versiyada faqat pilot uchun zarur bo'lgan funksiyalar tanlanadi, ortiqcha murakkablik kamaytiriladi." },
        { title: "Pilotdan oldin texnik aniqlik kerak", desc: "Klinika jarayonlari, rollar, ma'lumotlar xavfsizligi va integratsiya talablarini oldindan aniqlash muhim." }
      ]
    },
    disclaimer: {
      title: "Shaffof holat",
      desc: "H+ hali tayyor MVP yoki live mahsulot emas. Saytdagi hozirgi ma'lumotlar loyiha konsepsiyasi, rejalashtirilgan mahsulot arxitekturasi va pilotga tayyorgarlik bosqichini ifodalaydi."
    }
  },
  advisor: {
    headline: "Strategic Advisor",
    name: "Luciano Freitas",
    role: "Global entrepreneur, operator and startup advisor",
    desc: "Luciano brings international operating experience across marketplace, mobility, hospitality and startup scaling contexts.",
    bullets: [
      "18+ years experience",
      "Former executive at Uber",
      "Former executive at Airbnb",
      "Former executive at Hotmart",
      "Co-Founder of unicorn startup Facily",
      "US$500M+ fundraising exposure",
      "US$10B+ revenue impact",
      "Startup advisor and international speaker"
    ]
  },
  investors: {
    eyebrow: "Investorlar uchun brief",
    statusBadge: "Pre-MVP / pilot ishlab chiqilmoqda",
    headline: "H+ - Markaziy Osiyo tibbiyoti uchun qurilayotgan HealthTech infratuzilma",
    subheadline: "H+ xususiy klinikalar, shifokorlar va bemorlar uchun yagona tibbiy operatsion tizim yaratmoqda. Loyiha hali MVP emas, lekin bozor o'rganish, mahsulot arxitekturasi va pilot yo'nalishi shakllangan.",
    opportunity: {
      title: "Investor uchun imkoniyat",
      desc: "Markaziy Osiyoda xususiy tibbiyot raqamlashtirishga muhtoj: bron, navbat, bemor tarixi, klinika boshqaruvi, analitika va integratsiyalar ko'pincha alohida yoki qo'lda yuritiladi. H+ shu tarqoq jarayonlarni bitta ekotizimga yig'ishni maqsad qilgan."
    },
    stage: {
      title: "Hozirgi bosqich",
      value: "Pre-MVP",
      desc: "H+ hozir concept, product architecture, prototype direction va pilot development bosqichida. Keyingi maqsad - MVP scope'ni yakunlash va klinikalar bilan real pilot sinovlarini boshlash."
    },
    thesis: {
      title: "Investitsion tezis",
      desc: "H+ hozir daromad yoki traction claim qilmaydi. Investor uchun asosiy tezis - mintaqada xususiy klinikalar uchun lokalizatsiya qilingan, ko'p modulli va integratsiyaga tayyor HealthTech OS qurish imkoniyati.",
      points: [
        { title: "Katta, lekin tarqoq bozor", desc: "Klinikalar ko'p jarayonlarni telefon, chat, Excel, qog'oz yoki bir-biriga ulanmagan dasturlarda yuritadi." },
        { title: "Bemor tajribasi o'zgarayotgan davr", desc: "Bemorlar onlayn bron, navbat holati, natijalar va eslatmalarni telefonda ko'rishni kutmoqda." },
        { title: "Lokal moslashuv muhim", desc: "H+ O'zbekiston va Markaziy Osiyo tillari, klinika odatlari va real ish jarayonlarini hisobga olgan holda qurilmoqda." },
        { title: "Platforma yondashuvi", desc: "Maqsad faqat bitta CRM emas, balki klinika paneli, bemor ilovasi, EHR, analitika va integratsiyalarni birlashtiradigan tizim yaratish." }
      ]
    },
    funding: {
      title: "Mablag' yo'nalishi",
      targetLabel: "Investitsiya bosqichi",
      targetValue: "Pre-seed / strategic investor conversations",
      targetDesc: "H+ hozir rasmiy ommaviy investitsiya taklifi emas. Investorlar bilan suhbatlar MVP, pilot scope, jamoa va texnik infratuzilmani shakllantirish uchun olib boriladi.",
      allocationTitle: "Mablag'lardan foydalanish modeli"
    },
    useOfFunds: {
      product: { title: "Mahsulot va MVP ishlab chiqish", percentage: "40%", desc: "Klinika paneli, bemor ilovasi, EHR, aqlli navbat, analytics va asosiy integratsiyalar bo'yicha MVP scope'ni ishlab chiqish." },
      pilot: { title: "Pilot va klinika validatsiyasi", percentage: "25%", desc: "Tanlangan klinikalar bilan pilot ssenariylarini tayyorlash, workflow tahlili, feedback sikllari va real jarayonlarda sinov." },
      team: { title: "Jamoani kuchaytirish", percentage: "25%", desc: "Frontend, backend, mobile, product, UX va klinik jarayonlarni tushunadigan mutaxassislarni jalb qilish." },
      legal: { title: "Xavfsizlik, yuridik va operatsion tayyorgarlik", percentage: "10%", desc: "Ma'lumotlar xavfsizligi, auditga tayyor arxitektura, hujjatlar, shartnomalar va operatsion jarayonlarni tayyorlash." }
    },
    milestones: {
      title: "Keyingi investor milestone'lari",
      subtitle: "Bu prognoz qilingan revenue emas. Bu H+ ni MVP va pilotga olib chiqish uchun amaliy bosqichlar.",
      items: [
        { label: "01", title: "MVP scope'ni yakunlash", desc: "Pilot uchun zarur bo'lgan minimal funksiyalarni tanlash: bron, navbat, klinika paneli, asosiy EHR va bemor access.", status: "Keyingi bosqich" },
        { label: "02", title: "Texnik MVP ishlab chiqish", desc: "Frontend, backend, mobile va asosiy ma'lumotlar strukturasini pilotga yaroqli holatga keltirish.", status: "Rejada" },
        { label: "03", title: "Klinika pilot ssenariylari", desc: "Tanlangan klinikalar bilan real workflow, rollar, ma'lumotlar va integratsiya ehtiyojlarini aniqlash.", status: "Rejada" },
        { label: "04", title: "Pilot test va feedback", desc: "MVP tayyor bo'lgach, klinika ichidagi real jarayonlarda sinovdan o'tkazish va iteratsiya qilish.", status: "Rejada" },
        { label: "05", title: "Post-pilot pricing va GTM", desc: "Pilot natijalaridan keyin pricing, onboarding, support va go-to-market modelini aniqlashtirish.", status: "Keyingi bosqich" }
      ]
    },
    risks: {
      title: "Shaffof risklar",
      subtitle: "Investorlar uchun H+ holati ochiq ko'rsatiladi: imkoniyat katta, lekin loyiha hali erta bosqichda.",
      items: [
        { title: "MVP hali tayyor emas", desc: "H+ hali ommaviy ishlayotgan mahsulot emas. Birinchi muhim bosqich - MVPni ishlab chiqish va klinika workflowlarida sinash." },
        { title: "Integratsiyalar bosqichma-bosqich qilinadi", desc: "Laboratoriya, dorixona, sug'urta va e-sog'liq integratsiyalari darhol emas, pilot va texnik tayyorgarlikdan keyin amalga oshiriladi." },
        { title: "Bozor raqamlari validatsiya talab qiladi", desc: "TAM/SAM/SOM va pricing modeli pilot natijalari, klinika feedbacklari va alohida source tekshiruvlari bilan aniqlashtiriladi." }
      ]
    },
    disclaimer: {
      title: "Muhim eslatma",
      desc: "Bu sahifa investitsiya taklifi yoki moliyaviy maslahat emas. H+ hali pre-MVP bosqichida. Investor bilan shartlar, valuation, equity va round hajmi alohida muhokama qilinadi."
    },
    cta: "Investor suhbatini boshlash"
  },
  companyRuDraftUnused: {
    eyebrow: "Компания",
    statusBadge: "Pre-MVP / пилот разрабатывается",
    headline: "H+ - HealthTech-проект нового поколения для медицины Центральной Азии",
    subheadline: "Мы создаем медицинскую операционную систему для частных клиник, врачей и пациентов. H+ пока не является MVP, но концепция, продуктовая архитектура, анализ рынка и направление пилота уже сформированы.",
    mission: { title: "Наша миссия", desc: "Объединить разрозненные процессы между клиникой, врачом и пациентом в единую, понятную и безопасную цифровую экосистему для Центральной Азии." },
    vision: { title: "Наше видение", desc: "Создать простую, надежную и адаптированную под регион медицинскую инфраструктуру в HealthTech и в долгосрочной перспективе построить компанию уровня unicorn." },
    team: {
      eyebrow: "Основная команда",
      title: "Команда, создающая H+",
      subtitle: "Команда объединяет product strategy, operations, full-stack thinking, Flutter mobile development, AI-инструменты и международную advisor-поддержку.",
      members: {
        islombek: { name: "Islombek Aliyev", role: "Founder & Product/Strategy Lead", initials: "IA", imageAlt: "Фото Islombek Aliyev", bio: "Founder, работающий над концепцией H+, product strategy, дизайн-направлением и vision HealthTech-экосистемы. Имеет опыт в программировании, работе с числами, государственных процессах и freelancing на российском рынке." },
        davron: { name: "Davron Ramazonov", role: "Founder & Operations/Technical Lead", initials: "DR", imageAlt: "Фото Davron Ramazonov", bio: "Founder, который вошел в startup-среду в 17 лет. В H+ работает над operations, technical concept, анализом рынка, AI-ориентированными решениями и формированием pilot-направления." },
        ulugbek: { name: "Ulugbek Ubaydullayev", role: "Flutter Developer / Mobile Specialist", initials: "UU", imageAlt: "Фото Ulugbek Ubaydullayev", bio: "Flutter-разработчик и мобильный специалист. Работал над 7 проектами и уже 7 месяцев самостоятельно развивает проект в taxi-направлении. В H+ фокусируется на пациентском приложении и mobile experience." },
        luciano: { name: "Luciano Freitas", role: "Lead Advisor", initials: "LF", imageAlt: "Фото Luciano Freitas", bio: "Международный advisor, который помогает H+ в направлениях growth, brand, leadership, business model и startup strategy. Имеет опыт, связанный с Uber, Airbnb, Hotmart, BX Blue и Facily." }
      }
    },
    founderStory: {
      eyebrow: "История основателей",
      title: "Как начался H+?",
      subtitle: "H+ не появился за один день. Проект сформировался через 7 месяцев изучения рынка, процессов клиник, пациентского опыта и условий Центральной Азии.",
      islombek: { title: "Islombek Aliyev - product vision и стратегическое мышление", desc: "Islombek родился в Фергане, учился в International Korean University и получил опыт в государственных процессах, включая работу, связанную с районным хокимиятом. Он около полутора лет занимался freelancing в программировании и работал на российском рынке. В H+ он работает над product vision, стратегией, дизайн-направлением и тем, как должна функционировать медицинская экосистема." },
      davron: { title: "Davron Ramazonov - operations, technical thinking и быстрое обучение", desc: "Davron вошел в startup-среду в 17 лет. Он учился в политехникуме в Ташкентской области, в 2022 году завершил full-stack программирование и продолжает самостоятельно развиваться. С Islombek он познакомился в октябре 2025 года, а позже сотрудничество усилилось через среду UzCombinator intensive. В течение 7 месяцев они глубоко прорабатывали рынок, продукт, потребности клиник и pilot model H+. Davron имеет опыт работы с AI-системами, концептами проектов для государства, taxometer-направлением и AI-инструментами." }
    },
    journey: {
      eyebrow: "Путь проекта",
      title: "От pre-MVP к пилоту",
      subtitle: "H+ пока не является готовым продуктом. Проект последовательно движется к MVP и реальным пилотным тестам.",
      items: [
        { label: "01", title: "Знакомство основателей", desc: "Islombek и Davron познакомились в октябре 2025 года и начали совместно думать о разрозненных процессах в медицине Центральной Азии.", status: "Начато" },
        { label: "02", title: "Среда UzCombinator", desc: "Intensive-программа UzCombinator, начавшаяся в декабре 2025 года, усилила сотрудничество основателей и помогла четче оформить идею H+ в startup-формате.", status: "Начато" },
        { label: "03", title: "7 месяцев изучения рынка", desc: "Команда изучила проблемы клиник: запись, очереди, документы, история пациента, analytics и интеграции, после чего выделила основные направления H+.", status: "Готово" },
        { label: "04", title: "Продуктовая архитектура и prototype", desc: "Формируется структура продукта и prototype-направление: панель клиники, приложение пациента, EHR, умная очередь, Analytics & AI и интеграции.", status: "В процессе" },
        { label: "05", title: "Разработка пилота", desc: "Следующий этап - собрать ключевые функции в MVP scope и подготовить продукт к реальным пилотным тестам с выбранными клиниками.", status: "В процессе" }
      ]
    },
    values: {
      title: "Во что мы верим?",
      subtitle: "Команда H+ видит продукт не просто как software, а как новую инфраструктуру для медицины региона.",
      items: [
        { title: "Простота", desc: "Создавать не сложную систему, а понятный и удобный продукт для клиник и пациентов." },
        { title: "Адаптация к региону", desc: "H+ должен соответствовать языкам, привычкам и реальным рабочим процессам клиник Центральной Азии." },
        { title: "Прозрачность", desc: "Не скрывать, что проект находится на стадии pre-MVP, и ясно показывать следующие этапы." },
        { title: "Большая цель", desc: "Изменить HealthTech-экосистему и в долгосрочной перспективе построить компанию уровня unicorn." }
      ]
    },
    disclaimer: {
      title: "Прозрачный статус",
      desc: "H+ пока не является готовым MVP или live-продуктом. Страница Company отражает реальный состав команды, мотивацию проекта, продуктовую архитектуру и этап разработки пилота."
    }
  },
  pricing: {
    eyebrow: "Rejalashtirilayotgan tarif modeli",
    statusBadge: "Pre-MVP / pilotga tayyorgarlik",
    headline: "H+ tariflari MVP va pilot natijalaridan keyin yakuniy shakllanadi",
    subheadline: "H+ hali tayyor MVP emas. Shu sababli hozirgi tariflar aniq sotuv narxlari emas, balki klinikalar bilan pilot scope, modullar va integratsiya ehtiyojlariga qarab shakllanadigan rejalashtirilayotgan modeldir.",
    notice: {
      title: "Shaffof pricing holati",
      desc: "Hozir H+ ommaviy subscription orqali sotilmaydi. Pilot shartlari klinika hajmi, tanlangan modullar, foydalanuvchilar soni va texnik integratsiya murakkabligiga qarab alohida kelishiladi."
    },
    cta: "Pilot bo'yicha bog'lanish",
    recommended: "Tavsiya etiladi",
    plans: {
      pilotPrep: {
        name: "Pilot Preparation",
        price: "Kelishuv asosida",
        desc: "MVPdan oldin klinika jarayonlarini o'rganish, pilot scope va texnik talablarni aniqlash uchun.",
        features: ["Klinika jarayonlarini tahlil qilish", "MVP uchun zarur modullarni tanlash", "Foydalanuvchi rollari va workflow xaritasi", "Pilot texnik talablarini tayyorlash", "Integratsiya ehtiyojlarini baholash"]
      },
      clinicPilot: {
        name: "MVP Clinic Pilot",
        price: "Pilot shartnomasi asosida",
        desc: "MVP tayyor bo'lgach, tanlangan klinika bilan real ish jarayonida sinovdan o'tkazish uchun.",
        features: ["Onlayn bron va aqlli navbat", "Klinika paneli va asosiy EHR oqimi", "Bemor ilovasi yoki web access konsepti", "Asosiy analitika paneli", "Pilot davomida feedback va iteratsiya"]
      },
      enterprise: {
        name: "Network / Enterprise",
        price: "Individual",
        desc: "Ko'p filialli klinikalar, laboratoriya, dorixona, sug'urta yoki katta hamkorlik integratsiyalari uchun.",
        features: ["Filiallar va rollar bo'yicha kengaytirilgan model", "Laboratoriya, dorixona yoki sug'urta integratsiya scope", "Xavfsizlik va auditga tayyor arxitektura yondashuvi", "Individual onboarding va texnik reja", "MVPdan keyingi subscription modelini birga shakllantirish"]
      }
    },
    factors: {
      title: "Narx nimaga bog'liq bo'ladi?",
      subtitle: "H+ narxlari yakuniy emas. Pilot va MVP bosqichlarida narx quyidagi omillarga qarab shakllanadi.",
      items: [
        { title: "Klinika hajmi", desc: "Shifokorlar, administratorlar, filiallar va bemor oqimi qancha katta bo'lsa, scope ham shunga moslashadi." },
        { title: "Tanlangan modullar", desc: "Bron, navbat, EHR, bemor ilovasi, analitika va integratsiyalar alohida bosqichlarda joriy qilinishi mumkin." },
        { title: "Integratsiya murakkabligi", desc: "Laboratoriya, dorixona, sug'urta yoki mavjud ichki tizimlar bilan ulanish alohida baholanadi." },
        { title: "Pilot muddati", desc: "Sinov davomiyligi, feedback sikllari va texnik qo'llab-quvvatlash narxga ta'sir qiladi." }
      ]
    },
    disclaimer: {
      title: "Muhim eslatma",
      desc: "Bu sahifadagi tariflar yakuniy tijoriy narxlar emas. H+ hali pre-MVP bosqichida va pricing modeli MVP hamda pilot natijalaridan keyin aniqlashtiriladi."
    }
  },
  investorsEnDraftUnused: {
    eyebrow: "Investor brief",
    statusBadge: "Pre-MVP / pilot in development",
    headline: "H+ is HealthTech infrastructure being built for Central Asia",
    subheadline: "H+ is building a healthcare operating system for private clinics, doctors, and patients. The project is not an MVP yet, but the market research, product architecture, and pilot direction have been formed.",
    opportunity: {
      title: "Investor opportunity",
      desc: "Private healthcare in Central Asia needs digitization: booking, queues, patient history, clinic operations, analytics, and integrations are often handled manually or through fragmented systems. H+ aims to bring these workflows into one ecosystem."
    },
    stage: {
      title: "Current stage",
      value: "Pre-MVP",
      desc: "H+ is currently at the concept, product architecture, prototype direction, and pilot development stage. The next goal is to finalize the MVP scope and start real pilot testing with clinics."
    },
    thesis: {
      title: "Investment thesis",
      desc: "H+ does not claim revenue or traction at this stage. The core investor thesis is the opportunity to build a localized, multi-module, integration-ready HealthTech OS for private clinics in the region.",
      points: [
        { title: "Large but fragmented market", desc: "Clinics often run workflows through calls, chats, Excel, paper, or disconnected tools." },
        { title: "Patient experience is changing", desc: "Patients increasingly expect online booking, queue status, results, and reminders on their phone." },
        { title: "Local adaptation matters", desc: "H+ is being built around the languages, habits, and real operating workflows of Uzbekistan and Central Asia." },
        { title: "Platform approach", desc: "The goal is not just a CRM, but a system that connects clinic dashboard, patient app, EHR, analytics, and integrations." }
      ]
    },
    funding: {
      title: "Funding direction",
      targetLabel: "Investment stage",
      targetValue: "Pre-seed / strategic investor conversations",
      targetDesc: "H+ is not currently a public investment offering. Investor conversations are focused on shaping the MVP, pilot scope, team, and technical infrastructure.",
      allocationTitle: "Use of funds model"
    },
    useOfFunds: {
      product: { title: "Product and MVP development", percentage: "40%", desc: "Developing the MVP scope across clinic dashboard, patient app, EHR, smart queue, analytics, and core integrations." },
      pilot: { title: "Pilot and clinic validation", percentage: "25%", desc: "Preparing pilot scenarios with selected clinics, workflow analysis, feedback cycles, and testing in real operations." },
      team: { title: "Team strengthening", percentage: "25%", desc: "Bringing in frontend, backend, mobile, product, UX, and clinic workflow specialists." },
      legal: { title: "Security, legal, and operational readiness", percentage: "10%", desc: "Preparing data security approach, audit-ready architecture, documentation, agreements, and operational workflows." }
    },
    milestones: {
      title: "Next investor milestones",
      subtitle: "This is not a revenue forecast. These are practical steps to bring H+ toward MVP and pilot validation.",
      items: [
        { label: "01", title: "Finalize MVP scope", desc: "Select the minimal pilot-critical functions: booking, queue, clinic dashboard, basic EHR, and patient access.", status: "Next step" },
        { label: "02", title: "Build the technical MVP", desc: "Bring frontend, backend, mobile, and core data structure to a pilot-ready level.", status: "Planned" },
        { label: "03", title: "Clinic pilot scenarios", desc: "Define real workflows, roles, data, and integration needs together with selected clinics.", status: "Planned" },
        { label: "04", title: "Pilot test and feedback", desc: "Once the MVP is ready, test it in real clinic operations and iterate based on feedback.", status: "Planned" },
        { label: "05", title: "Post-pilot pricing and GTM", desc: "After pilot results, clarify pricing, onboarding, support, and go-to-market model.", status: "Next step" }
      ]
    },
    risks: {
      title: "Transparent risks",
      subtitle: "H+ is shown transparently: the opportunity is significant, but the project is still early-stage.",
      items: [
        { title: "MVP is not ready yet", desc: "H+ is not a publicly operating product yet. The first key stage is to develop the MVP and test it in clinic workflows." },
        { title: "Integrations will be phased", desc: "Laboratory, pharmacy, insurance, and e-health integrations will not launch immediately; they will follow pilot and technical readiness." },
        { title: "Market numbers need validation", desc: "TAM/SAM/SOM and pricing model should be clarified through pilot results, clinic feedback, and separate source validation." }
      ]
    },
    disclaimer: {
      title: "Important note",
      desc: "This page is not an investment offer or financial advice. H+ is still pre-MVP. Terms, valuation, equity, and round size are discussed individually with investors."
    },
    cta: "Start investor conversation"
  },
  investorsRuDraftUnused: {
    eyebrow: "Бриф для инвесторов",
    statusBadge: "Pre-MVP / пилот разрабатывается",
    headline: "H+ - HealthTech-инфраструктура для медицины Центральной Азии",
    subheadline: "H+ создает медицинскую операционную систему для частных клиник, врачей и пациентов. Проект пока не является MVP, но анализ рынка, продуктовая архитектура и пилотное направление уже сформированы.",
    opportunity: {
      title: "Инвестиционная возможность",
      desc: "Частная медицина Центральной Азии нуждается в цифровизации: запись, очереди, история пациента, управление клиникой, аналитика и интеграции часто ведутся вручную или в разрозненных системах. H+ стремится объединить эти процессы в одну экосистему."
    },
    stage: {
      title: "Текущая стадия",
      value: "Pre-MVP",
      desc: "H+ находится на стадии concept, product architecture, prototype direction и pilot development. Следующая цель - финализировать MVP scope и начать реальные пилотные тесты с клиниками."
    },
    thesis: {
      title: "Инвестиционный тезис",
      desc: "H+ не заявляет revenue или traction на текущем этапе. Главный тезис для инвестора - возможность построить локализованную, многомодульную и integration-ready HealthTech OS для частных клиник региона.",
      points: [
        { title: "Большой, но разрозненный рынок", desc: "Клиники часто ведут процессы через звонки, чаты, Excel, бумагу или несвязанные между собой программы." },
        { title: "Пациентский опыт меняется", desc: "Пациенты ожидают онлайн-запись, статус очереди, результаты и напоминания в телефоне." },
        { title: "Локальная адаптация важна", desc: "H+ строится с учетом языков, привычек и реальных рабочих процессов Узбекистана и Центральной Азии." },
        { title: "Платформенный подход", desc: "Цель - не просто CRM, а система, объединяющая панель клиники, приложение пациента, EHR, аналитику и интеграции." }
      ]
    },
    funding: {
      title: "Направление привлечения средств",
      targetLabel: "Инвестиционная стадия",
      targetValue: "Pre-seed / strategic investor conversations",
      targetDesc: "H+ сейчас не является публичным инвестиционным предложением. Обсуждения с инвесторами ведутся для формирования MVP, pilot scope, команды и технической инфраструктуры.",
      allocationTitle: "Модель использования средств"
    },
    useOfFunds: {
      product: { title: "Разработка продукта и MVP", percentage: "40%", desc: "Разработка MVP scope по направлениям: панель клиники, приложение пациента, EHR, умная очередь, analytics и базовые интеграции." },
      pilot: { title: "Пилот и валидация с клиниками", percentage: "25%", desc: "Подготовка pilot-сценариев с выбранными клиниками, workflow-анализ, feedback-циклы и тестирование в реальных процессах." },
      team: { title: "Усиление команды", percentage: "25%", desc: "Привлечение специалистов по frontend, backend, mobile, product, UX и клиническим процессам." },
      legal: { title: "Безопасность, юридическая и операционная подготовка", percentage: "10%", desc: "Подготовка data security подхода, audit-ready architecture, документов, договоров и операционных процессов." }
    },
    milestones: {
      title: "Следующие investor milestones",
      subtitle: "Это не revenue forecast. Это практические этапы вывода H+ к MVP и пилоту.",
      items: [
        { label: "01", title: "Финализировать MVP scope", desc: "Выбрать минимальные функции для пилота: запись, очередь, панель клиники, базовый EHR и patient access.", status: "Следующий этап" },
        { label: "02", title: "Разработка технического MVP", desc: "Довести frontend, backend, mobile и основную структуру данных до уровня, пригодного для пилота.", status: "В плане" },
        { label: "03", title: "Пилотные сценарии с клиниками", desc: "Определить реальные workflow, роли, данные и интеграционные потребности вместе с выбранными клиниками.", status: "В плане" },
        { label: "04", title: "Pilot test и feedback", desc: "После готовности MVP протестировать продукт в реальных процессах клиники и провести итерации.", status: "В плане" },
        { label: "05", title: "Post-pilot pricing и GTM", desc: "После результатов пилота уточнить pricing, onboarding, support и go-to-market модель.", status: "Следующий этап" }
      ]
    },
    risks: {
      title: "Прозрачные риски",
      subtitle: "Статус H+ показывается открыто: возможность большая, но проект находится на ранней стадии.",
      items: [
        { title: "MVP еще не готов", desc: "H+ пока не является публично работающим продуктом. Первый важный этап - разработать MVP и протестировать его в клинических workflow." },
        { title: "Интеграции будут поэтапными", desc: "Лаборатории, аптеки, страхование и e-health интеграции не запускаются сразу, а реализуются после пилота и технической подготовки." },
        { title: "Рыночные цифры требуют валидации", desc: "TAM/SAM/SOM и pricing model будут уточняться через pilot results, clinic feedback и отдельную проверку источников." }
      ]
    },
    disclaimer: {
      title: "Важное примечание",
      desc: "Эта страница не является инвестиционным предложением или финансовой консультацией. H+ находится на стадии pre-MVP. Условия, valuation, equity и размер round обсуждаются индивидуально с инвестором."
    },
    cta: "Начать разговор с инвестором"
  },
  company: {
    eyebrow: "Kompaniya",
    statusBadge: "Pre-MVP / pilot ishlab chiqilmoqda",
    headline: "H+ - Markaziy Osiyo tibbiyoti uchun qurilayotgan yangi avlod HealthTech loyihasi",
    subheadline: "Biz xususiy klinikalar, shifokorlar va bemorlar uchun yagona tibbiy operatsion tizim yaratmoqdamiz. H+ hali MVP emas, lekin konsepsiya, mahsulot arxitekturasi, bozor tahlili va pilot yo'nalishi shakllangan.",
    mission: { title: "Missiyamiz", desc: "Markaziy Osiyoda klinika, shifokor va bemor o'rtasidagi tarqoq jarayonlarni yagona, tushunarli va xavfsiz raqamli ekotizimga birlashtirish." },
    vision: { title: "Vizyonimiz", desc: "HealthTech yo'nalishida mintaqa sharoitiga mos, oddiy va ishonchli tibbiy infratuzilma yaratish hamda uzoq muddatda unicorn darajasidagi kompaniyaga aylanish." },
    team: {
      eyebrow: "Asosiy jamoa",
      title: "H+ ni qurayotgan jamoa",
      subtitle: "Jamoa product strategy, operations, full-stack thinking, Flutter mobile development, AI vositalar va xalqaro advisor tajribasini birlashtiradi.",
      members: {
        islombek: { name: "Islombek Aliyev", role: "Founder & Product/Strategy Lead", initials: "IA", imageAlt: "Islombek Aliyev rasmi", bio: "H+ konsepsiyasi, product strategy, dizayn yo'nalishi va HealthTech ekotizimi vizyoni ustida ishlaydigan founder. Dasturlash, raqamlar bilan ishlash, davlat jarayonlari va Rossiya bozoridagi freelancing tajribasiga ega." },
        davron: { name: "Davron Ramazonov", role: "Founder & Operations/Technical Lead", initials: "DR", imageAlt: "Davron Ramazonov rasmi", bio: "17 yoshidan startup olamiga kirgan founder. H+ loyihasida operations, technical concept, bozor tahlili, AI asosidagi yechimlar va pilot yo'nalishini shakllantirish ustida ishlaydi." },
        ulugbek: { name: "Ulugbek Ubaydullayev", role: "Flutter Developer / Mobile Specialist", initials: "UU", imageAlt: "Ulugbek Ubaydullayev rasmi", bio: "Flutter dasturchi va mobil mutaxassis. 7 ta loyihada ishlagan, taxi yo'nalishidagi loyiha ustida 7 oydan beri mustaqil ishlab kelmoqda. H+ bemor ilovasi va mobile experience yo'nalishiga fokus qiladi." },
        luciano: { name: "Luciano Freitas", role: "Lead Advisor", initials: "LF", imageAlt: "Luciano Freitas rasmi", bio: "H+ jamoasiga growth, brand, leadership, business model va startup strategy yo'nalishlarida maslahat beruvchi xalqaro advisor. Uber, Airbnb, Hotmart, BX Blue va Facily kabi kompaniyalar bilan bog'liq tajribaga ega." }
      }
    },
    founderStory: {
      eyebrow: "Founder story",
      title: "H+ qanday boshlangan?",
      subtitle: "H+ bir kunda paydo bo'lgan g'oya emas. Loyiha 7 oy davomida bozor, klinika jarayonlari, bemor tajribasi va Markaziy Osiyo sharoitini chuqur o'rganish orqali shakllangan.",
      islombek: { title: "Islombek Aliyev - product vision va strategik fikrlash", desc: "Islombek Farg'onada tug'ilgan, Xalqaro Koreys Universitetida tahsil olgan va davlat tizimi, jumladan tuman hokimiyati bilan bog'liq ish jarayonlarida tajriba orttirgan. U taxminan bir yarim yil dasturlash bo'yicha freelancing qilgan va Rossiya bozorida ishlagan. H+ loyihasida u product vision, strategiya, dizayn yo'nalishi va tibbiyot ekotizimi qanday ishlashi kerakligi ustida ishlaydi." },
      davron: { title: "Davron Ramazonov - operations, technical thinking va tez o'rganuvchi founder", desc: "Davron 17 yoshida startup olamiga kirib kelgan. U Tashkent viloyatidagi politexnikumda tahsil olgan, 2022-yilda full-stack dasturlashni tugatgan va o'z ustida mustaqil ishlashda davom etmoqda. Islombek bilan 2025-yil oktabr oyida tanishgan, keyinchalik UzCombinator intensiv muhiti orqali hamkorlik yanada kuchaygan. Ular H+ ustida 7 oy davomida bozor, mahsulot, klinika ehtiyojlari va pilot modelini chuqur o'ylab ishlab kelmoqda. Davron AI tizimlari, davlat uchun loyiha konseptlari, taxometer yo'nalishidagi loyihalar va AI vositalar bilan ishlash tajribasiga ega." }
    },
    journey: {
      eyebrow: "Loyiha yo'li",
      title: "Pre-MVP bosqichidan pilotga qarab",
      subtitle: "H+ hozir tayyor mahsulot emas. Loyiha tartibli ravishda MVP va real pilot sinovlari tomon olib borilmoqda.",
      items: [
        { label: "01", title: "Founderlar tanishuvi", desc: "Islombek va Davron 2025-yil oktabr oyida tanishib, Markaziy Osiyo tibbiyot bozoridagi tarqoq jarayonlar haqida birgalikda o'ylay boshladi.", status: "Boshlangan" },
        { label: "02", title: "UzCombinator muhiti", desc: "2025-yil dekabr oyida boshlangan UzCombinator intensiv dasturi founderlar hamkorligini kuchaytirib, H+ g'oyasini startup formatida aniqroq shakllantirishga yordam berdi.", status: "Boshlangan" },
        { label: "03", title: "7 oylik bozor o'rganish", desc: "Jamoa klinikalardagi bron, navbat, hujjatlar, bemor tarixi, analytics va integratsiya muammolarini o'rganib, H+ ning asosiy yo'nalishlarini ajratdi.", status: "Tayyor" },
        { label: "04", title: "Mahsulot arxitekturasi va prototype", desc: "Klinika paneli, bemor ilovasi, EHR, aqlli navbat, Analytics & AI va integratsiyalar bo'yicha mahsulot strukturasi hamda prototype yo'nalishi shakllantirilmoqda.", status: "Jarayonda" },
        { label: "05", title: "Pilot ishlab chiqish", desc: "Keyingi bosqich - asosiy funksiyalarni MVP scope ichida yig'ish va tanlangan klinikalar bilan real pilot sinovlariga tayyorlash.", status: "Jarayonda" }
      ]
    },
    values: {
      title: "Biz nimaga ishonamiz?",
      subtitle: "H+ jamoasi mahsulotni shunchaki dastur emas, mintaqa tibbiyoti uchun yangi infratuzilma sifatida ko'radi.",
      items: [
        { title: "Oddiylik", desc: "Klinika va bemor uchun murakkab tizim emas, tushunarli va ishlatishga oson mahsulot qurish." },
        { title: "Mintaqaga moslashish", desc: "H+ Markaziy Osiyo klinikalari, tillari, odatlari va real ish jarayonlariga mos bo'lishi kerak." },
        { title: "Shaffoflik", desc: "Loyiha hali pre-MVP bosqichida ekanini yashirmasdan, keyingi bosqichlarni aniq ko'rsatish." },
        { title: "Katta maqsad", desc: "HealthTech ekotizimini o'zgartirish va uzoq muddatda unicorn darajasidagi kompaniya qurish." }
      ]
    },
    disclaimer: {
      title: "Shaffof holat",
      desc: "H+ hali tayyor MVP yoki live mahsulot emas. Company sahifasi jamoaning real tarkibi, loyiha motivatsiyasi, mahsulot arxitekturasi va pilot ishlab chiqish bosqichini ifodalaydi."
    }
  },
  demoModal: {
    title: "Aloqa so'rovi",
    subtitle: "H+ hozir pre-MVP bosqichida. Klinikalar, advisorlar va investorlar bilan suhbatlar uchun aloqa qoldiring.",
    fullName: "Ism va familiya",
    email: "Email",
    orgName: "Tashkilot yoki klinika",
    role: "Rolingiz",
    country: "Davlat",
    message: "Qisqa izoh",
    submitSuccess: "So'rovingiz qabul qilindi. H+ jamoasi imkon qadar tez bog'lanadi.",
    submitError: "Iltimos, majburiy maydonlarni to'ldiring."
  },
  footer: {
    desc: "Pre-MVP healthcare infrastructure startup building for clinics, doctors and patients in Central Asia.",
    rights: "All rights reserved.",
    company: "Kompaniya",
    legal: "Huquqiy",
    contact: "Aloqa",
    privacy: "Maxfiylik",
    terms: "Shartlar",
    address: "Tashkent, Uzbekistan."
  }
};

const en = {
  ...uz,
  common: {
    ...uz.common,
    demoBtn: "Request Contact",
    partnerBtn: "Investor Info",
    learnMore: "Learn More",
    submit: "Submit",
    submitting: "Submitting...",
    close: "Close",
    contactUs: "Contact Us",
    countries: "Market Strategy",
    audience: "Target Audience",
    success: "Received",
    activeItem: "Current",
    nextItem: "Planned",
    leadership: "TEAM & ADVISOR",
    checkSolutions: "View tailored solutions",
    connectCloudHeadline: "Infrastructure for clinics, doctors and patients",
    connectCloudDesc: "H+ is building a unified workflow layer for private healthcare operations across Central Asia.",
    enforcingCompliance: "Regulatory and ecosystem alignment",
  },
  nav: { product: "Product", solutions: "Solutions", market: "Market", traction: "Status", pricing: "Pricing", company: "Company", investors: "Investors" },
  hero: {
    badge: "Pre-MVP healthtech infrastructure startup",
    headline: "Building healthcare infrastructure for Central Asia",
    subheadline: "H+ is an early-stage platform focused on digitizing operational workflows for private clinics, doctors and patients.",
    trustedClinics: "H+ is currently pre-MVP",
    stats: uz.hero.stats
  },
  product: {
    headline: "H+ - the healthcare OS for clinics and patients",
    subheadline: "Online booking, smart queue management, clinic operations, patient app, EHR, analytics, and integrations inside one secure ecosystem.",
    modules: {
      queue: {
        title: "Smart booking & queue",
        desc: "Patients book online while clinics manage appointment flow in real time. Reminders help reduce delays, no-shows, and cancellations.",
        benefits: ["Online booking and check-in", "SMS/Telegram reminders", "Queue and room-load visibility"]
      },
      clinic: {
        title: "Clinic dashboard",
        desc: "One operating panel for administrators, doctors, and managers to control queues, staff, payments, inventory, and reporting.",
        benefits: ["Queues, staff, and billing in one place", "Branch-level performance metrics", "Inventory and service control"]
      },
      ehr: {
        title: "Medical records & EHR",
        desc: "A digital patient card for medical history, visits, prescriptions, lab files, and clinical documents.",
        benefits: ["Patient history stays organized", "Lab files and documents are attached", "Less paperwork for the clinic"]
      },
      ai: {
        title: "Analytics & AI",
        desc: "An intelligent analytics layer for clinic load, revenue, patient retention, and operational performance.",
        benefits: ["Revenue and retention analytics", "Load forecasting", "Clear reports for leadership"]
      },
      app: {
        title: "Patient app",
        desc: "Patients choose a doctor, book visits, track the queue, access lab results, and communicate with the clinic.",
        benefits: ["Booking in a few taps", "Fast QR/ID identification", "Results and reminders on the phone"]
      },
      integrations: {
        title: "Integrations",
        desc: "An API-ready approach for laboratories, pharmacies, insurance workflows, and future public e-health integrations.",
        benefits: ["LIS and laboratory exchange", "Pharmacy and inventory flows", "Structure for insurance workflows"]
      }
    },
    dashboardMockup: {
      searchPatient: "Search patient...",
      status: "Status",
      diagnose: "Visit history",
      waitingTime: "Average wait",
      waitingValue: "To validate",
      waitingNote: "Measured during MVP testing",
      queueHandled: "Today's appointments",
      queueValue: "Appointment flow",
      queueNote: "Concept data",
      nextToken: "Next token ID",
      nextTokenValue: "#H-UZ-182",
      nextTokenNote: "Linked to EHR",
      liveAiQueue: "Live queue balancer",
      checkedIn: "Checked in",
      calling: "Calling",
      roomLabel: "Room 4",
      revenueThisMonth: "Monthly revenue",
      revenueValue: "Measured in MVP",
      revenueNote: "Finance view",
      pharmacy: "Pharmacy inventory",
      inventoryItem1: "Medicine item A",
      inventoryItem1Value: "In stock",
      inventoryItem2: "Medicine item B",
      inventoryItem2Value: "Low stock",
      occupancyRate: "Clinic load",
      occupancyValue: "Forecast",
      occupancyLabel: "Sample load",
      patientAge: "Age: 42 - Male - Tashkent",
      idLabel: "ID: DEMO-001",
      secureRecord: "Secure record",
      vitalSigns: "Vital signs",
      vitalValues: "72 bpm - 36.6 C",
      diagnoseCode: "Latest visit note",
      chronicCondition: "Visit history",
      predictiveEngine: "AI-assisted analytics for leadership",
      mondayForecast: "The AI module does not replace clinical decisions; it helps show clinic load, revenue, and operational performance clearly.",
      diagnosisMatch: "Load forecast",
      insightVal: "Operational insight",
      insightDesc: "No clinical diagnosis claim",
      timeSaved: "Leadership report",
      hrsPerDay: "Clear dashboard",
      perPhysician: "for decision-making",
      today: "Today",
      todayAppointment: "Today appointment",
      appAppointment: "15:30 - Dr. S. Kamalova",
      labName: "Independent lab",
      pharmacyName: "Pharmacy flow",
      insuranceName: "Insurance workflow",
      coreApi: "H+ Core API",
      syncing: "Planned",
      realtimeClaim: "API structure",
      apiDesc: "H+ is designed to connect laboratory, pharmacy, and insurance workflows through an API-ready approach for future e-health integrations.",
      osVersion: "H+ OS - MVP"
    },
    workflow: {
      title: "How does the product work?",
      steps: [
        "The patient books through the app or web",
        "The clinic dashboard manages queues and resources",
        "The doctor views patient history through EHR",
        "Leadership tracks revenue, load, and growth through analytics"
      ]
    }
  },
  solutions: {
    eyebrow: "H+ solutions",
    headline: "One healthcare ecosystem for every participant",
    subheadline: "H+ connects clinics, doctors, patients, laboratories, pharmacies, insurance workflows, and future e-health integrations inside one secure operating system.",
    cards: {
      clinics: {
        title: "Private clinics",
        tag: "Operational control",
        desc: "Clinics manage appointments, queues, staff, payments, inventory, and reporting through one operating panel.",
        bullets: ["Online booking and smart queue", "Branch-level performance metrics", "Revenue, services, and inventory control"]
      },
      doctors: {
        title: "Doctors",
        tag: "Less paperwork",
        desc: "Doctors access patient history, visits, prescriptions, and lab files inside a structured digital medical record.",
        bullets: ["Patient history through EHR", "Prescription and document templates", "Personal schedule and visit management"]
      },
      patients: {
        title: "Patients",
        tag: "Better care experience",
        desc: "Patients choose a doctor, book a visit, track the queue, receive results, and communicate with the clinic.",
        bullets: ["Booking in a few taps", "Queue status and reminders on the phone", "Lab results and documents in one place"]
      },
      partners: {
        title: "Labs, pharmacies, and insurance",
        tag: "Integration-ready",
        desc: "H+ offers an API-ready approach for data exchange, orders, results, and billing workflows with external services.",
        bullets: ["Laboratory result connections", "Pharmacy and inventory flows", "Structure for insurance workflows"]
      },
      government: {
        title: "Government and e-health systems",
        tag: "Audit-ready architecture",
        desc: "H+ can be adapted for future public e-health integrations, anonymized statistical reporting, and audit-ready data architecture.",
        bullets: ["Role-based access", "Audit logs and security-first approach", "Future e-health API integrations"]
      }
    },
    workflow: {
      title: "Problem -> H+ solution -> Result",
      subtitle: "H+ turns fragmented healthcare workflows into one manageable operating flow.",
      labels: { problem: "Problem", solution: "H+ solution", result: "Result" },
      items: [
        { problem: "Bookings are scattered across calls, chats, and administrators.", solution: "H+ brings booking, check-in, and queue management into one flow.", result: "Clinics see appointments and load in real time." },
        { problem: "Patient history stays on paper or in disconnected files.", solution: "EHR keeps visits, prescriptions, and lab results structured.", result: "Doctors find the right information faster." },
        { problem: "Labs, pharmacies, and insurance workflows run separately.", solution: "The H+ API approach prepares the platform for external service connections.", result: "Data exchange and billing workflows become more organized." },
        { problem: "Leadership sees clinic load and financial indicators too late.", solution: "Analytics & AI brings operational metrics into a clear dashboard.", result: "Management decisions rely on better data." }
      ]
    },
    banner: {
      eyebrow: "Unified healthcare infrastructure",
      title: "H+ manages the clinic not as a basic CRM, but as a full operating system",
      desc: "The platform brings daily clinic operations, patient experience, and external integrations into one secure ecosystem."
    }
  },
  market: {
    eyebrow: "Market opportunity",
    headline: "Central Asia's private healthcare market is moving toward digital operating systems",
    subheadline: "H+ starts with Uzbekistan and can later adapt to Kazakhstan, Kyrgyzstan, Tajikistan, and Turkmenistan as regional markets develop.",
    estimateNote: "Market figures are based on publicly available data and conservative internal planning. Because each country defines private clinics/providers differently, the figures should be interpreted as estimates or public indicators, not as a single unified official dataset.",
    population: "Population",
    privateClinics: "Private clinics / providers",
    annualGrowth: "Annual growth",
    confidence: "Data confidence",
    marketReadiness: "Market readiness",
    mapLabel: "Central Asia map with real borders",
    profileLabel: "Market profile",
    opportunityLabel: "Opportunity",
    dataNoteLabel: "Data note",
    countriesData: {
      uzbekistan: { name: "Uzbekistan", mapName: "Uzbekistan", desc: "The initial market for H+. Private healthcare is expanding quickly, clinic counts have grown, and demand for digitized workflows is increasing.", popVal: "37M+", privateClinicsVal: "9,000+", growthVal: "~10-15%", confidenceVal: "High", digitVal: "Growth stage", opportunity: "Best fit for pilot validation and first commercial deployment.", dataNote: "Public sources report growth from around 3,200 private clinics in 2016 toward an expected 8,700 by end-2026, while more than 1,300 private clinics received licenses in 2025." },
      kazakhstan: { name: "Kazakhstan", mapName: "Kazakhstan", desc: "A higher purchasing-power regional market where private providers are more actively entering state-funded and insurance-linked healthcare systems.", popVal: "20M+", privateClinicsVal: "1,200+", growthVal: "~7% CAGR", confidenceVal: "Medium", digitVal: "Medium", opportunity: "Strong market for the next stage of regional expansion.", dataNote: "Publicly available data is stronger for private providers participating in the state-funded / insurance system than for all private clinics. Use this as documented provider-count data, not as total private clinic count." },
      kyrgyzstan: { name: "Kyrgyzstan", mapName: "Kyrgyzstan", desc: "A smaller but flexible market where private clinics are moving through digitization and regulatory alignment.", popVal: "7M+", privateClinicsVal: "540+ inspected", growthVal: "N/A", confidenceVal: "Low-Medium", digitVal: "Low", opportunity: "Suitable for lightweight integration and partnership models.", dataNote: "Open data does not provide a clean national private-clinic time series. 2025 inspection data covered 541 private medical/pharmaceutical organizations, so this is shown as an inspected-market indicator, not a full market count." },
      tajikistan: { name: "Tajikistan", mapName: "Tajikistan", desc: "A market with strong need for digital healthcare and a private sector that is gradually expanding.", popVal: "10M+", privateClinicsVal: "900", growthVal: "~12% recent", confidenceVal: "Medium", digitVal: "Low", opportunity: "Long-term expansion and infrastructure-building opportunity.", dataNote: "Public reporting indicates growth from 801+ private medical institutions in 2024 to around 900 in 2025. Long-term growth from 2012 is closer to low single digits, so the trend should not be overstated." },
      turkmenistan: { name: "Turkmenistan", mapName: "Turkmenistan", desc: "A more closed and state-controlled market where public information on the private healthcare sector is limited.", popVal: "6M+", privateClinicsVal: "Limited data", growthVal: "N/A", confidenceVal: "Low", digitVal: "Very low", opportunity: "A long-term observation market for a cautious regional strategy.", dataNote: "Reliable public clinic-count data is not available. Public sources describe the private healthcare sector as very small or limited. Do not invent a number." }
    },
    drivers: {
      title: "Why now?",
      subtitle: "H+ enters the market as clinics focus more on operational efficiency, patient experience, and integrations.",
      items: [
        { title: "Private clinics are growing", desc: "Clinics need one tool to manage branches, services, and patient flow." },
        { title: "Patients expect digital convenience", desc: "Online booking, queue status, reminders, and results on the phone are becoming the new standard." },
        { title: "Workflows are still fragmented", desc: "Many clinics still run calls, chats, Excel, paper, and separate tools that do not connect." },
        { title: "Integration demand is rising", desc: "Data exchange with laboratories, pharmacies, insurance, and future e-health systems is becoming more important." }
      ]
    }
  },
  traction: {
    eyebrow: "Project status",
    statusBadge: "Pre-MVP stage",
    headline: "H+ is not an MVP yet - it is a healthcare OS preparing for pilot validation",
    subheadline: "H+ is currently at the concept, product architecture, core module definition, and pilot preparation stage. The next goal is a working MVP and real pilot testing with clinics.",
    statusNote: "Current status: concept + prototype + pilot preparation. The product is not publicly available yet.",
    metrics: {
      concept: { title: "Concept defined", desc: "H+ positioning, problem, solution, market, and core product modules have been defined." },
      architecture: { title: "Architecture direction set", desc: "The product structure is being shaped across clinic dashboard, patient app, EHR, smart queue, Analytics & AI, and integrations." },
      prototype: { title: "Prototype stage", desc: "The web presentation, UI direction, and core user flows are being developed." },
      pilot: { title: "Pilot preparation", desc: "Pilot scenarios, technical requirements, and MVP scope are being clarified for clinic testing." }
    },
    progress: {
      headline: "Step-by-step progress",
      subtitle: "H+ is not a finished product yet. The project is being moved toward MVP and pilot validation in a structured way.",
      items: [
        { label: "01", title: "Problem and market defined", desc: "Core clinic pain points have been identified: booking, queues, paperwork, fragmented systems, and patient experience.", status: "Done" },
        { label: "02", title: "Product scope is being shaped", desc: "Online booking, smart queue, clinic dashboard, patient app, EHR, analytics, and integrations are being selected for the MVP scope.", status: "In progress" },
        { label: "03", title: "Prototype and UI direction", desc: "The website, pitch deck, and interface concept are helping clarify how H+ should work visually and functionally.", status: "In progress" },
        { label: "04", title: "MVP development", desc: "The next stage is to turn the core functionality into a minimal working product.", status: "Planned" },
        { label: "05", title: "Clinic pilot testing", desc: "Once the MVP is ready, it will be tested in real workflows with selected clinics.", status: "Planned" }
      ]
    },
    validation: {
      headline: "Not traction yet - validation stage",
      subtitle: "This page should show the current preparation and validation status of H+, not imply that the product is already operating in the market.",
      items: [
        { title: "Clinic pain points are clear", desc: "The project targets real operational problems: queues, booking, documents, integrations, and management." },
        { title: "MVP scope is being built carefully", desc: "The first version will include only what is necessary for pilot testing, avoiding unnecessary complexity." },
        { title: "Technical clarity is needed before pilot", desc: "Clinic workflows, roles, data security, and integration requirements should be clarified before deployment." }
      ]
    },
    disclaimer: {
      title: "Transparent status",
      desc: "H+ is not a finished MVP or publicly operating product yet. The current website content represents the project concept, planned product architecture, and pilot preparation stage."
    }
  },
  pricing: {
    eyebrow: "Planned pricing model",
    statusBadge: "Pre-MVP / pilot preparation",
    headline: "H+ pricing will be finalized after MVP and pilot validation",
    subheadline: "H+ is not a finished MVP yet. The current pricing page should not show public commercial subscription prices. It should explain the planned model, shaped by pilot scope, selected modules, and integration requirements.",
    notice: {
      title: "Transparent pricing status",
      desc: "H+ is not currently sold as a mass subscription platform. Pilot terms are discussed individually based on clinic size, selected modules, user count, and technical integration complexity."
    },
    cta: "Discuss pilot",
    recommended: "Recommended",
    plans: {
      pilotPrep: {
        name: "Pilot Preparation",
        price: "By agreement",
        desc: "For studying clinic workflows, defining pilot scope, and clarifying technical requirements before MVP development.",
        features: ["Clinic workflow analysis", "Selection of MVP-critical modules", "User roles and workflow mapping", "Pilot technical requirements", "Integration needs assessment"]
      },
      clinicPilot: {
        name: "MVP Clinic Pilot",
        price: "Based on pilot agreement",
        desc: "For testing the MVP in real clinic workflows once the minimal product is ready.",
        features: ["Online booking and smart queue", "Clinic dashboard and basic EHR flow", "Patient app or web access concept", "Basic analytics dashboard", "Feedback and iteration during pilot"]
      },
      enterprise: {
        name: "Network / Enterprise",
        price: "Custom",
        desc: "For multi-branch clinic networks, laboratories, pharmacies, insurance workflows, or larger integration partnerships.",
        features: ["Expanded branch and role model", "Lab, pharmacy, or insurance integration scope", "Security-first and audit-ready architecture approach", "Individual onboarding and technical plan", "Joint post-MVP subscription model shaping"]
      }
    },
    factors: {
      title: "What will pricing depend on?",
      subtitle: "H+ pricing is not final yet. During pilot and MVP stages, pricing will depend on the following factors.",
      items: [
        { title: "Clinic size", desc: "The number of doctors, administrators, branches, and patient flow affects project scope." },
        { title: "Selected modules", desc: "Booking, queue, EHR, patient app, analytics, and integrations can be introduced step by step." },
        { title: "Integration complexity", desc: "Connecting laboratories, pharmacies, insurance, or existing internal systems is evaluated separately." },
        { title: "Pilot duration", desc: "Testing period, feedback cycles, and technical support affect pilot terms." }
      ]
    },
    disclaimer: {
      title: "Important note",
      desc: "The packages on this page are not final commercial prices. H+ is still pre-MVP, and the pricing model will be clarified after MVP development and pilot validation."
    }
  },
  investors: {
    eyebrow: "Investor brief",
    statusBadge: "Pre-MVP / pilot in development",
    headline: "H+ is HealthTech infrastructure being built for Central Asia",
    subheadline: "H+ is building a healthcare operating system for private clinics, doctors, and patients. The project is not an MVP yet, but the market research, product architecture, and pilot direction have been formed.",
    opportunity: {
      title: "Investor opportunity",
      desc: "Private healthcare in Central Asia needs digitization: booking, queues, patient history, clinic operations, analytics, and integrations are often handled manually or through fragmented systems. H+ aims to bring these workflows into one ecosystem."
    },
    stage: {
      title: "Current stage",
      value: "Pre-MVP",
      desc: "H+ is currently at the concept, product architecture, prototype direction, and pilot development stage. The next goal is to finalize the MVP scope and start real pilot testing with clinics."
    },
    thesis: {
      title: "Investment thesis",
      desc: "H+ does not claim revenue or traction at this stage. The core investor thesis is the opportunity to build a localized, multi-module, integration-ready HealthTech OS for private clinics in the region.",
      points: [
        { title: "Large but fragmented market", desc: "Clinics often run workflows through calls, chats, Excel, paper, or disconnected tools." },
        { title: "Patient experience is changing", desc: "Patients increasingly expect online booking, queue status, results, and reminders on their phone." },
        { title: "Local adaptation matters", desc: "H+ is being built around the languages, habits, and real operating workflows of Uzbekistan and Central Asia." },
        { title: "Platform approach", desc: "The goal is not just a CRM, but a system that connects clinic dashboard, patient app, EHR, analytics, and integrations." }
      ]
    },
    funding: {
      title: "Funding direction",
      targetLabel: "Investment stage",
      targetValue: "Pre-seed / strategic investor conversations",
      targetDesc: "H+ is not currently a public investment offering. Investor conversations are focused on shaping the MVP, pilot scope, team, and technical infrastructure.",
      allocationTitle: "Use of funds model"
    },
    useOfFunds: {
      product: { title: "Product and MVP development", percentage: "40%", desc: "Developing the MVP scope across clinic dashboard, patient app, EHR, smart queue, analytics, and core integrations." },
      pilot: { title: "Pilot and clinic validation", percentage: "25%", desc: "Preparing pilot scenarios with selected clinics, workflow analysis, feedback cycles, and testing in real operations." },
      team: { title: "Team strengthening", percentage: "25%", desc: "Bringing in frontend, backend, mobile, product, UX, and clinic workflow specialists." },
      legal: { title: "Security, legal, and operational readiness", percentage: "10%", desc: "Preparing data security approach, audit-ready architecture, documentation, agreements, and operational workflows." }
    },
    milestones: {
      title: "Next investor milestones",
      subtitle: "This is not a revenue forecast. These are practical steps to bring H+ toward MVP and pilot validation.",
      items: [
        { label: "01", title: "Finalize MVP scope", desc: "Select the minimal pilot-critical functions: booking, queue, clinic dashboard, basic EHR, and patient access.", status: "Next step" },
        { label: "02", title: "Build the technical MVP", desc: "Bring frontend, backend, mobile, and core data structure to a pilot-ready level.", status: "Planned" },
        { label: "03", title: "Clinic pilot scenarios", desc: "Define real workflows, roles, data, and integration needs together with selected clinics.", status: "Planned" },
        { label: "04", title: "Pilot test and feedback", desc: "Once the MVP is ready, test it in real clinic operations and iterate based on feedback.", status: "Planned" },
        { label: "05", title: "Post-pilot pricing and GTM", desc: "After pilot results, clarify pricing, onboarding, support, and go-to-market model.", status: "Next step" }
      ]
    },
    risks: {
      title: "Transparent risks",
      subtitle: "H+ is shown transparently: the opportunity is significant, but the project is still early-stage.",
      items: [
        { title: "MVP is not ready yet", desc: "H+ is not a publicly operating product yet. The first key stage is to develop the MVP and test it in clinic workflows." },
        { title: "Integrations will be phased", desc: "Laboratory, pharmacy, insurance, and e-health integrations will not launch immediately; they will follow pilot and technical readiness." },
        { title: "Market numbers need validation", desc: "TAM/SAM/SOM and pricing model should be clarified through pilot results, clinic feedback, and separate source validation." }
      ]
    },
    disclaimer: {
      title: "Important note",
      desc: "This page is not an investment offer or financial advice. H+ is still pre-MVP. Terms, valuation, equity, and round size are discussed individually with investors."
    },
    cta: "Start investor conversation"
  },
  company: {
    eyebrow: "Company",
    statusBadge: "Pre-MVP / pilot in development",
    headline: "H+ is a next-generation HealthTech project being built for Central Asia",
    subheadline: "We are building a healthcare operating system for private clinics, doctors, and patients. H+ is not an MVP yet, but the concept, product architecture, market research, and pilot direction have been formed.",
    mission: { title: "Our mission", desc: "To bring fragmented clinic, doctor, and patient workflows into one clear, secure, and accessible digital healthcare ecosystem for Central Asia." },
    vision: { title: "Our vision", desc: "To build a simple, reliable, region-adapted HealthTech infrastructure and grow it into a unicorn-level company in the long term." },
    team: {
      eyebrow: "Core team",
      title: "The team building H+",
      subtitle: "The team combines product strategy, operations, full-stack thinking, Flutter mobile development, AI tools, and international advisory support.",
      members: {
        islombek: { name: "Islombek Aliyev", role: "Founder & Product/Strategy Lead", initials: "IA", imageAlt: "Photo of Islombek Aliyev", bio: "Founder working on H+ concept, product strategy, design direction, and the vision for the HealthTech ecosystem. His background includes programming, working with numbers, government-process exposure, and freelancing for the Russian market." },
        davron: { name: "Davron Ramazonov", role: "Founder & Operations/Technical Lead", initials: "DR", imageAlt: "Photo of Davron Ramazonov", bio: "Founder who entered the startup world at 17. At H+, he works on operations, technical concept, market analysis, AI-driven solution thinking, and pilot direction." },
        ulugbek: { name: "Ulugbek Ubaydullayev", role: "Flutter Developer / Mobile Specialist", initials: "UU", imageAlt: "Photo of Ulugbek Ubaydullayev", bio: "Flutter developer and mobile specialist. He has worked on 7 projects and has been independently building a taxi-direction project for 7 months. At H+, he focuses on the patient app and mobile experience." },
        luciano: { name: "Luciano Freitas", role: "Lead Advisor", initials: "LF", imageAlt: "Photo of Luciano Freitas", bio: "International advisor supporting H+ across growth, brand, leadership, business model, and startup strategy. His background includes experience connected to Uber, Airbnb, Hotmart, BX Blue, and Facily." }
      }
    },
    founderStory: {
      eyebrow: "Founder story",
      title: "How did H+ begin?",
      subtitle: "H+ was not created overnight. The project was shaped through 7 months of market research, clinic workflow analysis, patient experience thinking, and Central Asia-specific product planning.",
      islombek: { title: "Islombek Aliyev - product vision and strategic thinking", desc: "Islombek was born in Fergana, studied at the International Korean University, and gained experience in government-related workflows, including district hokimiyat processes. He spent about a year and a half freelancing in programming and worked with the Russian market. In H+, he works on product vision, strategy, design direction, and how the healthcare ecosystem should function." },
      davron: { title: "Davron Ramazonov - operations, technical thinking, and fast learning", desc: "Davron entered the startup world at 17. He studied at a polytechnic in the Tashkent region, completed full-stack programming in 2022, and continues building his skills independently. He met Islombek in October 2025, and their collaboration later deepened through the UzCombinator intensive environment. Over 7 months, they worked through the market, product, clinic needs, and H+ pilot model. Davron has experience with AI systems, government-focused project concepts, taxometer-direction projects, and AI tools." }
    },
    journey: {
      eyebrow: "Project journey",
      title: "From pre-MVP toward pilot validation",
      subtitle: "H+ is not a finished product yet. The project is moving step by step toward MVP and real pilot testing.",
      items: [
        { label: "01", title: "Founder connection", desc: "Islombek and Davron met in October 2025 and began thinking together about fragmented healthcare workflows in Central Asia.", status: "Started" },
        { label: "02", title: "UzCombinator environment", desc: "The UzCombinator intensive program, which began in December 2025, strengthened the founders' collaboration and helped shape H+ more clearly as a startup.", status: "Started" },
        { label: "03", title: "7 months of market research", desc: "The team studied clinic pain points across booking, queues, documents, patient history, analytics, and integrations, then defined the core H+ direction.", status: "Done" },
        { label: "04", title: "Product architecture and prototype", desc: "The product structure and prototype direction are being shaped across clinic dashboard, patient app, EHR, smart queue, Analytics & AI, and integrations.", status: "In progress" },
        { label: "05", title: "Pilot development", desc: "The next stage is to bring the core functionality into an MVP scope and prepare it for real pilot testing with selected clinics.", status: "In progress" }
      ]
    },
    values: {
      title: "What do we believe in?",
      subtitle: "The H+ team sees the product not just as software, but as new healthcare infrastructure for the region.",
      items: [
        { title: "Simplicity", desc: "Build a product that is understandable and easy to use for clinics and patients." },
        { title: "Regional adaptation", desc: "H+ must fit Central Asian clinic workflows, languages, habits, and real operational conditions." },
        { title: "Transparency", desc: "Be clear that the project is still pre-MVP and show the next stages honestly." },
        { title: "Big ambition", desc: "Transform the HealthTech ecosystem and build a unicorn-level company in the long term." }
      ]
    },
    disclaimer: {
      title: "Transparent status",
      desc: "H+ is not a finished MVP or publicly operating product yet. The Company page represents the real team, project motivation, product architecture, and pilot development stage."
    }
  },
  demoModal: {
    title: "Contact Request",
    subtitle: "H+ is pre-MVP. Leave your details for founder, clinic, advisor or investor conversations.",
    fullName: "Full Name",
    email: "Business Email",
    orgName: "Organization / Clinic",
    role: "Your Role",
    country: "Country",
    message: "Short note",
    submitSuccess: "Your request was received. The H+ team will follow up as soon as possible.",
    submitError: "Please complete all required fields."
  },
  footer: {
    desc: "Pre-MVP healthcare infrastructure startup building for clinics, doctors and patients in Central Asia.",
    rights: "All rights reserved.",
    company: "Company",
    legal: "Legal",
    contact: "Contact",
    privacy: "Privacy",
    terms: "Terms",
    address: "Tashkent, Uzbekistan."
  }
};

const ru = {
  ...en,
  common: {
    ...en.common,
    demoBtn: "Связаться",
    partnerBtn: "Для инвесторов",
    language: "Язык"
  },
  product: {
    headline: "H+ - медицинская ОС для клиник и пациентов",
    subheadline: "Онлайн-запись, умная очередь, панель клиники, приложение пациента, EHR, аналитика и интеграции в одной безопасной экосистеме.",
    modules: {
      queue: {
        title: "Умная запись и очередь",
        desc: "Пациенты записываются онлайн, а клиника управляет потоком приемов в реальном времени. Напоминания помогают снизить опоздания и отмены.",
        benefits: ["Онлайн-запись и check-in", "SMS/Telegram-напоминания", "Контроль очереди и загрузки кабинетов"]
      },
      clinic: {
        title: "Панель клиники",
        desc: "Единая панель для администраторов, врачей и менеджеров: очереди, сотрудники, платежи, склад и отчеты.",
        benefits: ["Очереди, сотрудники и расчеты в одном месте", "Метрики по филиалам", "Контроль склада и услуг"]
      },
      ehr: {
        title: "Медицинские записи и EHR",
        desc: "Цифровая карта для истории пациента, визитов, рецептов, анализов и медицинских документов.",
        benefits: ["История пациента не теряется", "Анализы и документы прикрепляются к карте", "Меньше бумажной рутины"]
      },
      ai: {
        title: "Аналитика & AI",
        desc: "Интеллектуальный аналитический слой для загрузки клиники, выручки, повторных визитов и операционной эффективности.",
        benefits: ["Анализ выручки и retention", "Прогноз загрузки", "Понятные отчеты для руководителя"]
      },
      app: {
        title: "Приложение пациента",
        desc: "Пациент выбирает врача, записывается на прием, отслеживает очередь, получает результаты анализов и связывается с клиникой.",
        benefits: ["Запись в несколько кликов", "Быстрая идентификация через QR/ID", "Результаты и напоминания в телефоне"]
      },
      integrations: {
        title: "Интеграции",
        desc: "API-подход для подключения лабораторий, аптек, страховых процессов и будущих государственных e-health интеграций.",
        benefits: ["Обмен с LIS и лабораториями", "Потоки аптеки и склада", "Структура для страховых процессов"]
      }
    },
    dashboardMockup: {
      searchPatient: "Поиск пациента...",
      status: "Статус",
      diagnose: "История визитов",
      waitingTime: "Среднее ожидание",
      waitingValue: "Будет проверено",
      waitingNote: "Измеряется на MVP-тестах",
      queueHandled: "Приемы сегодня",
      queueValue: "Поток приемов",
      queueNote: "Концепт-данные",
      nextToken: "Следующий ID очереди",
      nextTokenValue: "#H-UZ-182",
      nextTokenNote: "Связано с EHR",
      liveAiQueue: "Балансировка очереди",
      checkedIn: "Зарегистрирован",
      calling: "Вызывается",
      roomLabel: "Кабинет 4",
      revenueThisMonth: "Месячная выручка",
      revenueValue: "Измеряется в MVP",
      revenueNote: "Финансовый обзор",
      pharmacy: "Аптека и склад",
      inventoryItem1: "Препарат A",
      inventoryItem1Value: "В наличии",
      inventoryItem2: "Препарат B",
      inventoryItem2Value: "Мало на складе",
      occupancyRate: "Загрузка клиники",
      occupancyValue: "Прогноз",
      occupancyLabel: "Пример загрузки",
      patientAge: "Возраст: 42 - Мужчина - Ташкент",
      idLabel: "ID: DEMO-001",
      secureRecord: "Безопасная запись",
      vitalSigns: "Показатели",
      vitalValues: "72 bpm - 36.6 C",
      diagnoseCode: "Последняя запись визита",
      chronicCondition: "История визитов",
      predictiveEngine: "AI-аналитика для руководителей",
      mondayForecast: "AI-модуль не заменяет клинические решения; он помогает понятно видеть загрузку клиники, выручку и операционную эффективность.",
      diagnosisMatch: "Прогноз загрузки",
      insightVal: "Операционный insight",
      insightDesc: "Без claim по клинической диагностике",
      timeSaved: "Отчет для руководителя",
      hrsPerDay: "Понятная панель",
      perPhysician: "для принятия решений",
      today: "Сегодня",
      todayAppointment: "Сегодняшний прием",
      appAppointment: "15:30 - Dr. S. Kamalova",
      labName: "Независимая лаборатория",
      pharmacyName: "Аптечный поток",
      insuranceName: "Страховой процесс",
      coreApi: "H+ Core API",
      syncing: "В плане",
      realtimeClaim: "API-структура",
      apiDesc: "H+ проектируется для соединения лабораторных, аптечных и страховых workflow через API-подход, готовый к будущим e-health интеграциям.",
      osVersion: "H+ OS - MVP"
    },
    workflow: {
      title: "Как работает продукт?",
      steps: [
        "Пациент бронирует через приложение или web",
        "Панель клиники управляет очередью и ресурсами",
        "Врач видит историю пациента через EHR",
        "Руководитель отслеживает выручку, загрузку и рост через аналитику"
      ]
    }
  },
  solutions: {
    eyebrow: "Решения H+",
    headline: "Единая медицинская экосистема для каждого участника",
    subheadline: "H+ объединяет клиники, врачей, пациентов, лаборатории, аптеки, страховые процессы и будущие e-health интеграции в одной безопасной операционной системе.",
    cards: {
      clinics: {
        title: "Частные клиники",
        tag: "Операционное управление",
        desc: "Клиника управляет приемами, очередями, сотрудниками, платежами, складом и отчетами через единую панель.",
        bullets: ["Онлайн-запись и умная очередь", "Метрики по филиалам", "Контроль выручки, услуг и склада"]
      },
      doctors: {
        title: "Врачи",
        tag: "Меньше бумажной рутины",
        desc: "Врач видит историю пациента, визиты, рецепты и файлы анализов в структурированной цифровой карте.",
        bullets: ["История пациента через EHR", "Шаблоны рецептов и документов", "Личный график и управление приемами"]
      },
      patients: {
        title: "Пациенты",
        tag: "Удобный медицинский опыт",
        desc: "Пациент выбирает врача, записывается на прием, отслеживает очередь, получает результаты и связывается с клиникой.",
        bullets: ["Запись в несколько кликов", "Очередь и напоминания в телефоне", "Результаты анализов и документы в одном месте"]
      },
      partners: {
        title: "Лаборатории, аптеки и страхование",
        tag: "Готовность к интеграциям",
        desc: "H+ предлагает API-подход для обмена данными, заказов, результатов и расчетных процессов с внешними сервисами.",
        bullets: ["Подключение лабораторных результатов", "Потоки аптеки и склада", "Структура для страховых процессов"]
      },
      government: {
        title: "Государство и e-health системы",
        tag: "Архитектура, готовая к аудиту",
        desc: "H+ может быть адаптирован для будущих государственных e-health интеграций, обезличенной статистики и архитектуры данных, готовой к аудиту.",
        bullets: ["Role-based access", "Audit log и security-first подход", "Будущие e-health API интеграции"]
      }
    },
    workflow: {
      title: "Проблема -> Решение H+ -> Результат",
      subtitle: "H+ превращает разрозненные медицинские процессы в управляемый единый поток.",
      labels: { problem: "Проблема", solution: "Решение H+", result: "Результат" },
      items: [
        { problem: "Записи теряются между звонками, чатами и администраторами.", solution: "H+ объединяет запись, check-in и очередь в единый поток.", result: "Клиника видит приемы и загрузку в реальном времени." },
        { problem: "История пациента остается на бумаге или в отдельных файлах.", solution: "EHR хранит визиты, рецепты и анализы в структурированном виде.", result: "Врач быстрее находит нужную информацию." },
        { problem: "Лаборатории, аптеки и страховые процессы работают отдельно.", solution: "API-подход H+ готовит платформу к подключению внешних сервисов.", result: "Обмен данными и расчеты становятся более организованными." },
        { problem: "Руководитель поздно видит загрузку и финансовые показатели.", solution: "Analytics & AI выводит операционные метрики в понятную панель.", result: "Управленческие решения опираются на более точные данные." }
      ]
    },
    banner: {
      eyebrow: "Единая медицинская инфраструктура",
      title: "H+ управляет клиникой не как обычная CRM, а как полноценная операционная система",
      desc: "Платформа объединяет ежедневные процессы клиники, пациентский опыт и внешние интеграции в одну безопасную экосистему."
    }
  },
  market: {
    eyebrow: "Рыночная возможность",
    headline: "Частная медицина Центральной Азии движется к цифровым операционным системам",
    subheadline: "H+ начинает с Узбекистана и в дальнейшем может адаптироваться к рынкам Казахстана, Кыргызстана, Таджикистана и Туркменистана по мере их развития.",
    estimateNote: "Рыночные показатели основаны на открытых данных и осторожной внутренней модели планирования. Поскольку в каждой стране понятие частных клиник и провайдеров учитывается по-разному, цифры следует воспринимать как оценки или публичные индикаторы, а не как единую официальную базу данных.",
    population: "Население",
    privateClinics: "Частные клиники / провайдеры",
    annualGrowth: "Годовой рост",
    confidence: "Надежность данных",
    marketReadiness: "Готовность рынка",
    mapLabel: "Карта Центральной Азии с реальными границами",
    profileLabel: "Профиль рынка",
    opportunityLabel: "Возможность",
    dataNoteLabel: "Примечание к данным",
    countriesData: {
      uzbekistan: { name: "Узбекистан", mapName: "Узбекистан", desc: "Стартовый рынок для H+. Частная медицина быстро развивается, количество клиник выросло, а спрос на цифровизацию процессов усиливается.", popVal: "37M+", privateClinicsVal: "9,000+", growthVal: "~10-15%", confidenceVal: "Высокая", digitVal: "Стадия роста", opportunity: "Наиболее подходящий рынок для пилотной проверки и первого коммерческого внедрения.", dataNote: "Открытые источники указывают рост частных клиник примерно с 3,200 в 2016 году до ожидаемых 8,700 к концу 2026 года; в 2025 году лицензии получили более 1,300 новых частных клиник." },
      kazakhstan: { name: "Казахстан", mapName: "Казахстан", desc: "Региональный рынок с более высокой покупательной способностью, где частные провайдеры активнее входят в государственное финансирование и страховую систему.", popVal: "20M+", privateClinicsVal: "1,200+", growthVal: "~7% CAGR", confidenceVal: "Средняя", digitVal: "Средняя", opportunity: "Сильный рынок для следующего этапа регионального расширения.", dataNote: "Открытые данные лучше отражают частных провайдеров, участвующих в системе государственного финансирования или страхования, чем все частные клиники. Это публичный индикатор провайдеров, а не полный подсчет рынка." },
      kyrgyzstan: { name: "Кыргызстан", mapName: "Кыргызстан", desc: "Небольшой, но гибкий рынок, где частные клиники постепенно переходят к цифровым системам и регуляторному выравниванию.", popVal: "7M+", privateClinicsVal: "540+ inspected", growthVal: "N/A", confidenceVal: "Низкая-средняя", digitVal: "Низкая", opportunity: "Подходит для легкой интеграции и партнерской модели.", dataNote: "Открытые данные не дают чистого национального временного ряда по частным клиникам. Проверки 2025 года охватили 541 частную медицинскую/фармацевтическую организацию, поэтому это индикатор проверенного рынка, а не полный подсчет." },
      tajikistan: { name: "Таджикистан", mapName: "Таджикистан", desc: "Рынок с высокой потребностью в цифровой медицине и постепенно расширяющимся частным сектором.", popVal: "10M+", privateClinicsVal: "900", growthVal: "~12% recent", confidenceVal: "Средняя", digitVal: "Низкая", opportunity: "Возможность долгосрочного расширения и построения инфраструктуры.", dataNote: "Публичные сообщения указывают рост с 801+ частных медицинских учреждений в 2024 году до примерно 900 в 2025 году. Долгосрочный рост с 2012 года ближе к низким однозначным значениям, поэтому тренд не следует преувеличивать." },
      turkmenistan: { name: "Туркменистан", mapName: "Туркменистан", desc: "Более закрытый и государственно контролируемый рынок, где открытая информация о частной медицине ограничена.", popVal: "6M+", privateClinicsVal: "Limited data", growthVal: "N/A", confidenceVal: "Низкая", digitVal: "Очень низкая", opportunity: "Рынок для долгосрочного наблюдения и осторожной региональной стратегии.", dataNote: "Надежных открытых данных о количестве клиник нет. Публичные источники описывают частный сектор здравоохранения как очень небольшой или ограниченный, поэтому нельзя придумывать число." }
    },
    drivers: {
      title: "Почему сейчас?",
      subtitle: "H+ выходит на рынок в момент, когда клиники уделяют больше внимания операционной эффективности, пациентскому опыту и интеграциям.",
      items: [
        { title: "Частные клиники растут", desc: "Клиникам нужен единый инструмент для управления филиалами, услугами и пациентским потоком." },
        { title: "Пациенты ждут цифрового удобства", desc: "Онлайн-запись, статус очереди, напоминания и результаты в телефоне становятся новым стандартом." },
        { title: "Процессы все еще разрознены", desc: "Во многих клиниках звонки, чаты, Excel, бумага и отдельные программы не связаны между собой." },
        { title: "Растет потребность в интеграциях", desc: "Обмен данными с лабораториями, аптеками, страхованием и будущими e-health системами становится все важнее." }
      ]
    }
  },
  traction: {
    eyebrow: "Статус проекта",
    statusBadge: "Стадия pre-MVP",
    headline: "H+ пока не является MVP - это медицинская ОС, готовящаяся к пилоту",
    subheadline: "Мы создаем инфраструктурную платформу для клиник, врачей и пациентов Центральной Азии. Текущий этап - разработка MVP, исследование рынка и подготовка к пилотным проверкам.",
    statusNote: "Текущий статус: concept + prototype + pilot preparation. Продукт еще не запущен публично.",
    metrics: {
      concept: {
        title: "Концепция готова",
        desc: "Сформированы проблема, целевая аудитория, ключевые модули и направление продукта."
      },
      architecture: {
        title: "Архитектура в разработке",
        desc: "Планируется структура clinic dashboard, patient app, очередей, EHR и интеграций."
      },
      prototype: {
        title: "Прототип готовится",
        desc: "Разрабатываются первые интерфейсы и логика MVP для проверки с клиниками."
      },
      pilot: {
        title: "Пилотная подготовка",
        desc: "Пилоты еще не подписаны. Идет подготовка к проверке продукта с потенциальными клиниками."
      }
    },
    progress: {
      headline: "Что уже сделано и что готовится",
      subtitle: "H+ показывает честный прогресс: от идеи и исследования рынка к MVP и пилотной валидации.",
      items: [
        { label: "01", title: "Problem discovery", desc: "Изучаются проблемы клиник: запись, очередь, документы, аналитика и интеграции.", status: "В процессе" },
        { label: "02", title: "Product scope", desc: "Определяется минимальный набор модулей для первого MVP.", status: "В процессе" },
        { label: "03", title: "MVP development", desc: "Создается первая версия продукта для внутренней проверки и подготовки пилота.", status: "В разработке" },
        { label: "04", title: "Advisor support", desc: "Luciano Freitas присоединился как Advisor и помогает со стратегическим направлением.", status: "Активно" },
        { label: "05", title: "Clinic pilot testing", desc: "После готовности MVP продукт будет проверяться в реальных процессах выбранных клиник.", status: "Планируется" }
      ]
    },
    validation: {
      headline: "Пока не traction - стадия валидации",
      subtitle: "Эта страница показывает текущую подготовку и валидацию H+, а не заявляет, что продукт уже запущен.",
      items: [
        { title: "Боли клиник понятны", desc: "Проект решает реальные операционные проблемы: очереди, запись, документы, интеграции и управление." },
        { title: "MVP scope строится осторожно", desc: "Первая версия будет включать только необходимые функции для пилотного тестирования." },
        { title: "До пилота нужна техническая ясность", desc: "Перед внедрением уточняются workflows клиник, роли, безопасность данных и требования к интеграциям." }
      ]
    },
    disclaimer: {
      title: "Прозрачный статус",
      desc: "H+ пока не является готовым MVP или работающим продуктом. Содержимое сайта отражает концепцию проекта, планируемую архитектуру продукта и этап подготовки к пилоту."
    }
  },
  investors: {
    eyebrow: "Бриф для инвесторов",
    statusBadge: "Pre-MVP / пилот разрабатывается",
    headline: "H+ - HealthTech-инфраструктура для медицины Центральной Азии",
    subheadline: "H+ создает медицинскую операционную систему для частных клиник, врачей и пациентов. Проект пока не является MVP, но анализ рынка, продуктовая архитектура и пилотное направление уже сформированы.",
    opportunity: {
      title: "Инвестиционная возможность",
      desc: "Частная медицина Центральной Азии нуждается в цифровизации: запись, очереди, история пациента, управление клиникой, аналитика и интеграции часто ведутся вручную или в разрозненных системах. H+ стремится объединить эти процессы в одну экосистему."
    },
    stage: {
      title: "Текущая стадия",
      value: "Pre-MVP",
      desc: "H+ находится на стадии concept, product architecture, prototype direction и pilot development. Следующая цель - финализировать MVP scope и начать реальные пилотные тесты с клиниками."
    },
    thesis: {
      title: "Инвестиционный тезис",
      desc: "H+ не заявляет revenue или traction на текущем этапе. Главный тезис для инвестора - возможность построить локализованную, многомодульную и integration-ready HealthTech OS для частных клиник региона.",
      points: [
        { title: "Большой, но разрозненный рынок", desc: "Клиники часто ведут процессы через звонки, чаты, Excel, бумагу или несвязанные между собой программы." },
        { title: "Пациентский опыт меняется", desc: "Пациенты ожидают онлайн-запись, статус очереди, результаты и напоминания в телефоне." },
        { title: "Локальная адаптация важна", desc: "H+ строится с учетом языков, привычек и реальных рабочих процессов Узбекистана и Центральной Азии." },
        { title: "Платформенный подход", desc: "Цель - не просто CRM, а система, объединяющая панель клиники, приложение пациента, EHR, аналитику и интеграции." }
      ]
    },
    funding: {
      title: "Направление привлечения средств",
      targetLabel: "Инвестиционная стадия",
      targetValue: "Pre-seed / strategic investor conversations",
      targetDesc: "H+ сейчас не является публичным инвестиционным предложением. Обсуждения с инвесторами ведутся для формирования MVP, pilot scope, команды и технической инфраструктуры.",
      allocationTitle: "Модель использования средств"
    },
    useOfFunds: {
      product: { title: "Разработка продукта и MVP", percentage: "40%", desc: "Разработка MVP scope по направлениям: панель клиники, приложение пациента, EHR, умная очередь, analytics и базовые интеграции." },
      pilot: { title: "Пилот и валидация с клиниками", percentage: "25%", desc: "Подготовка pilot-сценариев с выбранными клиниками, workflow-анализ, feedback-циклы и тестирование в реальных процессах." },
      team: { title: "Усиление команды", percentage: "25%", desc: "Привлечение специалистов по frontend, backend, mobile, product, UX и клиническим процессам." },
      legal: { title: "Безопасность, юридическая и операционная подготовка", percentage: "10%", desc: "Подготовка data security подхода, audit-ready architecture, документов, договоров и операционных процессов." }
    },
    milestones: {
      title: "Следующие investor milestones",
      subtitle: "Это не revenue forecast. Это практические этапы вывода H+ к MVP и пилоту.",
      items: [
        { label: "01", title: "Финализировать MVP scope", desc: "Выбрать минимальные функции для пилота: запись, очередь, панель клиники, базовый EHR и patient access.", status: "Следующий этап" },
        { label: "02", title: "Разработка технического MVP", desc: "Довести frontend, backend, mobile и основную структуру данных до уровня, пригодного для пилота.", status: "В плане" },
        { label: "03", title: "Пилотные сценарии с клиниками", desc: "Определить реальные workflow, роли, данные и интеграционные потребности вместе с выбранными клиниками.", status: "В плане" },
        { label: "04", title: "Pilot test и feedback", desc: "После готовности MVP протестировать продукт в реальных процессах клиники и провести итерации.", status: "В плане" },
        { label: "05", title: "Post-pilot pricing и GTM", desc: "После результатов пилота уточнить pricing, onboarding, support и go-to-market модель.", status: "Следующий этап" }
      ]
    },
    risks: {
      title: "Прозрачные риски",
      subtitle: "Статус H+ показывается открыто: возможность большая, но проект находится на ранней стадии.",
      items: [
        { title: "MVP еще не готов", desc: "H+ пока не является публично работающим продуктом. Первый важный этап - разработать MVP и протестировать его в клинических workflow." },
        { title: "Интеграции будут поэтапными", desc: "Лаборатории, аптеки, страхование и e-health интеграции не запускаются сразу, а реализуются после пилота и технической подготовки." },
        { title: "Рыночные цифры требуют валидации", desc: "TAM/SAM/SOM и pricing model будут уточняться через pilot results, clinic feedback и отдельную проверку источников." }
      ]
    },
    disclaimer: {
      title: "Важное примечание",
      desc: "Эта страница не является инвестиционным предложением или финансовой консультацией. H+ находится на стадии pre-MVP. Условия, valuation, equity и размер round обсуждаются индивидуально с инвестором."
    },
    cta: "Начать разговор с инвестором"
  },
  company: {
    eyebrow: "Компания",
    statusBadge: "Pre-MVP / пилот разрабатывается",
    headline: "H+ - HealthTech-проект нового поколения для медицины Центральной Азии",
    subheadline: "Мы создаем медицинскую операционную систему для частных клиник, врачей и пациентов. H+ пока не является MVP, но концепция, продуктовая архитектура, анализ рынка и направление пилота уже сформированы.",
    mission: { title: "Наша миссия", desc: "Объединить разрозненные процессы между клиникой, врачом и пациентом в единую, понятную и безопасную цифровую экосистему для Центральной Азии." },
    vision: { title: "Наше видение", desc: "Создать простую, надежную и адаптированную под регион медицинскую инфраструктуру в HealthTech и в долгосрочной перспективе построить компанию уровня unicorn." },
    team: {
      eyebrow: "Основная команда",
      title: "Команда, создающая H+",
      subtitle: "Команда объединяет product strategy, operations, full-stack thinking, Flutter mobile development, AI-инструменты и международную advisor-поддержку.",
      members: {
        islombek: { name: "Islombek Aliyev", role: "Founder & Product/Strategy Lead", initials: "IA", imageAlt: "Фото Islombek Aliyev", bio: "Founder, работающий над концепцией H+, product strategy, дизайн-направлением и vision HealthTech-экосистемы. Имеет опыт в программировании, работе с числами, государственных процессах и freelancing на российском рынке." },
        davron: { name: "Davron Ramazonov", role: "Founder & Operations/Technical Lead", initials: "DR", imageAlt: "Фото Davron Ramazonov", bio: "Founder, который вошел в startup-среду в 17 лет. В H+ работает над operations, technical concept, анализом рынка, AI-ориентированными решениями и формированием pilot-направления." },
        ulugbek: { name: "Ulugbek Ubaydullayev", role: "Flutter Developer / Mobile Specialist", initials: "UU", imageAlt: "Фото Ulugbek Ubaydullayev", bio: "Flutter-разработчик и мобильный специалист. Работал над 7 проектами и уже 7 месяцев самостоятельно развивает проект в taxi-направлении. В H+ фокусируется на пациентском приложении и mobile experience." },
        luciano: { name: "Luciano Freitas", role: "Lead Advisor", initials: "LF", imageAlt: "Фото Luciano Freitas", bio: "Международный advisor, который помогает H+ в направлениях growth, brand, leadership, business model и startup strategy. Имеет опыт, связанный с Uber, Airbnb, Hotmart, BX Blue и Facily." }
      }
    },
    founderStory: {
      eyebrow: "История основателей",
      title: "Как начался H+?",
      subtitle: "H+ не появился за один день. Проект сформировался через 7 месяцев изучения рынка, процессов клиник, пациентского опыта и условий Центральной Азии.",
      islombek: { title: "Islombek Aliyev - product vision и стратегическое мышление", desc: "Islombek родился в Фергане, учился в International Korean University и получил опыт в государственных процессах, включая работу, связанную с районным хокимиятом. Он около полутора лет занимался freelancing в программировании и работал на российском рынке. В H+ он работает над product vision, стратегией, дизайн-направлением и тем, как должна функционировать медицинская экосистема." },
      davron: { title: "Davron Ramazonov - operations, technical thinking и быстрое обучение", desc: "Davron вошел в startup-среду в 17 лет. Он учился в политехникуме в Ташкентской области, в 2022 году завершил full-stack программирование и продолжает самостоятельно развиваться. С Islombek он познакомился в октябре 2025 года, а позже сотрудничество усилилось через среду UzCombinator intensive. В течение 7 месяцев они глубоко прорабатывали рынок, продукт, потребности клиник и pilot model H+. Davron имеет опыт работы с AI-системами, концептами проектов для государства, taxometer-направлением и AI-инструментами." }
    },
    journey: {
      eyebrow: "Путь проекта",
      title: "От pre-MVP к пилоту",
      subtitle: "H+ пока не является готовым продуктом. Проект последовательно движется к MVP и реальным пилотным тестам.",
      items: [
        { label: "01", title: "Знакомство основателей", desc: "Islombek и Davron познакомились в октябре 2025 года и начали совместно думать о разрозненных процессах в медицине Центральной Азии.", status: "Начато" },
        { label: "02", title: "Среда UzCombinator", desc: "Intensive-программа UzCombinator, начавшаяся в декабре 2025 года, усилила сотрудничество основателей и помогла четче оформить идею H+ в startup-формате.", status: "Начато" },
        { label: "03", title: "7 месяцев изучения рынка", desc: "Команда изучила проблемы клиник: запись, очереди, документы, история пациента, analytics и интеграции, после чего выделила основные направления H+.", status: "Готово" },
        { label: "04", title: "Продуктовая архитектура и prototype", desc: "Формируется структура продукта и prototype-направление: панель клиники, приложение пациента, EHR, умная очередь, Analytics & AI и интеграции.", status: "В процессе" },
        { label: "05", title: "Разработка пилота", desc: "Следующий этап - собрать ключевые функции в MVP scope и подготовить продукт к реальным пилотным тестам с выбранными клиниками.", status: "В процессе" }
      ]
    },
    values: {
      title: "Во что мы верим?",
      subtitle: "Команда H+ видит продукт не просто как software, а как новую инфраструктуру для медицины региона.",
      items: [
        { title: "Простота", desc: "Создавать не сложную систему, а понятный и удобный продукт для клиник и пациентов." },
        { title: "Адаптация к региону", desc: "H+ должен соответствовать языкам, привычкам и реальным рабочим процессам клиник Центральной Азии." },
        { title: "Прозрачность", desc: "Не скрывать, что проект находится на стадии pre-MVP, и ясно показывать следующие этапы." },
        { title: "Большая цель", desc: "Изменить HealthTech-экосистему и в долгосрочной перспективе построить компанию уровня unicorn." }
      ]
    },
    disclaimer: {
      title: "Прозрачный статус",
      desc: "H+ пока не является готовым MVP или live-продуктом. Страница Company отражает реальный состав команды, мотивацию проекта, продуктовую архитектуру и этап разработки пилота."
    }
  },
  pricing: {
    eyebrow: "Планируемая модель тарифов",
    statusBadge: "Pre-MVP / подготовка к пилоту",
    headline: "Тарифы H+ будут финализированы после MVP и пилотной валидации",
    subheadline: "H+ пока не является готовым MVP. Поэтому текущая страница тарифов не показывает публичные коммерческие subscription-цены, а объясняет планируемую модель, которая будет зависеть от pilot scope, выбранных модулей и интеграционных требований клиники.",
    notice: {
      title: "Прозрачный статус pricing",
      desc: "Сейчас H+ не продается как массовая subscription-платформа. Условия пилота согласуются индивидуально и зависят от размера клиники, выбранных модулей, количества пользователей и сложности технических интеграций."
    },
    cta: "Обсудить пилот",
    recommended: "Рекомендуется",
    plans: {
      pilotPrep: {
        name: "Pilot Preparation",
        price: "По договоренности",
        desc: "Для изучения процессов клиники, определения pilot scope и технических требований до разработки MVP.",
        features: ["Анализ процессов клиники", "Выбор необходимых модулей для MVP", "Карта ролей пользователей и workflow", "Подготовка технических требований пилота", "Оценка интеграционных потребностей"]
      },
      clinicPilot: {
        name: "MVP Clinic Pilot",
        price: "На основе пилотного соглашения",
        desc: "Для тестирования MVP в реальных процессах выбранной клиники после готовности минимального продукта.",
        features: ["Онлайн-запись и умная очередь", "Панель клиники и базовый EHR-поток", "Концепт приложения пациента или web access", "Базовая аналитическая панель", "Feedback и итерации во время пилота"]
      },
      enterprise: {
        name: "Network / Enterprise",
        price: "Индивидуально",
        desc: "Для сетевых клиник, лабораторий, аптек, страховых процессов или крупных интеграционных партнерств.",
        features: ["Расширенная модель филиалов и ролей", "Scope интеграции с лабораторией, аптекой или страхованием", "Подход к архитектуре, готовой к безопасности и аудиту", "Индивидуальный onboarding и технический план", "Совместное формирование subscription-модели после MVP"]
      }
    },
    factors: {
      title: "От чего будет зависеть цена?",
      subtitle: "Цены H+ пока не финальные. На стадии пилота и MVP стоимость будет зависеть от следующих факторов.",
      items: [
        { title: "Размер клиники", desc: "Количество врачей, администраторов, филиалов и поток пациентов влияют на scope проекта." },
        { title: "Выбранные модули", desc: "Запись, очередь, EHR, приложение пациента, аналитика и интеграции могут внедряться поэтапно." },
        { title: "Сложность интеграций", desc: "Подключение лабораторий, аптек, страхования или существующих внутренних систем оценивается отдельно." },
        { title: "Срок пилота", desc: "Длительность тестирования, feedback-циклы и техническая поддержка влияют на условия пилота." }
      ]
    },
    disclaimer: {
      title: "Важное примечание",
      desc: "Тарифы на этой странице не являются финальными коммерческими ценами. H+ находится на стадии pre-MVP, а pricing-модель будет уточнена после MVP и результатов пилота."
    }
  },
  nav: { ...en.nav, traction: "Статус" }
};

export const translations: Record<Language, any> = { uz, ru, en };
