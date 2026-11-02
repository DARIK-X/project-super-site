import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { usePrefs, type Contrast, type FontSize } from "@/lib/prefs";
import { cn } from "@/lib/utils";

const sizes: { v: FontSize; label: string }[] = [
  { v: "normal", label: "A" },
  { v: "large", label: "A+" },
  { v: "xlarge", label: "A++" },
];

export function A11yPanel() {
  const p = usePrefs();
  const chip = (active: boolean) =>
    cn("rounded-lg border-2 px-3 py-2 text-sm font-semibold", active ? "border-primary bg-primary text-primary-foreground" : "border-border");
  const contrasts: { v: Contrast; label: string }[] = [
    { v: "light", label: p.t("Ақ фонда қара") },
    { v: "dark", label: p.t("Қара фонда ақ") },
  ];
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant={p.a11y ? "default" : "outline"} size="icon" aria-label={p.t("Нашар көретіндерге")} title={p.t("Нашар көретіндерге")}>
          <Eye className="size-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-80 space-y-4">
        <div className="flex items-center justify-between gap-2">
          <p className="font-semibold">{p.t("Нашар көретіндерге")}</p>
          <Button size="sm" variant={p.a11y ? "outline" : "default"} onClick={() => p.setA11y(!p.a11y)}>
            {p.a11y ? p.t("Өшіру") : p.t("Қосу")}
          </Button>
        </div>
        {p.a11y ? (
          <>
            <div>
              <p className="mb-2 text-sm text-muted-foreground">{p.t("Қаріп өлшемі")}</p>
              <div className="flex gap-2">
                {sizes.map((s) => (
                  <button key={s.v} className={chip(p.fontSize === s.v)} onClick={() => p.setFontSize(s.v)}>{s.label}</button>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-2 text-sm text-muted-foreground">{p.t("Түс схемасы")}</p>
              <div className="flex flex-wrap gap-2">
                {contrasts.map((c) => (
                  <button key={c.v} className={chip(p.contrast === c.v)} onClick={() => p.setContrast(c.v)}>{c.label}</button>
                ))}
              </div>
            </div>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" className="size-4" checked={p.hideImages} onChange={(e) => p.setHideImages(e.target.checked)} />
              {p.t("Суреттерді жасыру")}
            </label>
          </>
        ) : null}
      </PopoverContent>
    </Popover>
  );
}
