import { Download, FileText } from "lucide-react";

export function FileList({ items }: { items: { title: string; meta: string; url: string }[] }) {
  return (
    <ul className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
      {items.map((d) => (
        <li key={d.title}>
          <a href={d.url} className="flex items-center gap-4 p-5 transition-colors hover:bg-muted">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-primary">
              <FileText className="size-5" />
            </span>
            <span className="flex-1">
              <span className="block font-medium">{d.title}</span>
              <span className="text-xs text-muted-foreground">{d.meta}</span>
            </span>
            <Download className="size-4 text-muted-foreground" />
          </a>
        </li>
      ))}
    </ul>
  );
}
