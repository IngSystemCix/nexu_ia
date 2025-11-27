"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Cpu } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
              <Cpu className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">
              <span className="text-white">Nexus</span>
              <span className="text-cyan-400">AI</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <a href="#arquitectura" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">
              Arquitectura
            </a>
            <a href="#funcionalidades" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">
              Funcionalidades
            </a>
            <a href="#integraciones" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">
              Integraciones
            </a>
            <a href="#metricas" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">
              Métricas
            </a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button asChild variant="ghost" className="text-slate-300 hover:text-white hover:bg-slate-800">
              <Link href="/login">Iniciar Sesión</Link>
            </Button>
            <Button asChild className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold">
              <Link href="/register">Solicitar Demo</Link>
            </Button>
          </div>

          <button className="md:hidden text-slate-400 hover:text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border-b border-cyan-500/10">
          <div className="px-4 py-4 space-y-3">
            <a href="#arquitectura" className="block text-sm text-slate-400 hover:text-cyan-400">
              Arquitectura
            </a>
            <a href="#funcionalidades" className="block text-sm text-slate-400 hover:text-cyan-400">
              Funcionalidades
            </a>
            <a href="#integraciones" className="block text-sm text-slate-400 hover:text-cyan-400">
              Integraciones
            </a>
            <a href="#metricas" className="block text-sm text-slate-400 hover:text-cyan-400">
              Métricas
            </a>
            <div className="pt-4 space-y-2">
              <Button asChild variant="ghost" className="w-full text-slate-300 hover:bg-slate-800">
                <Link href="/login">Iniciar Sesión</Link>
              </Button>
              <Button asChild className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold">
                <Link href="/register">Solicitar Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
