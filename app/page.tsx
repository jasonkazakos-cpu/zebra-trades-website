import type { Metadata } from "next";
import Container from "@/components/Container";
import Button from "@/components/Button";
import Docket from "@/components/Docket";
import StatStrip from "@/components/StatStrip";
import ServiceCard from "@/components/ServiceCard";
import ValueProps from "@/components/ValueProps";
import ProcessSteps from "@/components/ProcessSteps";
import SectionHeading from "@/components/SectionHeading";
import CoverageArea from "@/components/CoverageArea";
import Testimonials from "@/components/Testimonials";
import CtaBand from "@/components/CtaBand";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";
import { ArrowRight, Wrench, Award } from "lucide-react";
import FacebookIcon from "@/components/icons/FacebookIcon";

export const metadata: Metadata = {
  title: "Home Improvements in Cheshunt & Hertfordshire",
  description:
    "Zebra Trades provides handyman, kitchen, plumbing and home improvement services across Cheshunt and Hertfordshire, with fixed, written pricing on every job.",
};

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 15% 15%, rgba(242,102,11,0.16), transparent 55%)",
          }}
          aria-hidden="true"
        />
        <Container className="relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              {siteConfig.baseTown}, {siteConfig.county} &amp; Surrounding Areas
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-paper sm:text-5xl lg:text-6xl">
              Black &amp; White Prices.
              <br />
              <span className="inline-flex flex-wrap gap-x-3">
                <span className="underline decoration-4 underline-offset-8" style={{ textDecorationColor: "#2B5FAD" }}>
                  Lots
                </span>
                <span className="underline decoration-4 underline-offset-8" style={{ textDecorationColor: "#0E9594" }}>
                  Of
                </span>
                <span className="underline decoration-4 underline-offset-8" style={{ textDecorationColor: "#F2660B" }}>
                  Colours.
                </span>
              </span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-paper/75 sm:text-lg">
              Honest home improvements from a tradesman with {siteConfig.yearsTrading}{" "}
              years on the tools — handyman jobs, kitchens, plumbing and more,
              every quote agreed in writing before we start.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-paper/20 bg-paper/5 px-4 py-2 font-mono text-xs uppercase tracking-wide text-paper/90">
                <Wrench className="size-3.5 text-accent" aria-hidden="true" />
                {siteConfig.yearsTrading} Years Trade Experience
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-paper/20 bg-paper/5 px-4 py-2 font-mono text-xs uppercase tracking-wide text-paper/90">
                <Award className="size-3.5 text-accent" aria-hidden="true" />
                Established {siteConfig.yearsAsZebra} Years
              </span>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" variant="primary" icon={<ArrowRight className="size-4" aria-hidden="true" />}>
                Get a Free Quote
              </Button>
              <Button href={siteConfig.phoneHref} variant="ghost-light">
                Call Now &middot; {siteConfig.phoneDisplay}
              </Button>
            </div>
          </div>

          <Docket />
        </Container>
      </section>

      <StatStrip />

      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="What We Do"
            title="Our Services"
            subtitle="From a one-off repair to a full kitchen fit-out, here's how we can help around your home."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Button href="/services" variant="ghost-dark">
              View All Services
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-chalk">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Why Zebra Trades"
            title="Built On Trust, Not Guesswork"
            subtitle="The same approach on every job, whatever the size."
          />
          <div className="mt-10">
            <ValueProps />
          </div>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="How It Works"
            title="Simple, From Start To Finish"
            subtitle="No jargon, no hard sell — just a straightforward process."
          />
          <div className="mt-10">
            <ProcessSteps />
          </div>
        </Container>
      </section>

      <section className="bg-chalk">
        <Container className="py-16 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Photo */}
            <div className="flex justify-center lg:justify-start">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/jason-kazakos-profile.jpg"
                alt="Jason Kazakos, owner of Zebra Trades in Cheshunt Hertfordshire"
                loading="lazy"
                className="h-auto w-full max-w-sm rounded-sm object-cover shadow-[0_16px_40px_-16px_rgba(20,20,26,0.35)] sm:max-w-xs lg:max-w-sm"
              />
            </div>

            {/* Content */}
            <div>
              <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-accent">
                <span className="h-px w-8 bg-accent" aria-hidden="true" />
                Meet The Owner
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase leading-[0.95] tracking-tight text-ink sm:text-4xl">
                Meet Jason
              </h2>
              <p className="mt-1 font-display text-lg font-bold uppercase tracking-tight text-slate">
                Local. Reliable. Experienced.
              </p>

              <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate sm:text-base">
                <p>
                  With over {siteConfig.yearsTrading} years of hands-on trade
                  experience, I take pride in delivering reliable workmanship,
                  honest pricing and excellent customer service.
                </p>
                <p>
                  Whether you need a handyman, kitchen installation, pergola,
                  plumbing work or a media wall installation, every project
                  receives the same attention to detail and commitment to
                  quality.
                </p>
                <p>
                  As a local business serving {siteConfig.baseTown},{" "}
                  {siteConfig.county} and the surrounding areas, my goal is
                  simple: to provide dependable home improvement services with
                  clear communication and fair pricing from start to finish.
                </p>
              </div>

              <p className="mt-5 font-display text-lg font-bold uppercase tracking-tight text-accent">
                &ldquo;{siteConfig.motto}&rdquo;
              </p>

              {/* Trust badges */}
              <ul className="mt-6 grid grid-cols-2 gap-2">
                {[
                  "28+ Years Experience",
                  "Local Hertfordshire Business",
                  "Free Quotations",
                  "Honest Pricing",
                  "Fully Insured",
                  "DBS Checked",
                  "Friendly & Reliable Service",
                ].map((badge) => (
                  <li
                    key={badge}
                    className="flex items-center gap-2 rounded-sm border border-line bg-paper px-3 py-2 text-xs font-medium text-ink"
                  >
                    <span className="size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    {badge}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <p className="font-display text-xl font-bold uppercase tracking-tight text-ink">
                  Let&apos;s Discuss Your Project
                </p>
                <p className="mt-1 text-sm text-slate">
                  Contact Jason today for a free quotation and friendly advice.
                </p>
                <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                  <Button href="/contact" variant="primary">Request a Free Quote</Button>
                  <Button href={siteConfig.phoneHref} variant="ghost-dark">
                    Call Now &middot; {siteConfig.phoneDisplay}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="What Customers Say"
            title="Trusted By Homeowners Locally"
            subtitle="Example reviews — a flavour of the feedback we aim for on every job."
          />
          <div className="mt-10">
            <Testimonials />
          </div>
        </Container>
      </section>

      <CoverageArea background="paper" />

      <CtaBand
        title="Ready To Get Started?"
        subtitle="Tell us what needs doing and we'll come back to you with a free, fixed-price quote."
      />

      <section className="bg-chalk">
        <Container className="flex flex-col items-center gap-5 py-16 text-center sm:py-20">
          <span className="flex size-12 items-center justify-center rounded-full bg-accent-soft text-accent-dark">
            <FacebookIcon className="size-6" />
          </span>
          <h2 className="max-w-xl font-display text-3xl font-bold uppercase leading-[0.95] tracking-tight text-ink sm:text-4xl">
            See Our Latest Projects
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-slate sm:text-lg">
            Follow Zebra Trades on Facebook to see our latest installations,
            customer projects, before and after photos and company updates.
          </p>
          <a
            href={siteConfig.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Zebra Trades on Facebook (opens in a new tab)"
            title="Zebra Trades on Facebook"
            className="mt-2 inline-flex items-center gap-2 rounded-sm bg-ink px-6 py-3 text-sm font-semibold text-paper hover:bg-ink-soft transition-colors"
          >
            <FacebookIcon className="size-4" />
            Follow Us On Facebook
          </a>
        </Container>
      </section>
    </>
  );
}

