import type React from "react"
import { MessageSquare, GitBranch, BarChart3, Mail, Globe, Phone, Brain, Users, Clock } from "lucide-react"

export function FeaturesSection() {
  return (
    <section id="funcionalidades" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-cyan-400 tracking-wider uppercase">Funcionalidades</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Todo lo que necesitas, automatizado
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Bot Omnicanal */}
          <FeatureCard
            icon={<MessageSquare className="w-6 h-6" />}
            title="Bot Omnicanal 24/7"
            description="Atención automatizada e inteligente en todos tus canales de comunicación con filtrado automático de FAQs."
            gradient="from-cyan-500 to-blue-600"
          >
            <div className="mt-6 space-y-3">
              <ChannelBadge icon={<Phone className="w-4 h-4" />} name="WhatsApp" status="Activo" />
              <ChannelBadge icon={<Globe className="w-4 h-4" />} name="Web Chat" status="Activo" />
              <ChannelBadge icon={<Mail className="w-4 h-4" />} name="Email" status="Activo" />
            </div>
            <div className="mt-6 p-4 rounded-lg bg-slate-800/50 border border-slate-700/50">
              <div className="text-xs text-slate-500 mb-2">Ejemplo de conversación</div>
              <div className="space-y-2">
                <div className="flex justify-end">
                  <div className="bg-cyan-500/20 text-cyan-300 text-sm px-3 py-1.5 rounded-lg max-w-48">
                    ¿Cuál es el estado de mi pedido #4521?
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-slate-700/50 text-slate-300 text-sm px-3 py-1.5 rounded-lg max-w-48">
                    Tu pedido está en tránsito. Llegará mañana entre 9:00-12:00.
                  </div>
                </div>
              </div>
            </div>
          </FeatureCard>

          {/* Triaje Inteligente */}
          <FeatureCard
            icon={<GitBranch className="w-6 h-6" />}
            title="Triaje Inteligente"
            description="Lee tickets automáticamente, detecta prioridad por urgencia y contexto, y asigna técnicos sin intervención humana."
            gradient="from-blue-500 to-indigo-600"
          >
            <div className="mt-6 space-y-4">
              <TriageStep
                step={1}
                title="Lectura Automática"
                description="Análisis de contenido y contexto"
                icon={<Brain className="w-4 h-4" />}
              />
              <TriageStep
                step={2}
                title="Detección de Prioridad"
                description="Clasificación P1 → P4"
                icon={<BarChart3 className="w-4 h-4" />}
              />
              <TriageStep
                step={3}
                title="Asignación Inteligente"
                description="Match técnico-especialidad"
                icon={<Users className="w-4 h-4" />}
              />
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-center">
                <div className="text-lg font-bold text-red-400">P1</div>
                <div className="text-xs text-slate-400">Crítico</div>
              </div>
              <div className="p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-center">
                <div className="text-lg font-bold text-yellow-400">P2</div>
                <div className="text-xs text-slate-400">Alto</div>
              </div>
            </div>
          </FeatureCard>

          {/* Dashboards */}
          <FeatureCard
            icon={<BarChart3 className="w-6 h-6" />}
            title="Dashboards en Tiempo Real"
            description="Visualización de KPIs, predicciones de demanda y recomendaciones inteligentes basadas en datos históricos."
            gradient="from-indigo-500 to-purple-600"
          >
            <div className="mt-6 space-y-4">
              <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700/50">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-slate-400">Predicción de demanda</span>
                  <span className="text-xs text-cyan-400">Próximas 24h</span>
                </div>
                <MiniChart />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
                  <Clock className="w-4 h-4 text-cyan-400 mb-2" />
                  <div className="text-lg font-bold text-white">-42%</div>
                  <div className="text-xs text-slate-400">Tiempo respuesta</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
                  <Brain className="w-4 h-4 text-blue-400 mb-2" />
                  <div className="text-lg font-bold text-white">97%</div>
                  <div className="text-xs text-slate-400">Precisión ML</div>
                </div>
              </div>
            </div>
          </FeatureCard>
        </div>
      </div>
    </section>
  )
}

function FeatureCard({
  icon,
  title,
  description,
  gradient,
  children,
}: {
  icon: React.ReactNode
  title: string
  description: string
  gradient: string
  children: React.ReactNode
}) {
  return (
    <div className="relative group">
      <div
        className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl -z-10"
        style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }}
      />
      <div className="h-full rounded-2xl border border-slate-800 bg-slate-900/80 backdrop-blur-sm p-6 hover:border-cyan-500/30 transition-colors">
        <div
          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white mb-4`}
        >
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
        {children}
      </div>
    </div>
  )
}

function ChannelBadge({
  icon,
  name,
  status,
}: {
  icon: React.ReactNode
  name: string
  status: string
}) {
  return (
    <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">{icon}</div>
        <span className="text-sm text-white">{name}</span>
      </div>
      <span className="text-xs text-emerald-400 flex items-center gap-1">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
        {status}
      </span>
    </div>
  )
}

function TriageStep({
  step,
  title,
  description,
  icon,
}: {
  step: number
  title: string
  description: string
  icon: React.ReactNode
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-sm font-bold shrink-0">
        {step}
      </div>
      <div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-white">{title}</span>
          <span className="text-blue-400">{icon}</span>
        </div>
        <span className="text-xs text-slate-400">{description}</span>
      </div>
    </div>
  )
}

function MiniChart() {
  const data = [40, 65, 45, 80, 60, 90, 75]
  const max = Math.max(...data)

  return (
    <div className="flex items-end justify-between gap-1 h-16">
      {data.map((value, i) => (
        <div
          key={i}
          className="flex-1 bg-gradient-to-t from-cyan-500 to-blue-500 rounded-t"
          style={{ height: `${(value / max) * 100}%` }}
        />
      ))}
    </div>
  )
}
