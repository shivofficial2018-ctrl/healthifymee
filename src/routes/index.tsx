import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-woman.jpg";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { title: "Book Your HealthifyMe Plan – Personalized Diet & Coaching" },
      {
        name: "description",
        content:
          "Talk to a HealthifyMe expert and get a personalized diet, workout and coaching plan built for your body and lifestyle.",
      },
    ],
  }),
});

function CTA({ block = false }: { block?: boolean }) {
  return (
    <a
      href="#book"
      onClick={(e) => {
        e.preventDefault();
        const el = document.getElementById("book");
        el?.scrollIntoView({ behavior: "smooth", block: "center" });
      }}
      className={`btn-cta ${block ? "w-full sm:w-auto" : ""}`}
    >
      Book My Plan
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14M13 5l7 7-7 7" />
      </svg>
    </a>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground font-display font-extrabold">
        H
      </div>
      <span className="font-display text-xl font-extrabold tracking-tight text-ink">
        healthify<span className="text-primary">me</span>
      </span>
    </div>
  );
}

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <Logo />
          <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex">
            <a href="#how" className="hover:text-foreground">How it works</a>
            <a href="#results" className="hover:text-foreground">Results</a>
            <a href="#faq" className="hover:text-foreground">FAQ</a>
          </nav>
          <div className="hidden sm:block"><CTA /></div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-accent/25 blur-3xl" />

        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-2 md:py-20">
          <div>
            <span className="pill">
              <span className="h-2 w-2 rounded-full bg-primary" />
              India's #1 Health & Fitness App
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] text-ink md:text-6xl">
              Lose weight the <span className="text-primary">healthy way</span>, with a coach who gets you.
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
              A personalized diet, workout & habit plan built by certified nutritionists — designed around Indian meals, your schedule and your goal.
            </p>

            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <CTA block />
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {["#f7c59f", "#e0aaff", "#a2d6f9", "#c1e1c1"].map((c, i) => (
                    <div
                      key={i}
                      className="h-8 w-8 rounded-full border-2 border-background"
                      style={{ background: c }}
                    />
                  ))}
                </div>
                <div className="text-sm">
                  <div className="font-semibold text-ink">4.6 ★ · 35M+ users</div>
                  <div className="text-muted-foreground">trust HealthifyMe</div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              {["Certified nutritionists", "Indian meal plans", "No crash diets"].map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-primary" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  {t}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/20 via-accent/30 to-transparent blur-2xl" />
            <div className="overflow-hidden rounded-[2rem] border border-border bg-cream shadow-2xl">
              <img
                src={heroImg}
                alt="HealthifyMe coach and app user"
                width={1200}
                height={1400}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Floating stat cards */}
            <div className="absolute -left-4 top-8 hidden rounded-2xl border border-border bg-card px-4 py-3 shadow-lg sm:block">
              <div className="text-xs text-muted-foreground">Weight lost</div>
              <div className="font-display text-2xl font-extrabold text-primary">-8.2 kg</div>
              <div className="text-[10px] text-muted-foreground">in 12 weeks</div>
            </div>
            <div className="absolute -right-3 bottom-10 hidden rounded-2xl border border-border bg-card px-4 py-3 shadow-lg sm:block">
              <div className="flex items-center gap-2">
                <div className="h-9 w-9 rounded-full bg-secondary grid place-items-center text-primary font-bold">N</div>
                <div>
                  <div className="text-sm font-semibold text-ink">Neha, Coach</div>
                  <div className="text-xs text-muted-foreground">Replied in 2 min</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured strip */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-5 py-5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          <span>As featured in</span>
          <span>Forbes</span>
          <span>YourStory</span>
          <span>ET Prime</span>
          <span>Vogue</span>
          <span>Mint</span>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-2xl">
          <span className="pill">How it works</span>
          <h2 className="mt-4 text-3xl font-extrabold text-ink md:text-4xl">
            A plan built around you in 3 simple steps
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              n: "01",
              t: "Book your plan",
              d: "Tell us your goal, food habits and schedule. Takes 2 minutes.",
            },
            {
              n: "02",
              t: "Meet your coach",
              d: "A certified nutritionist designs a plan for your body and lifestyle.",
            },
            {
              n: "03",
              t: "Track & transform",
              d: "Log meals, follow workouts and chat with your coach — right in the app.",
            },
          ].map((s) => (
            <div
              key={s.n}
              className="group rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
            >
              <div className="font-display text-sm font-bold text-primary">{s.n}</div>
              <h3 className="mt-2 text-xl font-bold text-ink">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Results */}
      <section id="results" className="bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="grid gap-4 md:grid-cols-4">
            {[
              ["35M+", "Happy users"],
              ["4.6 ★", "App rating"],
              ["1,500+", "Expert coaches"],
              ["-6.4 kg", "Avg. weight lost"],
            ].map(([n, l]) => (
              <div key={l} className="rounded-2xl bg-card p-6 text-center shadow-sm">
                <div className="font-display text-3xl font-extrabold text-primary md:text-4xl">{n}</div>
                <div className="mt-1 text-sm text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                q: "Lost 11kg in 4 months without giving up my rotis. My coach made it feel doable every single day.",
                n: "Priya S.",
                r: "Bengaluru · Lost 11 kg",
              },
              {
                q: "The plan actually fit my night shifts. First time in years I've stuck to something for more than a month.",
                n: "Arjun M.",
                r: "Mumbai · Lost 7 kg",
              },
              {
                q: "PCOS-friendly diet, weekly check-ins, and real food. My energy and cycles are finally back on track.",
                n: "Riya K.",
                r: "Delhi · Managing PCOS",
              },
            ].map((t) => (
              <figure key={t.n} className="rounded-2xl border border-border bg-card p-6">
                <div className="text-accent">★★★★★</div>
                <blockquote className="mt-3 text-[15px] leading-relaxed text-ink">
                  "{t.q}"
                </blockquote>
                <figcaption className="mt-4 text-sm">
                  <div className="font-semibold text-ink">{t.n}</div>
                  <div className="text-muted-foreground">{t.r}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-3xl px-5 py-20">
        <h2 className="text-center text-3xl font-extrabold text-ink md:text-4xl">
          Questions, answered
        </h2>
        <div className="mt-10 space-y-3">
          {[
            {
              q: "What happens after I book my plan?",
              a: "A HealthifyMe expert will call you within 24 hours to understand your goal and build your personalized plan.",
            },
            {
              q: "Is the plan customized for Indian food?",
              a: "Yes — every plan is designed around Indian meals, regional preferences and your daily schedule.",
            },
            {
              q: "How long is the program?",
              a: "Plans start at 3 months. Your coach adjusts it every week based on your progress.",
            },
            {
              q: "Do I need to buy any equipment or supplements?",
              a: "No. Workouts are designed for home and diets use everyday kitchen ingredients.",
            },
          ].map((f) => (
            <details
              key={f.q}
              className="group rounded-xl border border-border bg-card p-5 open:shadow-sm"
            >
              <summary className="flex cursor-pointer items-center justify-between list-none font-semibold text-ink">
                {f.q}
                <span className="ml-4 grid h-7 w-7 place-items-center rounded-full bg-secondary text-primary transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section id="book" className="px-5 pb-24">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary-dark p-10 text-center text-primary-foreground shadow-2xl md:p-16">
          <span className="pill bg-white/15 text-white">Limited slots this week</span>
          <h2 className="mt-5 font-display text-3xl font-extrabold md:text-5xl">
            Your healthier self is one call away.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/85 md:text-lg">
            Book your plan today. A HealthifyMe expert will design it around you — free consultation, no obligation.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-display text-lg font-bold text-primary shadow-xl transition hover:-translate-y-0.5 hover:shadow-2xl"
            >
              Book My Plan
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="mt-5 text-sm text-white/70">
            Free consultation · Cancel anytime · Trusted by 35M+
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-muted-foreground md:flex-row">
          <Logo />
          <div>© {new Date().getFullYear()} HealthifyMe. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
