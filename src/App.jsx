export default function DeosyronLanding() {
  const services = [
    {
      title: "Desarrollo de apps y software a medida",
      text: "Creamos aplicaciones móviles, de escritorio y herramientas internas adaptadas a cada necesidad, optimizando procesos y productividad.",
    },
    {
      title: "Automatización e integraciones",
      text: "Conectamos sistemas, APIs y dispositivos para eliminar tareas manuales y mejorar el flujo de trabajo.",
    },
    {
      title: "Software de gestión",
      text: "Desarrollamos soluciones personalizadas para control de operaciones, datos, seguimiento y toma de decisiones.",
    },
    {
      title: "Inteligencia aplicada",
      text: "Implementamos soluciones con lógica avanzada e IA para análisis, asistencia y optimización de procesos.",
    },
  ];

  const values = [
    "Precisión técnica",
    "Automatización real",
    "Integración de sistemas",
    "Seguridad",
    "Escalabilidad",
    "Innovación aplicada",
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(6,182,212,0.16),transparent_28%)]" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:40px_40px]" />

        {/*<img
          src="/logo.png"
          alt="Logo DeoSyron"
          className="absolute right-2 top-1 z-20 w-28 h-auto md:right-4 md:top-2 md:w-[300px] drop-shadow-[0_0_15px_rgba(0,150,255,0.5)]"
          />*/}

       <div className="relative mx-auto max-w-7xl px-6 pt-12 pb-16 md:px-10 md:pt-16 md:pb-20">
          <div className="grid items-start gap-14 lg:grid-cols-2">
            <div>
              <div className="mb-6 inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm tracking-[0.2em] text-cyan-300 uppercase">
                DEOSYRON
              </div>

              <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                Eliminamos trabajo manual. Centralizamos tu operativa. Convertimos Excel y papel en software real.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                En DEOSYRON desarrollamos apps y programas a medida para que dejes de depender de procesos manuales. Digitalizamos, conectamos y automatizamos tu operativa para darte control total, trazabilidad y eficiencia real.
              </p>

              <div className="mt-8 grid gap-3 text-sm text-cyan-200">
                <div className="flex items-center gap-2">• Eliminación de tareas repetitivas</div>
                <div className="flex items-center gap-2">• Control total de datos y procesos</div>
                <div className="flex items-center gap-2">• Sustitución de Excel, papel y sistemas dispersos</div>
                <div className="flex items-center gap-2">• Automatización e integración completa</div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contacto"
                  className="rounded-2xl border border-cyan-300/40 bg-cyan-400/15 px-6 py-3 text-sm font-medium text-cyan-200 shadow-lg shadow-cyan-950/40 transition hover:bg-cyan-400/25"
                >
                  Solicitar información
                </a>
                <a
                  href="#servicios"
                  className="rounded-2xl border border-white/15 px-6 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/5"
                >
                  Ver servicios
                </a>
              </div>
            </div>

            <div className="relative mt-30 md:mt-38">
              <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-sm">
                <div className="rounded-[28px] border border-cyan-400/20 bg-slate-900/80 p-8">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Núcleo digital</p>
                      <h2 className="mt-2 text-2xl font-semibold">Ecosistema DEOSYRON</h2>
                    </div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-xl font-bold text-cyan-300">
                      DS
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                      <p className="text-sm text-slate-400">Especialidad</p>
                      <p className="mt-2 text-lg font-medium">Apps + automatización</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                      <p className="text-sm text-slate-400">Enfoque</p>
                      <p className="mt-2 text-lg font-medium">Precisión y escalabilidad</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                      <p className="text-sm text-slate-400">Identidad</p>
                      <p className="mt-2 text-lg font-medium">Innovación con carácter</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                      <p className="text-sm text-slate-400">Objetivo</p>
                      <p className="mt-2 text-lg font-medium">Crear valor real</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Servicios</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Qué problemas resolvemos</h2>
          </div>
          <p className="max-w-2xl text-slate-400">
            Si tu empresa depende de Excel, procesos manuales o sistemas desconectados, estás perdiendo tiempo, control y dinero. Nosotros lo convertimos en software eficiente.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7 shadow-xl shadow-slate-950/20 transition hover:-translate-y-1 hover:border-cyan-400/30"
            >
              <div className="mb-5 h-11 w-11 rounded-2xl border border-cyan-400/30 bg-cyan-400/10" />
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-4 leading-7 text-slate-400">{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Filosofía</p>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Una marca construida para transmitir solidez tecnológica</h2>
              <p className="mt-6 max-w-3xl leading-8 text-slate-300">
                DEOSYRON nace con una visión clara: combinar estética avanzada, estructura técnica y utilidad real. No se trata solo de tener presencia digital, sino de contar con una base tecnológica coherente, profesional y preparada para evolucionar.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {values.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-slate-950/70 p-5 text-sm font-medium text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="rounded-[32px] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-slate-900 to-slate-950 p-8 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Contacto</p>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Hablemos de tu proyecto</h2>
              <p className="mt-5 max-w-2xl leading-8 text-slate-300">
                Si estás buscando una app, un programa a medida, una solución interna o automatizaciones, DEOSYRON puede ayudarte a construir una propuesta sólida y diferenciada.
              </p>
            </div>

            <form className="space-y-4 rounded-[28px] border border-white/10 bg-black/20 p-6 backdrop-blur-sm">
              <input
                type="text"
                placeholder="Nombre"
                className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 outline-none transition placeholder:text-slate-500 focus:border-cyan-400/40"
              />
              <input
                type="email"
                placeholder="Correo electrónico"
                className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 outline-none transition placeholder:text-slate-500 focus:border-cyan-400/40"
              />
              <textarea
                rows={5}
                placeholder="Cuéntanos qué necesitas"
                className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 outline-none transition placeholder:text-slate-500 focus:border-cyan-400/40"
              />
              <button
                type="button"
                className="w-full rounded-2xl border border-cyan-300/40 bg-cyan-400/15 px-6 py-3 font-medium text-cyan-200 transition hover:bg-cyan-400/25"
              >
                Enviar solicitud
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
