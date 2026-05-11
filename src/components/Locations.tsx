"use client";

import { LOCATIONS, type Location } from "@/lib/types";
import { useState } from "react";

export default function Locations() {
  const [activeLocation, setActiveLocation] = useState<string>(LOCATIONS[0].id);

  const current = LOCATIONS.find((l) => l.id === activeLocation) ?? LOCATIONS[0];

  return (
    <section id="locales" className="relative py-24 sm:py-32 bg-ink overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-30" />
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-flame/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-on-scroll">
          <span className="inline-block text-ember font-semibold text-sm tracking-widest uppercase mb-4">
            Nuestros Locales
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-cream tracking-tight text-balance">
            Visitanos en
            <br />
            <span
              style={{
                background:
                  "linear-gradient(135deg, #FF6B35 0%, #F4A261 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              3 ubicaciones
            </span>
          </h2>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3 animate-on-scroll">
          {LOCATIONS.map((loc) => (
            <button
              key={loc.id}
              onClick={() => setActiveLocation(loc.id)}
              className={`px-6 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 ${
                activeLocation === loc.id
                  ? "bg-flame text-white shadow-xl shadow-flame/30"
                  : "bg-white/5 text-warm-gray/60 hover:text-cream hover:bg-white/10 border border-white/10"
              }`}
            >
              {loc.name}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-5 gap-8 animate-on-scroll">
          <div className="lg:col-span-3 rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40 h-[400px] lg:h-[500px] bg-ink-light">
            {current.mapsEmbedUrl ? (
              <iframe
                src={current.mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Mapa de Che Bagels ${current.name}`}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-warm-gray/40">
                <div className="text-center">
                  <span className="text-4xl">📍</span>
                  <p className="mt-2">Mapa no disponible</p>
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="flex-1 bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <h3 className="font-display text-2xl font-bold text-cream">
                {current.name}
              </h3>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-xl mt-0.5">🕐</span>
                  <div>
                    <p className="text-sm text-warm-gray/50">Horarios</p>
                    <p className="text-cream/80 text-sm mt-0.5">
                      {current.hours}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                <a
                  href={current.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-6 py-4 rounded-2xl
                             bg-whatsapp text-white font-semibold text-sm
                             hover:brightness-110 transition-all duration-300
                             shadow-lg shadow-whatsapp/25 hover:shadow-whatsapp/40
                             active:scale-[0.98]"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp {current.whatsapp}
                </a>

                <a
                  href={current.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-6 py-4 rounded-2xl
                             bg-white/10 text-cream font-semibold text-sm
                             hover:bg-white/15 transition-all duration-300
                             border border-white/10 active:scale-[0.98]"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Ver en Google Maps
                </a>
              </div>
            </div>

            <div className="bg-flame/10 backdrop-blur-sm rounded-3xl p-8 border border-flame/20">
              <p className="text-sm text-warm-gray/60">
                ¿Queres hacer un pedido grande o reservar? Escribinos directamente
                y te atendemos al toque.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
