import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import PricingCategoryCard, { type PricingCategory } from "@/components/PricingCategoryCard";
import Faq, { type FaqItem } from "@/components/Faq";
import ValueProps from "@/components/ValueProps";
import Testimonials from "@/components/Testimonials";
import CoverageArea from "@/components/CoverageArea";
import CtaBand from "@/components/CtaBand";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Plumbing Services & Pricing in Cheshunt & Hertfordshire",
  description:
    "Trusted plumber in Cheshunt and Hertfordshire. Taps, toilets, showers, radiators, leak repairs and more — fixed-price visits from £75, free quotes, fully insured.",
  keywords: [
    "Plumber Cheshunt",
    "Plumber Hertfordshire",
    "Emergency Plumber Cheshunt",
    "Tap Repair Cheshunt",
    "Leak Repair Hertfordshire",
  ],
};

const SERVICE = "Plumbing";
const quoteHref = `/contact?service=${encodeURIComponent(SERVICE)}`;


const categories: PricingCategory[] = [
  {
    title: "Taps & Sinks",
    icon: "Droplets",
    items: [
      { name: "Tap Washer Replacement", price: "From £75" },
      { name: "Tap Re-Seating", price: "From £75" },
      { name: "Mixer Tap Replacement", price: "From £95" },
      { name: "Kitchen Tap Installation (Customer Supplied)", price: "From £95" },
      { name: "Bathroom Tap Installation (Customer Supplied)", price: "From £95" },
      { name: "Outside Tap Installation", price: "From £140" },
      { name: "Kitchen Sink Installation", price: "From £175" },
      { name: "Waste Trap Replacement", price: "From £75" },
      { name: "Boiling Water Tap Installation", price: "From £225" },
    ],
  },
  {
    title: "Toilets & WC",
    icon: "Wrench",
    items: [
      { name: "Toilet Seat Replacement", price: "From £75" },
      { name: "Flush Valve Replacement", price: "From £95" },
      { name: "Cistern Repair", price: "From £95" },
      { name: "Fill Valve Replacement", price: "From £95" },
      { name: "Toilet Isolation Valve Replacement", price: "From £85" },
      { name: "Full Toilet Replacement", price: "From £195" },
      { name: "Close Coupled Toilet Installation", price: "From £225" },
      { name: "Wall Hung Toilet Installation", price: "From £325" },
    ],
  },
  {
    title: "Showers & Baths",
    icon: "Droplets",
    items: [
      { name: "Shower Head Replacement", price: "From £75" },
      { name: "Shower Hose Replacement", price: "From £75" },
      { name: "Shower Valve Replacement", price: "From £175" },
      { name: "Electric Shower Installation", price: "From £225" },
      { name: "Shower Tray Installation", price: "From £395" },
      { name: "Shower Screen Installation", price: "From £120" },
      { name: "Bath Installation", price: "From £425" },
      { name: "Bath Tap & Waste Replacement", price: "From £160" },
    ],
  },
  {
    title: "Radiators & Heating",
    icon: "Wrench",
    items: [
      { name: "Radiator Bleeding", price: "From £75" },
      { name: "TRV (Thermostatic Radiator Valve) Replacement", price: "From £95" },
      { name: "Radiator Valve Replacement", price: "From £95" },
      { name: "Radiator Removal & Refit", price: "From £140" },
      { name: "Radiator Replacement (Standard Size)", price: "From £185" },
      { name: "New Radiator Installation", price: "From £225" },
      { name: "Heated Towel Rail Installation", price: "From £185" },
    ],
  },
  {
    title: "Leak Repairs & Pipework",
    icon: "Droplets",
    items: [
      { name: "Minor Leak Repair", price: "From £75" },
      { name: "Copper Pipe Repair", price: "From £95" },
      { name: "Isolation Valve Replacement", price: "From £85" },
      { name: "Stopcock Replacement", price: "From £120" },
      { name: "Pipe Lagging / Insulation", price: "From £75" },
      { name: "Water Supply Pipe Repair", price: "From £145" },
      { name: "Minor Pipe Re-Route", price: "From £175" },
      { name: "Water Softener Connection", price: "From £150" },
    ],
    note: "Larger plumbing projects and multiple installations are quoted individually.",
  },
];

const faqs: FaqItem[] = [
  {
    question: "Do you provide free quotations?",
    answer:
      "Yes. Every job starts with a free, no-obligation quote agreed in writing before any work begins.",
  },
  {
    question: "Do you carry out gas work?",
    answer:
      "Gas work requires a Gas Safe registered engineer. We handle all general plumbing but will refer you to an appropriate specialist for boiler installation, gas pipe work and gas appliance connections.",
  },
  {
    question: "Are materials included in the price?",
    answer:
      "Materials are not included in the visit price unless agreed upfront. We are happy to use parts you have already purchased, or source what is needed and confirm the cost with you first.",
  },
  {
    question: "Do you offer emergency or same-day plumbing?",
    answer:
      "We aim to respond quickly to urgent plumbing issues where possible. Get in touch and we will do our best to accommodate emergency jobs subject to availability.",
  },
  {
    question: "What areas do you cover?",
    answer: `We are based in ${siteConfig.baseTown} and cover ${siteConfig.areas.join(", ")} and surrounding parts of ${siteConfig.county}.`,
  },
  {
    question: "Are you insured?",
    answer:
      "Yes. Every job is covered by public liability insurance for complete peace of mind.",
  },
];

export default function PlumbingPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(circle at 85% 10%, rgba(47,155,214,0.18), transparent 55%)" }}
          aria-hidden="true"
        />
        <Container className="relative py-16 sm:py-20">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Plumbing Services
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-paper sm:text-5xl">
            Plumbing Services In {siteConfig.baseTown} &amp; {siteConfig.county}
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-paper/75 sm:text-lg">
            Taps, toilets, showers, radiators, leak repairs and appliance
            connections — fixed-price visits, free quotes, fully insured.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={quoteHref} variant="primary">Get a Free Quote</Button>
            <Button href={siteConfig.phoneHref} variant="ghost-light">
              Call Now &middot; {siteConfig.phoneDisplay}
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-chalk">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Detailed Pricing"
            title="Plumbing Jobs & Prices"
            subtitle="Guide prices for common plumbing work in the Cheshunt area — get in touch for anything not listed."
          />
          <div className="mt-10 space-y-6">
            {categories.map((cat) => <PricingCategoryCard key={cat.title} category={cat} />)}
          </div>
          <div className="mt-8 rounded-sm border border-line bg-paper p-6">
            <h3 className="font-display text-base font-bold uppercase tracking-tight text-ink">Labour Charges</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate">
              <li><span className="font-semibold text-ink">Minimum Call-Out:</span> £75</li>
              <li><span className="font-semibold text-ink">Additional Labour (where required):</span> £45 per hour</li>
              <li><span className="font-semibold text-ink">Materials charged separately unless otherwise stated.</span></li>
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Why Zebra Trades"
            title="Why Choose Zebra Trades?"
            subtitle="The same professional approach on every plumbing job."
          />
          <div className="mt-10">
            <ValueProps />
          </div>
        </Container>
      </section>

      <section className="bg-chalk">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="What Customers Say"
            title="Trusted By Homeowners Locally"
          />
          <div className="mt-10">
            <Testimonials />
          </div>
        </Container>
      </section>

      <CoverageArea background="paper" serviceSlug="plumbing" />

      <section className="bg-chalk">
        <Container className="py-16 sm:py-20">
          <SectionHeading eyebrow="Good To Know" title="Plumbing FAQs" />
          <div className="mt-10">
            <Faq faqs={faqs} />
          </div>
        </Container>
      </section>

      <CtaBand
        title="Need A Plumber In Cheshunt Or Hertfordshire?"
        subtitle="Get in touch for a free, fixed-price quote on any plumbing job, big or small."
        quoteHref={quoteHref}
      />
    </>
  );
}
