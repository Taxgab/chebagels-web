import Image from "next/image";
import { LOCATIONS, PRODUCTS, SITE_CONFIG } from "@/lib/types";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const heroProduct =
  PRODUCTS.find((p) => p.id === "desme-costilla-papas") ?? PRODUCTS[0];

const BAND = [
  "Hecho a mano",
  "Bagels neoyorquinos",
  "Asunción",
  "Ciudad del Este",
  "Tres locales",
];

export default function Hero() {
  return (
    <section id="hero" className="relative bg-paper">
      <div className="grid min-h-[100svh] grid-cols-1 lg:grid-cols-[1.04fr_0.96fr]">
        <div className="order-2 flex flex-col justify-between gap-12 px-5 pb-14 pt-10 sm:px-8 lg:order-1 lg:px-12 lg:py-16">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-ink/30" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-soft">
              Asunción · Paraguay
            </span>
          </div>

          <div className="max-w-xl">
            <h1 className="font-display leading-[0.84] tracking-[-0.035em] text-ink">
              <span className="block text-[clamp(3.4rem,10vw,7.5rem)]">
                Bagels
              </span>
              <span className="block text-[clamp(3.4rem,10vw,7.5rem)] italic text-wine">
                neoyorquinos
              </span>
            </h1>

            <p className="mt-8 max-w-md text-base leading-relaxed text-ink-soft text-pretty sm:text-lg">
              Hacemos bagels artesanales, cada uno hecho a mano. La auténtica
              experiencia neoyorquina en el corazón de Asunción.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href={SITE_CONFIG.pedidosYaUrl} external size="lg">
                Pedir por PedidosYa
              </Button>
              <Button href={LOCATIONS[0].whatsappUrl} external variant="outline" size="lg">
                WhatsApp
              </Button>
            </div>
          </div>

          <dl className="grid max-w-md grid-cols-3 gap-4 border-t border-ink/15 pt-6">
            <div>
              <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-soft">
                Locales
              </dt>
              <dd className="mt-1 font-display text-2xl text-ink">3</dd>
            </div>
            <div>
              <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-soft">
                Elaboración
              </dt>
              <dd className="mt-1 font-display text-2xl text-ink">A mano</dd>
            </div>
            <div>
              <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-soft">
                Pedidos
              </dt>
              <dd className="mt-1 font-display text-2xl text-ink">Online</dd>
            </div>
          </dl>
        </div>

        <div className="relative order-1 h-[46svh] min-h-[320px] overflow-hidden bg-ink lg:order-2 lg:h-auto">
          <Image
            src={heroProduct.imageUrl}
            alt={heroProduct.name}
            fill
            loading="eager"
            fetchPriority="high"
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-8">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-paper/70">
                De la carta
              </p>
              <p className="mt-1 max-w-[16rem] font-display text-xl leading-tight text-paper sm:text-2xl">
                {heroProduct.name}
              </p>
            </div>
            <span className="hidden shrink-0 rounded-sm border border-paper/30 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-paper/80 sm:block">
              Hecho hoy
            </span>
          </div>
        </div>
      </div>

      <div className="overflow-hidden border-y border-ink/10 bg-wine py-3">
        <div className="marquee-track flex w-max items-center">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center" aria-hidden={copy === 1}>
              {BAND.map((item) => (
                <span
                  key={`${copy}-${item}`}
                  className="flex items-center whitespace-nowrap px-6 text-[11px] font-semibold uppercase tracking-[0.28em] text-paper/85"
                >
                  {item}
                  <span className="ml-6 h-1 w-1 rounded-full bg-paper/40" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
