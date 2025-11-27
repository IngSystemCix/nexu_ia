import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Zap, Brain } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-sm text-cyan-400">Plataforma de Inteligencia Operativa</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="text-white">Automatiza tu operación con</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Inteligencia Artificial Híbrida
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Combina el poder de GPT-4o para lenguaje natural con modelos predictivos propios. Trazabilidad total,
            seguridad empresarial y cero exposición de datos sensibles.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              asChild
              size="lg"
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-8 h-12 text-base"
            >
              <Link href="/login">
                Comenzar Ahora
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white px-8 h-12 text-base bg-transparent"
            >
              Ver Documentación
            </Button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center gap-2 text-slate-500">
              <Shield className="w-5 h-5 text-cyan-500" />
              <span className="text-sm">SOC 2 Compliant</span>
            </div>
            <div className="flex items-center gap-2 text-slate-500">
              <Zap className="w-5 h-5 text-cyan-500" />
              <span className="text-sm">99.9% Uptime SLA</span>
            </div>
            <div className="flex items-center gap-2 text-slate-500">
              <Brain className="w-5 h-5 text-cyan-500" />
              <span className="text-sm">IA On-Premise Disponible</span>
            </div>
          </div>
        </div>

        {/* Hero visual */}
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10" />
          <div className="relative rounded-2xl border border-cyan-500/20 bg-slate-900/50 backdrop-blur-sm p-4 shadow-2xl shadow-cyan-500/10">
            <div className="flex items-center gap-2 mb-4 px-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-4 text-xs text-slate-500 font-mono">
                NexusAI Dashboard — Operational Intelligence
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <DashboardCard title="Tickets Activos" value="147" change="+12%" positive />
              <DashboardCard title="Tiempo Promedio" value="2.4h" change="-34%" positive />
              <DashboardCard title="Satisfacción" value="94.7%" change="+8%" positive />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function DashboardCard({
  title,
  value,
  change,
  positive,
}: {
  title: string
  value: string
  change: string
  positive: boolean
}) {
  return (
    <div className="rounded-xl bg-slate-800/50 border border-slate-700/50 p-4">
      <p className="text-sm text-slate-400 mb-1">{title}</p>
      <div className="flex items-end justify-between">
        <span className="text-2xl font-bold text-white">{value}</span>
        <span className={`text-sm font-medium ${positive ? "text-emerald-400" : "text-red-400"}`}>{change}</span>
      </div>
    </div>
  )
}
