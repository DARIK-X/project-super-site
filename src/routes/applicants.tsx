import { createFileRoute, Link } from "@tanstack/react-router";
import { FileCheck } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { useI18n } from "@/i18n";
import { admissionDocs, admissionSteps, faq } from "@/data/content";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/applicants")({
  head: () => ({
    meta: [
      { title: "Талапкерге — 14 Колледж" },
      {
        name: "description",
        content: "Құжат тапсыру тәртібі, қажетті құжаттар тізімі, қабылдау кезеңдері және жиі қойылатын сұрақтар.",
      },
      { property: "og:title", content: "Талапкерге — 14 Колледж" },
      { property: "og:description", content: "Қабылдау шарттары және қажетті құжаттар." },
    ],
  }),
  component: ApplicantsPage,
});

function ApplicantsPage() {
  const { t, lang } = useI18n();

  return (
    <>
      <PageHeader title={t("applicants.title")} subtitle={t("applicants.subtitle")} />

      <section className="container-page py-16">
        <h2 className="text-2xl font-bold md:text-3xl">{t("applicants.steps")}</h2>
        <ol className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {admissionSteps.map((s, i) => (
            <li key={s.title.en} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <span className="flex size-9 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                {i + 1}
              </span>
              <h3 className="mt-4 font-semibold">{s.title[lang]}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text[lang]}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-surface py-16">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">{t("applicants.docs")}</h2>
            <ul className="mt-6 space-y-3">
              {admissionDocs.map((d) => (
                <li key={d.en} className="flex gap-3 rounded-xl bg-card p-4 text-sm shadow-soft">
                  <FileCheck className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>{d[lang]}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold md:text-3xl">{t("applicants.faq")}</h2>
            <Accordion type="single" collapsible className="mt-6">
              {faq.map((f) => (
                <AccordionItem key={f.q.en} value={f.q.en}>
                  <AccordionTrigger className="text-left">{f.q[lang]}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{f.a[lang]}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <Button asChild size="lg" className="mt-8">
              <Link to="/contact">{t("applicants.cta")}</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}