// Two languages: Bulgarian at the root of the site, English under /en/.
export type Lang = "bg" | "en";

export const LANGS: Lang[] = ["bg", "en"];

export function getLang(url: URL): Lang {
  return url.pathname === "/en" || url.pathname.startsWith("/en/") ? "en" : "bg";
}

/** A site path in the given language: "/blog" → "/en/blog" for English. */
export function localize(path: string, lang: Lang): string {
  if (lang === "bg") return path;
  return path === "/" ? "/en/" : `/en${path}`;
}

/** The same page in the other language, for pages whose path is the same in both. */
export function swapLang(pathname: string): string {
  if (pathname === "/en" || pathname === "/en/") return "/";
  if (pathname.startsWith("/en/")) return pathname.slice(3);
  return pathname === "/" ? "/en/" : `/en${pathname}`;
}

export function formatDate(date: Date, lang: Lang): string {
  return date.toLocaleDateString(lang === "en" ? "en-GB" : "bg-BG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export const NAV: Record<Lang, { title: string; url: string }[]> = {
  bg: [
    { title: "За мен", url: "/about" },
    { title: "Статии", url: "/blog" },
    { title: "Синхромистичен портал", url: "/portal" },
    { title: "Книги", url: "/books" },
    { title: "Магически кът", url: "/magic" },
    { title: "Консултации", url: "/consult" },
    { title: "Съновник", url: "/sonovnik" },
  ],
  en: [
    { title: "About", url: "/en/about" },
    { title: "Articles", url: "/en/blog" },
    { title: "Synchromystic Portal", url: "/en/portal" },
    { title: "Books", url: "/en/books" },
    { title: "Magic Corner", url: "/en/magic" },
    { title: "Readings", url: "/en/consult" },
    { title: "Dream Book", url: "/en/sonovnik" },
  ],
};

const strings = {
  bg: {
    siteDescription: "Astral ARRA: синхроничности, езотерика, астрология и Хюман дизайн.",
    homeTitle: "Astral ARRA – таро, синхромистицизъм и езотерика",
    homeDescription:
      "Таро, синхромистицизъм, астрал, гностицизъм и магия: статии, лични преживявания и таро консултации от Astral ARRA.",
    sectionDescription: "Статии на Astral ARRA в раздел",
    home: "Astral ARRA, начало",
    mainMenu: "Основно меню",
    openMenu: "Отвори менюто",
    closeMenu: "Затвори менюто",
    switchTo: "English",
    switchLabel: "Read this page in English",
    tagline: "Овладей съдбата си",
    motto: "Мъдрият управлява своите звезди, глупакът им се подчинява",
    enterPortal: "Влез в портала",
    readArticles: "Прочети статиите",
    latestArticle: "Последна статия",
    latestPortal: "Последно от портала",
    allArticles: "Всички статии",
    toPortal: "Към портала",
    articles: "Статии",
    articlesDescription:
      "Статии на Astral ARRA за таро, астрал, астрален дизайн, гностицизъм, магия и синхромистични анализи.",
    articlesLead: "Таро, астрал, астрален дизайн, гностицизъм, магия и анализи.",
    sections: "Раздели",
    all: "Всички",
    noPosts: "Тук още няма публикации.",
    upcoming: "Предстоящи статии",
    upcomingLead: "Тези текстове се пишат и ще излязат тук.",
    soon: "Скоро",
    tag: "Таг",
    tags: "Тагове",
    breadcrumb: "Път до статията",
    youtube: "YouTube видео",
    portal: "Синхромистичен портал",
    portalLead: "Лични преживявания със синхроничности, времеви линии и знаци по пътя.",
    portalThemes: "Какво ще откриете в портала",
    posts: "Публикации",
    onThisPage: "На тази страница",
    social: "Социални мрежи",
    rights: "Всички права запазени.",
    cardOfDay: "Таро карта за деня",
    cardOfDayLead: "Синхронизирай деня си ⭐",
    drawCard: "Изтегли карта",
    cardOfDayUrl: "/karta-za-deniya",
    privacy: "Поверителност",
    cookies: "Бисквитки",
    sigil: "Сигил",
  },
  en: {
    siteDescription: "Astral ARRA: synchronicities, esotericism, astrology and Human Design.",
    homeTitle: "Astral ARRA – Tarot, Synchromysticism & Esoteric Knowledge",
    homeDescription:
      "Tarot, synchromysticism, the astral, Gnosticism and magick: articles, personal experiences and tarot readings by Astral ARRA.",
    sectionDescription: "Articles by Astral ARRA in the section",
    home: "Astral ARRA, home",
    mainMenu: "Main menu",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    switchTo: "Български",
    switchLabel: "Прочети тази страница на български",
    tagline: "Master your destiny",
    motto: "The wise rule their stars; the fool obeys them",
    enterPortal: "Enter the portal",
    readArticles: "Read the articles",
    latestArticle: "Latest article",
    latestPortal: "Latest from the portal",
    allArticles: "All articles",
    toPortal: "To the portal",
    articles: "Articles",
    articlesDescription:
      "Articles by Astral ARRA on tarot, the astral, Astral Design, Gnosticism, magick and synchromystic analyses.",
    articlesLead: "Tarot, the astral, Astral Design, Gnosticism, magick and analyses.",
    sections: "Sections",
    all: "All",
    noPosts: "Nothing published here yet.",
    upcoming: "Coming soon",
    upcomingLead: "These pieces are being written and will appear here.",
    soon: "Soon",
    tag: "Tag",
    tags: "Tags",
    breadcrumb: "Breadcrumb",
    youtube: "YouTube video",
    portal: "Synchromystic Portal",
    portalLead: "Personal encounters with synchronicities, timelines and signs along the way.",
    portalThemes: "What you will find in the portal",
    posts: "Posts",
    onThisPage: "On this page",
    social: "Social media",
    rights: "All rights reserved.",
    cardOfDay: "Tarot Card of the Day",
    cardOfDayLead: "Synchronise your day ⭐",
    drawCard: "Draw a card",
    cardOfDayUrl: "/en/card-of-the-day",
    privacy: "Privacy",
    cookies: "Cookies",
    sigil: "Sigil",
  },
} as const;

export type UIKey = keyof (typeof strings)["bg"];

export function t(lang: Lang) {
  return (key: UIKey) => strings[lang][key];
}
