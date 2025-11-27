import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, MessageCircle } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

      <div className="relative max-w-4xl mx-auto">
        <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 p-8 lg:p-12 backdrop-blur-sm">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Transforma tu operación hoy</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10">
              Únete a las empresas líderes que ya optimizaron su inteligencia operativa. Implementación en 4 semanas.
              ROI desde el primer mes.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-8 h-14 text-base w-full sm:w-auto"
              >
                <Calendar className="mr-2 w-5 h-5" />
                Agendar Demo Personalizada
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white px-8 h-14 text-base w-full sm:w-auto bg-transparent"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                Hablar con Ventas
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-sm text-slate-500">
              <span>✓ Sin tarjeta de crédito</span>
              <span>✓ Demo en vivo</span>
              <span>✓ Soporte en español</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
