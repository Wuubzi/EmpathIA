"use client"

import { useState } from "react"
import { ImageIcon, Smile } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import type { Screen } from "@/app/page"

interface ComposeScreenProps {
  setScreen: (screen: Screen) => void
  setShowModal: (show: boolean) => void
}

export function ComposeScreen({ setScreen, setShowModal }: ComposeScreenProps) {
  const [text, setText] = useState("")

  const handleAnalyze = () => {
    setShowModal(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-purple-100 dark:from-[#1a001f] dark:via-[#120016] dark:to-[#1a001f]">
      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 sm:py-12">
        <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-lg border border-purple-100 dark:border-purple-900 p-4 sm:p-8 transition-colors duration-300">
          <Textarea
            placeholder="¿Qué estás pensando compartir hoy?"
            className="min-h-48 sm:min-h-64 text-base sm:text-lg resize-none border-gray-200 focus:border-[#631973] focus:ring-[#631973] dark:border-zinc-700 dark:focus:border-[#a14ccf] dark:focus:ring-[#a14ccf]"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <Button
                className="bg-[#631973] hover:bg-[#4f1260] text-white flex-1 sm:flex-none transition-colors"
                onClick={handleAnalyze}
              >
                Analizar y Publicar
              </Button>
              <button className="text-gray-500 hover:text-[#631973] transition-colors">
                <ImageIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <button className="text-gray-500 hover:text-[#631973] transition-colors">
                <Smile className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
            <span className="text-sm text-gray-500 self-end sm:self-auto">{text.length}/280</span>
          </div>

          <div className="mt-6 flex items-start gap-2">
            <Checkbox id="wellness" className="mt-0.5 border-[#631973]/40 data-[state=checked]:bg-[#631973]" />
            <label
              htmlFor="wellness"
              className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 cursor-pointer leading-relaxed"
            >
              Tip de bienestar: Tómate un momento para respirar antes de publicar
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}
