import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import ValueProps, {
  Wrench, Award, ShieldCheck, FileSignature, MapPin, type ValueItem,
} from "@/components/ValueProps";
import PackageCard, { type Package } from "@/components/PackageCard";
import GardenRoomCalculator from "@/components/GardenRoomCalculator";
import ProcessSteps, { type Step } from "@/components/ProcessSteps";
import Gallery, { type GalleryImage } from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Faq, { type FaqItem } from "@/components/Faq";
import CoverageArea from "@/components/CoverageArea";
import CtaBand from "@/components/CtaBand";
import { siteConfig } from "@/data/site";
import {
  Briefcase, Dumbbell, Tv, Palette, Music, Bed, HeartHandshake, Sparkles, Wind, Snowflake, CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Garden Rooms in Cheshunt & Hertfordshire",
  description:
    "Premium garden room design and installation in Cheshunt and Hertfordshire. Home offices, gyms, studios and entertainment spaces built to a high specification with transparent pricing.",
  keywords: [
    "Garden Rooms Cheshunt",
    "Garden Offices Hertfordshire",
    "Garden Room Installation Hertfordshire",
    "Garden Gyms Cheshunt",
    "Luxury Garden Rooms Hertfordshire",
    "Garden Studios Hertfordshire",
  ],
  openGraph: {
    title: "Garden Rooms in Hertfordshire | Zebra Trades",
    description:
      "Create beautiful extra living space without extending your home. Zebra Trades designs and installs premium garden rooms for home offices, gyms, studios, entertainment spaces and more.",
    url: "https://www.zebratrades.co.uk/garden-rooms",
    type: "website",
  },
};

const SERVICE = "Garden Rooms";
const quoteHref = `/contact?service=${encodeURIComponent(SERVICE)}`;

const trustItems: ValueItem[] = [
  { icon: Wrench, title: `${siteConfig.yearsTrading} Years Trade Experience`, body: "Decades of building experience behind every garden room we install." },
  { icon: Award, title: `Established ${siteConfig.yearsAsZebra} Years`, body: "A trusted local name across Cheshunt and Hertfordshire since day one." },
  { icon: ShieldCheck, title: "Professional Installation", body: "Built to a high standard from groundworks through to final handover." },
  { icon: Sparkles, title: "High Quality Materials", body: "Durable, well-insulated structures designed to perform all year round." },
  { icon: Snowflake, title: "Fully Insulated Construction", body: "Built to stay comfortable in every season, whatever the British weather." },
  { icon: FileSignature, title: "Transparent Pricing", body: "A clear, written quotation agreed before any work begins — no surprises." },
  { icon: MapPin, title: "Local Hertfordshire Business", body: "Based in Cheshunt, working across Hertfordshire every week." },
];

const garderRoomUses = [
  { icon: Briefcase, title: "Home Office" },
  { icon: Dumbbell, title: "Garden Gym" },
  { icon: Tv, title: "Entertainment Room" },
  { icon: Palette, title: "Hobby Room" },
  { icon: Palette, title: "Art Studio" },
  { icon: Music, title: "Music Studio" },
  { icon: Bed, title: "Teenage Den" },
  { icon: HeartHandshake, title: "Therapy Room" },
  { icon: Sparkles, title: "Beauty Room" },
  { icon: Bed, title: "Guest Accommodation" },
];

const packages: Package[] = [
  {
    name: "Home Office Pod",
    price: "From £19,995",
    size: "3m x 3m",
    featuresLabel: "Ideal for:",
    features: ["Home office", "Study", "Hobby room"],
    serviceLabel: SERVICE,
  },
  {
    name: "Garden Studio",
    price: "From £29,995",
    size: "4m x 3m to 5m x 3m",
    featuresLabel: "Ideal for:",
    features: ["Home office", "Gym", "Entertainment room"],
    serviceLabel: SERVICE,
  },
  {
    name: "Large Garden Room",
    price: "From £39,995",
    size: "6m x 3m to 7m x 4m",
    featuresLabel: "Ideal for:",
    features: ["Family room", "Business use", "Multi-purpose space"],
    serviceLabel: SERVICE,
  },
  {
    name: "Premium Garden Room",
    price: "From £49,995",
    featuresLabel: "Ideal for:",
    features: [
      "Bespoke projects",
      "Luxury finishes",
      "High-specification builds",
      "Commercial use",
      "Entertainment spaces",
    ],
    serviceLabel: SERVICE,
  },
];

const included = [
  "Structural Framework",
  "Premium Insulation",
  "Internal Wall Finishes",
  "Double Glazed Doors & Windows",
  "Electrical Installation",
  "Internal Lighting",
  "Flooring",
  "Decoration Options",
];

const extras = [
  { icon: Snowflake, title: "Air Conditioning" },
  { icon: Wind, title: "Electric Heating" },
  { icon: Sparkles, title: "Composite Cladding" },
  { icon: Sparkles, title: "Premium Flooring" },
  { icon: Wrench, title: "Additional Electrical Points" },
  { icon: Wrench, title: "Internet/Data Cabling" },
  { icon: Sparkles, title: "Built-In Storage" },
  { icon: Sparkles, title: "Outdoor Lighting" },
  { icon: Wrench, title: "Smart Home Controls" },
];

const processSteps: Step[] = [
  { number: "01", title: "Initial Consultation", body: "We talk through your ideas, intended use and budget — no obligation." },
  { number: "02", title: "Site Survey", body: "A visit to measure the space, assess access and check ground conditions." },
  { number: "03", title: "Design Discussion", body: "We work through size, layout and specification options together." },
  { number: "04", title: "Fixed Quotation", body: "A clear, written quotation covering the full project." },
  { number: "05", title: "Groundworks", body: "Foundations prepared to suit your garden room and site conditions." },
  { number: "06", title: "Construction", body: "Your garden room is built to specification, with regular updates along the way." },
  { number: "07", title: "Electrical Installation", body: "Power, lighting and any additional points connected and tested." },
  { number: "08", title: "Final Handover", body: "A full walkthrough with you, ready to enjoy your new space." },
];

const galleryImages: GalleryImage[] = [
  { src: "", alt: "Modern Garden Office", caption: "Modern garden office — Cheshunt" },
  { src: "", alt: "Garden Gym", caption: "Garden gym — Waltham Cross" },
  { src: "", alt: "Luxury Garden Studio", caption: "Luxury garden studio — Hoddesdon" },
  { src: "", alt: "Contemporary Garden Room", caption: "Contemporary garden room — Broxbourne" },
  { src: "", alt: "Entertainment Space", caption: "Entertainment space — Enfield" },
  { src: "", alt: "Multi-Purpose Garden Building", caption: "Multi-purpose garden building — Cuffley" },
];

const faqs: FaqItem[] = [
  {
    question: "Do I need planning permission?",
    answer:
      "Most garden rooms fall under permitted development rules, but this depends on size, position and your property. We'll advise on this as part of your site survey.",
  },
  {
    question: "How long does installation take?",
    answer:
      "Timescales depend on size and specification — we'll give you a clear schedule as part of your fixed quotation.",
  },
  {
    question: "Are garden rooms insulated?",
    answer:
      "Yes. All our garden rooms are fully insulated as standard, making them comfortable to use throughout the year.",
  },
  {
    question: "Can I use a garden room all year round?",
    answer:
      "Yes. With proper insulation and heating options available, garden rooms can be used comfortably in every season.",
  },
  {
    question: "Can electricity and internet be installed?",
    answer:
      "Yes. Electrical installation is included as standard, and internet/data cabling can be added as an optional extra.",
  },
  {
    question: "Can air conditioning be added?",
    answer:
      "Yes. Air conditioning is available as an optional extra, ideal for keeping your garden room comfortable during warmer months.",
  },
  {
    question: "Do you provide free quotations?",
    answer:
      "Yes. We offer a free site survey and quotation with no obligation to go ahead.",
  },
];

export default function GardenRoomsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(circle at 80% 10%, rgba(176,98,60,0.2), transparent 55%)" }}
          aria-hidden="true"
        />
        <Container className="relative py-16 sm:py-20 lg:py-24">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Garden Rooms</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-paper sm:text-5xl lg:text-6xl">
            Garden Rooms in Hertfordshire
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-paper/75 sm:text-lg">
            Create beautiful extra living space without extending your home.
            Zebra Trades designs and installs premium garden rooms for home
            offices, gyms, studios, entertainment spaces and more.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={quoteHref} variant="primary">Request a Free Site Survey</Button>
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
            subtitle="A premium garden room installer you can trust from first survey to final handover."
          />
          <div className="mt-10">
            <ValueProps items={trustItems} />
          </div>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Endless Possibilities"
            title="Popular Garden Room Uses"
            subtitle="A garden room can become almost any space you need."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {garderRoomUses.map((item) => (
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
            title="Garden Room Price Guide"
            subtitle="A starting point for budgeting — your fixed quote will reflect your exact specification."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {packages.map((pkg) => <PackageCard key={pkg.name} pkg={pkg} />)}
          </div>
          <div className="mt-8 rounded-sm border border-line bg-paper px-5 py-5">
            <p className="text-sm font-medium text-ink">
              Prices shown are guide prices only and every garden room is
              individually quoted. Final pricing depends on:
            </p>
            <ul className="mt-3 grid gap-x-8 gap-y-1.5 text-sm text-slate sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Size",
                "Foundations",
                "Ground conditions",
                "Electrical requirements",
                "Heating and cooling",
                "Air conditioning",
                "Insulation specification",
                "Internal finishes",
                "Doors and glazing",
                "Access to site",
              ].map((factor) => (
                <li key={factor} className="flex items-center gap-2">
                  <span className="size-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  {factor}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Instant Estimate"
            title="Garden Room Cost Calculator"
            subtitle="Build your own guide price by selecting a size, specification and any extras you'd like."
          />
          <div className="mt-10">
            <GardenRoomCalculator />
          </div>
        </Container>
      </section>

      <section className="bg-chalk">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Specification"
            title="What's Included"
            subtitle="Every garden room comes complete and ready to use."
          />
          <ul className="mt-10 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-4">
            {included.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-ink">
                <CheckCircle2 className="size-4 shrink-0 text-accent" strokeWidth={1.75} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Customise Your Room"
            title="Optional Extras"
            subtitle="Tailor your garden room with any of the following additions."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {extras.map((item) => (
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
            eyebrow="How It Works"
            title="Our Installation Process"
            subtitle="A clear, straightforward journey from first conversation to finished room."
          />
          <div className="mt-10">
            <ProcessSteps steps={processSteps} />
          </div>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Project Gallery"
            title="Garden Room Projects"
            subtitle="A selection of garden room projects across Hertfordshire — real images coming soon."
          />
          <div className="mt-10">
            <Gallery images={galleryImages} />
          </div>
        </Container>
      </section>

      <section className="bg-chalk">
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

      <CoverageArea background="paper" />

      <section className="bg-chalk">
        <Container className="py-16 sm:py-20">
          <SectionHeading eyebrow="Good To Know" title="Garden Room FAQs" />
          <div className="mt-10">
            <Faq faqs={faqs} />
          </div>
        </Container>
      </section>

      <CtaBand
        title="Ready To Create Extra Space?"
        subtitle="Contact Zebra Trades today to arrange a free site survey and discover how a premium garden room could transform your home."
        buttonLabel="Request a Site Survey"
        quoteHref={quoteHref}
      />
    </>
  );
}
