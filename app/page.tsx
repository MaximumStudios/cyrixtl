import Link from "next/link";
import FeaturedVideosCarousel from "@/components/FeaturedVideosCarousel";
import {
  FEATURED_VIDEOS,
  PARTNER_BRANDS,
  RESTRICTED_PRODUCTS,
  SERVICES_COMPANIES,
  SERVICES_CREATORS,
} from "@/content/home";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="py-0">
      <FeaturedVideosCarousel videos={FEATURED_VIDEOS} />

      {/* Hero */}
      <section className="px-4 sm:px-8">
        <div className="rounded-3xl border border-zinc-200/70 bg-white/70 p-8 shadow-sm backdrop-blur">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="space-y-3">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                cyrixtlshoptest12
              </h1>

              <p className="text-lg text-zinc-700">
                Agency for TikTok Shop growth — helping brands and creators maximize
                GMV through performance-first content and affiliate execution.
              </p>

              <p className="text-sm text-zinc-600">
                One-liner: <span className="font-medium text-zinc-800">I help</span>{" "}
                <span className="font-medium text-zinc-800">XXXXXX</span> brands sell{" "}
                <span className="font-medium text-zinc-800">XXXXXX</span> via TikTok
                Shop by <span className="font-medium text-zinc-800">XXXXXX</span>.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full border border-zinc-300 bg-white px-5 py-2.5 text-sm font-medium text-zinc-900 shadow-sm hover:bg-zinc-50"
              >
                Contact
              </Link>
              <Link
                href="/portfolio"
                className="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-zinc-800"
              >
                View portfolio
              </Link>
            </div>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200/70 bg-white p-4">
              <div className="text-xs font-semibold text-zinc-500">Region / Language</div>
              <div className="mt-1 text-sm text-zinc-800">
                Germany (DE) • Brand dependent audiences (mixed)
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-200/70 bg-white p-4">
              <div className="text-xs font-semibold text-zinc-500">Response time</div>
              <div className="mt-1 text-sm text-zinc-800">Within 24h</div>
            </div>

            <div className="rounded-2xl border border-zinc-200/70 bg-white p-4">
              <div className="text-xs font-semibold text-zinc-500">Publishable metrics</div>
              <div className="mt-1 text-sm text-zinc-800">XXXXXX</div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner brands */}
      <section className="mt-10 px-4 sm:px-8">
      <div className="rounded-3xl border border-zinc-200/50 bg-white/50 p-8 shadow-sm backdrop-blur">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-xl font-semibold tracking-tight">Partner brands</h2>
          <p className="text-sm text-zinc-600">Selected partner brands.</p>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-6 sm:gap-x-10 lg:gap-x-12">
          {PARTNER_BRANDS.map((brand) => (
            <div key={brand.name} className="relative h-12 w-28 sm:h-14 sm:w-32 lg:h-16 lg:w-36">
              <Image
                src={brand.logo}
                alt={brand.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* What we do */}
      <section className="mt-10 px-4 sm:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-zinc-200/70 bg-white/70 p-8 shadow-sm backdrop-blur">
            <h2 className="text-xl font-semibold tracking-tight">For companies</h2>
            <p className="mt-2 text-sm text-zinc-600">
              We focus on GMV growth and operational execution inside TikTok Shop.
            </p>

            <ul className="mt-5 space-y-2 text-sm text-zinc-800">
              {SERVICES_COMPANIES.map((service) => (
                <li key={service} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-zinc-400" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-4 text-sm text-zinc-700">
              <div className="font-semibold text-zinc-900">Deliverables</div>
              <div className="mt-1">
                Unlimited on a negotiated basis (VB). Preparation time ~1 week +
                product shipping time.
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-200/70 bg-white/70 p-8 shadow-sm backdrop-blur">
            <h2 className="text-xl font-semibold tracking-tight">For creators</h2>
            <p className="mt-2 text-sm text-zinc-600">
              We help creators grow and connect with brands through TikTok Shop.
            </p>

            <ul className="mt-5 space-y-2 text-sm text-zinc-800">
              {SERVICES_CREATORS.map((service) => (
                <li key={service} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-zinc-400" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-4 text-sm text-zinc-700">
              <div className="font-semibold text-zinc-900">Notes</div>
              <div className="mt-1">
                Platform compliance: TikTok Shop EU guidelines. No logo theft.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio + metrics placeholders */}
      <section className="mt-10 px-4 sm:px-8">
        <div className="rounded-3xl border border-zinc-200/70 bg-white/70 p-8 shadow-sm backdrop-blur">
          <h2 className="text-xl font-semibold tracking-tight">Portfolio</h2>
          <p className="mt-2 text-sm text-zinc-600">
            Best posts and performance breakdowns will be added as they are produced.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200 bg-white p-4">
              <div className="text-xs font-semibold text-zinc-500">Best posts</div>
              <div className="mt-2 text-sm text-zinc-800">XXXXXX (links coming soon)</div>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-4">
              <div className="text-xs font-semibold text-zinc-500">Case studies</div>
              <div className="mt-2 text-sm text-zinc-800">XXXXXX (2–4 planned)</div>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-4">
              <div className="text-xs font-semibold text-zinc-500">Metrics</div>
              <div className="mt-2 text-sm text-zinc-800">
                XXXXXX (views / CTR / conversion / GMV etc.)
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/portfolio"
              className="rounded-full border border-zinc-300 bg-white px-5 py-2.5 text-sm font-medium text-zinc-900 shadow-sm hover:bg-zinc-50"
            >
              Go to portfolio
            </Link>
            <Link
              href="/results"
              className="rounded-full border border-zinc-300 bg-white px-5 py-2.5 text-sm font-medium text-zinc-900 shadow-sm hover:bg-zinc-50"
            >
              View results
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing snapshot */}
      <section className="mt-10 px-4 sm:px-8">
        <div className="rounded-3xl border border-zinc-200/70 bg-white/70 p-8 shadow-sm backdrop-blur">
          <h2 className="text-xl font-semibold tracking-tight">Pricing (snapshot)</h2>
          <p className="mt-2 text-sm text-zinc-600">
            Final offers depend on product category, goals, and scale. Management is
            negotiable.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200 bg-white p-4">
              <div className="text-xs font-semibold text-zinc-500">Livestream</div>
              <div className="mt-2 text-sm text-zinc-800">€50 / hour</div>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-4">
              <div className="text-xs font-semibold text-zinc-500">Video</div>
              <div className="mt-2 text-sm text-zinc-800">€80 / hour</div>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-4">
              <div className="text-xs font-semibold text-zinc-500">Management</div>
              <div className="mt-2 text-sm text-zinc-800">VB (negotiable)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand fit / restrictions */}
      <section className="mt-10 px-4 sm:px-8">
        <div className="rounded-3xl border border-zinc-200/70 bg-white/70 p-8 shadow-sm backdrop-blur">
          <h2 className="text-xl font-semibold tracking-tight">Brand fit</h2>
          <p className="mt-2 text-sm text-zinc-600">
            We support a broad range of product categories. We do not promote restricted
            items.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {RESTRICTED_PRODUCTS.map((item) => (
              <span
                key={item}
                className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-sm text-zinc-800"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-10 px-4 pb-10 sm:px-8">
        <div className="rounded-3xl border border-zinc-200/70 bg-white/70 p-8 shadow-sm backdrop-blur">
          <h2 className="text-xl font-semibold tracking-tight">Work with us</h2>
          <p className="mt-2 text-sm text-zinc-600">
            Tell us about your product, timeline, and targets — we respond within 24h.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-zinc-800"
            >
              Contact
            </Link>
            <a
              href="https://www.tiktok.com/@cyrixtl"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-zinc-300 bg-white px-5 py-2.5 text-sm font-medium text-zinc-900 shadow-sm hover:bg-zinc-50"
            >
              TikTok
            </a>
          </div>

          <div className="mt-6 text-xs text-zinc-500">
            Contact method placeholders: Email (XXXXXX), Form (XXXXXX), Calendar
            (XXXXXX)
          </div>
        </div>
      </section>
    </div>
  );
}