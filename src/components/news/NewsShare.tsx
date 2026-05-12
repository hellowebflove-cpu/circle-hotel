"use client";

import { useEffect, useState } from "react";

type Variant = "row" | "column";

const buttons = [
  {
    id: "telegram",
    label: "Telegram",
    href: (url: string, title: string) =>
      `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.24 3.64 11.95c-.88-.25-.89-.86.2-1.3l16.04-6.18c.73-.33 1.43.18 1.15 1.3l-2.73 12.84c-.19.91-.74 1.13-1.5.71l-4.13-3.05-1.99 1.93c-.23.23-.42.42-.85.42z" />
      </svg>
    ),
  },
  {
    id: "facebook",
    label: "Facebook",
    href: (url: string) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M13 21v-8h2.5l.5-3H13V8.2c0-.9.3-1.5 1.6-1.5H16V4.1c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9V10H7.5v3H10v8h3z" />
      </svg>
    ),
  },
  {
    id: "x",
    label: "X",
    href: (url: string, title: string) =>
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M18.244 2H21l-6.49 7.41L22 22h-6.176l-4.83-6.32L5.4 22H2.643l6.93-7.92L2 2h6.328l4.36 5.77L18.244 2zm-2.165 18h1.72L7.99 4H6.155L16.08 20z" />
      </svg>
    ),
  },
];

export default function NewsShare({
  title,
  pathname,
  variant = "row",
}: {
  title: string;
  pathname: string;
  variant?: Variant;
}) {
  const [url, setUrl] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setUrl(`${window.location.origin}${pathname}`);
  }, [pathname]);

  const handleCopy = async () => {
    if (!url) return;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  const wrapClass =
    variant === "row"
      ? "flex flex-wrap items-center gap-2"
      : "flex flex-col gap-2";

  const baseBtn =
    "flex items-center justify-center h-9 w-9 rounded-full border border-black/15 text-black/70 transition-colors hover:border-black hover:text-black";

  return (
    <div className={wrapClass} aria-label="Поділитися">
      {variant === "row" && (
        <span className="mr-1 text-xs uppercase tracking-[0.15em] text-black/45">
          Поділитися
        </span>
      )}
      {buttons.map((b) => (
        <a
          key={b.id}
          href={url ? b.href(url, title) : "#"}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={b.label}
          className={baseBtn}
        >
          {b.icon}
        </a>
      ))}
      <button
        type="button"
        onClick={handleCopy}
        aria-label="Скопіювати посилання"
        className={`${baseBtn} relative cursor-pointer`}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4"
        >
          <path d="M10 14a3.5 3.5 0 005 0l3-3a3.5 3.5 0 00-5-5l-1 1" />
          <path d="M14 10a3.5 3.5 0 00-5 0l-3 3a3.5 3.5 0 005 5l1-1" />
        </svg>
        {copied && (
          <span className="absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-[11px] tracking-[0.48px] text-white">
            Скопійовано
          </span>
        )}
      </button>
    </div>
  );
}
