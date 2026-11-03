import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";

export const listNews = createServerFn({ method: "GET" }).handler(async () => {
  const key = process.env.SUPABASE_PUBLISHABLE_KEY!;
  const sb = createClient(process.env.SUPABASE_URL!, key, {
    auth: { storage: undefined, persistSession: false, autoRefreshToken: false },
    global: {
      fetch: (input, init) => {
        const h = new Headers(init?.headers);
        if (key.startsWith("sb_")) {
          h.delete("Authorization");
          h.set("apikey", key);
        }
        return fetch(input, { ...init, headers: h });
      },
    },
  });
  const { data, error } = await sb.from("news").select("*").order("date", { ascending: false });
  if (error) throw new Error(error.message);
  return data;
});
