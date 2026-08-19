import Link from "next/link";
import FeaturedVideosCarousel from "@/components/FeaturedVideosCarousel";
import PartnerBrandsMarquee from "@/components/PartnerBrandsMarquee";
import {
  FEATURED_VIDEOS,
  PARTNER_BRANDS,
  RESTRICTED_PRODUCTS,
  SERVICES_COMPANIES,
  SERVICES_CREATORS,
} from "@/content/home";

export default function HomePage() {
  return (
    <div className="py-6">
      {/* Hero */}
      <section className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-4">
            <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">
              Linkup Studios
            </h1>

            <p className="text-lg text-zinc-700">
              Agency for TikTok Shop growth, helping brands and creators maximize
              GMV through performance-first content, and affiliate execution.
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
              className="rounded-full border border-black/15 px-5 py-2.5 text-sm font-medium text-black hover:bg-black/5"
            >
              Contact
            </Link>
            <Link
              href="/portfolio"
              className="rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-zinc-800"
            >
              View portfolio
            </Link>
          </div>
        </div>

        <dl className="mt-14 grid gap-8 border-t border-black/10 pt-8 sm:grid-cols-3">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
              Region / Language
            </dt>
            <dd className="mt-1.5 text-sm text-zinc-800">
              Germany (DE) • Brand dependent audiences (mixed)
            </dd>
          </div>

          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
              Response time
            </dt>
            <dd className="mt-1.5 text-sm text-zinc-800">Within 24h</dd>
          </div>

          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
              Publishable metrics
            </dt>
            <dd className="mt-1.5 text-sm text-zinc-800">XXXXXX</dd>
          </div>
        </dl>
      </section>

      {/* Featured videos */}
      <FeaturedVideosCarousel videos={FEATURED_VIDEOS} />

      {/* Partner brands */}
      <PartnerBrandsMarquee brands={PARTNER_BRANDS} />

      {/* What we do */}
      <section className="mx-auto mt-4 max-w-5xl border-t border-black/10 py-12">
        <div className="grid gap-10 md:grid-cols-2 md:divide-x md:divide-black/10">
          <div className="md:pr-10">
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

            <p className="mt-6 text-sm text-zinc-700">
              <span className="font-semibold text-black">Deliverables — </span>
              Unlimited on a negotiated basis (VB). Preparation time ~1 week +
              product shipping time.
            </p>
          </div>

          <div className="md:pl-10">
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

            <p className="mt-6 text-sm text-zinc-700">
              <span className="font-semibold text-black">Notes — </span>
              Platform compliance: TikTok Shop EU guidelines. No logo theft.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio + metrics placeholders */}
      <section className="mx-auto max-w-5xl border-t border-black/10 py-12">
        <h2 className="text-xl font-semibold tracking-tight">Portfolio</h2>
        <p className="mt-2 text-sm text-zinc-600">
          Best posts and performance breakdowns will be added as they are produced.
        </p>

        <dl className="mt-8 grid gap-8 sm:grid-cols-3">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
              Best posts
            </dt>
            <dd className="mt-1.5 text-sm text-zinc-800">
              XXXXXX (links coming soon)
            </dd>
          </div>

          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
              Case studies
            </dt>
            <dd className="mt-1.5 text-sm text-zinc-800">XXXXXX (2–4 planned)</dd>
          </div>

          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
              Metrics
            </dt>
            <dd className="mt-1.5 text-sm text-zinc-800">
              XXXXXX (views / CTR / conversion / GMV etc.)
            </dd>
          </div>
        </dl>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/portfolio"
            className="rounded-full border border-black/15 px-5 py-2.5 text-sm font-medium text-black hover:bg-black/5"
          >
            Go to portfolio
          </Link>
          <Link
            href="/results"
            className="rounded-full border border-black/15 px-5 py-2.5 text-sm font-medium text-black hover:bg-black/5"
          >
            View results
          </Link>
        </div>
      </section>

      {/* Pricing snapshot */}
      <section className="mx-auto max-w-5xl border-t border-black/10 py-12">
        <h2 className="text-xl font-semibold tracking-tight">Pricing (snapshot)</h2>
        <p className="mt-2 text-sm text-zinc-600">
          Final offers depend on product category, goals, and scale. Management is
          negotiable.
        </p>

        <dl className="mt-8 grid gap-8 sm:grid-cols-3">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
              Livestream
            </dt>
            <dd className="mt-1.5 text-2xl font-semibold tracking-tight text-black">
              €50 / hour
            </dd>
          </div>

          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
              Video
            </dt>
            <dd className="mt-1.5 text-2xl font-semibold tracking-tight text-black">
              €80 / hour
            </dd>
          </div>

          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
              Management
            </dt>
            <dd className="mt-1.5 text-2xl font-semibold tracking-tight text-black">
              VB (negotiable)
            </dd>
          </div>
        </dl>
      </section>

      {/* Brand fit / restrictions */}
      <section className="mx-auto max-w-5xl border-t border-black/10 py-12">
        <h2 className="text-xl font-semibold tracking-tight">Brand fit</h2>
        <p className="mt-2 text-sm text-zinc-600">
          We support a broad range of product categories. We do not promote restricted
          items.
        </p>

        <p className="mt-5 text-sm text-zinc-700">
          {RESTRICTED_PRODUCTS.map((item, index) => (
            <span key={item}>
              {item}
              {index < RESTRICTED_PRODUCTS.length - 1 ? (
                <span className="px-2 text-zinc-400">·</span>
              ) : null}
            </span>
          ))}
        </p>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl border-t border-black/10 py-12">
        <h2 className="text-xl font-semibold tracking-tight">Work with us</h2>
        <p className="mt-2 text-sm text-zinc-600">
          Tell us about your product, timeline, and targets — we respond within 24h.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-zinc-800"
          >
            Contact
          </Link>
          <a
            href="https://www.tiktok.com/@cyrixtl"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-black/15 px-5 py-2.5 text-sm font-medium text-black hover:bg-black/5"
          >
            TikTok
          </a>
        </div>

        <div className="mt-6 text-xs text-zinc-500">
          Contact method placeholders: Email (XXXXXX), Form (XXXXXX), Calendar
          (XXXXXX)
        </div>
      </section>
    </div>
  );
}
