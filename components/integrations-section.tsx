import type React from "react"
import { Database, Link2, RefreshCw, ArrowRight } from "lucide-react"

export function IntegrationsSection() {
  return (
    <section id="integraciones" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-medium text-cyan-400 tracking-wider uppercase">Integraciones</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Conecta todo tu ecosistema</h2>
            <p className="mt-4 text-lg text-slate-400 leading-relaxed">
              API REST robusta para integración nativa con tus sistemas existentes. Sincronización bidireccional con
              CRMs, bases de datos y herramientas de gestión.
            </p>

            <div className="mt-8 space-y-4">
              <IntegrationFeature
                icon={<Link2 className="w-5 h-5" />}
                title="API REST Completa"
                description="Endpoints documentados con OpenAPI 3.0 para todas las operaciones"
              />
              <IntegrationFeature
                icon={<RefreshCw className="w-5 h-5" />}
                title="Sincronización en Tiempo Real"
                description="Webhooks y eventos para mantener tus sistemas actualizados"
              />
              <IntegrationFeature
                icon={<Database className="w-5 h-5" />}
                title="Trazabilidad Total"
                description="Logs detallados de cada interacción para auditoría completa"
              />
            </div>

            <div className="mt-10">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
              >
                Ver documentación de la API
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Integration diagram */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-3xl blur-2xl" />
            <div className="relative rounded-2xl border border-slate-800 bg-slate-900/80 backdrop-blur-sm p-8">
              <div className="grid grid-cols-3 gap-4">
                {/* Top integrations */}
                <IntegrationNode name="Salesforce" type="CRM" />
                <IntegrationNode name="HubSpot" type="CRM" />
                <IntegrationNode name="Zendesk" type="Help Desk" />

                {/* Middle - NexusAI */}
                <div className="col-span-3 py-6 flex justify-center">
                  <div className="relative">
                    <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">Nexus</div>
                        <div className="text-xs text-cyan-100">Platform API</div>
                      </div>
                    </div>
                    {/* Connection lines */}
                    <div className="absolute -top-6 left-1/2 w-px h-6 bg-gradient-to-b from-slate-600 to-cyan-500" />
                    <div className="absolute -bottom-6 left-1/2 w-px h-6 bg-gradient-to-t from-slate-600 to-cyan-500" />
                    <div className="absolute top-1/2 -left-8 w-8 h-px bg-gradient-to-r from-slate-600 to-cyan-500" />
                    <div className="absolute top-1/2 -right-8 w-8 h-px bg-gradient-to-l from-slate-600 to-cyan-500" />
                  </div>
                </div>

                {/* Bottom integrations */}
                <IntegrationNode name="PostgreSQL" type="Database" />
                <IntegrationNode name="MongoDB" type="Database" />
                <IntegrationNode name="SAP" type="ERP" />
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Estado de conexiones</span>
                  <span className="flex items-center gap-2 text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Todas activas
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function IntegrationFeature({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-medium text-white">{title}</h3>
        <p className="text-sm text-slate-400 mt-1">{description}</p>
      </div>
    </div>
  )
}

function IntegrationNode({ name, type }: { name: string; type: string }) {
  return (
    <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 text-center hover:border-cyan-500/30 transition-colors">
      <div className="text-sm font-medium text-white">{name}</div>
      <div className="text-xs text-slate-500 mt-1">{type}</div>
    </div>
  )
}
