"use client";

import { PRODUCTS, type Product } from "@/lib/types";
import { cn } from "@/lib/utils";
import { useState } from "react";

const CATEGORY_MAP = {
  salado: "Salados",
  dulce: "Dulces",
  combo: "Combos",
} as const;

type Category = keyof typeof CATEGORY_MAP;

export default function Menu() {
  const [active, setActive] = useState<Category | "todos">("todos");
  const [expanded, setExpanded] = useState<string | null>(null);

  const categories = Object.keys(CATEGORY_MAP) as Category[];
  const filtered =
    active === "todos"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === active);

  return (
    <section id="menu" className="relative py-24 sm:py-32 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-on-scroll">
          <span className="inline-block text-flame font-semibold text-sm tracking-widest uppercase mb-4">
            Nuestro Menu
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-ink tracking-tight text-balance">
            Hecho a mano,
            <br />
            <span className="text-flame">cada dia</span>
          </h2>
          <p className="mt-4 text-lg text-ink/50 max-w-lg mx-auto">
            Panes artesanales horneados a diario con ingredientes frescos y
            mucho amor.
          </p>
        </div>

        <div className="mt-10 flex justify-center gap-2 flex-wrap animate-on-scroll">
          <button
            onClick={() => setActive("todos")}
            className={cn(
              "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
              active === "todos"
                ? "bg-ink text-cream shadow-lg shadow-ink/20"
                : "bg-white text-ink/60 hover:text-ink hover:bg-white/80 border border-warm-gray/30"
            )}
          >
            Todos
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
                active === cat
                  ? "bg-ink text-cream shadow-lg shadow-ink/20"
                  : "bg-white text-ink/60 hover:text-ink hover:bg-white/80 border border-warm-gray/30"
              )}
            >
              {CATEGORY_MAP[cat]}
            </button>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              index={i}
              isExpanded={expanded === product.id}
              onToggle={() =>
                setExpanded(expanded === product.id ? null : product.id)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({
  product,
  index,
  isExpanded,
  onToggle,
}: {
  product: Product;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <article
      className={cn(
        "group animate-on-scroll bg-white rounded-3xl overflow-hidden",
        "border border-warm-gray/20 shadow-lg shadow-ink/5",
        "hover:shadow-2xl hover:shadow-ink/10 hover:-translate-y-1",
        "transition-all duration-500 cursor-pointer",
        isExpanded && "ring-2 ring-flame/30 shadow-xl shadow-flame/10"
      )}
      style={{ transitionDelay: `${index * 75}ms` }}
      onClick={onToggle}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-warm-gray/20">
        <img
          src={product.thumbnailUrl}
          alt={product.name}
          loading="lazy"
          className={cn(
            "w-full h-full object-cover transition-all duration-700",
            "group-hover:scale-110",
            isExpanded && "scale-110"
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-ink/70 shadow-sm">
          {CATEGORY_MAP[product.category as Category]}
        </span>
      </div>

      <div className="p-5">
        <h3 className="font-display text-lg font-bold text-ink leading-tight">
          {product.name}
        </h3>
        <p
          className={cn(
            "mt-2 text-sm text-ink/50 leading-relaxed transition-all duration-300",
            isExpanded ? "line-clamp-none" : "line-clamp-2"
          )}
        >
          {product.description}
        </p>
      </div>
    </article>
  );
}
