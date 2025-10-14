import React from "react";
import { motion } from "framer-motion";

/* Paleta aplicada:
   Azul principal:    #004C97
   Azul medio:        #0072CE
   Celeste:           #B3D8F7
   Gris claro:        #E9ECEF
   Texto:             #1F1F1F
   Rosa acento:       #E42F8A
*/

function useActiveSection(ids) {
  const [active, setActive] = React.useState("");
  React.useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [ids]);
  return active;
}

export default function DraElisaGuzmanServicios() {
  const phone = "829-764-3253";
  const waNumber = "18297643253"; // RD con código de país

  // Estado formulario (WhatsApp)
  const [form, setForm] = React.useState({
    nombre: "",
    telefono: "",
    motivo: "Evaluación vascular",
    mensaje: "",
  });
  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const texto = [
      "🗓️ Nueva solicitud de cita",
      `• Nombre: ${form.nombre}`,
      `• Teléfono: ${form.telefono}`,
      `• Motivo: ${form.motivo}`,
      `• Mensaje: ${form.mensaje || "(sin mensaje)"}`,
    ].join("\n");
    window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(texto)}`, "_blank");
    alert("Se abrirá WhatsApp con su mensaje. Si no se abre, verifique bloqueadores o use el botón flotante.");
  };

  // Datos
  const vascularServices = [
    "Manejo de problemas circulatorios en general",
    "Pie diabético",
    "Fístula arteriovenosa para hemodiálisis",
    "Catéter para hemodiálisis (temporal y permanente)",
    "Trombosis venosa profunda (clínico/quirúrgico)",
    "Edema linfático (clínico/quirúrgico)",
    "Várices e insuficiencia venosa crónica",
    "Insuficiencia/obstrucción arterial miembros",
    "Patologías carotídeas",
    "Aneurismas de aorta y periféricos",
    "Trauma vascular",
  ];
  const cardiacThoracicServices = [
    "Cirugía valvular y revascularización coronaria",
    "Patologías de mediastino y pericardio (resección, pericardiectomía, ventana, pericardiocentesis)",
  ];
  const generalSurgeryServices = [
    "Colecistectomía (convencional y laparoscópica)",
    "Hernias (inguinal, umbilical, hiatal, etc.)",
    "Esófago, estómago e intestino",
    "Páncreas e hígado",
    "Tumores de partes blandas",
    "Trauma abdominal/torácico",
    "Patología tiroidea y mamaria",
    "Vías centrales",
    "Toracostomía mínima (tubo de pecho)",
  ];
  const education = [
    "Doctora en Medicina – UTESA",
    "Postgrado Cirugía General y Laparoscopia – Moscoso Puello (UASD)",
    "Postgrado Cirugía Cardiovascular – Hospital Vargas (Venezuela)",
    "Maestría Gestión de Sistemas y Servicios de Salud – PUCMM",
    "Diplomado Salud Pública y Gestión Hospitalaria – UTESA",
  ];

  // Animaciones
  const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
  const stagger = { show: { transition: { staggerChildren: 0.08 } } };

  // UI
  const active = useActiveSection(["inicio", "metricas", "servicios", "proceso", "trayectoria", "instagram", "contacto"]);
  const linkCls = (id) =>
    "transition " + (active === id ? "text-[#004C97] font-semibold" : "text-[#1F1F1F] hover:text-[#004C97]");

  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#1F1F1F]">
      {/* HEADER */}
      <header className={`sticky top-0 z-40 w-full border-b ${scrolled ? "bg-white/90 backdrop-blur border-[#E9ECEF]" : "bg-transparent border-transparent"}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-3">
            <div className="h-10 w-10 overflow-hidden rounded-full ring-1 ring-[#E9ECEF]">
              <img src="/img/dra.png" alt="Dra. Elisa Guzmán Ayala" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div>
              <p className="text-xs sm:text-sm text-[#004C97]">Cirugía Cardiovascular | General | Laparoscopia</p>
              <h1 className="text-base font-semibold">Dra. Elisa Guzmán Ayala</h1>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#metricas" className={linkCls("metricas")}>Confianza</a>
            <a href="#servicios" className={linkCls("servicios")}>Servicios</a>
            <a href="#proceso" className={linkCls("proceso")}>Proceso</a>
            <a href="#trayectoria" className={linkCls("trayectoria")}>Trayectoria</a>
            <a href="#instagram" className={linkCls("instagram")}>Instagram</a>
            <a href="#contacto" className={linkCls("contacto")}>Contacto</a>
            <a
              href={`tel:${phone}`}
              className="inline-flex items-center rounded-xl border border-[#004C97] px-4 py-2 font-medium text-[#004C97] hover:bg-[#004C97] hover:text-white transition"
            >
              Agendar cita
            </a>
          </nav>
        </div>
      </header>

      {/* HERO con degradado + textura sutil */}
      <section id="inicio" className="relative overflow-hidden bg-gradient-to-r from-[#B3D8F7] via-[#B3D8F7] to-white">
        {/* textura opcional (si /img/pattern.svg no existe, no pasa nada) */}
        <div className="absolute inset-0 bg-[url('/img/pattern.svg')] bg-repeat opacity-10 pointer-events-none" />
        {/* halo suave */}
        <div className="absolute -z-0 top-[-20%] right-[-10%] w-[40rem] h-[40rem] rounded-full bg-[#B3D8F7] blur-3xl opacity-30" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={stagger} className="max-w-2xl text-[#004C97]">
              <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-semibold leading-tight">
                Cirugía cardiovascular y general con enfoque humano y de calidad
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-6 text-base text-[#1F1F1F]">
                Evaluación, diagnóstico y tratamiento de enfermedades vasculares, cardíacas y generales con protocolos seguros y actualizados.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
                <a href={`tel:${phone}`} className="inline-flex items-center rounded-xl bg-[#004C97] text-white px-5 py-3 font-medium hover:bg-[#0072CE] active:scale-95 transition">
                  Llamar ahora
                </a>
                <a
                  href="#servicios"
                  className="group inline-flex items-center gap-2 rounded-xl border border-[#004C97] text-[#004C97] px-5 py-3 font-medium hover:bg-[#004C97] hover:text-white transition"
                >
                  Ver servicios
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, ease: "easeOut" }} viewport={{ once: true, amount: 0.2 }} className="relative lg:justify-self-end">
              <div className="aspect-[4/3] w-full max-w-xl rounded-3xl border border-white/60 backdrop-blur shadow-[0_8px_30px_rgba(0,76,151,0.12)] overflow-hidden bg-white">
                <img src="/img/dra1.png" alt="Dra. Elisa Guzmán Ayala" className="h-full w-full object-cover" loading="lazy" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MÉTRICAS / CONFIANZA */}
      <section id="metricas" className="bg-[#B3D8F7]/30 border-y border-[#E9ECEF]">
        <div className="container mx-auto px-6 lg:px-12 xl:px-20 py-8 grid sm:grid-cols-3 gap-6 text-center">
          {[
            {n:"+15", t:"años de experiencia"},
            {n:"+3,000", t:"procedimientos realizados"},
            {n:"98%", t:"satisfacción de pacientes"},
          ].map(({n,t})=>(
            <div key={t} className="rounded-2xl bg-white shadow-[0_8px_30px_rgba(0,76,151,0.08)] hover:shadow-[0_12px_40px_rgba(0,76,151,0.15)] border border-[#E9ECEF] px-6 py-6">
              <div className="text-3xl font-semibold text-[#004C97]">{n}</div>
              <div className="mt-1 text-sm text-[#1F1F1F]/70">{t}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="bg-gradient-to-br from-white via-[#B3D8F7]/10 to-[#E9ECEF]/20 border-y border-[#E9ECEF]">
        <div className="container mx-auto px-6 lg:px-12 xl:px-20 py-16">
          <h3 className="text-2xl font-semibold mb-10 text-[#004C97] text-center">Cartera de servicios</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <ServiceCardPro
              title="Cirugía Vascular y Endovascular"
              subtitle="Diagnóstico y tratamiento de patología arterial y venosa."
              image="/img/vascular.png"
              items={vascularServices}
              phone={phone}
            />
            <ServiceCardPro
              title="Cirugía Cardíaca y Tórax"
              subtitle="Manejo integral de patología cardiaca y del mediastino."
              image="/img/cardiaca.png"
              items={cardiacThoracicServices}
              phone={phone}
            />
            <ServiceCardPro
              title="Cirugía General y Laparoscópica"
              subtitle="Procedimientos mínimamente invasivos y convencionales."
              image="/img/general.png"
              items={generalSurgeryServices}
              phone={phone}
            />
          </div>
        </div>
      </section>

      {/* PROCESO EN 3 PASOS */}
      <section id="proceso" className="bg-white border-t border-[#E9ECEF]">
        <div className="container mx-auto px-6 lg:px-12 xl:px-20 py-16">
          <h3 className="text-2xl font-semibold text-[#004C97] text-center">¿Cómo agendar y ser atendido?</h3>
          <p className="text-center mt-2 text-[#1F1F1F]/70 max-w-2xl mx-auto">Un flujo simple y claro para brindarle atención segura y de calidad.</p>
          <div className="relative mt-10">
            {/* Conector */}
            <div className="hidden md:block absolute left-12 right-12 top-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-r from-[#B3D8F7] via-[#E9ECEF] to-[#B3D8F7]" />
            <div className="grid md:grid-cols-3 gap-6 relative max-w-6xl mx-auto">
              {/* Paso 1 */}
              <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.45 }}
                className="rounded-2xl border border-[#E9ECEF] bg-[#B3D8F7]/10 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#004C97] text-white font-semibold">1</span>
                  <h4 className="font-semibold text-[#004C97]">Contáctenos</h4>
                </div>
                <p className="mt-3 text-sm text-[#1F1F1F]/80">Llámenos o envíe su caso por WhatsApp. Revisamos su información y coordinamos la cita.</p>
                <div className="mt-4 flex gap-2">
                  <a href={`tel:${phone}`} className="text-sm rounded-lg bg-[#004C97] text-white px-3 py-1.5 hover:bg-[#0072CE]">Llamar</a>
                  <a href={`https://wa.me/${waNumber}?text=${encodeURIComponent("Hola, deseo una cita.")}`} target="_blank" rel="noreferrer"
                     className="text-sm rounded-lg border border-[#004C97] text-[#004C97] px-3 py-1.5 hover:bg-[#004C97] hover:text-white">
                    WhatsApp
                  </a>
                </div>
              </motion.div>
              {/* Paso 2 */}
              <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.45, delay: 0.05 }}
                className="rounded-2xl border border-[#E9ECEF] bg-white p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#004C97] text-white font-semibold">2</span>
                  <h4 className="font-semibold text-[#004C97]">Evaluación</h4>
                </div>
                <p className="mt-3 text-sm text-[#1F1F1F]/80">Consulta médica, examen físico y, de ser necesario, estudios diagnósticos.</p>
                <ul className="mt-3 text-sm text-[#1F1F1F]/70 list-disc list-inside space-y-1">
                  <li>Doppler / ultrasonido vascular</li>
                  <li>Laboratorios y estudios complementarios</li>
                </ul>
              </motion.div>
              {/* Paso 3 */}
              <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.45, delay: 0.1 }}
                className="rounded-2xl border border-[#E9ECEF] bg-[#B3D8F7]/10 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#004C97] text-white font-semibold">3</span>
                  <h4 className="font-semibold text-[#004C97]">Plan de tratamiento</h4>
                </div>
                <p className="mt-3 text-sm text-[#1F1F1F]/80">Recibirá un plan claro (médico o quirúrgico) con indicaciones y seguimiento.</p>
                <div className="mt-4">
                  <a href="#contacto" className="text-sm rounded-lg bg-[#0072CE] text-white px-3 py-1.5 hover:bg-[#004C97]">Agendar seguimiento</a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      {/* TRAYECTORIA */}
      <section id="trayectoria" className="bg-white border-t border-[#E9ECEF]">
        <div className="container mx-auto px-6 lg:px-12 xl:px-20 py-20">
          <div className="text-center mb-14">
            <h3 className="text-3xl font-semibold text-[#004C97]">Trayectoria Profesional</h3>
            <p className="mt-3 text-[#1F1F1F]/70 max-w-2xl mx-auto">Experiencia, formación y compromiso con la excelencia médica.</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {/* Perfil */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} viewport={{ once: true, amount: 0.3 }}
              className="rounded-2xl border border-[#E9ECEF] bg-[#B3D8F7]/10 p-8 shadow-sm hover:shadow-md transition">
              <h4 className="flex items-center gap-2 text-xl font-semibold text-[#004C97] mb-3">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#004C97" strokeWidth="2"><path d="M12 2l4 7H8l4-7zM2 22h20l-10-7-10 7z"/></svg>
                Perfil profesional
              </h4>
              <p className="text-[#1F1F1F]/80 leading-relaxed">
                Cirujana cardiovascular y cirujana general con amplia experiencia asistencial y en gestión de servicios de salud.
                Fundadora del <span className="font-medium text-[#004C97]">Centro de Salud Integral Guzmán-Zorrilla & Asoc. S.R.L.</span>,
                con enfoque humano, seguridad del paciente y calidad quirúrgica.
              </p>
              <div className="flex items-center gap-3 mt-6">
                <img src="/img/dra.png" alt="Dra. Elisa Guzmán Ayala" className="w-10 h-10 rounded-full ring-2 ring-white shadow" />
                <p className="text-sm text-[#1F1F1F]/70">Dra. Elisa Guzmán Ayala • Cirugía Cardiovascular</p>
              </div>
            </motion.div>
            {/* Formación */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} viewport={{ once: true, amount: 0.3 }}
              className="rounded-2xl border border-[#E9ECEF] bg-white p-8 shadow-sm hover:shadow-md transition">
              <h4 className="flex items-center gap-2 text-xl font-semibold text-[#004C97] mb-3">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#004C97" strokeWidth="2"><path d="M4 4h16v4H4zM4 12h16v8H4z"/></svg>
                Formación académica
              </h4>
              <ul className="space-y-2 text-sm text-[#1F1F1F]/80 list-disc list-inside">
                {education.map((e) => <li key={e}>{e}</li>)}
              </ul>
            </motion.div>
          </div>
          {/* Áreas de enfoque */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} viewport={{ once: true, amount: 0.3 }}
            className="mt-10 max-w-6xl mx-auto">
            <div className="rounded-2xl border border-[#E9ECEF] bg-[#B3D8F7]/10 p-8 shadow-sm hover:shadow-md transition">
              <h4 className="text-xl font-semibold text-[#004C97] mb-4 text-center">Áreas de enfoque</h4>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm text-[#1F1F1F]/80">
                {[
                  "Enfermedad arterial periférica",
                  "Insuficiencia venosa y várices",
                  "Accesos vasculares para hemodiálisis",
                  "Cirugía laparoscópica avanzada",
                  "Patología valvular y coronaria",
                  "Trauma vascular y general",
                ].map((area) => (
                  <div key={area} className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 border border-[#E9ECEF] hover:border-[#0072CE] hover:shadow-sm transition">
                    <svg viewBox="0 0 20 20" className="w-4 h-4 text-[#0072CE]" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 0 1 0 1.414l-7.25 7.25a1 1 0 0 1-1.414 0L3.293 9.957a1 1 0 1 1 1.414-1.414l3.04 3.04 6.543-6.543a1 1 0 0 1 1.414 0Z" clipRule="evenodd"/>
                    </svg>
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* INSTAGRAM (perfil + botón) */}
      <section id="instagram" className="bg-white border-t border-[#E9ECEF]">
        <div className="container mx-auto px-6 lg:px-12 xl:px-20 py-16">
          <h3 className="text-2xl font-semibold text-[#004C97] text-center">Instagram</h3>
          <p className="text-center mt-2 text-[#1F1F1F]/80">Contenido sobre cirugía, salud vascular y bienestar.</p>
          <div className="mt-10 grid lg:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
            {/* Card estilo IG */}
            <motion.div initial={{opacity:0, scale:0.96}} whileInView={{opacity:1, scale:1}} transition={{duration:0.6}}>
              <div className="rounded-[28px] p-[1px] bg-gradient-to-br from-[#B3D8F7] via-white to-[#E9ECEF] shadow-[0_6px_20px_rgba(0,76,151,0.08)] hover:shadow-[0_10px_30px_rgba(0,76,151,0.12)]">
                <div className="rounded-[26px] bg-white ring-1 ring-[#E9ECEF] w-[340px] mx-auto">
                  <div className="p-6 flex flex-col items-center">
                    <div className="relative w-36 h-36 rounded-full overflow-hidden ring-4 ring-white shadow-md">
                      <img src="/img/dra.png" alt="Dra. Elisa Guzmán Ayala" className="w-full h-full object-cover" loading="lazy"/>
                    </div>
                    <span className="mt-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium bg-[#B3D8F7]/40 text-[#004C97] ring-1 ring-[#B3D8F7]">
                      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zM12 7a5 5 0 100 10 5 5 0 000-10z"/></svg>
                      @dra.elisaguzmanayala
                    </span>
                    <div className="mt-3 text-center">
                      <p className="font-semibold text-[#1F1F1F]">Dra. Elisa Guzmán Ayala</p>
                      <p className="text-xs text-[#1F1F1F]/70">Cirugía Cardiovascular · General · Laparoscopia</p>
                      <p className="text-xs text-[#1F1F1F]/70 mt-1">Santo Domingo, RD 🇩🇴</p>
                    </div>
                    <div className="mt-5 w-full">
                      <div className="flex items-center gap-2 text-[11px] text-[#1F1F1F]/60 px-3 py-2 rounded-xl bg-[#B3D8F7]/20 ring-1 ring-[#E9ECEF]">
                        <div className="flex-1 truncate">Consejos y casos clínicos • Actualizaciones</div>
                        <div className="flex items-center gap-1 shrink-0">
                          <span className="inline-block w-1.5 h-3 bg-[#0072CE] rounded" />
                          <span className="inline-block w-1.5 h-4 bg-[#004C97] rounded" />
                          <span className="inline-block w-1.5 h-2 bg-[#0072CE] rounded" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA seguir + métricas simples */}
            <div className="text-center lg:text-left">
              <h4 className="text-xl font-semibold text-[#004C97]">Sígueme para más contenido</h4>
              <p className="mt-2 text-[#1F1F1F]/80">Publico recomendaciones, avances y educación para pacientes y colegas.</p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:items-center">
                <a
                  href="https://www.instagram.com/dra.elisaguzmanayala/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#E42F8A] to-[#C42773] px-7 py-3 text-white font-semibold shadow-md hover:shadow-lg hover:from-[#ff4fa8] hover:to-[#d83585] active:scale-95 transition-all duration-300 w-full sm:w-auto"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zm8.5 1.5A4.25 4.25 0 0120.5 7.75v8.5a4.25 4.25 0 01-4.25 4.25h-8.5A4.25 4.25 0 013.5 16.25v-8.5A4.25 4.25 0 017.75 3.5h8.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 1.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm5.25-.25a1 1 0 100 2 1 1 0 000-2z" />
                  </svg>
                  Seguir en Instagram
                </a>
                <div className="flex justify-center sm:justify-start gap-6 text-sm text-[#1F1F1F]/70">
                  <div><span className="font-semibold text-[#004C97]">+ Contenido</span> semanal</div>
                  <div><span className="font-semibold text-[#004C97]">Historias</span> educativas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="bg-[#B3D8F7]/20 border-t border-[#E9ECEF]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-10">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} viewport={{ once: true, amount: 0.3 }}>
            <h3 className="text-2xl font-semibold text-[#004C97] mb-4">Contacto y citas</h3>
            <p className="mb-6">Comuníquese al teléfono o complete el formulario. El mensaje se abrirá automáticamente en WhatsApp.</p>

            <div className="rounded-2xl border border-[#E9ECEF] bg-white p-6 shadow-sm mb-6">
              <p className="text-sm text-[#004C97]">Teléfono</p>
              <a href={`tel:${phone}`} className="text-lg font-semibold hover:underline">{phone}</a>
              <p className="mt-4 text-sm text-[#004C97]">Dirección</p>
              <p>Centro de Salud Integral Guzmán-Zorrilla, Santo Domingo</p>
              <div className="mt-3 flex flex-wrap gap-3 text-sm">
                <a className="inline-flex items-center rounded-lg border border-[#004C97] text-[#004C97] px-3 py-1.5 hover:bg-[#004C97] hover:text-white transition" href="https://www.google.com/maps?daddr=18.574568147346994,-70.08792534267644" target="_blank" rel="noreferrer">
                  Cómo llegar
                </a>
                <a className="inline-flex items-center rounded-lg border border-[#004C97] text-[#004C97] px-3 py-1.5 hover:bg-[#004C97] hover:text-white transition" href="https://www.google.com/maps/place/18.574568147346994,-70.08792534267644" target="_blank" rel="noreferrer">
                  Ver en Google Maps
                </a>
              </div>
              <p className="mt-4 text-sm text-[#004C97]">Horario</p>
              <p>Lun–Vie 9:00–18:00</p>
            </div>

            <div className="rounded-2xl overflow-hidden border border-[#E9ECEF] bg-white shadow-sm">
              <iframe
                title="Ubicación – Centro de Salud Integral Guzmán-Zorrilla"
                src="https://www.google.com/maps?q=18.574568147346994,-70.08792534267644&z=16&output=embed"
                className="w-full h-60"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Formulario WhatsApp */}
          <motion.form
            onSubmit={handleWhatsAppSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="rounded-2xl border border-[#E9ECEF] bg-white p-6 shadow-sm"
          >
            {/* Honeypot anti-spam */}
            <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input label="Nombre" type="text" placeholder="Nombre completo" name="nombre" value={form.nombre} onChange={handleChange} />
              <Input label="Teléfono" type="tel" placeholder="809-000-0000" name="telefono" value={form.telefono} onChange={handleChange} />
              <div className="flex flex-col gap-1 sm:col-span-2">
                <label className="text-sm text-[#004C97]">Motivo de consulta</label>
                <select name="motivo" value={form.motivo} onChange={handleChange} className="rounded-xl border border-[#E9ECEF] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#004C97]/30">
                  <option>Evaluación vascular</option>
                  <option>Evaluación cardíaca</option>
                  <option>Cirugía general</option>
                  <option>Segunda opinión</option>
                  <option>Otro</option>
                </select>
              </div>
              <div className="flex flex-col gap-1 sm:col-span-2">
                <label className="text-sm text-[#004C97]">Mensaje</label>
                <textarea rows={4} name="mensaje" value={form.mensaje} onChange={handleChange} className="rounded-xl border border-[#E9ECEF] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#004C97]/30" placeholder="Describa brevemente su caso" />
              </div>
              <div className="sm:col-span-2">
                <button type="submit" className="w-full inline-flex items-center justify-center rounded-xl bg-[#0072CE] text-white px-5 py-3 font-medium hover:bg-[#004C97] active:scale-95 transition">
                  Enviar por WhatsApp
                </button>
              </div>
            </div>
            <p className="mt-3 text-xs">* Se abrirá WhatsApp con el mensaje prellenado.</p>
          </motion.form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#E9ECEF]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm">© {new Date().getFullYear()} Dra. Elisa Guzmán Ayala. Todos los derechos reservados.</p>
            <div className="text-sm text-[#004C97]">Atención por cita | Enfoque basado en evidencia</div>
          </div>
          <div className="border-t border-[#004C97]/10 mt-6 pt-3 text-center text-xs text-[#004C97]/70">
            Santo Domingo, República Dominicana · Tel. {phone}
          </div>
        </div>
      </footer>

      {/* CTA fija inferior (solo móvil) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-t border-[#E9ECEF]">
        <div className="max-w-screen-lg mx-auto px-4 py-3 grid grid-cols-2 gap-3">
          <a href={`tel:${phone}`} className="inline-flex items-center justify-center rounded-xl bg-[#004C97] text-white py-3 font-semibold active:scale-95">Llamar</a>
          <a href={`https://wa.me/${waNumber}?text=${encodeURIComponent("Hola, quisiera agendar una cita.")}`} target="_blank" rel="noreferrer"
             className="inline-flex items-center justify-center rounded-xl bg-green-600 text-white py-3 font-semibold active:scale-95">
            WhatsApp
          </a>
        </div>
      </div>

      {/* WhatsApp flotante (desktop) */}
      <a
        href="https://wa.me/18297643253?text=Hola,%20quisiera%20agendar%20una%20cita"
        className="hidden md:inline-flex fixed bottom-5 right-5 z-50 items-center justify-center w-14 h-14 rounded-full shadow-lg bg-green-500 text-white hover:scale-105 active:scale-95 transition"
        aria-label="Chatear por WhatsApp"
        target="_blank"
        rel="noreferrer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-8 h-8 fill-current">
          <path d="M19.11 17.29c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.15-.42-2.19-1.34-.81-.72-1.36-1.6-1.52-1.87-.16-.27-.02-.41.12-.54.12-.12.27-.32.41-.47.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.47-.07-.14-.61-1.47-.84-2.01-.22-.53-.44-.45-.61-.45-.16 0-.34-.02-.52-.02-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.27 0 1.34.97 2.63 1.11 2.81.14.18 1.9 2.9 4.62 4 .65.28 1.16.45 1.56.58.65.21 1.24.18 1.71.11.52-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32zM16.02 3C9.37 3 4 8.37 4 15.02c0 2.65.87 5.09 2.33 7.07L5 28l6.06-1.59c1.93 1.26 4.24 2 6.73 2 6.65 0 12.02-5.37 12.02-12.02C29.81 8.37 22.67 3 16.02 3z"/>
        </svg>
      </a>

      {/* JSON-LD LocalBusiness (SEO) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context":"https://schema.org",
            "@type":"MedicalClinic",
            "name":"Dra. Elisa Guzmán Ayala",
            "telephone":"+1-829-764-3253",
            "medicalSpecialty":["Cardiovascular","Surgical","Vascular"],
            "address":{"@type":"PostalAddress","addressLocality":"Santo Domingo","addressCountry":"DO"},
            "geo":{"@type":"GeoCoordinates","latitude":18.574568147346994,"longitude":-70.08792534267644},
            "sameAs":["https://www.instagram.com/dra.elisaguzmanayala/"],
            "openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"09:00","closes":"18:00"}]
          })
        }}
      />
    </div>
  );
}

/* ---------- Componentes auxiliares ---------- */

function Input({ label, type, placeholder, name, value, onChange }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm text-[#004C97]" htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        required
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="rounded-xl border border-[#E9ECEF] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#004C97]/30"
      />
    </div>
  );
}

function ServiceCardPro({ title, subtitle, image, items = [], phone }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group relative h-full"
    >
      <div className="rounded-2xl p-[1px] bg-gradient-to-br from-[#B3D8F7] via-white to-[#E9ECEF] h-full">
        <div className="relative rounded-2xl bg-white overflow-hidden shadow-sm hover:shadow-lg transition flex flex-col h-full border border-[#E9ECEF] hover:border-[#004C97]/30">
          {/* Mini ícono decorativo */}
          <div className="absolute top-4 right-4 text-[#B3D8F7]">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#B3D8F7" strokeWidth="2"><path d="M12 2l4 7H8l4-7zM2 22h20l-10-7-10 7z"/></svg>
          </div>

          {/* Imagen + overlay */}
          <div className="relative h-40 w-full flex-shrink-0">
            <img src={image} alt={title} className="h-full w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
            <span className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-lg bg-white/90 backdrop-blur px-3 py-1 text-xs font-medium text-[#004C97] ring-1 ring-[#E9ECEF]">
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 21s-6.5-4.35-9-7.88C1 9.44 3.24 6 6.5 6c1.73 0 3.41.81 4.5 2.09C12.09 6.81 13.77 6 15.5 6 18.76 6 21 9.44 21 13.12 18.5 16.65 12 21 12 21z"/>
              </svg>
              Especialidad
            </span>
          </div>

          {/* Contenido */}
          <div className="p-6 flex flex-col justify-between flex-grow">
            <div>
              <h4 className="text-lg font-semibold text-[#004C97]">{title}</h4>
              {subtitle && <p className="mt-1 text-sm text-[#1F1F1F]/70">{subtitle}</p>}
              <ul className="mt-4 space-y-2 text-sm">
                {items.slice(0, 6).map((s) => (
                  <li key={s} className="flex items-start gap-2">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#B3D8F7] text-[#004C97] ring-1 ring-[#E9ECEF]">
                      <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 0 1 0 1.414l-7.25 7.25a1 1 0 0 1-1.414 0L3.293 9.957a1 1 0 1 1 1.414-1.414l3.04 3.04 6.543-6.543a1 1 0 0 1 1.414 0Z" clipRule="evenodd"/>
                      </svg>
                    </span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer */}
            <div className="mt-6 flex items-center justify-between pt-4 border-t border-[#E9ECEF]">
              <a href="#contacto" className="text-sm font-medium text-[#0072CE] hover:text-[#004C97] underline underline-offset-4">Ver más</a>
              <a href={`tel:${phone}`} className="inline-flex items-center gap-2 rounded-xl bg-[#0072CE] text-white px-4 py-2 text-sm font-medium hover:bg-[#004C97] active:scale-95 transition">
                Agendar
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 2 11 13" />
                  <path d="M22 2 15 22 11 13 2 9l20-7z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Halo sutil al hover */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition shadow-[0_20px_60px_-30px_rgba(0,76,151,0.35)]" />
    </motion.article>
  );
}
