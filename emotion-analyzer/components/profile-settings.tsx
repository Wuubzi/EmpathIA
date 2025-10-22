"use client"

import { useState } from "react"
import { Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import type { Screen } from "@/app/page"

interface ProfileSettingsProps {
  setScreen: (screen: Screen) => void
}

export function ProfileSettings({ setScreen }: ProfileSettingsProps) {
  const [email, setEmail] = useState("olivia.rodriguez@email.com")
  const [profileVisible, setProfileVisible] = useState(true)
  const [emailSearch, setEmailSearch] = useState(false)
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [activityAlerts, setActivityAlerts] = useState(true)

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-zinc-950 dark:to-zinc-900 transition-colors">
      {/* Content */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-[#631973] dark:text-[#c28efc] text-center">
          Configuración del Perfil
        </h1>

        <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-md border border-purple-100 dark:border-purple-800 p-6 sm:p-8 space-y-8">
          {/* Profile Section */}
          <div className="flex flex-col items-center text-center">
            <Avatar className="w-20 h-20 sm:w-24 sm:h-24 mb-4 ring-2 ring-[#631973]/30">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback className="text-xl sm:text-2xl bg-purple-100 text-[#631973]">
                OR
              </AvatarFallback>
            </Avatar>
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100">
              Olivia Rodriguez
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
              {email}
            </p>
            <Button
              variant="outline"
              className="mt-4 border-purple-200 text-[#631973] hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors"
            >
              Cambiar foto
            </Button>
          </div>

          {/* User Info */}
          <div>
            <label className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 block mb-2">
              Nombre de Usuario
            </label>
            <p className="text-sm sm:text-base text-gray-900 dark:text-gray-200">
              Olivia.Rodriguez
            </p>
          </div>

          {/* Email */}
          <div>
            <label className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 block mb-2">
              Email
            </label>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 text-sm sm:text-base border-purple-100 focus:border-[#631973] focus:ring-[#631973]/50"
              />
              <Button className="bg-[#631973] hover:bg-[#50145d] text-white text-sm sm:text-base transition-colors">
                Cambiar
              </Button>
            </div>
          </div>

          {/* Password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-[#631973]" />
              <span className="font-medium text-sm sm:text-base text-gray-800 dark:text-gray-200">
                Contraseña
              </span>
            </div>
            <Button className="bg-[#631973] hover:bg-[#50145d] text-white text-sm sm:text-base">
              Cambiar
            </Button>
          </div>

          {/* Privacy Section */}
          <div className="border-t border-purple-100 dark:border-purple-800 pt-6">
            <h3 className="text-lg font-semibold mb-4 text-[#631973] dark:text-[#c28efc]">
              Privacidad
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1">
                  <p className="font-medium text-sm sm:text-base text-gray-900 dark:text-gray-100">
                    Visibilidad del perfil
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    Controla si tu perfil es visible
                  </p>
                </div>
                <Switch checked={profileVisible} onCheckedChange={setProfileVisible} />
              </div>
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1">
                  <p className="font-medium text-sm sm:text-base text-gray-900 dark:text-gray-100">
                    Búsqueda por correo electrónico
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    Permite que te encuentren por email
                  </p>
                </div>
                <Switch checked={emailSearch} onCheckedChange={setEmailSearch} />
              </div>
            </div>
          </div>

          {/* Notifications Section */}
          <div className="border-t border-purple-100 dark:border-purple-800 pt-6">
            <h3 className="text-lg font-semibold mb-4 text-[#631973] dark:text-[#c28efc]">
              Notificaciones
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4">
                <p className="font-medium text-sm sm:text-base text-gray-900 dark:text-gray-100 flex-1">
                  Notificaciones por correo electrónico
                </p>
                <Switch checked={emailNotifications} onCheckedChange={setEmailNotifications} />
              </div>
              <div className="flex items-center justify-between gap-4">
                <p className="font-medium text-sm sm:text-base text-gray-900 dark:text-gray-100 flex-1">
                  Alertas de actividad
                </p>
                <Switch checked={activityAlerts} onCheckedChange={setActivityAlerts} />
              </div>
            </div>
          </div>

          {/* Account Section */}
          <div className="border-t border-purple-100 dark:border-purple-800 pt-6">
            <div className="bg-pink-50 dark:bg-pink-950/30 rounded-lg p-5">
              <h3 className="text-base sm:text-lg font-semibold text-pink-700 dark:text-pink-400 mb-2">
                Cuenta
              </h3>
              <p className="text-pink-600 dark:text-pink-300 font-medium mb-1 text-sm sm:text-base">
                Eliminar mi cuenta
              </p>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-4">
                Esta acción es permanente y no se puede deshacer
              </p>
              <Button className="bg-pink-600 hover:bg-pink-700 text-white text-sm sm:text-base">
                Eliminar
              </Button>
            </div>
          </div>

          {/* Save Button */}
          <Button className="w-full bg-[#631973] hover:bg-[#50145d] py-5 sm:py-6 text-base sm:text-lg text-white transition-colors">
            Guardar Cambios
          </Button>
        </div>
      </div>
    </div>
  )
}
