import { useState } from 'react';
export default function DeosyronLanding() {
// Estados para controlar qué página legal se muestra
  const [activePage, setActivePage] = useState('landing'); 

  // Función para volver arriba cuando cambiamos de página
  const goTo = (page) => {
    setActivePage(page);
    window.scrollTo(0, 0);
  };

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
  // Componente visual para las páginas legales
  const LegalPage = ({ title, children }) => (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-8 md:p-20">
      <div className="max-w-3xl mx-auto">
        <button 
          onClick={() => goTo('landing')} 
          className="mb-10 flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          ← Volver al inicio
        </button>
        <h1 className="text-4xl font-bold mb-10 text-white">{title}</h1>
        <div className="text-slate-300 space-y-6 leading-8">
          {children}
        </div>
        
        <button 
          onClick={() => goTo('landing')} 
          className="mt-16 pt-8 border-t border-white/10 flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          ← Volver al inicio
        </button>
      </div>
    </main>
  );

  // Lógica de visualización: si el estado cambia, mostramos una u otra
  if (activePage === 'aviso') return (
    <LegalPage title="Aviso Legal">
      <section className="space-y-8">
        <div>
          <h2 className="text-xl font-bold text-white mb-2 underline decoration-cyan-500/50">1. INFORMACIÓN GENERAL</h2>
          <p>En cumplimiento de la Ley 34/2002, se informa que el titular de esta web es <strong>DEOSYRON</strong>, con NIF <strong>B26753103</strong> y contacto en <strong>info@deosyron.com</strong>.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-white mb-2 underline decoration-cyan-500/50">2. PROPIEDAD INTELECTUAL</h2>
          <p>Todo el software, código fuente, logotipos y diseños expuestos en esta web son propiedad de DeoSyron. Queda prohibida cualquier reproducción o distribución con fines comerciales sin autorización expresa. Como usuario, puedes visualizar y almacenar el contenido exclusivamente para uso personal.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-white mb-2 underline decoration-cyan-500/50">3. RESPONSABILIDAD Y GARANTÍAS</h2>
          <p>DeoSyron no se hace responsable de:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Daños derivados de la falta de disponibilidad del sitio o errores técnicos.</li>
            <li>El uso que el usuario haga de la información o de las demos de software publicadas.</li>
            <li>Infecciones por software malicioso, a pesar de haber tomado las medidas de seguridad necesarias.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold text-white mb-2 underline decoration-cyan-500/50">4. ENLACES Y TERCEROS</h2>
          <p>No asumimos responsabilidad sobre contenidos de enlaces externos. La inclusión de conexiones a otras webs no implica asociación alguna con sus titulares.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-white mb-2 underline decoration-cyan-500/50">5. MODIFICACIONES Y JURISDICCIÓN</h2>
          <p>Nos reservamos el derecho de modificar estas condiciones en cualquier momento. Cualquier conflicto derivado del uso de esta web se someterá a la normativa española vigente y a los juzgados competentes.</p>
        </div>
      </section>
    </LegalPage>
  );

  if (activePage === 'privacidad') return (
    <LegalPage title="Política de Privacidad">
      <section className="space-y-8 text-sm md:text-base">
        <div>
          <h2 className="text-xl font-bold text-white mb-2 underline decoration-cyan-500/50">1. RESPONSABLE DEL TRATAMIENTO</h2>
          <p>El responsable del tratamiento de los datos recabados es <strong>DEOSYRON</strong>, con NIF <strong>B26753103</strong> y domicilio en Melilla, España. Puedes contactar con nosotros a través de <strong>info@deosyron.com</strong>.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-white mb-2 underline decoration-cyan-500/50">2. FINALIDAD Y DATOS RECABADOS</h2>
          <p>Al utilizar nuestro formulario de contacto o enviarnos un email, nos facilitas datos como tu nombre, email y teléfono. La finalidad de este tratamiento es exclusivamente:</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Responder a tus consultas o solicitudes de presupuesto.</li>
            <li>Gestionar la relación comercial y la prestación de servicios de software.</li>
            <li>Garantizar la seguridad de la web y analizar la navegación técnica (datos no identificativos).</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold text-white mb-2 underline decoration-cyan-500/50">3. PRINCIPIOS Y LEGITIMACIÓN</h2>
          <p>Aplicamos los principios de <strong>transparencia, minimización de datos y confidencialidad</strong> exigidos por el RGPD y la LOPD. La base legal para tratar tus datos es tu <strong>consentimiento expreso</strong> al marcar la casilla de aceptación en nuestro formulario.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-white mb-2 underline decoration-cyan-500/50">4. TUS DERECHOS</h2>
          <p>Tienes derecho a acceder, rectificar, limitar o solicitar la supresión de tus datos en cualquier momento. Para ejercer estos derechos, solo debes enviar un correo a <strong>protecciondedatos@deosyron.com</strong> adjuntando una copia de tu DNI o documento equivalente.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-white mb-2 underline decoration-cyan-500/50">5. SEGURIDAD Y CONSERVACIÓN</h2>
          <p>Adoptamos las mejores prácticas para evitar la pérdida o acceso no autorizado a tus datos. Estos se conservarán mientras exista un interés mutuo para la finalidad del tratamiento o hasta que solicites su eliminación.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-white mb-2 underline decoration-cyan-500/50">6. CESIÓN A TERCEROS</h2>
          <p>DeoSyron no cede tus datos personales a terceros, salvo obligación legal o necesidad técnica para la prestación del servicio (como el alojamiento de la web), garantizando siempre los estándares de seguridad.</p>
        </div>
      </section>
    </LegalPage>
  );

  if (activePage === 'cookies') return (
    <LegalPage title="Política de Cookies">
      <section className="space-y-8 text-sm md:text-base">
        <div>
          <p>En <strong>DEOSYRON</strong>, utilizamos cookies para facilitar la navegación y optimizar nuestros servicios. A continuación, te explicamos qué son, cuáles usamos y cómo puedes gestionarlas.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-white mb-2 underline decoration-cyan-500/50">1. ¿QUÉ ES UNA COOKIE?</h2>
          <p>Una cookie es un pequeño archivo de texto que se descarga en tu navegador al visitar nuestra web. Permite recordar información sobre tu visita, como tu idioma preferido y otras opciones, lo que facilita tu próxima visita y hace que el sitio te resulte más útil.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-white mb-2 underline decoration-cyan-500/50">2. TIPOS DE COOKIES QUE UTILIZAMOS</h2>
          <ul className="list-disc ml-6 space-y-3">
            <li><strong>Cookies Técnicas (Necesarias):</strong> Son esenciales para que la web funcione correctamente. Permiten el tráfico de datos, identificar la sesión y utilizar elementos de seguridad.</li>
            <li><strong>Cookies de Personalización:</strong> Permiten recordar características básicas como el idioma o el tipo de navegador para mejorar tu experiencia.</li>
            <li><strong>Cookies de Análisis:</strong> Aquellas que, tratadas por nosotros o terceros (como Google Analytics), nos permiten cuantificar el número de usuarios y realizar mediciones estadísticas para mejorar nuestra oferta de servicios.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold text-white mb-2 underline decoration-cyan-500/50">3. COOKIES DE TERCEROS</h2>
          <p>Esta web utiliza <strong>Google Analytics</strong>, un servicio analítico prestado por Google, Inc. que utiliza cookies para analizar el uso que hacen los usuarios del sitio web. La información generada es gestionada directamente por Google según sus propios términos de privacidad.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-white mb-2 underline decoration-cyan-500/50">4. CÓMO GESTIONAR LAS COOKIES</h2>
          <p className="mb-4">Puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la configuración de las opciones de tu navegador:</p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-cyan-400 font-semibold text-sm underline decoration-cyan-500/30">
            <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noreferrer" className="hover:text-cyan-300">Google Chrome</a>
            <a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noreferrer" className="hover:text-cyan-300">Mozilla Firefox</a>
            <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noreferrer" className="hover:text-cyan-300">Apple Safari</a>
            <a href="https://blogs.opera.com/news/2015/08/how-to-manage-cookies-in-opera/" target="_blank" rel="noreferrer" className="hover:text-cyan-300">Opera</a>
            <a href="https://support.brave.app/hc/es/articles/360048833872--C%C3%B3mo-borro-cookies-y-datos-del-sitio-en-Brave" target="_blank" rel="noreferrer" className="hover:text-cyan-300">Brave</a>
            <a href="https://support.microsoft.com/es-es/windows/administrar-cookies-en-microsoft-edge-ver-permitir-bloquear-eliminar-y-usar-168dab11-0753-043d-7c16-ede5947fc64d#ie=ie-10" target="_blank" rel="noreferrer" className="hover:text-cyan-300">Internet Explorer</a>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold text-white mb-2 underline decoration-cyan-500/50">5. CONTACTO</h2>
          <p>Si tienes cualquier duda sobre nuestra política de cookies, puedes escribirnos a <strong>info@deosyron.com</strong>.</p>
        </div>
      </section>
    </LegalPage>
  );


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

              {/* ENLACE AL CORREO AÑADIDO AQUÍ */}
              <div className="mt-8 space-y-4">
          {/* Tarjeta de Email */}
          <a 
            href="mailto:info@deosyron.com" 
            className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all group max-w-xs"
          >
            <div className="text-2xl text-cyan-400 group-hover:scale-110 transition-transform">
              ✉
            </div>
            <div>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Escríbenos</p>
              <p className="text-slate-200 font-medium">info@deosyron.com</p>
            </div>
          </a>

          {/* Tarjeta de WhatsApp */}
          <a 
            href="https://wa.me/34644792090" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all group max-w-xs"
          >
            <div className="text-2xl text-emerald-400 group-hover:scale-110 transition-transform">
              💬
            </div>
            <div>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Vía rápida</p>
              <p className="text-slate-200 font-medium">WhatsApp Directo</p>
            </div>
          </a>
        </div>
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
              <div className="flex items-start gap-3 px-1 py-2 mb-4">
                <input 
                  type="checkbox" 
                  id="privacidad" 
                  required 
                  className="mt-1 h-4 w-4 rounded border-white/10 bg-slate-950 accent-cyan-400"
                />
                <label htmlFor="privacidad" className="text-xs text-slate-400 leading-tight">
                  He leído y acepto la{" "}
                  <button 
                    type="button" 
                    onClick={() => goTo('privacidad')} 
                    className="text-cyan-400 underline hover:text-cyan-300 transition-colors"
                    >
                    política de privacidad
                    </button>.
                  </label>
              </div>
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
      {/* Añade esto justo antes del último </main> */}
      <footer className="mx-auto max-w-7xl px-6 py-12 md:px-10 border-t border-white/5 text-center">
        <p className="text-slate-500 text-sm mb-4">
          © 2026 DEOSYRON. Soluciones de software y automatización.
        </p>
        <div className="mb-6">
          <a 
            href="mailto:info@deosyron.com" 
            className="text-slate-400 hover:text-cyan-300 transition-colors text-sm"
          >
            info@deosyron.com
          </a>
        </div>
        
        {/* Enlaces Legales */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[12px] text-slate-600">
          <button onClick={() => goTo('aviso')} className="hover:text-slate-400 transition-colors">Aviso Legal</button>
          <button onClick={() => goTo('privacidad')} className="hover:text-slate-400 transition-colors">Política de Privacidad</button>
          <button onClick={() => goTo('cookies')} className="hover:text-slate-400 transition-colors">Política de Cookies</button>
        </div>
      </footer>
    </main>
  );
}
