export function MetricsSection() {
  return (
    <section id="metricas" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-cyan-400 tracking-wider uppercase">Resultados</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Impacto medible desde el día uno
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            value="68%"
            label="Reducción en tiempo de resolución"
            description="Promedio en primeros 90 días"
          />
          <MetricCard value="94%" label="FAQs resueltas automáticamente" description="Sin intervención humana" />
          <MetricCard value="3.2x" label="Aumento en productividad" description="Del equipo de soporte" />
          <MetricCard value="<2s" label="Tiempo de respuesta del bot" description="P95 en hora pico" />
        </div>

        <div className="mt-16 rounded-2xl border border-slate-800 bg-slate-900/80 backdrop-blur-sm p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Redujimos el backlog de tickets en un 72% en solo dos meses."
              author="María González"
              role="VP de Operaciones"
              company="TechCorp Latam"
            />
            <TestimonialCard
              quote="La precisión del triaje automático supera a nuestro proceso manual anterior."
              author="Carlos Mendoza"
              role="CTO"
              company="FinServ México"
            />
            <TestimonialCard
              quote="Por fin tenemos visibilidad total de nuestra operación en tiempo real."
              author="Ana Rodríguez"
              role="Directora de CS"
              company="RetailPro"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function MetricCard({
  value,
  label,
  description,
}: {
  value: string
  label: string
  description: string
}) {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative rounded-2xl border border-slate-800 bg-slate-900/80 p-6 text-center hover:border-cyan-500/30 transition-colors">
        <div className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
          {value}
        </div>
        <div className="text-sm font-medium text-white mb-1">{label}</div>
        <div className="text-xs text-slate-500">{description}</div>
      </div>
    </div>
  )
}

function TestimonialCard({
  quote,
  author,
  role,
  company,
}: {
  quote: string
  author: string
  role: string
  company: string
}) {
  return (
    <div className="flex flex-col">
      <div className="text-2xl text-cyan-400 mb-4">&ldquo;</div>
      <p className="text-slate-300 text-sm leading-relaxed flex-1">{quote}</p>
      <div className="mt-4 pt-4 border-t border-slate-800">
        <div className="font-medium text-white">{author}</div>
        <div className="text-xs text-slate-400">
          {role} · {company}
        </div>
      </div>
    </div>
  )
}
