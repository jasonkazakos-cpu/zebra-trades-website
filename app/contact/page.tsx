import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { Phone, Mail, Clock } from "lucide-react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import CoverageArea from "@/components/CoverageArea";
import FacebookIcon from "@/components/icons/FacebookIcon";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Zebra Trades for a free, fixed-price quote on home improvement work in Cheshunt and Hertfordshire.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-ink">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            tone="light"
            eyebrow="Get In Touch"
            title="Contact Zebra Trades"
            subtitle="Tell us about the job and we'll come back to you with a free, fixed-price quote."
          />
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <Suspense fallback={null}>
            <ContactForm />
          </Suspense>

          <div className="rounded-md bg-ink p-8 text-paper">
            <h3 className="font-display text-xl font-bold uppercase tracking-tight">
              Contact Details
            </h3>

            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-accent" strokeWidth={1.75} aria-hidden="true" />
                <a href={siteConfig.phoneHref} className="hover:text-accent transition-colors">
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-accent" strokeWidth={1.75} aria-hidden="true" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-accent transition-colors">
                  {siteConfig.email}
                </a>
              </li>
            </ul>

            <div className="mt-8 border-t border-paper/15 pt-6">
              <h4 className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-paper/55">
                <Clock className="size-3.5" strokeWidth={2} aria-hidden="true" />
                Opening Hours
              </h4>
              <dl className="mt-4 space-y-2 text-sm">
                {siteConfig.hours.map((entry) => (
                  <div key={entry.days} className="flex items-center justify-between">
                    <dt className="text-paper/70">{entry.days}</dt>
                    <dd className="font-mono text-paper">{entry.time}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-8 border-t border-paper/15 pt-6">
              <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-paper/55">
                Areas Covered
              </h4>
              <p className="mt-3 text-sm text-paper/80">
                {siteConfig.areas.join(", ")}.
              </p>
            </div>

            <div className="mt-8 border-t border-paper/15 pt-6">
              <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-paper/55">
                Find &amp; Review Zebra Trades
              </h4>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={siteConfig.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Zebra Trades on Facebook (opens in a new tab)"
                  title="Zebra Trades on Facebook"
                  className="inline-flex items-center gap-2 rounded-sm border border-paper/20 px-4 py-2.5 text-sm font-semibold text-paper hover:border-accent hover:text-accent transition-colors"
                >
                  <FacebookIcon className="size-4" />
                  Facebook
                </a>
                <a
                  href={siteConfig.googleReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Leave a Google review for Zebra Trades (opens in a new tab)"
                  className="inline-flex items-center gap-2 rounded-sm border border-paper/20 px-4 py-2.5 text-sm font-semibold text-paper hover:border-accent hover:text-accent transition-colors"
                >
                  ⭐ Leave a Google Review
                </a>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 border-t border-paper/15 pt-6">
              <Link
                href="/privacy-policy"
                className="text-xs font-medium text-paper/55 underline-offset-4 hover:text-paper hover:underline"
              >
                Read our Privacy Policy
              </Link>
              <Link
                href="/terms-and-conditions"
                className="text-xs font-medium text-paper/55 underline-offset-4 hover:text-paper hover:underline"
              >
                Read our Terms &amp; Conditions
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <CoverageArea />
    </>
  );
}
