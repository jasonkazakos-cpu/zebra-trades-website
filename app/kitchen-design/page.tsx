import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import ValueProps, {
  Wrench, Award, FileSignature, ShieldCheck, MapPin, PackageCheck, UserCheck, Sparkles, Hammer, BadgeCheck,
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
    icon: Award,
    title: "Premium-Quality Kitchen Cabinets",
    body: "We source high-specification cabinets built to last — the quality you'd expect from a top showroom, without the price tag.",
  },
  {
    icon: FileSignature,
    title: "Honest, Competitive Pricing",
    body: "Clear, written fixed-price quotes agreed before we start. No hidden costs, no verbal estimates.",
  },
  {
    icon: MapPin,
    title: "No Expensive Showroom Overheads",
    body: "We don't carry the running costs of a large showroom — those savings are passed directly to you.",
  },
  {
    icon: Sparkles,
    title: "Bespoke Manufactured Kitchens",
    body: "Made-to-measure kitchens designed around your space and style, not off-the-shelf compromises.",
  },
  {
    icon: Hammer,
    title: "Expert Installation Available",
    body: "Full fitting by our own experienced team — or supply-only if you prefer to use your own installer.",
  },
  {
    icon: UserCheck,
    title: "Friendly Advice From Experienced Installers",
    body: "Guidance from people who have fitted hundreds of kitchens — practical, honest and always on your side.",
  },
  {
    icon: PackageCheck,
    title: "Fast Lead Times",
    body: "We keep things moving. From confirmation to delivery, we work to a schedule that suits you.",
  },
  {
    icon: ShieldCheck,
    title: "Excellent Customer Service",
    body: "We're with you from first enquiry to finished kitchen — responsive, reliable and easy to deal with.",
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
  { src: "/images/kitchen-design/cambridge-indigo-kitchen.jpg", alt: "Cambridge Indigo kitchen style", caption: "Cambridge Indigo Kitchen Style" },
  { src: "/images/kitchen-design/windsor-white-oak-kitchen.jpg", alt: "Windsor white and oak kitchen style", caption: "Windsor White & Oak Kitchen Style" },
  { src: "/images/kitchen-design/windsor-sage-green-kitchen.jpg", alt: "Windsor sage green kitchen style", caption: "Windsor Sage Green Kitchen Style" },
  { src: "/images/kitchen-design/stratto-vero-white-kitchen.jpg", alt: "Stratto Vero white kitchen style", caption: "Stratto Vero White Kitchen Style" },
  { src: "/images/kitchen-design/vivo-gloss-vero-dustgrey-kitchen.jpg", alt: "Vivo gloss dust grey kitchen style", caption: "Vivo Gloss Dust Grey Kitchen Style" },
  { src: "/images/kitchen-design/vivo-vero-smoke-blue-kitchen.jpg", alt: "Vivo smoke blue kitchen style", caption: "Vivo Smoke Blue Kitchen Style" },
  { src: "/images/kitchen-design/vivo-gloss-ivory-vero-cameo-kitchen.jpg", alt: "Vivo gloss ivory kitchen style", caption: "Vivo Gloss Ivory Kitchen Style" },
  { src: "/images/kitchen-design/stratto-vero-white-rosegold-kitchen.jpg", alt: "Stratto Vero white kitchen style with rose gold accents", caption: "Stratto Vero White Kitchen Style — Rose Gold Accents" },
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

      {/* Promotional banners */}
      <section className="bg-paper">
        <Container className="py-12">
          <div className="grid gap-6 sm:grid-cols-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/kitchen-design/promo-cabinet-construction.png"
              alt="Premium cabinet construction — built to last, designed to impress"
              width={1448}
              height={1086}
              style={{ width: "100%", height: "auto", borderRadius: "12px", boxShadow: "0 4px 16px 0 rgba(0,0,0,0.10)" }}
              loading="lazy"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/kitchen-design/promo-bespoke-colours-delivery.png"
              alt="Bespoke colours and fast delivery — kitchen designs designed around you"
              width={1402}
              height={1122}
              style={{ width: "100%", height: "auto", borderRadius: "12px", boxShadow: "0 4px 16px 0 rgba(0,0,0,0.10)" }}
              loading="lazy"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/kitchen-design/promo-why-choose-zebra-trades.png"
              alt="Why choose Zebra Trades — why pay more for a premium kitchen"
              width={1672}
              height={941}
              style={{ width: "100%", height: "auto", borderRadius: "12px", boxShadow: "0 4px 16px 0 rgba(0,0,0,0.10)" }}
              loading="lazy"
            />
          </div>
        </Container>
      </section>

      {/* Why Choose */}
      <section className="bg-chalk">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Why Choose Zebra Trades"
            title="Why Pay More?"
            subtitle="Premium kitchens don't have to mean premium showroom prices."
          />
          <div className="mt-10">
            <ValueProps items={trustItems} />
          </div>
          <div className="mt-12 rounded-sm border border-accent/30 bg-paper p-8 text-center">
            <p className="font-display text-xl font-bold uppercase tracking-tight text-ink sm:text-2xl">
              Call today for a free quotation
            </p>
            <p className="mt-3 text-base text-slate">
              Discover how much you could save without compromising on quality.
            </p>
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button href={siteConfig.phoneHref} variant="primary">
                Call {siteConfig.phoneDisplay}
              </Button>
              <Button href={`/contact?service=${encodeURIComponent(SERVICE_LABEL)}`} variant="ghost-dark">
                Request a Free Quote
              </Button>
            </div>
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
            eyebrow="Kitchen Styles"
            title="Kitchen Styles We Offer"
            subtitle="A flavour of the ranges and finishes available — completed project photos coming soon."
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
