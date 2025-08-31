import React from "react";
import { motion } from "framer-motion";

const bg =
  "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1920&auto=format&fit=crop"; // lush green leaves
// A subtle secondary image used in cards (optional)
const texture =
  "https://images.unsplash.com/photo-1520367745676-62d43b04a6ec?q=80&w=1200&auto=format&fit=crop";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <Hero />
      <Trustbar />
      <Highlights />
      <CTA />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-gray-100">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#top" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-emerald-400 to-cyan-500 grid place-items-center text-white font-bold">
            HB
          </div>
          <div>
            <p className="text-xs leading-tight text-gray-500">by Benjamin</p>
            <p className="font-semibold tracking-tight">The Hacks Blueprint</p>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#about" className="text-gray-600 hover:text-gray-900">Sobre mí</a>
          <a href="#articles" className="text-gray-600 hover:text-gray-900">Artículos</a>
          <a href="#products" className="text-gray-600 hover:text-gray-900">Productos</a>
          <a href="#newsletter" className="inline-flex items-center rounded-xl border border-gray-200 px-4 py-2 hover:bg-gray-50">
            Suscríbete
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden
      />
      {/* Soft gradient overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/60 via-white/70 to-white" aria-hidden />

      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Wellness y{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600">
              biohacking
            </span>{" "}
            para vivir mejor
          </h1>
         <p className="mt-5 text-lg text-gray-700">
  Calma, energía, enfoque. Lo esencial del wellness y el biohacking, explicado simple y respaldado por evidencia.
</p>

          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <a
              href="#newsletter"
              className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-6 py-3 text-white font-semibold hover:bg-gray-800"
            >
              Únete gratis
            </a>
            <a
              href="#products"
              className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-6 py-3 font-semibold hover:bg-gray-50"
            >
              Ver productos
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            Actualizaciones semanales. Sin ruido, solo lo esencial.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function Trustbar() {
 const items = [
  "Ciencia aplicada",
  "Simple y accionable",
  "Energía sostenible",
  "Bienestar integral",
];

  return (
    <div className="border-y border-gray-100 bg-white/80">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 text-sm text-gray-600">
          {items.map((x) => (
            <div key={x} className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span>{x}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Highlights() {
  const cards = [
    {
      t: "Guías accionables",
      d: "Protocolos simples de sueño, energía y enfoque.",
    },
    {
      t: "Selección de productos",
      d: "Herramientas esenciales para un estilo de vida saludable.",
    },
    {
      t: "Newsletter semanal",
      d: "Ideas, hallazgos y hábitos cada semana.",
    },
  ];
  return (
    <section id="about" className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5 grid md:grid-cols-3 gap-6">
        {cards.map((c) => (
          <div
            key={c.t}
            className="rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow p-6"
            style={{ backgroundImage: `url(${texture})`, backgroundSize: "cover", backgroundPosition: "center", backgroundBlendMode: "soft-light" }}
          >
            <h3 className="text-lg font-semibold">{c.t}</h3>
            <p className="mt-2 text-gray-700">{c.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="newsletter" className="py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-5">
        <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-emerald-50 to-cyan-50 p-6 md:p-10">
          <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Empieza hoy</h3>
          <p className="mt-2 text-gray-700">
            Suscríbete y recibe hábitos fáciles de aplicar, resúmenes de estudios y herramientas
            para sentirte mejor.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-6 grid md:grid-cols-[1fr_auto] gap-3">
            <input
              type="email"
              required
              placeholder="Tu email"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <button
              type="submit"
              className="rounded-xl bg-gray-900 px-6 py-3 text-white font-semibold hover:bg-gray-800"
            >
              Suscribirme
            </button>
          </form>
          <p className="mt-3 text-xs text-gray-500">
            Puedes darte de baja cuando quieras.
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-gray-100">
      <div className="mx-auto max-w-6xl px-5 py-10 grid md:grid-cols-2 gap-6 items-center">
        <div>
          <p className="font-bold">The Hacks Blueprint</p>
          <p className="text-sm text-gray-600">Por Benjamin — Hobart, Tasmania</p>
        </div>
        <div className="md:text-right text-sm text-gray-600">
          © {new Date().getFullYear()} — Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
