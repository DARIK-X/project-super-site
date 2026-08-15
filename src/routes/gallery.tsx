import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { useI18n } from "@/i18n";
import type { Lang } from "@/i18n";
import campus1 from "@/assets/campus-1.jpg";
import campus2 from "@/assets/campus-2.jpg";
import campus3 from "@/assets/campus-3.jpg";
import campus4 from "@/assets/campus-4.jpg";
import campus5 from "@/assets/campus-5.jpg";
import campus6 from "@/assets/campus-6.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Галерея — 14 Колледж" },
      {
        name: "description",
        content: "Колледждің сабақтары, кітапханасы, спорт кешені және студенттік өмірінен фотосуреттер.",
      },
      { property: "og:title", content: "Галерея — 14 Колледж" },
      { property: "og:description", content: "Колледж өмірінен фотосуреттер." },
    ],
  }),
  component: GalleryPage,
});

const photos: { src: string; caption: Record<Lang, string> }[] = [
  { src: campus1, caption: { kk: "Сабақ үстінде", ru: "На занятии", en: "In class" } },
  { src: campus2, caption: { kk: "Кітапхана", ru: "Библиотека", en: "Library" } },
  { src: campus3, caption: { kk: "Компьютер сыныбы", ru: "Компьютерный класс", en: "Computer lab" } },
  { src: campus4, caption: { kk: "Спорт кешені", ru: "Спортивный зал", en: "Sports hall" } },
  { src: campus5, caption: { kk: "Студенттік өмір", ru: "Студенческая жизнь", en: "Student life" } },
  { src: campus6, caption: { kk: "Түлектер күні", ru: "Выпускной", en: "Graduation" } },
];

function GalleryPage() {
  const { t, lang } = useI18n();

  return (
    <>
      <PageHeader title={t("gallery.title")} subtitle={t("gallery.subtitle")} />

      <section className="container-page grid gap-5 py-16 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((p) => (
          <figure key={p.caption.en} className="group overflow-hidden rounded-2xl bg-card shadow-soft">
            <img
              src={p.src}
              alt={p.caption[lang]}
              loading="lazy"
              width={1200}
              height={800}
              className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <figcaption className="px-5 py-4 text-sm font-medium">{p.caption[lang]}</figcaption>
          </figure>
        ))}
      </section>
    </>
  );
}