"use client";

import { useState } from "react";
import { LOCATIONS } from "@/lib/types";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export default function Locations() {
  const [activeId, setActiveId] = useState<string>(LOCATIONS[0].id);
  const current = LOCATIONS.find((loc) => loc.id === activeId) ?? LOCATIONS[0];

  // Derived from real coordinates, one per location. The previous version
  // shipped the same embed for all three.
  const embedSrc = `https://maps.google.com/maps?q=${current.coordinates.lat},${current.coordinates.lng}&z=16&hl=es&output=embed`;

  return (
    <section id="locales" className="relative bg-ink py-20 text-paper sm:py-28">
      <Container>
        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-paper/40" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-paper/70">
              Dónde encontrarnos
            </span>
          </div>
          <h2 className="mt-5 font-display text-[clamp(2.4rem,5.5vw,4.25rem)] leading-[0.94] tracking-[-0.02em]">
            Tres locales,
            <span className="italic text-ember"> mismo bagel</span>
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <div>
            <ul className="list-none border-t border-paper/15">
              {LOCATIONS.map((location) => {
                const isActive = location.id === activeId;
                return (
                  <li key={location.id} className="border-b border-paper/15">
                    <button
                      type="button"
                      onClick={() => setActiveId(location.id)}
                      aria-pressed={isActive}
                      className={cn(
                        "group flex w-full items-center justify-between gap-4 py-5 text-left transition-colors duration-200",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-4 focus-visible:ring-offset-ink",
                        isActive ? "text-paper" : "text-paper/60 hover:text-paper",
                      )}
                    >
                      <span className="flex items-baseline gap-3">
                        <span
                          aria-hidden="true"
                          className={cn(
                            "h-1.5 w-1.5 rounded-full transition-colors",
                            isActive ? "bg-ember" : "bg-paper/25",
                          )}
                        />
                        <span className="font-display text-2xl leading-none">
                          {location.name}
                        </span>
                      </span>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-paper/50">
                        {location.whatsapp}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="mt-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-paper/50">
                Horarios
              </p>
              <p className="mt-2 text-sm leading-relaxed text-paper/80">
                {current.hours.split("|").map((chunk) => (
                  <span key={chunk} className="block">
                    {chunk.trim()}
                  </span>
                ))}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href={current.whatsappUrl} external variant="whatsapp">
                  WhatsApp {current.name}
                </Button>
                <Button href={current.mapsUrl} external variant="ghost" className="text-paper">
                  Ver en Google Maps
                </Button>
              </div>
            </div>
          </div>

          <div className="relative min-h-[340px] overflow-hidden border border-paper/15 bg-ink-light lg:min-h-[520px]">
            <iframe
              key={current.id}
              src={embedSrc}
              title={`Mapa de Che Bagels ${current.name}`}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full grayscale-[35%]"
              style={{ border: 0 }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
