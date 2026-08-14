export type Lang = "kk" | "ru" | "en";

type Dict = Record<string, string>;

export const languageNames: Record<Lang, string> = {
  kk: "Қазақша",
  ru: "Русский",
  en: "English",
};

export const languageShort: Record<Lang, string> = {
  kk: "KZ",
  ru: "RU",
  en: "EN",
};

const kk: Dict = {
  "brand.name": "№14 Кәсіптік колледж",
  "brand.short": "14 Колледж",
  "nav.home": "Басты бет",
  "nav.about": "Колледж туралы",
  "nav.majors": "Мамандықтар",
  "nav.applicants": "Талапкерге",
  "nav.news": "Жаңалықтар",
  "nav.gallery": "Галерея",
  "nav.teachers": "Педагогтар",
  "nav.contact": "Байланыс",
  "nav.menu": "Мәзір",

  "hero.badge": "2026–2027 оқу жылына қабылдау ашық",
  "hero.title": "Болашақ ұстаздар осы жерден бастайды",
  "hero.subtitle":
    "Заманауи технологияларды меңгерген, шығармашыл және жауапты педагог мамандарды даярлайтын кәсіптік колледж.",
  "hero.cta": "Талапкерге",
  "hero.cta2": "Мамандықтарды көру",

  "stats.students": "Білім алушы",
  "stats.teachers": "Педагог",
  "stats.majors": "Мамандық",
  "stats.years": "Жыл тәжірибе",

  "mission.label": "Колледж миссиясы",
  "mission.title": "Сапалы білім — сенімді болашақ",
  "mission.text":
    "Болашақ ұрпаққа сапалы білім мен тәрбие бере алатын, заманауи технологияларды меңгерген, шығармашыл және жауапты педагог мамандарды даярлау.",
  "mission.point1.title": "Практикаға бағытталған оқыту",
  "mission.point1.text":
    "Бірінші курстан бастап мектептер мен балабақшаларда өндірістік тәжірибе.",
  "mission.point2.title": "Заманауи база",
  "mission.point2.text": "Компьютер сыныптары, кітапхана, спорт кешені және шеберханалар.",
  "mission.point3.title": "Жұмысқа орналасу",
  "mission.point3.text": "Түлектердің 90%-дан астамы мамандығы бойынша жұмысқа тұрады.",

  "majors.title": "Мамандықтар",
  "majors.subtitle": "Колледжде даярланатын кәсіптер мен біліктіліктер",
  "majors.duration": "Оқу мерзімі",
  "majors.base": "Оқуға түсу негізі",
  "majors.form": "Оқу түрі",
  "majors.all": "Барлық мамандықтар",

  "applicants.title": "Талапкерге",
  "applicants.subtitle": "Құжат тапсыру тәртібі, мерзімдер және қажетті құжаттар",
  "applicants.docs": "Қажетті құжаттар",
  "applicants.steps": "Қабылдау кезеңдері",
  "applicants.faq": "Жиі қойылатын сұрақтар",
  "applicants.cta": "Қабылдау комиссиясына хабарласу",

  "news.title": "Жаңалықтар",
  "news.subtitle": "Колледж өміріндегі оқиғалар мен хабарландырулар",
  "news.all": "Барлық жаңалықтар",
  "news.latest": "Соңғы жаңалықтар",

  "gallery.title": "Галерея",
  "gallery.subtitle": "Колледж қабырғасындағы күнделікті өмір",

  "teachers.title": "Педагогтар",
  "teachers.subtitle": "Тәжірибелі ұстаздар ұжымы",

  "about.title": "Колледж туралы",
  "about.subtitle": "Тарих, құндылықтар және оқу базасы",
  "about.history": "Тарихымыз",
  "about.historyText":
    "Колледж көп жылдан бері педагогикалық кадрлар даярлаумен айналысады. Осы уақыт ішінде мыңдаған түлек мектептер мен мектепке дейінгі мекемелерде еңбек етіп жүр.",
  "about.values": "Құндылықтарымыз",
  "about.facilities": "Оқу базасы",

  "contact.title": "Байланыс",
  "contact.subtitle": "Сұрақтарыңыз болса — хабарласыңыз",
  "contact.address": "Мекенжай",
  "contact.phone": "Телефон",
  "contact.email": "Электрондық пошта",
  "contact.hours": "Жұмыс уақыты",
  "contact.hoursValue": "Дүйсенбі–Жұма, 09:00–18:00",
  "contact.form": "Хабарлама жіберу",
  "contact.name": "Аты-жөні",
  "contact.message": "Хабарлама",
  "contact.send": "Жіберу",
  "contact.sent": "Хабарламаңыз жіберілді. Жақын арада хабарласамыз.",

  "cta.title": "Талапкер болғың келе ме?",
  "cta.text": "Қабылдау комиссиясы құжаттарыңды қабылдауға дайын.",
  "cta.button": "Байланысу",

  "footer.about": "Кәсіптік және педагогикалық мамандықтар бойынша білім беретін колледж.",
  "footer.links": "Бөлімдер",
  "footer.contacts": "Байланыс",
  "footer.rights": "Барлық құқықтар қорғалған.",
};

const ru: Dict = {
  "brand.name": "Профессиональный колледж №14",
  "brand.short": "Колледж 14",
  "nav.home": "Главная",
  "nav.about": "О колледже",
  "nav.majors": "Специальности",
  "nav.applicants": "Абитуриенту",
  "nav.news": "Новости",
  "nav.gallery": "Галерея",
  "nav.teachers": "Педагоги",
  "nav.contact": "Контакты",
  "nav.menu": "Меню",

  "hero.badge": "Приём на 2026–2027 учебный год открыт",
  "hero.title": "Будущие педагоги начинают здесь",
  "hero.subtitle":
    "Колледж, который готовит творческих и ответственных специалистов, владеющих современными технологиями обучения.",
  "hero.cta": "Абитуриенту",
  "hero.cta2": "Смотреть специальности",

  "stats.students": "Студентов",
  "stats.teachers": "Педагогов",
  "stats.majors": "Специальностей",
  "stats.years": "Лет опыта",

  "mission.label": "Миссия колледжа",
  "mission.title": "Качественное образование — уверенное будущее",
  "mission.text":
    "Подготовка творческих и ответственных педагогов, владеющих современными технологиями, способных дать качественное образование и воспитание будущему поколению.",
  "mission.point1.title": "Обучение через практику",
  "mission.point1.text": "Производственная практика в школах и детских садах с первого курса.",
  "mission.point2.title": "Современная база",
  "mission.point2.text": "Компьютерные классы, библиотека, спорткомплекс и мастерские.",
  "mission.point3.title": "Трудоустройство",
  "mission.point3.text": "Более 90% выпускников работают по специальности.",

  "majors.title": "Специальности",
  "majors.subtitle": "Профессии и квалификации, которым обучает колледж",
  "majors.duration": "Срок обучения",
  "majors.base": "База поступления",
  "majors.form": "Форма обучения",
  "majors.all": "Все специальности",

  "applicants.title": "Абитуриенту",
  "applicants.subtitle": "Порядок подачи документов, сроки и требования",
  "applicants.docs": "Необходимые документы",
  "applicants.steps": "Этапы приёма",
  "applicants.faq": "Частые вопросы",
  "applicants.cta": "Связаться с приёмной комиссией",

  "news.title": "Новости",
  "news.subtitle": "События и объявления из жизни колледжа",
  "news.all": "Все новости",
  "news.latest": "Последние новости",

  "gallery.title": "Галерея",
  "gallery.subtitle": "Повседневная жизнь колледжа",

  "teachers.title": "Педагоги",
  "teachers.subtitle": "Коллектив опытных преподавателей",

  "about.title": "О колледже",
  "about.subtitle": "История, ценности и учебная база",
  "about.history": "Наша история",
  "about.historyText":
    "Колледж много лет готовит педагогические кадры. За это время тысячи выпускников работают в школах и дошкольных организациях.",
  "about.values": "Наши ценности",
  "about.facilities": "Учебная база",

  "contact.title": "Контакты",
  "contact.subtitle": "Есть вопросы — свяжитесь с нами",
  "contact.address": "Адрес",
  "contact.phone": "Телефон",
  "contact.email": "Электронная почта",
  "contact.hours": "Часы работы",
  "contact.hoursValue": "Понедельник–Пятница, 09:00–18:00",
  "contact.form": "Отправить сообщение",
  "contact.name": "Имя",
  "contact.message": "Сообщение",
  "contact.send": "Отправить",
  "contact.sent": "Сообщение отправлено. Мы скоро свяжемся с вами.",

  "cta.title": "Хотите поступить?",
  "cta.text": "Приёмная комиссия готова принять ваши документы.",
  "cta.button": "Связаться",

  "footer.about": "Колледж профессионального и педагогического образования.",
  "footer.links": "Разделы",
  "footer.contacts": "Контакты",
  "footer.rights": "Все права защищены.",
};

const en: Dict = {
  "brand.name": "Vocational College No. 14",
  "brand.short": "College 14",
  "nav.home": "Home",
  "nav.about": "About",
  "nav.majors": "Programs",
  "nav.applicants": "Admissions",
  "nav.news": "News",
  "nav.gallery": "Gallery",
  "nav.teachers": "Faculty",
  "nav.contact": "Contact",
  "nav.menu": "Menu",

  "hero.badge": "Admissions open for 2026–2027",
  "hero.title": "Future teachers start here",
  "hero.subtitle":
    "A vocational college training creative, responsible educators who master modern teaching technology.",
  "hero.cta": "Admissions",
  "hero.cta2": "Explore programs",

  "stats.students": "Students",
  "stats.teachers": "Educators",
  "stats.majors": "Programs",
  "stats.years": "Years of experience",

  "mission.label": "Our mission",
  "mission.title": "Quality education, confident future",
  "mission.text":
    "To train creative and responsible teachers who master modern technology and can deliver quality education to the next generation.",
  "mission.point1.title": "Practice-led learning",
  "mission.point1.text": "Placements in schools and kindergartens from the first year.",
  "mission.point2.title": "Modern facilities",
  "mission.point2.text": "Computer labs, library, sports complex and workshops.",
  "mission.point3.title": "Employment",
  "mission.point3.text": "Over 90% of graduates work in their field.",

  "majors.title": "Programs",
  "majors.subtitle": "Qualifications offered by the college",
  "majors.duration": "Duration",
  "majors.base": "Entry level",
  "majors.form": "Study format",
  "majors.all": "All programs",

  "applicants.title": "Admissions",
  "applicants.subtitle": "How to apply, deadlines and requirements",
  "applicants.docs": "Required documents",
  "applicants.steps": "Admission steps",
  "applicants.faq": "Frequently asked questions",
  "applicants.cta": "Contact the admissions office",

  "news.title": "News",
  "news.subtitle": "Events and announcements from college life",
  "news.all": "All news",
  "news.latest": "Latest news",

  "gallery.title": "Gallery",
  "gallery.subtitle": "Everyday life at the college",

  "teachers.title": "Faculty",
  "teachers.subtitle": "A team of experienced educators",

  "about.title": "About the college",
  "about.subtitle": "History, values and facilities",
  "about.history": "Our history",
  "about.historyText":
    "The college has been training teachers for many years. Thousands of graduates now work in schools and preschools.",
  "about.values": "Our values",
  "about.facilities": "Facilities",

  "contact.title": "Contact",
  "contact.subtitle": "Get in touch with any question",
  "contact.address": "Address",
  "contact.phone": "Phone",
  "contact.email": "Email",
  "contact.hours": "Opening hours",
  "contact.hoursValue": "Monday–Friday, 09:00–18:00",
  "contact.form": "Send a message",
  "contact.name": "Name",
  "contact.message": "Message",
  "contact.send": "Send",
  "contact.sent": "Your message has been sent. We will get back to you soon.",

  "cta.title": "Ready to apply?",
  "cta.text": "Our admissions office is ready to accept your documents.",
  "cta.button": "Get in touch",

  "footer.about": "A college of vocational and pedagogical education.",
  "footer.links": "Sections",
  "footer.contacts": "Contact",
  "footer.rights": "All rights reserved.",
};

export const translations: Record<Lang, Dict> = { kk, ru, en };