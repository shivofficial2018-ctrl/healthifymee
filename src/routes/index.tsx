import { createFileRoute } from "@tanstack/react-router";
import healthifyLogo from "@/assets/healthify-logo.png.asset.json";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { title: "Healthify – Book Your Personalized Health Plan" },
      {
        name: "description",
        content:
          "Meet Healthify. Health made easy with AI. Book your personalized plan today — free consultation with a certified nutritionist.",
      },
    ],
  }),
});

function Logo() {
  return (
    <a href="/" className="flex items-center gap-2">
      <img
        src={healthifyLogo.url}
        alt="Healthify"
        className="h-8 w-auto md:h-9"
      />
    </a>
  );
}

function BookMyPlanButton({
  size = "md",
  variant = "solid",
}: {
  size?: "md" | "lg";
  variant?: "solid" | "outline";
}) {
  const scroll = (e: React.MouseEvent) => {
    e.preventDefault();
    document
      .getElementById("book")
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const base = variant === "outline" ? "btn-outline" : "btn-primary";
  const sizing = size === "lg" ? "text-base px-8 py-4" : "";
  return (
    <a href="#book" onClick={scroll} className={`${base} ${sizing}`}>
      Book My Plan
    </a>
  );
}

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border/60 bg-background">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Logo />
        </div>
      </header>

      {/* Announcement banner */}
      <div className="bg-banner">
        <div className="mx-auto flex max-w-7xl items-start gap-3 px-6 py-4">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-primary font-display text-sm font-bold italic text-primary-foreground">
            Rx
          </span>
          <div>
            <div className="font-display font-bold text-ink">
              Introducing HealthifyRx: Medical Weight Loss That Lasts
            </div>
            <p className="text-sm text-muted-foreground">
              Clinically backed GLP-1 medication, doctor support, and personalized coaching — all in one plan.
            </p>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-hero">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
          <div>
            <div className="mb-6 text-primary" aria-hidden="true">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l1.6 5.4L19 9l-5.4 1.6L12 16l-1.6-5.4L5 9l5.4-1.6L12 2zm7 12l.9 2.6L22 17l-2.1.4L19 20l-.9-2.6L16 17l2.1-.4L19 14zM5 15l.7 2.1L8 18l-2.3.9L5 21l-.7-2.1L2 18l2.3-.9L5 15z" />
              </svg>
            </div>
            <h1 className="font-display text-5xl font-extrabold leading-[1.05] text-primary md:text-6xl">
              Meet Healthify.
            </h1>
            <h2 className="mt-3 font-display text-4xl font-extrabold leading-[1.1] text-ink md:text-5xl">
              Health Made Easy<br />With AI.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
              A personalized diet, workout and coaching plan built around your body,
              your food and your goal — powered by HealthifySnap and your AI coach Ria.
            </p>

            <div id="book" className="mt-8 scroll-mt-24">
              <BookMyPlanButton size="lg" />
              <p className="mt-3 text-sm text-muted-foreground">
                Free consultation · Trusted by 35M+ users · 4.6 ★ rated
              </p>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            {/* Chat bubbles */}
            <div className="absolute -left-2 top-8 z-10 hidden rounded-2xl bg-white px-4 py-2.5 text-sm shadow-lg sm:flex items-center gap-2">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-accent/20 text-accent">🥗</span>
              Suggest low carbs lunch
            </div>
            <div className="absolute -right-2 top-32 z-10 hidden rounded-2xl bg-white px-4 py-2.5 text-sm shadow-lg sm:flex items-center gap-2">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-secondary text-primary">🌙</span>
              How to improve my sleep?
            </div>
            <div className="absolute -left-4 bottom-24 z-10 hidden rounded-2xl bg-white px-4 py-2.5 text-sm shadow-lg sm:flex items-center gap-2">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-primary text-primary-foreground text-xs">✦</span>
              How was my day today?
            </div>

            {/* Phone frame */}
            <div className="relative mx-auto w-[280px] rounded-[2.5rem] border-[10px] border-ink bg-ink shadow-2xl md:w-[320px]">
              <div className="absolute left-1/2 top-2 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-ink" />
              <div className="overflow-hidden rounded-[1.75rem] bg-white">
                {/* Meal photo */}
                <div className="relative h-64 bg-gradient-to-br from-emerald-900 to-emerald-700">
                  <div className="absolute inset-0 grid place-items-center text-8xl">🥗</div>
                </div>
                <div className="p-4">
                  <div className="text-[13px] font-semibold text-ink leading-tight">
                    Roasted pumpkin, quinoa, tomatoes & greens salad.
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">261 Cal</div>

                  <div className="mt-4 grid grid-cols-4 gap-2 text-center">
                    {[
                      ["8.6 g", "Proteins"],
                      ["33.3 g", "Carbs"],
                      ["11.7 g", "Fats"],
                      ["7.5 g", "Fiber"],
                    ].map(([v, l]) => (
                      <div key={l} className="rounded-lg bg-secondary/60 py-2">
                        <div className="text-[11px] font-bold text-ink">{v}</div>
                        <div className="text-[9px] text-muted-foreground">{l}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center justify-center gap-1.5 text-[10px] text-muted-foreground">
                    <span className="grid h-4 w-4 place-items-center rounded-full border border-primary font-bold text-primary text-[8px]">H</span>
                    Tracked with Snap
                  </div>
                </div>
              </div>
            </div>

            {/* Ria coach card */}
            <div className="absolute -right-4 bottom-6 z-10 hidden rounded-2xl bg-white p-3 shadow-xl sm:block max-w-[220px]">
              <div className="flex items-center gap-2">
                <div className="grid h-8 w-8 place-items-center rounded-lg bg-accent/20 text-accent">✦</div>
                <div className="font-display text-sm font-bold text-ink">Ria</div>
              </div>
              <p className="mt-2 text-xs text-muted-foreground leading-snug">
                Here are some balanced breakfast options filled with proteins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Works */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              Why it works
            </div>
            <h2 className="font-display text-3xl font-extrabold leading-tight text-ink md:text-4xl">
              Built for busy professionals who want results that last.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              A 12-week coaching program designed around your schedule, your food habits,
              and your goals — with real humans and AI working together.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                emoji: "🧑‍⚕️",
                bg: "bg-[oklch(0.94_0.03_60)]",
                title: "1:1 expert coaching",
                body: "A certified dietitian and fitness coach guide you weekly — personalized to your body type, food preferences and lifestyle.",
              },
              {
                emoji: "📱",
                bg: "bg-[oklch(0.94_0.02_240)]",
                title: "Fits your workday",
                body: "Log meals in seconds with Snap, get quick check-ins on chat, and follow 20-minute home workouts that fit between meetings.",
              },
              {
                emoji: "🌱",
                bg: "bg-[oklch(0.94_0.03_155)]",
                title: "Habits that stay",
                body: "Small, sustainable changes across nutrition, sleep and movement — so the results you build in 12 weeks don't disappear after.",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="rounded-3xl bg-card p-6 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.15)] ring-1 ring-border/40"
              >
                <div className={`mb-5 grid h-12 w-12 place-items-center rounded-2xl text-2xl ${c.bg}`}>
                  {c.emoji}
                </div>
                <h3 className="font-display text-lg font-bold text-ink">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Customer Results */}
      <section className="bg-hero">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              Real customer results
            </div>
            <h2 className="font-display text-3xl font-extrabold leading-tight text-ink md:text-4xl">
              People like you, changing how they live.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Thousands of working professionals have finished the 12-week program
              and kept the results long after.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { stat: "–8.4 kg", label: "Avg. weight lost in 12 weeks" },
              { stat: "92%", label: "Stay on track past week 6" },
              { stat: "4.6 ★", label: "Rated by 35M+ users" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-3xl bg-card p-6 text-center shadow-[0_10px_40px_-20px_rgba(0,0,0,0.15)] ring-1 ring-border/40"
              >
                <div className="font-display text-4xl font-extrabold text-primary">{s.stat}</div>
                <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              {
                name: "Ananya R., 32",
                role: "Product Manager, Bengaluru",
                initial: "A",
                bg: "bg-[oklch(0.92_0.04_25)]",
                quote:
                  "I was skeptical about online coaching with my schedule. My coach worked around my meetings, fixed my late dinners, and I lost 9 kg in 3 months without any crash diet.",
              },
              {
                name: "Karthik M., 35",
                role: "Software Engineer, Bengaluru",
                initial: "K",
                bg: "bg-[oklch(0.92_0.04_200)]",
                quote:
                  "The dietitian actually understood Indian food. Home workouts were 20 minutes, doable before standup. Down 7 kg and my energy through the day is completely different.",
              },
            ].map((t) => (
              <figure
                key={t.name}
                className="rounded-3xl bg-card p-6 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.15)] ring-1 ring-border/40"
              >
                <blockquote className="text-base leading-relaxed text-ink">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className={`grid h-10 w-10 place-items-center rounded-full font-display font-bold text-ink ${t.bg}`}>
                    {t.initial}
                  </span>
                  <span>
                    <span className="block font-display text-sm font-bold text-ink">{t.name}</span>
                    <span className="block text-xs text-muted-foreground">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 text-sm text-muted-foreground">
          <Logo />
          <span>© {new Date().getFullYear()} Healthify</span>
        </div>
      </footer>
    </div>
  );
}
