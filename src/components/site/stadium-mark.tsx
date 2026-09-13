import { cn } from "@/lib/utils";

/**
 * Das Logo: der Sitzplan von oben, als Pixelgrafik.
 * Jede Zelle ist ein Platz, alle sind verkauft – deshalb durchgehend gelb.
 * Genau einer auf der Seitentribüne bleibt schwarz. Das ist meiner.
 */

const COLS = 13;
const ROWS = 13;
const CELL = 4;
const SEAT = 3;

/** Innenraum, auf dem gespielt wird. Da sitzt niemand. */
const PITCH = { x0: 3, x1: 9, y0: 4, y1: 8 };

/** Westtribüne, etwas unterhalb der Mittellinie. */
const MY_SEAT = { x: 1, y: 7 };

function isPitch(x: number, y: number) {
  return x >= PITCH.x0 && x <= PITCH.x1 && y >= PITCH.y0 && y <= PITCH.y1;
}

/** Die vier Ecken sind ausgespart, sonst wäre es ein Rechteck und keine Schüssel. */
function isCutCorner(x: number, y: number) {
  const horizontal = x <= 1 || x >= COLS - 2;
  const vertical = y <= 1 || y >= ROWS - 2;
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
  title = "Sitzplan, ein Platz schwarz",
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

      {/* Rasen – dunkel, aber nicht ganz schwarz, damit der eine Platz eindeutig bleibt. */}
      <rect
        x={PITCH.x0 * CELL + 1}
        y={PITCH.y0 * CELL + 1}
        width={(PITCH.x1 - PITCH.x0 + 1) * CELL - 2}
        height={(PITCH.y1 - PITCH.y0 + 1) * CELL - 2}
        fill="#17170f"
      />

      {seats.map(({ x, y, mine }) => (
        <rect
          key={`${x}-${y}`}
          x={x * CELL + (CELL - SEAT) / 2}
          y={y * CELL + (CELL - SEAT) / 2}
          width={SEAT}
          height={SEAT}
          fill={mine ? "var(--bvb-ink)" : "var(--bvb)"}
        />
      ))}
    </svg>
  );
}
