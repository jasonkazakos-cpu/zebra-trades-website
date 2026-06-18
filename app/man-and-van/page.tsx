import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import ValueProps, {
  Wrench, Award, ShieldCheck, FileSignature, MapPin, type ValueItem,
} from "@/components/ValueProps";
import PricingCategoryCard, { type PricingCategory } from "@/components/PricingCategoryCard";
import Gallery, { type GalleryImage } from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Faq, { type FaqItem } from "@/components/Faq";
import CoverageArea from "@/components/CoverageArea";
import CtaBand from "@/components/CtaBand";
import { siteConfig } from "@/data/site";
import { Truck, Package, Home, Trash2, ShoppingBag, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Man & Van Services in Cheshunt & Hertfordshire",
  description:
    "Reliable Man & Van services in Cheshunt and Hertfordshire — house moves, furniture collection, deliveries and house clearances. Free quotes, fixed pricing, fully insured.",
  keywords: [
    "Man and Van Cheshunt",
    "House Clearance Cheshunt",
    "Furniture Collection Hertfordshire",
    "Man with a Van Hertfordshire",
    "House Moves Cheshunt",
  ],
  openGraph: {
    title: "Man & Van Services in Hertfordshire | Zebra Trades",
    description:
      "Reliable and affordable Man & Van services for house moves, furniture collection, deliveries and house clearances across Hertfordshire.",
    url: "https://www.zebratrades.co.uk/man-and-van",
    type: "website",
  },
};

const SERVICE = "Man and Van";
const quoteHref = `/contact?service=${encodeURIComponent(SERVICE)}`;

const trustItems: ValueItem[] = [
  { icon: Wrench, title: `${siteConfig.yearsTrading} Years Trade Experience`, body: "Years of local knowledge and reliable service across Cheshunt and Hertfordshire." },
  { icon: Award, title: `Established ${siteConfig.yearsAsZebra} Years`, body: "A trusted local name for man and van, moves and clearances since we started." },
  { icon: ShieldCheck, title: "Reliable Service", body: "We turn up on time, take care of your belongings and get the job done properly." },
  { icon: FileSignature, title: "Transparent Pricing", body: "Clear guide prices upfront — no hidden charges, no surprises on the day." },
  { icon: MapPin, title: "Local Hertfordshire Business", body: "Based in Cheshunt, covering the surrounding towns every week." },
  { icon: Clock, title: "Flexible Booking Options", body: "Minimum visits, half days and full days available — book what suits your job." },
];

const serviceItems = [
  { icon: Home, title: "Small House Moves", description: "Moving to a new home? We handle small and medium house moves with care, loading, transporting and unloading at your new address." },
  { icon: Home, title: "Flat & Apartment Moves", description: "Experienced with flat and apartment moves including stairs and restricted access buildings." },
  { icon: Package, title: "Furniture Collection", description: "Need something collected and delivered? We collect furniture from stores, sellers and suppliers and bring it straight to your door." },
  { icon: Truck, title: "Furniture Delivery", description: "Local furniture delivery for items purchased online, in store or from private sellers." },
  { icon: ShoppingBag, title: "Facebook Marketplace Collections", description: "Bought something on Facebook Marketplace? We collect and deliver items of any size." },
  { icon: ShoppingBag, title: "IKEA Collections", description: "We collect your IKEA order and deliver it to your home — no need to hire a vehicle or struggle with flat-pack boxes." },
  { icon: Trash2, title: "House Clearances", description: "Full and partial house clearances carried out efficiently and responsibly." },
  { icon: Trash2, title: "Garage Clearances", description: "Clear out years of accumulated items quickly, with responsible disposal." },
  { icon: Trash2, title: "Garden Waste Removal", description: "Garden clearances, green waste and general outdoor debris removed and disposed of." },
  { icon: Package, title: "Single Item Transport", description: "Moving a sofa, wardrobe or large appliance? We handle single-item moves across Hertfordshire." },
  { icon: Truck, title: "Multi-Item Deliveries", description: "Multiple items to collect or deliver in one trip — we plan the most efficient route to save you time and money." },
];

const pricingGuide: PricingCategory = {
  title: "Pricing Guide",
  icon: "Truck",
  items: [
    { name: "Minimum Booking", price: "From £75" },
    { name: "Local Collection & Delivery", price: "From £95" },
    { name: "Half Day Service", price: "From £225" },
    { name: "Full Day Service", price: "From £395" },
    { name: "House Clearance", price: "Quoted" },
    { name: "Large Moves", price: "Quoted" },
  ],
};

const clearanceItems = [
  "Garage Clearance",
  "Shed Clearance",
  "Loft Clearance",
  "Property Clearance",
  "End of Tenancy Clearance",
];

const collectionItems = [
  "IKEA Collection",
  "Facebook Marketplace Collection",
  "eBay Collection",
  "Store Collection",
  "Single Item Delivery",
];

const galleryImages: GalleryImage[] = [
  { src: "", alt: "House Move", caption: "House move — Cheshunt" },
  { src: "", alt: "Furniture Collection", caption: "Furniture collection — Waltham Cross" },
  { src: "", alt: "Sofa Delivery", caption: "Sofa delivery — Hoddesdon" },
  { src: "", alt: "House Clearance", caption: "House clearance — Broxbourne" },
  { src: "", alt: "Garage Clearance", caption: "Garage clearance — Enfield" },
  { src: "", alt: "Multi-Item Delivery", caption: "Multi-item delivery — Cuffley" },
];

const faqs: FaqItem[] = [
  {
    question: "What size van do you use?",
    answer: "We use a large transit-style van suitable for most house moves, furniture collections and clearances. Get in touch for larger loads and we&apos;ll advise on the best approach.",
  },
  {
    question: "Can you help load and unload?",
    answer: "Yes. Loading and unloading is included as standard — we don&apos;t just drive, we help with the full move.",
  },
  {
    question: "Do you move furniture upstairs?",
    answer: "Yes. We&apos;re happy to move furniture to upper floors. If there are tight staircases or restricted access, let us know when you enquire so we can plan accordingly.",
  },
  {
    question: "Do you provide house clearances?",
    answer: "Yes. We carry out full and partial house, garage, shed and loft clearances. These are individually quoted following an assessment of the volume involved.",
  },
  {
    question: "Are you insured?",
    answer: "Yes. We carry public liability insurance on every job for your peace of mind.",
  },
  {
    question: "Do you offer same-day collections?",
    answer: "We aim to be flexible wherever possible — get in touch and we&apos;ll let you know our earliest available slot. Same-day bookings are subject to availability.",
  },
];

export default function ManAndVanPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(circle at 80% 10%, rgba(232,163,61,0.18), transparent 55%)" }}
          aria-hidden="true"
        />
        <Container className="relative py-16 sm:py-20 lg:py-24">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Man & Van Services</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-paper sm:text-5xl lg:text-6xl">
            Man & Van Services in Hertfordshire
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-paper/75 sm:text-lg">
            Reliable and affordable Man & Van services for house moves, furniture
            collection, deliveries and house clearances across Hertfordshire and
            surrounding areas.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={quoteHref} variant="primary">Request a Quote</Button>
            <Button href={siteConfig.phoneHref} variant="ghost-light">
              Call {siteConfig.phoneDisplay}
            </Button>
          </div>
        </Container>
      </section>

      {/* Trust signals */}
      <section className="bg-chalk">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Why Zebra Trades"
            title="Why Choose Zebra Trades?"
            subtitle="A reliable, local man and van service you can count on."
          />
          <div className="mt-10">
            <ValueProps items={trustItems} />
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="What We Do"
            title="Services We Offer"
            subtitle="From a single sofa to a full house move — here is how we can help."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceItems.map((item) => (
              <div key={item.title} className="rounded-sm border border-line bg-paper p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_24px_-12px_rgba(20,20,26,0.2)]">
                <span className="flex size-11 items-center justify-center rounded-sm bg-accent-soft">
                  <item.icon className="size-5 text-accent-dark" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold uppercase tracking-tight text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Pricing */}
      <section className="bg-chalk">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Pricing Guide"
            title="Man & Van Pricing"
            subtitle="Guide prices for common jobs — every job is individually quoted."
          />
          <div className="mt-10">
            <PricingCategoryCard category={pricingGuide} />
          </div>
          <p className="mt-6 rounded-sm border border-line bg-paper px-5 py-4 text-sm text-slate">
            Prices are guide prices only and depend on distance, access, loading
            requirements, stairs, parking and item sizes.
          </p>
        </Container>
      </section>

      {/* House Clearance */}
      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Clearance Services"
                title="House Clearance Services"
                subtitle="From a single garage to a full property — we clear efficiently and dispose of items responsibly."
              />
              <ul className="mt-8 space-y-3">
                {clearanceItems.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-medium text-ink">
                    <span className="flex size-2 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-slate">
                Quotations are provided following an assessment of the volume and
                access involved. Get in touch to arrange a free assessment.
              </p>
              <Link href={quoteHref} className="mt-6 inline-flex items-center gap-2 font-semibold text-accent underline-offset-4 hover:underline text-sm">
                Request a clearance quote <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>

            {/* Furniture Collection */}
            <div>
              <SectionHeading
                eyebrow="Collection Services"
                title="Furniture Collection & Delivery"
                subtitle="We collect from stores, online sellers and private sellers and bring items straight to your door."
              />
              <ul className="mt-8 space-y-3">
                {collectionItems.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-medium text-ink">
                    <span className="flex size-2 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-slate">
                Tell us what needs collecting, where from, and where it needs to go
                — we&apos;ll quote you a fair, fixed price.
              </p>
              <Link href={quoteHref} className="mt-6 inline-flex items-center gap-2 font-semibold text-accent underline-offset-4 hover:underline text-sm">
                Request a collection quote <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Gallery */}
      <section className="bg-chalk">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Recent Jobs"
            title="Man & Van Projects"
            subtitle="A selection of recent jobs across Hertfordshire — real images coming soon."
          />
          <div className="mt-10">
            <Gallery images={galleryImages} />
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="What Customers Say"
            title="Trusted By Customers Locally"
            subtitle="Example reviews — placeholder text to be replaced with real customer feedback."
          />
          <div className="mt-10">
            <Testimonials />
          </div>
        </Container>
      </section>

      <CoverageArea background="chalk" />

      {/* FAQs */}
      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <SectionHeading eyebrow="Good To Know" title="Man & Van FAQs" />
          <div className="mt-10">
            <Faq faqs={faqs} />
          </div>
        </Container>
      </section>

      <CtaBand
        title="Need Help Moving Something?"
        subtitle="Contact Zebra Trades today for a free quotation and reliable Man & Van services."
        buttonLabel="Request a Quote"
        quoteHref={quoteHref}
      />
    </>
  );
}
