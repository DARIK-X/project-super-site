import { Link } from "@tanstack/react-router";
import { Menu, GraduationCap } from "lucide-react";
import { useState } from "react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useI18n } from "@/i18n";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const links = [
  { to: "/", key: "nav.home" },
  { to: "/about", key: "nav.about" },
  { to: "/majors", key: "nav.majors" },
  { to: "/applicants", key: "nav.applicants" },
  { to: "/news", key: "nav.news" },
  { to: "/gallery", key: "nav.gallery" },
  { to: "/teachers", key: "nav.teachers" },
  { to: "/contact", key: "nav.contact" },
] as const;

export function SiteHeader() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="container-page flex h-16 items-center gap-4">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <GraduationCap className="size-5" />
          </span>
          <span className="text-sm leading-tight font-semibold">
            {t("brand.short")}
            <span className="block text-[11px] font-normal text-muted-foreground">
              kasiptikkolledj.kz
            </span>
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "bg-brand-soft text-primary" }}
              className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {t(l.key)}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <LanguageSwitcher />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden" aria-label={t("nav.menu")}>
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetTitle className="px-4 pt-4 text-base">{t("nav.menu")}</SheetTitle>
              <nav className="flex flex-col gap-1 p-4">
                {links.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    activeOptions={{ exact: l.to === "/" }}
                    activeProps={{ className: "bg-brand-soft text-primary" }}
                    className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    {t(l.key)}
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