export const EMAIL = "astralarra711@gmail.com";

export const mailto = (subject?: string) =>
  `mailto:${EMAIL}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;

import { siFacebook, siInstagram, siPatreon, siTiktok, siYoutube } from "simple-icons";

export const SOCIAL = [
  { name: "Instagram", url: "https://www.instagram.com/astral_arra/", icon: siInstagram.path },
  { name: "Facebook", url: "https://www.facebook.com/profile.php?id=100090757399493", icon: siFacebook.path },
  { name: "TikTok", url: "https://www.tiktok.com/@astralarra.com", icon: siTiktok.path },
  { name: "YouTube", url: "https://www.youtube.com/@astralarra", icon: siYoutube.path },
  { name: "Patreon", url: "https://www.patreon.com/c/AstralARRA", icon: siPatreon.path },
];
