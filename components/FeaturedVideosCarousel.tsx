"use client";

import { useMemo, useRef } from "react";
import Script from "next/script";

export type FeaturedVideo = {
  title: string;
  url: string;
  tags?: string[];
};

type Props = {
  videos: FeaturedVideo[];
};

function extractVideoId(url: string): string | undefined {
  return url.match(/\/video\/(\d+)/)?.[1];
}

export default function FeaturedVideosCarousel({ videos }: Props) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const canScroll = useMemo(() => videos.length > 1, [videos.length]);

  function scrollByCards(direction: "left" | "right") {
    const el = scrollerRef.current;
    if (!el) return;

    const card = el.querySelector<HTMLElement>("[data-card='video']");
    const amount = (card?.offsetWidth ?? 325) + 24;

    el.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  }

  return (
    <section className="mx-auto mt-4 max-w-5xl border-t border-black/10 py-12">
      <Script src="https://www.tiktok.com/embed.js" strategy="lazyOnload" />

      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">Featured videos</h2>
          <p className="mt-2 text-sm text-zinc-600">
            Selected TikTok Shop posts.
          </p>
        </div>

        {canScroll && (
          <div className="hidden gap-2 sm:flex">
            <button
              type="button"
              onClick={() => scrollByCards("left")}
              className="rounded-full border border-black/15 px-3 py-2 text-sm font-medium text-black hover:bg-black/5"
              aria-label="Scroll left"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => scrollByCards("right")}
              className="rounded-full border border-black/15 px-3 py-2 text-sm font-medium text-black hover:bg-black/5"
              aria-label="Scroll right"
            >
              →
            </button>
          </div>
        )}
      </div>

      <div
        ref={scrollerRef}
        className="mt-8 flex gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {videos.map((video, index) => (
          <div
            key={`${video.url}-${index}`}
            data-card="video"
            className="group relative w-[325px] flex-none snap-start"
          >
            <div className="pointer-events-none absolute inset-x-0 top-2 z-10 flex justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-black/80 px-3 py-1 text-xs font-medium text-white">
                ▶ Click to play
              </span>
            </div>

            <div className="origin-top transition-transform duration-300 group-hover:scale-[1.02]">
              <blockquote
                className="tiktok-embed"
                cite={video.url}
                data-video-id={extractVideoId(video.url)}
                style={{ maxWidth: 605, minWidth: 325 }}
              >
                <section>
                  <a target="_blank" rel="noreferrer" href={video.url}>
                    {video.title}
                  </a>
                </section>
              </blockquote>
            </div>

            {video.tags?.length ? (
              <div className="mt-2 flex flex-wrap gap-x-2 text-xs text-zinc-500">
                {video.tags.slice(0, 3).map((tag, tagIndex) => (
                  <span key={tag}>
                    {tag}
                    {tagIndex < Math.min(video.tags!.length, 3) - 1 ? " ·" : ""}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </div>

      <div className="mt-4 text-xs text-zinc-500">
        Tip: swipe horizontally on mobile.
      </div>
    </section>
  );
}
