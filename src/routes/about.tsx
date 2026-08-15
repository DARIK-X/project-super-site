import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, Dumbbell, MonitorSmartphone, Library, Utensils, Home } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { useI18n } from "@/i18n";
import { values } from "@/data/content";
import campus2 from "@/assets/campus-2.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Колледж туралы — 14 Колледж" },
      {
        name: "description",
        content: "Колледж тарихы, құндылықтары және заманауи оқу базасы туралы ақпарат.",
      },
      { property: "og:title", content: "Колледж туралы — 14 Колледж" },
      {
        property: "og:description",
        content: "Колледж тарихы, құндылықтары және заманауи оқу базасы.",
      },
    ],
  }),
  component: AboutPage,
});

const facilities = [
  { icon: MonitorSmartphone, kk: "Компьютер сыныптары", ru: "Компьютерные классы", en: "Computer labs" },
  { icon: Library, kk: "Кітапхана және оқу залы", ru: "Библиотека и читальный зал", en: "Library and reading room" },
  { icon: Dumbbell, kk: "Спорт кешені", ru: "Спортивный комплекс", en: "Sports complex" },
  { icon: BookOpen, kk: "Әдістемелік кабинеттер", ru: "Методические кабинеты", en: "Methodology rooms" },
  { icon: Utensils, kk: "Асхана", ru: "Столовая", en: "Canteen" },
  { icon: Home, kk: "Жатақхана", ru: "Общежитие", en: "Dormitory" },
];

function AboutPage() {
  const { t, lang } = useI18n();

  return (
    <>
      <PageHeader title={t("about.title")} subtitle={t("about.subtitle")} />

      <section className="container-page grid gap-10 py-16 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="text-2xl font-bold md:text-3xl">{t("about.history")}</h2>
          <p className="mt-4 text-muted-foreground">{t("about.historyText")}</p>
          <p className="mt-4 text-muted-foreground">{t("mission.text")}</p>
        </div>
        <img
          src={campus2}
          alt={t("about.facilities")}
          loading="lazy"
          width={1200}
          height={800}
          className="rounded-2xl shadow-lift"
        />
      </section>

      <section className="bg-surface py-16">
        <div className="container-page">
          <h2 className="text-2xl font-bold md:text-3xl">{t("about.values")}</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title.en} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <h3 className="font-semibold">{v.title[lang]}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.text[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <h2 className="text-2xl font-bold md:text-3xl">{t("about.facilities")}</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((f) => (
            <div key={f.en} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-primary">
                <f.icon className="size-5" />
              </span>
              <span className="font-medium">{f[lang]}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}