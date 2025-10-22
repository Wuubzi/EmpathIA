"use client"

import { useState } from "react"
import { NavigationBar } from "@/components/navigation-bar"
import { HomeScreen } from "@/components/home-screen"
import { ComposeScreen } from "@/components/compose-screen"
import { EmotionalAlertModal } from "@/components/emotional-alert-modal"
import { SupportChat } from "@/components/support-chat"
import { ProfileSettings } from "@/components/profile-settings"
import { PostHistory } from "@/components/post-history"
import { AuthScreen } from "@/components/auth-screen"

export type Screen = "home" | "compose" | "modal" | "chat" | "profile" | "history"

export default function Page() {
  const [screen, setScreen] = useState<Screen>("home")
  const [showModal, setShowModal] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  if (!isAuthenticated) {
    return <AuthScreen setScreen={setScreen} onLogin={() => setIsAuthenticated(true)} />
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {<NavigationBar setScreen={setScreen} currentScreen={screen} />}
      {screen === "home" && <HomeScreen setScreen={setScreen} />}
      {screen === "compose" && <ComposeScreen setScreen={setScreen} setShowModal={setShowModal} />}
      {screen === "chat" && <SupportChat setScreen={setScreen} />}
      {screen === "profile" && <ProfileSettings setScreen={setScreen} />}
      {screen === "history" && <PostHistory setScreen={setScreen} />}

      {showModal && <EmotionalAlertModal setScreen={setScreen} setShowModal={setShowModal} />}
    </div>
  )
}
