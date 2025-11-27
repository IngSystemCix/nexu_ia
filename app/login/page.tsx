"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Cpu, Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate login
    await new Promise((resolve) => setTimeout(resolve, 1000))
    router.push("/dashboard")
  }

  return (
    <div className="min-h-screen bg-slate-950 flex">
      {/* Left side - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 mb-12">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
              <Cpu className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">
              <span className="text-white">Nexus</span>
              <span className="text-cyan-400">AI</span>
            </span>
          </Link>

          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Bienvenido de vuelta</h1>
            <p className="text-slate-400">Ingresa tus credenciales para acceder a la plataforma</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-slate-300">
                Correo electrónico
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@empresa.com"
                  className="pl-10 h-12 bg-slate-900 border-slate-700 text-white placeholder:text-slate-500 focus:border-cyan-500 focus:ring-cyan-500/20"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-slate-300">
                  Contraseña
                </Label>
                <Link href="/forgot-password" className="text-sm text-cyan-400 hover:text-cyan-300">
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="pl-10 pr-10 h-12 bg-slate-900 border-slate-700 text-white placeholder:text-slate-500 focus:border-cyan-500 focus:ring-cyan-500/20"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-slate-950/30 border-t-slate-950 rounded-full animate-spin" />
              ) : (
                <>
                  Iniciar Sesión
                  <ArrowRight className="ml-2 w-5 h-5" />
                </>
              )}
            </Button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-slate-400">
              ¿No tienes una cuenta?{" "}
              <Link href="/register" className="text-cyan-400 hover:text-cyan-300 font-medium">
                Solicita acceso
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Visual */}
      <div className="hidden lg:flex flex-1 relative bg-gradient-to-br from-slate-900 to-slate-950 items-center justify-center p-12">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>

        <div className="relative max-w-lg text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-sm text-cyan-400">Plataforma Activa</span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Inteligencia Operativa en Tiempo Real</h2>
          <p className="text-slate-400 leading-relaxed">
            Accede a dashboards inteligentes, gestión de tickets automatizada y analítica predictiva para optimizar tu
            operación.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
              <div className="text-2xl font-bold text-cyan-400">99.9%</div>
              <div className="text-xs text-slate-500">Uptime</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
              <div className="text-2xl font-bold text-cyan-400">2.4h</div>
              <div className="text-xs text-slate-500">Respuesta</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
              <div className="text-2xl font-bold text-cyan-400">94%</div>
              <div className="text-xs text-slate-500">Satisfacción</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
