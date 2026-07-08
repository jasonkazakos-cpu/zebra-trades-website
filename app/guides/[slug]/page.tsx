import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/Container";
import CtaBand from "@/components/CtaBand";
import { guides, categories } from "@/data/guides";
import { siteConfig } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);
  if (!guide) return {};
  return {
    title: `${guide.title} | Zebra Trades`,
    description: guide.excerpt,
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);
  if (!guide) notFound();

  const category = categories.find((c) => c.slug === guide.category);
  const related = guides.filter((g) => guide.relatedSlugs?.includes(g.slug));
  const idx = guides.indexOf(guide);
  const prev = idx > 0 ? guides[idx - 1] : null;
  const next = idx < guides.length - 1 ? guides[idx + 1] : null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.excerpt,
    datePublished: guide.publishedAt,
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: "https://www.zebratrades.co.uk",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <div className="border-b border-line bg-chalk">
        <Container className="py-3">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-slate">
            <Link href="/" className="hover:text-ink">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-ink">Guides</Link>
            {category && (
              <>
                <span>/</span>
                <Link href={`/guides?category=${category.slug}`} className="hover:text-ink">{category.label}</Link>
              </>
            )}
            <span>/</span>
            <span className="text-ink">{guide.title}</span>
          </nav>
        </Container>
      </div>

      {/* Hero */}
      <section className="bg-ink">
        <Container className="py-12 sm:py-16">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            {category?.label ?? guide.category}
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-3xl font-bold uppercase leading-tight tracking-tight text-paper sm:text-4xl">
            {guide.title}
          </h1>
          <p className="mt-4 font-mono text-xs uppercase tracking-widest text-paper/50">
            {formatDate(guide.publishedAt)} &middot; {guide.readingTime} min read
          </p>
        </Container>
      </section>

      {/* Content + TOC */}
      <section className="bg-paper">
        <Container className="py-12 sm:py-16">
          <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-12">
            {/* Article */}
            <article className="max-w-2xl">
              <p className="text-base leading-relaxed text-slate sm:text-lg">{guide.excerpt}</p>

              <div className="mt-8 space-y-8">
                {guide.sections.map((sec) => (
                  <div key={sec.heading} id={sec.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")}>
                    <h2 className="font-display text-lg font-bold uppercase tracking-tight text-ink sm:text-xl">
                      {sec.heading}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-slate sm:text-base">{sec.body}</p>
                  </div>
                ))}
              </div>

              {/* Prev / Next */}
              <div className="mt-12 grid gap-4 border-t border-line pt-8 sm:grid-cols-2">
                {prev && (
                  <Link href={`/guides/${prev.slug}`} className="group rounded-sm border border-line bg-chalk p-4 hover:border-accent">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-slate">&larr; Previous</p>
                    <p className="mt-1 font-display text-sm font-bold uppercase leading-tight tracking-tight text-ink group-hover:text-accent-dark">{prev.title}</p>
                  </Link>
                )}
                {next && (
                  <Link href={`/guides/${next.slug}`} className="group rounded-sm border border-line bg-chalk p-4 hover:border-accent sm:text-right">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-slate">Next &rarr;</p>
                    <p className="mt-1 font-display text-sm font-bold uppercase leading-tight tracking-tight text-ink group-hover:text-accent-dark">{next.title}</p>
                  </Link>
                )}
              </div>
            </article>

            {/* Sidebar TOC */}
            <aside className="hidden lg:block">
              <div className="sticky top-6 rounded-sm border border-line bg-chalk p-5">
                <p className="font-mono text-[10px] uppercase tracking-widest text-slate">Contents</p>
                <ul className="mt-3 space-y-2">
                  {guide.sections.map((sec) => (
                    <li key={sec.heading}>
                      <a
                        href={`#${sec.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                        className="text-sm leading-snug text-slate hover:text-ink"
                      >
                        {sec.heading}
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 border-t border-line pt-5">
                  <p className="text-sm font-semibold text-ink">Need a quote?</p>
                  <p className="mt-1 text-sm text-slate">We cover {siteConfig.baseTown} and {siteConfig.county}.</p>
                  <Link
                    href="/contact"
                    className="mt-3 block rounded-sm bg-accent px-4 py-2 text-center font-mono text-xs uppercase tracking-widest text-paper transition-opacity hover:opacity-90"
                  >
                    Get a Free Quote
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* Related guides */}
      {related.length > 0 && (
        <section className="bg-chalk">
          <Container className="py-12 sm:py-16">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Read Next</p>
            <h2 className="mt-2 font-display text-2xl font-bold uppercase tracking-tight text-ink sm:text-3xl">
              Related Guides
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((g) => (
                <Link
                  key={g.slug}
                  href={`/guides/${g.slug}`}
                  className="group flex flex-col gap-3 rounded-sm border border-line bg-paper p-5 transition-shadow hover:shadow-md"
                >
                  <p className="font-mono text-[10px] uppercase tracking-widest text-slate">
                    {g.category.replace(/-/g, " ")} &middot; {g.readingTime} min
                  </p>
                  <h3 className="font-display text-sm font-bold uppercase leading-tight tracking-tight text-ink group-hover:text-accent-dark">
                    {g.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate">{g.excerpt}</p>
                  <span className="mt-auto font-mono text-xs font-semibold uppercase tracking-widest text-accent-dark">
                    Read &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CtaBand
        title="Ready to Get a Job Quoted?"
        subtitle="Free quotes, fixed prices, fully insured — serving Cheshunt and Hertfordshire."
      />
    </>
  );
}
