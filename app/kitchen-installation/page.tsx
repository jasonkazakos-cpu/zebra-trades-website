import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Docket from "@/components/Docket";
import Button from "@/components/Button";
import ValueProps from "@/components/ValueProps";
import ProcessSteps, { type Step } from "@/components/ProcessSteps";
import PackageCard, { type Package } from "@/components/PackageCard";
import PricingCategoryCard, {
  type PricingCategory,
} from "@/components/PricingCategoryCard";
import Faq, { type FaqItem } from "@/components/Faq";
import CoverageArea from "@/components/CoverageArea";
import CtaBand from "@/components/CtaBand";
import SectionNavPrompt from "@/components/SectionNavPrompt";
import Gallery, { type GalleryImage } from "@/components/Gallery";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Kitchen Installation in Cheshunt & Hertfordshire",
  description:
    "Professional kitchen installation in Cheshunt and Hertfordshire. Experienced kitchen fitters offering fixed-price quotes, from a kitchen refresh to a full premium fit-out.",
  keywords: [
    "Kitchen Installation Cheshunt",
    "Kitchen Fitters Cheshunt",
    "Kitchen Installation Hertfordshire",
    "Kitchen Fitting Hertfordshire",
    "Kitchen Installer Near Me",
  ],
};

const SERVICE_LABEL = "Kitchen Installation";

const packages: Package[] = [
  {
    name: "Kitchen Refresh Package",
    price: "From £1,795",
    bestFor: "Best for giving an existing kitchen a new lease of life",
    description:
      "A cost-effective door and panel replacement for kitchens that don't need a full strip-out — labour cost to replace doors, panels and plinth.",
    serviceLabel: SERVICE_LABEL,
  },
  {
    name: "Small Kitchen Installation",
    price: "From £2,995",
    bestFor: "Best for compact kitchens and simple layouts",
    description:
      "Suited to compact or single-wall kitchens with a straightforward layout.",
    serviceLabel: SERVICE_LABEL,
  },
  {
    name: "Medium Kitchen Installation",
    price: "From £4,495",
    bestFor: "Best for an average family kitchen",
    description:
      "A full installation for a standard-sized kitchen, including units, worktops and appliance fitting.",
    serviceLabel: SERVICE_LABEL,
  },
  {
    name: "Large Kitchen Installation",
    price: "From £6,495",
    bestFor: "Best for larger kitchens and more involved layouts",
    description:
      "A complete fit-out for larger or more complex kitchens, including island units and extended runs.",
    serviceLabel: SERVICE_LABEL,
  },
  {
    name: "Premium Kitchen Installation",
    price: "From £8,995",
    bestFor: "Best for high-specification or bespoke kitchens",
    description:
      "Our most comprehensive installation, for high-specification kitchens with the full range of fixtures and finishes.",
    serviceLabel: SERVICE_LABEL,
  },
];

const optionalExtras: PricingCategory = {
  title: "Optional Extras",
  icon: "Wrench",
  items: [
    { name: "Existing Kitchen Removal", price: "From £450" },
    { name: "Waste Disposal", price: "From £295" },
    { name: "Integrated Appliance Installation", price: "From £125 each" },
    { name: "Sink & Tap Installation", price: "From £195" },
    { name: "Dishwasher Plumbing", price: "From £95" },
    { name: "Boiling Water Tap Installation", price: "From £195" },
    { name: "Worktop Cut Outs", price: "From £75 each" },
    { name: "Under Cabinet Lighting", price: "From £150" },
    { name: "New Appliance Circuits", price: "Quoted" },
    { name: "Additional Plumbing Alterations", price: "£75/hr" },
    { name: "Additional Electrical Work", price: "£75/hr" },
    { name: "Tiling", price: "Quoted" },
    { name: "Flooring Installation", price: "Quoted" },
    { name: "Decorating", price: "Quoted" },
  ],
};

const installSteps: Step[] = [
  {
    number: "01",
    title: "Initial Consultation",
    body: "We talk through your new kitchen, the space and what's involved before anything is booked in.",
  },
  {
    number: "02",
    title: "Site Survey",
    body: "A visit to measure up, check access and confirm any practical considerations on site.",
  },
  {
    number: "03",
    title: "Fixed Quotation",
    body: "A clear, written quote for the full installation, agreed before work begins.",
  },
  {
    number: "04",
    title: "Installation",
    body: "Your kitchen fitted to a high standard, working efficiently to minimise disruption.",
  },
  {
    number: "05",
    title: "Final Inspection & Handover",
    body: "A full check-through with you once complete, and aftercare if anything needs a second look.",
  },
];

const kitchenBrands = [
  "Howdens",
  "Wren",
  "Magnet",
  "Wickes",
  "B&Q",
  "DIY Kitchens",
  "Benchmarx",
];

const kitchenGalleryImages: GalleryImage[] = [
  { src: "/images/kitchen-gallery/before-and-after-black-anthracite-matt-hertfordshire-lucente.png", alt: "Before and after black anthracite matt handleless kitchen installation in Hertfordshire", caption: "Black Anthracite Matt — Hertfordshire" },
  { src: "/images/kitchen-gallery/before-and-after-black-and-off-white-kitchen-slab-flat-door-easy-clean-goffs-oak.png", alt: "Before and after black and off-white slab flat door easy-clean kitchen in Goffs Oak", caption: "Black & Off-White Slab Door — Goffs Oak" },
  { src: "/images/kitchen-gallery/before-and-after-black-and-white-gloss-kitchen-slab-flat-door-easy-clean-cuffley.png", alt: "Before and after black and white gloss slab flat door easy-clean kitchen in Cuffley", caption: "Black & White Gloss Slab Door — Cuffley" },
  { src: "/images/kitchen-gallery/before-and-after-blue-and-cashmere-wooden-kitchen-doors-hertford-.png", alt: "Before and after blue and cashmere wooden kitchen door installation in Hertford", caption: "Blue & Cashmere Wooden Doors — Hertford" },
  { src: "/images/kitchen-gallery/before-and-after-blue-and-cashmere-wooden-kitchen-doors-hertford-town.png", alt: "Before and after blue and cashmere wooden kitchen doors in Hertford town", caption: "Blue & Cashmere Wooden Doors — Hertford Town" },
  { src: "/images/kitchen-gallery/before-and-after-grey-waltham-abbey-lucente-handle-less-kitchen.png", alt: "Before and after grey Lucente handleless kitchen installation in Waltham Abbey", caption: "Grey Lucente Handleless — Waltham Abbey" },
  { src: "/images/kitchen-gallery/before-and-after-indigo-shaker-door-cheshunt.png", alt: "Before and after indigo shaker door kitchen installation in Cheshunt", caption: "Indigo Shaker Door — Cheshunt" },
  { src: "/images/kitchen-gallery/before-and-after-ivory-shaker-solid-wood-door-hertfordshire-kitchen.png", alt: "Before and after ivory shaker solid wood door kitchen in Hertfordshire", caption: "Ivory Shaker Solid Wood — Hertfordshire" },
  { src: "/images/kitchen-gallery/before-and-after-light-grey-dove-grey-matt-kitchen-.png", alt: "Before and after light grey and dove grey matt kitchen installation", caption: "Light Grey & Dove Grey Matt Kitchen" },
  { src: "/images/kitchen-gallery/before-and-after-light-grey-gloss-kitchen-waltham-abbey.png", alt: "Before and after light grey gloss kitchen installation in Waltham Abbey", caption: "Light Grey Gloss — Waltham Abbey" },
  { src: "/images/kitchen-gallery/before-and-after-luxury-solid-wood-kitchen-cuffley.png", alt: "Before and after luxury solid wood kitchen installation in Cuffley", caption: "Luxury Solid Wood Kitchen — Cuffley" },
  { src: "/images/kitchen-gallery/before-and-after-luxury-solid-wood-kitchen-indigo-and-ivory-cream-hertfordshire.png", alt: "Before and after luxury solid wood indigo and ivory cream kitchen in Hertfordshire", caption: "Luxury Solid Wood Indigo & Ivory — Hertfordshire" },
  { src: "/images/kitchen-gallery/before-and-after-shaker-solid-wood-italian-doors-hertfordshire.png", alt: "Before and after shaker solid wood Italian door kitchen in Hertfordshire", caption: "Shaker Solid Wood Italian Doors — Hertfordshire" },
  { src: "/images/kitchen-gallery/before-and-after-sky-blue-slab-flat-door-hoddesdon.png", alt: "Before and after sky blue slab flat door kitchen installation in Hoddesdon", caption: "Sky Blue Slab Door — Hoddesdon" },
  { src: "/images/kitchen-gallery/before-and-after-white-gloss-goffs-oak-stamford-lucente.png", alt: "Before and after white gloss Stamford Lucente kitchen in Goffs Oak", caption: "White Gloss Lucente — Goffs Oak" },
  { src: "/images/kitchen-gallery/before-and-after-white-gloss-kitchen-handle-less-lighting-under-worktop-waltham-cross-.png", alt: "Before and after white gloss handleless kitchen with under-worktop lighting in Waltham Cross", caption: "White Gloss Handleless & Lighting — Waltham Cross" },
  { src: "/images/kitchen-gallery/before-and-after-wood-grain-and-indigo-waltham-cross.png", alt: "Before and after wood grain and indigo kitchen installation in Waltham Cross", caption: "Wood Grain & Indigo — Waltham Cross" },
  { src: "/images/kitchen-gallery/before-and-after-dark-grey-gloss-slab-flat-door.png", alt: "Before and after dark grey gloss slab flat door kitchen installation", caption: "Dark Grey Gloss Slab Door" },
  { src: "/images/kitchen-gallery/before-and-after-flat-slab-door-off-white-matt-goffs-oak.png", alt: "Before and after flat slab door off-white matt kitchen in Goffs Oak", caption: "Off-White Matt Slab Door — Goffs Oak" },
  { src: "/images/kitchen-gallery/before-and-after-flat-slab-door-off-white-matt-hertfordshire.png", alt: "Before and after flat slab door off-white matt kitchen in Hertfordshire", caption: "Off-White Matt Slab Door — Hertfordshire" },
  { src: "/images/kitchen-gallery/before-and-after-handless-kitchen-j-pull-cheshunt.png", alt: "Before and after handleless J-pull kitchen installation in Cheshunt", caption: "Handleless J-Pull Kitchen — Cheshunt" },
  { src: "/images/kitchen-gallery/before-and-after-sage-green-shaker-door.png", alt: "Before and after sage green shaker door kitchen installation", caption: "Sage Green Shaker Door" },
  { src: "/images/kitchen-gallery/before-and-after-white-gloss-kitchen-cheshunt.png", alt: "Before and after white gloss kitchen installation in Cheshunt", caption: "White Gloss Kitchen — Cheshunt" },
  { src: "/images/kitchen-design/cambridge-indigo-kitchen.jpg", alt: "Cambridge indigo kitchen installation", caption: "Cambridge Indigo Kitchen" },
  { src: "/images/kitchen-design/stratto-vero-white-kitchen.jpg", alt: "Stratto vero white kitchen installation", caption: "Stratto Vero White Kitchen" },
  { src: "/images/kitchen-design/stratto-vero-white-rosegold-kitchen.jpg", alt: "Stratto vero white and rose gold kitchen installation", caption: "Stratto Vero White & Rose Gold Kitchen" },
  { src: "/images/kitchen-design/vivo-gloss-ivory-vero-cameo-kitchen.jpg", alt: "Vivo gloss ivory and vero cameo kitchen installation", caption: "Vivo Gloss Ivory & Vero Cameo Kitchen" },
  { src: "/images/kitchen-design/vivo-gloss-vero-dustgrey-kitchen.jpg", alt: "Vivo gloss vero dust grey kitchen installation", caption: "Vivo Gloss Vero Dust Grey Kitchen" },
  { src: "/images/kitchen-design/vivo-vero-smoke-blue-kitchen.jpg", alt: "Vivo vero smoke blue kitchen installation", caption: "Vivo Vero Smoke Blue Kitchen" },
  { src: "/images/kitchen-design/windsor-sage-green-kitchen.jpg", alt: "Windsor sage green kitchen installation", caption: "Windsor Sage Green Kitchen" },
  { src: "/images/kitchen-design/windsor-white-oak-kitchen.jpg", alt: "Windsor white oak kitchen installation", caption: "Windsor White Oak Kitchen" },
];

const kitchenFaqs: FaqItem[] = [
  {
    question: "Do you provide free quotations?",
    answer:
      "Yes. We provide a free quotation following a site visit, with no obligation to go ahead.",
  },
  {
    question: "Do you remove old kitchens?",
    answer:
      "Yes, removal of your existing kitchen can be included as part of the job — see Optional Extras for pricing.",
  },
  {
    question: "Can you install customer-supplied kitchens?",
    answer:
      "Yes. Whether your kitchen is from Howdens, Wren, Magnet, Wickes, B&Q, DIY Kitchens, Benchmarx or elsewhere, we're happy to install kitchens you've already purchased.",
  },
  {
    question: "Do you organise plumbers and electricians?",
    answer:
      "We handle the core plumbing and electrical connections as part of the installation. Anything beyond that, such as new circuits, can be arranged and quoted for separately.",
  },
  {
    question: "How long does a kitchen installation take?",
    answer:
      "It depends on the size and complexity of the kitchen — we'll give you a clear timescale as part of your fixed quotation.",
  },
  {
    question: "Are you insured?",
    answer:
      "Yes. Every job we carry out is covered by public liability insurance.",
  },
];

export default function KitchenInstallationPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 15% 15%, rgba(242,102,11,0.16), transparent 55%)",
          }}
          aria-hidden="true"
        />
        <Container className="relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Kitchen Installation
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-paper sm:text-5xl">
              Professional Kitchen Installation in Hertfordshire
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-paper/75 sm:text-lg">
              Expert kitchen fitting services from Zebra Trades. With{" "}
              {siteConfig.yearsTrading} years of trade experience, we provide
              high-quality kitchen installations with transparent pricing and
              professional workmanship.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={`/contact?service=${encodeURIComponent(SERVICE_LABEL)}`} variant="primary">
                Request a Quote
              </Button>
              <Button href={siteConfig.phoneHref} variant="ghost-light">
                Call {siteConfig.phoneDisplay}
              </Button>
            </div>
          </div>

          <Docket />
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Gallery"
            title="Kitchen Installation Gallery"
            subtitle="Real kitchen transformations completed by Zebra Trades."
          />
          <div className="mt-10">
            <Gallery images={kitchenGalleryImages} />
          </div>
        </Container>
      </section>

      <SectionNavPrompt
        heading="Kitchen Packages Starting From £1,795"
        description="Compare package options, installation services and upgrades."
        buttonLabel="View Kitchen Packages ↓"
        targetId="kitchen-packages"
      />

      <section className="bg-chalk">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Why Zebra Trades"
            title="Why Choose Zebra Trades?"
            subtitle="The same approach on every kitchen, whatever the size."
          />
          <div className="mt-10">
            <ValueProps />
          </div>
        </Container>
      </section>

      <section id="kitchen-packages" className="bg-paper">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Guide Prices"
            title="Kitchen Installation Packages"
            subtitle="A starting point for budgeting — your fixed quote will reflect your exact kitchen and layout."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {packages.map((pkg) => (
              <PackageCard key={pkg.name} pkg={pkg} />
            ))}
          </div>
          <p className="mt-8 rounded-sm border border-line bg-chalk px-5 py-4 text-sm text-slate">
            Prices shown are guide prices only. A fixed quotation will always
            be provided following a site visit.
          </p>
        </Container>
      </section>

      <section className="bg-chalk">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Add-Ons"
            title="Optional Extras"
            subtitle="Common additions to a kitchen installation, priced separately from the core package."
          />
          <div className="mt-10">
            <PricingCategoryCard category={optionalExtras} />
          </div>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="How It Works"
            title="Our Installation Process"
            subtitle="A clear, straightforward path from first enquiry to finished kitchen."
          />
          <div className="mt-10">
            <ProcessSteps steps={installSteps} />
          </div>
        </Container>
      </section>

      <section className="bg-chalk">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Any Supplier"
            title="Kitchens We Install"
            subtitle="We fit kitchens supplied by all the major retailers, as well as bespoke and independent suppliers."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {kitchenBrands.map((brand) => (
              <span
                key={brand}
                className="rounded-full border border-line bg-paper px-4 py-2 font-mono text-sm text-ink"
              >
                {brand}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <CoverageArea background="paper" />

      <section className="bg-chalk">
        <Container className="py-16 sm:py-20">
          <SectionHeading eyebrow="Good To Know" title="Kitchen Installation FAQs" />
          <div className="mt-10">
            <Faq faqs={kitchenFaqs} />
          </div>
        </Container>
      </section>

      <CtaBand
        title="Ready For Your New Kitchen?"
        subtitle="Contact Zebra Trades today for a free quotation and expert installation service."
        buttonLabel="Request a Quote"
        quoteHref={`/contact?service=${encodeURIComponent(SERVICE_LABEL)}`}
      />
    </>
  );
}
