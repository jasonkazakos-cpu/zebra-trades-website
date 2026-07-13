// Auto-populated from products/media-walls/firez/*.json
// Adding a new JSON file here automatically adds a card to the media walls page.

export type Fireplace = {
  id: string;
  slug: string;
  name: string;
  brand: string;
  model: string;
  category: string;
  image: string;
  pricing: {
    supplyAndInstallFrom: number;
    supplyOnly: number;
    currency: string;
  };
  description: string;
  features: string[];
  dimensionsMm: { height: number; width: number; depth: number };
  closingText: string;
  callToAction: string;
};

import firez1250 from "../Firez1250.json";

export const fireplaces: Fireplace[] = [
  {
    ...firez1250,
    image: "/images/media-walls/fireplaces/firez-1250.png",
  },
];
