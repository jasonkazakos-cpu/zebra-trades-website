import type { Metadata } from "next";
import { Suspense } from "react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";
import CategoryCard from "@/components/guides/CategoryCard";
import GuidesGrid from "@/components/guides/GuidesGrid";
import { guides, categories } from "@/data/guides";

export const metadata: Metadata = {
  title: "Advice & Guides | Zebra Trades",
  description:
    "Practical advice on home maintenance, kitchen fitting, plumbing, appliance installation and more — from the team at Zebra Trades in Cheshunt, Hertfordshire.",
  keywords: [
    "Home Maintenance Advice Hertfordshire",
    "Handyman Tips Cheshunt",
    "Kitchen Fitting Guide",
    "Plumbing Advice Hertfordshire",
    "Appliance Installation Guide",
  ],
};

export default function GuidesPage() {
  const counts: Record<string, number> = {};
  for (const g of guides) {
    counts[g.category] = (counts[g.category] ?? 0) + 1;
  }

  return (
    <>
      <section className="relative overflow-hidden bg-ink">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(circle at 80% 15%, rgba(47,155,214,0.16), transparent 55%)" }}
          aria-hidden="true"
        />
        <Container className="relative py-16 sm:py-20">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Advice &amp; Guides
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-paper sm:text-5xl">
            Practical Home Advice From Zebra Trades
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-paper/75 sm:text-lg">
            Honest guides on costs, planning, DIY vs trade and what to expect
            from every job — written by the people who do the work.
          </p>
        </Container>
      </section>

      <section className="bg-chalk">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Browse By Topic"
            title="Guide Categories"
            subtitle="Choose a topic to filter guides, or search below."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {categories.map((cat) => (
              <CategoryCard key={cat.slug} category={cat} count={counts[cat.slug] ?? 0} />
            ))}
          </div>
        </Container>
      </section>

      <section id="browse" className="bg-paper" style={{ scrollMarginTop: "80px" }}>
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="All Guides"
            title="Search & Browse"
          />
          <div className="mt-10">
            <Suspense fallback={null}>
              <GuidesGrid guides={guides} />
            </Suspense>
          </div>
        </Container>
      </section>

      <CtaBand
        title="Got a Job You'd Like Quoted?"
        subtitle="All our pricing is transparent — get in touch for a free, no-obligation quote on any job."
      />
    </>
  );
}
