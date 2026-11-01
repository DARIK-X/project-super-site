import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Badge } from "@/components/ui/badge";
import { news, formatDate } from "@/data/site";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "Жаңалықтар — Жетісай білім" },
      { name: "description", content: "Жетісай ауданы білім саласындағы соңғы жаңалықтар мен іс-шаралар." },
      { property: "og:title", content: "Жаңалықтар — Жетісай білім" },
      { property: "og:description", content: "Аудан мектептерінің жаңалықтары." },
    ],
  }),
  component: NewsPage,
});

function NewsPage() {
  return (
    <>
      <PageHeader eyebrow="Өзекті ақпарат" title="Жаңалықтар" subtitle="Аудан мектептері мен білім бөлімінің соңғы оқиғалары." />
      <section className="container-page grid gap-5 py-16 md:grid-cols-2 lg:grid-cols-3">
        {news.map((n) => (
          <article key={n.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <div className="flex items-center gap-3">
              <Badge variant="secondary">{n.tag}</Badge>
              <time className="text-xs text-muted-foreground" dateTime={n.date}>{formatDate(n.date)}</time>
            </div>
            <h2 className="mt-4 text-lg font-semibold text-balance">{n.title}</h2>
            <p className="mt-3 text-sm text-muted-foreground">{n.text}</p>
          </article>
        ))}
      </section>
    </>
  );
}
