import Link from "next/link";

// Official Zebra Trades logo. Natural size 874x330 (≈2.65:1) — width/height
// below preserve this aspect ratio so the mark is never stretched or cropped.
const LOGO_IMAGE_SRC = "/zebra-logo.webp";
const LOGO_WIDTH = 874;
const LOGO_HEIGHT = 330;

export default function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  const textColor = tone === "light" ? "text-paper" : "text-ink";

  const logoImage = (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={LOGO_IMAGE_SRC}
      alt=""
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      className="h-7 w-auto object-contain sm:h-9"
      aria-hidden="true"
    />
  );

  return (
    <Link
      href="/"
      className="group flex items-center gap-3 shrink-0"
      aria-label="Zebra Trades home"
    >
      {tone === "light" ? (
        // Dark backgrounds (header, footer): give the mark a light backing
        // plate so it stays clearly visible against bg-ink.
        <span className="flex shrink-0 items-center rounded-md bg-paper px-2.5 py-1.5 sm:px-3 sm:py-2">
          {logoImage}
        </span>
      ) : (
        // Light backgrounds: the mark already has strong contrast on its own.
        <span className="flex shrink-0 items-center">{logoImage}</span>
      )}
      <span
        className={`font-display font-bold uppercase tracking-tight leading-none text-base sm:text-lg ${textColor}`}
      >
        Zebra Trades
      </span>
    </Link>
  );
}

