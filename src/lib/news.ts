import { queryOptions } from "@tanstack/react-query";
import { listNews } from "@/lib/news.functions";
import type { Lang } from "@/lib/prefs";

export type NewsRow = {
  id: string;
  date: string;
  tag: string;
  title_kk: string;
  title_ru: string;
  title_en: string;
  text_kk: string;
  text_ru: string;
  text_en: string;
};

export const newsQuery = queryOptions({
  queryKey: ["news"],
  queryFn: async () => (await listNews()) as NewsRow[],
});

export const pick = (n: NewsRow, field: "title" | "text", lang: Lang) =>
  (n[`${field}_${lang}` as keyof NewsRow] as string) || n[`${field}_kk`];
