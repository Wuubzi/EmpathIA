"use client"

import { Heart, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import type { Screen } from "@/app/page"

interface HomeScreenProps {
  setScreen: (screen: Screen) => void
}

export function HomeScreen({ setScreen }: HomeScreenProps) {
  const posts = [
    {
      username: "TechInsider",
      time: "Hace 2 horas",
      content:
        "El nuevo lanzamiento de IA va a cambiar las reglas del juego. La eficiencia y creatividad que promete son increíbles. ¿Estás listo para el futuro? 🚀",
      avatar: "TI",
    },
    {
      username: "UrbanExplorer",
      time: "Hace 6 horas",
      content:
        "El tráfico en la ciudad era peor que nunca. Necesitamos soluciones sostenibles y eficientes. Es frustrante ver tan poco progreso.",
      avatar: "UE",
    },
    {
      username: "DailyNews",
      time: "Hace 8 horas",
      content:
        "El informe meteorológico indica que las temperaturas se mantendrán estables durante toda la semana.",
      avatar: "DN",
    },
  ]

  const trends = [
    { tag: "#InnovaciónTech", mentions: "1.2M menciones" },
    { tag: "#SostenibilidadUrbana", mentions: "890K menciones" },
    { tag: "#CalorDeVerano", mentions: "750K menciones" },
    { tag: "#CrisisClimática", mentions: "2M menciones" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-purple-100 dark:from-[#120016] dark:via-[#1a001f] dark:to-[#120016] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Feed */}
          <div className="lg:col-span-2">
            <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-900 dark:text-white">¡Hola, Alex!</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm sm:text-base">
              Aquí tienes un resumen de la actividad reciente en tus redes
            </p>

            <div className="space-y-4">
              {posts.map((post, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-purple-100 dark:border-purple-900 p-4 sm:p-6 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback className="bg-[#f3e6f9] text-[#631973] font-semibold">
                        {post.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">{post.username}</p>
                      <p className="text-xs sm:text-sm text-gray-500">{post.time}</p>
                    </div>
                  </div>
                  <p className="text-gray-800 dark:text-gray-200 mb-4 text-sm sm:text-base leading-relaxed">
                    {post.content}
                  </p>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                    <button className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-[#631973] dark:hover:text-[#b87be6] transition-colors">
                      <Heart className="w-5 h-5" />
                      <span className="text-sm">Apoyo</span>
                    </button>
                    <Button className="bg-[#631973] hover:bg-[#4f1260] text-sm text-white">
                      Ver análisis detallado →
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Tendencias */}
            <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-purple-100 dark:border-purple-900 p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold mb-4 text-gray-900 dark:text-white">Tendencias</h2>
              <div className="space-y-3">
                {trends.map((trend, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between hover:bg-[#f8f0fb] dark:hover:bg-[#2a082f] p-2 rounded-lg transition-colors cursor-pointer"
                  >
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">{trend.tag}</p>
                      <p className="text-xs sm:text-sm text-gray-500">{trend.mentions}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 dark:text-gray-500" />
                  </div>
                ))}
              </div>
            </div>

            {/* Consejo del día */}
            <div className="bg-[#f3e6f9] dark:bg-[#2a082f] rounded-2xl shadow-sm border border-purple-100 dark:border-purple-900 p-4 sm:p-6">
              <h3 className="font-semibold mb-2 text-[#631973] dark:text-[#b87be6]">Consejo del día</h3>
              <p className="text-sm text-[#4f1260] dark:text-[#d7b4f0] leading-relaxed">
                Recuerda que todas las emociones son válidas. Expresarlas también es una forma de bienestar.
              </p>
            </div>

            <Button
              className="w-full bg-[#631973] hover:bg-[#4f1260] text-white"
              onClick={() => setScreen("compose")}
            >
              Añadir nueva publicación
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
