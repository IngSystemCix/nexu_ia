"use client"

import { useState } from "react"
import { Database, Cloud, Link2, Check, X, RefreshCw, Settings, ArrowRight, Shield, Zap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"

const integrations = [
  {
    id: "salesforce",
    name: "Salesforce",
    category: "CRM",
    description: "Sincronización bidireccional de contactos y oportunidades",
    status: "connected",
    lastSync: "hace 5 min",
    recordsSync: "12,456",
  },
  {
    id: "hubspot",
    name: "HubSpot",
    category: "CRM",
    description: "Gestión de leads y pipeline de ventas",
    status: "connected",
    lastSync: "hace 12 min",
    recordsSync: "8,234",
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "Base de Datos",
    description: "Base de datos principal para tickets y clientes",
    status: "connected",
    lastSync: "tiempo real",
    recordsSync: "45,678",
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: "Base de Datos",
    description: "Almacenamiento de logs y analytics",
    status: "connected",
    lastSync: "tiempo real",
    recordsSync: "234,567",
  },
  {
    id: "zendesk",
    name: "Zendesk",
    category: "Soporte",
    description: "Migración de tickets históricos",
    status: "pending",
    lastSync: "-",
    recordsSync: "-",
  },
  {
    id: "slack",
    name: "Slack",
    category: "Comunicación",
    description: "Notificaciones y alertas del equipo",
    status: "connected",
    lastSync: "hace 1 min",
    recordsSync: "1,234",
  },
]

const apiEndpoints = [
  { method: "GET", endpoint: "/api/v1/tickets", description: "Listar tickets", calls: "12.4K/día" },
  { method: "POST", endpoint: "/api/v1/tickets", description: "Crear ticket", calls: "3.2K/día" },
  { method: "GET", endpoint: "/api/v1/customers", description: "Listar clientes", calls: "8.9K/día" },
  { method: "PUT", endpoint: "/api/v1/tickets/:id", description: "Actualizar ticket", calls: "5.6K/día" },
  { method: "GET", endpoint: "/api/v1/analytics", description: "Métricas y reportes", calls: "2.1K/día" },
]

export default function IntegrationsPage() {
  const [webhooksEnabled, setWebhooksEnabled] = useState(true)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Integraciones</h1>
          <p className="text-slate-400">Conecta con tus herramientas para trazabilidad total</p>
        </div>
        <Button className="bg-cyan-500 hover:bg-cyan-400 text-slate-950">
          <Link2 className="w-4 h-4 mr-2" />
          Nueva Integración
        </Button>
      </div>

      {/* Integration Architecture */}
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader>
          <CardTitle className="text-white text-lg flex items-center gap-2">
            <Zap className="w-5 h-5 text-cyan-500" />
            Arquitectura de Integraciones
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center gap-4 py-8 overflow-x-auto">
            {/* External Systems */}
            <div className="flex flex-col gap-3 min-w-36">
              <IntegrationNode name="Salesforce" type="crm" />
              <IntegrationNode name="HubSpot" type="crm" />
              <IntegrationNode name="Zendesk" type="support" />
            </div>

            {/* Arrow */}
            <div className="flex flex-col items-center gap-1">
              <ArrowRight className="w-6 h-6 text-cyan-500" />
              <span className="text-xs text-slate-500">API REST</span>
            </div>

            {/* NexusAI Core */}
            <div className="px-8 py-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/30">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <p className="font-bold text-white">NexusAI</p>
                <p className="text-xs text-slate-400">API Gateway Seguro</p>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex flex-col items-center gap-1">
              <ArrowRight className="w-6 h-6 text-cyan-500" />
              <span className="text-xs text-slate-500">Webhooks</span>
            </div>

            {/* Databases */}
            <div className="flex flex-col gap-3 min-w-36">
              <IntegrationNode name="PostgreSQL" type="database" />
              <IntegrationNode name="MongoDB" type="database" />
              <IntegrationNode name="Redis" type="cache" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Connected Integrations */}
      <div>
        <h2 className="text-lg font-semibold text-white mb-4">Integraciones Conectadas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {integrations.map((integration) => (
            <Card
              key={integration.id}
              className="bg-slate-900 border-slate-800 hover:border-cyan-500/20 transition-colors"
            >
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center">
                      {integration.category === "Base de Datos" ? (
                        <Database className="w-5 h-5 text-cyan-500" />
                      ) : integration.category === "CRM" ? (
                        <Cloud className="w-5 h-5 text-cyan-500" />
                      ) : (
                        <Link2 className="w-5 h-5 text-cyan-500" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-white">{integration.name}</p>
                      <p className="text-xs text-slate-500">{integration.category}</p>
                    </div>
                  </div>
                  <StatusIndicator status={integration.status} />
                </div>
                <p className="text-sm text-slate-400 mb-4">{integration.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <div>
                    <span className="text-slate-500">Última sync:</span>
                    <span className="text-slate-300 ml-1">{integration.lastSync}</span>
                  </div>
                  <div>
                    <span className="text-slate-500">Registros:</span>
                    <span className="text-slate-300 ml-1">{integration.recordsSync}</span>
                  </div>
                </div>
                <div className="flex gap-2 mt-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex-1 text-slate-400 hover:text-white hover:bg-slate-800"
                  >
                    <RefreshCw className="w-4 h-4 mr-1" />
                    Sync
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex-1 text-slate-400 hover:text-white hover:bg-slate-800"
                  >
                    <Settings className="w-4 h-4 mr-1" />
                    Config
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* API Documentation */}
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-white text-lg">API REST Endpoints</CardTitle>
            <CardDescription className="text-slate-400">
              Documentación de la API para integraciones personalizadas
            </CardDescription>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-slate-400">Webhooks</span>
              <Switch checked={webhooksEnabled} onCheckedChange={setWebhooksEnabled} />
            </div>
            <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 bg-transparent">
              Ver Docs Completos
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {apiEndpoints.map((endpoint, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <MethodBadge method={endpoint.method} />
                  <code className="text-sm text-cyan-400 font-mono">{endpoint.endpoint}</code>
                  <span className="text-sm text-slate-400">{endpoint.description}</span>
                </div>
                <span className="text-sm text-slate-500">{endpoint.calls}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Security Info */}
      <Card className="bg-gradient-to-br from-cyan-500/5 to-blue-600/5 border-cyan-500/20">
        <CardContent className="pt-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center">
              <Shield className="w-6 h-6 text-cyan-500" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-white mb-1">Seguridad de Integraciones</h3>
              <p className="text-sm text-slate-400">
                Todas las conexiones utilizan TLS 1.3, autenticación OAuth 2.0 y tokens rotativos. Los datos sensibles
                nunca se exponen a servicios externos.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-cyan-400">256-bit</p>
                <p className="text-xs text-slate-500">Encriptación</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-cyan-400">SOC 2</p>
                <p className="text-xs text-slate-500">Certificado</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function IntegrationNode({ name, type }: { name: string; type: string }) {
  const colors: Record<string, string> = {
    crm: "border-blue-500/30 bg-blue-500/5",
    database: "border-emerald-500/30 bg-emerald-500/5",
    support: "border-amber-500/30 bg-amber-500/5",
    cache: "border-purple-500/30 bg-purple-500/5",
  }
  return (
    <div className={`px-4 py-2 rounded-lg border ${colors[type]} text-center`}>
      <p className="text-sm font-medium text-white">{name}</p>
    </div>
  )
}

function StatusIndicator({ status }: { status: string }) {
  if (status === "connected") {
    return (
      <Badge variant="outline" className="border-emerald-500/30 text-emerald-400">
        <Check className="w-3 h-3 mr-1" />
        Conectado
      </Badge>
    )
  }
  if (status === "pending") {
    return (
      <Badge variant="outline" className="border-amber-500/30 text-amber-400">
        <RefreshCw className="w-3 h-3 mr-1" />
        Pendiente
      </Badge>
    )
  }
  return (
    <Badge variant="outline" className="border-red-500/30 text-red-400">
      <X className="w-3 h-3 mr-1" />
      Error
    </Badge>
  )
}

function MethodBadge({ method }: { method: string }) {
  const colors: Record<string, string> = {
    GET: "bg-emerald-500/10 text-emerald-400",
    POST: "bg-blue-500/10 text-blue-400",
    PUT: "bg-amber-500/10 text-amber-400",
    DELETE: "bg-red-500/10 text-red-400",
  }
  return <span className={`px-2 py-1 rounded text-xs font-mono font-medium ${colors[method]}`}>{method}</span>
}
