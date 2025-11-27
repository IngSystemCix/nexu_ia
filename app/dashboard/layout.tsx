"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Ticket,
  MessageSquare,
  Settings,
  BarChart3,
  Cpu,
  ChevronLeft,
  Bell,
  Search,
  User,
  LogOut,
  Plug,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { Suspense } from "react"

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Triaje de Tickets", href: "/dashboard/tickets", icon: Ticket },
  { name: "Bot Omnicanal", href: "/dashboard/bot", icon: MessageSquare },
  { name: "Analítica", href: "/dashboard/analytics", icon: BarChart3 },
  { name: "Integraciones", href: "/dashboard/integrations", icon: Plug },
  { name: "Configuración", href: "/dashboard/settings", icon: Settings },
]

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false)
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-slate-950 flex">
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 h-full bg-slate-900 border-r border-cyan-500/10 transition-all duration-300 z-40",
          collapsed ? "w-20" : "w-64",
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="h-16 flex items-center justify-between px-4 border-b border-cyan-500/10">
            <Link href="/dashboard" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              {!collapsed && (
                <span className="text-xl font-bold tracking-tight">
                  <span className="text-white">Nexus</span>
                  <span className="text-cyan-400">AI</span>
                </span>
              )}
            </Link>
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <ChevronLeft className={cn("w-5 h-5 transition-transform", collapsed && "rotate-180")} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 py-6 px-3 space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-3 rounded-xl transition-all",
                    isActive
                      ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                      : "text-slate-400 hover:text-white hover:bg-slate-800",
                  )}
                >
                  <item.icon className="w-5 h-5 flex-shrink-0" />
                  {!collapsed && <span className="font-medium">{item.name}</span>}
                </Link>
              )
            })}
          </nav>

          {/* User section */}
          <div className="p-3 border-t border-cyan-500/10">
            <div
              className={cn(
                "flex items-center gap-3 px-3 py-3 rounded-xl bg-slate-800/50",
                collapsed && "justify-center",
              )}
            >
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-bold text-white">JP</span>
              </div>
              {!collapsed && (
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-white truncate">Juan Pérez</p>
                  <p className="text-xs text-slate-500 truncate">Administrador</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className={cn("flex-1 transition-all duration-300", collapsed ? "ml-20" : "ml-64")}>
        {/* Top header */}
        <header className="h-16 bg-slate-900/50 backdrop-blur-xl border-b border-cyan-500/10 flex items-center justify-between px-6 sticky top-0 z-30">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative max-w-md w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <Input
                placeholder="Buscar tickets, clientes, métricas..."
                className="pl-10 bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 focus:border-cyan-500 h-10"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-cyan-500" />
            </button>

            <Suspense fallback={<div>Loading...</div>}>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-2 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                      <span className="text-xs font-bold text-white">JP</span>
                    </div>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 bg-slate-900 border-slate-700">
                  <DropdownMenuItem className="text-slate-300 focus:bg-slate-800 focus:text-white">
                    <User className="mr-2 w-4 h-4" />
                    Mi Perfil
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-slate-300 focus:bg-slate-800 focus:text-white">
                    <Settings className="mr-2 w-4 h-4" />
                    Configuración
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-slate-700" />
                  <DropdownMenuItem asChild className="text-red-400 focus:bg-slate-800 focus:text-red-300">
                    <Link href="/">
                      <LogOut className="mr-2 w-4 h-4" />
                      Cerrar Sesión
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </Suspense>
          </div>
        </header>

        {/* Page content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  )
}
