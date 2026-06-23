import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import PergolaCalculator from "@/components/PergolaCalculator";
import VideoGallery, { type VideoItem } from "@/components/VideoGallery";
import PrintButton from "@/components/PrintButton";
import Gallery, { type GalleryImage } from "@/components/Gallery";
import ValueProps from "@/components/ValueProps";
import SectionNavPrompt from "@/components/SectionNavPrompt";
import CoverageArea from "@/components/CoverageArea";
import CtaBand from "@/components/CtaBand";
import { siteConfig } from "@/data/site";
import { GALLERY_ITEMS, BASE_PRICES } from "@/data/pergola-prices";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Pergolas & Gazebos in Hertfordshire",
  description:
    "Pergola and gazebo installation across Cheshunt and Hertfordshire. Timber, aluminium and louvered roof structures built to a high standard with transparent, fixed pricing.",
  keywords: [
    "Pergola Cheshunt",
    "Pergola Hertfordshire",
    "Pergola Installation",
    "Garden Pergola",
    "Louvered Roof Pergola Hertfordshire",
    "Gazebo Installation Hertfordshire",
    "Wall Mounted Pergola",
    "Glass Room",
    "Sliding Glass Doors",
    "Outdoor Living",
    "Aluminium Pergola",
    "Pergola Installation Hertfordshire",
    "Pergola Installation Cheshunt",
    "Outdoor Room Installation",
  ],
};

const SERVICE = "Pergolas & Gazebos";
const quoteHref = `/contact?service=${encodeURIComponent(SERVICE)}`;

// Add a YouTube video ID to each "id" field below to bring these online —
// leave blank to keep showing a placeholder card.
const showcaseVideos: VideoItem[] = [
  { id: "QMhN6MNVpk8", title: "Pergola Showcase Reel 1" },
  { id: "sV_4PPBP2z0", title: "Pergola Showcase Reel 2" },
  { id: "ovUn458YvX8", title: "Pergola Showcase Reel 3" },
  { id: "2nRqZhW7LAg", title: "Pergola Showcase Reel 4" },
  { id: "UPO0gwE6GTA", title: "Pergola Showcase Reel 5" },
  { id: "jZ9gmZKRIt4", title: "Pergola Showcase Reel 6" },
  { id: "8TeOr_Od2z0", title: "Pergola Showcase Reel 7" },
];

const projectImages: GalleryImage[] = [
  { src: "/images/pergolas/aluminium-pergola-01.jpg", alt: "Bespoke aluminium pergola installation in Hertfordshire", caption: "Bespoke Aluminium Pergola — Hertfordshire" },
  { src: "/images/pergolas/aluminium-pergola-02.jpg", alt: "Aluminium pergola installation in Hertford", caption: "Aluminium Pergola Installation — Hertford" },
  { src: "/images/pergolas/aluminium-pergola-03.jpg", alt: "Bespoke aluminium pergola installation in Cheshunt", caption: "Bespoke Aluminium Pergola — Cheshunt" },
  { src: "/images/pergolas/aluminium-pergola-04.jpg", alt: "Bespoke aluminium pergola installation in Waltham Abbey", caption: "Bespoke Aluminium Pergola — Waltham Abbey" },
  { src: "/images/pergolas/aluminium-pergola-05.jpg", alt: "Aluminium pergola installation in Broxbourne", caption: "Aluminium Pergola Installation — Broxbourne" },
  { src: "/images/pergolas/aluminium-pergola-06.jpg", alt: "Aluminium pergola installation in Cheshunt", caption: "Aluminium Pergola Installation — Cheshunt" },
  { src: "/images/pergolas/aluminium-pergola-07.jpg", alt: "Aluminium pergola installation in Cheshunt", caption: "Aluminium Pergola Installation — Cheshunt" },
  { src: "/images/pergolas/aluminium-pergola-08.jpg", alt: "Aluminium pergola installation in Cuffley", caption: "Aluminium Pergola Installation — Cuffley" },
  { src: "/images/pergolas/aluminium-pergola-09.jpg", alt: "Aluminium pergola installation in Goffs Oak", caption: "Aluminium Pergola Installation — Goffs Oak" },
  { src: "/images/pergolas/aluminium-pergola-10.jpg", alt: "Aluminium pergola installation in Waltham Abbey", caption: "Aluminium Pergola Installation — Waltham Abbey" },
  { src: "/images/pergolas/aluminium-pergola-11.jpg", alt: "Aluminium pergola installation in Hertfordshire", caption: "Aluminium Pergola Installation — Hertfordshire" },
];

const PREMIUM_SERVICE_LABEL = "Wall Mounted Pergola With Glass Sliding Doors";
const premiumQuoteHref = `/contact?service=${encodeURIComponent(PREMIUM_SERVICE_LABEL)}`;

const glassPergolaBenefits = [
  "Year-round outdoor living",
  "Sliding glass doors for weather protection",
  "Modern aluminium construction",
  "Low maintenance and long lifespan",
  "Increased usable living space",
  "Custom sizes available",
  "Optional LED lighting upgrades",
  "Optional privacy screens",
  "Suitable for patios, terraces and garden entertainment areas",
];

const glassPergolaFeatures = [
  "Powder coated aluminium frame",
  "Polycarbonate or glass roof options",
  "Sliding glass door systems",
  "Optional side glazing",
  "Optional integrated lighting",
  "Optional privacy panels",
  "Bespoke sizing available",
];

const glassPergolaGalleryImages: GalleryImage[] = [
  { src: "/images/pergolas/wall-mounted-pergola-glass-sliding-doors-hertfordshire.jpg", alt: "Wall mounted pergola with glass sliding doors in Hertfordshire", caption: "Wall Mounted Pergola With Glass Sliding Doors — Hertfordshire" },
  { src: "/images/pergolas/aluminium-pergola-wall-mounted-large-cuffley.jpg", alt: "Wall mounted aluminium pergola installation in Cuffley", caption: "Wall Mounted Aluminium Pergola — Cuffley" },
  { src: "/images/pergolas/aluminium-pergola-01.jpg", alt: "Bespoke aluminium pergola installation in Hertfordshire", caption: "Bespoke Aluminium Pergola — Hertfordshire" },
  { src: "/images/pergolas/aluminium-pergola-03.jpg", alt: "Bespoke aluminium pergola installation in Cheshunt", caption: "Bespoke Aluminium Pergola — Cheshunt" },
  { src: "/images/pergolas/aluminium-pergola-05.jpg", alt: "Aluminium pergola installation in Broxbourne", caption: "Aluminium Pergola Installation — Broxbourne" },
  { src: "/images/pergolas/aluminium-pergola-09.jpg", alt: "Aluminium pergola installation in Goffs Oak", caption: "Aluminium Pergola Installation — Goffs Oak" },
  { src: "/images/pergolas/aluminium-pergola-11.jpg", alt: "Aluminium pergola installation in Hertfordshire", caption: "Aluminium Pergola Installation — Hertfordshire" },
];

export default function PergolasPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(circle at 80% 0%, rgba(76,154,86,0.18), transparent 55%)" }}
          aria-hidden="true"
        />
        <Container className="relative py-16 sm:py-20 lg:py-24">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Pergolas & Gazebos
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-paper sm:text-5xl lg:text-6xl">
            Pergolas & Gazebos in Hertfordshire
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-paper/75 sm:text-lg">
            Timber, aluminium and louvered roof structures built to a high
            standard — designed to transform your outdoor space, with a fixed
            price agreed before we start.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={quoteHref} variant="primary">
              Request a Site Survey
            </Button>
            <Button href={siteConfig.phoneHref} variant="ghost-light">
              Call {siteConfig.phoneDisplay}
            </Button>
          </div>
        </Container>
      </section>

      {/* Video Showcase */}
      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Watch Our Work"
            title="Pergola Showcase Reels"
            subtitle="See our pergolas in action — click any video to play."
          />
          <div className="mt-10">
            <VideoGallery videos={showcaseVideos} />
          </div>
        </Container>
      </section>

      {/* Calculator */}
      <section className="bg-chalk">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Price Guide"
            title="Get A Rough Price Estimate"
            subtitle="Select your pergola type, size and extras for an instant guide price — no commitment needed."
          />
          <div className="mt-10">
            <PergolaCalculator />
          </div>
          <div className="mt-8 rounded-sm border border-line bg-paper p-6 sm:flex sm:items-center sm:justify-between sm:gap-8">
            <div>
              <p className="font-display text-lg font-bold uppercase tracking-tight text-ink">
                Want an accurate price?
              </p>
              <p className="mt-1 text-sm text-slate">
                Book a free site survey and we&apos;ll provide a clear fixed quotation for your pergola or gazebo installation.
              </p>
            </div>
            <div className="mt-4 flex shrink-0 flex-col gap-2 sm:mt-0 sm:flex-row">
              <Link
                href={quoteHref}
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-accent px-5 py-2.5 text-sm font-semibold text-paper hover:bg-accent-dark"
              >
                Request a Site Survey
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Button href={siteConfig.phoneHref} variant="ghost-dark">
                Call {siteConfig.phoneDisplay}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Popular Options Gallery */}
      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Popular Options"
            title="Popular Pergola Options"
            subtitle="A selection of the pergola and gazebo structures we install across Hertfordshire."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {GALLERY_ITEMS.map((item) => {
              const small = BASE_PRICES[item.typeKey].small;
              const price = item.priceOverride ?? (small !== null ? `From £${small.toLocaleString("en-GB")}` : "Quoted");
              return (
                <div key={item.label} className="group flex flex-col rounded-sm border border-line bg-paper overflow-hidden hover:-translate-y-1 hover:shadow-[0_12px_24px_-12px_rgba(20,20,26,0.25)] transition-all duration-200">
                  <div className="flex aspect-[4/3] items-center justify-center bg-chalk overflow-hidden">
                    {item.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={item.image}
                        alt={item.label}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <svg width="48" height="48" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                        <rect width="40" height="40" rx="6" fill="#e1ddd4" />
                        <path d="M8 28l8-8 5 5 5-7 6 10H8z" fill="#4C9A56" opacity="0.5" />
                        <circle cx="27" cy="14" r="4" fill="#4C9A56" opacity="0.4" />
                      </svg>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display text-lg font-bold uppercase tracking-tight text-ink">
                      {item.label}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">
                      {item.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between gap-3">
                      <span className="font-display text-xl font-bold text-accent">{price}</span>
                      <Link
                        href={`${quoteHref}&type=${encodeURIComponent(item.label)}`}
                        className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 px-4 py-2 text-sm font-semibold text-ink hover:border-accent hover:text-accent transition-colors"
                      >
                        Request Quote
                        <ArrowRight className="size-3.5" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <SectionNavPrompt
        heading="13 Pergola Models Available"
        description="Compare sizes, roof types, colours and features before requesting a quotation."
        buttonLabel="View Comparison Guide ↓"
        targetId="pergola-comparison-guide"
      />

      {/* Pergola Comparison Guide */}
      <section id="pergola-comparison-guide" className="bg-chalk">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Pergola Comparison Guide"
            title="Compare Our Pergola Range"
            subtitle="Compare the main pergola and veranda systems available through Zebra Trades."
          />
          <p className="mt-4 max-w-3xl text-sm text-slate">
            This guide helps customers compare roof types, sizes, colours,
            motorisation options and structural designs across our wall
            mounted and freestanding aluminium pergolas before requesting a
            quotation for pergola installation in Cheshunt and Hertfordshire.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/Zebra_Trades_Full_Veranda_Comparison_Table.pdf"
              className="inline-flex items-center gap-2 rounded-sm bg-accent px-4 py-2.5 text-sm font-semibold text-paper hover:bg-accent-dark transition-colors"
            >
              Download Comparison Guide (PDF)
            </a>
            <PrintButton />
          </div>

          <ul className="mt-6 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
            {[
              "Compare all pergola models in one place",
              "Compare wall mounted and freestanding systems",
              "Compare roof styles including polycarbonate, glass and louvred roofs",
              "View maximum widths and projections",
              "Compare available colour options",
              "See which systems support sliding glass walls",
            ].map((benefit) => (
              <li key={benefit} className="flex items-start gap-2.5 text-sm font-medium text-ink">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" strokeWidth={1.75} aria-hidden="true" />
                {benefit}
              </li>
            ))}
          </ul>

          {/* Horizontally scrollable table */}
          <div className="mt-8 overflow-x-auto rounded-sm border border-line">
            <table className="min-w-full text-xs">
              <thead>
                <tr className="bg-ink text-paper">
                  <th className="sticky left-0 z-10 bg-ink px-4 py-3 text-left font-mono text-[10px] uppercase tracking-wide whitespace-nowrap min-w-[160px]">
                    Feature
                  </th>
                  {[
                    "Nebbiolo","Bosco","Ribolla","Pigato","Pigato Plus",
                    "Giallo","Giallo Plus","Trebbiano","Pinela Glass",
                    "Verdeca","Pinela","Pinela Deluxe","Pinela Deluxe Plus",
                  ].map((p) => (
                    <th key={p} className="px-3 py-3 text-center font-mono text-[10px] uppercase tracking-wide whitespace-nowrap">
                      {p}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-line bg-paper">
                {[
                  { row: "Wall Mounted", values: ["✓","-","✓","✓","✓","✓","✓","✓","✓","✓","✓","✓","✓"] },
                  { row: "Freestanding", values: ["-","-","✓","-","-","-","-","-","✓","-","✓","✓","✓"] },
                  { row: "Roofing: Polycarbonate", values: ["✓","✓","✓","-","-","-","-","-","-","-","-","-","-"] },
                  { row: "Roofing: Other", values: ["-","-","-","Glass","Glass","Glass","Glass","Glass","Glass","PVC Cloth","Louvred","Louvred","Louvred"] },
                  { row: "Motorized SOMFY", values: ["-","-","-","-","-","-","-","-","-","✓","✓","✓","✓"] },
                  { row: "Maximum Width Mm", values: ["6045mm","7060mm+*","6060mm","7060mm+*","7060mm+*","7060mm+*","7060mm+*","6806mm","6980mm+*","6000mm","3500mm+*","4000mm+*","6980mm+*"] },
                  { row: "Maximum Projection Mm", values: ["3500mm","6000mm","4000mm","6000mm","4000mm","6000mm","4000mm","4482mm","4500mm+*","4000mm","4947mm+*","6078mm+*","4500mm+*"] },
                  { row: "Maximum Span On Two Posts Mm", values: ["4000mm","4000mm","4000mm","4000mm","7000mm","6000mm","7000mm","6806mm","6980mm","4000mm","4947mm","6078mm","6980mm"] },
                  { row: "Available RAL Colours", values: ["RAL7024/9001","RAL7024/9001/9016/9005","RAL7024/9005","RAL7024/9001/9016/9005","RAL7024/9016/9005","RAL7024/9001/9016/9005","RAL7024/9016/9005","RAL7024/9016/9005","RAL7024/9016/9005","RAL7024","RAL7024","RAL7024","RAL7024/9016/9005"] },
                  { row: "Design Gutter", values: ["Half-round","Round/Classic","Round/Classic","Round/Classic","Round/Classic Plus","Square","Square Plus","Square","Square","Square","Square","Square","Square"] },
                  { row: "Design Posts", values: ["Square","Square/Half-round","Square","Square/Half-round","Square/Half-round","Rectangular","Rectangular/Square","Square","Square","Rectangular","Square","Square","Square"] },
                  { row: "Compatible With Sliding Glass Walls", values: Array(13).fill("✓") },
                ].map(({ row, values }, ri) => (
                  <tr key={row} className={ri % 2 === 0 ? "bg-paper" : "bg-chalk/50"}>
                    <td className="sticky left-0 z-10 bg-inherit px-4 py-2.5 font-medium text-ink whitespace-nowrap border-r border-line">
                      {row}
                    </td>
                    {values.map((v, ci) => (
                      <td key={ci} className={`px-3 py-2.5 text-center whitespace-nowrap ${v === "✓" ? "text-accent font-bold" : "text-ink-soft"}`}>
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-xs text-slate">
            *Multiple systems can be linked together to achieve larger
            widths. Final suitability depends on product specification, site
            conditions and survey requirements.
          </p>
        </Container>
      </section>

      {/* Premium Wall Mounted Pergola With Glass Sliding Doors */}
      <section className="bg-chalk">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Premium Product"
            title="Wall Mounted Pergola With Glass Sliding Doors"
            subtitle="Create an outdoor room that can be enjoyed throughout the year."
          />
          <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent-soft px-5 py-2.5 font-display text-lg font-bold uppercase tracking-tight text-accent-dark sm:text-xl">
            £11,995–£17,995 Installed
          </p>
          <div className="mt-10 overflow-hidden rounded-sm border border-line">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/pergolas/wall-mounted-pergola-glass-sliding-doors-hertfordshire.jpg"
              alt="Wall mounted pergola with glass sliding doors"
              loading="lazy"
              className="aspect-[16/8] w-full object-cover sm:aspect-[16/6]"
            />
          </div>
          <div className="mx-auto mt-8 max-w-3xl space-y-4 text-sm leading-relaxed text-slate sm:text-base">
            <p>
              Our premium wall mounted pergolas combine a robust aluminium
              structure with sliding glass doors to create a stylish and
              sheltered outdoor living space.
            </p>
            <p>
              Perfect for entertaining, outdoor dining, hot tubs, garden
              lounges and year-round enjoyment.
            </p>
            <p>
              The system is fixed directly to the property and can be
              customised with glass walls, privacy screens, lighting and
              heating options.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Key Benefits"
            title="Why Choose A Glass-Doored Pergola?"
          />
          <ul className="mt-10 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {glassPergolaBenefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-2.5 text-sm font-medium text-ink">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" strokeWidth={1.75} aria-hidden="true" />
                {benefit}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-chalk">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Specification"
            title="Features"
            subtitle="Every glass-doored pergola is built around this core specification."
          />
          <ul className="mt-10 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {glassPergolaFeatures.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5 text-sm font-medium text-ink">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" strokeWidth={1.75} aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Gallery"
            title="Glass-Doored Pergola Installations"
            subtitle="A selection of our aluminium pergola installations, including this glass sliding door system."
          />
          <div className="mt-10">
            <Gallery images={glassPergolaGalleryImages} />
          </div>
        </Container>
      </section>

      <CtaBand
        title="Ready To Transform Your Outdoor Space?"
        subtitle="Contact Zebra Trades today for a free quotation and design consultation."
        buttonLabel="Request a Free Quote"
        quoteHref={premiumQuoteHref}
      />

      {/* Real Project Gallery */}
      <section className="bg-chalk">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Recent Installations"
            title="Pergola Project Gallery"
            subtitle="A selection of aluminium pergola installations completed across Hertfordshire."
          />
          <div className="mt-10">
            <Gallery images={projectImages} />
          </div>
        </Container>
      </section>

      {/* Why Zebra Trades */}
      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Why Zebra Trades"
            title="Why Choose Zebra Trades?"
            subtitle="The same high standard on every structure we build."
          />
          <div className="mt-10">
            <ValueProps />
          </div>
        </Container>
      </section>

      <CoverageArea background="paper" />

      <CtaBand
        title="Ready To Transform Your Garden?"
        subtitle="Book a free site survey and get a clear fixed quotation for your pergola or gazebo."
        buttonLabel="Request a Site Survey"
        quoteHref={quoteHref}
      />
    </>
  );
}
