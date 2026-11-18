// schema.org structured data shared by the pages.
import { SOCIAL } from "./contact";
import { localize, type Lang } from "./i18n";

const SITE = "https://www.astralarra.com";
const abs = (path: string) => {
  const url = new URL(path, SITE);
  if (!url.pathname.endsWith("/") && !/\.[a-z0-9]+$/i.test(url.pathname)) url.pathname += "/";
  return url.toString();
};

export function author(lang: Lang) {
  return {
    "@type": "Person",
    "@id": `${SITE}/#astral-arra`,
    name: "Astral ARRA",
    url: abs(localize("/about", lang)),
    sameAs: SOCIAL.map((s) => s.url),
  };
}

export function website(lang: Lang, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Astral ARRA",
    url: abs(localize("/", lang)),
    inLanguage: lang,
    description,
    publisher: author(lang),
  };
}

export function breadcrumbs(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: abs(item.path),
    })),
  };
}

export function article(opts: {
  lang: Lang;
  path: string;
  title: string;
  description?: string;
  image?: string;
  date?: Date;
  tags?: string[];
  section?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: opts.title,
    description: opts.description,
    image: opts.image ? [abs(opts.image)] : undefined,
    datePublished: opts.date?.toISOString(),
    inLanguage: opts.lang,
    author: author(opts.lang),
    publisher: author(opts.lang),
    mainEntityOfPage: abs(opts.path),
    articleSection: opts.section,
    keywords: opts.tags?.length ? opts.tags.join(", ") : undefined,
  };
}
