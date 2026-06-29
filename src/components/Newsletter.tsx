import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setDone(true);
  };

  return (
    <section
      id="newsletter"
      className="relative overflow-hidden bg-teal py-16 text-white sm:py-20"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(50% 80% at 90% 0%, rgba(255,255,255,0.25) 0%, rgba(31,122,140,0) 60%)",
        }}
      />
      <div className="relative mx-auto max-w-content px-5 sm:px-8">
        <div className="reveal grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="font-display text-3xl font-600 leading-tight sm:text-4xl">
              The evidence, in your inbox.
            </h2>
            <p className="mt-3 max-w-lg text-lg text-white/85">
              Occasional, no-noise notes on men&apos;s health research &mdash; what&apos;s new,
              what matters, and what to ignore.
            </p>
          </div>

          <div>
            {done ? (
              <div className="rounded-2xl bg-white/15 p-6 text-center backdrop-blur">
                <p className="font-600">You&apos;re on the list.</p>
                <p className="mt-1 text-sm text-white/80">
                  (Demo: your email was logged to the console &mdash; no real list yet.)
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-3 sm:flex-row"
                aria-label="Newsletter signup"
              >
                <label htmlFor="nl-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="nl-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full flex-1 rounded-full border border-white/30 bg-white/10 px-5 py-3.5 text-white placeholder-white/60 outline-none transition-colors focus:border-white focus:bg-white/20"
                />
                <button
                  type="submit"
                  className="rounded-full bg-white px-7 py-3.5 text-base font-600 text-ink transition-colors hover:bg-mist"
                >
                  Subscribe
                </button>
              </form>
            )}
            <p className="mt-3 text-xs text-white/70">
              Educational content only. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
