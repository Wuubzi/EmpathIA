# Arquitectura del Sistema – EmpathIA

---

## 1. Visión general

EmpathIA se basa en una arquitectura **cliente-servidor con componentes IA desacoplados** mediante el MCP (Model Control Protocol).  
El objetivo es mantener la escalabilidad, la trazabilidad y la posibilidad de mejorar el agente de manera modular.

---

## 2. Componentes principales

### **Frontend (React)**
- CRUD de publicaciones.  
- Perfil del usuario y sus publicaciones anteriores.  
- Sistema de alertas visual.  
- Chat de acompañamiento empático.  

### **Backend (Spring Boot)**
- Controlador principal de análisis de riesgo.  
- Integración con MCP y LLM.  
- Lógica de envío de alertas vía correo.  
- API REST para comunicación con el frontend.

### **Base de datos (Supabase / PostgreSQL)**
- Entidades relacionales con índices optimizados.  
- Trazabilidad de publicaciones, análisis y alertas.  
- Registros históricos de seguimiento emocional.

---

## 3. Flujo de interacción

[Usuario]
↓
[Frontend React]
↓
[API Spring Boot]
↓
[MCP + LLM] → [Clasificación de riesgo] → [Supabase]
↓
[Respuesta empática o alerta]


---

## 4. Flujo de alertas

1. El usuario realiza una publicación.  
2. El agente analiza el texto con el LLM.  
3. Si se detecta riesgo **alto**, se genera una alerta en la BD.  
4. El sistema busca en la tabla de **profesionales u organizaciones** el correo más relevante.  
5. Se envía automáticamente un mensaje de advertencia con los datos del caso.  

---

## 5. Seguridad y cumplimiento
- Cumplimiento de **Ley 1581/2012 (Habeas Data – Colombia)**.  
- Cifrado de credenciales en Supabase.  
- Validación de inputs del usuario.  
- Control de roles (usuario, analista, profesional).

---

## 6. Escalabilidad futura
- Integración de dashboards analíticos.  
- Soporte para análisis multimodal (texto + voz).  
- Microservicios para módulos de IA.  
