import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { FileList } from "@/components/FileList";
import { documents, formatDate } from "@/data/site";

export const Route = createFileRoute("/documents")({
  head: () => ({
    meta: [
      { title: "Құжаттар — Жетісай білім" },
      { name: "description", content: "Жетісай аудандық білім бөлімінің ресми құжаттары, ережелері мен жоспарлары." },
      { property: "og:title", content: "Құжаттар — Жетісай білім" },
      { property: "og:description", content: "Ресми құжаттар бір жерде." },
    ],
  }),
  component: () => (
    <>
      <PageHeader eyebrow="Ашықтық" title="Құжаттар" subtitle="Бөлімнің ресми құжаттары мен нормативтік актілері." />
      <section className="container-page max-w-4xl py-16">
        <FileList items={documents.map((d) => ({ title: d.title, url: d.url, meta: `${d.type} · ${formatDate(d.date)}` }))} />
      </section>
    </>
  ),
});
