# Miga Modas — site oficial

Site da **Miga Modas**, loja de moda feminina, masculina e infantil em Araçatuba-SP.

- Site: https://brenotocchio.github.io/miga-modas/
- Instagram: [@migamodasoficial](https://www.instagram.com/migamodasoficial/)
- WhatsApp: (18) 99790-2816
- Loja física: R. Sud Menuci, 478 — Jardim Universo, Araçatuba-SP

## Arquivos

| Arquivo / pasta   | O que é                                                        |
|-------------------|----------------------------------------------------------------|
| `novidades.js`    | **As peças da seção Novidades.** É o arquivo que você edita.   |
| `img/novidades/`  | Fotos das peças das Novidades.                                 |
| `index.html`      | O site inteiro: estrutura, estilos e scripts.                  |
| `img/`            | Logo e fotos fixas do site (banners, Quem somos, Instagram).   |

## Trocar as Novidades

1. Coloque a foto da peça em `img/novidades/` (nome sem espaço nem acento, ex.: `vestido-floral-rosa.jpg`).
2. Abra `novidades.js`, copie o **MODELO** que está no topo do arquivo e cole dentro da lista `NOVIDADES`.
3. Preencha nome, público (`fem`, `masc` ou `inf`), fotos, tamanhos e preço.
4. Salve e envie para o GitHub. O site se atualiza em cerca de 1 minuto.

- **Remover uma peça:** apague o bloco dela, do `{` até o `},`.
- **Peça esgotada:** troque `esgotado: false` por `esgotado: true`.
- **Lista vazia:** o site mostra sozinho “Nenhuma novidade disponível no momento”.

Pelo próprio GitHub: abra `novidades.js` → ícone de lápis (Edit) → altere → **Commit changes**.
Para enviar fotos: abra a pasta `img/novidades` → **Add file → Upload files**.

## Outros textos

Avisos da faixa do topo, banners, categorias e horários ficam no bloco **CONFIGURAÇÃO** no começo do `<script>`, no final do `index.html`.

## Hospedagem

GitHub Pages (branch `main`, pasta raiz).
