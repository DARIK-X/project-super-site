import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Search, Users } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Input } from "@/components/ui/input";
import { schools } from "@/data/site";

export const Route = createFileRoute("/schools/")({
  head: () => ({
    meta: [
      { title: "Мектептер каталогы — Жетісай білім" },
      { name: "description", content: "Жетісай ауданының барлық мектептері: мекенжай, оқушы саны және ресми сайттар." },
      { property: "og:title", content: "Мектептер каталогы — Жетісай білім" },
      { property: "og:description", content: "Мектебіңізді табыңыз." },
    ],
  }),
  component: SchoolsPage,
});

function SchoolsPage() {
  const [q, setQ] = useState("");
  const list = schools.filter((s) => (s.name + s.location).toLowerCase().includes(q.toLowerCase()));
  return (
    <>
      <PageHeader eyebrow="Білім беру ұйымдары" title="Мектептер" subtitle="Мектепті іздеп, негізгі мәліметтерін қараңыз және ресми сайтына өтіңіз." />
      <section className="container-page py-12">
        <div className="relative max-w-md">
          <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Мектеп атауы немесе ауыл…" className="h-12 rounded-xl pl-10" />
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {list.map((s) => (
            <Link key={s.id} to="/schools/$id" params={{ id: s.id }} className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-shadow hover:shadow-lift">
              <span className="text-xs font-semibold tracking-widest text-accent uppercase">{s.type}</span>
              <h2 className="mt-2 text-lg font-semibold text-balance">{s.name}</h2>
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5"><MapPin className="size-4" />{s.location}</span>
                {s.students ? <span className="flex items-center gap-1.5"><Users className="size-4" />{s.students} оқушы</span> : null}
              </div>
            </Link>
          ))}
          {list.length === 0 ? <p className="text-muted-foreground">Ештеңе табылмады.</p> : null}
        </div>
      </section>
    </>
  );
}
