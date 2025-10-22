"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Brain, Mail, Lock, User } from "lucide-react"
import type { Screen } from "@/app/page"

interface AuthScreenProps {
  setScreen: (screen: Screen) => void
  onLogin: () => void
}

export function AuthScreen({ setScreen, onLogin }: AuthScreenProps) {
  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")
  const [signupName, setSignupName] = useState("")
  const [signupEmail, setSignupEmail] = useState("")
  const [signupPassword, setSignupPassword] = useState("")
  const [signupConfirmPassword, setSignupConfirmPassword] = useState("")

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (loginEmail && loginPassword) {
      onLogin()
      setScreen("home")
    }
  }

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault()
    if (signupName && signupEmail && signupPassword && signupPassword === signupConfirmPassword) {
      onLogin()
      setScreen("home")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#631973] rounded-2xl mb-4 shadow-md">
            <Brain className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">EmpathIA</h1>
          <p className="text-gray-600">Análisis emocional inteligente</p>
        </div>

        {/* Auth Card */}
        <Card className="border-0 shadow-xl bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm">
          <CardHeader className="space-y-1 pb-4">
            <CardTitle className="text-2xl text-center text-[#631973]">Bienvenido</CardTitle>
            <CardDescription className="text-center text-gray-600 dark:text-gray-400">
              Inicia sesión o crea una cuenta para continuar
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6 bg-purple-100 dark:bg-purple-900/40">
                <TabsTrigger
                  value="login"
                  className="data-[state=active]:bg-[#631973] data-[state=active]:text-white"
                >
                  Iniciar Sesión
                </TabsTrigger>
                <TabsTrigger
                  value="signup"
                  className="data-[state=active]:bg-[#631973] data-[state=active]:text-white"
                >
                  Registrarse
                </TabsTrigger>
              </TabsList>

              {/* Login Tab */}
              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="login-email">Correo Electrónico</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="login-email"
                        type="email"
                        placeholder="tu@email.com"
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="login-password">Contraseña</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="login-password"
                        type="password"
                        placeholder="••••••••"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#631973] hover:bg-[#4f1260] text-white transition-colors"
                    size="lg"
                  >
                    Iniciar Sesión
                  </Button>

                  <div className="text-center">
                    <button
                      type="button"
                      className="text-sm text-[#631973] hover:text-[#4f1260] hover:underline"
                    >
                      ¿Olvidaste tu contraseña?
                    </button>
                  </div>
                </form>
              </TabsContent>

              {/* Signup Tab */}
              <TabsContent value="signup">
                <form onSubmit={handleSignup} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signup-name">Nombre Completo</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="signup-name"
                        type="text"
                        placeholder="Tu nombre"
                        value={signupName}
                        onChange={(e) => setSignupName(e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Correo Electrónico</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="signup-email"
                        type="email"
                        placeholder="tu@email.com"
                        value={signupEmail}
                        onChange={(e) => setSignupEmail(e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signup-password">Contraseña</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="signup-password"
                        type="password"
                        placeholder="••••••••"
                        value={signupPassword}
                        onChange={(e) => setSignupPassword(e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signup-confirm-password">Confirmar Contraseña</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="signup-confirm-password"
                        type="password"
                        placeholder="••••••••"
                        value={signupConfirmPassword}
                        onChange={(e) => setSignupConfirmPassword(e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  {signupPassword && signupConfirmPassword && signupPassword !== signupConfirmPassword && (
                    <p className="text-sm text-red-500">Las contraseñas no coinciden</p>
                  )}

                  <Button
                    type="submit"
                    className="w-full bg-[#631973] hover:bg-[#4f1260] text-white transition-colors"
                    size="lg"
                    disabled={signupPassword !== signupConfirmPassword}
                  >
                    Crear Cuenta
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <p className="text-center text-sm text-gray-500 mt-6">
          Al continuar, aceptas nuestros Términos de Servicio y Política de Privacidad
        </p>
      </div>
    </div>
  )
}
