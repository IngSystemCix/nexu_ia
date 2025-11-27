"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Cpu, Mail, Lock, Eye, EyeOff, User, Building, ArrowRight, Check } from "lucide-react"

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    router.push("/dashboard")
  }

  return (
    <div className="min-h-screen bg-slate-950 flex">
      {/* Left side - Visual */}
      <div className="hidden lg:flex flex-1 relative bg-gradient-to-br from-slate-900 to-slate-950 items-center justify-center p-12">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>

        <div className="relative max-w-lg">
          <h2 className="text-3xl font-bold text-white mb-6">Todo lo que necesitas para optimizar tu operación</h2>
          <div className="space-y-4">
            {[
              "Bot omnicanal 24/7 con IA avanzada",
              "Triaje inteligente de tickets automático",
              "Dashboards con predicciones en tiempo real",
              "Integración con tus herramientas existentes",
              "Seguridad empresarial SOC 2",
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center">
                  <Check className="w-4 h-4 text-cyan-400" />
                </div>
                <span className="text-slate-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
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
            <h1 className="text-3xl font-bold text-white mb-2">Solicita acceso</h1>
            <p className="text-slate-400">Completa el formulario y un especialista te contactará</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-slate-300">
                  Nombre
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                  <Input
                    id="name"
                    placeholder="Juan"
                    className="pl-10 h-12 bg-slate-900 border-slate-700 text-white placeholder:text-slate-500 focus:border-cyan-500"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastname" className="text-slate-300">
                  Apellido
                </Label>
                <Input
                  id="lastname"
                  placeholder="Pérez"
                  className="h-12 bg-slate-900 border-slate-700 text-white placeholder:text-slate-500 focus:border-cyan-500"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="company" className="text-slate-300">
                Empresa
              </Label>
              <div className="relative">
                <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <Input
                  id="company"
                  placeholder="Tu empresa"
                  className="pl-10 h-12 bg-slate-900 border-slate-700 text-white placeholder:text-slate-500 focus:border-cyan-500"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-slate-300">
                Correo corporativo
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@empresa.com"
                  className="pl-10 h-12 bg-slate-900 border-slate-700 text-white placeholder:text-slate-500 focus:border-cyan-500"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-slate-300">
                Contraseña
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="pl-10 pr-10 h-12 bg-slate-900 border-slate-700 text-white placeholder:text-slate-500 focus:border-cyan-500"
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
                  Solicitar Acceso
                  <ArrowRight className="ml-2 w-5 h-5" />
                </>
              )}
            </Button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-slate-400">
              ¿Ya tienes cuenta?{" "}
              <Link href="/login" className="text-cyan-400 hover:text-cyan-300 font-medium">
                Inicia sesión
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
