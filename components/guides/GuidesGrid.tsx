"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Search, X } from "lucide-react";
import type { Guide } from "@/data/guides";
import { categories } from "@/data/guides";
import GuideCard from "./GuideCard";

const PAGE_SIZE = 9;
const LOAD_MORE = 6;

type Props = { guides: Guide[] };

export default function GuidesGrid({ guides }: Props) {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState(() => searchParams.get("category") ?? "all");

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) setActiveCategory(cat);
  }, [searchParams]);
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return guides.filter((g) => {
      const matchCat = activeCategory === "all" || g.category === activeCategory;
      const matchQ =
        !q ||
        g.title.toLowerCase().includes(q) ||
        g.excerpt.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  }, [guides, query, activeCategory]);

  const shown = filtered.slice(0, visible);

  function handleCategoryClick(slug: string) {
    setActiveCategory(slug);
    setVisible(PAGE_SIZE);
  }

  function handleQueryChange(value: string) {
    setQuery(value);
    setVisible(PAGE_SIZE);
  }

  return (
    <div className="space-y-8">
      {/* Search */}
      <div className="relative max-w-md">
        <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate" aria-hidden="true" />
        <input
          type="search"
          value={query}
          onChange={(e) => handleQueryChange(e.target.value)}
          placeholder="Search guides…"
          className="w-full rounded-sm border border-line bg-paper py-2.5 pl-9 pr-9 text-sm text-ink placeholder:text-slate focus:border-accent focus:outline-none"
        />
        {query && (
          <button
            onClick={() => handleQueryChange("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate hover:text-ink"
            aria-label="Clear search"
          >
            <X className="size-4" />
          </button>
        )}
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => handleCategoryClick("all")}
          className={`rounded-sm border px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest transition-colors ${
            activeCategory === "all"
              ? "border-accent bg-accent text-paper"
              : "border-line bg-paper text-slate hover:border-accent hover:text-ink"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => handleCategoryClick(cat.slug)}
            className={`rounded-sm border px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest transition-colors ${
              activeCategory === cat.slug
                ? "border-accent bg-accent text-paper"
                : "border-line bg-paper text-slate hover:border-accent hover:text-ink"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Results */}
      {shown.length === 0 ? (
        <p className="text-sm text-slate">No guides found — try a different search or category.</p>
      ) : (
        <>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((guide) => (
              <GuideCard key={guide.slug} guide={guide} />
            ))}
          </div>
          {visible < filtered.length && (
            <div className="text-center">
              <button
                onClick={() => setVisible((v) => v + LOAD_MORE)}
                className="rounded-sm border border-accent px-6 py-2.5 font-mono text-xs uppercase tracking-widest text-accent-dark transition-colors hover:bg-accent hover:text-paper"
              >
                Load More
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
