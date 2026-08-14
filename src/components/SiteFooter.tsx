import { Link } from "@tanstack/react-router";
import { GraduationCap, MapPin, Phone, Mail } from "lucide-react";
import { useI18n } from "@/i18n";
import { contactInfo } from "@/data/content";

const links = [
  { to: "/about", key: "nav.about" },
  { to: "/majors", key: "nav.majors" },
  { to: "/applicants", key: "nav.applicants" },
  { to: "/news", key: "nav.news" },
  { to: "/gallery", key: "nav.gallery" },
  { to: "/teachers", key: "nav.teachers" },
] as const;

export function SiteFooter() {
  const { t, lang } = useI18n();

  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <div className="container-page grid gap-10 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <GraduationCap className="size-5" />
            </span>
            <span className="font-semibold">{t("brand.name")}</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">{t("footer.about")}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold">{t("footer.links")}</h3>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {links.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-muted-foreground transition-colors hover:text-primary">
                  {t(l.key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold">{t("footer.contacts")}</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>{contactInfo.address[lang]}</span>
            </li>
            <li className="flex gap-2.5">
              <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
              <a href={`tel:${contactInfo.phone.replace(/[^+\d]/g, "")}`} className="hover:text-primary">
                {contactInfo.phone}
              </a>
            </li>
            <li className="flex gap-2.5">
              <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
              <a href={`mailto:${contactInfo.email}`} className="hover:text-primary">
                {contactInfo.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-page py-5 text-xs text-muted-foreground">
          © {new Date().getFullYear()} {t("brand.name")}. {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
}