import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { dict } from "@/i18n/dict";

export type Lang = "kk" | "ru" | "en";
export type FontSize = "normal" | "large" | "xlarge";
export type Contrast = "normal" | "light" | "dark";

type Prefs = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (kk: string) => string;
  a11y: boolean;
  setA11y: (v: boolean) => void;
  fontSize: FontSize;
  setFontSize: (v: FontSize) => void;
  contrast: Contrast;
  setContrast: (v: Contrast) => void;
  hideImages: boolean;
  setHideImages: (v: boolean) => void;
};

const Ctx = createContext<Prefs | null>(null);
const KEY = "jetisay-prefs";

export function PrefsProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("kk");
  const [a11y, setA11y] = useState(false);
  const [fontSize, setFontSize] = useState<FontSize>("large");
  const [contrast, setContrast] = useState<Contrast>("light");
  const [hideImages, setHideImages] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const s = JSON.parse(localStorage.getItem(KEY) || "{}");
      if (s.lang) setLang(s.lang);
      if (typeof s.a11y === "boolean") setA11y(s.a11y);
      if (s.fontSize) setFontSize(s.fontSize);
      if (s.contrast) setContrast(s.contrast);
      if (typeof s.hideImages === "boolean") setHideImages(s.hideImages);
    } catch {
      /* ignore */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(KEY, JSON.stringify({ lang, a11y, fontSize, contrast, hideImages }));
    const html = document.documentElement;
    html.lang = lang;
    html.dataset["a11y"] = a11y ? "on" : "off";
    html.dataset["font"] = a11y ? fontSize : "normal";
    html.dataset["contrast"] = a11y ? contrast : "normal";
    html.dataset["noimg"] = a11y && hideImages ? "on" : "off";
  }, [ready, lang, a11y, fontSize, contrast, hideImages]);

  const t = useCallback((kk: string) => (lang === "kk" ? kk : (dict[kk]?.[lang] ?? kk)), [lang]);

  return (
    <Ctx.Provider
      value={{ lang, setLang, t, a11y, setA11y, fontSize, setFontSize, contrast, setContrast, hideImages, setHideImages }}
    >
      {children}
    </Ctx.Provider>
  );
}

export function usePrefs() {
  const c = useContext(Ctx);
  if (!c) throw new Error("PrefsProvider missing");
  return c;
}

export const useT = () => useContext(Ctx)?.t ?? ((s: string) => s);

const locales: Record<Lang, string> = { kk: "kk-KZ", ru: "ru-RU", en: "en-GB" };
export function useFormatDate() {
  const { lang } = usePrefs();
  return (d: string) =>
    new Date(d).toLocaleDateString(locales[lang], { day: "numeric", month: "long", year: "numeric" });
}
