export const EMAIL = "astralarra711@gmail.com";

export const mailto = (subject?: string) =>
  `mailto:${EMAIL}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;

export const SOCIAL = [
  { name: "Instagram", url: "https://www.instagram.com/astral_arra/" },
  { name: "Facebook", url: "https://www.facebook.com/profile.php?id=100090757399493" },
  { name: "TikTok", url: "https://www.tiktok.com/@astralarra.com" },
  { name: "YouTube", url: "https://www.youtube.com/@astralarra" },
  { name: "Patreon", url: "https://www.patreon.com/c/AstralARRA" },
];
