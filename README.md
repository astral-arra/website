# Astral ARRA

Сайтът [astralarra.com](https://astralarra.com): статии, Синхромистичен портал, консултации и библиотека. Направен е с [Astro](https://astro.build) и Tailwind CSS.

## Работа локално

```sh
pnpm install
pnpm dev       # сайтът е на http://localhost:4321
pnpm build     # готовият сайт отива в ./dist
pnpm preview   # преглед на готовия сайт
```

## Къде какво е

| Какво | Къде |
| --- | --- |
| Статии | `src/content/blog/*.md` |
| Портал | `src/content/portal/*.md` |
| Снимки към статиите | `src/content/images/` |
| Меню | `src/content/nav/routes.json` |
| Заглавие и слоган | `src/content/site/data.json` |
| Страници | `src/pages/` |
| Цветове и шрифтове | `tailwind.config.cjs`, `src/styles.css` |

### Нова статия

Създай файл в `src/content/blog/` (или `src/content/portal/`) с това начало:

```md
---
title: Заглавие на статията
date: 2026-11-05
description: Едно изречение за статията (показва се в Google и при споделяне).
image: "../images/korica.png"
tags:
  - астрология
---

Текстът започва тук.
```

Линк към YouTube видео, оставен сам на ред, се показва като вграден плейър.

## Цветове

Виолетово, перлено бяло и златисто, с неоново синьо и светли сини нюанси.

| Име | Цвят | Употреба |
| --- | --- | --- |
| `night` | `#120A2E` | фон |
| `amethyst-500` | `#7F5AF0` | основно виолетово |
| `pearl` | `#F6F2FF` | текст |
| `gold` | `#D9B45A` | дати, активен линк, разделители |
| `neon` | `#2BD2FF` | сиянието на логото, фокус, hover |
| `ice-200` | `#BDE8FF` | светлосиньо: линкове, акценти |

Шрифтове: Forum за заглавия, Literata за текст. И двата поддържат кирилица и са включени в сайта, без връзка към Google Fonts.
