import { cn } from "@/lib/utils";

/**
 * Das Logo: der Sitzplan von oben, als Pixelgrafik.
 *
 * Die Form folgt dem Signal Iduna Park: vier freistehende Tribünen statt
 * einer durchgehenden Schüssel, offene Ecken mit den später eingesetzten
 * Eckblöcken – und eine Südtribüne, die breiter und tiefer ist als alles
 * andere, weil sie das nun mal ist.
 *
 * Jede Zelle ist ein Platz, alle sind verkauft, deshalb durchgehend in der
 * Trikotfarbe. Genau einer auf der Westtribüne, knapp unter der Mittellinie,
 * trägt die Farbe des jeweils anderen Trikots. Das ist meiner.
 */

const COLS = 29;
const ROWS = 29;
const CELL = 4;
const SEAT = 3;

type Block = { x0: number; x1: number; y0: number; y1: number };

/** Innenraum. Da sitzt niemand. */
const PITCH: Block = { x0: 8, x1: 20, y0: 10, y1: 18 };

const STANDS: Block[] = [
  { x0: 7, x1: 21, y0: 2, y1: 7 }, // Nord
  { x0: 6, x1: 22, y0: 21, y1: 27 }, // Süd – breiter und tiefer als der Rest
  { x0: 1, x1: 5, y0: 9, y1: 19 }, // West
  { x0: 23, x1: 27, y0: 9, y1: 19 }, // Ost
  { x0: 3, x1: 6, y0: 6, y1: 8 }, // Ecke Nordwest
  { x0: 22, x1: 25, y0: 6, y1: 8 }, // Ecke Nordost
  { x0: 3, x1: 6, y0: 20, y1: 22 }, // Ecke Südwest
  { x0: 22, x1: 25, y0: 20, y1: 22 }, // Ecke Südost
];

/** Westtribüne, dritte Reihe von außen, knapp unter der Mittellinie. */
const MY_SEAT = { x: 2, y: 16 };

function contains(block: Block, x: number, y: number) {
  return x >= block.x0 && x <= block.x1 && y >= block.y0 && y <= block.y1;
}

const seats: { x: number; y: number; mine: boolean }[] = [];
for (let y = 0; y < ROWS; y += 1) {
  for (let x = 0; x < COLS; x += 1) {
    if (!STANDS.some((stand) => contains(stand, x, y))) continue;
    seats.push({ x, y, mine: x === MY_SEAT.x && y === MY_SEAT.y });
  }
}

export function StadiumMark({
  className,
  title = "Sitzplan von oben, ein Platz auf der Westtribüne ist andersfarbig",
}: {
  className?: string;
  title?: string;
}) {
  const size = COLS * CELL;

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      role="img"
      aria-label={title}
      shapeRendering="crispEdges"
      className={cn("block", className)}
    >
      <rect width={size} height={size} fill="var(--bvb-ink)" />

      {/* Rasen – dunkel, aber nicht ganz schwarz, damit die Fläche lesbar bleibt. */}
      <rect
        x={PITCH.x0 * CELL + 1}
        y={PITCH.y0 * CELL + 1}
        width={(PITCH.x1 - PITCH.x0 + 1) * CELL - 2}
        height={(PITCH.y1 - PITCH.y0 + 1) * CELL - 2}
        fill="color-mix(in oklab, var(--bvb-ink) 88%, var(--foreground))"
      />

      {seats.map(({ x, y, mine }) => (
        <rect
          key={`${x}-${y}`}
          x={x * CELL + (CELL - SEAT) / 2}
          y={y * CELL + (CELL - SEAT) / 2}
          width={SEAT}
          height={SEAT}
          fill={mine ? "var(--seat-mine)" : "var(--bvb)"}
        />
      ))}
    </svg>
  );
}
