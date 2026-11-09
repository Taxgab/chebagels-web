"use client";

import Image from "next/image";
import { useState } from "react";
import { PRODUCTS, type Product } from "@/lib/types";
import { cn } from "@/lib/utils";
import Container from "@/components/ui/Container";

const CATEGORIES = [
  { id: "todos", label: "Todo" },
  { id: "salado", label: "Salados" },
  { id: "dulce", label: "Dulces" },
  { id: "combo", label: "Combos" },
] as const;

type Filter = (typeof CATEGORIES)[number]["id"];

const CATEGORY_LABEL: Record<Product["category"], string> = {
  salado: "Salado",
  dulce: "Dulce",
  combo: "Combo",
};

export default function Menu() {
  const [active, setActive] = useState<Filter>("todos");

  const filtered =
    active === "todos"
      ? PRODUCTS
      : PRODUCTS.filter((product) => product.category === active);

  return (
    <section id="menu" className="relative bg-paper-deep/60 py-20 sm:py-28">
      <Container>
        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-wine/50" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-wine">
              La carta
            </span>
          </div>
          <h2 className="mt-5 font-display text-[clamp(2.4rem,5.5vw,4.25rem)] leading-[0.94] tracking-[-0.02em] text-ink">
            Ocho formas de
            <span className="italic text-wine"> pedir</span>
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft text-pretty">
            Bagels horneados a diario, armados a mano y con ingredientes
            frescos. Elegí el tuyo y pedilo por delivery o para retirar.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-y border-ink/15 py-4">
          <div className="flex flex-wrap items-center gap-x-7 gap-y-2">
            {CATEGORIES.map((category) => {
              const isActive = active === category.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActive(category.id)}
                  aria-pressed={isActive}
                  className={cn(
                    "relative pb-1 text-xs font-semibold uppercase tracking-[0.16em] transition-colors duration-200",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wine focus-visible:ring-offset-4 focus-visible:ring-offset-paper-deep",
                    isActive
                      ? "text-ink after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:bg-wine"
                      : "text-ink-soft hover:text-ink",
                  )}
                >
                  {category.label}
                </button>
              );
            })}
          </div>

          <p
            aria-live="polite"
            className="ml-auto text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-soft"
          >
            {filtered.length} {filtered.length === 1 ? "producto" : "productos"}
          </p>
        </div>

        <ul className="mt-12 grid list-none grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <li key={product.id}>
              <article className="group">
                <div className="relative aspect-[4/3] overflow-hidden bg-paper">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>

                <div className="mt-4 flex items-center justify-between gap-4 border-t border-ink/15 pt-3">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-wine">
                    {CATEGORY_LABEL[product.category]}
                  </span>
                </div>

                <h3 className="mt-2 font-display text-xl leading-tight text-ink">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {product.description}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
