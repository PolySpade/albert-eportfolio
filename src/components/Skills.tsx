const communicationSkills = [
  {
    name: "Public Speaking & Hosting",
    description: "Commanding stages and captivating audiences",
  },
  {
    name: "Live Interpretation",
    description: "Real-time translation across languages",
  },
  {
    name: "Cross-Cultural Negotiation",
    description: "Bridging business cultures with finesse",
  },
  {
    name: "Adaptive Communication",
    description: "Tailoring message to any audience",
  },
  {
    name: "Emotional Resilience",
    description: "Thriving under high-pressure situations",
  },
];

const languages = [
  { name: "Mandarin", level: "Fluent", script: "\u4e2d\u6587" },
  { name: "English", level: "Native", script: "Abc" },
  { name: "Filipino", level: "Native", script: "Fil" },
  { name: "Hokkien", level: "Fluent", script: "\u95fd\u5357" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 md:py-28"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <h2
            className="font-heading text-3xl font-bold tracking-tight md:text-4xl"
            style={{ color: "#1a1a1a" }}
          >
            Skills &amp; Expertise
          </h2>
          <div
            className="mx-auto mt-4 h-1 w-16 rounded-full"
            style={{ backgroundColor: "#b07d2e" }}
            aria-hidden="true"
          />
          <p
            className="mx-auto mt-5 max-w-xl text-base leading-relaxed md:text-lg"
            style={{ color: "#64748b" }}
          >
            A multilingual communicator who bridges cultures and commands any
            stage.
          </p>
        </div>

        <div className="grid gap-16 lg:grid-cols-2">
          {/* Communication & Speaking */}
          <div>
            <h3
              className="mb-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-widest"
              style={{ color: "#b07d2e" }}
            >
              <span
                className="inline-block h-px w-8"
                style={{ backgroundColor: "#b07d2e" }}
                aria-hidden="true"
              />
              Communication &amp; Speaking
            </h3>

            <div className="space-y-4">
              {communicationSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="group rounded-xl border px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                  style={{
                    borderColor: "#e8d5b0",
                    backgroundColor: "#ffffff",
                  }}
                >
                  <div className="flex items-start gap-4">
                    {/* Accent dot */}
                    <span
                      className="mt-1.5 block h-2.5 w-2.5 flex-shrink-0 rounded-full"
                      style={{ backgroundColor: "#b07d2e" }}
                      aria-hidden="true"
                    />
                    <div>
                      <p
                        className="text-base font-semibold"
                        style={{ color: "#1a1a1a" }}
                      >
                        {skill.name}
                      </p>
                      <p
                        className="mt-0.5 text-sm leading-relaxed"
                        style={{ color: "#64748b" }}
                      >
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <h3
              className="mb-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-widest"
              style={{ color: "#b07d2e" }}
            >
              <span
                className="inline-block h-px w-8"
                style={{ backgroundColor: "#b07d2e" }}
                aria-hidden="true"
              />
              Languages
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {languages.map((lang) => (
                <div
                  key={lang.name}
                  className="group relative overflow-hidden rounded-xl border p-5 text-center transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                  style={{
                    borderColor: "#e8d5b0",
                    backgroundColor: "#ffffff",
                  }}
                >
                  {/* Decorative script character */}
                  <span
                    className="font-heading block text-2xl font-bold leading-none"
                    style={{ color: "#b07d2e" }}
                    aria-hidden="true"
                  >
                    {lang.script}
                  </span>

                  <p
                    className="mt-3 text-base font-semibold"
                    style={{ color: "#1a1a1a" }}
                  >
                    {lang.name}
                  </p>

                  {/* Proficiency bar */}
                  <div className="mx-auto mt-3 max-w-[6rem]">
                    <div
                      className="h-1.5 w-full overflow-hidden rounded-full"
                      style={{ backgroundColor: "#f5ead6" }}
                      role="progressbar"
                      aria-label={`${lang.name} proficiency`}
                      aria-valuenow={100}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <div
                        className="h-full rounded-full"
                        style={{
                          backgroundColor: "#b07d2e",
                          width: "100%",
                        }}
                      />
                    </div>
                  </div>

                  <span
                    className="mt-2 inline-block rounded-full px-3 py-0.5 text-xs font-medium tracking-wide"
                    style={{
                      backgroundColor: "#fdf8f0",
                      color: "#946520",
                    }}
                  >
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
