# Legacy copy reference (source of truth for T1)

Captured verbatim from `https://chebagels.com/` on 2026-11-08. This is the
production site the redesign replaces. Use it to restore accents and voseo
that the Next.js rewrite dropped. Do not "improve" the wording without a
client decision.

## Brand

- Title: `Che Bagels: Hacemos bagels artesanales, cada uno hecho a mano.`
- H1: `Bagels Neoyorquinos` / `en Paraguay`
- Footer: `2025 © Todos los derechos reservados. Powered by: Imarkine.`
- Social labels: Instagram, TikTok, Facebook, **Twitter** (the rewrite renamed
  this to "X")

## Products

| `PRODUCTS.id` | Legacy name | Legacy description |
| --- | --- | --- |
| `merienda` | Merienda o desayuno | Empieza bien el día o hacé una pausa como se debe. Siempre con bagels y café. |
| `langostinos` | Langostinos apanados + papas + Coca-Cola | Crujiente, sabroso y con todo lo que te gusta. Langostinos + papas + Coca = plan completo. |
| `jamon-queso` | Bagel de Jamón & Queso | El clásico nunca falla. Jamón, queso y esa textura que solo un bagel puede darte. |
| `milanesa-lomo` | Milanesa de Lomo y Crunchi de Pollo | ¿Carne o pollo? Mejor los dos. Potentes, crujientes y 100% Che Bagels. |
| `queso-crema-frutos` | Bagel de queso crema y frutos del bosque | Dulce, cremoso y brutalmente rico. Frutos del bosque sobre queso crema. |
| `salmon-ahumado` | Salmón Ahumado | Fresco, elegante, irresistible. Salmón ahumado como te gusta. |
| `desme-costilla-chopp` | Desme Costilla + chopp | Terminá el día como se debe: desme de costilla y un chopp bien frío. |
| `desme-costilla-papas` | Desme Costilla con papas rústicas y coca cola | Sensual, jugoso y explosivo. Así es nuestro Desme Costilla. |

## Locations

| `LOCATIONS.id` | Legacy label | Phone |
| --- | --- | --- |
| `recoleta` | Recoleta | 0981 134 017 |
| `las-lomas` | Las Lomas | 0972 424 660 |
| `cde` | CDE | 0973 553 211 |

The legacy site lists each location with a "Ubicación en el mapa" link but no
per-location embed, so it does not supply correct embed coordinates either.
Real coordinates must come from the client or from the `mapsUrl` short links.

## Diffs the rewrite introduced

- Every accent removed (`dia`, `cafe`, `Jamon`, `Salmon`, `Asuncion`, `Anos`).
- Voseo flattened to tuteo and back (`Terminá` → `Termina`, `hacé` → `hace`).
- "Twitter" renamed to "X".
- `imageUrl` (1200x750) left unused; only ~360px thumbnails render.
