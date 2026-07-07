import { createFileRoute } from "@tanstack/react-router";

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
      <span className="grid h-8 w-8 place-items-center rounded-full border-2 border-primary font-display text-sm font-extrabold text-primary">
        H
      </span>
      <span className="font-display text-2xl font-extrabold tracking-tight text-primary">
        Healthify
      </span>
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
          <BookMyPlanButton variant="outline" />
        </div>
      </header>

      {/* Announcement banner */}
      <div className="bg-banner">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-6 py-4 md:flex-row md:items-center">
          <div className="flex items-start gap-3">
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
          <BookMyPlanButton />
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

            <div className="mt-8">
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

      {/* Bottom band with single final CTA */}
      <section id="book" className="border-t border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-14 text-center">
          <p className="text-lg text-ink md:text-xl">
            Redefine fitness with AI Coach Ria & HealthifySnap.{" "}
            <span className="font-semibold">Book your plan today.</span>
          </p>
          <div className="mt-6 flex justify-center">
            <BookMyPlanButton size="lg" />
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
