"use client"

import { Heart, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Screen } from "@/app/page"

interface EmotionalAlertModalProps {
  setScreen: (screen: Screen) => void
  setShowModal: (show: boolean) => void
}

export function EmotionalAlertModal({ setScreen, setShowModal }: EmotionalAlertModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
      <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl p-6 sm:p-8 max-w-md w-full mx-4 animate-in zoom-in-95 duration-200 relative border border-purple-100 dark:border-purple-800 transition-colors">
        {/* Close button */}
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-[#631973] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col items-center text-center">
          {/* Icono principal */}
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#f3e6f9] dark:bg-[#3a0b46] rounded-full flex items-center justify-center mb-6">
            <Heart className="w-7 h-7 sm:w-8 sm:h-8 text-[#631973]" />
          </div>

          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Hemos notado algo importante
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm sm:text-base leading-relaxed">
            Tu mensaje contiene indicadores emocionales que podrían reflejar que estás pasando por un momento difícil.
          </p>

          <p className="text-sm text-[#631973] dark:text-[#b87be6] mb-6 leading-relaxed font-medium">
            Queremos que sepas que hay recursos disponibles si los necesitas. Tu bienestar es importante para nosotros.
          </p>

          <div className="w-full space-y-3">
            <Button
              className="w-full bg-[#631973] hover:bg-[#4f1260] py-5 sm:py-6 rounded-lg font-semibold text-sm sm:text-base text-white transition-colors"
              onClick={() => {
                setShowModal(false)
                setScreen("chat")
              }}
            >
              Hablar con un profesional ahora
            </Button>

            <Button
              variant="outline"
              className="w-full py-5 sm:py-6 rounded-lg border-2 border-[#631973]/40 hover:bg-[#f8f0fb] dark:hover:bg-[#2a082f] text-sm sm:text-base transition-colors"
              onClick={() => setShowModal(false)}
            >
              Publicar de todas formas
            </Button>
          </div>

          <button className="mt-4 text-xs sm:text-sm text-[#631973] dark:text-[#b87be6] underline hover:text-[#4f1260] transition-colors">
            Más información sobre este análisis
          </button>
        </div>
      </div>
    </div>
  )
}
