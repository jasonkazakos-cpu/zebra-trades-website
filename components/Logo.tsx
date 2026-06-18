import Link from "next/link";

// Once a final brand logo file is supplied, place it in /public and set its
// path here (e.g. "/logo.svg") — it will replace the placeholder mark below
// without affecting layout, since both render inside the same fixed area.
const LOGO_IMAGE_SRC: string | null = null;

export default function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  const textColor = tone === "light" ? "text-paper" : "text-ink";

  return (
    <Link
      href="/"
      className="group flex items-center gap-3 shrink-0"
      aria-label="Zebra Trades home"
    >
      {LOGO_IMAGE_SRC ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={LOGO_IMAGE_SRC}
          alt=""
          width={38}
          height={38}
          className="size-[38px] shrink-0 rounded-[8px] object-contain"
          aria-hidden="true"
        />
      ) : (
        <svg
          width="38"
          height="38"
          viewBox="0 0 40 40"
          fill="none"
          aria-hidden="true"
          className="shrink-0"
        >
          <rect width="40" height="40" rx="8" fill="#ffffff" />
          <clipPath id="logoClip">
            <rect width="40" height="40" rx="8" />
          </clipPath>
          <g clipPath="url(#logoClip)">
            <rect
              x="-6"
              y="2"
              width="52"
              height="6"
              fill="#14141A"
              transform="rotate(-14 20 20)"
            />
            <rect
              x="-6"
              y="14"
              width="52"
              height="6"
              fill="#14141A"
              transform="rotate(-14 20 20)"
            />
            <rect
              x="-6"
              y="26"
              width="52"
              height="6"
              fill="#F2660B"
              transform="rotate(-14 20 20)"
            />
            <rect
              x="-6"
              y="38"
              width="52"
              height="6"
              fill="#14141A"
              transform="rotate(-14 20 20)"
            />
          </g>
        </svg>
      )}
      <span
        className={`font-display font-bold uppercase tracking-tight text-xl leading-none ${textColor}`}
      >
        Zebra Trades
      </span>
    </Link>
  );
}

