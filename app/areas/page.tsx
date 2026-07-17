import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";
import { locations } from "@/data/locations";
import { siteConfig } from "@/data/site";
import { MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Areas We Cover | Zebra Trades Hertfordshire",
  description:
    "Zebra Trades provides handyman, kitchen installation, media walls, plumbing, garden rooms and more across Hertfordshire and surrounding areas. Find your local area.",
};

export default function AreasPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{ background: "radial-gradient(circle at 75% 15%, rgba(194,69,46,0.18), transparent 55%)" }}
        />
        <Container className="relative py-16 sm:py-20 lg:py-24">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Where We Work</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-paper sm:text-5xl lg:text-6xl">
            Areas We Cover Across Hertfordshire
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-paper/75 sm:text-lg">
            Based in {siteConfig.baseTown}, Zebra Trades carries out home improvement work
            throughout {siteConfig.county} and into neighbouring Essex and Middlesex. Select
            your town below to find out more.
          </p>
        </Container>
      </section>

      <section className="bg-chalk">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Your Area"
            title="Find Your Local Area"
            subtitle={`We cover ${locations.length} towns and villages across Hertfordshire, Essex and Middlesex — with more added regularly.`}
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/areas/${loc.slug}`}
                className="group flex flex-col gap-3 rounded-sm border border-line bg-paper p-5 transition-shadow hover:shadow-md hover:border-accent"
              >
                <span className="flex size-9 items-center justify-center rounded-sm bg-accent-soft">
                  <MapPin className="size-4 text-accent-dark" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <div>
                  <h2 className="font-display text-base font-bold uppercase tracking-tight text-ink group-hover:text-accent-dark">
                    {loc.name}
                  </h2>
                  <p className="mt-0.5 font-mono text-[10px] uppercase tracking-widest text-slate">
                    {loc.county}
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-slate line-clamp-2">
                  {loc.intro.split(".")[0]}.
                </p>
                <span className="mt-auto font-mono text-xs font-semibold uppercase tracking-widest text-accent-dark">
                  View area &rarr;
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Not Listed?"
            title="Don't See Your Town?"
            subtitle="We regularly take on work in towns not listed here. If you're in the Hertfordshire area or nearby, get in touch and we'll let you know if we can help."
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-block rounded-sm bg-accent px-8 py-3.5 text-center font-mono text-sm font-bold uppercase tracking-widest text-paper transition-opacity hover:opacity-90"
            >
              Get in Touch
            </Link>
            <a
              href={siteConfig.phoneHref}
              className="inline-block rounded-sm border border-ink px-8 py-3.5 text-center font-mono text-sm font-bold uppercase tracking-widest text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              Call {siteConfig.phoneDisplay}
            </a>
          </div>
        </Container>
      </section>

      <CtaBand
        title="Ready to Get a Job Quoted?"
        subtitle="Free quotes, fixed prices, fully insured — serving Hertfordshire and surrounding areas."
      />
    </>
  );
}
