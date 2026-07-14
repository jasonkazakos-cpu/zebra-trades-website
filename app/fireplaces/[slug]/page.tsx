import type { Metadata } from "next";
import { fireplaces } from "@/data/fireplaces";
import FireplaceProductClient from "./FireplaceProductClient";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return fireplaces.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const fp = fireplaces.find((f) => f.slug === slug);
  if (!fp) return {};
  if (fp.seo) {
    return {
      title: fp.seo.title,
      description: fp.seo.description,
      alternates: { canonical: fp.seo.canonicalPath },
      openGraph: { images: [fp.seo.image] },
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

  const schema = fp?.schema ?? (fp ? {
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
  } : null);

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
