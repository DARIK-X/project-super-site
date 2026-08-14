import type { Lang } from "@/i18n/translations";

export type L = Record<Lang, string>;

export type Major = {
  code: string;
  title: L;
  description: L;
  duration: L;
  base: L;
  form: L;
};

export const majors: Major[] = [
  {
    code: "01120100",
    title: {
      kk: "Мектепке дейінгі тәрбие және оқыту",
      ru: "Дошкольное воспитание и обучение",
      en: "Preschool education",
    },
    description: {
      kk: "Балабақша тәрбиешісі. Ерте жастағы баланың дамуы, ойын әдістемесі және сөйлеу тілін дамыту.",
      ru: "Воспитатель детского сада: развитие ребёнка раннего возраста, игровые методики, развитие речи.",
      en: "Kindergarten teacher: early childhood development, play-based methods, speech development.",
    },
    duration: { kk: "2 жыл 10 ай", ru: "2 года 10 месяцев", en: "2 years 10 months" },
    base: { kk: "9 сынып", ru: "9 классов", en: "Grade 9" },
    form: { kk: "Күндізгі", ru: "Очная", en: "Full-time" },
  },
  {
    code: "01140100",
    title: {
      kk: "Бастауыш білім беру педагогикасы",
      ru: "Педагогика начального образования",
      en: "Primary school education",
    },
    description: {
      kk: "Бастауыш сынып мұғалімі. Оқыту әдістемесі, сыныпты басқару және инклюзивті білім беру.",
      ru: "Учитель начальных классов: методика преподавания, управление классом, инклюзивное образование.",
      en: "Primary school teacher: teaching methods, classroom management, inclusive education.",
    },
    duration: { kk: "3 жыл 10 ай", ru: "3 года 10 месяцев", en: "3 years 10 months" },
    base: { kk: "9 сынып", ru: "9 классов", en: "Grade 9" },
    form: { kk: "Күндізгі", ru: "Очная", en: "Full-time" },
  },
  {
    code: "01140500",
    title: {
      kk: "Дене тәрбиесі және спорт",
      ru: "Физическая культура и спорт",
      en: "Physical education and sport",
    },
    description: {
      kk: "Дене шынықтыру мұғалімі және жаттықтырушы. Спорт секцияларын ұйымдастыру.",
      ru: "Учитель физкультуры и тренер: организация спортивных секций и соревнований.",
      en: "PE teacher and coach: running sports clubs and competitions.",
    },
    duration: { kk: "3 жыл 10 ай", ru: "3 года 10 месяцев", en: "3 years 10 months" },
    base: { kk: "9 сынып", ru: "9 классов", en: "Grade 9" },
    form: { kk: "Күндізгі", ru: "Очная", en: "Full-time" },
  },
  {
    code: "01140900",
    title: {
      kk: "Шетел тілі: екі шет тілі",
      ru: "Иностранный язык: два иностранных языка",
      en: "Foreign languages teaching",
    },
    description: {
      kk: "Ағылшын тілі мұғалімі. Тіл үйрету әдістемесі және аударма практикасы.",
      ru: "Учитель английского языка: методика преподавания языка и практика перевода.",
      en: "English teacher: language teaching methodology and translation practice.",
    },
    duration: { kk: "3 жыл 10 ай", ru: "3 года 10 месяцев", en: "3 years 10 months" },
    base: { kk: "9 сынып", ru: "9 классов", en: "Grade 9" },
    form: { kk: "Күндізгі", ru: "Очная", en: "Full-time" },
  },
  {
    code: "06130100",
    title: {
      kk: "Бағдарламалық қамтамасыз ету",
      ru: "Программное обеспечение",
      en: "Software development",
    },
    description: {
      kk: "Веб және мобильді қосымшалар әзірлеу, деректер қоры және желілер негіздері.",
      ru: "Разработка веб- и мобильных приложений, базы данных и основы сетей.",
      en: "Web and mobile app development, databases and networking basics.",
    },
    duration: { kk: "2 жыл 10 ай", ru: "2 года 10 месяцев", en: "2 years 10 months" },
    base: { kk: "9 сынып", ru: "9 классов", en: "Grade 9" },
    form: { kk: "Күндізгі", ru: "Очная", en: "Full-time" },
  },
  {
    code: "09230100",
    title: {
      kk: "Әлеуметтік жұмыс",
      ru: "Социальная работа",
      en: "Social work",
    },
    description: {
      kk: "Отбасымен және балалармен әлеуметтік-педагогикалық жұмыс, кеңес беру.",
      ru: "Социально-педагогическая работа с семьёй и детьми, консультирование.",
      en: "Social and pedagogical work with families and children, counselling.",
    },
    duration: { kk: "2 жыл 10 ай", ru: "2 года 10 месяцев", en: "2 years 10 months" },
    base: { kk: "9 сынып", ru: "9 классов", en: "Grade 9" },
    form: { kk: "Күндізгі", ru: "Очная", en: "Full-time" },
  },
];

export type NewsItem = { date: string; tag: L; title: L; excerpt: L };

export const news: NewsItem[] = [
  {
    date: "2026-08-10",
    tag: { kk: "Қабылдау", ru: "Приём", en: "Admissions" },
    title: {
      kk: "2026–2027 оқу жылына құжат қабылдау жалғасуда",
      ru: "Продолжается приём документов на 2026–2027 учебный год",
      en: "Applications for 2026–2027 are open",
    },
    excerpt: {
      kk: "Қабылдау комиссиясы 20 тамызға дейін жұмыс істейді. Құжаттарды колледж ғимаратында тапсыруға болады.",
      ru: "Приёмная комиссия работает до 20 августа. Документы принимаются в здании колледжа.",
      en: "The admissions office is open until 20 August. Documents are accepted at the college.",
    },
  },
  {
    date: "2026-06-24",
    tag: { kk: "Іс-шара", ru: "Событие", en: "Event" },
    title: {
      kk: "Түлектерді салтанатты түрде шығарып салу",
      ru: "Торжественное вручение дипломов выпускникам",
      en: "Graduation ceremony for the class of 2026",
    },
    excerpt: {
      kk: "Биыл 180-нен астам түлек диплом алды, олардың 24-і үздік дипломға ие болды.",
      ru: "В этом году дипломы получили более 180 выпускников, 24 из них — с отличием.",
      en: "More than 180 students graduated this year, 24 of them with honours.",
    },
  },
  {
    date: "2026-05-15",
    tag: { kk: "Жетістік", ru: "Достижение", en: "Achievement" },
    title: {
      kk: "Студенттеріміз облыстық кәсіби шеберлік байқауында жеңімпаз",
      ru: "Наши студенты победили в областном конкурсе профмастерства",
      en: "Students win the regional skills competition",
    },
    excerpt: {
      kk: "«Мектепке дейінгі тәрбие» бағыты бойынша командамыз бірінші орынды иеленді.",
      ru: "Команда колледжа заняла первое место в направлении «Дошкольное воспитание».",
      en: "The college team took first place in the preschool education category.",
    },
  },
  {
    date: "2026-04-02",
    tag: { kk: "Оқу", ru: "Учёба", en: "Academics" },
    title: {
      kk: "Жаңа компьютер сыныбы ашылды",
      ru: "Открыт новый компьютерный класс",
      en: "New computer lab opens",
    },
    excerpt: {
      kk: "Бағдарламалық қамтамасыз ету мамандығына арналған 25 орындық заманауи сынып іске қосылды.",
      ru: "Для специальности «Программное обеспечение» открыт современный класс на 25 мест.",
      en: "A modern 25-seat lab is now open for the software development program.",
    },
  },
  {
    date: "2026-03-08",
    tag: { kk: "Мәдениет", ru: "Культура", en: "Culture" },
    title: {
      kk: "Наурыз мерекесіне арналған концерт",
      ru: "Концерт, посвящённый Наурызу",
      en: "Nauryz celebration concert",
    },
    excerpt: {
      kk: "Студенттік шығармашылық ұжымдар ұлттық ән мен би бағдарламасын ұсынды.",
      ru: "Творческие коллективы студентов представили программу национальных песен и танцев.",
      en: "Student groups presented a program of traditional songs and dances.",
    },
  },
  {
    date: "2026-02-11",
    tag: { kk: "Серіктестік", ru: "Партнёрство", en: "Partnership" },
    title: {
      kk: "Мектептермен әріптестік меморандумына қол қойылды",
      ru: "Подписан меморандум о партнёрстве со школами",
      en: "Partnership memorandum signed with local schools",
    },
    excerpt: {
      kk: "Студенттердің өндірістік тәжірибесі үшін жеті базалық мектеп бекітілді.",
      ru: "Для производственной практики студентов закреплены семь базовых школ.",
      en: "Seven partner schools will host student teaching placements.",
    },
  },
];

export type Teacher = { name: string; role: L; subject: L; initials: string };

export const teachers: Teacher[] = [
  {
    name: "Айгүл Сериковна Нұрланова",
    initials: "АН",
    role: { kk: "Директор", ru: "Директор", en: "Director" },
    subject: { kk: "Педагогика ғылымдарының магистрі", ru: "Магистр педагогических наук", en: "MA in Education" },
  },
  {
    name: "Ержан Қайратұлы Сәрсенов",
    initials: "ЕС",
    role: { kk: "Оқу ісі жөніндегі орынбасар", ru: "Заместитель по учебной работе", en: "Deputy for academics" },
    subject: { kk: "Математика", ru: "Математика", en: "Mathematics" },
  },
  {
    name: "Динара Мұратқызы Әбенова",
    initials: "ДӘ",
    role: { kk: "Бөлім меңгерушісі", ru: "Заведующая отделением", en: "Head of department" },
    subject: { kk: "Мектепке дейінгі педагогика", ru: "Дошкольная педагогика", en: "Preschool pedagogy" },
  },
  {
    name: "Гүлназ Болатқызы Ахметова",
    initials: "ГА",
    role: { kk: "Аға оқытушы", ru: "Старший преподаватель", en: "Senior lecturer" },
    subject: { kk: "Қазақ тілі мен әдебиеті", ru: "Казахский язык и литература", en: "Kazakh language" },
  },
  {
    name: "Асхат Нұрланұлы Жақсылық",
    initials: "АЖ",
    role: { kk: "Оқытушы", ru: "Преподаватель", en: "Lecturer" },
    subject: { kk: "Информатика және бағдарламалау", ru: "Информатика и программирование", en: "Computer science" },
  },
  {
    name: "Мадина Ерболқызы Тұрсынова",
    initials: "МТ",
    role: { kk: "Оқытушы", ru: "Преподаватель", en: "Lecturer" },
    subject: { kk: "Ағылшын тілі", ru: "Английский язык", en: "English" },
  },
  {
    name: "Бекзат Серікұлы Оспанов",
    initials: "БО",
    role: { kk: "Оқытушы", ru: "Преподаватель", en: "Lecturer" },
    subject: { kk: "Дене тәрбиесі", ru: "Физическая культура", en: "Physical education" },
  },
  {
    name: "Сәуле Қанатқызы Ибрагимова",
    initials: "СИ",
    role: { kk: "Психолог", ru: "Психолог", en: "Psychologist" },
    subject: { kk: "Әлеуметтік-психологиялық қызмет", ru: "Социально-психологическая служба", en: "Student support" },
  },
];

export const admissionDocs: L[] = [
  {
    kk: "Белгіленген үлгідегі өтініш",
    ru: "Заявление установленного образца",
    en: "Application form",
  },
  {
    kk: "Білім туралы құжаттың түпнұсқасы (аттестат немесе куәлік)",
    ru: "Оригинал документа об образовании (аттестат или свидетельство)",
    en: "Original school certificate",
  },
  { kk: "3x4 өлшемді 4 фотосурет", ru: "4 фотографии 3x4", en: "Four 3x4 photographs" },
  { kk: "086-У медициналық анықтамасы", ru: "Медицинская справка формы 086-У", en: "Medical certificate 086-U" },
  {
    kk: "Жеке куәліктің немесе туу туралы куәліктің көшірмесі",
    ru: "Копия удостоверения личности или свидетельства о рождении",
    en: "Copy of ID or birth certificate",
  },
  {
    kk: "Жеңілдіктерді растайтын құжаттар (болған жағдайда)",
    ru: "Документы, подтверждающие льготы (при наличии)",
    en: "Documents confirming benefits (if applicable)",
  },
];

export const admissionSteps: { title: L; text: L }[] = [
  {
    title: { kk: "Құжат тапсыру", ru: "Подача документов", en: "Submit documents" },
    text: {
      kk: "20 маусым — 20 тамыз аралығында қабылдау комиссиясына құжаттарды тапсырасыз.",
      ru: "С 20 июня по 20 августа документы принимаются приёмной комиссией.",
      en: "Documents are accepted from 20 June to 20 August.",
    },
  },
  {
    title: { kk: "Қабілет сынағы", ru: "Творческий экзамен", en: "Aptitude test" },
    text: {
      kk: "Педагогикалық мамандықтарға арнайы қабілет сынағы өткізіледі.",
      ru: "Для педагогических специальностей проводится экзамен на определение способностей.",
      en: "Teaching programs require an aptitude assessment.",
    },
  },
  {
    title: { kk: "Конкурс қорытындысы", ru: "Итоги конкурса", en: "Results" },
    text: {
      kk: "Аттестат бағалары мен сынақ нәтижесі бойынша конкурс өтеді.",
      ru: "Конкурс проводится по среднему баллу аттестата и результатам экзамена.",
      en: "Selection is based on school grades and test results.",
    },
  },
  {
    title: { kk: "Оқуға қабылдау", ru: "Зачисление", en: "Enrolment" },
    text: {
      kk: "25 тамызға дейін бұйрық шығады, 1 қыркүйекте сабақ басталады.",
      ru: "Приказ о зачислении до 25 августа, занятия начинаются 1 сентября.",
      en: "Enrolment orders are issued by 25 August; classes start on 1 September.",
    },
  },
];

export const faq: { q: L; a: L }[] = [
  {
    q: {
      kk: "Мемлекеттік грант бар ма?",
      ru: "Есть ли государственный грант?",
      en: "Are state-funded places available?",
    },
    a: {
      kk: "Иә, мемлекеттік білім беру тапсырысы бойынша тегін оқу орындары бөлінеді. Орын саны жыл сайын бекітіледі.",
      ru: "Да, выделяются места по государственному образовательному заказу. Количество мест утверждается ежегодно.",
      en: "Yes, state-funded places are allocated each year under the government education order.",
    },
  },
  {
    q: { kk: "Жатақхана берілді ме?", ru: "Предоставляется ли общежитие?", en: "Is a dormitory provided?" },
    a: {
      kk: "Басқа елді мекеннен келген білім алушыларға жатақханадан орын беріледі.",
      ru: "Иногородним студентам предоставляется место в общежитии.",
      en: "Students from other towns are offered places in the dormitory.",
    },
  },
  {
    q: {
      kk: "11 сыныптан кейін оқуға бола ма?",
      ru: "Можно ли поступить после 11 класса?",
      en: "Can I apply after grade 11?",
    },
    a: {
      kk: "Иә, 11 сынып негізінде оқу мерзімі қысқартылады.",
      ru: "Да, на базе 11 классов срок обучения сокращается.",
      en: "Yes, applicants with grade 11 study for a shorter period.",
    },
  },
  {
    q: { kk: "Оқу қай тілде жүреді?", ru: "На каком языке ведётся обучение?", en: "What is the language of study?" },
    a: {
      kk: "Оқыту қазақ және орыс тілдерінде жүргізіледі.",
      ru: "Обучение ведётся на казахском и русском языках.",
      en: "Instruction is in Kazakh and Russian.",
    },
  },
];

export const values: { title: L; text: L }[] = [
  {
    title: { kk: "Сапа", ru: "Качество", en: "Quality" },
    text: {
      kk: "Мемлекеттік стандартқа сай білім беру және үздіксіз жетілдіру.",
      ru: "Образование по государственному стандарту и постоянное улучшение.",
      en: "Education to national standards with continuous improvement.",
    },
  },
  {
    title: { kk: "Ашықтық", ru: "Открытость", en: "Openness" },
    text: {
      kk: "Қабылдау, бағалау және қаржы мәселелерінде толық ашықтық.",
      ru: "Полная прозрачность в приёме, оценивании и финансах.",
      en: "Full transparency in admissions, assessment and finance.",
    },
  },
  {
    title: { kk: "Қамқорлық", ru: "Забота", en: "Care" },
    text: {
      kk: "Әр білім алушыға жеке қолдау және психологиялық көмек.",
      ru: "Индивидуальная поддержка и психологическая помощь каждому студенту.",
      en: "Individual support and counselling for every student.",
    },
  },
  {
    title: { kk: "Заманауилық", ru: "Современность", en: "Modernity" },
    text: {
      kk: "Цифрлық құралдар мен жаңа оқыту әдістемелерін қолдану.",
      ru: "Использование цифровых инструментов и новых методик обучения.",
      en: "Digital tools and modern teaching methods.",
    },
  },
];

export const contactInfo = {
  address: {
    kk: "Қызылорда қаласы, Абай даңғылы, 14",
    ru: "г. Кызылорда, проспект Абая, 14",
    en: "14 Abay Avenue, Kyzylorda, Kazakhstan",
  } as L,
  phone: "+7 (7242) 00-00-00",
  email: "info@kasiptikkolledj.kz",
};