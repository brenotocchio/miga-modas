# Miga Modas — como ligar a Área da loja (Supabase)

Sem configuração, o site funciona em **modo demonstração**: a Área da loja abre direto, mas as peças ficam salvas só no navegador de quem cadastrou. Siga os passos abaixo uma única vez (cerca de 15 minutos) para as peças aparecerem para todas as clientes.

## 1. Criar o projeto (grátis)
1. Crie uma conta em https://supabase.com e clique em **New project**.
2. Dê um nome (ex.: `miga-modas`), crie uma senha do banco e escolha a região **South America (São Paulo)**.

## 2. Criar a tabela e o espaço das fotos
No menu lateral, abra **SQL Editor → New query**, cole o código abaixo e clique em **Run**:

```sql
-- Tabela das peças
create table public.produtos (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  publico     text not null check (publico in ('fem','masc','inf')),
  tipo        text,
  titulo      text not null,
  tamanhos    text[] not null default '{}',
  cores       text,
  preco       text,
  descricao   text,
  fotos       text[] not null default '{}',
  esgotado    boolean not null default false,
  destaque    boolean not null default false
);

alter table public.produtos enable row level security;

-- Qualquer visitante pode VER as peças
create policy "todos leem" on public.produtos
  for select using (true);

-- Só quem está logado (a dona) pode criar, editar e remover
create policy "loja escreve" on public.produtos
  for all to authenticated using (true) with check (true);

-- Pasta pública para as fotos
insert into storage.buckets (id, name, public) values ('fotos', 'fotos', true);

create policy "loja envia fotos" on storage.objects
  for insert to authenticated with check (bucket_id = 'fotos');

create policy "loja apaga fotos" on storage.objects
  for delete to authenticated using (bucket_id = 'fotos');
```

## 3. Criar o login da dona (e bloquear cadastros)
1. Vá em **Authentication → Users → Add user → Create new user**, coloque o e-mail e a senha da dona e marque **Auto Confirm User**.
2. **Importante:** vá em **Authentication → Sign In / Providers** e **desligue “Allow new users to sign up”**. Assim ninguém mais consegue criar conta e mexer nas peças.

## 4. Colar as chaves no site
1. Em **Project Settings → API** (ou **Data API**), copie a **Project URL** e a chave **anon public**.
2. No `index.html`, no bloco `CONFIGURAÇÃO` do script, preencha:

```js
const SUPABASE_URL = "https://SEU-PROJETO.supabase.co";
const SUPABASE_KEY = "a-chave-anon-public";
```

A chave *anon* pode ficar no site: quem protege as peças são as regras do passo 2 e o cadastro desligado do passo 3. **Nunca** use a chave `service_role` no site.

## 5. Publicar o site
Hospede o `index.html` em qualquer serviço de site estático (Netlify, Vercel, Hostinger, GitHub Pages…) e aponte o domínio da loja.

## Uso no dia a dia (para a dona)
- Abra `seusite.com.br/#admin` no celular (dica: “Adicionar à tela de início” para virar um ícone). O link “Área da loja” também fica no rodapé do site.
- **Nova peça:** escolha Feminino/Masculino/Infantil → tipo → nome → tire ou escolha as fotos (a primeira é a capa; ★ troca a capa) → marque os tamanhos → **Publicar peça**. Ela aparece na hora em Novidades.
- **Esgotou:** um toque em “Esgotou”. A peça continua no site com o aviso e o botão vira “Avise-me quando chegar”.
- **Remover:** “Remover” apaga a peça e as fotos dela.
- **Saída automática:** peças com mais de 30 dias saem sozinhas das Novidades (mude em `NOVIDADE_DIAS`). “Renovar” traz uma de volta ao topo.
- Sem nenhuma peça, o site mostra “Nenhuma novidade disponível no momento” com botões para o Instagram e o WhatsApp.
- Cada peça tem **Copiar link desta peça**, para colar no story ou no WhatsApp.

## Ajustes rápidos no código
- Tipos de peça: lista `TIPOS`.
- Tamanhos sugeridos por público: `TAMANHOS` (dá para digitar outros na hora em “Outro tamanho”).
- Número do WhatsApp: `WHATS`.
