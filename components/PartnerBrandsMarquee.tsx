"use client";

import Image from "next/image";

type Brand = {
  name: string;
  logo: string;
};

type Props = {
  brands: Brand[];
};

export default function PartnerBrandsMarquee({ brands }: Props) {
  const repeatedBrands = [...brands, ...brands];

  return (
    <section className="mx-auto mt-4 max-w-5xl border-t border-black/10 py-12">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-xl font-semibold tracking-tight">Partner brands</h2>
        <p className="text-sm text-zinc-600">Selected partner brands.</p>
      </div>

      <div
        className="relative mt-8 overflow-hidden"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
        }}
      >
        <div className="flex w-max animate-brand-marquee items-center gap-10 sm:gap-12">
          {repeatedBrands.map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="relative h-12 w-28 shrink-0 sm:h-14 sm:w-32 lg:h-16 lg:w-36"
            >
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
  );
}