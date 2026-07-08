import Link from "next/link";
import type { Guide } from "@/data/guides";

type Props = { guide: Guide };

export default function GuideCard({ guide }: Props) {
  return (
    <Link
      href={`/guides/${guide.slug}`}
      className="group flex flex-col rounded-sm border border-line bg-paper transition-shadow hover:shadow-md"
    >
      <div className="flex h-36 items-center justify-center rounded-t-sm bg-accent-soft">
        <span className="font-display text-xs font-bold uppercase tracking-widest text-accent-dark opacity-60">
          {guide.category.replace(/-/g, " ")}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate">
          {guide.category.replace(/-/g, " ")} &middot; {guide.readingTime} min read
        </p>
        <h3 className="font-display text-base font-bold uppercase leading-tight tracking-tight text-ink transition-colors group-hover:text-accent-dark">
          {guide.title}
        </h3>
        <p className="mt-1 flex-1 text-sm leading-relaxed text-slate">{guide.excerpt}</p>
        <span className="mt-3 font-mono text-xs font-semibold uppercase tracking-widest text-accent-dark">
          Read Guide &rarr;
        </span>
      </div>
    </Link>
  );
}
