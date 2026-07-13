import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import ValueProps, {
  Wrench, Award, ShieldCheck, FileSignature, MapPin, type ValueItem,
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
  Flame, PanelTop, Layers, Wallpaper, Tv, Lightbulb, LayoutGrid, Sparkles,
  Cable, Box,
} from "lucide-react";
import FireplaceCard from "@/components/FireplaceCard";
import { fireplaces } from "@/data/fireplaces";

export const metadata: Metadata = {
  title: "Media Walls & Electric Fireplace Installation in Cheshunt & Hertfordshire",
  description:
    "Bespoke media wall and electric fireplace installation in Cheshunt and Hertfordshire. TV recesses, integrated storage and LED lighting, built to a premium finish.",
  keywords: [
    "Media Walls Cheshunt",
    "Media Wall Installation Hertfordshire",
    "Electric Fireplace Installation",
    "TV Feature Walls Hertfordshire",
    "Media Wall Builders Cheshunt",
    "Bespoke Media Walls Hertfordshire",
  ],
  openGraph: {
    title: "Media Walls & Electric Fireplace Installations in Hertfordshire | Zebra Trades",
    description:
      "Transform your living room with a bespoke media wall featuring integrated storage, TV recesses and stunning electric fireplaces.",
    url: "https://www.zebratrades.co.uk/media-walls",
    type: "website",
  },
};

const SERVICE = "Media Walls";
const quoteHref = `/contact?service=${encodeURIComponent(SERVICE)}`;

const trustItems: ValueItem[] = [
  { icon: Wrench, title: `${siteConfig.yearsTrading} Years Trade Experience`, body: "Decades of trade experience behind every media wall we build." },
  { icon: Award, title: `Established ${siteConfig.yearsAsZebra} Years`, body: "A trusted local name across Cheshunt and Hertfordshire since day one." },
  { icon: Sparkles, title: "Bespoke Designs", body: "Every media wall designed around your room, your TV and your style." },
  { icon: ShieldCheck, title: "Professional Installation", body: "Built to a high standard, finished neatly and ready for decoration." },
  { icon: FileSignature, title: "Transparent Pricing", body: "A clear, written quotation agreed before any work begins." },
  { icon: MapPin, title: "Local Hertfordshire Business", body: "Based in Cheshunt, working across Hertfordshire every week." },
];

const wallOptions = [
  { icon: PanelTop, title: "Contemporary Media Walls" },
  { icon: Flame, title: "Electric Fireplace Media Walls" },
  { icon: Layers, title: "Floating Media Walls" },
  { icon: Box, title: "Storage Media Walls" },
  { icon: Sparkles, title: "Luxury Feature Walls" },
  { icon: Tv, title: "TV Feature Walls" },
  { icon: LayoutGrid, title: "Built-In Shelving Media Walls" },
  { icon: Lightbulb, title: "LED Feature Media Walls" },
];

const packages: Package[] = [
  {
    name: "Basic TV Feature Wall",
    price: "From £1,995",
    featuresLabel: "Includes:",
    features: ["TV recess", "Basic framework", "Decoration ready finish"],
    serviceLabel: SERVICE,
  },
  {
    name: "Media Wall with Electric Fireplace",
    price: "From £3,495",
    featuresLabel: "Includes:",
    features: ["TV recess", "Electric fireplace", "Decorative shelving", "Decoration ready finish"],
    serviceLabel: SERVICE,
  },
  {
    name: "Premium Media Wall",
    price: "From £4,995",
    featuresLabel: "Includes:",
    features: ["Electric fireplace", "Bespoke shelving", "LED lighting", "Hidden cable management", "Premium finish"],
    serviceLabel: SERVICE,
  },
  {
    name: "Luxury Media Wall",
    price: "From £7,995",
    featuresLabel: "Includes:",
    features: ["Large feature fireplace", "Bespoke cabinetry", "Storage solutions", "LED lighting package", "Premium decorative finishes"],
    serviceLabel: SERVICE,
  },
];

const extras = [
  { icon: Flame, title: "Electric Fireplace Upgrades" },
  { icon: Lightbulb, title: "LED Lighting" },
  { icon: Layers, title: "Floating Shelves" },
  { icon: Wallpaper, title: "Decorative Panelling" },
  { icon: Tv, title: "TV Installation" },
  { icon: Tv, title: "Soundbar Installation" },
  { icon: Cable, title: "Hidden Cable Systems" },
  { icon: Box, title: "Bespoke Storage Units" },
];

const styles = [
  "Modern White Media Wall",
  "Contemporary Grey Media Wall",
  "Black Feature Media Wall",
  "Floating Fireplace Media Wall",
  "Media Wall with Storage",
  "Luxury Lounge Media Wall",
];

const processSteps: Step[] = [
  { number: "01", title: "Home Survey", body: "We visit to measure your space and discuss your TV, fireplace and storage needs." },
  { number: "02", title: "Design Consultation", body: "We work through layout, finish and style options together." },
  { number: "03", title: "Quotation", body: "A clear, written quotation covering the full project." },
  { number: "04", title: "Construction", body: "Your media wall framework is built to specification." },
  { number: "05", title: "Fireplace Installation", body: "Your electric fireplace is fitted and connected." },
  { number: "06", title: "Decoration & Finishing", body: "Final finishes, panelling and lighting completed." },
  { number: "07", title: "Final Handover", body: "A full walkthrough with you, ready to enjoy your new feature wall." },
];

const galleryImages: GalleryImage[] = [
  { src: "/images/media-walls/modern-media-wall-cheshunt.jpg", alt: "Modern Media Wall Installation", caption: "Modern media wall installation — Cheshunt" },
  { src: "/images/media-walls/electric-fireplace-feature-wall-waltham-abbey.jpg", alt: "Electric Fireplace Feature Wall", caption: "Electric fireplace feature wall — Waltham Abbey" },
  { src: "/images/media-walls/luxury-lounge-media-wall-hertfordshire.jpg", alt: "Luxury Lounge Media Wall", caption: "Luxury lounge media wall — Hertfordshire" },
  { src: "/images/media-walls/built-in-shelving-media-wall-goffs-oak.jpg", alt: "Built-In Shelving Media Wall", caption: "Built-in shelving media wall — Goffs Oak" },
  { src: "", alt: "Floating Media Wall", caption: "Floating media wall — Enfield" },
  { src: "/images/media-walls/tv-fireplace-installation-cuffley.jpg", alt: "TV & Fireplace Installation", caption: "TV & fireplace installation — Cuffley" },
];

const faqs: FaqItem[] = [
  {
    question: "How much does a media wall cost?",
    answer:
      "Prices start from £1,995 for a basic TV feature wall, rising to £7,995 or more for a luxury media wall with a feature fireplace and bespoke cabinetry. We'll provide a fixed quote following a survey.",
  },
  {
    question: "Can any TV be installed?",
    answer:
      "Yes. We design the TV recess around the make and size of your television to ensure a neat, secure fit.",
  },
  {
    question: "Which electric fires do you recommend?",
    answer:
      "We work with a range of trusted electric fire brands and will recommend a model to suit your media wall design and budget during your consultation.",
  },
  {
    question: "Can lighting be added?",
    answer:
      "Yes. LED lighting can be integrated into shelving, recesses and the fireplace surround as part of your design.",
  },
  {
    question: "How long does installation take?",
    answer:
      "A basic feature wall can typically be completed in a few days. Larger, more bespoke projects may take longer — we'll confirm timescales in your quotation.",
  },
  {
    question: "Do you provide free quotations?",
    answer:
      "Yes. We offer a free home survey and quotation with no obligation to go ahead.",
  },
  {
    question: "Can storage be incorporated?",
    answer:
      "Yes. Bespoke storage, shelving and cabinetry can all be built into your media wall design.",
  },
];

export default function MediaWallsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(circle at 80% 10%, rgba(194,69,46,0.2), transparent 55%)" }}
          aria-hidden="true"
        />
        <Container className="relative py-16 sm:py-20 lg:py-24">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Media Walls</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-paper sm:text-5xl lg:text-6xl">
            Media Walls & Electric Fireplace Installations in Hertfordshire
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-paper/75 sm:text-lg">
            Transform your living room with a bespoke media wall featuring
            integrated storage, TV recesses and stunning electric fireplaces.
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
            subtitle="A premium media wall installer you can trust from first survey to final handover."
          />
          <div className="mt-10">
            <ValueProps items={trustItems} />
          </div>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Design Options"
            title="Media Wall Options"
            subtitle="From a simple TV feature wall to a fully bespoke fireplace centrepiece."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {wallOptions.map((item) => (
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

      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Premium Fireplaces"
            title="Choose Your Fireplace"
            subtitle="The fireplace is the heart of every media wall. Browse our premium range of electric fireplaces, professionally supplied and installed by Zebra Trades."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {fireplaces.map((fp) => (
              <FireplaceCard key={fp.id} fp={fp} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-chalk">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Guide Prices"
            title="Media Wall Price Guide"
            subtitle="A starting point for budgeting — your fixed quote will reflect your exact design."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {packages.map((pkg) => <PackageCard key={pkg.name} pkg={pkg} />)}
          </div>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Customise Your Wall"
            title="Optional Extras"
            subtitle="Tailor your media wall with any of the following additions."
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
            eyebrow="Inspiration"
            title="Popular Media Wall Styles"
            subtitle="A flavour of the styles we build — every design is tailored to your room."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {styles.map((style) => (
              <span key={style} className="rounded-full border border-line bg-paper px-4 py-2 text-sm font-medium text-ink">
                {style}
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
            subtitle="A clear, straightforward journey from first survey to finished wall."
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
            title="Media Wall Projects"
            subtitle="A selection of media wall projects across Hertfordshire — real images coming soon."
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
          <SectionHeading eyebrow="Good To Know" title="Media Wall FAQs" />
          <div className="mt-10">
            <Faq faqs={faqs} />
          </div>
        </Container>
      </section>

      <CtaBand
        title="Ready To Transform Your Living Room?"
        subtitle="Contact Zebra Trades today to arrange a free survey and discover how a bespoke media wall can transform your home."
        buttonLabel="Request a Free Survey"
        quoteHref={quoteHref}
      />
    </>
  );
}
