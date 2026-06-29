const ITEMS = [
  { stat: "Board-Certified", label: "Urology" },
  { stat: "Men's Health", label: "Specialist & Researcher" },
  { stat: "National", label: "Speaker & Educator" },
  { stat: "Media", label: "Contributor" },
];

export default function CredibilityStrip() {
  return (
    <section className="border-b border-ink/5 bg-white" aria-label="Credentials at a glance">
      <div className="mx-auto grid max-w-content grid-cols-2 gap-px overflow-hidden px-5 py-10 sm:px-8 lg:grid-cols-4">
        {ITEMS.map((item) => (
          <div key={item.stat} className="reveal px-4 text-center">
            <p className="font-display text-xl font-600 text-ink sm:text-2xl">{item.stat}</p>
            <p className="mt-1 text-sm text-ink-600">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
