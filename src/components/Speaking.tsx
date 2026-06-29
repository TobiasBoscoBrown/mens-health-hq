import { useState } from "react";

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
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    // No backend in V1 — log + mailto fallback.
    console.log("Speaking inquiry:", data);
    setSubmitted(true);
  };

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
                audiences — tailored to your event and audience.
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

          {/* Right: inquiry form */}
          <div className="reveal">
            <div className="rounded-2xl border border-ink/10 bg-white p-6 shadow-card sm:p-8">
              {submitted ? (
                <div className="flex h-full min-h-[20rem] flex-col items-center justify-center text-center">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-teal/10 text-teal">
                    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl font-600 text-ink">Thank you</h3>
                  <p className="mt-2 max-w-sm text-ink-600">
                    Your speaking inquiry has been received (demo: logged to the
                    console). Dr. Bernie&apos;s team will be in touch.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm font-600 text-teal hover:text-teal-dark"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-display text-xl font-600 text-ink">Speaking inquiry</h3>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Field label="Your name" name="name" required />
                    <Field label="Organization" name="organization" />
                  </div>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Field label="Email" name="email" type="email" required />
                    <Field label="Event date" name="date" type="date" />
                  </div>
                  <div>
                    <label htmlFor="sp-message" className="mb-1.5 block text-sm font-600 text-ink">
                      Event details
                    </label>
                    <textarea
                      id="sp-message"
                      name="message"
                      rows={4}
                      className="w-full rounded-xl border border-ink/15 bg-sand px-4 py-3 text-ink outline-none transition-colors focus:border-teal focus:bg-white"
                      placeholder="Audience, format (keynote / panel / CME), location, and goals."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-full bg-teal px-6 py-3.5 text-base font-600 text-white transition-colors hover:bg-teal-dark"
                  >
                    Send speaking inquiry
                  </button>
                  <p className="text-center text-sm text-ink-600">
                    Prefer email?{" "}
                    <a
                      href="mailto:speaking@example.com?subject=Speaking%20inquiry%20for%20Dr.%20Bernie"
                      className="font-600 text-teal hover:text-teal-dark"
                    >
                      speaking@example.com
                    </a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={`sp-${name}`} className="mb-1.5 block text-sm font-600 text-ink">
        {label}
        {required && <span className="text-teal"> *</span>}
      </label>
      <input
        id={`sp-${name}`}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-ink/15 bg-sand px-4 py-3 text-ink outline-none transition-colors focus:border-teal focus:bg-white"
      />
    </div>
  );
}
