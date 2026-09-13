/**
 * Die beiden Farbwelten der Saison 1993/94. Der Wert landet als
 * data-kit am <html> und schaltet die Tokens in globals.css um.
 */
export const KITS = [
  {
    id: "heim",
    label: "Heim",
    year: "93/94",
    description: "Heimtrikot 1993/94 – Gelb auf Schwarz",
    swatch: "#fde100",
  },
  {
    id: "auswaerts",
    label: "Auswärts",
    year: "93/94",
    description: "Auswärtstrikot 1993/94 – Pink auf Schwarz",
    swatch: "#e8398b",
  },
] as const;

export type KitId = (typeof KITS)[number]["id"];

export const DEFAULT_KIT: KitId = "heim";
export const KIT_STORAGE_KEY = "bvb-kit";
