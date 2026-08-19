// app/layout.tsx
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Linkup Studios",
  description: "TikTok Shop affiliate & creator partnerships.",
};

const BRAND = "Linkup Studios";

// TODO: Replace placeholders with real details later
const CONTACT = {
  email: "cyrixtlcyrixtl@gmail.com",
  phone: "+491629129923",
  addressLines: [
    "Retard Studios",
    "Jordan-Lee Tessmann",
    "Erwin-Rommel Straße 30",
    "40470 Düsseldorf",
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
      <body className="min-h-screen bg-[#F4F4F5] text-black">
        {/* Top bar */}
        <header className="sticky top-0 z-50 bg-black">
          <div className="flex items-center justify-between px-4 py-3 sm:px-8">
            <Link
              href="/"
              className="text-lg font-semibold tracking-tight text-white hover:opacity-90"
            >
              {BRAND}
            </Link>

            <nav className="hidden items-center gap-6 md:flex">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm text-white/75 hover:text-white"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="rounded-full border border-white/30 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
              >
                Contact
              </Link>
            </nav>

            {/* Mobile menu fallback (simple) */}
            <Link
              href="/contact"
              className="md:hidden rounded-full border border-white/30 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
            >
              Contact
            </Link>
          </div>
        </header>

        <main className="min-h-[70vh] px-4 sm:px-8">{children}</main>

        {/* Footer */}
        <footer className="mt-16 bg-black">
          <div className="grid gap-10 px-4 py-10 sm:px-8 md:grid-cols-3">
            {/* Brand */}
            <div className="space-y-2">
              <div className="text-base text-white/80 font-semibold">{BRAND}</div>
              <p className="text-sm text-white/60">
                TikTok Shop affiliate content & creator partnerships.
              </p>
            </div>

            {/* Contact */}
            <div className="space-y-2">
              <div className="text-sm font-semibold text-white">Contact</div>
              <div className="text-sm text-white/75">
                <div>
                  <span className="text-white/50">Email:</span>{" "}
                  <a className="hover:underline" href={`mailto:${CONTACT.email}`}>
                    {CONTACT.email}
                  </a>
                </div>
                <div>
                  <span className="text-white/50">Phone:</span>{" "}
                  <a className="hover:underline" href={`tel:${CONTACT.phone}`}>
                    {CONTACT.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Address + Social */}
            <div className="space-y-2">
              <div className="text-sm font-semibold text-white">Address</div>
              <address className="not-italic text-sm text-white/75">
                {CONTACT.addressLines.map((line) => (
                  <div key={line}>{line}</div>
                ))}
              </address>

              <div className="pt-3 text-sm">
                <a
                  className="text-white/75 hover:text-white hover:underline"
                  href={CONTACT.tiktokUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  TikTok
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 border-t border-white/10 px-4 py-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <div>© {new Date().getFullYear()} {BRAND}. All rights reserved.</div>
            <div className="flex gap-4">
              <Link className="hover:text-white hover:underline" href="/impressum">
                Impressum
              </Link>
              <Link className="hover:text-white hover:underline" href="/datenschutz">
                Datenschutzerklärung
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}