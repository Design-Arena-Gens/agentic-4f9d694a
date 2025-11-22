import HelloClock from "@/components/HelloClock";

export default function Home() {
  const highlights = [
    {
      title: "Instant hello",
      description: "Open this page to be greeted with a warm, time-aware hello message.",
    },
    {
      title: "Friendly reminders",
      description: "Take a deep breath, stretch, and share a hello with someone nearby.",
    },
    {
      title: "Always ready",
      description: "Deploy this project to Vercel and your greeting is available worldwide.",
    },
  ];

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),_transparent_60%),_radial-gradient(circle_at_bottom,_rgba(244,114,182,0.2),_transparent_55%)]" />
      <main className="relative z-10 flex flex-1 flex-col">
        <header className="flex flex-1 flex-col items-center justify-center px-6 py-20 sm:px-12">
          <div className="max-w-3xl text-center sm:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-medium uppercase tracking-[0.2em] text-white/80">
              Hello there
            </span>
            <h1 className="mt-6 text-5xl font-bold tracking-tight sm:text-6xl">
              Hello, world — a gentle greeting crafted with Next.js
            </h1>
            <p className="mt-4 text-lg text-white/80 sm:text-xl">
              This tiny experience celebrates the universal joy of saying hello. Come back
              anytime for a fresh greeting and a reminder to spark a friendly moment.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                className="rounded-full bg-white px-6 py-3 text-center font-medium text-slate-900 shadow-lg shadow-cyan-400/30 transition hover:-translate-y-0.5 hover:shadow-cyan-400/50"
                href="#highlights"
              >
                Explore Highlights
              </a>
              <a
                className="rounded-full border border-white/30 px-6 py-3 text-center font-medium text-white transition hover:-translate-y-0.5 hover:border-white/60"
                href="mailto:hello@example.com?subject=Hello!"
              >
                Share Your Hello
              </a>
            </div>
          </div>
          <div className="mt-10 w-full max-w-2xl">
            <HelloClock />
          </div>
        </header>

        <section
          id="highlights"
          className="relative border-t border-white/10 bg-slate-900/40 px-6 py-20 sm:px-12"
        >
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-center text-3xl font-semibold sm:text-4xl">
              Why a simple hello matters
            </h2>
            <p className="text-center text-lg text-white/70">
              A heartfelt greeting breaks the ice, brightens someone’s day, and opens the door to
              meaningful connection. Use this page as a gentle nudge to keep the hellos coming.
            </p>
            <div className="grid gap-6 sm:grid-cols-3">
              {highlights.map((item) => (
                <article
                  key={item.title}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-300/60 hover:bg-white/10"
                >
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm text-white/70">{item.description}</p>
                  <span className="mt-4 inline-flex items-center text-sm font-medium text-cyan-200">
                    Learn more
                    <svg
                      className="ml-1 h-4 w-4 transition group-hover:translate-x-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10 bg-slate-950/80 px-6 py-8 text-center text-sm text-white/60">
          Made with a warm hello and a touch of Tailwind CSS.
        </footer>
      </main>
    </div>
  );
}
