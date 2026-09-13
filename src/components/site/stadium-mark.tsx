import { cn } from "@/lib/utils";

/**
 * Das Logo: der Sitzplan von oben, als Pixelgrafik.
 * Jede Zelle ist ein Platz, alle sind verkauft – deshalb durchgehend in der
 * Trikotfarbe. Genau einer auf der Westtribüne bleibt andersfarbig, knapp
 * unterhalb der Mittellinie. Das ist meiner.
 */

const COLS = 25;
const ROWS = 25;
const CELL = 4;
const SEAT = 3;

/** Innenraum, auf dem gespielt wird. Da sitzt niemand. */
const PITCH = { x0: 6, x1: 18, y0: 8, y1: 16 };

/** Kantenlänge der ausgesparten Ecken, damit es eine Schüssel wird. */
const CORNER = 4;

/** Westtribüne, zweite Reihe von außen, knapp unter der Mittellinie. */
const MY_SEAT = { x: 2, y: 14 };

function isPitch(x: number, y: number) {
  return x >= PITCH.x0 && x <= PITCH.x1 && y >= PITCH.y0 && y <= PITCH.y1;
}

function isCutCorner(x: number, y: number) {
  const horizontal = x < CORNER || x >= COLS - CORNER;
  const vertical = y < CORNER || y >= ROWS - CORNER;
  return horizontal && vertical;
}

const seats: { x: number; y: number; mine: boolean }[] = [];
for (let y = 0; y < ROWS; y += 1) {
  for (let x = 0; x < COLS; x += 1) {
    if (isPitch(x, y) || isCutCorner(x, y)) continue;
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
