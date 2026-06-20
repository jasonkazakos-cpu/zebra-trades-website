"use client";

import { useState } from "react";
import { Play, X, Video as VideoIcon } from "lucide-react";

export type VideoItem = {
  // YouTube video ID only (the part after "v=" in a YouTube URL). Leave
  // empty to show a placeholder card until a real video is added.
  id: string;
  title: string;
};

function PlaceholderThumb({ title }: { title: string }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-chalk">
      <VideoIcon className="size-7 text-slate/50" strokeWidth={1.5} aria-hidden="true" />
      <span className="px-4 text-center font-mono text-[11px] uppercase tracking-wide text-slate">
        {title}
      </span>
    </div>
  );
}

function VideoCard({
  video,
  onClick,
}: {
  video: VideoItem;
  onClick: () => void;
}) {
  const hasVideo = video.id.trim() !== "";

  return (
    <button
      type="button"
      onClick={hasVideo ? onClick : undefined}
      disabled={!hasVideo}
      className={`group relative aspect-video w-full overflow-hidden rounded-sm border border-line bg-chalk focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
        hasVideo ? "cursor-pointer" : "cursor-default"
      }`}
      aria-label={hasVideo ? `Play video: ${video.title}` : video.title}
    >
      {hasVideo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
          alt={video.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      ) : (
        <PlaceholderThumb title={video.title} />
      )}

      {hasVideo && (
        <div className="absolute inset-0 flex items-center justify-center bg-ink/25 transition-colors group-hover:bg-ink/40">
          <span className="flex size-14 items-center justify-center rounded-full bg-paper/90 shadow-lg transition-transform group-hover:scale-110">
            <Play className="ml-0.5 size-6 fill-accent text-accent" strokeWidth={0} aria-hidden="true" />
          </span>
        </div>
      )}

      {hasVideo && (
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-3">
          <span className="text-left text-xs font-medium text-paper">{video.title}</span>
        </div>
      )}
    </button>
  );
}

export default function VideoGallery({ videos }: { videos: VideoItem[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex !== null ? videos[activeIndex] : null;

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((video, i) => (
          <VideoCard key={video.title + i} video={video} onClick={() => setActiveIndex(i)} />
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4"
          onClick={() => setActiveIndex(null)}
        >
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            aria-label="Close video"
            className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full bg-paper/10 text-paper hover:bg-paper/20"
          >
            <X className="size-5" strokeWidth={1.75} aria-hidden="true" />
          </button>

          <div
            className="aspect-video w-full max-w-3xl overflow-hidden rounded-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube.com/embed/${active.id}?autoplay=1`}
              title={active.title}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}
