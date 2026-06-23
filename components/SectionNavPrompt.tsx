"use client";

import Container from "@/components/Container";

export default function SectionNavPrompt({
  heading = "Continue Exploring",
  description = "More information is available below.",
  buttonLabel,
  targetId,
}: {
  heading?: string;
  description?: string;
  buttonLabel: string;
  targetId: string;
}) {
  function handleClick() {
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <section className="border-y border-line bg-chalk">
      <Container className="flex flex-col items-center gap-4 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            {heading}
          </p>
          <p className="mt-1.5 text-sm text-slate">{description}</p>
        </div>
        <button
          type="button"
          onClick={handleClick}
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-sm border border-ink/30 bg-transparent px-6 py-3 font-semibold tracking-wide text-ink transition-colors hover:border-ink hover:bg-ink/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
        >
          {buttonLabel}
        </button>
      </Container>
    </section>
  );
}
