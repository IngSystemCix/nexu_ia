import { Shield, Lock, Server, Cloud } from "lucide-react"

export function ArchitectureSection() {
  return (
    <section id="arquitectura" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-cyan-400 tracking-wider uppercase">Arquitectura</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            IA Híbrida de Última Generación
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Combinamos lo mejor de dos mundos: procesamiento de lenguaje natural avanzado con modelos analíticos propios
            para máxima seguridad y precisión.
          </p>
        </div>

        {/* Architecture diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left - GPT-4o */}
          <div className="relative">
            <div className="rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                  <Cloud className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">GPT-4o</h3>
                  <p className="text-sm text-slate-400">API Segura</p>
                </div>
              </div>
              <ul className="space-y-3">
                <ArchFeature text="Comprensión de lenguaje natural" />
                <ArchFeature text="Generación de respuestas contextuales" />
                <ArchFeature text="Clasificación inteligente de intenciones" />
                <ArchFeature text="Extracción de entidades clave" />
              </ul>
              <div className="mt-4 pt-4 border-t border-cyan-500/20">
                <div className="flex items-center gap-2 text-sm text-cyan-400">
                  <Lock className="w-4 h-4" />
                  <span>Zero Data Retention Policy</span>
                </div>
              </div>
            </div>
          </div>

          {/* Center - Data flow */}
          <div className="relative flex flex-col items-center">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-cyan-500/50 via-slate-600 to-cyan-500/50 -translate-y-1/2" />

            <div className="relative z-10 w-24 h-24 rounded-full bg-slate-900 border-2 border-cyan-500/50 flex items-center justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center animate-pulse">
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>

            <div className="text-center">
              <h3 className="font-bold text-white text-lg mb-2">Capa de Seguridad</h3>
              <p className="text-sm text-slate-400 max-w-xs">
                Sanitización de datos sensibles antes de cualquier procesamiento externo
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-cyan-400">0%</div>
                <div className="text-xs text-slate-500">Datos Expuestos</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-cyan-400">256</div>
                <div className="text-xs text-slate-500">Bits Encriptación</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-cyan-400">100%</div>
                <div className="text-xs text-slate-500">Trazabilidad</div>
              </div>
            </div>
          </div>

          {/* Right - Scikit-learn */}
          <div className="relative">
            <div className="rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                  <Server className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Scikit-learn</h3>
                  <p className="text-sm text-slate-400">Modelos Propios</p>
                </div>
              </div>
              <ul className="space-y-3">
                <ArchFeature text="Predicción de demanda operativa" />
                <ArchFeature text="Detección de anomalías en tiempo real" />
                <ArchFeature text="Clasificación de prioridades" />
                <ArchFeature text="Análisis de patrones históricos" />
              </ul>
              <div className="mt-4 pt-4 border-t border-blue-500/20">
                <div className="flex items-center gap-2 text-sm text-blue-400">
                  <Server className="w-4 h-4" />
                  <span>Procesamiento 100% On-Premise</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ArchFeature({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-2 text-sm text-slate-300">
      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
      {text}
    </li>
  )
}
