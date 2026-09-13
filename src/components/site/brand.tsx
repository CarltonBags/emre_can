import Link from "next/link";

import { StadiumMark } from "@/components/site/stadium-mark";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Logo plus Schriftzug. Der Name ist noch ein Arbeitstitel und steckt
 * in `site.workingTitle`.
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
      <StadiumMark
        className={cn("shrink-0", large ? "size-16" : "size-10")}
        title="Sitzplan von oben, ein Platz auf der Seitentribüne ist schwarz"
      />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-mono tracking-[0.25em] text-muted-foreground uppercase",
            large ? "text-[11px]" : "text-[9px]",
          )}
        >
          Name folgt
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
