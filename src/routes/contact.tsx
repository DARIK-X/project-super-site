import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { PageHeader } from "@/components/PageHeader";
import { useI18n } from "@/i18n";
import { contactInfo } from "@/data/content";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Байланыс — 14 Колледж" },
      {
        name: "description",
        content: "Колледждің мекенжайы, телефоны, электрондық поштасы және кері байланыс формасы.",
      },
      { property: "og:title", content: "Байланыс — 14 Колледж" },
      { property: "og:description", content: "Колледжбен байланысу жолдары." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t, lang } = useI18n();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    toast.success(t("contact.sent"));
    setName("");
    setEmail("");
    setMessage("");
  }

  const items = [
    { icon: MapPin, label: t("contact.address"), value: contactInfo.address[lang] },
    { icon: Phone, label: t("contact.phone"), value: contactInfo.phone },
    { icon: Mail, label: t("contact.email"), value: contactInfo.email },
    { icon: Clock, label: t("contact.hours"), value: t("contact.hoursValue") },
  ];

  return (
    <>
      <PageHeader title={t("contact.title")} subtitle={t("contact.subtitle")} />

      <section className="container-page grid gap-10 py-16 lg:grid-cols-2">
        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((i) => (
            <div key={i.label} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <span className="flex size-10 items-center justify-center rounded-xl bg-brand-soft text-primary">
                <i.icon className="size-5" />
              </span>
              <p className="mt-4 text-xs text-muted-foreground">{i.label}</p>
              <p className="mt-1 font-medium">{i.value}</p>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-7 shadow-soft">
          <h2 className="text-xl font-semibold">{t("contact.form")}</h2>
          <div className="mt-6 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">{t("contact.name")}</Label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">{t("contact.email")}</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">{t("contact.message")}</Label>
              <Textarea
                id="message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <Button type="submit" size="lg" className="w-full">
              {t("contact.send")}
            </Button>
          </div>
        </form>
      </section>
    </>
  );
}