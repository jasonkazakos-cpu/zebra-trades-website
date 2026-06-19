// All garden room calculator prices in one place — update here to reflect across the site.

export type SizeKey = "3x3" | "4x3" | "5x3" | "6x3" | "7x4" | "custom";
export type SpecKey = "standard" | "premium" | "luxury";

export const SIZES: { key: SizeKey; label: string; area: number | null }[] = [
  { key: "3x3", label: "3m x 3m / 9m²", area: 9 },
  { key: "4x3", label: "4m x 3m / 12m²", area: 12 },
  { key: "5x3", label: "5m x 3m / 15m²", area: 15 },
  { key: "6x3", label: "6m x 3m / 18m²", area: 18 },
  { key: "7x4", label: "7m x 4m / 28m²", area: 28 },
  { key: "custom", label: "Custom Size / Quoted", area: null },
];

export const SPEC_LEVELS: { key: SpecKey; label: string; ratePerSqm: number }[] = [
  { key: "standard", label: "Standard Insulated Finish", ratePerSqm: 2200 },
  { key: "premium", label: "Premium Finish", ratePerSqm: 2800 },
  { key: "luxury", label: "Luxury Bespoke Finish", ratePerSqm: 3500 },
];

export type Extra = {
  key: string;
  label: string;
  price: number;
};

export const EXTRAS: Extra[] = [
  { key: "air-conditioning", label: "Air Conditioning", price: 1995 },
  { key: "electric-heating", label: "Electric Heating", price: 795 },
  { key: "extra-electrical", label: "Extra Electrical Points", price: 450 },
  { key: "internet-cabling", label: "Internet/Data Cabling", price: 650 },
  { key: "composite-cladding", label: "Composite Cladding Upgrade", price: 2500 },
  { key: "premium-flooring", label: "Premium Flooring Upgrade", price: 1250 },
  { key: "built-in-storage", label: "Built-In Storage", price: 1500 },
  { key: "outdoor-lighting", label: "Outdoor Lighting", price: 750 },
  { key: "smart-controls", label: "Smart Controls", price: 950 },
];
