import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { about, site } from "@/data/site";
import { useT } from "@/lib/prefs";
import campus from "@/assets/campus-5.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Бөлім туралы — Жетісай білім" },
      { name: "description", content: "Жетісай аудандық білім бөлімінің мақсаты, құндылықтары және басшылығы." },
      { property: "og:title", content: "Бөлім туралы — Жетісай білім" },
      { property: "og:description", content: "Мақсатымыз — әр балаға сапалы білім." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const t = useT();
  return (
    <>
      <PageHeader eyebrow={t("Бөлім туралы")} title={t(site.name)} subtitle={t(about.text)} />
      <section className="container-page grid gap-12 py-20 lg:grid-cols-2 lg:items-center">
        <img src={campus} alt={t("Оқушылар")} loading="lazy" width={1200} height={800} className="rounded-3xl shadow-lift" />
        <div className="space-y-5">
          {about.values.map((v, i) => (
            <div key={v.title} className="flex gap-5 rounded-2xl border border-border bg-card p-6 shadow-soft">
              <span className="font-display text-3xl font-bold text-accent">0{i + 1}</span>
              <div>
                <h3 className="font-semibold">{t(v.title)}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{t(v.text)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="container-page">
        <h2 className="text-3xl font-bold">{t("Басшылық")}</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {about.leaders.map((l) => (
            <div key={l.role} className="rounded-2xl bg-surface p-6">
              <div className="flex size-14 items-center justify-center rounded-full bg-primary font-display text-lg font-semibold text-primary-foreground">
                {t(l.name).charAt(0)}
              </div>
              <p className="mt-4 font-semibold">{t(l.name)}</p>
              <p className="text-sm text-muted-foreground">{t(l.role)}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
