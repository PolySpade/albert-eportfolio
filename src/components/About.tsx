const highlights = [
  {
    icon: "\u{1F680}",
    title: "4+",
    label: "Ventures",
    description: "Businesses launched & growing",
  },
  {
    icon: "\u{1F30F}",
    title: "4",
    label: "Languages",
    description: "Mandarin, English, Filipino, Hokkien",
  },
  {
    icon: "\u{1F3C6}",
    title: "Gold",
    label: "Thesis Award",
    description: "Best Practicum, DLSU",
  },
  {
    icon: "\u{1F3A4}",
    title: "Speaker",
    label: "& Host",
    description: "Public speaking & event hosting",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        {/* ── Section heading ── */}
        <div className="mb-14 text-center">
          <h2
            className="font-heading text-3xl font-bold tracking-tight md:text-4xl"
            style={{ color: "var(--color-charcoal)" }}
          >
            About Me
          </h2>
          <div
            className="mx-auto mt-3 h-1 w-16 rounded-full"
            style={{ backgroundColor: "var(--color-warm-500)" }}
            aria-hidden="true"
          />
        </div>

        {/* ── Bio paragraph ── */}
        <p
          className="mx-auto max-w-3xl text-center text-lg leading-relaxed md:text-xl"
          style={{ color: "var(--color-slate-text)" }}
        >
          I am a serial entrepreneur with a passion for building businesses that
          solve real problems. From e-commerce and hospitality to sports brands
          and automotive detailing, I thrive at the intersection of strategy and
          execution&mdash;turning ideas into ventures that grow. As a multilingual
          public speaker and host, I bring the same energy to the stage, connecting
          with diverse audiences across cultures and industries. Armed with a BS
          Entrepreneurship from De La Salle University and a Gold Thesis Award for
          Best Practicum, I am driven to create, lead, and inspire.
        </p>

        {/* ── Highlight cards ── */}
        <div className="mt-16 grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-8">
          {highlights.map(({ icon, title, label, description }) => (
            <article
              key={label}
              className="group rounded-2xl border px-5 py-8 text-center transition-shadow duration-300 hover:shadow-lg"
              style={{
                borderColor: "var(--color-warm-200)",
                backgroundColor: "var(--color-warm-50)",
              }}
            >
              <span
                className="mb-3 block text-3xl"
                role="img"
                aria-hidden="true"
              >
                {icon}
              </span>
              <p
                className="font-heading text-2xl font-bold md:text-3xl"
                style={{ color: "var(--color-charcoal)" }}
              >
                {title}
              </p>
              <p
                className="mt-1 text-sm font-semibold uppercase tracking-widest"
                style={{ color: "var(--color-warm-500)" }}
              >
                {label}
              </p>
              <p
                className="mt-2 text-xs leading-snug"
                style={{ color: "var(--color-muted)" }}
              >
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
