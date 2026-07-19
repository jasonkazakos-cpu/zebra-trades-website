import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import Container from "@/components/Container";
import { siteConfig } from "@/data/site";
import { locations } from "@/data/locations";

// A stylised, non-literal hub-and-spoke graphic — not a geographic map.
// Cheshunt sits at the centre with surrounding towns evenly arranged around it.
function spokePoints(count: number, radius = 40) {
  return Array.from({ length: count }, (_, i) => {
    const theta = (i * 2 * Math.PI) / count;
    return {
      x: 50 + radius * Math.sin(theta),
      y: 50 - radius * Math.cos(theta),
    };
  });
}

export default function CoverageArea({
  background = "chalk",
  serviceSlug,
}: {
  background?: "chalk" | "paper";
  serviceSlug?: string;
}) {
  const [hub, ...spokes] = siteConfig.areas;
  const points = spokePoints(spokes.length);
  const bg = background === "chalk" ? "bg-chalk" : "bg-paper";

  function locationSlugForTown(town: string) {
    return locations.find((l) => l.name === town)?.slug;
  }

  return (
    <section className={bg}>
      <Container className="py-16 sm:py-20">
        <SectionHeading
          eyebrow="Where We Cover"
          title={`${hub} & The Surrounding Area`}
          subtitle={`Based in ${siteConfig.baseTown}, we carry out home improvement work throughout ${siteConfig.county} and into neighbouring areas.`}
          align="center"
        />

        <div className="relative mx-auto mt-12 aspect-square w-full max-w-[300px] sm:max-w-[420px]">
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 h-full w-full"
            aria-hidden="true"
          >
            {spokes.map((_, i) => (
              <line
                key={i}
                x1="50"
                y1="50"
                x2={points[i].x}
                y2={points[i].y}
                stroke="var(--color-line)"
                strokeWidth="0.6"
                strokeDasharray="2.2 2.2"
              />
            ))}
            {spokes.map((_, i) => (
              <circle
                key={i}
                cx={points[i].x}
                cy={points[i].y}
                r="1.6"
                fill="var(--color-accent)"
              />
            ))}
          </svg>

          <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-ink px-3 py-3 text-center shadow-[0_12px_30px_-10px_rgba(20,20,26,0.45)] sm:px-5 sm:py-5">
            <span className="font-display text-sm font-bold uppercase leading-tight tracking-tight text-paper sm:text-lg">
              {hub}
            </span>
            <span className="mt-0.5 font-mono text-[9px] uppercase tracking-wide text-paper/55 sm:text-[10px]">
              Based here
            </span>
          </div>

          {spokes.map((area, i) => {
            const locSlug = locationSlugForTown(area);
            const chipClass = "absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-line bg-paper px-2 py-1 text-[10px] font-medium text-ink shadow-sm sm:px-3 sm:py-1.5 sm:text-xs";
            const style = { left: `${points[i].x}%`, top: `${points[i].y}%` };
            return serviceSlug && locSlug ? (
              <Link
                key={area}
                href={`/${serviceSlug}/${locSlug}`}
                className={`${chipClass} transition-colors hover:border-accent hover:text-accent-dark`}
                style={style}
              >
                {area}
              </Link>
            ) : (
              <div key={area} className={chipClass} style={style}>
                {area}
              </div>
            );
          })}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-slate">
          Covering {hub},{" "}
          {spokes.map((area, i) => {
            const locSlug = locationSlugForTown(area);
            return (
              <span key={area}>
                {serviceSlug && locSlug ? (
                  <Link href={`/${serviceSlug}/${locSlug}`} className="text-accent-dark underline-offset-2 hover:underline">
                    {area}
                  </Link>
                ) : (
                  area
                )}
                {i < spokes.length - 1 ? ", " : ""}
              </span>
            );
          })}{" "}
          and other nearby parts of {siteConfig.county}. Not on the list? Get
          in touch — we may still be able to help.
        </p>
      </Container>
    </section>
  );
}
