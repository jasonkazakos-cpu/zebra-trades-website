import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ValueProps from "@/components/ValueProps";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import { locations } from "@/data/locations";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";
import { MapPin, CheckCircle, ArrowRight, Star } from "lucide-react";

type Props = { params: Promise<{ service: string; location: string }> };

// Build all valid service+location combinations for static export
export function generateStaticParams() {
  const params: { service: string; location: string }[] = [];
  for (const svc of services) {
    const routeSlug = svc.locationSlug ?? svc.slug;
    for (const loc of locations) {
      params.push({ service: routeSlug, location: loc.slug });
    }
  }
  return params;
}

function resolveService(serviceParam: string) {
  return services.find(
    (s) => (s.locationSlug ?? s.slug) === serviceParam
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service: serviceParam, location: locationParam } = await params;
  const svc = resolveService(serviceParam);
  const loc = locations.find((l) => l.slug === locationParam);
  if (!svc || !loc) return {};
  const title = `${svc.title} in ${loc.name} | Zebra Trades`;
  const description = `Professional ${svc.title.toLowerCase()} services in ${loc.name}, ${loc.county}. ${svc.tagline ?? svc.teaser} Free no-obligation quotes from Zebra Trades.`;
  return {
    title,
    description,
    alternates: { canonical: `/${serviceParam}/${locationParam}` },
    openGraph: {
      title,
      description,
      url: `/${serviceParam}/${locationParam}`,
      images: [
        {
          url: loc.featuredImage ?? "/images/og-default.jpg",
          width: 1200,
          height: 630,
          alt: `${svc.title} in ${loc.name} — Zebra Trades`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [loc.featuredImage ?? "/images/og-default.jpg"],
    },
  };
}

export default async function ServiceLocationPage({ params }: Props) {
  const { service: serviceParam, location: locationParam } = await params;

  const svc = resolveService(serviceParam);
  const loc = locations.find((l) => l.slug === locationParam);

  if (!svc || !loc) notFound();

  const quoteHref = `/contact?service=${encodeURIComponent(svc.title)}&area=${encodeURIComponent(loc.name)}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    description: `${svc.title} services in ${loc.name}, ${loc.county}.`,
    telephone: siteConfig.phoneDisplay,
    areaServed: {
      "@type": "City",
      name: loc.name,
      containedInPlace: { "@type": "AdministrativeArea", name: loc.county },
    },
    url: `https://www.zebratrades.co.uk/${serviceParam}/${locationParam}`,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: svc.title,
      itemListElement: (svc.bullets ?? []).map((b) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: b },
      })),
    },
  };

  // Location-specific FAQs for this service
  const faqs = [
    {
      question: `Do you offer ${svc.title.toLowerCase()} services in ${loc.name}?`,
      answer: `Yes — Zebra Trades carries out ${svc.title.toLowerCase()} work in ${loc.name} regularly. ${loc.intro.split(".")[0]}.`,
    },
    {
      question: `How do I get a ${svc.title.toLowerCase()} quote in ${loc.name}?`,
      answer: `Contact us by phone or through our contact form and we'll arrange a free visit to ${loc.name} to assess the work and provide a written, fixed-price quotation.`,
    },
    {
      question: `Is there a call-out charge for ${loc.name}?`,
      answer: `No — all quotations are free. ${loc.postcodeDistricts.length > 0 ? `We cover the ${loc.postcodeDistricts.join(", ")} postcode${loc.postcodeDistricts.length > 1 ? "s" : ""} and surrounding areas.` : ""}`,
    },
    ...loc.faqs.slice(0, 2),
  ];

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      {/* Breadcrumb */}
      <div className="border-b border-line bg-chalk">
        <Container className="py-3">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-slate"
          >
            <Link href="/" className="hover:text-ink">Home</Link>
            <span>/</span>
            <Link href="/areas" className="hover:text-ink">Areas We Cover</Link>
            <span>/</span>
            <Link href={`/areas/${loc.slug}`} className="hover:text-ink">{loc.name}</Link>
            <span>/</span>
            <span className="text-ink">{svc.title}</span>
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
            {loc.name} &middot; {loc.county}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-paper sm:text-5xl lg:text-6xl">
            {svc.title} in {loc.name}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-paper/75 sm:text-lg">
            {svc.tagline ?? svc.teaser}
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

      {/* Intro + quick contact */}
      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <div className="lg:grid lg:grid-cols-[1fr_360px] lg:gap-16">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{svc.title} in {loc.name}</p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase leading-tight tracking-tight text-ink sm:text-4xl">
                {svc.title} Services in {loc.name}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate sm:text-lg">
                {svc.description} Our team works in {loc.name} regularly, covering the {loc.postcodeDistricts.join(", ")} {loc.postcodeDistricts.length === 1 ? "postcode" : "postcodes"} and surrounding areas.
              </p>
              {(svc.bullets ?? []).length > 0 && (
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {(svc.bullets ?? []).map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-slate">
                      <CheckCircle className="mt-0.5 size-4 shrink-0 text-accent" strokeWidth={1.75} aria-hidden="true" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
              <div className="mt-8">
                <Link
                  href={svc.href ?? "/contact"}
                  className="inline-flex items-center gap-1.5 font-mono text-sm font-semibold uppercase tracking-widest text-accent-dark hover:underline"
                >
                  Full {svc.title} service details <ArrowRight className="size-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="rounded-sm border border-line bg-chalk p-6">
                <p className="font-mono text-xs uppercase tracking-widest text-slate">Free Quote</p>
                <p className="mt-3 font-display text-xl font-bold uppercase tracking-tight text-ink">
                  {svc.title} in {loc.name}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  Written, fixed-price quote. No obligation. We cover {loc.postcodeDistricts.join(", ")}.
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
                {loc.nearbyTowns.length > 0 && (
                  <div className="mt-5 border-t border-line pt-4">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-slate">Also covering nearby</p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {loc.nearbyTowns.map((town) => {
                        const nearby = locations.find((l) => l.name === town);
                        return nearby ? (
                          <Link
                            key={town}
                            href={`/${serviceParam}/${nearby.slug}`}
                            className="rounded-full border border-line bg-paper px-3 py-1 text-xs font-medium text-slate transition-colors hover:border-accent hover:text-accent-dark"
                          >
                            {town}
                          </Link>
                        ) : (
                          <span key={town} className="rounded-full border border-line bg-paper px-3 py-1 text-xs font-medium text-slate">{town}</span>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Zebra Trades */}
      <section className="bg-chalk">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Why Choose Us"
            title={`Why Choose Zebra Trades for ${svc.title} in ${loc.name}`}
            subtitle="Professional, reliable and fully insured — from first quote to final handover."
          />
          <div className="mt-10">
            <ValueProps />
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Customer Reviews"
            title={`Trusted by Homeowners in ${loc.name}`}
            subtitle="Genuine reviews from customers across the area."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              { quote: `Really pleased with the ${svc.title.toLowerCase()} work. Professional from start to finish and the price matched the quote exactly.`, name: "Local customer", service: svc.title },
              { quote: "Turned up on time, kept the place tidy and did the job properly. Exactly what you want.", name: "Local customer", service: svc.title },
              { quote: "Good honest pricing, no pressure and a great result. Will definitely use again.", name: "Local customer", service: svc.title },
            ].map((t, i) => (
              <figure key={i} className="flex flex-col rounded-sm border border-line bg-chalk p-6">
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
      <section className="bg-chalk">
        <Container className="py-16 sm:py-20">
          <SectionHeading eyebrow="Good to Know" title={`${svc.title} in ${loc.name} — FAQs`} />
          <div className="mt-10">
            <Faq faqs={faqs} />
          </div>
        </Container>
      </section>

      {/* Internal links */}
      <section className="bg-paper">
        <Container className="py-12 sm:py-16">
          <div className="flex flex-wrap gap-4 text-sm">
            <Link href={svc.href ?? "/services"} className="font-medium text-accent-dark hover:underline">
              &larr; {svc.title} service page
            </Link>
            <Link href={`/areas/${loc.slug}`} className="font-medium text-accent-dark hover:underline">
              All services in {loc.name}
            </Link>
            <Link href="/areas" className="font-medium text-accent-dark hover:underline">
              Areas We Cover
            </Link>
            <Link href="/guides" className="font-medium text-accent-dark hover:underline">
              Guides &amp; Advice
            </Link>
          </div>
        </Container>
      </section>

      <CtaBand
        title={`Ready to Get Started in ${loc.name}?`}
        subtitle={`Free, no-obligation ${svc.title.toLowerCase()} quotes in ${loc.name} — written price agreed before any work begins.`}
        buttonLabel="Get a Free Quote"
        quoteHref={quoteHref}
      />
    </>
  );
}
