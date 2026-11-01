export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-surface">
      <div className="pointer-events-none absolute -top-32 -right-32 size-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="container-page relative py-16 md:py-24">
        {eyebrow ? (
          <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">{eyebrow}</p>
        ) : null}
        <h1 className="mt-3 max-w-3xl text-4xl font-bold text-balance md:text-6xl">{title}</h1>
        {subtitle ? (
          <p className="mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">{subtitle}</p>
        ) : null}
      </div>
    </section>
  );
}
