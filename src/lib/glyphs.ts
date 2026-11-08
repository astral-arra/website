// Original light codes and sigils for Astral ARRA, drawn as SVG path data.
// Light codes live in a 24 x 36 box; sigils in a 120 x 120 box with the centre at 60,60.

/** Path for a full circle, so every glyph can be a single stroked path. */
const c = (cx: number, cy: number, r: number) =>
  `M${cx - r} ${cy}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0 ${-2 * r} 0`;

/** Path through points of a polygon (closed). */
const poly = (pts: [number, number][]) => `M${pts.map((p) => p.join(" ")).join("L")}Z`;

const regular = (n: number, r: number, rot = -90, cx = 60, cy = 60): [number, number][] =>
  Array.from({ length: n }, (_, i) => {
    const a = ((rot + (360 / n) * i) * Math.PI) / 180;
    return [+(cx + Math.cos(a) * r).toFixed(2), +(cy + Math.sin(a) * r).toFixed(2)];
  });

const spiral = (cx: number, cy: number, turns: number, maxR: number, steps = 90) => {
  let d = "";
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const a = t * turns * Math.PI * 2;
    const r = t * maxR;
    d += `${i ? "L" : "M"}${(cx + Math.cos(a) * r).toFixed(2)} ${(cy + Math.sin(a) * r).toFixed(2)}`;
  }
  return d;
};

/** Small glyphs in the spirit of light language: strokes, arcs, nodes and dots. */
export const LIGHT_CODES: string[] = [
  // stem with an open cup and a node
  `M12 3V33 M6 9a6 6 0 0 0 12 0 ${c(12, 24, 3)}`,
  // rising spiral with a tail
  `${spiral(12, 15, 2.2, 8)} M12 23V33 ${c(12, 3.5, 1)}`,
  // vesica crossed by a line
  `M12 6C3 14 3 22 12 30C21 22 21 14 12 6Z M4 18H20 ${c(12, 18, 1.4)}`,
  // triangle in a circle with a star above
  `${c(12, 22, 9)} M12 15L18 26H6Z ${c(12, 4, 1.4)} M12 1V7`,
  // crescent and three dots
  `M17 6a10 10 0 1 0 0 20a7.5 7.5 0 1 1 0-20Z ${c(19, 30, 1)} ${c(14, 33, 1)} ${c(9, 30, 1)}`,
  // lightning path with nodes
  `M8 3L16 12L8 21L16 30 ${c(8, 3, 1.5)} ${c(16, 30, 1.5)} ${c(12, 16.5, 1)}`,
  // facing arcs joined by a bridge
  `M5 6C1 14 1 22 5 30 M19 6C23 14 23 22 19 30 M5 18H19 ${c(12, 11, 1.4)} ${c(12, 25, 1.4)}`,
  // vertical infinity with a root
  `M12 18C4 12 4 4 12 4S20 12 12 18S4 28 12 28S20 22 12 18Z M12 28V34`,
  // three crossing strokes around a centre
  `M12 6V30 M3 11L21 25 M21 11L3 25 ${c(12, 18, 3.5)}`,
  // wave between two nodes
  `${c(12, 4, 2)} M12 6C2 12 22 18 12 24 ${c(12, 26, 2)} M7 33H17`,
  // branching rune
  `M12 34V10 M12 18L4 8 M12 18L20 8 M12 10L12 3 ${c(12, 3, 1.4)} ${c(12, 34, 1)}`,
  // nested arches with a seed
  `M3 30V18a9 9 0 0 1 18 0V30 M7 30V19a5 5 0 0 1 10 0V30 ${c(12, 26, 1.4)}`,
];

export type Sigil = { name: string; d: string };

const frame = c(60, 60, 54);

/** Sigils for raising the vibration. */
export const HIGH_SIGILS: Sigil[] = [
  {
    name: "Светлина",
    d: `${frame} ${c(60, 60, 12)} ${c(60, 60, 2)} ${Array.from({ length: 12 }, (_, i) => {
      const a = (i * 30 * Math.PI) / 180;
      const r2 = i % 2 ? 34 : 46;
      return `M${(60 + Math.cos(a) * 18).toFixed(2)} ${(60 + Math.sin(a) * 18).toFixed(2)}L${(60 + Math.cos(a) * r2).toFixed(2)} ${(60 + Math.sin(a) * r2).toFixed(2)}`;
    }).join(" ")}`,
  },
  {
    name: "Възход",
    d: `${frame} ${poly([[60, 22], [94, 86], [26, 86]])} M60 104V12 M48 52L60 40L72 52 M44 68L60 54L76 68 ${c(60, 12, 3)}`,
  },
  {
    name: "Хармония",
    d: `${frame} ${c(47, 60, 24)} ${c(73, 60, 24)} M23 60H97 ${c(60, 39, 2.5)} ${c(60, 81, 2.5)} M60 6V26 M60 94V114`,
  },
  {
    name: "Изобилие",
    d: `${frame} ${spiral(60, 60, 3.25, 40, 160)} ${c(60, 14, 2.5)} ${c(99, 83, 2.5)} ${c(21, 83, 2.5)}`,
  },
  {
    name: "Ясновидство",
    d: `${frame} M18 64C34 40 86 40 102 64C86 88 34 88 18 64Z ${c(60, 64, 11)} ${c(60, 64, 3)} ${poly([[60, 14], [70, 32], [50, 32]])} M60 32V44`,
  },
  {
    name: "Безкрайност",
    d: `${frame} M60 60C72 42 98 42 98 60C98 78 72 78 60 60C48 42 22 42 22 60C22 78 48 78 60 60Z M60 14V44 M60 76V106 ${c(60, 14, 3)} ${c(60, 106, 3)}`,
  },
];

/** Sigils for protection. */
export const PROTECTION_SIGILS: Sigil[] = [
  {
    name: "Щит",
    d: `${poly(regular(5, 52))} ${c(60, 62, 22)} M60 32V96 M44 58H76 ${c(60, 62, 3)}`,
  },
  {
    name: "Огледало",
    d: `${frame} ${poly([[30, 26], [90, 26], [60, 60]])} ${poly([[30, 94], [90, 94], [60, 60]])} M14 60H106 ${c(14, 60, 3)} ${c(106, 60, 3)}`,
  },
  {
    name: "Корен",
    d: `${frame} M60 12V84 M60 84L36 106 M60 84L84 106 M60 84V108 M38 30C38 52 82 52 82 30 M48 66H72 ${c(60, 12, 3)}`,
  },
  {
    name: "Пазител",
    d: `${poly(regular(4, 54))} ${c(60, 60, 32)} M36 60C46 48 74 48 84 60C74 72 46 72 36 60Z ${c(60, 60, 6)}`,
  },
  {
    name: "Печат",
    d: `${poly(regular(6, 52, -90))} M60 60L60 8 M60 60L105.03 86 M60 60L14.97 86 ${c(60, 60, 10)} ${c(60, 60, 2.5)}`,
  },
  {
    name: "Кръг",
    d: `${c(60, 60, 54)} ${c(60, 60, 40)} ${c(60, 60, 18)} M60 2V118 M2 60H118 ${c(60, 20, 4)} ${c(100, 60, 4)} ${c(60, 100, 4)} ${c(20, 60, 4)}`,
  },
];
