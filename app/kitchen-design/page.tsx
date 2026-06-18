import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import ValueProps, {
  Wrench, Award, FileSignature, UserCheck, MapPin, PackageCheck,
  type ValueItem,
} from "@/components/ValueProps";
import ProcessSteps, { type Step } from "@/components/ProcessSteps";
import Faq, { type FaqItem } from "@/components/Faq";
import Gallery, { type GalleryImage } from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import CoverageArea from "@/components/CoverageArea";
import CtaBand from "@/components/CtaBand";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Kitchen Design & Supply in Hertfordshire",
  description:
    "Kitchen design, supply and installation services in Cheshunt and Hertfordshire. From first ideas to finished kitchen — Zebra Trades handles every stage with transparent, fixed pricing.",
  keywords: [
    "Kitchen Design Cheshunt",
    "Kitchen Supply Cheshunt",
    "New Kitchens Hertfordshire",
    "Kitchen Designers Hertfordshire",
    "Kitchen Design and Installation",
    "Kitchen Showroom Alternative",
    "Kitchen Planning Service",
  ],
  openGraph: {
    title: "Kitchen Design & Supply in Hertfordshire | Zebra Trades",
    description:
      "From initial ideas to completed kitchens — Zebra Trades can help design, supply and coordinate your perfect new kitchen.",
    url: "https://www.zebratrades.co.uk/kitchen-design",
    type: "website",
  },
};

const SERVICE_LABEL = "Kitchen Design & Supply";

const trustItems: ValueItem[] = [
  {
    icon: Wrench,
    title: `${siteConfig.yearsTrading} Years Trade Experience`,
    body: "Deep trade knowledge behind every kitchen project — from the first sketch to the final fixture.",
  },
  {
    icon: Award,
    title: `Established ${siteConfig.yearsAsZebra} Years`,
    body: "A trusted local name across Cheshunt and Hertfordshire for the past seven years.",
  },
  {
    icon: UserCheck,
    title: "Personal Service",
    body: "One point of contact throughout your project — no handoffs, no confusion.",
  },
  {
    icon: FileSignature,
    title: "Transparent Pricing",
    body: "Written quotations agreed before anything starts. No verbal estimates, no surprises.",
  },
  {
    icon: MapPin,
    title: "Trusted Local Business",
    body: "Based in Cheshunt, working across Hertfordshire — a local team you can rely on.",
  },
  {
    icon: PackageCheck,
    title: "Design, Supply & Installation",
    body: "We can handle the full project from first ideas right through to a finished, fitted kitchen.",
  },
];

const processSteps: Step[] = [
  {
    number: "01",
    title: "Initial Consultation",
    body: "We talk through your ideas, lifestyle and requirements — no commitment, no pressure.",
  },
  {
    number: "02",
    title: "Home Survey & Measurements",
    body: "A visit to your home to measure the space accurately and note any constraints.",
  },
  {
    number: "03",
    title: "Design Discussion",
    body: "We work through layout options, styles and finishes together until it feels right.",
  },
  {
    number: "04",
    title: "Layout & Product Selection",
    body: "Final kitchen layout agreed and all units, worktops and appliances selected.",
  },
  {
    number: "05",
    title: "Quotation",
    body: "A clear, written fixed-price quotation covering everything agreed.",
  },
  {
    number: "06",
    title: "Supply",
    body: "Your kitchen is ordered and delivered, coordinated to fit your schedule.",
  },
  {
    number: "07",
    title: "Installation (Optional)",
    body: "Our team installs your new kitchen to a high standard, with minimal disruption.",
  },
];

const designStyles = [
  "Kitchen Layout Planning",
  "Space Optimisation",
  "Appliance Positioning",
  "Storage Solutions",
  "Modern Kitchens",
  "Traditional Kitchens",
  "Family Kitchens",
  "Open Plan Kitchens",
];

const suppliers = ["Howdens", "Wren", "Magnet", "DIY Kitchens", "Benchmarx", "Wickes", "B&Q"];

const serviceOptions = [
  {
    title: "Design Only",
    description:
      "We create a kitchen layout, product selection and full specification, ready for you to order and install however you choose.",
  },
  {
    title: "Supply Only",
    description:
      "If you already know what you want, we can assist sourcing and coordinating delivery from your chosen supplier.",
  },
  {
    title: "Installation Only",
    description:
      "Already have your kitchen? We'll fit it professionally. See our dedicated Kitchen Installation page for packages and pricing.",
    href: "/kitchen-installation",
  },
  {
    title: "Complete Design, Supply & Installation",
    description:
      "We handle everything from the first consultation right through to a fully fitted kitchen — one team, one point of contact.",
  },
];

const galleryImages: GalleryImage[] = [
  { src: "", alt: "Modern white handleless kitchen", caption: "Modern handleless kitchen — Cheshunt" },
  { src: "", alt: "Shaker style kitchen in Hoddesdon", caption: "Shaker style kitchen — Hoddesdon" },
  { src: "", alt: "Open plan family kitchen", caption: "Open plan family kitchen — Waltham Cross" },
  { src: "", alt: "Traditional kitchen with island", caption: "Traditional kitchen with island — Broxbourne" },
  { src: "", alt: "Contemporary dark kitchen", caption: "Contemporary dark kitchen — Enfield" },
  { src: "", alt: "Compact kitchen refit", caption: "Compact kitchen refit — Cuffley" },
];

const kitchenFaqs: FaqItem[] = [
  {
    question: "Do you offer free consultations?",
    answer:
      "Yes. We offer a free initial consultation to talk through your ideas and understand what you need, with no obligation to go ahead.",
  },
  {
    question: "Can you supply kitchens only?",
    answer:
      "Yes. We can assist with the design and supply of your kitchen without providing installation if you prefer to arrange that separately.",
  },
  {
    question: "Can I purchase my own kitchen?",
    answer:
      "Yes. If you have already purchased a kitchen or plan to source one directly, we can install it for you. See our Kitchen Installation page for pricing.",
  },
  {
    question: "Do you provide installation?",
    answer:
      "Yes. Installation is available as part of a complete design, supply and installation package, or as a standalone service if you already have your kitchen.",
  },
  {
    question: "Do you manage the entire project?",
    answer:
      "Yes. We can coordinate the full project from design and supply through to installation, acting as a single point of contact throughout.",
  },
  {
    question: "Do you offer home surveys?",
    answer:
      "Yes. A home survey and measurement visit is included as standard as part of our design process.",
  },
  {
    question: "Are you insured?",
    answer:
      "Yes. All work is covered by public liability insurance for complete peace of mind.",
  },
];

export default function KitchenDesignPage() {
  const quoteHref = `/contact?service=${encodeURIComponent(SERVICE_LABEL)}`;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(circle at 15% 15%, rgba(14,149,148,0.18), transparent 55%)" }}
          aria-hidden="true"
        />
        <Container className="relative py-16 sm:py-20 lg:py-24">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Kitchen Design & Supply
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-paper sm:text-5xl lg:text-6xl">
            Kitchen Design & Supply in Hertfordshire
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-paper/75 sm:text-lg">
            From initial ideas to completed kitchens, Zebra Trades can help
            design, supply and coordinate your perfect new kitchen.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={quoteHref} variant="primary">
              Book a Free Consultation
            </Button>
            <Button href={quoteHref} variant="ghost-light">
              Request a Quote
            </Button>
            <Button href={siteConfig.phoneHref} variant="ghost-light">
              Call {siteConfig.phoneDisplay}
            </Button>
          </div>
        </Container>
      </section>

      {/* Why Choose */}
      <section className="bg-chalk">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Why Zebra Trades"
            title="Why Choose Zebra Trades?"
            subtitle="A personal, professional kitchen service from a team with decades of experience."
          />
          <div className="mt-10">
            <ValueProps items={trustItems} />
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="How It Works"
            title="Our Kitchen Design Process"
            subtitle="A clear, straightforward journey from first conversation to finished kitchen."
          />
          <div className="mt-10">
            <ProcessSteps steps={processSteps} />
          </div>
        </Container>
      </section>

      {/* Design Services */}
      <section className="bg-chalk">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Design Services"
            title="What We Can Design For You"
            subtitle="Every kitchen project is different — here are the styles and specialisms we cover."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {designStyles.map((style) => (
              <span
                key={style}
                className="rounded-full border border-line bg-paper px-4 py-2 text-sm font-medium text-ink"
              >
                {style}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* Supply Options */}
      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Trusted Suppliers"
            title="Kitchen Supply Options"
            subtitle="We can assist with sourcing kitchens from all the major suppliers and independents."
          />
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate">
            Whether you have a preferred supplier already or want guidance on
            where to go, we work with all the leading kitchen retailers to
            ensure you get the right product at the right price.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {suppliers.map((s) => (
              <span
                key={s}
                className="rounded-full border border-line bg-chalk px-4 py-2 font-mono text-sm text-ink"
              >
                {s}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* Service Options */}
      <section className="bg-chalk">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="How We Can Help"
            title="Service Options"
            subtitle="Choose the level of involvement that suits your project — every job is individually quoted."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {serviceOptions.map((option) => (
              <div key={option.title} className="rounded-sm border border-line bg-paper p-7">
                <h3 className="font-display text-xl font-bold uppercase tracking-tight text-ink">
                  {option.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">{option.description}</p>
                {option.href && (
                  <a
                    href={option.href}
                    className="mt-4 inline-block font-mono text-xs uppercase tracking-wide text-accent underline-offset-4 hover:underline"
                  >
                    View installation pricing →
                  </a>
                )}
                {!option.href && (
                  <a
                    href={quoteHref}
                    className="mt-4 inline-block font-mono text-xs uppercase tracking-wide text-accent underline-offset-4 hover:underline"
                  >
                    Enquire about this →
                  </a>
                )}
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-slate">
            Every project is individually quoted following a free consultation.
          </p>
        </Container>
      </section>

      {/* Gallery */}
      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Project Gallery"
            title="Our Kitchen Projects"
            subtitle="A selection of kitchen projects across Cheshunt and Hertfordshire — real images coming soon."
          />
          <div className="mt-10">
            <Gallery images={galleryImages} />
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="bg-chalk">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="What Customers Say"
            title="Trusted By Homeowners Locally"
            subtitle="Example reviews — a flavour of the feedback we aim for on every project."
          />
          <div className="mt-10">
            <Testimonials />
          </div>
        </Container>
      </section>

      <CoverageArea background="paper" />

      {/* FAQs */}
      <section className="bg-chalk">
        <Container className="py-16 sm:py-20">
          <SectionHeading eyebrow="Good To Know" title="Kitchen Design & Supply FAQs" />
          <div className="mt-10">
            <Faq faqs={kitchenFaqs} />
          </div>
        </Container>
      </section>

      <CtaBand
        title="Ready To Plan Your New Kitchen?"
        subtitle="Book a free consultation with Zebra Trades and discover how we can help create your ideal kitchen."
        buttonLabel="Request a Consultation"
        quoteHref={quoteHref}
      />
    </>
  );
}
