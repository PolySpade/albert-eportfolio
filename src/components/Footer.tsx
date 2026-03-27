export default function Footer() {
  return (
    <footer className="relative bg-charcoal pt-10 pb-8" role="contentinfo">
      {/* Gold separator line */}
      <div
        className="absolute top-0 left-0 h-0.5 w-full bg-warm-500"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-sm font-medium tracking-wide text-warm-100">
          &copy; 2026 Albert Astucia. All rights reserved.
        </p>
        <p className="mt-2 text-xs tracking-wide text-warm-100 opacity-60">
          Built with passion for entrepreneurship
        </p>
      </div>
    </footer>
  );
}
