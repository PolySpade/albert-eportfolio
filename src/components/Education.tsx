const educationEntries = [
  {
    school: "De La Salle University",
    program: "Bachelor of Science in Entrepreneurship",
    years: "2022 \u2013 2025",
    initials: "DLSU",
  },
  {
    school: "De La Salle University \u2013 Integrated School",
    program: "Accountancy and Business Management (ABM) Strand",
    years: "2020 \u2013 2022",
    initials: "DLSU",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="py-20 md:py-28"
      style={{ backgroundColor: "#fdf8f0" }}
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <h2
            className="font-heading text-3xl font-bold tracking-tight md:text-4xl"
            style={{ color: "#1a1a1a" }}
          >
            Education &amp; Awards
          </h2>
          <div
            className="mx-auto mt-4 h-1 w-16 rounded-full"
            style={{ backgroundColor: "#b07d2e" }}
            aria-hidden="true"
          />
        </div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-3xl">
          {/* Vertical timeline line */}
          <div
            className="absolute left-6 top-0 hidden h-full w-px md:left-1/2 md:block"
            style={{ backgroundColor: "#e8d5b0" }}
            aria-hidden="true"
          />

          <div className="space-y-12">
            {educationEntries.map((entry, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={entry.years}
                  className="relative md:flex md:items-start"
                >
                  {/* Timeline dot (desktop) */}
                  <div
                    className="absolute left-1/2 top-6 z-10 hidden h-4 w-4 -translate-x-1/2 rounded-full border-[3px] md:block"
                    style={{
                      borderColor: "#b07d2e",
                      backgroundColor: "#fdf8f0",
                    }}
                    aria-hidden="true"
                  />

                  {/* Card */}
                  <div
                    className={`relative rounded-2xl border p-6 transition-all duration-300 hover:shadow-lg md:w-[calc(50%-2rem)] ${
                      isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                    }`}
                    style={{
                      borderColor: "#e8d5b0",
                      backgroundColor: "#ffffff",
                    }}
                  >
                    <div className="flex items-start gap-4">
                      {/* Logo placeholder */}
                      <div
                        className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold tracking-wide"
                        style={{
                          backgroundColor: "#f5ead6",
                          color: "#946520",
                        }}
                        aria-hidden="true"
                      >
                        {entry.initials}
                      </div>

                      <div className="min-w-0">
                        <h3
                          className="font-heading text-lg font-bold leading-snug"
                          style={{ color: "#1a1a1a" }}
                        >
                          {entry.school}
                        </h3>
                        <p
                          className="mt-1 text-sm leading-relaxed"
                          style={{ color: "#334155" }}
                        >
                          {entry.program}
                        </p>
                        <p
                          className="mt-2 text-xs font-medium uppercase tracking-widest"
                          style={{ color: "#b07d2e" }}
                        >
                          {entry.years}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Gold Thesis Award Banner */}
        <div className="mx-auto mt-16 max-w-3xl">
          <div
            className="relative overflow-hidden rounded-2xl border p-8 text-center md:p-10"
            style={{
              borderColor: "#d4b87a",
              backgroundColor: "#e8d5b0",
            }}
          >
            {/* Decorative corner accents */}
            <div
              className="absolute left-4 top-4 h-6 w-6 border-l-2 border-t-2 rounded-tl-md"
              style={{ borderColor: "#b07d2e" }}
              aria-hidden="true"
            />
            <div
              className="absolute bottom-4 right-4 h-6 w-6 border-b-2 border-r-2 rounded-br-md"
              style={{ borderColor: "#b07d2e" }}
              aria-hidden="true"
            />

            {/* Trophy icon */}
            <div
              className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full text-2xl"
              style={{ backgroundColor: "#fdf8f0" }}
              aria-hidden="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#b07d2e"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-7 w-7"
                aria-hidden="true"
              >
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                <path d="M4 22h16" />
                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
              </svg>
            </div>

            <p
              className="text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: "#946520" }}
            >
              Award
            </p>
            <h3
              className="font-heading mt-2 text-xl font-bold md:text-2xl"
              style={{ color: "#1a1a1a" }}
            >
              Gold Thesis Award
            </h3>
            <p
              className="mt-2 text-sm leading-relaxed md:text-base"
              style={{ color: "#5e3d14" }}
            >
              Best Practicum &mdash; BS Entrepreneurship Batch 12
            </p>
            <p
              className="mt-1 text-xs"
              style={{ color: "#7a5019" }}
            >
              De La Salle University
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
