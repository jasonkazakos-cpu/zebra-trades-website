import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import PergolaCalculator from "@/components/PergolaCalculator";
import ValueProps from "@/components/ValueProps";
import CoverageArea from "@/components/CoverageArea";
import CtaBand from "@/components/CtaBand";
import { siteConfig } from "@/data/site";
import { GALLERY_ITEMS, BASE_PRICES } from "@/data/pergola-prices";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Pergolas & Gazebos in Hertfordshire",
  description:
    "Pergola and gazebo installation across Cheshunt and Hertfordshire. Timber, aluminium and louvered roof structures built to a high standard with transparent, fixed pricing.",
  keywords: [
    "Pergola Cheshunt",
    "Pergola Hertfordshire",
    "Pergola Installation",
    "Garden Pergola",
    "Louvered Roof Pergola Hertfordshire",
    "Gazebo Installation Hertfordshire",
  ],
};

const SERVICE = "Pergolas & Gazebos";
const quoteHref = `/contact?service=${encodeURIComponent(SERVICE)}`;

export default function PergolasPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(circle at 80% 0%, rgba(76,154,86,0.18), transparent 55%)" }}
          aria-hidden="true"
        />
        <Container className="relative py-16 sm:py-20 lg:py-24">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Pergolas & Gazebos
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-paper sm:text-5xl lg:text-6xl">
            Pergolas & Gazebos in Hertfordshire
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-paper/75 sm:text-lg">
            Timber, aluminium and louvered roof structures built to a high
            standard — designed to transform your outdoor space, with a fixed
            price agreed before we start.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={quoteHref} variant="primary">
              Request a Site Survey
            </Button>
            <Button href={siteConfig.phoneHref} variant="ghost-light">
              Call {siteConfig.phoneDisplay}
            </Button>
          </div>
        </Container>
      </section>

      {/* Calculator */}
      <section className="bg-chalk">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Price Guide"
            title="Get A Rough Price Estimate"
            subtitle="Select your pergola type, size and extras for an instant guide price — no commitment needed."
          />
          <div className="mt-10">
            <PergolaCalculator />
          </div>
          <div className="mt-8 rounded-sm border border-line bg-paper p-6 sm:flex sm:items-center sm:justify-between sm:gap-8">
            <div>
              <p className="font-display text-lg font-bold uppercase tracking-tight text-ink">
                Want an accurate price?
              </p>
              <p className="mt-1 text-sm text-slate">
                Book a free site survey and we&apos;ll provide a clear fixed quotation for your pergola or gazebo installation.
              </p>
            </div>
            <div className="mt-4 flex shrink-0 flex-col gap-2 sm:mt-0 sm:flex-row">
              <Link
                href={quoteHref}
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-accent px-5 py-2.5 text-sm font-semibold text-paper hover:bg-accent-dark"
              >
                Request a Site Survey
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Button href={siteConfig.phoneHref} variant="ghost-dark">
                Call {siteConfig.phoneDisplay}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Popular Options Gallery */}
      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Popular Options"
            title="Popular Pergola Options"
            subtitle="A selection of the pergola and gazebo structures we install across Hertfordshire."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {GALLERY_ITEMS.map((item) => {
              const small = BASE_PRICES[item.typeKey].small;
              const price = small !== null ? `From £${small.toLocaleString("en-GB")}` : "Quoted";
              return (
                <div key={item.label} className="group flex flex-col rounded-sm border border-line bg-paper overflow-hidden hover:-translate-y-1 hover:shadow-[0_12px_24px_-12px_rgba(20,20,26,0.25)] transition-all duration-200">
                  <div className="flex aspect-[4/3] items-center justify-center bg-chalk">
                    <svg width="48" height="48" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                      <rect width="40" height="40" rx="6" fill="#e1ddd4" />
                      <path d="M8 28l8-8 5 5 5-7 6 10H8z" fill="#4C9A56" opacity="0.5" />
                      <circle cx="27" cy="14" r="4" fill="#4C9A56" opacity="0.4" />
                    </svg>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display text-lg font-bold uppercase tracking-tight text-ink">
                      {item.label}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">
                      {item.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between gap-3">
                      <span className="font-display text-xl font-bold text-accent">{price}</span>
                      <Link
                        href={`${quoteHref}&type=${encodeURIComponent(item.label)}`}
                        className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 px-4 py-2 text-sm font-semibold text-ink hover:border-accent hover:text-accent transition-colors"
                      >
                        Request Quote
                        <ArrowRight className="size-3.5" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Why Zebra Trades */}
      <section className="bg-chalk">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Why Zebra Trades"
            title="Why Choose Zebra Trades?"
            subtitle="The same high standard on every structure we build."
          />
          <div className="mt-10">
            <ValueProps />
          </div>
        </Container>
      </section>

      <CoverageArea background="paper" />

      <CtaBand
        title="Ready To Transform Your Garden?"
        subtitle="Book a free site survey and get a clear fixed quotation for your pergola or gazebo."
        buttonLabel="Request a Site Survey"
        quoteHref={quoteHref}
      />
    </>
  );
}
