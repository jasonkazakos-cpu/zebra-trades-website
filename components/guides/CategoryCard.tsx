import Link from "next/link";
import type { GuideCategory } from "@/data/guides";

type Props = { category: GuideCategory; count: number };

export default function CategoryCard({ category, count }: Props) {
  return (
    <Link
      href={`/guides?category=${category.slug}#browse`}
      className="group flex flex-col gap-3 rounded-sm border border-line bg-paper p-5 transition-shadow hover:shadow-md"
    >
      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate">
        {count} {count === 1 ? "guide" : "guides"}
      </p>
      <h3 className="font-display text-sm font-bold uppercase tracking-tight text-ink transition-colors group-hover:text-accent-dark">
        {category.label}
      </h3>
      <p className="text-sm leading-relaxed text-slate">{category.description}</p>
      <span className="mt-auto font-mono text-xs font-semibold uppercase tracking-widest text-accent-dark">
        Browse &rarr;
      </span>
    </Link>
  );
}
