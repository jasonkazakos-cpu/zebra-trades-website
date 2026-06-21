import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Docket from "@/components/Docket";
import Button from "@/components/Button";
import ValueProps from "@/components/ValueProps";
import CoverageArea from "@/components/CoverageArea";
import PackageCard, { type Package } from "@/components/PackageCard";
import PricingCategoryCard, {
  type PricingCategory,
} from "@/components/PricingCategoryCard";
import Faq from "@/components/Faq";
import Testimonials from "@/components/Testimonials";
import CtaBand from "@/components/CtaBand";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Handyman Services & Pricing in Cheshunt & Hertfordshire",
  description:
    "Trusted handyman services in Cheshunt and Hertfordshire — door fitting, TV wall mounting, flat-pack assembly and more. Fixed-price visits from £75, free quotes, fully insured.",
  keywords: [
    "Handyman Cheshunt",
    "Handyman Hertfordshire",
    "TV Wall Mounting Cheshunt",
    "Flat Pack Assembly Cheshunt",
    "Door Fitting Cheshunt",
  ],
};

const packages: Package[] = [
  {
    name: "Minimum Visit Charge",
    price: "From £75",
    duration: "Single Job",
    bestFor: "Best for one quick job that needs sorting",
    description:
      "Ideal for one task on its own — a door handle replacement, a TV mount, or a quick repair.",
    features: [
      "Ideal for a single, straightforward task",
      "No job too small",
      "Same fixed-price approach as every other visit",
    ],
  },
  {
    name: "Half Day Home Maintenance Visit",
    price: "£195",
    duration: "Around Half A Day",
    bestFor: "Best for working through several smaller jobs",
    description:
      "Book a Half Day Home Maintenance Visit and complete multiple jobs in one appointment — flat-pack assembly, shelving, blind fitting or a few repairs around the house.",
    features: [
      "Make a list — we'll work through as much as we can",
      "Great for a backlog of odd jobs around the house",
      "One tradesperson, one invoice",
    ],
  },
  {
    name: "Full Day Home Maintenance Visit",
    price: "£345",
    duration: "A Full Working Day",
    bestFor: "Best for bigger projects or a long task list",
    description:
      "Book a Full Day Home Maintenance Visit for larger job lists and property maintenance projects — multiple door fittings, a loft ladder installation, or a full run of garden and maintenance jobs.",
    features: [
      "A full day on site, start to finish",
      "Ideal for larger or more involved jobs",
      "Best value when there's plenty to get through",
    ],
  },
];

const categories: PricingCategory[] = [
  {
    title: "Carpentry & Repairs",
    icon: "Hammer",
    items: [
      { name: "Internal Door Fitting", price: "From £95" },
      { name: "Fire Door Fitting", price: "From £150" },
      { name: "Door Trimming", price: "From £50" },
      { name: "Door Handle Replacement", price: "From £45" },
      { name: "Lock Replacement", price: "From £60" },
      { name: "Mortice Lock Installation", price: "From £75" },
      { name: "Skirting Board Repairs", price: "From £85" },
      { name: "Skirting Board Installation", price: "From £8 per metre" },
      { name: "Architrave Repairs", price: "From £85" },
      { name: "Shelving Installation", price: "From £75" },
      { name: "Floating Shelf Installation", price: "From £55" },
      { name: "Loft Boarding Repairs", price: "From £140" },
      { name: "Loft Ladder Installation", price: "From £180" },
      { name: "Flat Pack Furniture Assembly", price: "From £70" },
      { name: "Wardrobe Assembly", price: "From £80" },
      { name: "Curtain Pole Installation", price: "From £65" },
      { name: "Blind Installation", price: "From £75" },
    ],
  },
  {
    title: "TV & Smart Home",
    icon: "PlugZap",
    items: [
      { name: "TV Wall Mounting up to 55\"", price: "From £95" },
      { name: "TV Wall Mounting 65\"+", price: "From £120" },
      { name: "Soundbar Installation", price: "From £55" },
      { name: "Cable Concealment", price: "From £40" },
      { name: "Picture & Mirror Hanging", price: "From £50" },
      { name: "Large Mirror Installation", price: "From £75" },
      { name: "Smart Doorbell Installation", price: "From £75" },
      { name: "Smart Thermostat Installation", price: "From £90" },
      { name: "Security Camera Installation", price: "From £95 per camera" },
      { name: "Wi-Fi Access Point Installation", price: "From £80" },
    ],
  },
  {
    title: "Garden & Outdoor",
    icon: "Umbrella",
    items: [
      { name: "Garden Gate Installation", price: "From £140" },
      { name: "Fence Panel Replacement", price: "From £90" },
      { name: "Fence Post Replacement", price: "From £120" },
      { name: "Shed Assembly", price: "From £180" },
      { name: "Pergola Assembly", price: "From £250" },
      { name: "Decking Repairs", price: "From £120" },
      { name: "Outside Tap Installation", price: "From £85" },
    ],
  },
  {
    title: "Home Maintenance",
    icon: "Wrench",
    items: [
      { name: "Silicone Replacement (Baths & Showers)", price: "From £65" },
      { name: "Draught Proofing Doors & Windows", price: "From £75" },
      { name: "Furniture Repairs", price: "From £60" },
      { name: "Child Safety Fittings", price: "From £60" },
      { name: "Smoke Alarm Installation", price: "From £45" },
      { name: "Carbon Monoxide Alarm Installation", price: "From £45" },
      { name: "Key Safe Installation", price: "From £55" },
      { name: "Grab Rail Installation", price: "From £65" },
    ],
  },
];

export default function HandymanPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 85% 10%, rgba(242,102,11,0.16), transparent 55%)",
          }}
          aria-hidden="true"
        />
        <Container className="relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Handyman Services
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-paper sm:text-5xl">
              Handyman Services In {siteConfig.baseTown} &amp; {siteConfig.county}
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-paper/75 sm:text-lg">
              Door fitting, TV wall mounting, flat-pack assembly and more —
              from a single odd job to a full day working through your list,
              every visit priced clearly upfront.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact?service=Handyman" variant="primary">
                Get a Free Quote
              </Button>
              <Button href={siteConfig.phoneHref} variant="ghost-light">
                Call Now &middot; {siteConfig.phoneDisplay}
              </Button>
            </div>
          </div>

          <Docket />
        </Container>
      </section>

      <section className="border-y border-accent/20 bg-accent-soft">
        <Container className="flex flex-col items-center gap-4 py-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="font-display text-lg font-bold uppercase tracking-tight text-ink sm:text-xl">
            Got A List Of Small Jobs? Combine Them Into One Visit.
          </p>
          <Button href="#packages" variant="secondary" className="shrink-0">
            View Packages
          </Button>
        </Container>
      </section>

      <section className="bg-paper" id="packages">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Choose Your Visit"
            title="Simple, Fixed-Price Packages"
            subtitle="However big or small the job, you'll know the price before we start."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {packages.map((pkg) => (
              <PackageCard key={pkg.name} pkg={pkg} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-chalk">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Why Zebra Trades"
            title="Why Choose Zebra Trades?"
            subtitle="The same approach on every job, whatever the size."
          />
          <div className="mt-10">
            <ValueProps />
          </div>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Detailed Pricing"
            title="Handyman Jobs & Prices"
            subtitle="A guide price for common jobs — get in touch for anything not listed below."
          />
          <div className="mt-10 space-y-6">
            {categories.map((category) => (
              <PricingCategoryCard key={category.title} category={category} />
            ))}
          </div>
        </Container>
      </section>

      <CoverageArea background="chalk" />

      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <SectionHeading eyebrow="Good To Know" title="Handyman FAQs" />
          <div className="mt-10">
            <Faq />
          </div>
        </Container>
      </section>

      <section className="bg-chalk">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="What Customers Say"
            title="Trusted By Homeowners Locally"
            subtitle="Example reviews — a flavour of the feedback we aim for on every job."
          />
          <div className="mt-10">
            <Testimonials />
          </div>
        </Container>
      </section>

      <CtaBand
        title="Ready To Book Your Visit?"
        subtitle="Need several jobs completed? Book a Half Day or Full Day Home Maintenance Visit and get everything done in one appointment."
        buttonLabel="Book Your Visit"
      />
    </>
  );
}
