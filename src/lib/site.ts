/**
 * Branding-Platzhalter.
 * Der Blog hat noch keinen Namen – alles, was hier steht, ist bewusst
 * an einer Stelle gebündelt, damit Name, Claim und Logo später in
 * einem Rutsch getauscht werden können.
 */
export const site = {
  /** Arbeitstitel, bis der echte Name steht. */
  workingTitle: "NOCH OHNE NAMEN",
  /** Erscheint klein über dem Namen. */
  eyebrow: "Ein Blog über Borussia Dortmund",
  /** Zweizeiler für Kopf- und Fußbereich. */
  claim: "Schwarzgelb, aus dem Bauch heraus. Seit 2023.",
  description:
    "Geschichten über Borussia Dortmund. Erinnerungen, Spielerporträts und Saisonnotizen von 2023 bis heute.",
  /** Platzhalter-Kürzel im Logofeld. */
  logoMark: "??",
  author: {
    name: "Der Autor",
    bio: "Jahrgang 1986, aufgewachsen in Dortmund, seit 1994 im Stadion. Schreibt hier über einen Verein, bei dem er nie die Wahl hatte.",
  },
  nav: [
    { href: "/", label: "Start" },
    { href: "/archiv", label: "Archiv" },
    { href: "/ueber", label: "Über den Blog" },
  ],
} as const;
