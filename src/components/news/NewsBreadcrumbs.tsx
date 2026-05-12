import Link from "next/link";

type Crumb = { label: string; href?: string };

export default function NewsBreadcrumbs({ trail }: { trail: Crumb[] }) {
  return (
    <nav
      aria-label="Хлібні крихти"
      className="flex flex-wrap items-center gap-1.5 text-xs tracking-[0.48px] text-black/55 md:text-sm"
    >
      {trail.map((c, i) => {
        const last = i === trail.length - 1;
        return (
          <span key={`${c.label}-${i}`} className="flex items-center gap-1.5">
            {c.href && !last ? (
              <Link
                href={c.href}
                className="transition-colors hover:text-[#AF5235]"
              >
                {c.label}
              </Link>
            ) : (
              <span className={last ? "text-black/80" : ""}>{c.label}</span>
            )}
            {!last && <span aria-hidden>/</span>}
          </span>
        );
      })}
    </nav>
  );
}
