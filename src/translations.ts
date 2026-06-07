import { Language } from './types';

export const translations: Record<Language, any> = {
  uz: {
    common: {
      demoBtn: "Demoni so'rash",
      partnerBtn: "Hamkorlik qilish",
      learnMore: "Batafsil",
      submit: "Yuborish",
      submitting: "Yuborilmoqda...",
      close: "Yopish",
      contactUs: "Bog'lanish",
      countries: "Maqsadli Davlatlar",
      audience: "Maqsadli Auditoriya",
      success: "Muvaffaqiyatli!",
      dashboard: "Boshqaruv paneli",
      mobileApp: "Mobil ilova",
      metrics: "Ko'rsatkichlar",
      annual: "Yillik (20% chegirma)",
      monthly: "Oylik",
      perMonth: "/oy",
      getStarted: "Boshlash",
      comingSoon: "Tez kunda",
      popular: "Eng ommabop",
    },
    nav: {
      product: "Mahsulot",
      solutions: "Yechimlar",
      market: "Bozor",
      traction: "Natijalar",
      pricing: "Tariflar",
      company: "Kompaniya",
      investors: "Investorlar"
    },
    hero: {
      badge: "Markaziy Osiyodagi №1 HealthTech Ekotizimi",
      headline: "Markaziy Osiyo Sog'liqni Saqlash Tizimining Operatsion Tizimi",
      subheadline: "Bemorlar, klinikalar, shifokorlar va sug'urta provayderlarini yagona, yuqori texnologiyali ekotizimda birlashtiruvchi platforma.",
      trustedClinics: "etakchi tibbiyot markazlari tomonidan qo'llab-quvvatlanadi",
      stats: {
        registered: "Ro'yxatdan o'tgan bemorlar",
        clinics: "Hamkor klinikalar",
        transactions: "Yillik tranzaksiyalar",
        uptime: "Tizim barqarorligi"
      }
    },
    product: {
      headline: "Zamonaviy Tibbiyot Uchun Yagona Operatsion Tizim",
      subheadline: "Klinika boshqaruvidan tortib, bemorlar bilan muloqotgacha bo'lgan barcha jarayonlarni avtomatlashtiring.",
      modules: {
        queue: {
          title: "Intellektual Navbat va Band qilish",
          desc: "Klinikadagi tirbandlikni 45% gacha kamaytiruvchi, onlayn yozilish va sun'iy intellekt asosidagi navbat boshqaruvi."
        },
        clinic: {
          title: "Klinikani Samarali Boshqarish",
          desc: "Moliya, kadrlar va dori-darmonlar hisobini yagona darchada yuritish tizimi."
        },
        ehr: {
          title: "Elektron Tibbiy Kartalar (EHR)",
          desc: "Xalqaro standartlarga mos, bemorning to'liq kasallik tarixi va laboratoriya tahlillari saqlanuvchi xavfsiz tizim."
        },
        ai: {
          title: "AI & Analitika",
          desc: "Klinika faolligini prognozlash, kasalliklarni dastlabki tahlili va shifokorlar vaqtini tejovchi aqlli yordamchi."
        },
        app: {
          title: "Bemorlar Uchun Mobil Ilova",
          desc: "Bemorlar uchun shaxsiy kabinet, retseptlar, tahlil natijalari va shifokor bilan tezkor chat ko'rinishidagi qulay yechim."
        },
        integrations: {
          title: "Laboratoriya va Sug'urta Integratsiyasi",
          desc: "Mustaqil laboratoriyalar va sug'urta kompaniyalari bilan real vaqt rejimida avtomatik ma'lumot almashinuvi."
        }
      },
      dashboardMockup: {
        searchPatient: "Bemor qidirish...",
        upcomingAppointments: "Kutilayotgan Qabullar",
        patientName: "Bemor",
        doctorName: "Shifokor",
        status: "Holati",
        diagnose: "Tashxis",
        activeConsultations: "Aktiv maslahatlar",
        waitingTime: "O'rtacha kutish vaqti",
        occupancyRate: "Klinika yuklamasi",
        revenueThisMonth: "Oylik tushum"
      }
    },
    solutions: {
      headline: "Sog'liqni Saqlashning Barcha Ishtirokchilari Uchun",
      subheadline: "H+ har bir foydalanuvchiga moslashtirilgan, tezkor va ishonchli raqamli infratuzilmani taklif etadi.",
      cards: {
        clinics: {
          title: "Xususiy Klinikalar",
          desc: "Klinika daromadini oshirish, shifokorlar ishini optimallashtirish va bemorlar qoniqishini yangi bosqichga ko'tarish."
        },
        doctors: {
          title: "Shifokorlar",
          desc: "Raqamli retseptlar, bemor tarixining oson tahlili va ortiqcha qog'ozbozliksiz ishlash imkoniyati."
        },
        patients: {
          title: "Bemorlar",
          desc: "shifokorga bir marta bosish orqali yozilish, navbatni onlayn kuzatish va tibbiy hujjatlarni doimo yonida olib yurish."
        },
        investors: {
          title: "Investorlar & Hamkorlar",
          desc: "Yillik 50%+ o'sish sur'atiga ega, $4.1 mlrdlik Markaziy Osiyo HealthTech bozorida yetakchilik imkoniyati."
        },
        government: {
          title: "Davlat Tashkilotlari",
          desc: "Sog'liqni saqlash sohasida shaffoflik va real vaqtda milliy miqyosdagi statistik tahlillarni shakllantirish."
        }
      }
    },
    market: {
      headline: "Innovatsiyaga Tayyor $4.1 Mlrdlik Bozor",
      subheadline: "Markaziy Osiyoda raqamli sog'liqni saqlashga bo'lgan talab juda tez sur'atlarda o'sib bormoqda.",
      population: "Aholi",
      clinicsCount: "Klinikalar soni",
      growthPotential: "Raqamlashtirish darajasi",
      stats: {
        tam: "TAM (Umumiy Bozor Hajmi)",
        tamDesc: "Markaziy Osiyo xususiy tibbiyot va sug'urta bozorining umumiy salohiyati.",
        sam: "SAM (Mavjud Xizmat Bozori)",
        samDesc: "Tibbiy dasturiy ta'minot va raqamlashtirishga tayyor xususiy klinikalar ulushi.",
        som: "SOM (Egallanishi Mumkin Bo'lgan Bozor)",
        somDesc: "Bizning dastlabki 3 yillik maqsadimiz - 500 dan ortiq yirik klinika va tibbiyot markazlari."
      },
      countriesData: {
        uzbekistan: {
          name: "O'zbekiston",
          desc: "Markaziy Osiyodagi eng katta va jadal rivojlanayotgan bozor. Davlat tomonidan tibbiyotni raqamlashtirish islohotlari qo'llab-quvvatlanmoqda.",
          popVal: "36.5 mln",
          clinicsVal: "3,200+",
          digitVal: "Kamroq (<15%)"
        },
        kazakhstan: {
          name: "Qozog'iston",
          desc: "Mintaqadagi eng yuqori sotib olish qobiliyatiga ega, xususiy sug'urta va ilg'or klinika tarmoqlari rivojlangan bozor.",
          popVal: "20.2 mln",
          clinicsVal: "4,100+",
          digitVal: "O'rta (~35%)"
        },
        kyrgyzstan: {
          name: "Qirg'iziston",
          desc: "SaaS mahsulotlarini tezkor integratsiya qilish uchun qulay sharoitlarga ega, o'sib borayotgan startap ekotizimi.",
          popVal: "7.1 mln",
          clinicsVal: "950+",
          digitVal: "Past (~12%)"
        },
        tajikistan: {
          name: "Tojikiston",
          desc: "Sog'liqni saqlash xarajatlari ortib borayotgan, raqamli innovatsiyalarga juda muhtoj va bokira bozor.",
          popVal: "10.1 mln",
          clinicsVal: "800+",
          digitVal: "Juda past (<8%)"
        }
      }
    },
    traction: {
      headline: "Klinikalarning H+ ga Bo'lgan Kuchli Qiziqishi",
      subheadline: "Erta bosqichdayoq bozorda mahsulotga nisbatan kuchli talabni shakllantirishga muvaffaq bo'ldik.",
      metrics: {
        discussions: "8+ Faol Muzokaralar",
        discussionsDesc: "Toshkent va Olmati shaharlaridagi eng yirik tibbiyot tarmoqlari.",
        signed: "3 Ta Imzolangan Pilot",
        signedDesc: "Iyul oyidan boshlab to'liq integratorlik tizimini ishga tushirish.",
        waitlist: "47+ Kutish Ro'yxatidagi Klinikalar",
        waitlistDesc: "Platformaning ommaviy relizini kutayotgan shifokorlar.",
        mvp: "Tayyor MVP Mahsulot",
        mvpDesc: "Mutlaqo ishchi holatdagi klinika paneli va bemorlar ilovasi."
      },
      testimonials: {
        headline: "Tibbiyot Guruhi Rahbarlaridan Fikrlar",
        quote1: "H+ xususiy klinikalar uchun haqiqiy najot. Navbatlarni boshqarish va elektron kartalar integratsiyasi bizga mijozlar oqimini 30% ga oshirishga imkon beradi.",
        author1: "Dr. Alisher Qodirov",
        position1: "Medion Clinic Bosh Shifokori",
        quote2: "Sog'liqni saqlash integratsiyasi Markaziy Osiyoda har doim zaif bo'lgan. H+ bu bo'shliqni eng zamonaviy darajada to'ldirdi.",
        author2: "Elena Smirnova",
        position2: "Sog'liqni saqlash bo'yicha Mustaqil Ekspert"
      }
    },
    investors: {
      headline: "Kuchli Rivojlanayotgan Bozorlarda Kelajak Tibbiyotini Quring",
      subheadline: "H+ mintaqaning yetakchi tibbiyot infratuzilmasiga aylanadi. Biz bilan birga o'sing.",
      funding: {
        target: "$750K - $1M",
        targetTitle: "Seed Investitsiya Bosqichi",
        targetDesc: "Kompaniya kapitalini kengaytirish, bozorda tezkor pozitsiyalarni egallash va o'sishni jadallashtirish uchun.",
        thesisTitle: "Investitsion Tezis",
        thesisDesc: "Markaziy Osiyo aholisi 75 milliondan oshadi. Xususiy tibbiyot sohasiga sarflanadigan mablag' yillik 18% ga o'smoqda, biroq klinikalarning 85 foizidan ortig'i hali ham qog'ozda yoki eskirgan dasturlarda ishlaydi. H+ bu muammoni hal qiluvchi yagona integratsiyalashgan ekotizimdir.",
        allocationTitle: "Mablag'lardan Foydalanish"
      },
      useOfFunds: {
        development: {
          title: "Mahsulot Ta'minoti (40%)",
          desc: "AI modullari, mobil ilovani kengaytirish va integratsiyalarni mustahkamlash."
        },
        team: {
          title: "Jamoani Kengaytirish (25%)",
          desc: "Top darajali muhandislar va mintaqaviy savdo rahbarlarini jalb qilish."
        },
        marketing: {
          title: "Marketing va Savdo (20%)",
          desc: "B2B savdo tizimini faollashtirish va xalqaro ko'rgazmalar orqali mijoz orttirish."
        },
        operations: {
          title: "Operatsiyalar (15%)",
          desc: "Yuridik litsenziyalash, server xavfsizligi va qo'llab-quvvatlash xizmati."
        }
      },
      milestones: {
        title: "Kutilayotgan Marralar",
        m1: "Yillik qaytalanuvchi daromadni (ARR) $150K ga yetkazish",
        m2: "O'zbekistonda 50 ta hamkor klinikalarni ulash",
        m3: "Qozog'iston bozoriga rasmiy chiqish va pilotlarni boshlash",
        m4: "Xalqaro sug'urta kompaniyalari tizimiga ulanish"
      }
    },
    pricing: {
      headline: "Shaxsiy Brend va Klinikalar Uchun Mos Tariflarni Tanlang",
      subheadline: "Yashirin to'lovlarsiz, klik orqali qulay va tezkor integratsiya.",
      billingToggle: {
        monthly: "Oylik",
        annually: "Yillik"
      },
      starter: {
        name: "Starter",
        price: "$49",
        desc: "Kichik klinikalar yoki individual faoliyat yurituvchi shifokorlar xonalari uchun.",
        features: [
          "Onlayn onlayn navbat yozilishi",
          "Bemorlarning asosiy reyestri (1,000 tagacha)",
          "Sms-eslatmalar integratsiyasi",
          "Haftalik hisobot va analitika"
        ]
      },
      growth: {
        name: "Growth",
        price: "$149",
        desc: "O'sib borayotgan va o'z jarayonlarini to'liq raqamlashtirishni istagan tibbiy markazlar.",
        features: [
          "Elektron Tibbiyot Kartalari (EHR) - cheksiz",
          "5 tagacha shifokor kabineti integratsiyasi",
          "Analitik boshqaruv paneli va statistika",
          "Bemorlar uchun H+ mobil ilovasida joylashuv",
          "H+ brendisiz shaxsiy sahifa"
        ]
      },
      enterprise: {
        name: "Enterprise",
        price: "Maxsus",
        desc: "Ko'p tarmoqli klinikalar, laboratoriyalar va shifoxonalar tarmoqlari uchun.",
        features: [
          "Barcha H+ modullari (Klinika, EHR, Laboratoriya, Sug'urta)",
          "Cheksiz shifokorlar va foydalanuvchilar soni",
          "Shaxsiy menejer va 24/7 texnik yordam",
          "Mahalliy serverlarga integratsiya imkoniyati",
          "Xalqaro standard sertifikatlashtirish (HIPAA yordami)"
        ]
      }
    },
    company: {
      headline: "Kelajak Tibbiyotining Infratuzilmasi",
      subheadline: "Biz shunchaki dastur tuzmayapmiz, balki insonlar hayotini qutqarishga yordam beruvchi bog'lamni barpo etmoqdamiz.",
      mission: {
        title: "Bizning Missiyamiz",
        desc: "Markaziy Osiyo sog'liqni saqlash tizimini yagona, zamonaviy va hamma uchun ochiq operatsion platformaga aylantirish."
      },
      vision: {
        title: "Bizning Vizyonimiz",
        desc: "Mintaqadagi har bir shifoxona va bemor yagona ma'lumotlar tarmog'iga ulanib, tibbiy yordam olish jarayonini 10 barobar tezlashtirish."
      },
      team: {
        title: "Kompaniya Asoschilaridan Tashkil Topgan Jamoa",
        member1: {
          name: "Davron Ramazonov",
          role: "Asoschi & Bosh Direktor (CEO)",
          bio: "Sog'liqni saqlash integratsiyasi va b2b SaaS tizimlari bo'yicha 8 yillik xalqaro tajribaga ega strateg."
        },
        member2: {
          name: "Shaxzod Alimov",
          role: "Texnik Direktor (CTO)",
          bio: "Yuqori yuklamali axborot tizimlari me'mori, sobiq Senior Engineer, sun'iy intellekt eksperti."
        },
        member3: {
          name: "Dr. Kamola Tursunova",
          role: "Tibbiy Maslahatchi va Strateg",
          bio: "Kardiolog, tibbiyot fanlari nomzodi, zamonaviy klinika boshqarish metodologiyasi eksperti."
        }
      },
      roadmap: {
        title: "Rivojlanish Yo'li (Roadmap)",
        q3_2025: {
          quarter: "2025 Q3",
          title: "MVP va Dastlabki Sinovlar",
          desc: "Toshkent shahridagi 3 ta pilot klinikaga platformani joriy etish va tizim barqarorligini sinash."
        },
        q4_2025: {
          quarter: "2025 Q4",
          title: "Bozorga Ommaviy Chiqish",
          desc: "B2B savdo tizimini kengaytirish, mustaqil dori va laboratoriya tarmoqlarini platformaga qo'shish."
        },
        q1_2026: {
          quarter: "2026 Q1-Q2",
          title: "O'zbekiston Bo'ylab Kengayish",
          desc: "Viloyatlar markazlaridagi xususiy klinikalarning 40 foizdan ortig'ini platformaga qamrab olish."
        },
        h2_2026: {
          quarter: "2026 H2+",
          title: "Markaziy Osiyo Bozoriga Chiqish",
          desc: "Qozog'iston, Qirg'iziston va Tojikiston davlatlarida mintaqaviy filiallarni ochish va integratsiyani boshlash."
        }
      }
    },
    demoModal: {
      title: "H+ Demoni Buyurtma Qilish",
      subtitle: "Bizning ekspertlarimiz siz bilan bog'lanib, klinikangizni 3 barobar samaraliroq qilish yo'llarini ko'rsatib beradi.",
      fullName: "Ism va Familiyangiz",
      email: "Elektron pochta manzili",
      orgName: "Tashkilot/Klinika nomi",
      role: "Sizning lavozimingiz (shifokor, rahbar, investor)",
      country: "Davlatingiz",
      message: "Guruh yoki qo'shimcha savollar (ixtiyoriy)",
      submitSuccess: "Sizning so'rovingiz qabul qilindi. Tez orada mutaxassislarimiz bog'lanishadi!",
      submitError: "Iltimos, barcha majburiy maydonlarni to'ldiring."
    },
    footer: {
      desc: "Markaziy Osiyo bo'ylab shifokorlar va bemorlarni yagona ekotizimda birlashtiruvchi yagona sog'liqni saqlash operatsion platformasi.",
      rights: "Barcha huquqlar himoyalangan.",
      company: "Kompaniya",
      legal: "Huquqiy ma'lumot",
      contact: "Aloqa",
      privacy: "Maxfiylik siyosati",
      terms: "Foydalanish shartlari",
      address: "Toshkent shahri, Mirobod tumani, Taras Shevchenko ko'chasi, 21 uy."
    }
  },
  ru: {
    common: {
      demoBtn: "Запросить демо",
      partnerBtn: "Стать партнером",
      learnMore: "Подробнее",
      submit: "Отправить",
      submitting: "Отправка...",
      close: "Закрыть",
      contactUs: "Связаться",
      countries: "Целевые страны",
      audience: "Целевая аудитория",
      success: "Успешно!",
      dashboard: "Панель управления",
      mobileApp: "Мобильное приложение",
      metrics: "Метрики",
      annual: "Ежегодно (скидка 20%)",
      monthly: "Ежемесячно",
      perMonth: "/мес",
      getStarted: "Начать",
      comingSoon: "Скоро",
      popular: "Популярно",
    },
    nav: {
      product: "Продукт",
      solutions: "Решения",
      market: "Рынок",
      traction: "Результаты",
      pricing: "Тарифы",
      company: "Компания",
      investors: "Инвесторам"
    },
    hero: {
      badge: "HealthTech экосистема №1 в Центральной Азии",
      headline: "Операционная система здравоохранения Центральной Азии",
      subheadline: "Единая высокотехнологичная платформа, объединяющая пациентов, клиники, врачей, лаборатории и страховые компании.",
      trustedClinics: "поддерживается ведущими медицинскими центрами",
      stats: {
        registered: "Зарегистрированных пациентов",
        clinics: "Клиник-партнеров",
        transactions: "Транзакций в год",
        uptime: "Стабильность системы"
      }
    },
    product: {
      headline: "Все в одном для современного здравоохранения",
      subheadline: "Автоматизируйте все процессы — от администрирования клиники до долгосрочного ухода за пациентами.",
      modules: {
        queue: {
          title: "Умная очередь и бронирование",
          desc: "Управление онлайн-записью и ИИ-очередью, сокращающее время ожидания в клинике до 45%."
        },
        clinic: {
          title: "Управление клиникой",
          desc: "Контроль финансов, отчетности, документооборота и запасов медикаментов в едином окне."
        },
        ehr: {
          title: "Электронные медицинские карты (EHR)",
          desc: "Безопасная система хранения историй болезней, рецептов и лабораторных результатов по мировым стандартам."
        },
        ai: {
          title: "ИИ и Аналитика",
          desc: "Интеллектуальный помощник для прогнозирования нагрузки клиники и ранней диагностики заболеваний."
        },
        app: {
          title: "Мобильное приложение пациента",
          desc: "Личный кабинет пациента, результаты анализов, рецепты и оперативный чат с лечащим врачом."
        },
        integrations: {
          title: "Интеграция лабораторий и страхования",
          desc: "Автоматический защищенный обмен данными с крупнейшими лабораториями и страховыми компаниями."
        }
      },
      dashboardMockup: {
        searchPatient: "Поиск пациента...",
        upcomingAppointments: "Ближайшие приемы",
        patientName: "Пациент",
        doctorName: "Врач",
        status: "Статус",
        diagnose: "Диагноз",
        activeConsultations: "Активные консультации",
        waitingTime: "Ср. время ожидания",
        occupancyRate: "Загрузка клиники",
        revenueThisMonth: "Доход в этом месяце"
      }
    },
    solutions: {
      headline: "Для всех участников сферы здравоохранения",
      subheadline: "H+ предлагает индивидуально адаптированные решения, надежную инфраструктуру и максимальную прозрачность.",
      cards: {
        clinics: {
          title: "Частные клиники",
          desc: "Повышение доходности клиники, оптимизация расписания врачей и рост лояльности ваших пациентов."
        },
        doctors: {
          title: "Врачи",
          desc: "Отказ от бумажной работы, автозаполнение карт, удобная выписка электронных рецептов."
        },
        patients: {
          title: "Пациенты",
          desc: "Запись к врачу в один клик, отслеживание своей очереди онлайн, вся медкарта в вашем телефоне."
        },
        investors: {
          title: "Инвесторы и партнеры",
          desc: "Возможность лидировать на быстрорастущем рынке HealthTech Центральной Азии объемом в $4.1 млрд."
        },
        government: {
          title: "Гос. регуляторы",
          desc: "Полная медицинская прозрачность и формирование национальной аналитической статистики в реальном времени."
        }
      }
    },
    market: {
      headline: "Рынок объемом $4.1 млрд, готовый к инновациям",
      subheadline: "Спрос на цифровые услуги в здравоохранении Центральной Азии растет в геометрической прогрессии.",
      population: "Население",
      clinicsCount: "Количество клиник",
      growthPotential: "Уровень цифровизации",
      stats: {
        tam: "TAM (Общий объем целевого рынка)",
        tamDesc: "Весь потенциал сектора частной медицины и медицинского страхования в Центральной Азии.",
        sam: "SAM (Доступный объем рынка)",
        samDesc: "Доля частных клиник, готовых перейти на облачные SaaS-решения и автоматизацию.",
        som: "SOM (Реально достижимый объем рынка)",
        somDesc: "Наша цель на первые 3 года - 500+ крупных медицинских центров и клиник."
      },
      countriesData: {
        uzbekistan: {
          name: "Узбекистан",
          desc: "Самый большой и динамично растущий рынок в регионе. Сильная государственная поддержка реформ цифровизации медицины.",
          popVal: "36.5 млн",
          clinicsVal: "3,200+",
          digitVal: "Низкий (<15%)"
        },
        kazakhstan: {
          name: "Казахстан",
          desc: "Самый высокий уровень доходов, развитые сети частных медицинских центров и страховой инфраструктуры.",
          popVal: "20.2 млн",
          clinicsVal: "4,100+",
          digitVal: "Средний (~35%)"
        },
        kyrgyzstan: {
          name: "Кыргызстан",
          desc: "Гибкий растущий стартап-рынок с открытыми условиями для быстрого внедрения инновационных облачных решений.",
          popVal: "7.1 млн",
          clinicsVal: "950+",
          digitVal: "Низкий (~12%)"
        },
        tajikistan: {
          name: "Таджикистан",
          desc: "Быстрорастущие затраты на медицину при практически полном отсутствии современных локальных цифровых платформ.",
          popVal: "10.1 млн",
          clinicsVal: "800+",
          digitVal: "Очень низкий (<8%)"
        }
      }
    },
    traction: {
      headline: "Высокий интерес со стороны клиник к H+",
      subheadline: "Уже на ранней стадии мы получили подтверждение сильной востребованности продукта на практике.",
      metrics: {
        discussions: "8+ Активных Переговоров",
        discussionsDesc: "С крупнейшими многопрофильными медицинскими сетями в Ташкенте и Алматы.",
        signed: "3 Подписанных Пилота",
        signedDesc: "Запуск полномасштабной интеграционной системы уже с июля этого года.",
        waitlist: "47+ Клиник в Листе Ожидания",
        waitlistDesc: "Медицинские центры, готовые к подключению после выпуска публичной версии.",
        mvp: "Разработанный MVP продукт",
        mvpDesc: "Полностью функционирующая панель управления клиникой и приложение для пациентов."
      },
      testimonials: {
        headline: "Отзывы лидеров медицинских сетей",
        quote1: "H+ — настоящее спасение для частных клиник. Интеграция умной очереди и цифровых карт позволит нам увеличить пропускную способность клиники на 30%.",
        author1: "Д-р Алишер Кадыров",
        position1: "Главный врач клиники Medion",
        quote2: "Интеграция медицинских данных всегда была слабым местом в Центральной Азии. H+ заполнила этот пробел на высшем технологическом уровне.",
        author2: "Елена Смирнова",
        position2: "Независимый эксперт в сфере здравоохранения"
      }
    },
    investors: {
      headline: "Стройте будущее медицины на развивающихся рынках",
      subheadline: "H+ становится ведущей медицинской инфраструктурой в регионе. Растите вместе с нами.",
      funding: {
        target: "$750K - $1M",
        targetTitle: "Посевный инвестиционный раунд",
        targetDesc: "Для расширения присутствия на рынке, увеличения уставного капитала и ускорения роста продаж.",
        thesisTitle: "Инвестиционный тезис",
        thesisDesc: "Население Центральной Азии превышает 75 миллионов человек. Сектор частной медицины растет на 18% ежегодно, однако более 85% клиник работают на бумаге или устаревшем ПО. H+ — единственная полностью интегрированная облачная экосистема, которая решает эту проблему.",
        allocationTitle: "Использование привлекаемых средств"
      },
      useOfFunds: {
        development: {
          title: "Разработка продукта (40%)",
          desc: "Интеграция ИИ, улучшение мобильного приложения и расширение API."
        },
        team: {
          title: "Расширение команды (25%)",
          desc: "Найм топовых инженеров, ИИ-исследователей и локальных директоров по продажам."
        },
        marketing: {
          title: "Продажи и маркетинг (20%)",
          desc: "Продвижение B2B SaaS-модели и организация региональных конгрессов клиник."
        },
        operations: {
          title: "Операционные расходы (15%)",
          desc: "Лицензирование, сертификация безопасности данных и круглосуточная поддержка."
        }
      },
      milestones: {
        title: "Ключевые вехи",
        m1: "Выход на ARR (повторяющийся годовой доход) в $150K",
        m2: "Подключение 50 партнерских клиник в Узбекистане",
        m3: "Официальный выход на рынок Казахстана и запуск пилотных клиник",
        m4: "Интеграция с крупнейшими международными страховыми брендами"
      }
    },
    pricing: {
      headline: "Выбирайте гибкие тарифы под масштабы вашего бизнеса",
      subheadline: "Никаких скрытых платежей. Простая интеграция и быстрый старт.",
      billingToggle: {
        monthly: "Ежемесячно",
        annually: "Ежегодно"
      },
      starter: {
        name: "Starter",
        price: "$49",
        desc: "Для небольших кабинетов врачей или персональной практики.",
        features: [
          "Умная онлайн-запись пациентов",
          "Базовый реестр пациентов (до 1000 записей)",
          "Автоматические SMS-напоминания",
          "Еженедельный аналитический отчет"
        ]
      },
      growth: {
        name: "Growth",
        price: "$149",
        desc: "Медицинские центры, желающие полностью оцифровать и автоматизировать внутренние процессы.",
        features: [
          "Электронные медкарты (EHR) — без ограничений",
          "Подключение до 5 кабинетов/врачей",
          "Расширенные дашборды и графики доходов",
          "Публикация в приложении пациента H+",
          "Персональный домен без водяных знаков H+"
        ]
      },
      enterprise: {
        name: "Enterprise",
        price: "Индивидуально",
        desc: "Для крупных многопрофильных медицинских сетей, больниц и лабораторий.",
        features: [
          "Все модули H+ (Клиника, EHR, Лаборатория, Страхование)",
          "Безлимитное количество врачей и сотрудников",
          "Выделенный менеджер и техподдержка 24/7",
          "Возможность развертывания на выделенных серверах (On-Premise)",
          "Соответствие международным стандартам безопасности (HIPAA)"
        ]
      }
    },
    company: {
      headline: "Инфраструктура медицины будущего",
      subheadline: "Мы создаем не просто софт, а технологический мост, спасающий жизни людей благодаря быстрой передаче критических медицинских данных.",
      mission: {
        title: "Наша миссия",
        desc: "Превратить разрозненные клиники и данные в единую, эффективную и доступную экосистему здравоохранения по всей Центральной Азии."
      },
      vision: {
        title: "Наше видение",
        desc: "Каждая клиника и пациент в регионе соединены надежной цифровой сетью, ускоряющей оказание качественной помощи в 10 раз."
      },
      team: {
        title: "Основатели и Руководящий состав",
        member1: {
          name: "Даврон Рамазонов",
          role: "Основатель и генеральный директор (CEO)",
          bio: "Стратег с 8-летним опытом работы в сфере интеграции медицинских систем и развития B2B SaaS на международных рынках."
        },
        member2: {
          name: "Шахзод Алимов",
          role: "Технический директор (CTO)",
          bio: "Архитектор высоконагруженных систем, эксперт в сфере искусственного интеллекта и безопасности данных."
        },
        member3: {
          name: "Д-р Камола Турсунова",
          role: "Медицинский директор",
          bio: "Кардиолог, кандидат медицинских наук, эксперт по внедрению современных клинических стандартов в облачные системы."
        }
      },
      roadmap: {
        title: "Дорожная карта развития",
        q3_2025: {
          quarter: "Q3 2025",
          title: "MVP и запуск пилотов",
          desc: "Внедрение платформы в первые 3 пилотируемые клиники Ташкента, отладка алгоритмов прогнозирования очередей."
        },
        q4_2025: {
          quarter: "Q4 2025",
          title: "Масштабный Go-To-Market",
          desc: "Запуск маркетинговой кампании B2B, подключение аптечных сетей и сетевых лабораторий к API платформы."
        },
        q1_2026: {
          quarter: "Q1-Q2 2026",
          title: "Экспансия по Узбекистану",
          desc: "Оцифровка не менее 40% крупных клиник в регионах Узбекистана, запуск первого государственного партнерства."
        },
        h2_2026: {
          quarter: "H2 2026+",
          title: "Выход на рынки Центральной Азии",
          desc: "Открытие полноценных офисов в Казахстане (Алматы), Кыргызстане (Бишкек) и запуск первых трансграничных медицинских полисов."
        }
      }
    },
    demoModal: {
      title: "Заявка на демонстрацию H+",
      subtitle: "Наши специалисты свяжутся с вами, чтобы продемонстрировать все преимущества оцифровки вашей клиники.",
      fullName: "Ваше имя и фамилия",
      email: "Адрес электронной почты",
      orgName: "Название вашей организации",
      role: "Ваша должность (врач, руководитель, инвестор)",
      country: "Ваша страна",
      message: "Сообщение или дополнительные требования (необязательно)",
      submitSuccess: "Заявка успешно отправлена! Наш менеджер свяжется с вами в течение рабочего дня.",
      submitError: "Пожалуйста, заполните все обязательные поля."
    },
    footer: {
      desc: "Единая операционная медицинская платформа, объединяющая клиники, врачей и пациентов на развивающихся рынках Центральной Азии.",
      rights: "Все права защищены.",
      company: "Компания",
      legal: "Юридическая информация",
      contact: "Контакты",
      privacy: "Политика конфиденциальности",
      terms: "Условия использования",
      address: "г. Ташкент, Мирабадский район, ул. Тараса Шевченко, дом 21."
    }
  },
  en: {
    common: {
      demoBtn: "Request Demo",
      partnerBtn: "Partner With Us",
      learnMore: "Learn More",
      submit: "Submit",
      submitting: "Submitting...",
      close: "Close",
      contactUs: "Contact Us",
      countries: "Target Countries",
      audience: "Target Audience",
      success: "Success!",
      dashboard: "Dashboard",
      mobileApp: "Mobile App",
      metrics: "Metrics",
      annual: "Annually (Save 20%)",
      monthly: "Monthly",
      perMonth: "/mo",
      getStarted: "Get Started",
      comingSoon: "Coming Soon",
      popular: "Most Popular",
    },
    nav: {
      product: "Product",
      solutions: "Solutions",
      market: "Market",
      traction: "Traction",
      pricing: "Pricing",
      company: "Company",
      investors: "Investors"
    },
    hero: {
      badge: "No.1 HealthTech Ecosystem in Central Asia",
      headline: "The Operating System for Healthcare in Central Asia",
      subheadline: "One unified ecosystem connecting patients, clinics, doctors, laboratories, pharmacies, and insurance providers across emerging markets.",
      trustedClinics: "trusted by leading healthcare medical centers",
      stats: {
        registered: "Registered Patients",
        clinics: "Partner Clinics",
        transactions: "Yearly Transactions",
        uptime: "Platform Uptime"
      }
    },
    product: {
      headline: "All-in-One Platform for Modern Healthcare",
      subheadline: "Streamline everything from clinic operations to long-term patient care paths.",
      modules: {
        queue: {
          title: "Smart Queue & Booking",
          desc: "Online scheduling and AI-driven queue balancing that reduces clinic waiting times by up to 45%."
        },
        clinic: {
          title: "Clinic Management",
          desc: "Manage finances, complex physician schedules, billing, and pharmacy stock inside a web-based dashboard."
        },
        ehr: {
          title: "Electronic Health Records (EHR)",
          desc: "HIPAA-compliant, highly secure digital charts keeping full histories, prescriptions, and lab data instantly accessible."
        },
        ai: {
          title: "AI Analytics",
          desc: "Predictive clinic occupancy analysis, digital diagnostic helpers, and automatic medical record summarization."
        },
        app: {
          title: "Patient Mobile Application",
          desc: "Dedicated personal app with instant appointment bookings, medical prescriptions, laboratory findings, and direct physician chat."
        },
        integrations: {
          title: "Lab & Insurance Integrations",
          desc: "Seamless, automated secure payload exchange supporting national laboratories and commercial insurance claims."
        }
      },
      dashboardMockup: {
        searchPatient: "Search patient...",
        upcomingAppointments: "Upcoming Appointments",
        patientName: "Patient",
        doctorName: "Doctor",
        status: "Status",
        diagnose: "Diagnosis",
        activeConsultations: "Active Consultations",
        waitingTime: "Avg. Waiting Time",
        occupancyRate: "Clinic Loading",
        revenueThisMonth: "Revenue (M-T-D)"
      }
    },
    solutions: {
      headline: "Designed for the Entire Healthcare Value Chain",
      subheadline: "H+ brings state-of-the-art secure infrastructure, fast workflows, and extreme transparency for every player.",
      cards: {
        clinics: {
          title: "Private Clinics",
          desc: "Unlock new revenue peaks, optimize medical rosters, and establish absolute customer retention."
        },
        doctors: {
          title: "Physicians",
          desc: "Bypass burdensome paperwork. Get structured digital charts, predictive templates, and faster workflows."
        },
        patients: {
          title: "Active Patients",
          desc: "Book certified practitioners in seconds, preview live queues, and carry medical histories in pockets."
        },
        investors: {
          title: "Investors & Partners",
          desc: "Acquire dominant exposure in an untapped, high-growth $4.1B regional market expanding at CAGR 18%."
        },
        government: {
          title: "State Agencies",
          desc: "Synthesize large-scale aggregate diagnostic trends and real-time public health metrics seamlessly."
        }
      }
    },
    market: {
      headline: "$4.1B Market Ready for Innovation",
      subheadline: "The demand for modern digitized medical resources across Central Asian economies is skyrocketing.",
      population: "Population",
      clinicsCount: "Private Clinics",
      growthPotential: "Digitization Index",
      stats: {
        tam: "TAM (Total Addressable Market)",
        tamDesc: "Total capacity of private healthcare services and commercial health insurance across Central Asia.",
        sam: "SAM (Serviceable Addressable Market)",
        samDesc: "Share of medical centers currently budgeted and prepared for cloud SaaS subscriptions.",
        som: "SOM (Serviceable Obtainable Market)",
        somDesc: "Our immediate 3-year acquisition milestone capturing over 500 premium clinical installations."
      },
      countriesData: {
        uzbekistan: {
          name: "Uzbekistan",
          desc: "Largest and most concentrated populous in Central Asia. Strong governmental tailwinds push for national cloud healthcare standards.",
          popVal: "36.5M",
          clinicsVal: "3,200+",
          digitVal: "Low (<15%)"
        },
        kazakhstan: {
          name: "Kazakhstan",
          desc: "Highest per capita income. Developed private clinical conglomerates and well-spread commercial private medical coverage.",
          popVal: "20.2M",
          clinicsVal: "4,100+",
          digitVal: "Medium (~35%)"
        },
        kyrgyzstan: {
          name: "Kyrgyzstan",
          desc: "Highly tech-receptive tech hub. Favorable fast-track regulatory landscape for micro-SaaS deployments and fintech integrations.",
          popVal: "7.1M",
          clinicsVal: "950+",
          digitVal: "Low (~12%)"
        },
        tajikistan: {
          name: "Tajikistan",
          desc: "Underpenetrated healthcare landscape experiencing double-digit outpatient infrastructure growth and requiring rapid digital foundations.",
          popVal: "10.1M",
          clinicsVal: "800+",
          digitVal: "Very Low (<8%)"
        }
      }
    },
    traction: {
      headline: "Strong Early Signal Clinics Want H+",
      subheadline: "We have established direct verification of product-market-fit before releasing the public version.",
      metrics: {
        discussions: "8+ Active Pipeline Discussions",
        discussionsDesc: "With largest cross-discipline private hospital groups in Tashkent and Almaty.",
        signed: "3 Signed Pilot Installations",
        signedDesc: "Full-scale core stack integration commencing beginning of July 2025.",
        waitlist: "47+ On-Waiting List Clinics",
        waitlistDesc: "Registered partner clinics queueing up for general availability launch.",
        mvp: "Production-ready MVP",
        mvpDesc: "Completed fully integrated cloud hospital system and functional iOS/Android patient portal."
      },
      testimonials: {
        headline: "Endorsements from Clinical Directors",
        quote1: "H+ resolves a multi-year coordination challenge for Central Asian clinics. The Smart Queue alone increases our patient processing capacity by 30%.",
        author1: "Dr. Alisher Kadyrov",
        position1: "Medical Director, Medion Clinic",
        quote2: "Secure remote medical histories have historically been neglected here. H+ delivers absolute global quality standards tailored for regional clinics.",
        author2: "Elena Smirnova",
        position2: "Senior Healthcare Technology Consultant"
      }
    },
    investors: {
      headline: "Powering the Future of Medicine in High-Velocity Markets",
      subheadline: "H+ is laying down the digital tollways for a massive healthcare boom. Build and scale with us.",
      funding: {
        target: "$750K - $1M",
        targetTitle: "Seed Funding Round",
        targetDesc: "Sourcing institutional capital to solidify technical leadership, expand regional sales hubs, and speed up clinical installations.",
        thesisTitle: "Investment Thesis",
        thesisDesc: "Central Asia’s population is expanding past 75 million. While private healthcare billing experiences a historic 18% annual climb, over 85% of hospitals handle operations via paper files or legacy software. H+ offers the region's first truly unified cloud platform built explicitly to capture this critical gap.",
        allocationTitle: "Use of Funds Allocation"
      },
      useOfFunds: {
        development: {
          title: "Product Engineering (40%)",
          desc: "Extending localized AI prediction engines, solidifying patient telepath portals, and API developer tooling."
        },
        team: {
          title: "Talent Acquisition (25%)",
          desc: "Acquiring international engineering leads, clinical consultants, and regional enterprise sales experts."
        },
        marketing: {
          title: "Go-to-Market & Sales (20%)",
          desc: "SaaS acquisition funnels, local hardware integrations, and primary healthcare summits."
        },
        operations: {
          title: "Core Operations (15%)",
          desc: "Enforcing HIPAA certifications, securing multi-region databases, and 24/7 hospital SLA response teams."
        }
      },
      milestones: {
        title: "Growth Projections",
        m1: "Achieve $150K Annual Recurring Revenue (ARR) within 6 months",
        m2: "Establish 50 integrated B2B hospital accounts across Uzbekistan",
        m3: "Expand direct clinical pilot testing in Almaty, Kazakhstan",
        m4: "Seal commercial integrations with top regional insurance groups"
      }
    },
    pricing: {
      headline: "Transparent, Scale-Friendly Subscriptions",
      subheadline: "No auxiliary installations. Upgrade, downgrade, or customize anytime.",
      billingToggle: {
        monthly: "Monthly billing",
        annually: "Annual billing"
      },
      starter: {
        name: "Starter",
        price: "$49",
        desc: "Ideal for individual practitioner rooms and micro boutique health offices.",
        features: [
          "AI-driven patient booking module",
          "Digital Patient database (up to 1,000 active charts)",
          "Automatic SMS coordination",
          "Weekly administrative breakdowns"
        ]
      },
      growth: {
        name: "Growth",
        price: "$149",
        desc: "Designed for midscale medical clinics wanting to remove manual data loops.",
        features: [
          "Full Electronic Health Records (EHR) — Unlimited",
          "Dedicated clinician login seats (up to 5)",
          "Advanced analytics & clinic loading forecasts",
          "H+ Patient Mobile App search indexing",
          "Custom branding with zero H+ watermark labels"
        ]
      },
      enterprise: {
        name: "Enterprise",
        price: "Custom",
        desc: "Engineered for high-volume hospitals, regional laboratories, and multi-location networks.",
        features: [
          "Bespoke multi-module stack (Clinic, EHR, Lab, Insurances)",
          "Unlimited staff, clinician and researcher logins",
          "Dedicated clinical success director & 24/7 priority SLA support",
          "On-Premise private cluster hosting eligibility",
          "Guaranteed HIPAA data alignment and regional compliance"
        ]
      }
    },
    company: {
      headline: "The Digital Tollway for Regional Health Care",
      subheadline: "We build unified tech networks that connect vital healthcare structures, enabling faster life-saving clinical coordination.",
      mission: {
        title: "Our Mission",
        desc: "To unite fragmented clinical networks and records into a seamless, modern, accessible health operating platform across Central Asia."
      },
      vision: {
        title: "Our Vision",
        desc: "Laying the digital rails where every hospital, laboratory, doctor, and patient coordinate in real-time, boosting care efficiency by 10x."
      },
      team: {
        title: "Leadership Team",
        member1: {
          name: "Davron Ramazonov",
          role: "Founder & Chief Executive Officer (CEO)",
          bio: "SaaS strategist with 8 years of expert experience directing healthcare integrations and cloud operations in emerging markets."
        },
        member2: {
          name: "Shaxzod Alimov",
          role: "Chief Technology Officer (CTO)",
          bio: "High-scale systems architect, security expert, and developer of localized predictive medical AI models."
        },
        member3: {
          name: "Dr. Kamola Tursunova",
          role: "Chief Medical Strategy Officer",
          bio: "Cardiologist, PhD in Medical Sciences, leading Clinical workflow transitions and SaaS alignment across Central Asia."
        }
      },
      roadmap: {
        title: "Development Milestones",
        q3_2025: {
          quarter: "Q3 2025",
          title: "MVP Deployment & Primary Testing",
          desc: "Provisioning active integrated terminals across 3 pilot clinics in Tashkent."
        },
        q4_2025: {
          quarter: "Q4 2025",
          title: "Regional GTM & API Integrations",
          desc: "Launching active commercial pipeline, connecting major pharmaceutical warehouses and labs to API interfaces."
        },
        q1_2026: {
          quarter: "Q1-Q2 2026",
          title: "National Domination",
          desc: "Digitizing 40% of all registered active Tashkent/Samarkand hospital networks and forging state partnerships."
        },
        h2_2026: {
          quarter: "H2 2026+",
          title: "Pan-Central Asia Expansion",
          desc: "Establishing legal corporate operations in Almaty and Bishkek to handle cross-border health programs."
        }
      }
    },
    demoModal: {
      title: "Request a Live Demo",
      subtitle: "See how the H+ Operating System is driving next-level efficiency, cost savings, and patient coordination.",
      fullName: "Full Name",
      email: "Business Email",
      orgName: "Organization / Clinic Name",
      role: "Your Role (Practice Lead, Tech Officer, Investor)",
      country: "Your Country",
      message: "Particular operational bottlenecks or notes (optional)",
      submitSuccess: "Demo Request Submitted successfully! A local medical strategy lead will contact you within the business day.",
      submitError: "Please ensure all mandatory registration fields are populated."
    },
    footer: {
      desc: "The standard operating system for modern medical centers and patients across Central Asia's emerging health ecosystems.",
      rights: "All rights reserved.",
      company: "Company",
      legal: "Legal",
      contact: "Contact",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      address: "21 Taras Shevchenko Street, Mirobod district, Tashkent city, Uzbekistan."
    }
  }
};
