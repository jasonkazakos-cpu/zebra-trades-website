import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Docket from "@/components/Docket";
import CoverageArea from "@/components/CoverageArea";
import CtaBand from "@/components/CtaBand";
import { FileSignature, MessageSquareText, Banknote } from "lucide-react";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Zebra Trades is built on 28 years of trade experience and 7 years trading under the Zebra Trades name, serving homes across Cheshunt and Hertfordshire.",
};

const pricingPoints = [
  {
    icon: FileSignature,
    title: "What you see is what you pay",
    body: "Every quote is put in writing before work starts, so the price you're given is the price on the invoice.",
  },
  {
    icon: MessageSquareText,
    title: "No verbal estimates",
    body: "We don't work from a rough guess over the phone. You get a proper quote, based on the job in front of us.",
  },
  {
    icon: Banknote,
    title: "Extras only by agreement",
    body: "If anything changes once we're on site, we'll talk it through with you first — never a surprise on the bill.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-ink">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            tone="light"
            eyebrow="About Us"
            title={`${siteConfig.yearsTrading} Years On The Tools. ${siteConfig.yearsAsZebra} Years As Zebra Trades.`}
            subtitle="A straightforward, local home improvement service for Cheshunt and the surrounding area."
          />
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Our Story
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold uppercase leading-[0.95] tracking-tight text-ink sm:text-4xl">
              Decades Of Trade Experience, One Local Team
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate">
              <p>
                Zebra Trades has been carrying out home improvement work for{" "}
                {siteConfig.yearsAsZebra} years, built on the back of{" "}
                {siteConfig.yearsTrading} years&apos; hands-on experience as a
                tradesman. That experience covers everything from quick
                handyman fixes to full kitchen installations, plumbing and
                outdoor builds.
              </p>
              <p>
                The name comes from the way we work: black and white pricing,
                agreed in writing, with no grey areas. Whatever the job, you
                get a clear quote before anything starts and a tidy finish
                once it&apos;s done.
              </p>
              <p>
                We work across {siteConfig.baseTown} and the surrounding
                towns in {siteConfig.county}, taking on everything from
                single repairs to larger home improvement projects.
              </p>
            </div>
          </div>

          <Docket />
        </Container>
      </section>

      <section className="bg-chalk">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Our Promise"
            title="What 'Black & White Pricing' Means"
            align="center"
          />
          <div className="mx-auto mt-10 grid max-w-4xl gap-8 sm:grid-cols-3">
            {pricingPoints.map((point) => (
              <div key={point.title} className="text-center">
                <span className="mx-auto flex size-11 items-center justify-center rounded-sm bg-accent-soft">
                  <point.icon className="size-5 text-accent-dark" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold uppercase tracking-tight text-ink">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{point.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CoverageArea background="paper" />

      <CtaBand
        title="Want To Work With Us?"
        subtitle="Get in touch and we'll come back to you with a free, fixed-price quote."
      />
    </>
  );
}
