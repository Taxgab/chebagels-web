import { SITE_CONFIG } from "@/lib/types";

export default function DeliveryCTA() {
  return (
    <section className="relative py-24 sm:py-32 bg-cream overflow-hidden">
      <div className="absolute inset-0 bg-grain" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      w-[800px] h-[800px] bg-flame/5 rounded-full blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
        <div className="animate-on-scroll">
          <span className="inline-block text-7xl mb-6" aria-hidden="true">
            🛵
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-ink tracking-tight text-balance">
            ¿Antojo de algo rico?
          </h2>
          <p className="mt-4 text-lg text-ink/50 max-w-md mx-auto text-balance">
            Pedi tus bagels favoritos por PedidosYa y recibi en la puerta de tu
            casa. Facil, rapido, delicioso.
          </p>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-on-scroll">
          <a
            href={SITE_CONFIG.pedidosYaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-2xl
                       bg-flame text-white text-lg font-bold overflow-hidden
                       shadow-2xl shadow-flame/30 hover:shadow-flame/50
                       transition-all duration-300 hover:-translate-y-1 active:scale-95"
          >
            <span className="relative z-10">Pedir en PedidosYa</span>
            <svg
              className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>

        <p className="mt-6 text-sm text-ink/30 animate-on-scroll">
          Tambien disponible en Rappi y Wolt
        </p>
      </div>
    </section>
  );
}
