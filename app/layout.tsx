// app/layout.tsx
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "cyrixtlshop",
  description: "TikTok Shop affiliate & creator partnerships.",
};

const BRAND = "cyrixtlshop";

// TODO: Replace placeholders with real details later
const CONTACT = {
  email: "hello@cyrixtlshop.com",
  phone: "+49 000 0000000",
  addressLines: [
    "cyrixtlshop",
    "PO Box 1234",
    "10115 Berlin",
    "Germany",
  ],
  tiktokUrl: "https://www.tiktok.com/@cyrixtl",
};

const NAV_LINKS: Array<{ href: string; label: string }> = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/results", label: "Results" },
  { href: "/about", label: "About" },
];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-zinc-900">
        {/* Background wash */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 -z-10"
        >
          <div className="absolute -top-40 left-[-10%] h-[520px] w-[520px] rounded-full bg-sky-200/30 blur-3xl" />
          <div className="absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-violet-200/25 blur-3xl" />
          <div className="absolute bottom-[-260px] left-1/2 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-zinc-200/30 blur-3xl" />
        </div>

        {/* Top bar */}
        <header className="sticky top-0 z-50 border-b border-zinc-200/60 bg-white/70 backdrop-blur">
          <div className="flex items-center justify-between px-4 py-3 sm:px-8">
            <Link
              href="/"
              className="text-lg font-semibold tracking-tight hover:opacity-90"
            >
              {BRAND}
            </Link>

            <nav className="hidden items-center gap-6 md:flex">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm text-zinc-700 hover:text-zinc-900"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-900 shadow-sm hover:bg-zinc-50"
              >
                Contact
              </Link>
            </nav>

            {/* Mobile menu fallback (simple) */}
            <Link
              href="/contact"
              className="md:hidden rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-900 shadow-sm hover:bg-zinc-50"
            >
              Contact
            </Link>
          </div>
        </header>

        <main className="min-h-[70vh] px-4 sm:px-8">{children}</main>

        {/* Footer */}
        <footer className="mt-16 border-t border-zinc-200/60 bg-white">
          <div className="grid gap-10 px-4 py-10 sm:px-8 md:grid-cols-3">
            {/* Brand */}
            <div className="space-y-2">
              <div className="text-base font-semibold">{BRAND}</div>
              <p className="text-sm text-zinc-600">
                TikTok Shop affiliate content & creator partnerships.
              </p>
            </div>

            {/* Contact */}
            <div className="space-y-2">
              <div className="text-sm font-semibold text-zinc-900">Contact</div>
              <div className="text-sm text-zinc-700">
                <div>
                  <span className="text-zinc-500">Email:</span>{" "}
                  <a className="hover:underline" href={`mailto:${CONTACT.email}`}>
                    {CONTACT.email}
                  </a>
                </div>
                <div>
                  <span className="text-zinc-500">Phone:</span>{" "}
                  <a className="hover:underline" href={`tel:${CONTACT.phone}`}>
                    {CONTACT.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Address + Social */}
            <div className="space-y-2">
              <div className="text-sm font-semibold text-zinc-900">Address</div>
              <address className="not-italic text-sm text-zinc-700">
                {CONTACT.addressLines.map((line) => (
                  <div key={line}>{line}</div>
                ))}
              </address>

              <div className="pt-3 text-sm">
                <a
                  className="text-zinc-700 hover:text-zinc-900 hover:underline"
                  href={CONTACT.tiktokUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  TikTok
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 border-t border-zinc-200/60 px-4 py-6 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <div>© {new Date().getFullYear()} {BRAND}. All rights reserved.</div>
            <div className="flex gap-4">
              <Link className="hover:text-zinc-900 hover:underline" href="/impressum">
                Impressum
              </Link>
              <Link className="hover:text-zinc-900 hover:underline" href="/datenschutz">
                Datenschutzerklärung
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}