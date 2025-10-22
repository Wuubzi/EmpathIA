"use client"

import { useState } from "react"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import type { Screen } from "@/app/page"

interface SupportChatProps {
  setScreen: (screen: Screen) => void
}

export function SupportChat({ setScreen }: SupportChatProps) {
  const [message, setMessage] = useState("")

  const messages = [
    {
      type: "agent",
      content:
        "Hola, bienvenido al chat de apoyo. Soy un agente automatizado aquí para ayudarte. ¿Cómo te sientes hoy?",
      time: "10:30",
    },
    {
      type: "user",
      content: "Hola, me he sentido un poco abrumado últimamente.",
      time: "10:32",
    },
    {
      type: "agent",
      content:
        "Entiendo. A veces, todos nos sentimos así. ¿Hay algún motivo en particular que te gustaría compartir? Recuerda, este es un espacio seguro.",
      time: "10:33",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-zinc-950 dark:to-zinc-900 flex flex-col">
      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6">
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-xl sm:text-2xl font-bold text-[#631973] dark:text-[#c28efc] mb-2">
              Chat de Apoyo
            </h1>
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-[#631973] rounded-full animate-pulse" />
              <span className="text-xs sm:text-sm text-[#631973]/80 dark:text-[#c28efc]/80">
                Psicólogo en línea
              </span>
            </div>
          </div>

          {/* Messages */}
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex gap-2 sm:gap-3 ${
                msg.type === "user" ? "flex-row-reverse" : ""
              }`}
            >
              <Avatar className="w-8 h-8 sm:w-10 sm:h-10 shrink-0">
                <AvatarFallback
                  className={
                    msg.type === "agent"
                      ? "bg-purple-100 text-[#631973]"
                      : "bg-[#631973] text-white"
                  }
                >
                  {msg.type === "agent" ? "EA" : "Tú"}
                </AvatarFallback>
              </Avatar>
              <div
                className={`flex flex-col ${
                  msg.type === "user" ? "items-end" : ""
                } max-w-[85%] sm:max-w-md`}
              >
                <div
                  className={`rounded-2xl p-3 sm:p-4 shadow-sm ${
                    msg.type === "agent"
                      ? "bg-white dark:bg-zinc-800 border border-purple-100 dark:border-purple-900"
                      : "bg-purple-100 dark:bg-purple-900/40"
                  }`}
                >
                  <p className="text-gray-800 dark:text-gray-100 text-sm sm:text-base leading-relaxed">
                    {msg.content}
                  </p>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {msg.time}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Input Area */}
      <div className="bg-white dark:bg-zinc-900 border-t border-purple-100 dark:border-purple-800 shadow-lg p-3 sm:p-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-end gap-2 sm:gap-3">
            <Textarea
              placeholder="Escribe tu mensaje aquí..."
              className="flex-1 rounded-2xl resize-none min-h-[50px] max-h-[120px] text-sm sm:text-base border-purple-100 focus:border-[#631973] focus:ring-[#631973]/40 dark:border-purple-800"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button
              size="icon"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#631973] hover:bg-[#50145d] transition-colors shrink-0"
            >
              <Send className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </Button>
          </div>
          <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-2">
            🔒 La privacidad de tus datos está protegida
          </p>
        </div>
      </div>
    </div>
  )
}
