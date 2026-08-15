import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { useI18n } from "@/i18n";
import { news } from "@/data/content";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "Жаңалықтар — 14 Колледж" },
      {
        name: "description",
        content: "Колледж өміріндегі оқиғалар, жетістіктер және қабылдауға қатысты хабарландырулар.",
      },
      { property: "og:title", content: "Жаңалықтар — 14 Колледж" },
      { property: "og:description", content: "Колледж жаңалықтары мен хабарландырулары." },
    ],
  }),
  component: NewsPage,
});

const locales = { kk: "kk-KZ", ru: "ru-RU", en: "en-GB" } as const;

function NewsPage() {
  const { t, lang } = useI18n();

  return (
    <>
      <PageHeader title={t("news.title")} subtitle={t("news.subtitle")} />

      <section className="container-page grid gap-6 py-16 md:grid-cols-2 lg:grid-cols-3">
        {news.map((n) => (
          <article
            key={n.title.en}
            className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-shadow hover:shadow-lift"
          >
            <div className="flex items-center gap-3">
              <Badge variant="secondary">{n.tag[lang]}</Badge>
              <time className="text-xs text-muted-foreground" dateTime={n.date}>
                {new Date(n.date).toLocaleDateString(locales[lang], {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
            </div>
            <h2 className="mt-4 text-lg font-semibold text-balance">{n.title[lang]}</h2>
            <p className="mt-3 text-sm text-muted-foreground">{n.excerpt[lang]}</p>
          </article>
        ))}
      </section>
    </>
  );
}