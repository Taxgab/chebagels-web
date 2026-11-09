"use client";

import { useEffect, useState } from "react";
import { SITE_CONFIG } from "@/lib/types";
import { cn } from "@/lib/utils";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const LINKS = [
  { href: "#menu", label: "Carta" },
  { href: "#locales", label: "Locales" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    // Sync on mount: a reload restores scroll position before any event fires.
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-ink/10 bg-paper/90 backdrop-blur-md"
          : // The bar always carries its own background: at desktop the hero
            // photo sits under the right half of it, and at mobile it sits
            // under the whole bar. Transparent only works over flat paper.
            "border-b border-transparent bg-paper",
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <a
            href="#hero"
            className="flex items-baseline gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wine focus-visible:ring-offset-4 focus-visible:ring-offset-paper"
          >
            <span className="font-display text-lg font-semibold leading-none tracking-tight text-ink">
              Che Bagels
            </span>
          </a>

          <div className="flex items-center gap-4 sm:gap-7">
            <div className="flex items-center gap-4 sm:gap-6">
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-soft transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wine focus-visible:ring-offset-4 focus-visible:ring-offset-paper sm:text-[11px]"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <Button
              href={SITE_CONFIG.pedidosYaUrl}
              external
              className="px-4 py-2.5 text-[10px] sm:px-6 sm:text-[11px]"
            >
              Pedir
            </Button>
          </div>
        </div>
      </Container>
    </nav>
  );
}
