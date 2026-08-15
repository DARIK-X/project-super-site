import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, GraduationCap, Layers } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { useI18n } from "@/i18n";
import { majors } from "@/data/content";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/majors")({
  head: () => ({
    meta: [
      { title: "Мамандықтар — 14 Колледж" },
      {
        name: "description",
        content: "Колледжде даярланатын мамандықтар: оқу мерзімі, түсу негізі және сипаттамасы.",
      },
      { property: "og:title", content: "Мамандықтар — 14 Колледж" },
      { property: "og:description", content: "Колледж мамандықтарының толық тізімі." },
    ],
  }),
  component: MajorsPage,
});

function MajorsPage() {
  const { t, lang } = useI18n();

  return (
    <>
      <PageHeader title={t("majors.title")} subtitle={t("majors.subtitle")} />

      <section className="container-page grid gap-6 py-16 lg:grid-cols-2">
        {majors.map((m) => (
          <article
            key={m.code}
            className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-soft transition-shadow hover:shadow-lift"
          >
            <span className="text-xs font-semibold tracking-widest text-accent">{m.code}</span>
            <h2 className="mt-2 text-xl font-semibold text-balance">{m.title[lang]}</h2>
            <p className="mt-3 text-sm text-muted-foreground">{m.description[lang]}</p>
            <dl className="mt-6 grid gap-3 border-t border-border pt-5 text-sm sm:grid-cols-3">
              <div className="flex items-start gap-2">
                <Clock className="mt-0.5 size-4 text-primary" />
                <div>
                  <dt className="text-xs text-muted-foreground">{t("majors.duration")}</dt>
                  <dd className="font-medium">{m.duration[lang]}</dd>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <GraduationCap className="mt-0.5 size-4 text-primary" />
                <div>
                  <dt className="text-xs text-muted-foreground">{t("majors.base")}</dt>
                  <dd className="font-medium">{m.base[lang]}</dd>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Layers className="mt-0.5 size-4 text-primary" />
                <div>
                  <dt className="text-xs text-muted-foreground">{t("majors.form")}</dt>
                  <dd className="font-medium">{m.form[lang]}</dd>
                </div>
              </div>
            </dl>
          </article>
        ))}
      </section>

      <section className="container-page pb-4">
        <div className="flex flex-col items-start gap-4 rounded-2xl bg-brand p-8 text-brand-foreground md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-xl font-semibold">{t("cta.title")}</h2>
            <p className="mt-1 text-sm opacity-85">{t("cta.text")}</p>
          </div>
          <Button asChild variant="secondary" size="lg">
            <Link to="/applicants">{t("hero.cta")}</Link>
          </Button>
        </div>
      </section>
    </>
  );
}