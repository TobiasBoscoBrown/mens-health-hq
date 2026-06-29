const TOPICS = [
  "Men's health across the lifespan",
  "Separating evidence from hype",
  "Prevention, screening & early detection",
  "Hormonal & sexual health, demystified",
  "Communicating risk to patients & the public",
];

const FORMATS = [
  { name: "Keynote", desc: "Signature talks for conferences and large audiences." },
  { name: "Panel", desc: "Expert moderation or contribution on health panels." },
  { name: "CME / Grand Rounds", desc: "Evidence-focused sessions for clinical audiences." },
  { name: "Media / Fireside", desc: "Interviews, podcasts, and on-stage conversations." },
];

export default function Speaking() {
  return (
    <section id="speaking" className="bg-sand py-20 sm:py-28">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left: topics + formats */}
          <div>
            <div className="reveal">
              <p className="mb-3 text-xs font-700 uppercase tracking-[0.2em] text-teal">Speaking</p>
              <h2 className="font-display text-3xl font-600 leading-tight text-ink sm:text-4xl">
                Book me to speak.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-ink-700">
                Engaging, evidence-grounded talks for medical, corporate, and public
                audiences &mdash; tailored to your event and audience.
              </p>
            </div>

            <div className="reveal mt-9">
              <h3 className="text-sm font-700 uppercase tracking-[0.16em] text-ink-600">Signature topics</h3>
              <ul className="mt-4 space-y-3">
                {TOPICS.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-ink-700">
                    <svg className="mt-1 h-5 w-5 shrink-0 text-teal" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
                    </svg>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="reveal mt-9 grid grid-cols-2 gap-3">
              {FORMATS.map((f) => (
                <div key={f.name} className="rounded-xl border border-ink/10 bg-white p-4">
                  <p className="font-600 text-ink">{f.name}</p>
                  <p className="mt-1 text-sm text-ink-600">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: booking prompt — routes to the single contact form */}
          <div className="reveal flex">
            <div className="flex w-full flex-col justify-center rounded-2xl border border-ink/10 bg-white p-8 shadow-card sm:p-10">
              <h3 className="font-display text-2xl font-600 text-ink">
                Bring evidence-based men&apos;s health to your audience.
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-ink-700">
                Share your event, audience, and goals, and Dr. Bernie&apos;s team will
                follow up to plan a session that fits.
              </p>

              <a
                href="#contact"
                className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-teal px-6 py-3.5 text-base font-600 text-white transition-colors hover:bg-teal-dark sm:w-auto"
              >
                Start a conversation
              </a>

              <p className="mt-5 text-sm text-ink-600">
                Prefer email?{" "}
                <a
                  href="mailto:speaking@example.com?subject=Speaking%20inquiry%20for%20Dr.%20Bernie"
                  className="font-600 text-teal hover:text-teal-dark"
                >
                  speaking@example.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
