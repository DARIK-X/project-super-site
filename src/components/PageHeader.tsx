export function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="border-b border-border bg-surface">
      <div className="container-page py-14 md:py-20">
        <h1 className="text-3xl font-bold text-balance md:text-5xl">{title}</h1>
        {subtitle ? (
          <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">{subtitle}</p>
        ) : null}
      </div>
    </section>
  );
}