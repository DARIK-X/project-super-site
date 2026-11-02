import { queryOptions } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
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
  queryFn: async () => {
    const { data, error } = await supabase.from("news").select("*").order("date", { ascending: false });
    if (error) throw error;
    return data as NewsRow[];
  },
});

export const pick = (n: NewsRow, field: "title" | "text", lang: Lang) =>
  (n[`${field}_${lang}` as keyof NewsRow] as string) || n[`${field}_kk`];
