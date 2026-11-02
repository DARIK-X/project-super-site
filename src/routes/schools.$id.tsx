import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, MapPin, Phone, User, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { schools } from "@/data/site";
import { useT } from "@/lib/prefs";

export const Route = createFileRoute("/schools/$id")({
  loader: ({ params }) => {
    const school = schools.find((s) => s.id === params.id);
    if (!school) throw notFound();
    return { school };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.school.name} — Жетісай білім` },
          { name: "description", content: loaderData.school.about },
          { property: "og:title", content: loaderData.school.name },
          { property: "og:description", content: loaderData.school.about },
        ]
      : [{ title: "Мектеп табылмады" }, { name: "robots", content: "noindex" }],
  }),
  notFoundComponent: NotFoundSchool,
  component: SchoolPage,
});

function NotFoundSchool() {
  const t = useT();
  return (
    <div className="container-page py-24">
      <h1 className="text-3xl font-bold">{t("Мектеп табылмады")}</h1>
      <Link to="/schools" className="mt-4 inline-block text-primary">← {t("Мектептер")}</Link>
    </div>
  );
}

function SchoolPage() {
  const t = useT();
  const { school: s } = Route.useLoaderData();
  const none = t("Көрсетілмеген");
  const rows = [
    { icon: MapPin, label: t("Мекенжай"), value: t(s.location) },
    { icon: Users, label: t("Оқушы саны"), value: s.students ? String(s.students) : none },
    { icon: User, label: t("Директор"), value: s.director ? t(s.director) : none },
    { icon: Phone, label: t("Телефон"), value: s.phone ?? none },
  ];
  return (
    <section className="container-page py-14">
      <Link to="/schools" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="size-4" /> {t("Барлық мектептер")}
      </Link>
      <span className="mt-8 block text-xs font-semibold tracking-widest text-accent uppercase">{t(s.type)}</span>
      <h1 className="mt-3 max-w-4xl text-3xl font-bold text-balance md:text-5xl">{t(s.name)}</h1>
      <p className="mt-5 max-w-2xl text-muted-foreground">{t(s.about)}</p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {rows.map((r) => (
          <div key={r.label} className="rounded-2xl border border-border bg-card p-5 shadow-soft">
            <r.icon className="size-5 text-primary" />
            <p className="mt-3 text-xs text-muted-foreground">{r.label}</p>
            <p className="mt-1 font-medium">{r.value}</p>
          </div>
        ))}
      </div>
      {s.site ? (
        <Button asChild size="lg" className="mt-10">
          <a href={s.site} target="_blank" rel="noreferrer">{t("Ресми сайт")} <ArrowUpRight className="size-4" /></a>
        </Button>
      ) : null}
    </section>
  );
}
