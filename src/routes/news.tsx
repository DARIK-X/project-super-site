import { createFileRoute } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { PageHeader } from "@/components/PageHeader";
import { NewsCard } from "@/components/NewsCard";
import { newsQuery } from "@/lib/news";
import { useT } from "@/lib/prefs";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "Жаңалықтар — Жетісай білім" },
      { name: "description", content: "Жетісай ауданы білім саласындағы соңғы жаңалықтар мен іс-шаралар." },
      { property: "og:title", content: "Жаңалықтар — Жетісай білім" },
      { property: "og:description", content: "Аудан мектептерінің жаңалықтары." },
    ],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(newsQuery),
  component: NewsPage,
});

function NewsPage() {
  const t = useT();
  const { data } = useSuspenseQuery(newsQuery);
  return (
    <>
      <PageHeader eyebrow={t("Өзекті ақпарат")} title={t("Жаңалықтар")} subtitle={t("Аудан мектептері мен білім бөлімінің соңғы оқиғалары.")} />
      <section className="container-page grid gap-5 py-16 md:grid-cols-2 lg:grid-cols-3">
        {data.map((n) => <NewsCard key={n.id} n={n} big />)}
        {data.length === 0 ? <p className="text-muted-foreground">{t("Әзірге жаңалық жоқ.")}</p> : null}
      </section>
    </>
  );
}
