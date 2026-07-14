// ─────────────────────────────────────────────────────────────────────────────
// Fireplace catalogue
// To add a new product: import its JSON below and add it to the array.
// The card on the media-walls page and the /fireplaces/[slug] page are both
// driven from this array automatically.
// ─────────────────────────────────────────────────────────────────────────────

export type FireplaceProduct = {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: string;
  shortDescription?: string;
  images: {
    main?: string | null;
    sales?: string | null;
    gallery: string[];
    specSheet?: string | null;
    specification?: string | null;
  };
  pricing: {
    supplyAndInstallFrom?: number | null;
    supplyOnly?: number | null;
    currency: string;
    note?: string;
  };
  description: string;
  features: string[];
  dimensionsMm: { height: number; width: number; depth: number };
  heatOutputKw?: number;
  closingText: string;
  callToAction?: string;
  seo?: { title: string; description: string; canonicalPath: string; image: string; altText: string };
  schema?: Record<string, unknown>;
};

import mw1250 from "../MediaWall1250.json";
import firez1500 from "../Firez-1500.json";
import firez1600 from "../Firez-1600-AR-Glass.json";
import firez1800 from "../Firez-1800-AR-Glass.json";
import firez2200 from "../Firez-2200.json";

// Normalise legacy MediaWall1250 shape to shared type
const mw1250normalised: FireplaceProduct = {
  ...(mw1250 as any),
  images: {
    sales: (mw1250 as any).images?.sales ?? null,
    gallery: (mw1250 as any).images?.gallery ?? [],
    specSheet: (mw1250 as any).images?.specSheet ?? null,
  },
};

export const fireplaces: FireplaceProduct[] = [
  mw1250normalised,
  firez1500 as FireplaceProduct,
  firez1600 as FireplaceProduct,
  firez1800 as FireplaceProduct,
  firez2200 as FireplaceProduct,
];
