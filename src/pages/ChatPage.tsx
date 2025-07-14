import { useState, useEffect } from "react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import {
  Search,
  Settings,
  Menu,
  Paperclip,
  Send,
  ImageIcon,
  Newspaper,
  Users,
  ChevronDown,
  Brain,
  Sparkles,
  Zap,
} from "lucide-react"

export default function Component() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isDeepSearchActive, setIsDeepSearchActive] = useState(false)
  const [isThinkActive, setIsThinkActive] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Mouse follower gradient */}
      <div
        className="absolute w-96 h-96 bg-gradient-radial from-blue-500/10 to-transparent rounded-full blur-3xl pointer-events-none transition-all duration-300"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      ></div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between p-6 backdrop-blur-xl bg-white/5 border-b border-white/10">
        <div className="flex items-center group">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/50 transition-all duration-300">
              <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              </div>
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
          >
            <Menu className="w-5 h-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
          >
            <Settings className="w-5 h-5" />
          </Button>
          <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 transform hover:scale-105">
            <Sparkles className="w-4 h-4 mr-2" />
            Suscríbete
          </Button>
          <Button
            variant="ghost"
            className="text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
          >
            Iniciar sesión
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-200px)] px-4">
        {/* Grok Logo */}
        <div className="mb-16 text-center group">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-all duration-500 animate-pulse">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                  <div className="w-5 h-5 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 rounded-full blur-lg opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>
            </div>
            <h1 className="text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-purple-300 transition-all duration-500">
              Grok
            </h1>
          </div>
          <p className="text-gray-400 text-lg font-light">Inteligencia Artificial de Nueva Generación</p>
        </div>

        {/* Search Container */}
        <div className="w-full max-w-4xl">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="¿Qué quieres descubrir hoy?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent border-none text-xl placeholder:text-gray-400 focus:ring-0 focus:outline-none pr-12 py-4 font-light"
                />

                {/* Input Controls */}
                <div className="flex items-center gap-3 mt-6 flex-wrap">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300 rounded-full"
                  >
                    <Paperclip className="w-5 h-5" />
                  </Button>

                  {/* DeepSearch Toggle */}
                  <Button
                    variant={isDeepSearchActive ? "default" : "ghost"}
                    onClick={() => setIsDeepSearchActive(!isDeepSearchActive)}
                    className={`flex items-center gap-2 rounded-full px-4 py-2 transition-all duration-300 transform hover:scale-105 ${
                      isDeepSearchActive
                        ? "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg shadow-blue-500/25"
                        : "bg-gray-800/50 hover:bg-gray-700/50 backdrop-blur-sm border border-white/10"
                    }`}
                  >
                    <Search className="w-4 h-4" />
                    <span className="font-medium">DeepSearch</span>
                    <ChevronDown className="w-4 h-4" />
                  </Button>

                  {/* Think Toggle */}
                  <Button
                    variant={isThinkActive ? "default" : "ghost"}
                    onClick={() => setIsThinkActive(!isThinkActive)}
                    className={`flex items-center gap-2 rounded-full px-4 py-2 transition-all duration-300 transform hover:scale-105 ${
                      isThinkActive
                        ? "bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 shadow-lg shadow-purple-500/25"
                        : "bg-gray-800/50 hover:bg-gray-700/50 backdrop-blur-sm border border-white/10"
                    }`}
                  >
                    <Brain className="w-4 h-4" />
                    <span className="font-medium">Think</span>
                  </Button>

                  <div className="ml-auto flex items-center gap-3">
                    {/* Model Selector */}
                    <Button
                      variant="ghost"
                      className="flex items-center gap-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm border border-white/10 transition-all duration-300"
                    >
                      <Zap className="w-4 h-4 text-yellow-400" />
                      <span className="font-medium">Grok 3</span>
                      <ChevronDown className="w-4 h-4" />
                    </Button>

                    {/* Send Button */}
                    <Button
                      size="icon"
                      className={`rounded-full w-12 h-12 transition-all duration-300 transform hover:scale-110 ${
                        searchQuery.trim()
                          ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
                          : "bg-gray-700/50 cursor-not-allowed"
                      }`}
                      disabled={!searchQuery.trim()}
                    >
                      <Send className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8 flex-wrap">
            <Button
              variant="ghost"
              className="flex items-center gap-3 bg-gray-900/50 hover:bg-gray-800/50 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 group"
            >
              <ImageIcon className="w-5 h-5 text-pink-400 group-hover:text-pink-300 transition-colors duration-300" />
              <span className="font-medium">Editar imagen</span>
            </Button>

            <Button
              variant="ghost"
              className="flex items-center gap-3 bg-gray-900/50 hover:bg-gray-800/50 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 group"
            >
              <Newspaper className="w-5 h-5 text-green-400 group-hover:text-green-300 transition-colors duration-300" />
              <span className="font-medium">Noticias más recientes</span>
            </Button>

            <Button
              variant="ghost"
              className="flex items-center gap-3 bg-gray-900/50 hover:bg-gray-800/50 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 group"
            >
              <Users className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
              <span className="font-medium">Personalidades</span>
              <ChevronDown className="w-4 h-4 ml-1" />
            </Button>
          </div>

          {/* Footer Text */}
          <p className="text-center text-gray-400 text-sm mt-12 font-light">
            Al enviar un mensaje a Grok, acepta nuestros{" "}
            <a
              href="#"
              className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors duration-300"
            >
              Términos
            </a>{" "}
            y{" "}
            <a
              href="#"
              className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors duration-300"
            >
              Política de Privacidad
            </a>
            .
          </p>
        </div>
      </main>

      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  )
}
