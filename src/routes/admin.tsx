import { createFileRoute } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState, type FormEvent } from "react";
import type { Session } from "@supabase/supabase-js";
import { toast } from "sonner";
import { Pencil, Trash2, LogOut } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { newsQuery, type NewsRow } from "@/lib/news";

// Жасырын әкімші беті: мәзірде сілтеме жоқ, тек /admin мекенжайы арқылы ашылады.
export const Route = createFileRoute("/admin")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Әкімші панелі — Жетісай білім" },
      { name: "description", content: "Жетісай білім порталының жабық басқару беті." },
      { property: "og:title", content: "Әкімші панелі — Жетісай білім" },
      { property: "og:description", content: "Жабық бет." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminPage,
});

function AdminPage() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoading(false);
    });
    return () => data.subscription.unsubscribe();
  }, []);
  if (loading) return <div className="container-page py-24 text-muted-foreground">…</div>;
  return session ? <Dashboard userId={session.user.id} email={session.user.email ?? ""} /> : <Login />;
}

function Login() {
  const [mode, setMode] = useState<"in" | "up">("in");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setBusy(true);
    const res =
      mode === "in"
        ? await supabase.auth.signInWithPassword({ email, password })
        : await supabase.auth.signUp({ email, password, options: { emailRedirectTo: `${window.location.origin}/admin` } });
    setBusy(false);
    if (res.error) return toast.error(res.error.message);
    if (mode === "up" && !res.data.session) toast.success("Поштаңызға растау хаты жіберілді.");
  };
  return (
    <section className="container-page flex justify-center py-24">
      <form onSubmit={submit} className="w-full max-w-sm space-y-4 rounded-2xl border border-border bg-card p-8 shadow-lift">
        <h1 className="text-2xl font-bold">Әкімші панелі</h1>
        <Input type="email" required placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input type="password" required minLength={6} placeholder="Құпиясөз" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button type="submit" className="w-full" disabled={busy}>{mode === "in" ? "Кіру" : "Тіркелу"}</Button>
        <button type="button" className="text-sm text-muted-foreground hover:text-foreground" onClick={() => setMode(mode === "in" ? "up" : "in")}>
          {mode === "in" ? "Аккаунт жоқ па? Тіркелу" : "Аккаунт бар ма? Кіру"}
        </button>
      </form>
    </section>
  );
}

const empty = { date: new Date().toISOString().slice(0, 10), tag: "Жаңалық", title_kk: "", title_ru: "", title_en: "", text_kk: "", text_ru: "", text_en: "" };

function Dashboard({ userId, email }: { userId: string; email: string }) {
  const qc = useQueryClient();
  const role = useQuery({
    queryKey: ["is-admin", userId],
    queryFn: async () => {
      const { data } = await supabase.from("user_roles").select("role").eq("user_id", userId).eq("role", "admin").maybeSingle();
      return !!data;
    },
  });
  const news = useQuery(newsQuery);
  const [form, setForm] = useState(empty);
  const [editId, setEditId] = useState<string | null>(null);

  if (role.isLoading) return <div className="container-page py-24 text-muted-foreground">…</div>;
  if (!role.data)
    return (
      <section className="container-page py-24">
        <h1 className="text-2xl font-bold">Рұқсат жоқ</h1>
        <p className="mt-2 text-muted-foreground">{email} аккаунтында әкімші құқығы жоқ.</p>
        <Button className="mt-6" variant="outline" onClick={() => supabase.auth.signOut()}>Шығу</Button>
      </section>
    );

  const save = async (e: FormEvent) => {
    e.preventDefault();
    const res = editId ? await supabase.from("news").update(form).eq("id", editId) : await supabase.from("news").insert(form);
    if (res.error) return toast.error(res.error.message);
    toast.success("Сақталды");
    setForm(empty);
    setEditId(null);
    qc.invalidateQueries({ queryKey: ["news"] });
  };
  const remove = async (id: string) => {
    if (!confirm("Жаңалықты өшіру керек пе?")) return;
    const { error } = await supabase.from("news").delete().eq("id", id);
    if (error) return toast.error(error.message);
    qc.invalidateQueries({ queryKey: ["news"] });
  };
  const edit = (n: NewsRow) => {
    setEditId(n.id);
    setForm({ date: n.date, tag: n.tag, title_kk: n.title_kk, title_ru: n.title_ru, title_en: n.title_en, text_kk: n.text_kk, text_ru: n.text_ru, text_en: n.text_en });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const set = (k: keyof typeof empty) => (e: { target: { value: string } }) => setForm({ ...form, [k]: e.target.value });

  return (
    <section className="container-page py-12">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Әкімші панелі</h1>
          <p className="text-sm text-muted-foreground">{email}</p>
        </div>
        <Button variant="outline" onClick={() => supabase.auth.signOut()}><LogOut className="size-4" /> Шығу</Button>
      </div>

      <form onSubmit={save} className="mt-8 grid gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft">
        <h2 className="text-xl font-semibold">{editId ? "Жаңалықты өзгерту" : "Жаңа жаңалық"}</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Input type="date" required value={form.date} onChange={set("date")} />
          <select value={form.tag} onChange={set("tag")} className="h-9 rounded-md border border-input bg-background px-3 text-sm">
            {["Жаңалық", "Іс-шара", "Олимпиада", "Хабарландыру"].map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>
        {(["kk", "ru", "en"] as const).map((l) => (
          <div key={l} className="grid gap-2">
            <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">{l === "kk" ? "Қазақша (міндетті)" : l === "ru" ? "Орысша" : "Ағылшынша"}</p>
            <Input required={l === "kk"} placeholder="Тақырып" value={form[`title_${l}`]} onChange={set(`title_${l}`)} />
            <Textarea placeholder="Мәтін" value={form[`text_${l}`]} onChange={set(`text_${l}`)} />
          </div>
        ))}
        <div className="flex gap-3">
          <Button type="submit">Сақтау</Button>
          {editId ? <Button type="button" variant="outline" onClick={() => { setEditId(null); setForm(empty); }}>Болдырмау</Button> : null}
        </div>
      </form>

      <ul className="mt-8 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
        {(news.data ?? []).map((n) => (
          <li key={n.id} className="flex items-center gap-4 p-4">
            <div className="flex-1">
              <p className="font-medium">{n.title_kk}</p>
              <p className="text-xs text-muted-foreground">{n.date} · {n.tag}</p>
            </div>
            <Button size="icon" variant="outline" aria-label="Өзгерту" onClick={() => edit(n)}><Pencil className="size-4" /></Button>
            <Button size="icon" variant="outline" aria-label="Өшіру" onClick={() => remove(n.id)}><Trash2 className="size-4" /></Button>
          </li>
        ))}
      </ul>
    </section>
  );
}
