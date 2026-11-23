import type { Lang } from "../lib/i18n";
import { MAJORS } from "./tarot-majors";
import { CUPS } from "./tarot-cups";
import { PENTACLES as PENTACLE_CARDS } from "./tarot-pentacles";
import { SWORDS } from "./tarot-swords";
import { WANDS } from "./tarot-wands";

export type { CardText, CardEntry } from "./tarot-types";

export const CARDS = [...MAJORS, ...CUPS, ...PENTACLE_CARDS, ...SWORDS, ...WANDS];

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
  return CARDS.map((card) => ({ id: card.id, ...card[lang], more: deeperFor(card.id, lang) }));
}
