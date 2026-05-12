import Link from "next/link";
import type { NewsBlock } from "@/data/news";
import { slugify } from "@/lib/slugify";
import NewsBodyImage from "./NewsBodyImage";
import NewsBodyGallery from "./NewsBodyGallery";

type InlineNode = string | { type: "b" | "i" | "a"; text: string; href?: string };

// Parse **bold**, *italic*, [text](href) — order: links → bold → italic.
function parseInline(text: string): InlineNode[] {
  const out: InlineNode[] = [];
  const linkRe = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let m: RegExpExecArray | null;
  const segments: { type: "text" | "link"; text: string; href?: string }[] = [];
  while ((m = linkRe.exec(text)) !== null) {
    if (m.index > lastIndex)
      segments.push({ type: "text", text: text.slice(lastIndex, m.index) });
    segments.push({ type: "link", text: m[1], href: m[2] });
    lastIndex = m.index + m[0].length;
  }
  if (lastIndex < text.length)
    segments.push({ type: "text", text: text.slice(lastIndex) });

  for (const seg of segments) {
    if (seg.type === "link") {
      out.push({ type: "a", text: seg.text, href: seg.href });
      continue;
    }
    // bold then italic
    const parts = seg.text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
    for (const p of parts) {
      if (!p) continue;
      if (p.startsWith("**") && p.endsWith("**")) {
        out.push({ type: "b", text: p.slice(2, -2) });
      } else if (p.startsWith("*") && p.endsWith("*")) {
        out.push({ type: "i", text: p.slice(1, -1) });
      } else {
        out.push(p);
      }
    }
  }
  return out;
}

function renderInline(text: string, keyPrefix: string) {
  return parseInline(text).map((node, i) => {
    const key = `${keyPrefix}-${i}`;
    if (typeof node === "string") return <span key={key}>{node}</span>;
    if (node.type === "b") return <strong key={key}>{node.text}</strong>;
    if (node.type === "i")
      return (
        <em key={key} className="font-serif">
          {node.text}
        </em>
      );
    const href = node.href ?? "#";
    const internal = href.startsWith("/");
    return internal ? (
      <Link
        key={key}
        href={href}
        className="text-[#AF5235] underline-offset-4 transition-colors hover:underline"
      >
        {node.text}
      </Link>
    ) : (
      <a
        key={key}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#AF5235] underline-offset-4 transition-colors hover:underline"
      >
        {node.text}
      </a>
    );
  });
}

export default function NewsBody({ blocks }: { blocks: NewsBlock[] }) {
  return (
    <div className="news-body">
      {blocks.map((block, i) => {
        const key = `b-${i}`;
        switch (block.type) {
          case "lead":
            return (
              <p
                key={key}
                className="mb-8 font-sans text-lg leading-[1.55] tracking-[0.48px] text-black md:text-xl"
              >
                {renderInline(block.text, key)}
              </p>
            );
          case "p":
            return (
              <p
                key={key}
                className="mb-5 text-base leading-[1.65] tracking-[0.48px] text-black/80 md:text-lg"
              >
                {renderInline(block.text, key)}
              </p>
            );
          case "h2": {
            const id = block.id ?? slugify(block.text);
            return (
              <h2
                key={key}
                id={id}
                className="mt-12 mb-5 scroll-mt-[100px] font-sans text-[28px] font-normal leading-[1.15] tracking-[0.48px] text-black md:text-[36px]"
              >
                {block.text}
              </h2>
            );
          }
          case "h3": {
            const id = block.id ?? slugify(block.text);
            return (
              <h3
                key={key}
                id={id}
                className="mt-8 mb-4 scroll-mt-[100px] font-sans text-xl font-semibold leading-[1.2] tracking-[0.48px] text-black md:text-2xl"
              >
                {block.text}
              </h3>
            );
          }
          case "ul":
            return (
              <ul key={key} className="mb-6 space-y-3">
                {block.items.map((it, j) => (
                  <li
                    key={`${key}-${j}`}
                    className="relative pl-6 text-base leading-[1.6] tracking-[0.48px] text-black/80 md:text-lg"
                  >
                    <span
                      aria-hidden
                      className="absolute left-0 top-[0.7em] h-[6px] w-[6px] rounded-full bg-[#AF5235]"
                    />
                    {renderInline(it, `${key}-${j}`)}
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={key} className="mb-6 space-y-3 pl-6">
                {block.items.map((it, j) => (
                  <li
                    key={`${key}-${j}`}
                    className="list-decimal text-base leading-[1.6] tracking-[0.48px] text-black/80 md:text-lg"
                  >
                    {renderInline(it, `${key}-${j}`)}
                  </li>
                ))}
              </ol>
            );
          case "quote":
            return (
              <blockquote
                key={key}
                className="my-10 border-l-2 border-[#AF5235] pl-5 text-lg italic leading-[1.55] tracking-[0.48px] text-black/85 md:text-xl"
              >
                <span className="font-serif">«{block.text}»</span>
                {block.author && (
                  <footer className="mt-3 text-sm not-italic tracking-[0.48px] text-black/55">
                    — {block.author}
                  </footer>
                )}
              </blockquote>
            );
          case "pullquote":
            return (
              <p
                key={key}
                className="my-12 font-serif text-[28px] italic leading-[1.2] tracking-[0.48px] text-[#AF5235] md:text-[36px]"
              >
                «{block.text}»
              </p>
            );
          case "image":
            return (
              <NewsBodyImage
                key={key}
                src={block.src}
                alt={block.alt}
                caption={block.caption}
              />
            );
          case "gallery":
            return <NewsBodyGallery key={key} images={block.images} />;
          default:
            return null;
        }
      })}
    </div>
  );
}
