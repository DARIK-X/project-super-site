import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, MapPin, Users, FileText, BookOpen, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { site, stats, schools, news, usefulLinks, formatDate } from "@/data/site";
import hero from "@/assets/hero-district.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Жетісай аудандық білім бөлімі — ақпараттық портал" },
      { name: "description", content: "Жетісай ауданының мектептері, жаңалықтары, құжаттары мен қабылдау ақпараты бір порталда." },
      { property: "og:title", content: "Жетісай білім — бір аудан, бір мақсат" },
      { property: "og:description", content: "Аудан мектептері мен білім жаңалықтары бір жерде." },
    ],
  }),
  component: Index,
});

const quick = [
  { to: "/schools", icon: GraduationCap, title: "Мектептер", text: "Каталог және ресми сайттар" },
  { to: "/documents", icon: FileText, title: "Құжаттар", text: "Ережелер мен жоспарлар" },
  { to: "/methodology", icon: BookOpen, title: "Әдістеме", text: "Ұстаздарға материалдар" },
  { to: "/admissions", icon: Users, title: "1-сыныпқа қабылдау", text: "Қадамдар мен құжаттар" },
] as const;

function Index() {
  return (
    <>
      <section className="container-page pt-6 md:pt-10">
        <div className="relative isolate overflow-hidden rounded-[2rem]">
          <img src={hero} alt="Жетісай ауданының мектебі" width={1600} height={1008} className="absolute inset-0 -z-10 size-full object-cover" />
          <div className="absolute inset-0 -z-10 bg-hero-overlay" />
          <div className="px-6 py-20 md:px-14 md:py-32">
            <Badge className="bg-accent text-accent-foreground hover:bg-accent">{site.region}</Badge>
            <h1 className="mt-6 max-w-3xl text-4xl font-bold text-balance text-primary-foreground md:text-6xl">
              Бір аудан. Бір мақсат. <span className="text-accent">Жарқын болашақ.</span>
            </h1>
            <p className="mt-6 max-w-xl text-primary-foreground/85 md:text-lg">
              Мектептер, мүмкіндіктер және пайдалы ақпарат — Жетісай ауданының білім кеңістігі бір порталда.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/schools">Мектепті табу <ArrowRight className="size-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link to="/about">Біз туралы</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="relative z-10 mx-4 -mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border shadow-lift md:mx-14 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-card p-5 md:p-7">
              <p className="font-display text-2xl font-bold text-primary md:text-3xl">{s.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page grid gap-4 py-20 sm:grid-cols-2 lg:grid-cols-4">
        {quick.map((q) => (
          <Link key={q.to} to={q.to} className="group rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift">
            <div className="flex items-start justify-between">
              <span className="flex size-11 items-center justify-center rounded-xl bg-brand-soft text-primary"><q.icon className="size-5" /></span>
              <ArrowUpRight className="size-5 text-muted-foreground transition-colors group-hover:text-primary" />
            </div>
            <h3 className="mt-5 font-semibold">{q.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{q.text}</p>
          </Link>
        ))}
      </section>

      <section className="bg-surface py-20">
        <div className="container-page">
          <SectionTitle eyebrow="Білім беру ұйымдары" title="Мектептермен танысыңыз" to="/schools" cta="Барлық мектептер" />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {schools.slice(0, 4).map((s) => (
              <Link key={s.id} to="/schools/$id" params={{ id: s.id }} className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-shadow hover:shadow-lift">
                <span className="text-xs font-semibold tracking-widest text-accent uppercase">{s.type}</span>
                <h3 className="mt-2 text-lg font-semibold text-balance">{s.name}</h3>
                <p className="mt-3 flex items-center gap-1.5 text-sm text-muted-foreground"><MapPin className="size-4" />{s.location}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <SectionTitle eyebrow="Өзекті ақпарат" title="Соңғы жаңалықтар" to="/news" cta="Барлық жаңалықтар" />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {news.slice(0, 3).map((n) => (
            <article key={n.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <div className="flex items-center gap-3">
                <Badge variant="secondary">{n.tag}</Badge>
                <time className="text-xs text-muted-foreground" dateTime={n.date}>{formatDate(n.date)}</time>
              </div>
              <h3 className="mt-4 font-semibold text-balance">{n.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{n.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-page">
        <div className="rounded-[2rem] bg-brand p-8 text-brand-foreground md:p-12">
          <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">Пайдалы сілтемелер</p>
          <h2 className="mt-3 text-2xl font-bold md:text-4xl">Білім жолындағы көмекшілер</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {usefulLinks.map((l) => (
              <a key={l.url} href={l.url} target="_blank" rel="noreferrer" className="group rounded-2xl border border-brand-foreground/15 p-6 transition-colors hover:bg-brand-foreground/10">
                <div className="flex items-center justify-between font-display text-lg font-semibold">
                  {l.title}<ArrowUpRight className="size-5 opacity-60 group-hover:opacity-100" />
                </div>
                <p className="mt-2 text-sm opacity-75">{l.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function SectionTitle({ eyebrow, title, to, cta }: { eyebrow: string; title: string; to: "/schools" | "/news"; cta: string }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div>
        <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">{eyebrow}</p>
        <h2 className="mt-2 text-3xl font-bold md:text-4xl">{title}</h2>
      </div>
      <Button asChild variant="outline">
        <Link to={to}>{cta} <ArrowRight className="size-4" /></Link>
      </Button>
    </div>
  );
}
