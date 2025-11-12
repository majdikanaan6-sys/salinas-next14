// lib/translations.ts

const map = {
  en: {
    siteTitle: "Salinas Soccer Academy",
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
  es: {
    siteTitle: "Academia de Fútbol Salinas",
    tagline: "Donde el talento se encuentra con la oportunidad",
    applyNow: "Postular Ahora",
    viewPrograms: "Ver Programas",
    programs: "Programas",
    coaches: "Entrenadores",
    placements: "Colocaciones",
    apply: "Aplicar",
    contact: "Contacto",
    subscribe: "Suscribirse",
    admissionsResponse: "Respuesta de Admisiones",
  },
  fr: {
    siteTitle: "Académie de Football Salinas",
    tagline: "Là où le talent rencontre l’opportunité",
    applyNow: "Postuler Maintenant",
    viewPrograms: "Voir les Programmes",
    programs: "Programmes",
    coaches: "Entraîneurs",
    placements: "Placements",
    apply: "Postuler",
    contact: "Contact",
    subscribe: "S’abonner",
    admissionsResponse: "Réponse d’Admission",
  },
  ar: {
    siteTitle: "أكاديمية ساليناس لكرة القدم",
    tagline: "حيث يلتقي الطموح بالفرصة",
    applyNow: "قدّم الآن",
    viewPrograms: "عرض البرامج",
    programs: "البرامج",
    coaches: "المدربون",
    placements: "التوظيفات",
    apply: "قدّم",
    contact: "اتصل بنا",
    subscribe: "اشترك",
    admissionsResponse: "رد القبول",
  },
};

type Lang = keyof typeof map;

export default function translations(lang: string = "en") {
  // return the corresponding map entry or English fallback
  return (map[lang as Lang] || map["en"]);
}
