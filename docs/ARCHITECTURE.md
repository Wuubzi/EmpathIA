# 🧱 System Architecture — EmpathIA

EmpathIA is an **AI-powered emotional risk analysis system**, designed to detect, classify, and respond empathetically to user-generated content.  
Although the MVP interface simulates a social media environment, **EmpathIA is *not* a social network**.  
Its purpose is analytical: to process texts from external sources (e.g., Facebook, X, Instagram) and return an emotional risk assessment with an empathetic recommendation.

---

## 🧠 High-Level Overview

Frontend (React Simulation) → MCP Server (Spring IA) → LLM (Amazon Bedrock – Nova Pro) → Supabase (Storage)


The system follows a **modular, event-driven architecture**, allowing scalability, interoperability, and AI-driven decision logging.  
All components communicate via REST APIs and JSON payloads.

---

## 🧩 Main Components

| Layer | Technology | Description |
|--------|-------------|--------------|
| **Frontend (Simulation)** | React + Next.js + Shadcn UI | Provides a simulated social media experience for MVP testing. Users post messages, view emotional feedback, and interact with a chatbot. |
| **Backend (MCP Server)** | Spring Boot + Spring AI | Orchestrates message flow, connects to the LLM (Amazon Bedrock), and ensures secure data transmission to Supabase. |
| **LLM Layer** | Amazon Bedrock – `amazon.nova-pro-v1:0` | Performs emotional tone detection, risk classification, empathetic response generation, and recommendation. |
| **Database Layer** | Supabase (PostgreSQL) | Manages structured data (posts, analyses, responses, alerts). Enables monitoring, history, and compliance logs. |

---

## ⚙️ Detailed Architecture Flow

### 1️⃣ Frontend Layer (Simulation UI)
- Built with **React + Tailwind + Shadcn UI**.  
- Simulates posting, analysis visualization, and empathetic chat.  
- Routes are managed locally; all requests are sent to the **MCP Server**.  
- Responsible for rendering:
  - Emotional feedback cards  
  - User history (PostHistory)  
  - Chat interface (SupportChat)  

**Example Action Flow:**
User writes post → clicks “Analyze & Publish” → sends text to MCP Server


---

### 2️⃣ Backend Layer (MCP Server – Spring IA)
- Core orchestrator of EmpathIA.
- Receives posts or text input from frontend or external API (e.g., Facebook).
- Executes:
  1. Data validation  
  2. JSON formatting  
  3. LLM request to **Amazon Bedrock**  
  4. Response interpretation  
  5. Persistence into Supabase  

**Endpoint:**  
`POST /api/agent/analyze`

**Example Workflow:**
```text
Frontend → MCP → Bedrock → JSON Output → Supabase + Frontend Response

| Module               | Function                                                       |
| -------------------- | -------------------------------------------------------------- |
| `AnalysisController` | Handles all `/api/agent/analyze` requests.                     |
| `LLMService`         | Connects with Amazon Bedrock’s `nova-pro-v1:0` model.          |
| `SafetyFilter`       | Removes unsafe or diagnostic language before saving responses. |
| `SupabaseService`    | Stores emotional analysis, user metadata, and logs.            |
