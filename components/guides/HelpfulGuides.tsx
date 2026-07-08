import Link from "next/link";
import { guides } from "@/data/guides";
import GuideCard from "./GuideCard";

type Props = { category?: string; limit?: number };

export default function HelpfulGuides({ category, limit = 3 }: Props) {
  const filtered = category
    ? guides.filter((g) => g.category === category)
    : guides;

  const shown = filtered.slice(0, limit);

  if (shown.length === 0) return null;

  return (
    <div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((guide) => (
          <GuideCard key={guide.slug} guide={guide} />
        ))}
      </div>
      <div className="mt-6 text-center">
        <Link
          href={category ? `/guides?category=${category}` : "/guides"}
          className="font-mono text-xs font-semibold uppercase tracking-widest text-accent-dark hover:underline"
        >
          Browse All Guides &rarr;
        </Link>
      </div>
    </div>
  );
}
