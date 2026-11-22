import type { Lang } from "../lib/i18n";
import { MAJORS } from "./tarot-majors";
import { MINORS } from "./tarot-minors";

export type { CardText } from "./tarot-types";

export const CARDS = [...MAJORS, ...MINORS];

/** Articles that go deeper into a card; other cards link to the tarot section. */
const DEEPER: Record<string, Record<Lang, { title: string; url: string }>> = {
  "21-world": {
    bg: { title: "Таро карта „Светът“ – цялата статия", url: "/blog/taro-karta-svetat" },
    en: { title: "The World tarot card – the full article", url: "/en/blog/the-world-tarot-card" },
  },
};
const PENTACLES = {
  bg: { title: "Пентаклите в любовно гадание", url: "/blog/pentaklite-v-lyubovno-gadanie" },
  en: { title: "Pentacles in love readings", url: "/en/blog/pentacles-in-love-readings" },
};
const SECTION = {
  bg: { title: "Всички статии за таро", url: "/blog/categories/taro" },
  en: { title: "All tarot articles", url: "/en/blog/categories/taro" },
};

export function deeperFor(id: string, lang: Lang) {
  if (DEEPER[id]) return DEEPER[id][lang];
  if (id.startsWith("pentacles-")) return PENTACLES[lang];
  return SECTION[lang];
}

/** The data the page script needs, in one language. */
export function deckFor(lang: Lang) {
  return CARDS.map(({ id, ...text }) => {
    const [name, keys, message, advice] = text[lang];
    return { id, name, keys, message, advice, more: deeperFor(id, lang) };
  });
}
