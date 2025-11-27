import { Cpu } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-slate-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                <Cpu className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold">
                <span className="text-white">Nexus</span>
                <span className="text-cyan-400">AI</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Plataforma de Inteligencia Operativa con IA híbrida para empresas que buscan excelencia.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-white mb-4">Producto</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Funcionalidades
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Integraciones
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Precios
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Changelog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-white mb-4">Recursos</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Documentación
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Guías
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-white mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Sobre nosotros
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Contacto
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Términos
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">© 2025 NexusAI. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <span>SOC 2 Type II</span>
            <span>ISO 27001</span>
            <span>GDPR Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
