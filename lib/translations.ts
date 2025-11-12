const map = {
  en: {
    siteTitle: "Salinas Sports Academy",
    tagline: "Where talent meets opportunity",
    applyNow: "Apply Now",
    viewPrograms: "View Programs",
    programs: "Programs",
    coaches: "Coaches",
    placements: "Placements",
    apply: "Apply",
    contact: "Contact",
    subscribe: "Subscribe",
    admissionsResponse: "Admissions Response",
  },
  es: { /* ... */ },
  fr: { /* ... */ },
  ar: { /* ... */ },
};

type Lang = keyof typeof map;

export default function translations(lang: Lang | string = "en") {
  return map[lang as Lang] || map["en"];
}
