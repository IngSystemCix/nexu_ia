"use client"

import type React from "react"

import {
  TrendingUp,
  TrendingDown,
  Ticket,
  Clock,
  CheckCircle,
  MessageSquare,
  AlertTriangle,
  ArrowRight,
  Bot,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts"

const ticketTrend = [
  { day: "Lun", tickets: 45, resolved: 42 },
  { day: "Mar", tickets: 52, resolved: 48 },
  { day: "Mie", tickets: 38, resolved: 40 },
  { day: "Jue", tickets: 65, resolved: 58 },
  { day: "Vie", tickets: 48, resolved: 50 },
  { day: "Sab", tickets: 25, resolved: 28 },
  { day: "Dom", tickets: 18, resolved: 20 },
]

const channelData = [
  { name: "WhatsApp", value: 45, color: "#22c55e" },
  { name: "Email", value: 30, color: "#3b82f6" },
  { name: "Web Chat", value: 25, color: "#06b6d4" },
]

const predictionData = [
  { hour: "08:00", actual: 12, predicted: 14 },
  { hour: "10:00", actual: 25, predicted: 22 },
  { hour: "12:00", actual: 38, predicted: 35 },
  { hour: "14:00", actual: 42, predicted: 45 },
  { hour: "16:00", actual: 35, predicted: 38 },
  { hour: "18:00", actual: null, predicted: 28 },
  { hour: "20:00", actual: null, predicted: 15 },
]

const recentTickets = [
  { id: "TK-4521", subject: "Error en facturación", priority: "alta", status: "en_proceso", time: "hace 5 min" },
  { id: "TK-4520", subject: "Consulta sobre envío", priority: "media", status: "asignado", time: "hace 12 min" },
  { id: "TK-4519", subject: "Cambio de plan", priority: "baja", status: "pendiente", time: "hace 25 min" },
  { id: "TK-4518", subject: "Problema de acceso", priority: "alta", status: "resuelto", time: "hace 1 hora" },
]

const aiRecommendations = [
  { text: "Asignar 2 técnicos adicionales para tickets de facturación", impact: "+15% velocidad" },
  { text: "Activar respuesta automática para consultas de envío", impact: "-20% carga" },
  { text: "Revisar SLA de tickets críticos próximos a vencer", impact: "3 tickets" },
]

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Dashboard</h1>
          <p className="text-slate-400">Resumen de tu inteligencia operativa en tiempo real</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-sm text-slate-400">Última actualización: hace 30 seg</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard
          title="Tickets Activos"
          value="147"
          change="+12%"
          trend="up"
          icon={Ticket}
          description="vs. semana anterior"
        />
        <StatsCard
          title="Tiempo Promedio"
          value="2.4h"
          change="-34%"
          trend="down"
          icon={Clock}
          description="resolución de tickets"
        />
        <StatsCard
          title="Tasa de Resolución"
          value="94.7%"
          change="+8%"
          trend="up"
          icon={CheckCircle}
          description="tickets resueltos"
        />
        <StatsCard
          title="Interacciones Bot"
          value="1,248"
          change="+22%"
          trend="up"
          icon={MessageSquare}
          description="últimas 24 horas"
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Ticket Trend */}
        <Card className="lg:col-span-2 bg-slate-900 border-slate-800">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-white text-lg">Tendencia de Tickets</CardTitle>
            <Badge variant="outline" className="border-cyan-500/30 text-cyan-400">
              Última semana
            </Badge>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={ticketTrend}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="day" stroke="#64748b" fontSize={12} />
                  <YAxis stroke="#64748b" fontSize={12} />
                  <Line type="monotone" dataKey="tickets" stroke="#06b6d4" strokeWidth={2} dot={{ fill: "#06b6d4" }} />
                  <Line type="monotone" dataKey="resolved" stroke="#22c55e" strokeWidth={2} dot={{ fill: "#22c55e" }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="flex items-center justify-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-cyan-500" />
                <span className="text-sm text-slate-400">Recibidos</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="text-sm text-slate-400">Resueltos</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Channel Distribution */}
        <Card className="bg-slate-900 border-slate-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-white text-lg">Canales</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={channelData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={70}
                    dataKey="value"
                    strokeWidth={0}
                  >
                    {channelData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-2 mt-2">
              {channelData.map((channel) => (
                <div key={channel.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: channel.color }} />
                    <span className="text-sm text-slate-400">{channel.name}</span>
                  </div>
                  <span className="text-sm font-medium text-white">{channel.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Predictions and Recommendations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Demand Prediction */}
        <Card className="bg-slate-900 border-slate-800">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-white text-lg flex items-center gap-2">
              <Bot className="w-5 h-5 text-cyan-500" />
              Predicción de Demanda
            </CardTitle>
            <Badge className="bg-cyan-500/10 text-cyan-400 border-cyan-500/30">IA Activa</Badge>
          </CardHeader>
          <CardContent>
            <div className="h-52">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={predictionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="hour" stroke="#64748b" fontSize={12} />
                  <YAxis stroke="#64748b" fontSize={12} />
                  <Bar dataKey="actual" fill="#06b6d4" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="predicted" fill="#06b6d4" opacity={0.3} radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="flex items-center justify-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-cyan-500" />
                <span className="text-sm text-slate-400">Real</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-cyan-500/30" />
                <span className="text-sm text-slate-400">Predicción</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* AI Recommendations */}
        <Card className="bg-slate-900 border-slate-800">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-white text-lg flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
              Recomendaciones IA
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {aiRecommendations.map((rec, i) => (
              <div key={i} className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
                <p className="text-sm text-slate-300 mb-2">{rec.text}</p>
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="border-emerald-500/30 text-emerald-400">
                    Impacto: {rec.impact}
                  </Badge>
                  <Button size="sm" variant="ghost" className="text-cyan-400 hover:text-cyan-300 h-8">
                    Aplicar
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Recent Tickets */}
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-white text-lg">Tickets Recientes</CardTitle>
          <Button variant="ghost" className="text-cyan-400 hover:text-cyan-300" asChild>
            <a href="/dashboard/tickets">
              Ver todos
              <ArrowRight className="ml-1 w-4 h-4" />
            </a>
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentTickets.map((ticket) => (
              <div
                key={ticket.id}
                className="flex items-center justify-between p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/20 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="text-sm font-mono text-cyan-400">{ticket.id}</span>
                  <span className="text-sm text-white">{ticket.subject}</span>
                </div>
                <div className="flex items-center gap-4">
                  <PriorityBadge priority={ticket.priority} />
                  <StatusBadge status={ticket.status} />
                  <span className="text-xs text-slate-500">{ticket.time}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function StatsCard({
  title,
  value,
  change,
  trend,
  icon: Icon,
  description,
}: {
  title: string
  value: string
  change: string
  trend: "up" | "down"
  icon: React.ElementType
  description: string
}) {
  const isPositive = trend === "up"
  return (
    <Card className="bg-slate-900 border-slate-800">
      <CardContent className="pt-6">
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center">
            <Icon className="w-5 h-5 text-cyan-500" />
          </div>
          <div
            className={`flex items-center gap-1 text-sm font-medium ${isPositive ? "text-emerald-400" : "text-red-400"}`}
          >
            {isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
            {change}
          </div>
        </div>
        <div className="text-2xl font-bold text-white mb-1">{value}</div>
        <div className="text-sm text-slate-400">{title}</div>
        <div className="text-xs text-slate-500 mt-1">{description}</div>
      </CardContent>
    </Card>
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
