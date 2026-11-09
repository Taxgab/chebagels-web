import { LOCATIONS, SITE_CONFIG } from "@/lib/types";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function DeliveryCTA() {
  return (
    <section className="relative overflow-hidden bg-wine-deep py-20 text-paper sm:py-28">
      <div aria-hidden="true" className="absolute inset-0 bg-noise opacity-40" />

      <Container className="relative">
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-paper/60">
              Delivery y retiro
            </span>
            <h2 className="mt-5 font-display text-[clamp(2.4rem,5.5vw,4.25rem)] leading-[0.94] tracking-[-0.02em]">
              ¿Antojo de
              <span className="italic text-ember"> algo rico?</span>
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-paper/75 text-pretty">
              Pedí por PedidosYa y recibí en la puerta de tu casa, o escribinos
              por WhatsApp y coordinamos el retiro en el local más cercano.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-stretch">
            <Button href={SITE_CONFIG.pedidosYaUrl} external variant="light" size="lg">
              Pedir por PedidosYa
            </Button>
            <Button
              href={LOCATIONS[0].whatsappUrl}
              external
              variant="outlineLight"
              size="lg"
            >
              Escribir por WhatsApp
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
