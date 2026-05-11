"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/lib/types";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-ink/95 backdrop-blur-xl shadow-2xl shadow-black/20 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <button
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-2 group"
          aria-label="Ir al inicio"
        >
          <span className="text-2xl" aria-hidden="true">
            🥯
          </span>
          <span
            className={cn(
              "font-display font-bold text-xl tracking-tight transition-colors",
              scrolled ? "text-cream" : "text-cream"
            )}
          >
            Che Bagels
          </span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {[
            { id: "menu", label: "Menu" },
            { id: "locales", label: "Locales" },
          ].map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                scrolled
                  ? "text-warm-gray/80 hover:text-cream hover:bg-white/10"
                  : "text-cream/80 hover:text-cream hover:bg-white/10"
              )}
            >
              {link.label}
            </button>
          ))}
          <a
            href={SITE_CONFIG.pedidosYaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-5 py-2 rounded-full bg-flame text-white text-sm font-semibold
                       hover:bg-flame-light transition-all duration-300 shadow-lg shadow-flame/25
                       hover:shadow-flame/40 hover:-translate-y-0.5 active:scale-95"
          >
            Pedir Ahora
          </a>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <a
            href={SITE_CONFIG.pedidosYaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-flame text-white text-xs font-semibold
                       hover:bg-flame-light transition-all duration-300 shadow-lg shadow-flame/25"
          >
            Pedir
          </a>
        </div>
      </div>
    </nav>
  );
}
