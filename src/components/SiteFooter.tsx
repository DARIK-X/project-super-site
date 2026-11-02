import { Link } from "@tanstack/react-router";
import { nav, site } from "@/data/site";
import { useT } from "@/lib/prefs";

export function SiteFooter() {
  const t = useT();
  return (
    <footer className="mt-24 bg-brand text-brand-foreground">
      <div className="container-page grid gap-10 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-semibold">{t(site.name)}</p>
          <p className="mt-2 text-sm opacity-75">{t(site.region)}</p>
        </div>
        <nav className="grid grid-cols-2 gap-2 text-sm">
          {nav.map((l) => (
            <Link key={l.to} to={l.to} className="opacity-80 hover:opacity-100">
              {t(l.label)}
            </Link>
          ))}
        </nav>
        <div className="space-y-1.5 text-sm opacity-85">
          <p>{t(site.address)}</p>
          <p>{site.phone}</p>
          <p>{site.email}</p>
          <p>{t(site.hours)}</p>
        </div>
      </div>
      <div className="border-t border-brand-foreground/15">
        <p className="container-page py-5 text-xs opacity-60">
          © {new Date().getFullYear()} {t(site.name)}
        </p>
      </div>
    </footer>
  );
}
