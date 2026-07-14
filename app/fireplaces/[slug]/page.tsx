import type { Metadata } from "next";
import { fireplaces } from "@/data/fireplaces";
import FireplaceProductClient from "./FireplaceProductClient";
import firez1800Schema from "../../../schema.json";
import firez1800Seo from "../../../seo.json";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return fireplaces.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const fp = fireplaces.find((f) => f.slug === slug);
  if (!fp) return {};
  if (slug === "firez-1800-ar-glass") {
    return {
      title: firez1800Seo.title,
      description: firez1800Seo.description,
      alternates: { canonical: firez1800Seo.canonicalPath },
      openGraph: { images: [firez1800Seo.image] },
    };
  }
  const title = (fp as any).displayName ?? fp.name;
  const description = fp.shortDescription ?? fp.description.split("\n\n")[0];
  const image = fp.images.main ?? fp.images.sales ?? fp.images.gallery[0] ?? undefined;
  return {
    title: `${title} | Zebra Trades`,
    description,
    openGraph: image ? { images: [image] } : undefined,
  };
}

export default async function FireplaceProductPage({ params }: Props) {
  const { slug } = await params;
  const fp = fireplaces.find((f) => f.slug === slug);

  const schema = slug === "firez-1800-ar-glass"
    ? firez1800Schema
    : fp
    ? {
        "@context": "https://schema.org",
        "@type": "Product",
        name: (fp as any).displayName ?? fp.name,
        description: fp.shortDescription ?? fp.description.split("\n\n")[0],
        brand: { "@type": "Brand", name: fp.brand },
        image: fp.images.main ?? fp.images.sales ?? fp.images.gallery[0] ?? undefined,
        offers: [
          fp.pricing.supplyAndInstallFrom != null && {
            "@type": "Offer",
            name: "Supply & Install",
            price: fp.pricing.supplyAndInstallFrom,
            priceCurrency: fp.pricing.currency ?? "GBP",
            availability: "https://schema.org/InStock",
          },
          fp.pricing.supplyOnly != null && {
            "@type": "Offer",
            name: "Supply Only",
            price: fp.pricing.supplyOnly,
            priceCurrency: fp.pricing.currency ?? "GBP",
            availability: "https://schema.org/InStock",
          },
        ].filter(Boolean),
      }
    : null;

  return (
    <>
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
      <FireplaceProductClient slug={slug} />
    </>
  );
}
