import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { site } from "@/data/site";
import { useT } from "@/lib/prefs";

export const Route = createFileRoute("/contacts")({
  head: () => ({
    meta: [
      { title: "Байланыс — Жетісай білім" },
      { name: "description", content: "Жетісай аудандық білім бөлімінің мекенжайы, телефоны және жұмыс уақыты." },
      { property: "og:title", content: "Байланыс — Жетісай білім" },
      { property: "og:description", content: "Бізбен байланысыңыз." },
    ],
  }),
  component: function ContactsPage() {
    const t = useT();
    const rows = [
      { icon: MapPin, label: t("Мекенжай"), value: t(site.address) },
      { icon: Phone, label: t("Телефон"), value: site.phone, href: `tel:${site.phone.replace(/[^+\d]/g, "")}` },
      { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
      { icon: Clock, label: t("Жұмыс уақыты"), value: t(site.hours) },
    ];
    return (
      <>
        <PageHeader eyebrow={t("Байланыс")} title={t("Бізбен байланысыңыз")} subtitle={t(site.region)} />
        <section className="container-page grid gap-8 py-16 lg:grid-cols-2">
          <div className="grid gap-4 sm:grid-cols-2">
            {rows.map((r) => (
              <div key={r.label} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <r.icon className="size-5 text-primary" />
                <p className="mt-3 text-xs text-muted-foreground">{r.label}</p>
                {r.href ? <a href={r.href} className="mt-1 block font-medium hover:text-primary">{r.value}</a> : <p className="mt-1 font-medium">{r.value}</p>}
              </div>
            ))}
          </div>
          <iframe title={t("Карта")} src={site.mapEmbed} className="min-h-80 w-full rounded-2xl border border-border" loading="lazy" />
        </section>
      </>
    );
  },
});
