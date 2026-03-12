"use client";

import { useMemo, useRef } from "react";

export type FeaturedVideo = {
  title: string;
  url: string;
  thumbnailUrl: string;
  tags?: string[];
};

type Props = {
  videos: FeaturedVideo[];
};

export default function FeaturedVideosCarousel({ videos }: Props) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const canScroll = useMemo(() => videos.length > 1, [videos.length]);

  function scrollByCards(direction: "left" | "right") {
    const el = scrollerRef.current;
    if (!el) return;

    const card = el.querySelector<HTMLElement>("[data-card='video']");
    const amount = (card?.offsetWidth ?? 320) + 16;

    el.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  }

  return (
    <section className="px-4 py-8 sm:px-8">
      <div className="rounded-3xl border border-zinc-200/70 bg-white/70 p-8 shadow-sm backdrop-blur">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold tracking-tight">Featured videos</h2>
            <p className="mt-2 text-sm text-zinc-600">
              Selected TikTok Shop posts (click to view).
            </p>
          </div>

          {canScroll && (
            <div className="hidden gap-2 sm:flex">
              <button
                type="button"
                onClick={() => scrollByCards("left")}
                className="rounded-full border border-zinc-300 bg-white px-3 py-2 text-sm font-medium text-zinc-900 shadow-sm hover:bg-zinc-50"
                aria-label="Scroll left"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => scrollByCards("right")}
                className="rounded-full border border-zinc-300 bg-white px-3 py-2 text-sm font-medium text-zinc-900 shadow-sm hover:bg-zinc-50"
                aria-label="Scroll right"
              >
                →
              </button>
            </div>
          )}
        </div>

        <div
          ref={scrollerRef}
          className="mt-6 flex gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {videos.map((video) => (
            <a
              key={video.url}
              href={video.url}
              target="_blank"
              rel="noreferrer"
              data-card="video"
              className="group w-[280px] flex-none snap-start sm:w-[340px]"
              aria-label={`Open video: ${video.title}`}
            >
              <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
                <div className="relative aspect-[9/16] w-full bg-zinc-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={video.thumbnailUrl}
                    alt={video.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-zinc-900">
                      View on TikTok
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <div className="text-sm font-semibold text-zinc-900">{video.title}</div>
                  {video.tags?.length ? (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {video.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-zinc-200 bg-white px-2 py-0.5 text-xs text-zinc-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-4 text-xs text-zinc-500">
          Tip: swipe horizontally on mobile.
        </div>
      </div>
    </section>
  );
}