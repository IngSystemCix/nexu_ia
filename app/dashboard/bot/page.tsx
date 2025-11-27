"use client"

import type React from "react"

import { useState } from "react"
import {
  MessageSquare,
  Globe,
  Mail,
  Phone,
  Send,
  Bot,
  User,
  Settings,
  TrendingUp,
  Clock,
  CheckCircle,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"

const channels = [
  { id: "whatsapp", name: "WhatsApp", icon: Phone, status: "active", conversations: 234, responseRate: 98 },
  { id: "web", name: "Web Chat", icon: Globe, status: "active", conversations: 156, responseRate: 99 },
  { id: "email", name: "Email", icon: Mail, status: "active", conversations: 89, responseRate: 95 },
]

const recentConversations = [
  {
    id: 1,
    customer: "Carlos Mendoza",
    channel: "whatsapp",
    lastMessage: "¿Cuál es el estado de mi pedido #45892?",
    time: "hace 2 min",
    status: "active",
    handled: "bot",
  },
  {
    id: 2,
    customer: "Ana Martínez",
    channel: "web",
    lastMessage: "Necesito cambiar mi contraseña",
    time: "hace 5 min",
    status: "active",
    handled: "bot",
  },
  {
    id: 3,
    customer: "Tech Solutions",
    channel: "email",
    lastMessage: "Solicitud de cotización empresarial",
    time: "hace 15 min",
    status: "escalated",
    handled: "agent",
  },
  {
    id: 4,
    customer: "María López",
    channel: "whatsapp",
    lastMessage: "Gracias por la ayuda!",
    time: "hace 20 min",
    status: "resolved",
    handled: "bot",
  },
]

const faqStats = [
  { question: "Estado de pedido", count: 456, autoResolved: 98 },
  { question: "Horarios de atención", count: 234, autoResolved: 100 },
  { question: "Métodos de pago", count: 189, autoResolved: 95 },
  { question: "Política de devoluciones", count: 156, autoResolved: 92 },
  { question: "Cambio de contraseña", count: 134, autoResolved: 88 },
]

const chatPreview = [
  { role: "user", message: "Hola, ¿cuál es el estado de mi pedido?" },
  { role: "bot", message: "¡Hola! Claro, con gusto te ayudo. ¿Podrías proporcionarme tu número de pedido?" },
  { role: "user", message: "Es el #45892" },
  {
    role: "bot",
    message:
      "Tu pedido #45892 está en camino y llegará mañana entre 9:00 AM y 2:00 PM. ¿Hay algo más en lo que pueda ayudarte?",
  },
]

export default function BotPage() {
  const [botEnabled, setBotEnabled] = useState(true)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Bot Omnicanal</h1>
          <p className="text-slate-400">Atención automatizada 24/7 con GPT-4o</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-slate-400">Bot Activo</span>
            <Switch checked={botEnabled} onCheckedChange={setBotEnabled} />
          </div>
          <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 bg-transparent">
            <Settings className="w-4 h-4 mr-2" />
            Configurar
          </Button>
        </div>
      </div>

      {/* Channel Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {channels.map((channel) => (
          <Card key={channel.id} className="bg-slate-900 border-slate-800">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                    <channel.icon className="w-5 h-5 text-cyan-500" />
                  </div>
                  <div>
                    <p className="font-medium text-white">{channel.name}</p>
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span className="text-xs text-slate-500">Activo</span>
                    </div>
                  </div>
                </div>
                <Badge variant="outline" className="border-emerald-500/30 text-emerald-400">
                  {channel.responseRate}% respuesta
                </Badge>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400">Conversaciones hoy</span>
                <span className="font-semibold text-white">{channel.conversations}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Conversations List */}
        <div className="lg:col-span-2 space-y-4">
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-white text-lg">Conversaciones Recientes</CardTitle>
              <Tabs defaultValue="all" className="w-auto">
                <TabsList className="bg-slate-800 h-8">
                  <TabsTrigger
                    value="all"
                    className="text-xs data-[state=active]:bg-cyan-500/10 data-[state=active]:text-cyan-400"
                  >
                    Todas
                  </TabsTrigger>
                  <TabsTrigger
                    value="bot"
                    className="text-xs data-[state=active]:bg-cyan-500/10 data-[state=active]:text-cyan-400"
                  >
                    Bot
                  </TabsTrigger>
                  <TabsTrigger
                    value="escalated"
                    className="text-xs data-[state=active]:bg-cyan-500/10 data-[state=active]:text-cyan-400"
                  >
                    Escaladas
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </CardHeader>
            <CardContent className="space-y-3">
              {recentConversations.map((conv) => (
                <div
                  key={conv.id}
                  className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/20 transition-colors cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center">
                        <User className="w-4 h-4 text-slate-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">{conv.customer}</p>
                        <div className="flex items-center gap-2">
                          <ChannelBadge channel={conv.channel} />
                          <span className="text-xs text-slate-500">{conv.time}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {conv.handled === "bot" ? (
                        <Badge variant="outline" className="border-cyan-500/30 text-cyan-400">
                          <Bot className="w-3 h-3 mr-1" />
                          Bot
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="border-amber-500/30 text-amber-400">
                          <User className="w-3 h-3 mr-1" />
                          Agente
                        </Badge>
                      )}
                      <ConversationStatus status={conv.status} />
                    </div>
                  </div>
                  <p className="text-sm text-slate-400 truncate">{conv.lastMessage}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* FAQ Performance */}
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader>
              <CardTitle className="text-white text-lg">FAQs Más Frecuentes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {faqStats.map((faq, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium text-slate-300">{faq.question}</span>
                      <Badge variant="outline" className="border-slate-600 text-slate-400">
                        {faq.count} consultas
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 rounded-full bg-slate-700 overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${faq.autoResolved}%` }} />
                      </div>
                      <span className="text-sm text-emerald-400">{faq.autoResolved}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Chat Preview */}
        <div className="space-y-4">
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader>
              <CardTitle className="text-white text-lg flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-cyan-500" />
                Vista Previa Bot
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80 flex flex-col">
                <div className="flex-1 space-y-3 overflow-y-auto mb-4">
                  {chatPreview.map((msg, i) => (
                    <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                          msg.role === "user"
                            ? "bg-cyan-500 text-white rounded-br-sm"
                            : "bg-slate-800 text-slate-300 rounded-bl-sm"
                        }`}
                      >
                        {msg.message}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input
                    placeholder="Escribe un mensaje de prueba..."
                    className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                  />
                  <Button size="icon" className="bg-cyan-500 hover:bg-cyan-400 text-white">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bot Performance */}
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader>
              <CardTitle className="text-white text-lg">Rendimiento del Bot</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-emerald-500" />
                  <span className="text-sm text-slate-400">Tasa de resolución</span>
                </div>
                <span className="text-lg font-semibold text-white">87%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-cyan-500" />
                  <span className="text-sm text-slate-400">Tiempo respuesta</span>
                </div>
                <span className="text-lg font-semibold text-white">{"< 3s"}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span className="text-sm text-slate-400">Satisfacción</span>
                </div>
                <span className="text-lg font-semibold text-white">4.8/5</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function ChannelBadge({ channel }: { channel: string }) {
  const config: Record<string, { icon: React.ElementType; style: string }> = {
    whatsapp: { icon: Phone, style: "text-emerald-400" },
    web: { icon: Globe, style: "text-cyan-400" },
    email: { icon: Mail, style: "text-blue-400" },
  }
  const { icon: Icon, style } = config[channel] || config.web
  return <Icon className={`w-3 h-3 ${style}`} />
}

function ConversationStatus({ status }: { status: string }) {
  const config: Record<string, { color: string }> = {
    active: { color: "bg-emerald-500" },
    escalated: { color: "bg-amber-500" },
    resolved: { color: "bg-slate-500" },
  }
  return <span className={`w-2 h-2 rounded-full ${config[status]?.color || "bg-slate-500"}`} />
}
