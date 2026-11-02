create type public.app_role as enum ('admin');

create table public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  role public.app_role not null,
  unique (user_id, role)
);
grant select on public.user_roles to authenticated;
grant all on public.user_roles to service_role;
alter table public.user_roles enable row level security;
create policy "own roles readable" on public.user_roles for select to authenticated using (user_id = auth.uid());

create or replace function public.has_role(_user_id uuid, _role public.app_role)
returns boolean language sql stable security definer set search_path = public
as $$ select exists (select 1 from public.user_roles where user_id = _user_id and role = _role) $$;

-- first registered user becomes admin
create or replace function public.handle_first_admin()
returns trigger language plpgsql security definer set search_path = public
as $$
begin
  if not exists (select 1 from public.user_roles where role = 'admin') then
    insert into public.user_roles (user_id, role) values (new.id, 'admin');
  end if;
  return new;
end $$;
create trigger on_auth_user_created_admin after insert on auth.users
for each row execute function public.handle_first_admin();

create table public.news (
  id uuid primary key default gen_random_uuid(),
  date date not null default current_date,
  tag text not null default 'Жаңалық',
  title_kk text not null,
  title_ru text not null default '',
  title_en text not null default '',
  text_kk text not null default '',
  text_ru text not null default '',
  text_en text not null default '',
  created_at timestamptz not null default now()
);
grant select on public.news to anon, authenticated;
grant insert, update, delete on public.news to authenticated;
grant all on public.news to service_role;
alter table public.news enable row level security;
create policy "news public read" on public.news for select to anon, authenticated using (true);
create policy "admin insert news" on public.news for insert to authenticated with check (public.has_role(auth.uid(), 'admin'));
create policy "admin update news" on public.news for update to authenticated using (public.has_role(auth.uid(), 'admin'));
create policy "admin delete news" on public.news for delete to authenticated using (public.has_role(auth.uid(), 'admin'));

insert into public.news (date, tag, title_kk, title_ru, title_en, text_kk, text_ru, text_en) values
('2026-10-28','Іс-шара','Аудандық «Үздік ұстаз — 2026» байқауының жеңімпаздары анықталды','Определены победители районного конкурса «Лучший учитель — 2026»','Winners of the district "Best Teacher 2026" contest announced','Байқауға аудан мектептерінен 64 педагог қатысып, 10 ұстаз жүлделі орындарға ие болды.','В конкурсе участвовали 64 педагога, 10 учителей заняли призовые места.','64 teachers took part; 10 of them won prizes.'),
('2026-10-15','Олимпиада','Пәндік олимпиаданың аудандық кезеңі басталды','Стартовал районный этап предметной олимпиады','District stage of the subject olympiad has begun','Олимпиадаға 9–11 сынып оқушылары қатысады. Нәтижелер порталда жарияланады.','Участвуют ученики 9–11 классов. Результаты будут опубликованы на портале.','Students of grades 9–11 take part. Results will be published on the portal.'),
('2026-09-01','Жаңалық','Ауданда екі жаңа мектеп пайдалануға берілді','В районе открылись две новые школы','Two new schools opened in the district','Жаңа мектептер 1200 оқушыға арналған, заманауи зертханалармен жабдықталған.','Новые школы рассчитаны на 1200 учеников и оснащены современными лабораториями.','The new schools serve 1,200 students and have modern labs.');