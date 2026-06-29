import { XIcon, LinkedInIcon, InstagramIcon, YouTubeIcon } from "./Icons";

const SOCIALS = [
  { name: "X (Twitter)", href: "https://x.com/", Icon: XIcon },
  { name: "LinkedIn", href: "https://www.linkedin.com/", Icon: LinkedInIcon },
  { name: "Instagram", href: "https://www.instagram.com/", Icon: InstagramIcon },
  { name: "YouTube", href: "https://www.youtube.com/", Icon: YouTubeIcon },
];

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Focus", href: "#focus" },
  { label: "Media", href: "#media" },
  { label: "Speaking", href: "#speaking" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-white">
      <div className="mx-auto max-w-content px-5 py-14 sm:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-xl font-600">
              Dr. Bernie<span className="text-teal-light">, MD</span>
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/60">
              Evidence-based men&apos;s health education from a board-certified
              urologist, researcher, and national speaker.
            </p>
            <div className="mt-5 flex gap-3">
              {SOCIALS.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-teal-light hover:text-teal-light"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Footer">
            <p className="text-sm font-700 uppercase tracking-[0.14em] text-white/50">Explore</p>
            <ul className="mt-4 space-y-2.5">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-white/70 transition-colors hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-sm font-700 uppercase tracking-[0.14em] text-white/50">Contact</p>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              <li>
                <a href="mailto:media@example.com" className="transition-colors hover:text-white">
                  media@example.com
                </a>
              </li>
              <li>
                <a href="mailto:speaking@example.com" className="transition-colors hover:text-white">
                  speaking@example.com
                </a>
              </li>
              <li>
                <a href="#newsletter" className="transition-colors hover:text-white">
                  Join the newsletter
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-xs leading-relaxed text-white/45">
            &copy; {new Date().getFullYear()} Dr. Bernie, MD. All rights reserved.
            &ldquo;Dr. Bernie&rdquo; is used here as an editable placeholder brand label.
          </p>
          <p className="mt-2 text-xs leading-relaxed text-white/45">
            This site is for general educational purposes only and is not medical
            advice. It does not establish a doctor&ndash;patient relationship.
            Always consult a qualified healthcare professional about your individual
            situation.
          </p>
        </div>
      </div>
    </footer>
  );
}
