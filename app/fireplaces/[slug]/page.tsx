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
  return {
    title: `${fp.name} | Zebra Trades`,
    description: fp.description.split("\n\n")[0],
  };
}

export default async function FireplaceProductPage({ params }: Props) {
  const { slug } = await params;
  return <FireplaceProductClient slug={slug} />;
}
