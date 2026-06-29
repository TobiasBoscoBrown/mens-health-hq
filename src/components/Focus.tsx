const FOCUS = [
  {
    title: "Prevention & Screening",
    body:
      "Clear, evidence-based guidance on what to screen for and when — turning guidelines into practical decisions men can act on.",
    icon: (
      <path d="M12 2 4 5v6c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V5l-8-3Zm-1 14-3.5-3.5 1.4-1.4L11 13.2l4.6-4.6 1.4 1.4L11 16Z" />
    ),
  },
  {
    title: "Hormonal & Sexual Health",
    body:
      "Balanced education on testosterone, sexual function, and fertility — separating durable science from hype and marketing.",
    icon: (
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 14a8 8 0 0 1-5.3-2c.05-1.8 3.5-2.8 5.3-2.8s5.25 1 5.3 2.8A8 8 0 0 1 12 20Z" />
    ),
  },
  {
    title: "Urologic Conditions",
    body:
      "Approachable explanations of common urologic concerns, treatment options, and what the evidence does — and doesn't — support.",
    icon: (
      <path d="M5 3h14a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v9a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-9H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm3 9v7h8v-7H8Z" />
    ),
  },
];

export default function Focus() {
  return (
    <section id="focus" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-700 uppercase tracking-[0.2em] text-teal">What I focus on</p>
          <h2 className="font-display text-3xl font-600 leading-tight text-ink sm:text-4xl">
            Three areas where clear evidence matters most.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {FOCUS.map((item) => (
            <article
              key={item.title}
              className="reveal group rounded-2xl border border-ink/10 bg-sand p-7 transition-all hover:-translate-y-1 hover:border-teal/30 hover:shadow-card"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-teal/10 text-teal transition-colors group-hover:bg-teal group-hover:text-white">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  {item.icon}
                </svg>
              </div>
              <h3 className="font-display text-xl font-600 text-ink">{item.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-ink-600">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
