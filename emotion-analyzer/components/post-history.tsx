"use client"

import { useState } from "react"
import { Edit, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import type { Screen } from "@/app/page"

interface PostHistoryProps {
  setScreen: (screen: Screen) => void
}

export function PostHistory({ setScreen }: PostHistoryProps) {
  const [privacy1, setPrivacy1] = useState(true)
  const [privacy2, setPrivacy2] = useState(false)
  const [privacy3, setPrivacy3] = useState(true)

  const posts = [
    {
      content:
        "¡Qué día tan increíble en el parque! El sol brillante y puede disfrutar de un largo paseo. A veces, las cosas más simples son las que más felicidad traen. #Felicidad #NatureBless",
      date: "Publicado el 23/11/2023 14:30",
      sentiment: "Positivo 😊",
      sentimentColor: "bg-purple-100 text-purple-700",
      privacy: privacy1,
      setPrivacy: setPrivacy1,
    },
    {
      content:
        "Otro día de tráfico interminable. A veces me pregunto si alguna vez llegaré a casa. Necesito unas vacaciones urgentes. #Estrés #Ciudad",
      date: "Publicado el 22/11/2023 18:45",
      sentiment: "Negativo 😟",
      sentimentColor: "bg-pink-100 text-pink-700",
      privacy: privacy2,
      setPrivacy: setPrivacy2,
    },
    {
      content:
        "Acabo de terminar de leer un libro fascinante. La trama era compleja y los personajes muy bien desarrollados. Lo recomiendo si disfrutan #Libros #Lectura",
      date: "Publicado el 21/11/2023 21:07",
      sentiment: "Neutral 😐",
      sentimentColor: "bg-gray-100 text-gray-700",
      privacy: privacy3,
      setPrivacy: setPrivacy3,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-zinc-950 dark:to-zinc-900 transition-colors">
      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-[#631973] dark:text-[#c28efc] text-center">
          Mis Publicaciones
        </h1>

        <div className="space-y-5">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-purple-100 dark:border-purple-800 p-5 sm:p-6 hover:shadow-md hover:scale-[1.01] transition-all"
            >
              <p className="text-gray-800 dark:text-gray-200 mb-4 text-sm sm:text-base leading-relaxed">
                {post.content}
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{post.date}</p>
                <span
                  className={`px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${post.sentimentColor} dark:opacity-90`}
                >
                  Análisis: {post.sentiment}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-4 border-t border-purple-100 dark:border-purple-800">
                <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 sm:flex-none text-xs sm:text-sm border-purple-200 text-[#631973] hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors"
                  >
                    <Edit className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    Editar
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 sm:flex-none text-xs sm:text-sm border-pink-200 text-pink-700 hover:bg-pink-50 dark:hover:bg-pink-900/30 transition-colors"
                  >
                    <Trash2 className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    Eliminar
                  </Button>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
                  <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">Privacidad</span>
                  <Switch checked={post.privacy} onCheckedChange={post.setPrivacy} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
