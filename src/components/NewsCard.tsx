import { Badge } from "@/components/ui/badge";
import { pick, type NewsRow } from "@/lib/news";
import { useFormatDate, usePrefs } from "@/lib/prefs";

export function NewsCard({ n, big }: { n: NewsRow; big?: boolean }) {
  const { lang, t } = usePrefs();
  const fmt = useFormatDate();
  return (
    <article className="rounded-2xl border border-border bg-card p-6 shadow-soft">
      <div className="flex items-center gap-3">
        <Badge variant="secondary">{t(n.tag)}</Badge>
        <time className="text-xs text-muted-foreground" dateTime={n.date}>{fmt(n.date)}</time>
      </div>
      <h3 className={`mt-4 font-semibold text-balance ${big ? "text-lg" : ""}`}>{pick(n, "title", lang)}</h3>
      <p className="mt-3 text-sm text-muted-foreground">{pick(n, "text", lang)}</p>
    </article>
  );
}
