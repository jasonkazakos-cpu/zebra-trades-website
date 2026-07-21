"use client";

import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

export type GalleryImage = {
  src: string;
  alt: string;
  caption?: string;
};

// Derives the thumbnail path from the full-size src.
// Thumbnails live in a thumbs/ subdirectory alongside the originals.
function thumbSrc(src: string): string {
  const slash = src.lastIndexOf("/");
  return src.slice(0, slash) + "/thumbs" + src.slice(slash);
}

// Inline SVG placeholder — replace src with a real image path to swap it out.
function PlaceholderImage({ label }: { label: string }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-chalk">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect width="40" height="40" rx="6" fill="#e1ddd4" />
        <path d="M8 28l8-8 5 5 5-7 6 10H8z" fill="#6b6a66" opacity="0.5" />
        <circle cx="27" cy="14" r="4" fill="#6b6a66" opacity="0.5" />
      </svg>
      <span className="px-4 text-center font-mono text-[11px] uppercase tracking-wide text-slate">
        {label}
      </span>
    </div>
  );
}

function GalleryCard({
  image,
  onClick,
}: {
  image: GalleryImage;
  onClick: () => void;
}) {
  const isPlaceholder = !image.src || image.src === "";

  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-line bg-chalk focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      aria-label={`View ${image.alt}`}
    >
      {isPlaceholder ? (
        <PlaceholderImage label={image.alt} />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={thumbSrc(image.src)}
          alt={image.alt}
          loading="lazy"
          decoding="async"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      )}
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        <div className="flex items-end justify-between gap-2 p-4">
          {image.caption && (
            <span className="text-left text-xs font-medium text-paper">
              {image.caption}
            </span>
          )}
          <ZoomIn className="size-5 shrink-0 text-paper" strokeWidth={1.75} aria-hidden="true" />
        </div>
      </div>
    </button>
  );
}

export default function Gallery({ images }: { images: GalleryImage[] }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const current = lightboxIndex !== null ? images[lightboxIndex] : null;
  const isPlaceholder = (img: GalleryImage) => !img.src || img.src === "";

  function prev() {
    setLightboxIndex((i) => (i !== null ? (i - 1 + images.length) % images.length : null));
  }
  function next() {
    setLightboxIndex((i) => (i !== null ? (i + 1) % images.length : null));
  }

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image, i) => (
          <GalleryCard key={image.alt} image={image} onClick={() => setLightboxIndex(i)} />
        ))}
      </div>

      {current !== null && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close"
            className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full bg-paper/10 text-paper hover:bg-paper/20"
          >
            <X className="size-5" strokeWidth={1.75} aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous"
            className="absolute left-4 top-1/2 -translate-y-1/2 flex size-10 items-center justify-center rounded-full bg-paper/10 text-paper hover:bg-paper/20 font-bold text-lg"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next"
            className="absolute right-4 top-1/2 -translate-y-1/2 flex size-10 items-center justify-center rounded-full bg-paper/10 text-paper hover:bg-paper/20 font-bold text-lg"
          >
            ›
          </button>

          <div
            className="mx-16 flex max-h-[80vh] max-w-3xl flex-col overflow-hidden rounded-sm"
            onClick={(e) => e.stopPropagation()}
          >
            {isPlaceholder(current) ? (
              <div className="flex aspect-[4/3] w-full items-center justify-center bg-chalk">
                <PlaceholderImage label={current.alt} />
              </div>
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={current.src}
                alt={current.alt}
                className="h-full w-full object-contain"
              />
            )}
            {current.caption && (
              <div className="bg-ink px-5 py-3 text-sm text-paper/80">
                {current.caption}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
