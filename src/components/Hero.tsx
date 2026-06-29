export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-ink text-white"
    >
      {/* Decorative gradient field */}
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(60% 60% at 80% 10%, rgba(31,122,140,0.35) 0%, rgba(14,27,42,0) 60%), radial-gradient(50% 50% at 10% 90%, rgba(31,122,140,0.18) 0%, rgba(14,27,42,0) 55%)",
        }}
      />
      <div className="relative mx-auto grid max-w-content grid-cols-1 items-center gap-12 px-5 pb-20 pt-32 sm:px-8 sm:pt-36 lg:grid-cols-[1.15fr_0.85fr] lg:pb-28 lg:pt-40">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-600 uppercase tracking-[0.18em] text-teal-light">
            Board-Certified Urologist &amp; Educator
          </p>
          <h1 className="font-display text-4xl font-600 leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Evidence-based
            <br />
            men&apos;s health,
            <br />
            <span className="text-teal-light">made clear.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
            I&apos;m Dr. Bernie, MD &mdash; a board-certified urologist, researcher, and
            national speaker translating the latest evidence into practical,
            trustworthy guidance for men and the clinicians who care for them.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#media"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-teal px-7 py-3.5 text-base font-600 text-white shadow-soft transition-transform hover:-translate-y-0.5 hover:bg-teal-dark"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
              Watch / Media
            </a>
            <a
              href="#speaking"
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-3.5 text-base font-600 text-white transition-colors hover:border-white/60 hover:bg-white/5"
            >
              Book a talk
            </a>
          </div>
        </div>

        {/* Headshot placeholder */}
        <div className="reveal flex justify-center lg:justify-end">
          <figure className="relative">
            <div className="flex h-72 w-72 items-center justify-center rounded-3xl border border-white/15 bg-gradient-to-br from-ink-700 to-ink-900 shadow-soft sm:h-80 sm:w-80">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full border border-teal/40 bg-teal/10 font-display text-4xl font-600 text-teal-light">
                  B
                </div>
                <p className="text-xs font-600 uppercase tracking-[0.18em] text-white/50">
                  Add headshot
                </p>
              </div>
            </div>
            <figcaption className="sr-only">
              Placeholder for Dr. Bernie&apos;s professional headshot.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
