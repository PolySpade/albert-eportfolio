const contactMethods = [
  {
    icon: "\u2709\uFE0F",
    label: "Email",
    value: "albert_l_astucia@dlsu.edu.ph",
    href: "mailto:albert_l_astucia@dlsu.edu.ph",
  },
  {
    icon: "\uD83D\uDCDE",
    label: "Phone",
    value: "(+63) 917 689 3888",
    href: "tel:+639176893888",
  },
  {
    icon: "\uD83D\uDCCD",
    label: "Location",
    value: "Tondo, Manila",
    href: undefined,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-white py-20 md:py-28"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Section heading */}
        <div className="text-center">
          <h2
            id="contact-heading"
            className="font-heading text-3xl font-bold tracking-tight text-charcoal md:text-4xl"
          >
            Let&rsquo;s Connect
          </h2>
          <div
            className="mx-auto mt-4 h-1 w-16 rounded-full bg-warm-500"
            aria-hidden="true"
          />
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-text">
            Whether you&rsquo;re looking for a speaker, a business partner, or
            just want to chat about entrepreneurship &mdash; I&rsquo;d love to
            hear from you.
          </p>
        </div>

        {/* Contact cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {contactMethods.map(({ icon, label, value, href }) => {
            const content = (
              <>
                <span className="text-4xl" role="img" aria-label={label}>
                  {icon}
                </span>
                <span className="mt-4 text-xs font-semibold uppercase tracking-widest text-warm-500">
                  {label}
                </span>
                <span className="mt-2 text-base font-medium text-charcoal break-all sm:break-normal">
                  {value}
                </span>
              </>
            );

            const sharedClasses =
              "group flex flex-col items-center rounded-2xl bg-warm-50 px-6 py-10 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1";

            return href ? (
              <a key={label} href={href} className={sharedClasses}>
                {content}
              </a>
            ) : (
              <div key={label} className={sharedClasses}>
                {content}
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="mt-14 text-center">
          <a
            href="mailto:albert_l_astucia@dlsu.edu.ph"
            className="inline-block rounded-full bg-warm-500 px-10 py-4 text-sm font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:bg-warm-600 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Send me an email
          </a>
        </div>
      </div>
    </section>
  );
}
