"use client";

import { SITE_CONFIG } from "@/lib/types";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ink"
    >
      <div className="absolute inset-0 bg-noise bg-grain" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, rgba(255,107,53,0.4) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(244,162,97,0.2) 0%, transparent 50%)",
        }}
      />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-flame/10 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-ember/10 rounded-full blur-3xl"
        style={{ animationDelay: "1s" }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <div className="animate-fade-up">
          <span
            className="inline-block text-7xl sm:text-8xl mb-6"
            aria-hidden="true"
            style={{
              filter: "drop-shadow(0 4px 30px rgba(255,107,53,0.3))",
            }}
          >
            🥯
          </span>
        </div>

        <h1
          className="animate-fade-up animation-delay-200 font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl
                     font-bold text-cream leading-[1.05] tracking-tight text-balance"
        >
          {SITE_CONFIG.headline}
          <br />
          <span
            className="inline-block mt-3"
            style={{
              background:
                "linear-gradient(135deg, #FF6B35 0%, #F4A261 50%, #FF8C5A 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {SITE_CONFIG.subheadline}
          </span>
        </h1>

        <p className="animate-fade-up animation-delay-400 mt-6 text-lg sm:text-xl text-warm-gray/70 max-w-xl mx-auto text-balance">
          Hacemos bagels artesanales, cada uno hecho a mano. La autentica
          experiencia neoyorquina en el corazon de Asuncion.
        </p>

        <div className="animate-fade-up animation-delay-500 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={SITE_CONFIG.pedidosYaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl
                       bg-flame text-white text-lg font-semibold overflow-hidden
                       shadow-2xl shadow-flame/30 hover:shadow-flame/50
                       transition-all duration-300 hover:-translate-y-1 active:scale-95"
          >
            <span className="relative z-10">Pedir por PedidosYa</span>
            <svg
              className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>

          <a
            href="https://wa.me/595981134017"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl
                       border-2 border-white/10 text-cream text-lg font-semibold
                       hover:bg-white/5 hover:border-white/20
                       transition-all duration-300 hover:-translate-y-1 active:scale-95"
          >
            <svg
              className="w-5 h-5 text-whatsapp"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span>WhatsApp</span>
          </a>
        </div>

        <div className="animate-fade-up animation-delay-600 mt-8 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10">
          <span className="w-2 h-2 rounded-full bg-whatsapp animate-pulse" />
          <span className="text-sm text-warm-gray/60">
            3 locales en Asuncion y CDE
          </span>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent" />
    </section>
  );
}
