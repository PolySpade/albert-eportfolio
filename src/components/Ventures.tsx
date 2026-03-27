const ventures = [
  {
    name: "Kepler ph",
    role: "Owner",
    period: "Nov 2021 \u2013 Present",
    category: "E-commerce",
    description:
      "Online store on Shopee specializing in general merchandise and Korean snacks. Achieved 29.18% revenue growth in 2025 through strategic product curation and customer engagement.",
  },
  {
    name: "Big Shot Billiards Hall",
    role: "Co-Owner",
    period: "Sep 2024 \u2013 Present",
    category: "Hospitality",
    description:
      "Premium billiards hall at D\u2019Students Place, Taft Avenue, Manila. Delivering the best billiards experience in the area with a focus on atmosphere and community.",
  },
  {
    name: "OGKILS Ph",
    role: "Chief Marketing Officer",
    period: "Jun 2025 \u2013 Present",
    category: "Sports",
    description:
      "Badminton brand offering high-performance rackets at affordable prices. Leading brand identity, social media strategy, and profile building in the Philippine sports market.",
  },
  {
    name: "Old House Detailing",
    role: "Co-Owner",
    period: "Jan 2026 \u2013 Present",
    category: "Automotive",
    description:
      "Motorcycle detailing service that creatively repurposes old houses in Manila as workshop spaces, blending heritage preservation with modern automotive care.",
  },
];

const categoryColors: Record<string, { bg: string; text: string }> = {
  "E-commerce": { bg: "var(--color-warm-100)", text: "var(--color-warm-700)" },
  Hospitality: { bg: "#e0f2f1", text: "#00695c" },
  Sports: { bg: "#e8eaf6", text: "#283593" },
  Automotive: { bg: "#fce4ec", text: "#ad1457" },
};

export default function Ventures() {
  return (
    <section
      id="ventures"
      className="py-20 md:py-28"
      style={{ backgroundColor: "var(--color-warm-50)" }}
    >
      <div className="mx-auto max-w-5xl px-6">
        {/* ── Section heading ── */}
        <div className="mb-16 text-center">
          <h2
            className="font-heading text-3xl font-bold tracking-tight md:text-4xl"
            style={{ color: "var(--color-charcoal)" }}
          >
            Ventures &amp; Experience
          </h2>
          <div
            className="mx-auto mt-3 h-1 w-16 rounded-full"
            style={{ backgroundColor: "var(--color-warm-500)" }}
            aria-hidden="true"
          />
        </div>

        {/* ── Timeline ── */}
        <div className="relative">
          {/* Vertical line (desktop only) */}
          <div
            className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 md:block"
            style={{ backgroundColor: "var(--color-warm-200)" }}
            aria-hidden="true"
          />

          <div className="space-y-12 md:space-y-16">
            {ventures.map((venture, index) => {
              const isLeft = index % 2 === 0;
              const colors = categoryColors[venture.category];

              return (
                <div
                  key={venture.name}
                  className="relative md:flex md:items-start"
                >
                  {/* Timeline dot (desktop) */}
                  <div
                    className="absolute left-1/2 top-8 z-10 hidden h-4 w-4 -translate-x-1/2 rounded-full border-[3px] border-white md:block"
                    style={{ backgroundColor: "var(--color-warm-500)" }}
                    aria-hidden="true"
                  />

                  {/* Card positioning */}
                  <div
                    className={`w-full md:w-[calc(50%-2rem)] ${
                      isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                    }`}
                  >
                    <article
                      className="rounded-2xl border bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg md:p-8"
                      style={{ borderColor: "var(--color-warm-200)" }}
                    >
                      {/* Header row */}
                      <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <h3
                            className="font-heading text-xl font-bold md:text-2xl"
                            style={{ color: "var(--color-charcoal)" }}
                          >
                            {venture.name}
                          </h3>
                          <span
                            className="mt-1 inline-block rounded-full px-3 py-0.5 text-xs font-semibold"
                            style={{
                              backgroundColor: "var(--color-warm-100)",
                              color: "var(--color-warm-700)",
                            }}
                          >
                            {venture.role}
                          </span>
                        </div>

                        {/* Category tag */}
                        <span
                          className="shrink-0 rounded-full px-3 py-0.5 text-xs font-medium"
                          style={{
                            backgroundColor: colors.bg,
                            color: colors.text,
                          }}
                        >
                          {venture.category}
                        </span>
                      </div>

                      {/* Date */}
                      <p
                        className="mb-3 text-sm font-medium"
                        style={{ color: "var(--color-muted)" }}
                      >
                        {venture.period}
                      </p>

                      {/* Description */}
                      <p
                        className="text-sm leading-relaxed md:text-base"
                        style={{ color: "var(--color-slate-text)" }}
                      >
                        {venture.description}
                      </p>
                    </article>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
