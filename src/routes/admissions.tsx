import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { admissionSteps } from "@/data/site";
import { useT } from "@/lib/prefs";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Мектепке қабылдау — Жетісай білім" },
      { name: "description", content: "Жетісай ауданында 1-сыныпқа қабылдау тәртібі, қажетті құжаттар және қадамдар." },
      { property: "og:title", content: "Мектепке қабылдау — Жетісай білім" },
      { property: "og:description", content: "1-сыныпқа қабылдау қадамдары." },
    ],
  }),
  component: AdmissionsPage,
});

function AdmissionsPage() {
  const t = useT();
  return (
    <>
      <PageHeader eyebrow={t("Қабылдау")} title={t("Мектепке қабылдау")} subtitle={t("Баланы 1-сыныпқа тіркеу бойынша қысқаша нұсқаулық.")} />
      <section className="container-page py-16">
        <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {admissionSteps.map((s, i) => (
            <li key={s.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <span className="font-display text-4xl font-bold text-accent">0{i + 1}</span>
              <h2 className="mt-4 font-semibold">{t(s.title)}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{t(s.text)}</p>
            </li>
          ))}
        </ol>
        <Button asChild size="lg" className="mt-10">
          <a href="https://egov.kz/" target="_blank" rel="noreferrer">{t("eGov арқылы өтініш беру")} <ArrowUpRight className="size-4" /></a>
        </Button>
      </section>
    </>
  );
}
