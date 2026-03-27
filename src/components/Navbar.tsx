"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Ventures", href: "#ventures" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleLinkClick = () => setMobileOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-none"
      }`}
      style={{ backgroundColor: "#fdf8f0" }}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo / Name */}
        <a
          href="#"
          className="font-serif text-2xl font-bold tracking-tight transition-opacity duration-200 hover:opacity-80"
          style={{ color: "#1a1a1a" }}
        >
          Albert Astucia
        </a>

        {/* Desktop Links */}
        <ul className="hidden items-center gap-10 md:flex">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="group relative py-1 text-sm font-medium uppercase tracking-widest transition-colors duration-200"
                style={{ color: "#1a1a1a" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#b07d2e")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "#1a1a1a")
                }
              >
                {label}
                {/* Underline animation */}
                <span
                  className="absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: "#b07d2e" }}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <span
            className="block h-0.5 w-6 origin-center rounded-full transition-all duration-300"
            style={{
              backgroundColor: "#1a1a1a",
              transform: mobileOpen
                ? "translateY(4px) rotate(45deg)"
                : "none",
            }}
          />
          <span
            className="block h-0.5 w-6 rounded-full transition-all duration-300"
            style={{
              backgroundColor: "#1a1a1a",
              opacity: mobileOpen ? 0 : 1,
            }}
          />
          <span
            className="block h-0.5 w-6 origin-center rounded-full transition-all duration-300"
            style={{
              backgroundColor: "#1a1a1a",
              transform: mobileOpen
                ? "translateY(-4px) rotate(-45deg)"
                : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile Full-Screen Overlay */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center transition-all duration-500 md:hidden ${
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        style={{ backgroundColor: "#fdf8f0" }}
        aria-hidden={!mobileOpen}
      >
        <ul className="flex flex-col items-center gap-8">
          {navLinks.map(({ label, href }, index) => (
            <li
              key={href}
              className="transition-all duration-500"
              style={{
                transform: mobileOpen
                  ? "translateY(0)"
                  : "translateY(20px)",
                opacity: mobileOpen ? 1 : 0,
                transitionDelay: mobileOpen ? `${index * 80}ms` : "0ms",
              }}
            >
              <a
                href={href}
                onClick={handleLinkClick}
                className="font-serif text-3xl font-medium transition-colors duration-200"
                style={{ color: "#1a1a1a" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#b07d2e")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "#1a1a1a")
                }
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
