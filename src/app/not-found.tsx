import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6">
      <p className="font-mono text-[10px] tracking-[0.3em] text-bvb uppercase">Fehlpass</p>
      <h1 className="mt-3 font-display text-6xl leading-none font-extrabold tracking-tight uppercase sm:text-7xl">
        404
      </h1>
      <p className="mt-5 max-w-md text-muted-foreground">
        Diese Seite gibt es nicht. Passiert den Besten. Zurück zum Anstoß?
      </p>
      <Button
        asChild
        className="mt-8 rounded-none bg-bvb font-display tracking-widest text-bvb-ink uppercase hover:bg-bvb-deep"
      >
        <Link href="/">Zur Startseite</Link>
      </Button>
    </div>
  );
}
