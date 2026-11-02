import { Link } from "@tanstack/react-router";
import { Menu, Landmark } from "lucide-react";
import { useState } from "react";
import { nav, site } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { usePrefs, type Lang } from "@/lib/prefs";
import { A11yPanel } from "@/components/A11yPanel";
import { cn } from "@/lib/utils";

const langs: { v: Lang; label: string }[] = [
  { v: "kk", label: "ҚАЗ" },
  { v: "ru", label: "РУС" },
  { v: "en", label: "ENG" },
];

function LangSwitch() {
  const { lang, setLang } = usePrefs();
  return (
    <div className="flex rounded-full border border-border p-0.5">
      {langs.map((l) => (
        <button
          key={l.v}
          onClick={() => setLang(l.v)}
          aria-pressed={lang === l.v}
          className={cn(
            "rounded-full px-2.5 py-1 text-xs font-semibold transition-colors",
            lang === l.v ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground",
          )}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { t } = usePrefs();
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="container-page flex h-16 items-center gap-3">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <Landmark className="size-5" />
          </span>
          <span className="hidden text-sm leading-tight font-semibold sm:block">
            {t(site.short)}
            <span className="block text-[11px] font-normal text-muted-foreground">{t(site.tagline)}</span>
          </span>
        </Link>
        <nav className="ml-auto hidden items-center gap-0.5 xl:flex">
          {nav.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "bg-brand-soft text-primary" }}
              className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {t(l.label)}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2 xl:ml-2">
          <LangSwitch />
          <A11yPanel />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="xl:hidden" aria-label={t("Мәзір")}>
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetTitle className="px-4 pt-4 text-base">{t("Мәзір")}</SheetTitle>
              <nav className="flex flex-col gap-1 p-4">
                {nav.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    activeOptions={{ exact: l.to === "/" }}
                    activeProps={{ className: "bg-brand-soft text-primary" }}
                    className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
                  >
                    {t(l.label)}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
