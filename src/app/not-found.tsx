export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-ink">
      <div className="text-center px-4">
        <span className="text-8xl">🥯</span>
        <h1 className="mt-6 font-display text-4xl font-bold text-cream">
          404
        </h1>
        <p className="mt-2 text-warm-gray/50">
          Esta pagina no esta en el menu.
        </p>
        <a
          href="/"
          className="mt-8 inline-block px-6 py-3 rounded-2xl bg-flame text-white font-semibold
                     hover:bg-flame-light transition-all duration-300 shadow-lg shadow-flame/25"
        >
          Volver al inicio
        </a>
      </div>
    </div>
  );
}
