import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import ValueProps, {
  Wrench, Award, ShieldCheck, FileSignature, MapPin, Sparkles, type ValueItem,
} from "@/components/ValueProps";
import PackageCard, { type Package } from "@/components/PackageCard";
import ProcessSteps, { type Step } from "@/components/ProcessSteps";
import Gallery, { type GalleryImage } from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Faq, { type FaqItem } from "@/components/Faq";
import CoverageArea from "@/components/CoverageArea";
import CtaBand from "@/components/CtaBand";
import { siteConfig } from "@/data/site";
import {
  Warehouse, Briefcase, Bed, Sofa, Building2, Sun, Dumbbell, Building,
  Snowflake, Wind, Droplets, Activity, Moon, Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Air Conditioning Installation in Cheshunt & Hertfordshire",
  description:
    "Professional air conditioning installation in Cheshunt and Hertfordshire. Garden rooms, bedrooms, living rooms and home offices — energy efficient systems with transparent pricing.",
  keywords: [
    "Air Conditioning Cheshunt",
    "Air Conditioning Installation Hertfordshire",
    "Air Conditioning for Garden Rooms",
    "Home Air Conditioning Cheshunt",
    "Bedroom Air Conditioning Installation",
    "Air Conditioning Near Me",
  ],
  openGraph: {
    title: "Air Conditioning Installation in Hertfordshire | Zebra Trades",
    description:
      "Stay cool in summer and warm in winter with professionally installed air conditioning systems from Zebra Trades. Perfect for homes, bedrooms, garden rooms, offices and commercial spaces.",
    url: "https://www.zebratrades.co.uk/air-conditioning",
    type: "website",
  },
};

const SERVICE = "Air Conditioning";
const quoteHref = `/contact?service=${encodeURIComponent(SERVICE)}`;

const trustItems: ValueItem[] = [
  { icon: Wrench, title: `${siteConfig.yearsTrading} Years Trade Experience`, body: "Decades of trade experience behind every air conditioning installation." },
  { icon: Award, title: `Established ${siteConfig.yearsAsZebra} Years`, body: "A trusted local name across Cheshunt and Hertfordshire since day one." },
  { icon: ShieldCheck, title: "Professional Installation", body: "Systems fitted to a high standard, fully tested before we leave." },
  { icon: Sparkles, title: "Energy Efficient Systems", body: "Modern, efficient units that keep running costs down." },
  { icon: Snowflake, title: "Heating & Cooling Solutions", body: "Cooling in summer, heating in winter — one system, year-round comfort." },
  { icon: FileSignature, title: "Transparent Pricing", body: "A clear, written quotation agreed before any work begins." },
  { icon: MapPin, title: "Local Hertfordshire Business", body: "Based in Cheshunt, working across Hertfordshire every week." },
];

const services = [
  { icon: Warehouse, title: "Garden Rooms" },
  { icon: Briefcase, title: "Home Offices" },
  { icon: Bed, title: "Bedrooms" },
  { icon: Sofa, title: "Living Rooms" },
  { icon: Sun, title: "Conservatories" },
  { icon: Building2, title: "Loft Conversions" },
  { icon: Dumbbell, title: "Home Gyms" },
  { icon: Building, title: "Small Commercial Spaces" },
];

const packages: Package[] = [
  {
    name: "Garden Room Air Conditioning",
    price: "From £2,495 Installed",
    featuresLabel: "Suitable for:",
    features: ["Garden offices", "Garden gyms", "Garden studios"],
    serviceLabel: SERVICE,
  },
  {
    name: "Single Bedroom",
    price: "From £2,295 Installed",
    featuresLabel: "Suitable for:",
    features: ["Bedrooms up to approximately 20m²"],
    serviceLabel: SERVICE,
  },
  {
    name: "Master Bedroom",
    price: "From £2,695 Installed",
    featuresLabel: "Suitable for:",
    features: ["Larger bedrooms", "Loft conversions"],
    serviceLabel: SERVICE,
  },
  {
    name: "Living Room",
    price: "From £2,995 Installed",
    featuresLabel: "Suitable for:",
    features: ["Family living spaces", "Open-plan areas"],
    serviceLabel: SERVICE,
  },
  {
    name: "Two Bedroom Package",
    price: "From £4,495 Installed",
    featuresLabel: "Includes:",
    features: ["Two internal units", "One external condenser"],
    serviceLabel: SERVICE,
  },
  {
    name: "Three Bedroom Package",
    price: "From £5,995 Installed",
    featuresLabel: "Includes:",
    features: ["Three internal units", "One external condenser"],
    serviceLabel: SERVICE,
  },
  {
    name: "Whole Home Multi-Split Systems",
    price: "From £7,995",
    bestFor: "Survey Required",
    serviceLabel: SERVICE,
  },
];

const benefits = [
  { icon: Snowflake, title: "Cooling in Summer" },
  { icon: Wind, title: "Heating in Winter" },
  { icon: Droplets, title: "Lower Humidity" },
  { icon: Moon, title: "Better Sleep" },
  { icon: Activity, title: "Improved Air Quality" },
  { icon: Zap, title: "Energy Efficient Heating" },
  { icon: Briefcase, title: "Ideal for Home Working" },
];

const brands = ["Daikin", "Mitsubishi Electric", "Fujitsu", "Panasonic", "Toshiba"];

const processSteps: Step[] = [
  { number: "01", title: "Free Survey", body: "We visit to assess your space and recommend the right system for your needs." },
  { number: "02", title: "Recommendation", body: "We advise on unit size, position and the best system for your room." },
  { number: "03", title: "Fixed Quotation", body: "A clear, written quotation covering the full installation." },
  { number: "04", title: "Installation", body: "Your system is fitted to a high standard with minimal disruption." },
  { number: "05", title: "Testing & Demonstration", body: "We test the system fully and show you how to get the best from it." },
];

const galleryImages: GalleryImage[] = [
  { src: "", alt: "Garden Room Air Conditioning", caption: "Garden room air conditioning — Cheshunt" },
  { src: "", alt: "Bedroom Installation", caption: "Bedroom installation — Waltham Cross" },
  { src: "", alt: "Living Room Installation", caption: "Living room installation — Hoddesdon" },
  { src: "", alt: "Multi-Split System", caption: "Multi-split system — Broxbourne" },
  { src: "", alt: "Home Office Cooling", caption: "Home office cooling — Enfield" },
  { src: "", alt: "External Condenser Installation", caption: "External condenser installation — Cuffley" },
];

const faqs: FaqItem[] = [
  {
    question: "Can air conditioning heat a room?",
    answer:
      "Yes. Modern air conditioning systems are reverse-cycle, meaning they provide both cooling in summer and efficient heating in winter.",
  },
  {
    question: "How much does it cost to run?",
    answer:
      "Running costs depend on usage and the system installed, but modern units are designed to be energy efficient. We can advise on expected running costs as part of your survey.",
  },
  {
    question: "Do I need planning permission?",
    answer:
      "Most domestic air conditioning installations fall under permitted development, but this can depend on your property. We'll advise on this during your free survey.",
  },
  {
    question: "How long does installation take?",
    answer:
      "A single room system can typically be installed in a day. Larger multi-room systems may take longer — we'll confirm timescales as part of your fixed quotation.",
  },
  {
    question: "Which brand is best?",
    answer:
      "We install trusted brands including Daikin, Mitsubishi Electric, Fujitsu, Panasonic and Toshiba. We'll recommend the best option for your space and budget.",
  },
  {
    question: "Do you provide free surveys?",
    answer:
      "Yes. We offer a free survey and quotation with no obligation to go ahead.",
  },
  {
    question: "Are systems energy efficient?",
    answer:
      "Yes. We install modern, energy efficient systems designed to keep running costs down while providing effective heating and cooling.",
  },
];

export default function AirConditioningPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(circle at 80% 10%, rgba(63,175,196,0.2), transparent 55%)" }}
          aria-hidden="true"
        />
        <Container className="relative py-16 sm:py-20 lg:py-24">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Air Conditioning</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-paper sm:text-5xl lg:text-6xl">
            Air Conditioning Installation in Hertfordshire
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-paper/75 sm:text-lg">
            Stay cool in summer and warm in winter with professionally
            installed air conditioning systems from Zebra Trades. Perfect for
            homes, bedrooms, garden rooms, offices and commercial spaces.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={quoteHref} variant="primary">Request a Free Survey</Button>
            <Button href={quoteHref} variant="ghost-light">Request a Quote</Button>
            <Button href={siteConfig.phoneHref} variant="ghost-light">
              Call {siteConfig.phoneDisplay}
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-chalk">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Why Zebra Trades"
            title="Why Choose Zebra Trades?"
            subtitle="A trusted local air conditioning installer, from survey to handover."
          />
          <div className="mt-10">
            <ValueProps items={trustItems} />
          </div>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Where We Install"
            title="Air Conditioning Services"
            subtitle="Air conditioning solutions for almost any space in your home or workplace."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((item) => (
              <div key={item.title} className="flex flex-col items-center gap-3 rounded-sm border border-line bg-paper p-5 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_24px_-12px_rgba(20,20,26,0.2)]">
                <span className="flex size-11 items-center justify-center rounded-sm bg-accent-soft">
                  <item.icon className="size-5 text-accent-dark" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <h3 className="font-display text-sm font-bold uppercase tracking-tight text-ink">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-chalk">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Guide Prices"
            title="Air Conditioning Price Guide"
            subtitle="A starting point for budgeting — your fixed quote will reflect your exact setup."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {packages.map((pkg) => <PackageCard key={pkg.name} pkg={pkg} />)}
          </div>
          <p className="mt-8 rounded-sm border border-line bg-paper px-5 py-4 text-sm text-slate">
            Prices shown are guide prices only and are based on standard
            installations. Final quotations depend on equipment selected,
            cable runs, access, electrical requirements and installation
            complexity.
          </p>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Why It's Worth It"
            title="Benefits of Air Conditioning"
            subtitle="More than just summer comfort — air conditioning works year-round."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item) => (
              <div key={item.title} className="flex items-center gap-3 rounded-sm border border-line bg-paper px-5 py-4">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-sm bg-accent-soft">
                  <item.icon className="size-4 text-accent-dark" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <span className="text-sm font-medium text-ink">{item.title}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-chalk">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Trusted Manufacturers"
            title="Popular Brands"
            subtitle="We install systems from the leading names in air conditioning."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {brands.map((brand) => (
              <span key={brand} className="rounded-full border border-line bg-paper px-4 py-2 font-mono text-sm text-ink">
                {brand}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="How It Works"
            title="Our Installation Process"
            subtitle="A clear, straightforward process from first survey to final demonstration."
          />
          <div className="mt-10">
            <ProcessSteps steps={processSteps} />
          </div>
        </Container>
      </section>

      <section className="bg-chalk">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Project Gallery"
            title="Air Conditioning Projects"
            subtitle="A selection of installations across Hertfordshire — real images coming soon."
          />
          <div className="mt-10">
            <Gallery images={galleryImages} />
          </div>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="What Customers Say"
            title="Trusted By Homeowners Locally"
            subtitle="Example reviews — placeholder text to be replaced with real customer feedback."
          />
          <div className="mt-10">
            <Testimonials />
          </div>
        </Container>
      </section>

      <CoverageArea background="chalk" />

      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <SectionHeading eyebrow="Good To Know" title="Air Conditioning FAQs" />
          <div className="mt-10">
            <Faq faqs={faqs} />
          </div>
        </Container>
      </section>

      <CtaBand
        title="Ready To Stay Cool This Summer?"
        subtitle="Contact Zebra Trades today to arrange a free survey and discover the benefits of modern air conditioning."
        buttonLabel="Request a Free Survey"
        quoteHref={quoteHref}
      />
    </>
  );
}
