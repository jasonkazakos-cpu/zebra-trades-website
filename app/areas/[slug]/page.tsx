import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ValueProps from "@/components/ValueProps";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import { locations, serviceLinks } from "@/data/locations";
import { siteConfig } from "@/data/site";
import { Star, MapPin, ArrowRight } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return locations.map((loc) => ({ slug: loc.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const loc = locations.find((l) => l.slug === slug);
  if (!loc) return {};
  return {
    title: loc.seoTitle,
    description: loc.seoDescription,
    alternates: { canonical: `/areas/${loc.slug}` },
    openGraph: {
      title: loc.seoTitle,
      description: loc.seoDescription,
      url: `/areas/${loc.slug}`,
      images: [
        {
          url: loc.featuredImage ?? "/images/og-default.webp",
          width: 1200,
          height: 630,
          alt: `Zebra Trades in ${loc.name}, ${loc.county}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: loc.seoTitle,
      description: loc.seoDescription,
      images: [loc.featuredImage ?? "/images/og-default.webp"],
    },
  };
}

export default async function AreaPage({ params }: Props) {
  const { slug } = await params;
  const loc = locations.find((l) => l.slug === slug);
  if (!loc) notFound();

  const quoteHref = `/contact?area=${encodeURIComponent(loc.name)}`;

  const localBusinessLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    description: loc.seoDescription,
    telephone: siteConfig.phoneDisplay,
    areaServed: {
      "@type": "City",
      name: loc.name,
      containedInPlace: { "@type": "AdministrativeArea", name: loc.county },
    },
    url: `https://www.zebratrades.co.uk/areas/${loc.slug}`,
  };

  const faqLd = loc.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: loc.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  } : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }}
      />
      {faqLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      )}

      {/* Breadcrumb */}
      <div className="border-b border-line bg-chalk">
        <Container className="py-3">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-slate">
            <Link href="/" className="hover:text-ink">Home</Link>
            <span>/</span>
            <Link href="/areas" className="hover:text-ink">Areas We Cover</Link>
            <span>/</span>
            <span className="text-ink">{loc.name}</span>
          </nav>
        </Container>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-ink">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{ background: "radial-gradient(circle at 80% 10%, rgba(194,69,46,0.2), transparent 55%)" }}
        />
        <Container className="relative py-16 sm:py-20 lg:py-24">
          <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-accent">
            <MapPin className="size-3.5" aria-hidden="true" />
            {loc.county}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-paper sm:text-5xl lg:text-6xl">
            {loc.heroText}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-paper/75 sm:text-lg">
            Professional home improvement services in {loc.name} — free quotes, fixed prices, fully insured.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={quoteHref}
              className="inline-block rounded-sm bg-accent px-8 py-3.5 text-center font-mono text-sm font-bold uppercase tracking-widest text-paper transition-opacity hover:opacity-90"
            >
              Get a Free Quote
            </Link>
            <a
              href={siteConfig.phoneHref}
              className="inline-block rounded-sm border border-paper/30 px-8 py-3.5 text-center font-mono text-sm font-bold uppercase tracking-widest text-paper transition-colors hover:border-paper"
            >
              Call {siteConfig.phoneDisplay}
            </a>
          </div>
        </Container>
      </section>

      {/* Intro */}
      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <div className="lg:grid lg:grid-cols-[1fr_380px] lg:gap-16">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">About This Area</p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase leading-tight tracking-tight text-ink sm:text-4xl">
                Zebra Trades in {loc.name}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate sm:text-lg">
                {loc.intro}
              </p>
              {loc.nearbyTowns.length > 0 && (
                <div className="mt-8">
                  <p className="font-mono text-xs uppercase tracking-widest text-slate">We also cover nearby</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {loc.nearbyTowns.map((town) => {
                      const nearby = locations.find((l) => l.name === town);
                      return nearby ? (
                        <Link
                          key={town}
                          href={`/areas/${nearby.slug}`}
                          className="rounded-full border border-line bg-chalk px-4 py-1.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent-dark"
                        >
                          {town}
                        </Link>
                      ) : (
                        <span
                          key={town}
                          className="rounded-full border border-line bg-chalk px-4 py-1.5 text-sm font-medium text-ink"
                        >
                          {town}
                        </span>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="rounded-sm border border-line bg-chalk p-6">
                <p className="font-mono text-xs uppercase tracking-widest text-slate">Quick Contact</p>
                <p className="mt-3 font-display text-xl font-bold uppercase tracking-tight text-ink">
                  Get a Free Quote in {loc.name}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  All quotes are written, fixed-price and agreed before we start. No obligation.
                </p>
                <Link
                  href={quoteHref}
                  className="mt-5 block rounded-sm bg-accent px-6 py-3 text-center font-mono text-xs font-bold uppercase tracking-widest text-paper transition-opacity hover:opacity-90"
                >
                  Request a Free Quote
                </Link>
                <a
                  href={siteConfig.phoneHref}
                  className="mt-3 block rounded-sm border border-line px-6 py-3 text-center font-mono text-xs font-bold uppercase tracking-widest text-ink transition-colors hover:bg-ink hover:text-paper"
                >
                  Call {siteConfig.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="bg-chalk">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow={`Services in ${loc.name}`}
            title="What We Do in Your Area"
            subtitle={`Every Zebra Trades service is available in ${loc.name}. Click a service to find out more.`}
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {serviceLinks.map((svc) => (
              <Link
                key={svc.label}
                href={svc.href}
                className="group flex flex-col gap-3 rounded-sm border border-line bg-paper p-5 transition-shadow hover:border-accent hover:shadow-md"
              >
                <h3 className="font-display text-sm font-bold uppercase tracking-tight text-ink group-hover:text-accent-dark">
                  {svc.label}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-slate">{svc.description}</p>
                <span className="flex items-center gap-1 font-mono text-xs font-semibold uppercase tracking-widest text-accent-dark">
                  Find out more <ArrowRight className="size-3" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Zebra Trades */}
      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Why Choose Us"
            title={`Why Homeowners in ${loc.name} Choose Zebra Trades`}
            subtitle="A professional, reliable trade team you can trust from first quote to final handover."
          />
          <div className="mt-10">
            <ValueProps />
          </div>
        </Container>
      </section>

      {/* Testimonials placeholder */}
      <section className="bg-chalk">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Customer Reviews"
            title={`Trusted by Homeowners in ${loc.name}`}
            subtitle="Real reviews from customers across the area — more coming soon."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              { quote: "Straightforward, professional and the price didn't change once the job started. Would book again without hesitation.", name: "Local customer", service: "Kitchen Installation" },
              { quote: "Came round the same week, fixed the problem properly first time and left the place spotless. Exactly what you want from a tradesperson.", name: "Local customer", service: "Plumbing" },
              { quote: "The media wall looks incredible. Couldn't be happier with the finish and the whole process from quote to completion was completely stress-free.", name: "Local customer", service: "Media Walls" },
            ].map((t, i) => (
              <figure key={i} className="flex flex-col rounded-sm border border-line bg-paper p-6">
                <div className="flex gap-0.5 text-accent" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="size-4 fill-current" strokeWidth={0} />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 border-t border-line pt-4 text-sm">
                  <span className="font-display font-bold uppercase tracking-tight text-ink">{t.name}</span>
                  <span className="text-slate"> &middot; {loc.name}</span>
                  <p className="mt-0.5 font-mono text-xs uppercase tracking-wide text-slate">{t.service}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQs */}
      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <SectionHeading eyebrow="Good to Know" title={`FAQs — ${loc.name}`} />
          <div className="mt-10">
            <Faq faqs={loc.faqs} />
          </div>
        </Container>
      </section>

      <CtaBand
        title={`Ready to Get Started in ${loc.name}?`}
        subtitle={`Contact Zebra Trades today for a free, no-obligation quote on any home improvement project in ${loc.name}.`}
        buttonLabel="Get a Free Quote"
        quoteHref={quoteHref}
      />
    </>
  );
}
