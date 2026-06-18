import Link from "next/link";
import Button from "@/components/Button";
import SwatchStrip from "@/components/SwatchStrip";
import { siteConfig } from "@/data/site";

export default function CtaBand({
  title,
  subtitle,
  buttonLabel = "Get a Free Quote",
  quoteHref = "/contact",
}: {
  title: string;
  subtitle?: string;
  buttonLabel?: string;
  quoteHref?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 80% 0%, rgba(242,102,11,0.14), transparent 55%)",
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-5 py-16 text-center sm:px-8">
        <h2 className="max-w-2xl font-display text-3xl font-bold uppercase leading-[0.95] tracking-tight text-paper sm:text-4xl">
          {title}
        </h2>
        {subtitle && (
          <p className="max-w-xl text-paper/70">{subtitle}</p>
        )}
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href={quoteHref} variant="primary">
            {buttonLabel}
          </Button>
          <Button href={siteConfig.phoneHref} variant="ghost-light">
            Call Now &middot; {siteConfig.phoneDisplay}
          </Button>
        </div>
        <Link
          href="/contact"
          className="text-sm font-medium text-paper/60 underline-offset-4 hover:text-paper hover:underline"
        >
          Or contact us with a question first
        </Link>
      </div>
      <SwatchStrip />
    </section>
  );
}

