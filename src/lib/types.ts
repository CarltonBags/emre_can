export type ArticleCategory =
  | "Herzensangelegenheit"
  | "Legenden"
  | "Kader"
  | "Spielbericht"
  | "Transfermarkt"
  | "Saison"
  | "Verein";

export type Article = {
  /** URL-Segment unter /artikel/ */
  slug: string;
  /** Kleine Dachzeile über der Überschrift */
  kicker: string;
  title: string;
  /** Untertitel / Dachzeile unter dem Titel */
  subtitle: string;
  /** ISO-Datum, an dem der Text erschienen ist */
  date: string;
  category: ArticleCategory;
  tags: string[];
  /** Anreißer für Karten und Meta-Tags */
  lede: string;
  /** Markdown-light: ##, ###, >, -, ---, **fett**, *kursiv* */
  body: string;
  /** Wird auf der Startseite groß ausgespielt */
  featured?: boolean;
  /**
   * Steht unabhängig vom Datum als Aufmacher oben auf der Startseite.
   * Genau ein Artikel sollte das gesetzt haben.
   */
  pinned?: boolean;
};
