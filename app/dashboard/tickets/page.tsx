"use client"

import { useState } from "react"
import { Search, Filter, Plus, User, ArrowUpRight, Brain, Zap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const tickets = [
  {
    id: "TK-4521",
    subject: "Error en facturación mensual - cargo duplicado",
    customer: "Empresa ABC S.A.",
    channel: "email",
    priority: "alta",
    status: "en_proceso",
    assignee: "María García",
    created: "hace 5 min",
    aiTriaged: true,
    aiConfidence: 94,
    category: "Facturación",
  },
  {
    id: "TK-4520",
    subject: "Consulta sobre estado de envío #45892",
    customer: "Juan Pérez",
    channel: "whatsapp",
    priority: "media",
    status: "asignado",
    assignee: "Carlos Ruiz",
    created: "hace 12 min",
    aiTriaged: true,
    aiConfidence: 89,
    category: "Envíos",
  },
  {
    id: "TK-4519",
    subject: "Solicitud de cambio de plan empresarial",
    customer: "Tech Solutions",
    channel: "web",
    priority: "baja",
    status: "pendiente",
    assignee: null,
    created: "hace 25 min",
    aiTriaged: true,
    aiConfidence: 97,
    category: "Cuentas",
  },
  {
    id: "TK-4518",
    subject: "No puedo acceder a mi cuenta desde ayer",
    customer: "Ana López",
    channel: "whatsapp",
    priority: "alta",
    status: "resuelto",
    assignee: "Pedro Martínez",
    created: "hace 1 hora",
    aiTriaged: true,
    aiConfidence: 92,
    category: "Técnico",
  },
  {
    id: "TK-4517",
    subject: "Consulta general sobre precios",
    customer: "María Fernández",
    channel: "web",
    priority: "baja",
    status: "resuelto",
    assignee: "Bot IA",
    created: "hace 2 horas",
    aiTriaged: true,
    aiConfidence: 99,
    category: "Ventas",
  },
]

const triageStats = [
  { label: "Triados por IA", value: "89%", trend: "+5%" },
  { label: "Precisión Asignación", value: "94%", trend: "+2%" },
  { label: "Tiempo Promedio", value: "< 1s", trend: "-0.3s" },
  { label: "Escalados Manual", value: "11%", trend: "-3%" },
]

export default function TicketsPage() {
  const [selectedTab, setSelectedTab] = useState("todos")

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Triaje Inteligente de Tickets</h1>
          <p className="text-slate-400">Sistema automático de clasificación y asignación con IA</p>
        </div>
        <Button className="bg-cyan-500 hover:bg-cyan-400 text-slate-950">
          <Plus className="w-4 h-4 mr-2" />
          Nuevo Ticket
        </Button>
      </div>

      {/* AI Triage Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {triageStats.map((stat, i) => (
          <Card key={i} className="bg-slate-900 border-slate-800">
            <CardContent className="pt-4 pb-4">
              <div className="flex items-center gap-2 mb-2">
                <Brain className="w-4 h-4 text-cyan-500" />
                <span className="text-xs text-slate-500">{stat.label}</span>
              </div>
              <div className="flex items-end justify-between">
                <span className="text-2xl font-bold text-white">{stat.value}</span>
                <span className="text-sm text-emerald-400">{stat.trend}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Triage Flow Diagram */}
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader>
          <CardTitle className="text-white text-lg flex items-center gap-2">
            <Zap className="w-5 h-5 text-cyan-500" />
            Flujo de Triaje Automático
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between gap-4 overflow-x-auto pb-4">
            <TriageStep number={1} title="Recepción" description="Ticket entrante" active />
            <TriageArrow />
            <TriageStep number={2} title="Análisis NLP" description="GPT-4o procesa" active />
            <TriageArrow />
            <TriageStep number={3} title="Clasificación" description="Categoría + Prioridad" active />
            <TriageArrow />
            <TriageStep number={4} title="Asignación" description="Técnico óptimo" active />
            <TriageArrow />
            <TriageStep number={5} title="Notificación" description="Alertas enviadas" active />
          </div>
        </CardContent>
      </Card>

      {/* Filters and Search */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <Input
            placeholder="Buscar por ID, asunto o cliente..."
            className="pl-10 bg-slate-900 border-slate-700 text-white placeholder:text-slate-500"
          />
        </div>
        <div className="flex gap-3">
          <Select defaultValue="all">
            <SelectTrigger className="w-40 bg-slate-900 border-slate-700 text-white">
              <SelectValue placeholder="Prioridad" />
            </SelectTrigger>
            <SelectContent className="bg-slate-900 border-slate-700">
              <SelectItem value="all" className="text-slate-300">
                Todas
              </SelectItem>
              <SelectItem value="alta" className="text-slate-300">
                Alta
              </SelectItem>
              <SelectItem value="media" className="text-slate-300">
                Media
              </SelectItem>
              <SelectItem value="baja" className="text-slate-300">
                Baja
              </SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-40 bg-slate-900 border-slate-700 text-white">
              <SelectValue placeholder="Canal" />
            </SelectTrigger>
            <SelectContent className="bg-slate-900 border-slate-700">
              <SelectItem value="all" className="text-slate-300">
                Todos
              </SelectItem>
              <SelectItem value="whatsapp" className="text-slate-300">
                WhatsApp
              </SelectItem>
              <SelectItem value="email" className="text-slate-300">
                Email
              </SelectItem>
              <SelectItem value="web" className="text-slate-300">
                Web Chat
              </SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 bg-transparent">
            <Filter className="w-4 h-4 mr-2" />
            Más Filtros
          </Button>
        </div>
      </div>

      {/* Tickets Table */}
      <Tabs value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList className="bg-slate-900 border border-slate-800">
          <TabsTrigger value="todos" className="data-[state=active]:bg-cyan-500/10 data-[state=active]:text-cyan-400">
            Todos (147)
          </TabsTrigger>
          <TabsTrigger
            value="pendientes"
            className="data-[state=active]:bg-cyan-500/10 data-[state=active]:text-cyan-400"
          >
            Pendientes (23)
          </TabsTrigger>
          <TabsTrigger
            value="en_proceso"
            className="data-[state=active]:bg-cyan-500/10 data-[state=active]:text-cyan-400"
          >
            En Proceso (45)
          </TabsTrigger>
          <TabsTrigger
            value="resueltos"
            className="data-[state=active]:bg-cyan-500/10 data-[state=active]:text-cyan-400"
          >
            Resueltos (79)
          </TabsTrigger>
        </TabsList>

        <TabsContent value={selectedTab} className="mt-4">
          <Card className="bg-slate-900 border-slate-800">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-800">
                      <th className="text-left text-sm font-medium text-slate-400 p-4">Ticket</th>
                      <th className="text-left text-sm font-medium text-slate-400 p-4">Cliente</th>
                      <th className="text-left text-sm font-medium text-slate-400 p-4">Canal</th>
                      <th className="text-left text-sm font-medium text-slate-400 p-4">Prioridad</th>
                      <th className="text-left text-sm font-medium text-slate-400 p-4">Estado</th>
                      <th className="text-left text-sm font-medium text-slate-400 p-4">Asignado</th>
                      <th className="text-left text-sm font-medium text-slate-400 p-4">IA</th>
                      <th className="text-right text-sm font-medium text-slate-400 p-4">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tickets.map((ticket) => (
                      <tr key={ticket.id} className="border-b border-slate-800/50 hover:bg-slate-800/30">
                        <td className="p-4">
                          <div>
                            <span className="text-sm font-mono text-cyan-400">{ticket.id}</span>
                            <p className="text-sm text-white mt-1 max-w-xs truncate">{ticket.subject}</p>
                            <span className="text-xs text-slate-500">{ticket.created}</span>
                          </div>
                        </td>
                        <td className="p-4 text-sm text-slate-300">{ticket.customer}</td>
                        <td className="p-4">
                          <ChannelBadge channel={ticket.channel} />
                        </td>
                        <td className="p-4">
                          <PriorityBadge priority={ticket.priority} />
                        </td>
                        <td className="p-4">
                          <StatusBadge status={ticket.status} />
                        </td>
                        <td className="p-4">
                          {ticket.assignee ? (
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center">
                                <User className="w-3 h-3 text-slate-400" />
                              </div>
                              <span className="text-sm text-slate-300">{ticket.assignee}</span>
                            </div>
                          ) : (
                            <span className="text-sm text-slate-500">Sin asignar</span>
                          )}
                        </td>
                        <td className="p-4">
                          {ticket.aiTriaged && (
                            <div className="flex items-center gap-1">
                              <Brain className="w-4 h-4 text-cyan-500" />
                              <span className="text-xs text-cyan-400">{ticket.aiConfidence}%</span>
                            </div>
                          )}
                        </td>
                        <td className="p-4 text-right">
                          <Button size="sm" variant="ghost" className="text-cyan-400 hover:text-cyan-300">
                            Ver
                            <ArrowUpRight className="ml-1 w-3 h-3" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function TriageStep({
  number,
  title,
  description,
  active,
}: { number: number; title: string; description: string; active: boolean }) {
  return (
    <div className={`flex flex-col items-center text-center min-w-28 ${active ? "opacity-100" : "opacity-50"}`}>
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${active ? "bg-cyan-500 text-white" : "bg-slate-800 text-slate-500"}`}
      >
        {number}
      </div>
      <span className="text-sm font-medium text-white">{title}</span>
      <span className="text-xs text-slate-500">{description}</span>
    </div>
  )
}

function TriageArrow() {
  return <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-500 to-cyan-500/30 flex-shrink-0" />
}

function ChannelBadge({ channel }: { channel: string }) {
  const config: Record<string, { label: string; style: string }> = {
    whatsapp: { label: "WhatsApp", style: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30" },
    email: { label: "Email", style: "bg-blue-500/10 text-blue-400 border-blue-500/30" },
    web: { label: "Web", style: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30" },
  }
  const { label, style } = config[channel] || config.web
  return (
    <Badge variant="outline" className={style}>
      {label}
    </Badge>
  )
}

function PriorityBadge({ priority }: { priority: string }) {
  const styles: Record<string, string> = {
    alta: "bg-red-500/10 text-red-400 border-red-500/30",
    media: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    baja: "bg-slate-500/10 text-slate-400 border-slate-500/30",
  }
  return (
    <Badge variant="outline" className={styles[priority]}>
      {priority}
    </Badge>
  )
}

function StatusBadge({ status }: { status: string }) {
  const config: Record<string, { label: string; style: string }> = {
    pendiente: { label: "Pendiente", style: "bg-slate-500/10 text-slate-400 border-slate-500/30" },
    asignado: { label: "Asignado", style: "bg-blue-500/10 text-blue-400 border-blue-500/30" },
    en_proceso: { label: "En Proceso", style: "bg-amber-500/10 text-amber-400 border-amber-500/30" },
    resuelto: { label: "Resuelto", style: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30" },
  }
  const { label, style } = config[status] || config.pendiente
  return (
    <Badge variant="outline" className={style}>
      {label}
    </Badge>
  )
}
