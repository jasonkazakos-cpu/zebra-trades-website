import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import ValueProps from "@/components/ValueProps";
import PackageCard, { type Package } from "@/components/PackageCard";
import PricingCategoryCard, { type PricingCategory } from "@/components/PricingCategoryCard";
import ProcessSteps, { type Step } from "@/components/ProcessSteps";
import Gallery, { type GalleryImage } from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Faq, { type FaqItem } from "@/components/Faq";
import CoverageArea from "@/components/CoverageArea";
import CtaBand from "@/components/CtaBand";
import { siteConfig } from "@/data/site";
import {
  WashingMachine, Refrigerator, Flame, Wind, CookingPot, PlugZap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Appliance Installation in Cheshunt & Hertfordshire",
  description:
    "Professional appliance installation in Cheshunt and Hertfordshire. Washing machines, dishwashers, ovens, hobs and integrated appliances fitted safely with transparent, fixed pricing.",
  keywords: [
    "Appliance Installation Cheshunt",
    "Washing Machine Installation Cheshunt",
    "Dishwasher Installation Hertfordshire",
    "Integrated Appliance Installation",
    "Appliance Installation Hertfordshire",
    "Oven Installation Cheshunt",
  ],
  openGraph: {
    title: "Appliance Installation Services in Hertfordshire | Zebra Trades",
    description:
      "Professional appliance installation services from Zebra Trades. From washing machines and dishwashers to ovens, hobs and cooker hoods, we provide reliable installation with transparent pricing.",
    url: "https://www.zebratrades.co.uk/appliance-installation",
    type: "website",
  },
};

const SERVICE = "Appliance Installation";
const quoteHref = `/contact?service=${encodeURIComponent(SERVICE)}`;

const packages: Package[] = [
  {
    name: "Three Appliance Package",
    price: "From £175",
    bestFor: "Choose any three: washing machine, dishwasher, tumble dryer, oven, hob, cooker hood or fridge connection",
    description:
      "Mix and match any three appliances from our range for one fixed visit price — ideal when several appliances need fitting at once.",
    serviceLabel: SERVICE,
  },
  {
    name: "Kitchen Appliance Package",
    price: "From £290",
    bestFor: "Includes oven, hob, cooker hood, dishwasher and washing machine",
    description:
      "A complete kitchen appliance fit — five appliances installed in one visit. Excludes electrical upgrades, cabinet modifications and gas work.",
    serviceLabel: SERVICE,
  },
];

const categories: PricingCategory[] = [
  {
    title: "Freestanding Appliances",
    icon: "PlugZap",
    items: [
      { name: "Washing Machine Installation", price: "From £75" },
      { name: "Dishwasher Installation", price: "From £75" },
      { name: "Tumble Dryer Installation", price: "From £65" },
      { name: "Fridge / Water Dispenser Connection", price: "From £85" },
    ],
  },
  {
    title: "Cooking Appliances",
    icon: "PlugZap",
    items: [
      { name: "Built-In Electric Oven Installation", price: "From £85" },
      { name: "Electric Cooker Installation (existing circuit)", price: "From £120" },
      { name: "Electric Hob Connection (existing circuit)", price: "From £95" },
      { name: "Cooker Hood Installation", price: "From £95" },
    ],
  },
  {
    title: "Integrated Appliances",
    icon: "PlugZap",
    items: [
      { name: "Integrated Dishwasher Installation", price: "From £125" },
      { name: "Integrated Washing Machine Installation", price: "From £125" },
      { name: "Integrated Fridge Freezer Installation", price: "From £165" },
    ],
  },
  {
    title: "Premium Appliances",
    icon: "PlugZap",
    items: [
      { name: "American Fridge Freezer Installation", price: "From £125" },
      { name: "Boiling Water Tap Connection", price: "From £195" },
    ],
  },
  {
    title: "Additional Services",
    icon: "PlugZap",
    items: [
      { name: "Appliance Removal", price: "From £25" },
      { name: "Appliance Recycling", price: "From £35" },
      { name: "Appliance Relocation", price: "From £75" },
    ],
  },
];

const applianceTypes = [
  { icon: WashingMachine, title: "Washing Machines" },
  { icon: PlugZap, title: "Dishwashers" },
  { icon: Wind, title: "Tumble Dryers" },
  { icon: Refrigerator, title: "Fridge Freezers" },
  { icon: Refrigerator, title: "American Fridge Freezers" },
  { icon: Flame, title: "Electric Ovens" },
  { icon: CookingPot, title: "Electric Hobs" },
  { icon: Wind, title: "Cooker Hoods" },
  { icon: PlugZap, title: "Integrated Appliances" },
  { icon: PlugZap, title: "Water Dispenser Connections" },
];

const processSteps: Step[] = [
  { number: "01", title: "Booking", body: "Get in touch with the appliances you need installed and we'll find a slot that works for you." },
  { number: "02", title: "Site Assessment", body: "We confirm access, connections and any cabinet or electrical considerations before we start." },
  { number: "03", title: "Installation", body: "Your appliance is fitted, connected and levelled to the manufacturer's specification." },
  { number: "04", title: "Testing", body: "We run a full test cycle to confirm everything is working correctly before we finish." },
  { number: "05", title: "Handover", body: "We take away your old appliance and packaging if needed, leaving the area clean and tidy." },
];

const galleryImages: GalleryImage[] = [
  { src: "", alt: "Washing Machine Installation", caption: "Washing machine installation — Cheshunt" },
  { src: "", alt: "Integrated Dishwasher Installation", caption: "Integrated dishwasher installation — Broxbourne" },
  { src: "", alt: "Oven Installation", caption: "Oven installation — Hoddesdon" },
  { src: "", alt: "Cooker Hood Installation", caption: "Cooker hood installation — Waltham Cross" },
  { src: "", alt: "Fridge Freezer Installation", caption: "Fridge freezer installation — Enfield" },
  { src: "", alt: "Kitchen Appliance Package", caption: "Kitchen appliance package — Cuffley" },
];

const faqs: FaqItem[] = [
  {
    question: "Do you remove old appliances?",
    answer:
      "Yes. We can remove and recycle your old appliance as part of the visit — see Additional Services for pricing.",
  },
  {
    question: "Can you install customer supplied appliances?",
    answer:
      "Yes. We're happy to install appliances you've already purchased, whether bought online, in store or from another supplier.",
  },
  {
    question: "Do you provide integrated appliance installation?",
    answer:
      "Yes. Integrated dishwashers, washing machines and fridge freezers can all be fitted. Some integrated appliances may need cabinet or door modifications, which we'll confirm before work begins.",
  },
  {
    question: "Are materials included?",
    answer:
      "Standard fittings and connections are included. Any additional parts, such as new hoses or brackets, will be confirmed and agreed with you before we proceed.",
  },
  {
    question: "Are you insured?",
    answer:
      "Yes. Every installation is covered by public liability insurance for complete peace of mind.",
  },
  {
    question: "Do you provide same day appointments?",
    answer:
      "We aim to be as flexible as possible — get in touch and we'll let you know our earliest available slot, subject to availability.",
  },
];

export default function ApplianceInstallationPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(circle at 15% 10%, rgba(132,86,168,0.18), transparent 55%)" }}
          aria-hidden="true"
        />
        <Container className="relative py-16 sm:py-20 lg:py-24">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Appliance Installation
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-paper sm:text-5xl lg:text-6xl">
            Appliance Installation Services in Hertfordshire
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-paper/75 sm:text-lg">
            Professional appliance installation services from Zebra Trades.
            From washing machines and dishwashers to ovens, hobs and cooker
            hoods, we provide reliable installation with transparent pricing.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={quoteHref} variant="primary">Book Installation</Button>
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
            subtitle="The same reliable, professional approach on every appliance we install."
          />
          <div className="mt-10">
            <ValueProps />
          </div>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Pricing"
            title="Appliance Installation Price List"
            subtitle="Guide prices for common appliance installations across Cheshunt and Hertfordshire."
          />
          <div className="mt-10 space-y-6">
            {categories.map((cat) => <PricingCategoryCard key={cat.title} category={cat} />)}
          </div>
        </Container>
      </section>

      <section className="bg-chalk">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Save With A Bundle"
            title="Appliance Packages"
            subtitle="Installing more than one appliance? Save with a fixed-price package."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 max-w-3xl">
            {packages.map((pkg) => <PackageCard key={pkg.name} pkg={pkg} />)}
          </div>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-10 sm:py-12">
          <div className="space-y-3 rounded-sm border border-line bg-chalk p-6">
            <p className="text-sm leading-relaxed text-slate">
              Prices shown are guide prices only. Integrated appliances may
              require cabinet modifications, door fitting, plumbing
              alterations or electrical work. A fixed quotation will always
              be provided before work begins.
            </p>
            <p className="text-sm leading-relaxed text-slate">
              Gas cookers and gas hobs require a Gas Safe registered engineer
              and are quoted separately.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-chalk">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="What We Install"
            title="Appliance Types We Install"
            subtitle="If your appliance isn't listed, get in touch — we install most major domestic appliances."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {applianceTypes.map((item) => (
              <div key={item.title} className="flex flex-col items-center gap-3 rounded-sm border border-line bg-paper p-5 text-center">
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

      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="How It Works"
            title="Our Installation Process"
            subtitle="A clear, straightforward process from booking to handover."
          />
          <div className="mt-10">
            <ProcessSteps steps={processSteps} />
          </div>
        </Container>
      </section>

      <section className="bg-chalk">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Recent Jobs"
            title="Appliance Installation Projects"
            subtitle="A selection of recent installations across Hertfordshire — real images coming soon."
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
          <SectionHeading eyebrow="Good To Know" title="Appliance Installation FAQs" />
          <div className="mt-10">
            <Faq faqs={faqs} />
          </div>
        </Container>
      </section>

      <CtaBand
        title="Need A New Appliance Installed?"
        subtitle="Contact Zebra Trades today for professional appliance installation and transparent pricing."
        buttonLabel="Book Installation"
        quoteHref={quoteHref}
      />
    </>
  );
}
