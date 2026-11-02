import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { FileList } from "@/components/FileList";
import { methodology } from "@/data/site";
import { useT } from "@/lib/prefs";

export const Route = createFileRoute("/methodology")({
  head: () => ({
    meta: [
      { title: "Әдістемелік материалдар — Жетісай білім" },
      { name: "description", content: "Жетісай ауданы ұстаздарына арналған әдістемелік материалдар мен нұсқаулықтар." },
      { property: "og:title", content: "Әдістемелік материалдар — Жетісай білім" },
      { property: "og:description", content: "Ұстаздарға арналған материалдар." },
    ],
  }),
  component: MethodologyPage,
});

function MethodologyPage() {
  const t = useT();
  return (
    <>
      <PageHeader eyebrow={t("Әдістеме")} title={t("Әдістемелік материалдар")} subtitle={t("Ұстаздарға арналған нұсқаулықтар, тапсырмалар жинақтары және бағалау критерийлері.")} />
      <section className="container-page max-w-4xl py-16">
        <FileList items={methodology.map((m) => ({ title: t(m.title), url: m.url, meta: t(m.subject) }))} />
      </section>
    </>
  );
}
