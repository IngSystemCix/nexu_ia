"use client"

import { User, Bell, Shield, Palette, Globe, Key, Save, Mail, Phone, Building } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-white">Configuración</h1>
        <p className="text-slate-400">Administra tu cuenta y preferencias de la plataforma</p>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="bg-slate-900 border border-slate-800">
          <TabsTrigger value="profile" className="data-[state=active]:bg-cyan-500/10 data-[state=active]:text-cyan-400">
            <User className="w-4 h-4 mr-2" />
            Perfil
          </TabsTrigger>
          <TabsTrigger
            value="notifications"
            className="data-[state=active]:bg-cyan-500/10 data-[state=active]:text-cyan-400"
          >
            <Bell className="w-4 h-4 mr-2" />
            Notificaciones
          </TabsTrigger>
          <TabsTrigger
            value="security"
            className="data-[state=active]:bg-cyan-500/10 data-[state=active]:text-cyan-400"
          >
            <Shield className="w-4 h-4 mr-2" />
            Seguridad
          </TabsTrigger>
          <TabsTrigger
            value="preferences"
            className="data-[state=active]:bg-cyan-500/10 data-[state=active]:text-cyan-400"
          >
            <Palette className="w-4 h-4 mr-2" />
            Preferencias
          </TabsTrigger>
        </TabsList>

        {/* Profile Tab */}
        <TabsContent value="profile">
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader>
              <CardTitle className="text-white">Información Personal</CardTitle>
              <CardDescription className="text-slate-400">Actualiza tu información de perfil</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">JP</span>
                </div>
                <div>
                  <Button
                    variant="outline"
                    className="border-slate-700 text-slate-300 hover:bg-slate-800 bg-transparent"
                  >
                    Cambiar foto
                  </Button>
                  <p className="text-xs text-slate-500 mt-2">JPG, PNG o GIF. Máximo 2MB</p>
                </div>
              </div>

              <Separator className="bg-slate-800" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-slate-300">
                    Nombre
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <Input
                      id="firstName"
                      defaultValue="Juan"
                      className="pl-10 bg-slate-800 border-slate-700 text-white"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-slate-300">
                    Apellido
                  </Label>
                  <Input id="lastName" defaultValue="Pérez" className="bg-slate-800 border-slate-700 text-white" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-300">
                    Correo electrónico
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <Input
                      id="email"
                      type="email"
                      defaultValue="juan@empresa.com"
                      className="pl-10 bg-slate-800 border-slate-700 text-white"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-slate-300">
                    Teléfono
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <Input
                      id="phone"
                      defaultValue="+52 55 1234 5678"
                      className="pl-10 bg-slate-800 border-slate-700 text-white"
                    />
                  </div>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="company" className="text-slate-300">
                    Empresa
                  </Label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <Input
                      id="company"
                      defaultValue="Tech Solutions S.A."
                      className="pl-10 bg-slate-800 border-slate-700 text-white"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Button className="bg-cyan-500 hover:bg-cyan-400 text-slate-950">
                  <Save className="w-4 h-4 mr-2" />
                  Guardar Cambios
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications Tab */}
        <TabsContent value="notifications">
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader>
              <CardTitle className="text-white">Preferencias de Notificaciones</CardTitle>
              <CardDescription className="text-slate-400">Configura cómo y cuándo recibir alertas</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <NotificationSetting
                  title="Nuevos tickets asignados"
                  description="Recibe notificación cuando se te asigne un ticket"
                  defaultChecked={true}
                />
                <NotificationSetting
                  title="Tickets escalados"
                  description="Alertas cuando un ticket se escala a tu equipo"
                  defaultChecked={true}
                />
                <NotificationSetting
                  title="SLA próximo a vencer"
                  description="Aviso 30 minutos antes del vencimiento"
                  defaultChecked={true}
                />
                <NotificationSetting
                  title="Resumen diario"
                  description="Reporte de métricas al final del día"
                  defaultChecked={false}
                />
                <NotificationSetting
                  title="Alertas del sistema"
                  description="Notificaciones de mantenimiento y actualizaciones"
                  defaultChecked={true}
                />
              </div>

              <Separator className="bg-slate-800" />

              <div className="space-y-4">
                <h3 className="text-sm font-medium text-white">Canales de notificación</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="bg-slate-800/50 border-slate-700">
                    <CardContent className="pt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-cyan-500" />
                        <span className="text-sm text-slate-300">Email</span>
                      </div>
                      <Switch defaultChecked />
                    </CardContent>
                  </Card>
                  <Card className="bg-slate-800/50 border-slate-700">
                    <CardContent className="pt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Bell className="w-4 h-4 text-cyan-500" />
                        <span className="text-sm text-slate-300">Push</span>
                      </div>
                      <Switch defaultChecked />
                    </CardContent>
                  </Card>
                  <Card className="bg-slate-800/50 border-slate-700">
                    <CardContent className="pt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-cyan-500" />
                        <span className="text-sm text-slate-300">SMS</span>
                      </div>
                      <Switch />
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security Tab */}
        <TabsContent value="security">
          <div className="space-y-4">
            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <CardTitle className="text-white">Seguridad de la Cuenta</CardTitle>
                <CardDescription className="text-slate-400">
                  Protege tu cuenta con autenticación adicional
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between p-4 rounded-lg bg-slate-800/50">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                      <Key className="w-5 h-5 text-cyan-500" />
                    </div>
                    <div>
                      <p className="font-medium text-white">Cambiar Contraseña</p>
                      <p className="text-sm text-slate-400">Última actualización: hace 30 días</p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="border-slate-700 text-slate-300 hover:bg-slate-800 bg-transparent"
                  >
                    Actualizar
                  </Button>
                </div>

                <div className="flex items-center justify-between p-4 rounded-lg bg-slate-800/50">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-emerald-500" />
                    </div>
                    <div>
                      <p className="font-medium text-white">Autenticación de Dos Factores</p>
                      <p className="text-sm text-emerald-400">Activada</p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="border-slate-700 text-slate-300 hover:bg-slate-800 bg-transparent"
                  >
                    Configurar
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <CardTitle className="text-white">Sesiones Activas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <SessionItem device="Chrome en MacOS" location="Ciudad de México" current />
                  <SessionItem device="Safari en iPhone" location="Ciudad de México" />
                  <SessionItem device="Firefox en Windows" location="Guadalajara" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Preferences Tab */}
        <TabsContent value="preferences">
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader>
              <CardTitle className="text-white">Preferencias de la Plataforma</CardTitle>
              <CardDescription className="text-slate-400">Personaliza tu experiencia</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-slate-300">Idioma</Label>
                  <Select defaultValue="es">
                    <SelectTrigger className="bg-slate-800 border-slate-700 text-white">
                      <Globe className="w-4 h-4 mr-2 text-slate-500" />
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-900 border-slate-700">
                      <SelectItem value="es" className="text-slate-300">
                        Español
                      </SelectItem>
                      <SelectItem value="en" className="text-slate-300">
                        English
                      </SelectItem>
                      <SelectItem value="pt" className="text-slate-300">
                        Português
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label className="text-slate-300">Zona Horaria</Label>
                  <Select defaultValue="america_mexico">
                    <SelectTrigger className="bg-slate-800 border-slate-700 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-900 border-slate-700">
                      <SelectItem value="america_mexico" className="text-slate-300">
                        América/Ciudad de México (GMT-6)
                      </SelectItem>
                      <SelectItem value="america_bogota" className="text-slate-300">
                        América/Bogotá (GMT-5)
                      </SelectItem>
                      <SelectItem value="america_lima" className="text-slate-300">
                        América/Lima (GMT-5)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Separator className="bg-slate-800" />

              <div className="space-y-4">
                <h3 className="text-sm font-medium text-white">Apariencia del Dashboard</h3>
                <NotificationSetting
                  title="Vista compacta"
                  description="Muestra más información en menos espacio"
                  defaultChecked={false}
                />
                <NotificationSetting
                  title="Animaciones"
                  description="Habilitar transiciones y efectos visuales"
                  defaultChecked={true}
                />
                <NotificationSetting
                  title="Auto-refresh"
                  description="Actualizar datos automáticamente cada 30 segundos"
                  defaultChecked={true}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function NotificationSetting({
  title,
  description,
  defaultChecked,
}: {
  title: string
  description: string
  defaultChecked: boolean
}) {
  return (
    <div className="flex items-center justify-between p-4 rounded-lg bg-slate-800/50">
      <div>
        <p className="text-sm font-medium text-white">{title}</p>
        <p className="text-xs text-slate-400">{description}</p>
      </div>
      <Switch defaultChecked={defaultChecked} />
    </div>
  )
}

function SessionItem({ device, location, current }: { device: string; location: string; current?: boolean }) {
  return (
    <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50">
      <div>
        <p className="text-sm font-medium text-white flex items-center gap-2">
          {device}
          {current && <span className="text-xs text-emerald-400">(Esta sesión)</span>}
        </p>
        <p className="text-xs text-slate-500">{location}</p>
      </div>
      {!current && (
        <Button variant="ghost" size="sm" className="text-red-400 hover:text-red-300 hover:bg-red-500/10">
          Cerrar
        </Button>
      )}
    </div>
  )
}
