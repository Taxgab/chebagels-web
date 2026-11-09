import Container from "@/components/ui/Container";

const STATS = [
  { value: "50K+", label: "Seguidores" },
  { value: "300K", label: "Alcance mensual" },
  { value: "5+", label: "Años de historia" },
  { value: "3", label: "Locales" },
];

/**
 * Static by design. The previous version animated these with requestAnimationFrame
 * from zero, which rendered "0 Seguidores" in the server HTML.
 */
export default function SocialProof() {
  return (
    <section className="border-y border-ink/10 bg-paper py-14 sm:py-16">
      <Container>
        <div className="grid grid-cols-2 gap-px bg-ink/10 md:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="bg-paper px-4 py-6 text-center">
              <p className="font-display text-4xl leading-none text-wine sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-soft">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
