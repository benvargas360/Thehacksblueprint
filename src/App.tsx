import React from "react";
import { motion } from "framer-motion";

const bg =
  "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1920&auto=format&fit=crop";
const texture =
  "https://images.unsplash.com/photo-1520367745676-62d43b04a6ec?q=80&w=1200&auto=format&fit=crop";

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-white text-gray-900">
      <Header />
      <Hero />
      <Trustbar />
      <About />
      <Highlights />
      <Articles />
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
          <a href="#about" className="text-gray-600 hover:text-gray-900">
            Sobre mí
          </a>
          <a href="#articles" className="text-gray-600 hover:text-gray-900">
            Artículos
          </a>
          <a href="#products" className="text-gray-600 hover:text-gray-900">
            Productos
          </a>
          <a
            href="#newsletter"
            className="inline-flex items-center rounded-xl border border-gray-200 px-4 py-2 hover:bg-gray-50"
          >
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
      {/* Fondo */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden
      />
      {/* Degradado */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-white/60 via-white/70 to-white"
        aria-hidden
      />

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
            Calma, energía, enfoque. Lo esencial del wellness y el biohacking, explicado de forma sencilla y respaldado por evidencia.
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

/** ------------------------
 *  SOBRE MÍ (BIO + FOTO)
 *  ------------------------ */
function About() {
  return (
    <section id="about" className="scroll-mt-24 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col md:flex-row items-center gap-6 mb-10">
          {/* Imagen de perfil cargada desde Unavatar (Instagram) */}
          <img
            src="https://unavatar.io/instagram/thehacksblueprint"
            alt="Foto de Benjamin"
            className="w-40 h-40 rounded-full object-cover ring-4 ring-emerald-100"
          />
          <div className="flex-1">
            <h2 className="text-3xl font-extrabold mb-2">Sobre mí</h2>
            <p className="text-gray-700">
              Soy Benjamin, fundador de The Hacks Blueprint. Durante años viví
              en “modo automático”: mucho trabajo, poco descanso y hábitos que
              no me hacían bien. Un problema de salud me obligó a frenar y
              replantear mi vida. Empecé a estudiar bienestar, nutrición y
              prácticas ancestrales, y descubrí el biohacking como una forma
              simple y efectiva de optimizar cuerpo, mente y espiritu. Hoy comparto
              protocolos claros y herramientas sencillas para ayudarte a vivir
              con intención, energía y calma.
            </p>
          </div>
        </div>

        {/* Ancla de Productos para que el menú no falle */}
        <div id="products" className="scroll-mt-24 rounded-2xl border border-gray-200 p-6 bg-white">
          <h3 className="text-lg font-semibold">Productos</h3>
          <p className="mt-2 text-gray-700">
            Muy pronto: una selección curada de herramientas para un estilo de
            vida saludable.
          </p>
        </div>
      </div>
    </section>
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
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5 grid md:grid-cols-3 gap-6">
        {cards.map((c) => (
          <div
            key={c.t}
            className="rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow p-6"
            style={{
              backgroundImage: `url(${texture})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundBlendMode: "soft-light",
            }}
          >
            <h3 className="text-lg font-semibold">{c.t}</h3>
            <p className="mt-2 text-gray-700">{c.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/** ------------------------
 *  ARTÍCULOS (6 posts)
 *  ------------------------ */
function Articles() {
  type Post = {
    tag: string;
    title: string;
    excerpt: string;
    content: React.ReactNode;
  };

  const posts: Post[] = [
    {
      tag: "Sueño",
      title: "Luz de la mañana: el micro-hábito que regula tu reloj interno",
      excerpt:
        "Con 10–20 min de luz natural en la mañana puedes mejorar sueño, energía y estado de ánimo.",
      content: (
        <div className="space-y-3 text-gray-700">
          <p>
            La luz al despertar sincroniza tu “reloj biológico”, lo que promueve
            melatonina a la hora correcta y facilita conciliar el sueño por la
            noche.
          </p>
          <ul className="list-disc list-inside">
            <li>10–20 min de luz exterior dentro de las 1–2 h tras despertar.</li>
            <li>Movimiento suave (caminar) acelera el proceso.</li>
            <li>Baja la intensidad y calidez de la luz por la noche.</li>
          </ul>
        </div>
      ),
    },
    {
      tag: "Energía",
      title: "Frío bien hecho: protocolo seguro de 11 minutos por semana",
      excerpt:
        "Exposición breve y progresiva al frío puede elevar energía y resiliencia. Seguridad primero.",
      content: (
        <div className="space-y-3 text-gray-700">
          <p>
            El frío activa noradrenalina y dopamina, mejora tolerancia al estrés
            y puede apoyar la recuperación. La clave es dosis y progresión.
          </p>
          <ul className="list-disc list-inside">
            <li>11 min/semana totales en 2–4 sesiones.</li>
            <li>Respira por la nariz y mantén el cuerpo relajado.</li>
            <li>Evítalo justo después de fuerza si buscas hipertrofia.</li>
            <li>Consulta a tu médico si tienes condiciones médicas.</li>
          </ul>
        </div>
      ),
    },
    {
      tag: "Respiración",
      title: "Respirar por la nariz: más óxido nítrico, mejor sueño y foco",
      excerpt:
        "La respiración nasal filtra y humedece el aire y favorece la producción local de NO.",
      content: (
        <div className="space-y-3 text-gray-700">
          <p>
            El óxido nítrico nasal puede mejorar la oxigenación y la regulación
            del flujo de aire. Esto se asocia con menos ronquido y mejor descanso.
          </p>
          <ul className="list-disc list-inside">
            <li>Mantén la boca cerrada al respirar en reposo y al caminar.</li>
            <li>Usa tiras nasales si tienes congestión leve.</li>
            <li>Consulta en caso de apnea u obstrucción severa.</li>
          </ul>
        </div>
      ),
    },
    {
      tag: "Mindfulness",
      title: "Meditación en 10 minutos: foco y calma entrenables",
      excerpt:
        "Una práctica corta, diaria y amable reduce estrés, mejora la atención y regula emociones.",
      content: (
        <div className="space-y-3 text-gray-700">
          <p>
            Siéntate cómodo/a, ojos suavemente cerrados y lleva la atención a la
            respiración. Cuando la mente divague, vuelve sin juicio.
          </p>
          <ul className="list-disc list-inside">
            <li>Empieza con 10 minutos diarios.</li>
            <li>Marca una hora fija (mañana o mediodía).</li>
            <li>
              Alterna con NSDR/Yoga Nidra (10–20 min) para recuperación y foco.
            </li>
          </ul>
        </div>
      ),
    },
    {
      tag: "Nutrición",
      title: "Ayuno intermitente sin dogmas: empieza por 12/12",
      excerpt:
        "Primero ordena horarios y calidad de comida; luego prueba ventanas más cortas si te sienta bien.",
      content: (
        <div className="space-y-3 text-gray-700">
          <p>
            Comienza con 12/12 (p. ej., 7:30–19:30). Si te sienta bien, prueba
            10/14 u 8/16. Evita si tienes bajo peso, TCA, embarazo o indicación
            médica en contra.
          </p>
          <ul className="list-disc list-inside">
            <li>Cena 2–3 h antes de dormir.</li>
            <li>Prioriza proteína, fibra y comida real.</li>
            <li>Observa energía, sueño y rendimiento.</li>
          </ul>
        </div>
      ),
    },
    {
      tag: "Respiración",
      title: "Box y coherencia: regula tu sistema nervioso en 5 min",
      excerpt:
        "Box 4-4-4-4 para momentos de presión; coherencia 4-6 para calmarte y mantener claridad.",
      content: (
        <div className="space-y-3 text-gray-700">
          <p>
            La respiración es el control remoto del sistema nervioso. Usa
            “box breathing” (4-4-4-4) en situaciones exigentes y coherencia (4 s
            inhalar, 6 s exhalar) para relajarte.
          </p>
          <ul className="list-disc list-inside">
            <li>Haz 5 minutos al día; aumenta si lo disfrutas.</li>
            <li>Respira por la nariz y usa el diafragma.</li>
            <li>Combina con luz matinal y caminatas para mayor efecto.</li>
          </ul>
        </div>
      ),
    },
  ];

  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section id="articles" className="scroll-mt-24 py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-8">
          Artículos
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <article
              key={p.title}
              className="rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-emerald-700">
                  {p.tag}
                </span>
                <span className="text-xs text-gray-500">Lectura 3–5 min</span>
              </div>
              <h3 className="mt-3 text-xl font-bold">{p.title}</h3>
              <p className="mt-2 text-gray-700 flex-1">{p.excerpt}</p>

              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="mt-4 self-start text-sm font-semibold text-emerald-700 hover:underline"
              >
                {openIndex === i ? "Cerrar" : "Leer más →"}
              </button>

              {openIndex === i && (
                <div className="mt-4 rounded-xl border border-gray-100 bg-emerald-50/40 p-4">
                  {p.content}
                </div>
              )}
            </article>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-gray-500">
          Nota: Estos contenidos no sustituyen consejo médico. Ante síntomas o
          condiciones, consulta a un profesional de la salud.
        </p>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="newsletter" className="py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-5">
        <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-emerald-50 to-cyan-50 p-6 md:p-10">
          <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            Empieza hoy
          </h3>
          <p className="mt-2 text-gray-700">
            Suscríbete y recibe hábitos fáciles de aplicar, resúmenes de
            estudios y herramientas para sentirte mejor.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-6 grid md:grid-cols-[1fr_auto] gap-3"
          >
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
          <p className="text-sm text-gray-600">
            Por Benjamin — Hobart, Tasmania
          </p>
        </div>
        <div className="md:text-right text-sm text-gray-600">
          © {new Date().getFullYear()} — Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
