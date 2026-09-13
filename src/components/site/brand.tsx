import Link from "next/link";

import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Platzhalter fürs Branding. Das gestrichelte Feld links ist der Slot
 * fürs spätere Logo, rechts steht der Arbeitstitel.
 */
export function Brand({
  className,
  size = "default",
}: {
  className?: string;
  size?: "default" | "large";
}) {
  const large = size === "large";

  return (
    <Link
      href="/"
      className={cn("group flex items-center gap-3", className)}
      aria-label={`${site.workingTitle} – Startseite`}
    >
      <span
        className={cn(
          "grid shrink-0 place-items-center border-2 border-dashed border-bvb/60 font-display font-bold text-bvb/70 transition-colors group-hover:border-bvb group-hover:text-bvb",
          large ? "size-16 text-2xl" : "size-10 text-base",
        )}
        aria-hidden
      >
        {site.logoMark}
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-mono tracking-[0.25em] text-muted-foreground uppercase",
            large ? "text-[11px]" : "text-[9px]",
          )}
        >
          Logo folgt
        </span>
        <span
          className={cn(
            "font-display font-extrabold tracking-tight text-foreground uppercase",
            large ? "text-3xl sm:text-4xl" : "text-lg",
          )}
        >
          {site.workingTitle}
        </span>
      </span>
    </Link>
  );
}
