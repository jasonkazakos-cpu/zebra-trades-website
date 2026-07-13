// To add a new fireplace product, import its JSON here and add it to the array.
// Each product must follow the same shape as MediaWall1250.json.

export type FireplaceProduct = {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: string;
  images: {
    sales: string;
    gallery: string[];
    specSheet: string;
  };
  pricing: {
    supplyAndInstallFrom: number;
    supplyOnly: number;
    currency: string;
  };
  description: string;
  features: string[];
  dimensionsMm: { height: number; width: number; depth: number };
  heatOutputKw?: number;
  closingText: string;
  callToAction: string;
};

import mw1250 from "../MediaWall1250.json";

export const fireplaces: FireplaceProduct[] = [
  mw1250 as FireplaceProduct,
];
