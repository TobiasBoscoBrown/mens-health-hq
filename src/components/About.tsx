export default function About() {
  return (
    <section id="about" className="bg-sand py-20 sm:py-28">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="reveal">
            <p className="mb-3 text-xs font-700 uppercase tracking-[0.2em] text-teal">About</p>
            <h2 className="font-display text-3xl font-600 leading-tight text-ink sm:text-4xl">
              A clinician&apos;s voice you can trust.
            </h2>
            <div className="mt-8 flex items-center gap-4 rounded-2xl border border-ink/10 bg-white p-5 shadow-card">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-teal/30 bg-teal/10 font-display text-2xl font-600 text-teal">
                B
              </div>
              <div>
                <p className="font-600 text-ink">Dr. H. Bernie, MD</p>
                <p className="text-sm text-ink-600">
                  Board-Certified Urologist &middot; Men&apos;s Health Educator
                </p>
              </div>
            </div>
          </div>

          <div className="reveal space-y-5 text-lg leading-relaxed text-ink-700">
            <p>
              Dr. Bernie is a board-certified urologist and men&apos;s-health specialist
              whose work bridges the clinic, the lab, and the public conversation. As a
              researcher and educator, she focuses on translating rigorous evidence into
              guidance that patients and clinicians can actually use.
            </p>
            <p>
              Alongside clinical and academic work, she is a national speaker and media
              contributor, helping demystify topics that men too often navigate alone &mdash;
              from prevention and screening to hormonal, sexual, and urologic health.
            </p>
            <p className="text-base text-ink-600">
              <em>
                Editable placeholder bio. Replace with Dr. Bernie&apos;s approved
                professional biography, credentials, and affiliations before launch.
              </em>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
