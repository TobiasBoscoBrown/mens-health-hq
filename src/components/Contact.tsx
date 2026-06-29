import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    console.log("Contact inquiry:", data);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="reveal">
            <p className="mb-3 text-xs font-700 uppercase tracking-[0.2em] text-teal">Contact</p>
            <h2 className="font-display text-3xl font-600 leading-tight text-ink sm:text-4xl">
              Get in touch.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-700">
              For media requests, speaking, collaborations, or general inquiries,
              reach out below or by email.
            </p>

            <dl className="mt-9 space-y-5">
              <div>
                <dt className="text-sm font-700 uppercase tracking-[0.14em] text-ink-600">Media &amp; press</dt>
                <dd className="mt-1">
                  <a href="mailto:media@example.com" className="text-lg font-600 text-teal hover:text-teal-dark">
                    media@example.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-700 uppercase tracking-[0.14em] text-ink-600">Speaking &amp; events</dt>
                <dd className="mt-1">
                  <a href="mailto:speaking@example.com" className="text-lg font-600 text-teal hover:text-teal-dark">
                    speaking@example.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-700 uppercase tracking-[0.14em] text-ink-600">General</dt>
                <dd className="mt-1">
                  <a href="mailto:hello@example.com" className="text-lg font-600 text-teal hover:text-teal-dark">
                    hello@example.com
                  </a>
                </dd>
              </div>
            </dl>
            <p className="mt-6 text-sm text-ink-600">
              <em>Placeholder contact addresses — replace with real inboxes before launch.</em>
            </p>
          </div>

          <div className="reveal">
            <div className="rounded-2xl border border-ink/10 bg-sand p-6 shadow-card sm:p-8">
              {submitted ? (
                <div className="flex h-full min-h-[18rem] flex-col items-center justify-center text-center">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-teal/10 text-teal">
                    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl font-600 text-ink">Message sent</h3>
                  <p className="mt-2 max-w-sm text-ink-600">
                    Thanks for reaching out (demo: logged to the console). We&apos;ll reply soon.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm font-600 text-teal hover:text-teal-dark"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="ct-name" className="mb-1.5 block text-sm font-600 text-ink">
                        Name <span className="text-teal">*</span>
                      </label>
                      <input
                        id="ct-name"
                        name="name"
                        required
                        className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-ink outline-none transition-colors focus:border-teal"
                      />
                    </div>
                    <div>
                      <label htmlFor="ct-email" className="mb-1.5 block text-sm font-600 text-ink">
                        Email <span className="text-teal">*</span>
                      </label>
                      <input
                        id="ct-email"
                        name="email"
                        type="email"
                        required
                        className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-ink outline-none transition-colors focus:border-teal"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="ct-subject" className="mb-1.5 block text-sm font-600 text-ink">
                      Subject
                    </label>
                    <input
                      id="ct-subject"
                      name="subject"
                      className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-ink outline-none transition-colors focus:border-teal"
                    />
                  </div>
                  <div>
                    <label htmlFor="ct-message" className="mb-1.5 block text-sm font-600 text-ink">
                      Message <span className="text-teal">*</span>
                    </label>
                    <textarea
                      id="ct-message"
                      name="message"
                      rows={4}
                      required
                      className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-ink outline-none transition-colors focus:border-teal"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-full bg-ink px-6 py-3.5 text-base font-600 text-white transition-colors hover:bg-ink-700"
                  >
                    Send message
                  </button>
                  <p className="text-center text-sm text-ink-600">
                    Or email{" "}
                    <a href="mailto:hello@example.com" className="font-600 text-teal hover:text-teal-dark">
                      hello@example.com
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
