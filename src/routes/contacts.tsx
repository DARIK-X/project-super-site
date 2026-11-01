import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { site } from "@/data/site";

export const Route = createFileRoute("/contacts")({
  head: () => ({
    meta: [
      { title: "Байланыс — Жетісай білім" },
      { name: "description", content: "Жетісай аудандық білім бөлімінің мекенжайы, телефоны және жұмыс уақыты." },
      { property: "og:title", content: "Байланыс — Жетісай білім" },
      { property: "og:description", content: "Бізбен байланысыңыз." },
    ],
  }),
  component: () => {
    const rows = [
      { icon: MapPin, label: "Мекенжай", value: site.address },
      { icon: Phone, label: "Телефон", value: site.phone, href: `tel:${site.phone.replace(/[^+\d]/g, "")}` },
      { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
      { icon: Clock, label: "Жұмыс уақыты", value: site.hours },
    ];
    return (
      <>
        <PageHeader eyebrow="Байланыс" title="Бізбен байланысыңыз" subtitle={site.region} />
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
          <iframe title="Карта" src={site.mapEmbed} className="min-h-80 w-full rounded-2xl border border-border" loading="lazy" />
        </section>
      </>
    );
  },
});
