# 🩺 EmpathIA – Emotional Risk Analysis System

<p align="center">
  <img src="https://i.imgur.com/xYQvMNr.jpeg" alt="EmpathIA Banner" width="600px" style="border-radius: 12px;">
</p>

> **"Understanding emotions to save lives."**  
> *Compreender emoções para salvar vidas.* 🇧🇷  
> *Emotionen verstehen, um Leben zu retten.* 🇩🇪  

---

## 📁 Project Structure
This repository is divided into **three main folders**, each managed by one team member:

| Folder | Responsible | Area |
|---------|--------------|------|
| `/backend` | **Carlos Salas** | Database, Backend & MCP Integration |
| `/frontend` | **Zharick Londoño** | UI Development & Documentation |
| `/llm` | **Santiago Palomino** | LLM, Dataset & Supabase |

---

## 🎯 General Objective
Design and implement an **AI-driven emotional risk detection system** that analyzes social media posts in real time to **identify emotional distress levels** and **trigger preventive actions** such as empathetic chatbot responses or alerts to mental health professionals.  

> 💬 *Helping people before the crisis becomes visible.*  
> *Ajudar as pessoas antes que a crise seja visível.* 🇧🇷  
> *Menschen helfen, bevor die Krise sichtbar wird.* 🇩🇪  

---

## ⚙️ Specific Objectives
- **Develop** a multi-agent ecosystem capable of analyzing user-generated text with natural language processing (NLP) to classify emotional risk into **Low, Medium, and High** levels.  
- **Automate** preventive responses such as chatbot engagement or sending **email alerts** to support institutions.  
- **Integrate** an ethical, transparent, and secure data workflow ensuring compliance with **privacy laws (Habeas Data – Law 1581/2012, Colombia)**.  
- **Deploy** a modular architecture allowing easy scalability and interoperability between **frontend, backend, and Supabase**.  
- **Empower** social good through emotional AI that promotes digital well-being and mental health awareness.  

---

## 🧠 System Architecture

EmpathIA is structured in **three main layers**:

1. 🖥️ **Frontend (React)**  
   - Social media–style interface where users can post messages, receive emotional feedback, and access empathetic chat assistance.  
   - Includes **visual analytics dashboards** to track emotional trends.

2. ⚙️ **Backend (Spring Boot + MCP)**  
   - Core logic handling message flow, emotional classification, and alert triggering.  
   - Manages communication between the **LLM**, Supabase, and the web interface.  
   - Uses **modular agents** for emotional detection, response generation, and alert prioritization.

3. 🗄️ **Database Layer (Supabase + PostgreSQL)**  
   - Stores user profiles, emotional analyses, alerts, and professional contacts.  
   - Ensures **traceability, anonymization, and data ethics**.

---

## 💡 Key Features
- 🧩 Real-time emotional analysis and risk detection.  
- 🤖 Empathetic chatbot intervention powered by LLM.  
- ⚠️ Automatic alerts for high-risk emotional content.  
- 📧 Email notifications to certified professionals.  
- 📊 Emotional tracking and visualization over time.  
- 🔐 Full compliance with ethical and legal data frameworks.  
- 🌐 Multi-language support for global scalability.  

> *Tecnologia com propósito humano.* 🇧🇷  
> *Technologie mit menschlichem Zweck.* 🇩🇪  

---

## 📊 Database Schema

Entities and relationships implemented in Supabase (PostgreSQL):

- `USERS`
- `POSTS`
- `RISK_ANALYSIS`
- `SUPPORT_RESPONSES`
- `ALERTS`
- `MENTAL_HEALTH_PROFESSIONALS`
- `SUPPORT_ORGANIZATIONS`
- `USER_MONITORING`
- `EMERGENCY_CONTACTS`

See full schema in [`DATABASE_MODEL.md`](./DATABASE_MODEL.md)

---

## 🧩 Autonomy Level

EmpathIA currently operates under **L2 – User as a Collaborator**, according to the University of Washington’s autonomy model.  
The agent collaborates with users but does not act without supervision.

| Phase | Level | Description |
|-------|--------|-------------|
| 🧠 MVP (Hackathon) | **L2 – Collaborator** | AI suggests actions and analyzes content with user consent. |
| 🧩 6 months | **L3 – Consultant** | Semi-automatic actions with logged decision tracking. |
| ⚙️ 1 year | **L4 – Approver** | Automated decisions after minimal human review. |
| 🛰️ 3 years | **L5 – Observer** | Real-time autonomous supervision and proactive interventions. |

---

## 🗺️ Roadmap

| Stage | Focus | Outcome |
|--------|--------|----------|
| ✅ **Hackathon (MVP)** | Core model + basic UI | Emotional classification + chatbot |
| 🚧 **Q1 2026** | MCP integration + Supabase link | Secure data flow |
| ⚙️ **Q2 2026** | Advanced LLM tuning | Contextual empathy |
| 💬 **Q3 2026** | Frontend refinement | Real-time dashboard |
| 🌍 **Q4 2026** | Pilot deployment | Scalable user testing |

---

## 👥 Team

<p align="center">
  <img src="https://i.pinimg.com/736x/91/99/a0/9199a097b7a6ac76bd519f2e1a635514.jpg" width="130" style="border-radius: 50%; margin: 10px;">
  <img src="https://i.pinimg.com/736x/91/99/a0/9199a097b7a6ac76bd519f2e1a635514.jpg" width="130" style="border-radius: 50%; margin: 10px;">
  <img src="https://i.pinimg.com/736x/91/99/a0/9199a097b7a6ac76bd519f2e1a635514.jpg" width="130" style="border-radius: 50%; margin: 10px;">
</p>

<table align="center">
  <tr>
    <td align="center"><b>Carlos Salas</b><br>🗄️ Database Design<br>⚙️ Backend & API<br>🧩 MCP Integration</td>
    <td align="center"><b>Zharick Londoño</b><br>🎨 Frontend (React)<br>🧾 Documentation<br>💬 UX Empathy Flow</td>
    <td align="center"><b>Santiago Palomino</b><br>🧠 LLM Development<br>📊 Dataset Creation<br>🗃️ Supabase Management</td>
  </tr>
</table>

---

## 📜 License
This project is distributed under the **MIT License**.  
See [`LICENSE`](./LICENSE) for details.  

> *Livre para inovar e compartilhar.* 🇧🇷  
> *Frei zu innovieren und zu teilen.* 🇩🇪  

---

## 🧰 Technologies Used

<p align="center">
  <img src="https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white&style=for-the-badge">
  <img src="https://img.shields.io/badge/PostgreSQL-316192?logo=postgresql&logoColor=white&style=for-the-badge">
  <img src="https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB&style=for-the-badge">
  <img src="https://img.shields.io/badge/Supabase-3ECF8E?logo=supabase&logoColor=white&style=for-the-badge">
  <img src="https://img.shields.io/badge/Spring_Boot-6DB33F?logo=springboot&logoColor=white&style=for-the-badge">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black&style=for-the-badge">
</p>

---

<p align="center"><i>EmpathIA – More than AI, a companion for emotional well-being.</i><br>
<i>Mais que IA, um companheiro de bem-estar emocional. 🇧🇷</i><br>
<i>Mehr als KI, ein Begleiter für emotionales Wohlbefinden. 🇩🇪</i></p>


