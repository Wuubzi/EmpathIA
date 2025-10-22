"use client"

import { Home, FileText, Settings, MessageCircle } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import type { Screen } from "@/app/page"
import logo from "../public/logo_empathIA.png"
import Image from "next/image"

interface NavigationBarProps {
  setScreen: (screen: Screen) => void
  currentScreen: Screen
}

export function NavigationBar({ setScreen, currentScreen }: NavigationBarProps) {
  const navItems = [
    { id: "home" as Screen, label: "Dashboard", icon: Home },
    { id: "history" as Screen, label: "My Posts", icon: FileText },
    { id: "profile" as Screen, label: "Settings", icon: Settings },
    { id: "chat" as Screen, label: "AI Chat", icon: MessageCircle },
  ]

  return (
    <header className="bg-white dark:bg-zinc-900 border-b border-purple-100 dark:border-purple-900 sticky top-0 z-10 shadow-sm transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image src={logo} alt="EmpathIA" width={150} priority />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setScreen(item.id)}
                className={`font-medium transition-all duration-200 pb-1 ${
                  currentScreen === item.id
                    ? "text-[#631973] border-b-2 border-[#631973]"
                    : "text-gray-600 dark:text-gray-400 hover:text-[#631973] dark:hover:text-[#b87be6]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center gap-2">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => setScreen(item.id)}
                  className={`p-2 rounded-lg transition-colors ${
                    currentScreen === item.id
                      ? "bg-[#f3e6f9] text-[#631973]"
                      : "text-gray-600 dark:text-gray-400 hover:bg-[#f8f0fb] dark:hover:bg-[#2a082f]"
                  }`}
                  aria-label={item.label}
                >
                  <Icon className="w-5 h-5" />
                </button>
              )
            })}
          </div>

          {/* User Avatar */}
          <Avatar className="cursor-pointer w-8 h-8 sm:w-10 sm:h-10 ring-2 ring-transparent hover:ring-[#631973] transition-all">
            <AvatarImage src="../public/placeholder-user.svg" alt="User avatar" />
            <AvatarFallback className="bg-[#f3e6f9] text-[#631973] font-semibold">AR</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}
