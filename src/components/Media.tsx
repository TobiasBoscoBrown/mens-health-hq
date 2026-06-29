const MEDIA = [
  { type: "Featured TV segment", note: "Outlet to be added" },
  { type: "Podcast interview", note: "Show to be added" },
  { type: "Print / online feature", note: "Publication to be added" },
  { type: "Live panel / interview", note: "Event to be added" },
  { type: "Expert commentary", note: "Outlet to be added" },
  { type: "Educational video series", note: "Channel to be added" },
];

export default function Media() {
  return (
    <section id="media" className="bg-ink py-20 text-white sm:py-28">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <div className="reveal flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-700 uppercase tracking-[0.2em] text-teal-light">Media</p>
            <h2 className="font-display text-3xl font-600 leading-tight sm:text-4xl">
              TV, podcasts, interviews &amp; press.
            </h2>
            <p className="mt-4 text-lg text-white/70">
              A selection of appearances and features. Add real segments, links,
              and thumbnails as they go live.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {MEDIA.map((item, i) => (
            <article
              key={i}
              className="reveal group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] transition-colors hover:border-teal-light/40"
            >
              <div className="relative flex aspect-video items-center justify-center bg-gradient-to-br from-ink-700 to-ink-900">
                <svg className="h-12 w-12 text-white/30 transition-colors group-hover:text-teal-light" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <div className="p-5">
                <p className="font-600 text-white">{item.type}</p>
                <p className="mt-1 text-sm text-white/55">{item.note}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="reveal mt-8 text-center text-sm text-white/45">
          These are placeholder cards. No outlet, network, or publication is
          implied or endorsed — replace with verified appearances before launch.
        </p>
      </div>
    </section>
  );
}
