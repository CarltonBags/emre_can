# BVB-Blog (Arbeitstitel)

Ein Next.js-Blog mit wohlwollenden Texten über Borussia Dortmund, geschrieben
aus Fansicht. 29 Artikel, datiert von Mai 2023 bis September 2026.

## Stack

- Next.js 16 (App Router, Turbopack) + TypeScript
- Tailwind CSS v4
- shadcn/ui (Button, Badge, Separator, Sheet)
- lucide-react

## Design

Die Farbwelt zitiert das **Heimtrikot 1993/94** (Nike, "die Continentale"):
Neongelbe Fläche, harte schwarze Zickzack-Grafik auf Schulter und Ärmel,
V-Kragen. Das grelle Neongelb von damals ist bewusst durch das heutige
Vereinsgelb `#FDE100` ersetzt.

Die Trikot-Motive liegen als Utilities in `src/app/globals.css`
(`.jersey-chevron`, `.jersey-chevron-light`, `.jersey-weave`) und als
Komponenten in `src/components/site/jersey.tsx` (`ChevronBand`,
`CollarNotch`, `WeaveBackdrop`).

### Zwei Farbwelten

Statt Hell/Dunkel wählt man im Kopf das Trikot. `data-kit` am `<html>`
schaltet zwischen `heim` (Gelb, `#FDE100`) und `auswaerts` (Pink, `#E8398B`,
Lila in `--bvb-deep`). Beide Paletten stehen in `globals.css`, die Auswahl
liegt in `src/lib/kits.ts`, der Schalter in `components/site/kit-toggle.tsx`.
Ein blockierendes Inline-Skript in `layout.tsx` setzt das Attribut vor dem
ersten Paint, sonst blitzt kurz das Heimtrikot auf.

### Logo

`components/site/stadium-mark.tsx` zeichnet den Sitzplan von oben: 29x29-Raster,
363 Plätze. Die Form folgt dem Signal Iduna Park – vier freistehende Tribünen
statt einer Schüssel, offene Ecken mit den nachträglich eingesetzten Eckblöcken,
und eine Südtribüne, die breiter und tiefer ist als alles andere. Die Blöcke
stehen als Rechtecke in `STANDS`. Alle Plätze tragen `--bvb`,
einer auf der Westtribüne `--seat-mine` – und das ist bewusst die Farbe des
jeweils anderen Trikots. `src/app/icon.svg` hat dieselbe Geometrie mit festen
Farben, weil ein Favicon keine CSS-Variablen lesen kann.

## Branding

Der Blog hat noch keinen Namen. Alle Platzhalter stecken in **`src/lib/site.ts`**:

```ts
name          // Blogname im Kopf, Fuß und Titel-Tag
// Das Logo selbst liegt in src/components/site/stadium-mark.tsx
eyebrow       // Zeile über dem Namen
claim         // Zweizeiler im Fuß
```

Freigehaltene Flächen fürs spätere Logo:

- `src/components/site/brand.tsx` – gestricheltes Quadrat in der Kopfleiste
- `src/app/page.tsx` – großes Logofeld im Hero
- `src/components/site/site-footer.tsx` – Logofeld im Fuß

Zum Umbenennen reicht `site.ts`; für das Logo die drei gestrichelten
Container gegen ein `<Image>`/SVG tauschen.

## Inhalte

Ein Artikel = eine Datei unter `src/content/articles/<slug>.ts` mit
Default-Export vom Typ `Article` (`src/lib/types.ts`). Neue Artikel zusätzlich
in `src/content/articles.ts` importieren und in das Array eintragen.

Der Fließtext ist ein kleiner Markdown-Dialekt, gerendert von
`src/lib/markdown.tsx`: `##`, `###`, `>`, `- `, `---`, `**fett**`, `*kursiv*`.

## Entwicklung

```bash
npm run dev     # http://localhost:3000
npm run build
npm run lint
```
