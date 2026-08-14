import { useI18n } from "@/i18n";
import { languageNames, languageShort, type Lang } from "@/i18n/translations";
import { cn } from "@/lib/utils";

const order: Lang[] = ["kk", "ru", "en"];

export function LanguageSwitcher({ className }: { className?: string }) {
  const { lang, setLang } = useI18n();

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-card p-0.5",
        className,
      )}
      role="group"
      aria-label="Language"
    >
      {order.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-label={languageNames[l]}
          aria-pressed={lang === l}
          className={cn(
            "rounded-full px-2.5 py-1 text-xs font-semibold transition-colors",
            lang === l
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {languageShort[l]}
        </button>
      ))}
    </div>
  );
}