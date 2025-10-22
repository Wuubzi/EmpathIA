# EmpathIA – Sistema de Análisis de Riesgo Emocional

![EmpathIA Banner](https://i.pinimg.com/736x/7b/d1/ff/7bd1ff257306c2649d3da3e892a15b2d.jpg)

**EmpathIA** es una solución agéntica que utiliza inteligencia artificial para analizar publicaciones textuales y detectar señales de riesgo emocional en usuarios, ofreciendo respuestas empáticas y alertas preventivas hacia profesionales de apoyo o instituciones especializadas.

Este proyecto fue desarrollado durante una hackathon de 48 horas con un enfoque interdisciplinario, ético y técnico, combinando ingeniería de software, IA y bienestar mental.

---

## 🎯 Objetivo general
Desarrollar un sistema agéntico capaz de **analizar texto en tiempo real**, identificar niveles de riesgo emocional y **generar intervenciones preventivas** (alertas o acompañamiento) para contribuir a la detección temprana de crisis emocionales.

---

## ⚙️ Objetivos específicos
- Implementar un **agente colaborativo (L2)** basado en el modelo de autonomía de la Universidad de Washington.
- Detectar emociones y clasificar riesgo en tres niveles: **Bajo**, **Moderado** y **Alto**.
- Enviar alertas automáticas a **profesionales y organizaciones** cuando se detecten señales de riesgo alto.
- Garantizar **seguridad de datos, ética y transparencia** en la interacción con el usuario.

---

## 🧠 Arquitectura general
El sistema está compuesto por tres capas principales:

1. **Frontend (React):** Interfaz tipo red social donde el usuario puede crear publicaciones, visualizar su perfil y recibir alertas.
2. **Backend (Spring Boot):** Lógica del agente, análisis de riesgo, comunicación con el MCP y control del flujo de datos.
3. **Base de datos (Supabase):** Estructura relacional con entidades de usuarios, publicaciones, análisis, alertas y contactos.


---

## 💡 Principales características
- Análisis emocional automático en tiempo real.  
- Clasificación de riesgo con base en contexto semántico.  
- Generación de alertas preventivas y correos a profesionales.  
- Chat de acompañamiento empático.  
- Seguimiento del estado emocional del usuario.  
- Cumplimiento de Habeas Data (Ley 1581/2012 – Colombia).

---

## 📊 Base de datos
Modelo relacional basado en entidades como:
- `USUARIOS`
- `PUBLICACIONES`
- `ANALISIS_RIESGO`
- `RESPUESTAS_APOYO`
- `ALERTAS`
- `PROFESIONALES_APOYO`
- `ORGANIZACIONES_AYUDA`
- `SEGUIMIENTO_USUARIO`
- `CONTACTOS_EMERGENCIA`

Ver documento completo en [`DATABASE_MODEL.md`](./DATABASE_MODEL.md)

---

## 🧩 Nivel de autonomía
EmpathIA opera actualmente en **L2 – User as a Collaborator**, permitiendo la colaboración entre usuario y agente sin automatización crítica.

| Fase | Nivel | Descripción |
|------|-------|-------------|
| MVP (Hackathon) | **L2 – Collaborator** | El agente sugiere y analiza, sin ejecutar acciones sin supervisión. |
| 6 meses | **L3 – Consultant** | Recomendaciones más complejas, con trazabilidad de decisiones. |
| 1 año | **L4 – Approver** | Capacidad de ejecutar acciones automáticas tras revisión mínima. |
| 3 años | **L5 – Observer** | Autonomía supervisada, intervenciones en tiempo real. |

---

## 🗺️ Roadmap
Consulta la evolución planificada del producto en [`ROADMAP.md`](./ROADMAP.md)

---

## 👥 Equipo
Proyecto desarrollado por el **Equipo 01 – Hackathon 2025**  
Ver funciones y roles en [`TEAM.md`](./TEAM.md)

---

## 📜 Licencia
Este proyecto se distribuye bajo la licencia MIT.  
Ver detalles en [`LICENSE`](./LICENSE)
