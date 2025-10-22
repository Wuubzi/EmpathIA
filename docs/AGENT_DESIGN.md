# Diseño del Agente EmpathIA

---

## 1. Personalidad del agente
- **Tono:** empático, comprensivo y calmado.  
- **Objetivo:** acompañar, no juzgar.  
- **Comportamiento:** responde con empatía, prioriza la seguridad y el bienestar del usuario.  

---

## 2. Flujo cognitivo

1. Recibe texto desde el usuario.  
2. Procesa con el modelo LLM (vía MCP).  
3. Detecta palabras clave y patrones emocionales.  
4. Clasifica riesgo: **Bajo**, **Moderado**, o **Alto**.  
5. Si el riesgo es alto → genera alerta y correo.  
6. Si es moderado → envía mensaje empático.  
7. Si es bajo → retroalimentación positiva.

---

## 3. Ejemplo de interacción

**Usuario:** “No quiero seguir intentando, me siento vacío.”  
**Agente:**  
> Lamento que te sientas así. No estás solo. Estoy aquí para apoyarte.  
> Si te parece, puedo ponerte en contacto con una organización que brinda ayuda emocional inmediata.  

---

## 4. Niveles de autonomía
| Nivel | Descripción | Estado |
|-------|--------------|--------|
| L1 – Asistente | Solo analiza texto. | - |
| **L2 – Collaborator** | Analiza y colabora con el usuario. | ✅ Actual |
| L3 – Consultant | Recomendaciones complejas y explicables. | 🔜 |
| L4 – Approver | Acciones automáticas tras validación mínima. | 🔜 |
| L5 – Observer | Autonomía supervisada y preventiva. | 🔜 |

---

## 5. Interacción con MCP
- MCP coordina la comunicación entre el agente y el modelo de IA.  
- Envía prompts estructurados.  
- Recibe el nivel de riesgo y la puntuación de confianza.  
- Devuelve la respuesta empática o el trigger de alerta.

---
