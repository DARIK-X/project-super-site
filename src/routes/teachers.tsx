import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { useI18n } from "@/i18n";
import { teachers } from "@/data/content";

export const Route = createFileRoute("/teachers")({
  head: () => ({
    meta: [
      { title: "Педагогтар — 14 Колледж" },
      {
        name: "description",
        content: "Колледждің басшылығы мен тәжірибелі оқытушылар құрамы туралы ақпарат.",
      },
      { property: "og:title", content: "Педагогтар — 14 Колледж" },
      { property: "og:description", content: "Колледждің педагогикалық ұжымы." },
    ],
  }),
  component: TeachersPage,
});

function TeachersPage() {
  const { t, lang } = useI18n();

  return (
    <>
      <PageHeader title={t("teachers.title")} subtitle={t("teachers.subtitle")} />

      <section className="container-page grid gap-5 py-16 sm:grid-cols-2 lg:grid-cols-4">
        {teachers.map((p) => (
          <article key={p.name} className="rounded-2xl border border-border bg-card p-6 text-center shadow-soft">
            <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-brand-soft text-lg font-semibold text-primary">
              {p.initials}
            </span>
            <h2 className="mt-4 font-semibold text-balance">{p.name}</h2>
            <p className="mt-1 text-sm text-primary">{p.role[lang]}</p>
            <p className="mt-2 text-sm text-muted-foreground">{p.subject[lang]}</p>
          </article>
        ))}
      </section>
    </>
  );
}