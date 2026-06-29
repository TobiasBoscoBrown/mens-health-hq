import { useEffect, useState } from "react";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Focus", href: "#focus" },
  { label: "Media", href: "#media" },
  { label: "Speaking", href: "#speaking" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ink/95 backdrop-blur shadow-soft" : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex max-w-content items-center justify-between px-5 py-4 sm:px-8"
        aria-label="Primary"
      >
        <a
          href="#top"
          className="font-display text-lg font-600 tracking-tight text-white"
        >
          Dr. Bernie<span className="text-teal-light">, MD</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm font-500 text-white/80 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#speaking"
              className="rounded-full bg-teal px-5 py-2 text-sm font-600 text-white transition-colors hover:bg-teal-dark"
            >
              Book a talk
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-white md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div id="mobile-nav" className="border-t border-white/10 bg-ink/98 backdrop-blur md:hidden">
          <ul className="space-y-1 px-5 py-4">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-500 text-white/90 hover:bg-white/5"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#speaking"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-full bg-teal px-3 py-3 text-center text-base font-600 text-white"
              >
                Book a talk
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
