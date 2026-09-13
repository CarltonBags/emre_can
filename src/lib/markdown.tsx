import { Fragment, type ReactNode } from "react";

/**
 * Bewusst kleiner Markdown-Dialekt. Die Texte schreiben wir selbst,
 * deshalb reicht das hier und wir sparen uns eine Abhängigkeit:
 * ## / ###  Überschriften, >  Zitat, -  Liste, ---  Trenner,
 * **fett**, *kursiv*.
 */

function inline(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const pattern = /(\*\*[^*]+\*\*|\*[^*]+\*)/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let i = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > last) nodes.push(text.slice(last, match.index));
    const token = match[0];
    if (token.startsWith("**")) {
      nodes.push(
        <strong key={`${keyPrefix}-b-${i}`} className="font-semibold text-foreground">
          {token.slice(2, -2)}
        </strong>,
      );
    } else {
      nodes.push(
        <em key={`${keyPrefix}-i-${i}`} className="italic">
          {token.slice(1, -1)}
        </em>,
      );
    }
    last = match.index + token.length;
    i += 1;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

export function renderMarkdown(source: string): ReactNode {
  const blocks = source.trim().split(/\n{2,}/);

  return (
    <>
      {blocks.map((raw, index) => {
        const block = raw.trim();
        const key = `b${index}`;

        if (block === "---") {
          return (
            <div key={key} className="my-10 flex items-center gap-3" aria-hidden>
              <span className="h-px flex-1 bg-border" />
              <span className="size-1.5 rotate-45 bg-bvb" />
              <span className="h-px flex-1 bg-border" />
            </div>
          );
        }

        if (block.startsWith("### ")) {
          return (
            <h3 key={key} className="mt-10 mb-3 font-display text-xl font-bold tracking-wide uppercase">
              {inline(block.slice(4), key)}
            </h3>
          );
        }

        if (block.startsWith("## ")) {
          return (
            <h2
              key={key}
              className="mt-12 mb-4 font-display text-2xl leading-tight font-extrabold tracking-wide uppercase sm:text-3xl"
            >
              <span className="mr-2 text-bvb">/</span>
              {inline(block.slice(3), key)}
            </h2>
          );
        }

        if (block.startsWith("> ")) {
          const quote = block
            .split("\n")
            .map((line) => line.replace(/^>\s?/, ""))
            .join(" ");
          return (
            <blockquote
              key={key}
              className="my-8 border-l-4 border-bvb bg-white/[0.03] py-4 pr-4 pl-5 font-display text-xl leading-snug font-semibold tracking-wide text-foreground sm:text-2xl"
            >
              {inline(quote, key)}
            </blockquote>
          );
        }

        if (block.startsWith("- ")) {
          const items = block.split("\n").filter((line) => line.startsWith("- "));
          return (
            <ul key={key} className="my-6 space-y-2 pl-1">
              {items.map((item, itemIndex) => (
                <li key={`${key}-${itemIndex}`} className="flex gap-3 leading-relaxed">
                  <span className="mt-2.5 size-1.5 shrink-0 rotate-45 bg-bvb" aria-hidden />
                  <span>{inline(item.slice(2), `${key}-${itemIndex}`)}</span>
                </li>
              ))}
            </ul>
          );
        }

        return (
          <p key={key} className="my-5 leading-[1.75]">
            {block.split("\n").map((line, lineIndex) => (
              <Fragment key={`${key}-l${lineIndex}`}>
                {lineIndex > 0 ? <br /> : null}
                {inline(line, `${key}-l${lineIndex}`)}
              </Fragment>
            ))}
          </p>
        );
      })}
    </>
  );
}

export function readingMinutes(body: string): number {
  const words = body.trim().split(/\s+/).length;
  return Math.max(2, Math.round(words / 200));
}
