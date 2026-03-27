export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20 pb-16"
      style={{ backgroundColor: "#fdf8f0" }}
    >
      {/* Subtle radial gradient overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(176,125,46,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Decorative geometric dots pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle, #b07d2e 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
        {/* Profile photo */}
        <div className="mb-8 animate-[fadeSlideUp_0.8s_ease-out_both]">
          <div
            className="relative mx-auto h-44 w-44 overflow-hidden rounded-full border-4 shadow-xl sm:h-52 sm:w-52"
            style={{ borderColor: "#b07d2e" }}
          >
            <img
              src="/profile_photo.png"
              alt="Albert Astucia"
              className="h-full w-full object-cover object-top"
            />
          </div>
        </div>

        {/* Gold accent bar */}
        <div
          className="mb-8 h-1 w-16 rounded-full animate-[fadeSlideUp_0.8s_ease-out_0.05s_both]"
          style={{ backgroundColor: "#b07d2e" }}
        />

        {/* Heading */}
        <h1
          className="font-heading text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl animate-[fadeSlideUp_0.8s_ease-out_0.15s_both]"
          style={{ color: "#1a1a1a", fontFamily: "var(--font-heading)" }}
        >
          Albert Astucia
        </h1>

        {/* Subtitle */}
        <p
          className="mt-5 text-lg font-light uppercase tracking-[0.25em] sm:text-xl animate-[fadeSlideUp_0.8s_ease-out_0.3s_both]"
          style={{ color: "#b07d2e" }}
        >
          Entrepreneur &middot; Speaker &middot; Builder
        </p>

        {/* Thin decorative line */}
        <div
          className="mx-auto mt-8 h-px w-24 animate-[fadeSlideUp_0.8s_ease-out_0.4s_both]"
          style={{ backgroundColor: "#d4b87a" }}
          aria-hidden="true"
        />

        {/* Description */}
        <p
          className="mt-8 max-w-xl text-base leading-relaxed sm:text-lg animate-[fadeSlideUp_0.8s_ease-out_0.5s_both]"
          style={{ color: "#64748b" }}
        >
          A multi-industry entrepreneur, award-winning business scholar, and
          multilingual public speaker building ventures from the ground up in
          Manila and beyond.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:gap-5 animate-[fadeSlideUp_0.8s_ease-out_0.65s_both]">
          <a
            href="#ventures"
            className="inline-flex items-center justify-center rounded-md px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{ backgroundColor: "#b07d2e" }}
          >
            View My Ventures
          </a>
          <a
            href="#contact"
            className="hero-outlined-btn inline-flex items-center justify-center rounded-md border-2 px-8 py-3.5 text-sm font-semibold uppercase tracking-widest transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{
              borderColor: "#1a1a1a",
              color: "#1a1a1a",
            }}
          >
            Get in Touch
          </a>
        </div>

        {/* Credential badges */}
        <div
          className="mt-14 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs font-medium uppercase tracking-wider animate-[fadeSlideUp_0.8s_ease-out_0.8s_both]"
          style={{ color: "#64748b" }}
        >
          <span className="flex items-center gap-1.5">
            <span
              className="inline-block h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: "#b07d2e" }}
              aria-hidden="true"
            />
            4 Active Ventures
          </span>
          <span className="flex items-center gap-1.5">
            <span
              className="inline-block h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: "#b07d2e" }}
              aria-hidden="true"
            />
            Gold Thesis Awardee
          </span>
          <span className="flex items-center gap-1.5">
            <span
              className="inline-block h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: "#b07d2e" }}
              aria-hidden="true"
            />
            DLSU Entrepreneurship
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-[fadeSlideUp_0.8s_ease-out_1s_both]">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 transition-opacity duration-300 hover:opacity-70"
          aria-label="Scroll to about section"
        >
          <span
            className="text-[10px] font-medium uppercase tracking-[0.2em]"
            style={{ color: "#64748b" }}
          >
            Scroll
          </span>
          <span
            className="block h-8 w-5 rounded-full border-2"
            style={{ borderColor: "#b07d2e" }}
          >
            <span
              className="mx-auto mt-1.5 block h-2 w-1 rounded-full animate-[scrollPulse_2s_ease-in-out_infinite]"
              style={{ backgroundColor: "#b07d2e" }}
            />
          </span>
        </a>
      </div>

      {/* Keyframe styles */}
      <style>{`
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        #hero a:focus-visible {
          outline-color: #b07d2e;
        }
        .hero-outlined-btn:hover {
          background-color: #1a1a1a;
          color: #fff;
        }
        @keyframes scrollPulse {
          0%, 100% {
            opacity: 1;
            transform: translateY(0);
          }
          50% {
            opacity: 0.3;
            transform: translateY(6px);
          }
        }
      `}</style>
    </section>
  );
}
