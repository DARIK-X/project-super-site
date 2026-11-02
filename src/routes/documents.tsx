import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { FileList } from "@/components/FileList";
import { documents } from "@/data/site";
import { useFormatDate, useT } from "@/lib/prefs";

export const Route = createFileRoute("/documents")({
  head: () => ({
    meta: [
      { title: "Құжаттар — Жетісай білім" },
      { name: "description", content: "Жетісай аудандық білім бөлімінің ресми құжаттары, ережелері мен жоспарлары." },
      { property: "og:title", content: "Құжаттар — Жетісай білім" },
      { property: "og:description", content: "Ресми құжаттар бір жерде." },
    ],
  }),
  component: DocumentsPage,
});

function DocumentsPage() {
  const t = useT();
  const fmt = useFormatDate();
  return (
    <>
      <PageHeader eyebrow={t("Ашықтық")} title={t("Құжаттар")} subtitle={t("Бөлімнің ресми құжаттары мен нормативтік актілері.")} />
      <section className="container-page max-w-4xl py-16">
        <FileList items={documents.map((d) => ({ title: t(d.title), url: d.url, meta: `${d.type} · ${fmt(d.date)}` }))} />
      </section>
    </>
  );
}
