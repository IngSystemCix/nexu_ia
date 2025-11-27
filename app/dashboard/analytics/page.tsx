"use client"

import type React from "react"

import { TrendingUp, Brain, Target, Clock, Users, Download, Filter } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from "recharts"

const demandForecast = [
  { date: "Sem 1", actual: 420, predicted: 410, lower: 380, upper: 440 },
  { date: "Sem 2", actual: 480, predicted: 475, lower: 445, upper: 505 },
  { date: "Sem 3", actual: 510, predicted: 520, lower: 490, upper: 550 },
  { date: "Sem 4", actual: 465, predicted: 470, lower: 440, upper: 500 },
  { date: "Sem 5", actual: null, predicted: 495, lower: 465, upper: 525 },
  { date: "Sem 6", actual: null, predicted: 530, lower: 500, upper: 560 },
  { date: "Sem 7", actual: null, predicted: 510, lower: 480, upper: 540 },
]

const resolutionAnalysis = [
  { category: "Facturación", avg: 2.1, sla: 4 },
  { category: "Técnico", avg: 3.8, sla: 6 },
  { category: "Envíos", avg: 1.5, sla: 2 },
  { category: "Cuentas", avg: 2.8, sla: 4 },
  { category: "General", avg: 0.8, sla: 2 },
]

const agentPerformance = [
  { name: "María G.", resolved: 145, satisfaction: 98, avgTime: 1.8 },
  { name: "Carlos R.", resolved: 132, satisfaction: 95, avgTime: 2.1 },
  { name: "Ana L.", resolved: 128, satisfaction: 97, avgTime: 1.9 },
  { name: "Pedro M.", resolved: 118, satisfaction: 92, avgTime: 2.4 },
  { name: "Laura S.", resolved: 112, satisfaction: 96, avgTime: 2.0 },
]

const sentimentTrend = [
  { week: "S1", positive: 72, neutral: 20, negative: 8 },
  { week: "S2", positive: 75, neutral: 18, negative: 7 },
  { week: "S3", positive: 78, neutral: 16, negative: 6 },
  { week: "S4", positive: 74, neutral: 19, negative: 7 },
  { week: "S5", positive: 80, neutral: 15, negative: 5 },
]

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Analítica Predictiva</h1>
          <p className="text-slate-400">Modelos de Scikit-learn en tiempo real</p>
        </div>
        <div className="flex items-center gap-3">
          <Select defaultValue="30d">
            <SelectTrigger className="w-36 bg-slate-800 border-slate-700 text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-slate-900 border-slate-700">
              <SelectItem value="7d" className="text-slate-300">
                Últimos 7 días
              </SelectItem>
              <SelectItem value="30d" className="text-slate-300">
                Últimos 30 días
              </SelectItem>
              <SelectItem value="90d" className="text-slate-300">
                Últimos 90 días
              </SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 bg-transparent">
            <Download className="w-4 h-4 mr-2" />
            Exportar
          </Button>
        </div>
      </div>

      {/* Model Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <ModelStatCard
          title="Precisión del Modelo"
          value="94.2%"
          change="+2.1%"
          icon={Target}
          description="Predicción de demanda"
        />
        <ModelStatCard title="MAPE" value="5.8%" change="-0.4%" icon={Brain} description="Error absoluto medio" />
        <ModelStatCard
          title="Tiempo de Inferencia"
          value="45ms"
          change="-12ms"
          icon={Clock}
          description="Promedio por predicción"
        />
        <ModelStatCard
          title="Datos Procesados"
          value="2.4M"
          change="+180K"
          icon={Users}
          description="Registros este mes"
        />
      </div>

      {/* Demand Forecast */}
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-white text-lg">Predicción de Demanda</CardTitle>
            <p className="text-sm text-slate-400">Modelo Random Forest con intervalo de confianza 95%</p>
          </div>
          <Badge className="bg-cyan-500/10 text-cyan-400 border-cyan-500/30">Modelo v3.2 Activo</Badge>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={demandForecast}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="date" stroke="#64748b" fontSize={12} />
                <YAxis stroke="#64748b" fontSize={12} />
                <Area type="monotone" dataKey="upper" stroke="transparent" fill="#06b6d4" fillOpacity={0.1} />
                <Area type="monotone" dataKey="lower" stroke="transparent" fill="#0f172a" fillOpacity={1} />
                <Line
                  type="monotone"
                  dataKey="predicted"
                  stroke="#06b6d4"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="actual"
                  stroke="#22c55e"
                  strokeWidth={2}
                  dot={{ fill: "#22c55e", r: 4 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="flex items-center justify-center gap-8 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
              <span className="text-sm text-slate-400">Datos reales</span>
            </div>
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-0.5 bg-cyan-500"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(90deg, #06b6d4 0, #06b6d4 5px, transparent 5px, transparent 10px)",
                }}
              />
              <span className="text-sm text-slate-400">Predicción</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-cyan-500/20" />
              <span className="text-sm text-slate-400">Intervalo confianza</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Resolution & Sentiment */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Resolution by Category */}
        <Card className="bg-slate-900 border-slate-800">
          <CardHeader>
            <CardTitle className="text-white text-lg">Tiempo de Resolución por Categoría</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={resolutionAnalysis} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" horizontal={false} />
                  <XAxis type="number" stroke="#64748b" fontSize={12} unit="h" />
                  <YAxis type="category" dataKey="category" stroke="#64748b" fontSize={12} width={80} />
                  <Bar dataKey="avg" fill="#06b6d4" radius={[0, 4, 4, 0]} />
                  <Bar dataKey="sla" fill="#334155" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="flex items-center justify-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-cyan-500" />
                <span className="text-sm text-slate-400">Tiempo real</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-slate-700" />
                <span className="text-sm text-slate-400">SLA objetivo</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sentiment Analysis */}
        <Card className="bg-slate-900 border-slate-800">
          <CardHeader>
            <CardTitle className="text-white text-lg">Análisis de Sentimiento</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={sentimentTrend}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="week" stroke="#64748b" fontSize={12} />
                  <YAxis stroke="#64748b" fontSize={12} unit="%" />
                  <Area
                    type="monotone"
                    dataKey="positive"
                    stackId="1"
                    stroke="#22c55e"
                    fill="#22c55e"
                    fillOpacity={0.6}
                  />
                  <Area
                    type="monotone"
                    dataKey="neutral"
                    stackId="1"
                    stroke="#64748b"
                    fill="#64748b"
                    fillOpacity={0.6}
                  />
                  <Area
                    type="monotone"
                    dataKey="negative"
                    stackId="1"
                    stroke="#ef4444"
                    fill="#ef4444"
                    fillOpacity={0.6}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="flex items-center justify-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-emerald-500" />
                <span className="text-sm text-slate-400">Positivo</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-slate-500" />
                <span className="text-sm text-slate-400">Neutral</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-red-500" />
                <span className="text-sm text-slate-400">Negativo</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Agent Performance */}
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-white text-lg">Rendimiento de Agentes</CardTitle>
          <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
            <Filter className="w-4 h-4 mr-2" />
            Filtrar
          </Button>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-800">
                  <th className="text-left text-sm font-medium text-slate-400 pb-3">Agente</th>
                  <th className="text-right text-sm font-medium text-slate-400 pb-3">Tickets Resueltos</th>
                  <th className="text-right text-sm font-medium text-slate-400 pb-3">Satisfacción</th>
                  <th className="text-right text-sm font-medium text-slate-400 pb-3">Tiempo Promedio</th>
                  <th className="text-right text-sm font-medium text-slate-400 pb-3">Tendencia</th>
                </tr>
              </thead>
              <tbody>
                {agentPerformance.map((agent, i) => (
                  <tr key={i} className="border-b border-slate-800/50 hover:bg-slate-800/30">
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                          <span className="text-xs font-bold text-white">
                            {agent.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        </div>
                        <span className="text-white font-medium">{agent.name}</span>
                      </div>
                    </td>
                    <td className="text-right text-white">{agent.resolved}</td>
                    <td className="text-right">
                      <Badge
                        className={
                          agent.satisfaction >= 95
                            ? "bg-emerald-500/10 text-emerald-400"
                            : "bg-amber-500/10 text-amber-400"
                        }
                      >
                        {agent.satisfaction}%
                      </Badge>
                    </td>
                    <td className="text-right text-slate-300">{agent.avgTime}h</td>
                    <td className="text-right">
                      <TrendingUp className="w-4 h-4 text-emerald-400 ml-auto" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function ModelStatCard({
  title,
  value,
  change,
  icon: Icon,
  description,
}: {
  title: string
  value: string
  change: string
  icon: React.ElementType
  description: string
}) {
  const isPositive = change.startsWith("+") || change.startsWith("-")
  const isGood = change.includes("+") || (change.includes("-") && title.includes("Error"))

  return (
    <Card className="bg-slate-900 border-slate-800">
      <CardContent className="pt-6">
        <div className="flex items-center justify-between mb-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center">
            <Icon className="w-5 h-5 text-cyan-500" />
          </div>
          <span className={`text-sm font-medium ${isGood ? "text-emerald-400" : "text-red-400"}`}>{change}</span>
        </div>
        <div className="text-2xl font-bold text-white mb-1">{value}</div>
        <div className="text-sm text-slate-400">{title}</div>
        <div className="text-xs text-slate-500 mt-1">{description}</div>
      </CardContent>
    </Card>
  )
}
