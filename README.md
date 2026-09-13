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
