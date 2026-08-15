import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Building2, Briefcase } from "lucide-react";
import { useI18n } from "@/i18n";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { majors, news } from "@/data/content";
import hero from "@/assets/hero-college.jpg";
import campus5 from "@/assets/campus-5.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "14 Колледж — болашақ ұстаздар осы жерден бастайды" },
      {
        name: "description",
        content:
          "№14 кәсіптік колледж: педагогикалық және кәсіптік мамандықтар, қабылдау шарттары, жаңалықтар мен байланыс.",
      },
      { property: "og:title", content: "14 Колледж — кәсіптік білім ордасы" },
      {
        property: "og:description",
        content: "Мамандықтар, талапкерге арналған ақпарат және колледж өмірі.",
      },
    ],
  }),
  component: Index,
});

const locales = { kk: "kk-KZ", ru: "ru-RU", en: "en-GB" } as const;

function Index() {
  const { t, lang } = useI18n();

  const stats = [
    { value: "850+", label: t("stats.students") },
    { value: "64", label: t("stats.teachers") },
    { value: String(majors.length), label: t("stats.majors") },
    { value: "30+", label: t("stats.years") },
  ];

  const points = [
    { icon: Sparkles, title: t("mission.point1.title"), text: t("mission.point1.text") },
    { icon: Building2, title: t("mission.point2.title"), text: t("mission.point2.text") },
    { icon: Briefcase, title: t("mission.point3.title"), text: t("mission.point3.text") },
  ];

  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img
          src={hero}
          alt=""
          width={1920}
          height={1088}
          className="absolute inset-0 -z-10 size-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-hero-overlay" />
        <div className="container-page py-24 md:py-36">
          <Badge className="bg-accent text-accent-foreground hover:bg-accent">
            {t("hero.badge")}
          </Badge>
          <h1 className="mt-6 max-w-3xl text-4xl font-bold text-balance text-primary-foreground md:text-6xl">
            {t("hero.title")}
          </h1>
          <p className="mt-6 max-w-xl text-base text-primary-foreground/85 md:text-lg">
            {t("hero.subtitle")}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/applicants">
                {t("hero.cta")} <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link to="/majors">{t("hero.cta2")}</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-card">
        <div className="container-page grid grid-cols-2 gap-6 py-10 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-3xl font-bold text-primary md:text-4xl">{s.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page grid gap-12 py-20 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-xs font-semibold tracking-widest text-accent uppercase">
            {t("mission.label")}
          </p>
          <h2 className="mt-3 text-3xl font-bold text-balance md:text-4xl">{t("mission.title")}</h2>
          <p className="mt-5 text-muted-foreground">{t("mission.text")}</p>
          <div className="mt-8 space-y-5">
            {points.map((p) => (
              <div key={p.title} className="flex gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-primary">
                  <p.icon className="size-5" />
                </span>
                <div>
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <img
          src={campus5}
          alt={t("mission.title")}
          loading="lazy"
          width={1200}
          height={800}
          className="rounded-3xl shadow-lift"
        />
      </section>

      <section className="bg-surface py-20">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold md:text-4xl">{t("majors.title")}</h2>
              <p className="mt-2 text-muted-foreground">{t("majors.subtitle")}</p>
            </div>
            <Button asChild variant="outline">
              <Link to="/majors">
                {t("majors.all")} <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {majors.slice(0, 6).map((m) => (
              <Link
                key={m.code}
                to="/majors"
                className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-shadow hover:shadow-lift"
              >
                <span className="text-xs font-semibold tracking-widest text-accent">{m.code}</span>
                <h3 className="mt-2 font-semibold text-balance">{m.title[lang]}</h3>
                <p className="mt-3 line-clamp-3 text-sm text-muted-foreground">
                  {m.description[lang]}
                </p>
                <p className="mt-4 text-xs text-muted-foreground">
                  {t("majors.duration")}: {m.duration[lang]}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">{t("news.latest")}</h2>
            <p className="mt-2 text-muted-foreground">{t("news.subtitle")}</p>
          </div>
          <Button asChild variant="outline">
            <Link to="/news">
              {t("news.all")} <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {news.slice(0, 3).map((n) => (
            <article key={n.title.en} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <div className="flex items-center gap-3">
                <Badge variant="secondary">{n.tag[lang]}</Badge>
                <time className="text-xs text-muted-foreground" dateTime={n.date}>
                  {new Date(n.date).toLocaleDateString(locales[lang], {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
              </div>
              <h3 className="mt-4 font-semibold text-balance">{n.title[lang]}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{n.excerpt[lang]}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-page pb-4">
        <div className="flex flex-col items-start gap-5 rounded-3xl bg-brand p-10 text-brand-foreground md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">{t("cta.title")}</h2>
            <p className="mt-2 opacity-85">{t("cta.text")}</p>
          </div>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">{t("cta.button")}</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
