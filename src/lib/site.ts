/**
 * Branding an einer Stelle gebündelt: Name, Claim und Beschreibung.
 * Das Logo liegt als Komponente in components/site/stadium-mark.tsx.
 */
export const site = {
  /** Ruhrdeutsch für "es ist ausverkauft". Passt zum Sitzplan im Logo. */
  name: "Ausverkauft is",
  /** Erscheint klein über dem Namen. */
  eyebrow: "Ein Blog über Borussia Dortmund",
  /** Zweizeiler für Kopf- und Fußbereich. */
  claim: "Schwarzgelb, aus dem Bauch heraus. Seit 2023.",
  description:
    "Geschichten über Borussia Dortmund. Erinnerungen, Spielerporträts und Saisonnotizen von 2023 bis heute.",
  author: {
    name: "Der Autor",
    bio: "Jahrgang 1986, aufgewachsen in Dortmund, seit 1994 im Stadion. Schreibt hier über einen Verein, bei dem er nie die Wahl hatte.",
  },
  nav: [
    { href: "/", label: "Start" },
    { href: "/archiv", label: "Archiv" },
    { href: "/ueber", label: "Über den Blog" },
  ],
  /** Steht nur im Fuß, nicht in der Hauptnavigation. */
  legalNav: [
    { href: "/impressum", label: "Impressum" },
    { href: "/datenschutz", label: "Datenschutz" },
  ],
  /** Anbieterkennzeichnung nach § 5 DDG. */
  imprint: {
    name: "Kevin Keibel",
    street: "Plauener Straße 28",
    city: "44139 Dortmund",
    country: "Deutschland",
    /** Pflichtangabe: elektronische Kontaktmöglichkeit, unmittelbar erreichbar. */
    email: "kevin.keibel.kk@gmail.com",
  },
  privacy: {
    /**
     * Der Hoster verarbeitet die Zugriffsdaten und muss in der
     * Datenschutzerklärung stehen. Sobald klar ist, wo die Seite läuft,
     * hier den Namen eintragen – solange bleibt die Stelle als offen markiert.
     */
    hostingProvider: "",
    /** Letzte inhaltliche Änderung der Datenschutzerklärung. */
    updated: "2026-09-13",
  },
} as const;
