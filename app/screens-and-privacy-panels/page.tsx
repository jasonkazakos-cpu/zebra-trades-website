import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import Gallery, { type GalleryImage } from "@/components/Gallery";
import Faq, { type FaqItem } from "@/components/Faq";
import CoverageArea from "@/components/CoverageArea";
import CtaBand from "@/components/CtaBand";
import { siteConfig } from "@/data/site";
import { ShieldCheck, Wind, Sun, Home, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pergola Screens & Privacy Panels in Cheshunt & Hertfordshire",
  description:
    "Privacy screens, wind panels and weather protection for pergolas and outdoor spaces across Cheshunt and Hertfordshire. Extend your outdoor living season with professional installation.",
  keywords: [
    "Pergola Screens",
    "Privacy Panels",
    "Outdoor Living",
    "Cheshunt",
    "Hertfordshire",
    "Pergola Upgrades",
    "Wind Panels",
    "Outdoor Privacy",
  ],
  openGraph: {
    title: "Pergola Screens & Privacy Panels in Hertfordshire | Zebra Trades",
    description:
      "Create privacy, shelter and year-round comfort for your outdoor living space.",
    url: "https://www.zebratrades.co.uk/screens-and-privacy-panels",
    type: "website",
  },
};

const SERVICE = "Screens & Privacy Panels";
const quoteHref = `/contact?service=${encodeURIComponent(SERVICE)}`;

const benefits = [
  {
    icon: ShieldCheck,
    title: "Privacy Solutions",
    body: "Create a private outdoor retreat, shielded from neighbours and the street.",
  },
  {
    icon: Wind,
    title: "Wind Protection",
    body: "Reduce the impact of wind and create a comfortable, sheltered outdoor space.",
  },
  {
    icon: Sun,
    title: "Weather Protection",
    body: "Extend the usability of your pergola or patio into cooler and wetter months.",
  },
  {
    icon: Home,
    title: "Outdoor Living Enhancement",
    body: "Transform an open pergola or patio into a fully enclosed outdoor room.",
  },
];

// Placeholder gallery images — replace with real project photos when available
const galleryImages: GalleryImage[] = [
  { src: "", alt: "Privacy panel installation on pergola", caption: "Privacy panel installation" },
  { src: "", alt: "Louvered privacy screen", caption: "Louvered privacy screen" },
  { src: "", alt: "Glass wind panel", caption: "Glass wind panel" },
  { src: "", alt: "Side screening on aluminium pergola", caption: "Side screening — aluminium pergola" },
  { src: "", alt: "Polycarbonate privacy panel", caption: "Polycarbonate privacy panel" },
  { src: "", alt: "Full enclosure with side panels", caption: "Full enclosure with side panels" },
];

const faqs: FaqItem[] = [
  {
    question: "What types of screens and panels are available?",
    answer:
      "We offer a range of options including glass panels, polycarbonate panels, louvered screens and solid privacy boards — the right choice depends on your priorities around privacy, light and budget. We'll advise on the best option during your survey.",
  },
  {
    question: "Can screens be added to an existing pergola?",
    answer:
      "Yes. In most cases, screens and privacy panels can be retrofitted to an existing pergola or outdoor structure without the need for significant modifications.",
  },
  {
    question: "Do screens affect the look of my pergola?",
    answer:
      "Modern screen systems are designed to complement contemporary aluminium and timber pergola structures, maintaining clean lines and a premium finish.",
  },
  {
    question: "Are privacy panels wind and weather resistant?",
    answer:
      "Yes. Our panels are designed for outdoor use and built to withstand typical British weather conditions, including wind and rain.",
  },
  {
    question: "Do you provide free quotations?",
    answer:
      "Yes. We offer a free site survey and quotation with no obligation to proceed.",
  },
  {
    question: "What areas do you cover?",
    answer: `We are based in ${siteConfig.baseTown} and cover ${siteConfig.areas.join(", ")} and surrounding parts of ${siteConfig.county}.`,
  },
];

export default function ScreensAndPrivacyPanelsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(circle at 80% 10%, rgba(91,143,168,0.2), transparent 55%)" }}
          aria-hidden="true"
        />
        <Container className="relative py-16 sm:py-20 lg:py-24">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Pergola Upgrades
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-paper sm:text-5xl lg:text-6xl">
            Pergola Screens & Privacy Panels
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-paper/75 sm:text-lg">
            Create privacy, shelter and year-round comfort for your outdoor
            living space.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={quoteHref} variant="primary">Request a Free Survey</Button>
            <Button href={siteConfig.phoneHref} variant="ghost-light">
              Call {siteConfig.phoneDisplay}
            </Button>
          </div>
        </Container>
      </section>

      {/* Introduction */}
      <section className="bg-chalk">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Outdoor Living"
            title="Transform Your Outdoor Space"
            subtitle="Privacy screens and panels turn an open structure into a sheltered outdoor room."
          />
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item) => (
              <div key={item.title}>
                <span className="flex size-11 items-center justify-center rounded-sm bg-accent-soft">
                  <item.icon className="size-5 text-accent-dark" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold uppercase tracking-tight text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-2xl text-sm leading-relaxed text-slate sm:text-base">
            Whether you want to add a degree of privacy to your existing
            pergola, protect against wind and rain, or fully enclose your
            outdoor space to create an all-season room, we can supply and
            install a solution to suit your structure, garden and budget.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate sm:text-base">
            Compatible with timber and aluminium pergolas, our screen and
            panel systems complement your existing outdoor structure and are
            professionally fitted to a high standard.
          </p>
        </Container>
      </section>

      {/* Product Range — ready for future content */}
      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Product Range"
            title="Our Product Range"
            subtitle="A full product range with pricing is coming soon. Get in touch for options and availability."
          />
          <div className="mt-10 rounded-sm border border-line bg-chalk p-8 text-center">
            <p className="text-sm text-slate sm:text-base">
              We are currently adding our full range of privacy screens and
              panels to this page. In the meantime, please{" "}
              <Link href={quoteHref} className="font-medium text-accent underline-offset-4 hover:underline">
                contact us
              </Link>{" "}
              to discuss your requirements and we will advise on the best
              option for your space.
            </p>
            <Link
              href={quoteHref}
              className="mt-6 inline-flex items-center gap-2 rounded-sm bg-accent px-5 py-2.5 text-sm font-semibold text-paper hover:bg-accent-dark"
            >
              Request a Survey & Quote
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </section>

      {/* Product Comparison — ready for future content */}
      <section className="bg-chalk">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Compare Products"
            title="Product Comparison"
            subtitle="A detailed comparison table is coming soon."
          />
          <div className="mt-10 rounded-sm border border-line bg-paper p-8 text-center">
            <p className="text-sm text-slate">
              Product comparison information is being prepared for this
              section. Please{" "}
              <Link href={quoteHref} className="font-medium text-accent underline-offset-4 hover:underline">
                get in touch
              </Link>{" "}
              and we will help you choose the right option.
            </p>
          </div>
        </Container>
      </section>

      {/* Gallery */}
      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Gallery"
            title="Installation Gallery"
            subtitle="Project photography coming soon — real installation images will be added here."
          />
          <div className="mt-10">
            <Gallery images={galleryImages} />
          </div>
        </Container>
      </section>

      <CoverageArea background="chalk" />

      {/* FAQs */}
      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <SectionHeading eyebrow="Good To Know" title="Screens & Privacy Panels FAQs" />
          <div className="mt-10">
            <Faq faqs={faqs} />
          </div>
        </Container>
      </section>

      {/* Request A Quote */}
      <CtaBand
        title="Ready To Create A More Private Outdoor Space?"
        subtitle="Contact Zebra Trades today for a free survey and quotation on screens and privacy panels."
        buttonLabel="Request a Free Survey"
        quoteHref={quoteHref}
      />
    </>
  );
}
