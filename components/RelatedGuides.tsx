import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { guides } from "@/data/guides";

export default function RelatedGuides({
  category,
  background = "chalk",
  limit = 3,
}: {
  category: string;
  background?: "chalk" | "paper";
  limit?: number;
}) {
  const related = guides
    .filter((g) => g.category === category)
    .slice(0, limit);

  if (related.length === 0) return null;

  const bg = background === "chalk" ? "bg-chalk" : "bg-paper";

  return (
    <section className={bg}>
      <Container className="py-16 sm:py-20">
        <SectionHeading
          eyebrow="Advice & Guides"
          title="Helpful Reading Before You Book"
          subtitle="Free guides from the Zebra Trades team — honest advice, no fluff."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="group flex flex-col rounded-sm border border-line bg-paper p-6 transition-shadow hover:border-accent hover:shadow-md"
            >
              <p className="font-mono text-[10px] uppercase tracking-widest text-accent">
                {guide.readingTime} min read
              </p>
              <h3 className="mt-2 font-display text-base font-bold uppercase leading-tight tracking-tight text-ink group-hover:text-accent-dark">
                {guide.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate">
                {guide.excerpt}
              </p>
              <span className="mt-5 flex items-center gap-1 font-mono text-xs font-semibold uppercase tracking-widest text-accent-dark">
                Read guide <ArrowRight className="size-3" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href={`/guides?category=${category}`}
            className="inline-block font-mono text-xs font-semibold uppercase tracking-widest text-accent-dark underline-offset-4 hover:underline"
          >
            View all guides in this category →
          </Link>
        </div>
      </Container>
    </section>
  );
}
