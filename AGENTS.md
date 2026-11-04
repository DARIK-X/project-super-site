<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->
- UI text: write Kazakh strings in code/data wrapped in `t()` from `src/lib/prefs.tsx`; RU/EN translations live in `src/i18n/dict.ts` keyed by the Kazakh text. Why: one place to add translations, Kazakh fallback.
- Low-vision mode is driven by `data-*` attributes on `<html>` set by PrefsProvider and styled at the bottom of `src/styles.css`. Why: works across all pages without per-component logic.
- News live in the database (`news` table, kk/ru/en columns) and are edited at the unlinked `/admin` page; the first registered account becomes admin via trigger. Why: editable without code.
