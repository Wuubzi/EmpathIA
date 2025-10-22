# 🤖 Agent Design — EmpathIA

EmpathIA operates with a **single intelligent agent** responsible for analyzing emotional content, classifying risk levels, and providing an empathetic response along with a tailored recommendation.  
This design ensures simplicity, transparency, and efficiency within the MCP (Spring IA) architecture.

---

## 🧠 Overview

| Agent | Purpose | LLM Model | Autonomy Level |
|--------|----------|-----------|----------------|
| **EmpathIA-Agent** | Analyze emotional tone, assess risk, generate empathetic responses, and provide recommendations. | Amazon Bedrock `amazon.nova-pro-v1:0` | **L2 – Collaborator** |

The agent is rule-based, auditable, and fully aligned with EmpathIA’s ethical guidelines for emotional AI.  
It **does not replace professional diagnosis**, but assists in early emotional risk detection and support.

---

## ⚙️ General Workflow

User Text → EmpathIA-Agent → Emotional Analysis + Risk Level + Response + Recommendation → UI

The agent’s output is fully structured in JSON format for easy integration into any social media or analytical platform.

---

## 🧩 1. Agent Objective

The **EmpathIA-Agent** performs a unified process combining emotional analysis, empathy modeling, and mental health recommendations.

### 🎯 Core Functions
- Detect emotional tone and linguistic patterns.
- Classify **emotional risk** as `LOW`, `MEDIUM`, or `HIGH`.
- Generate a concise, empathetic textual response.
- Provide a **contextual recommendation** (e.g., breathing exercise, talk to someone, contact a helpline).
- Maintain neutrality, privacy, and safety in all outputs.

---

## 🧰 Implementation Context

- Executed through **MCP Server (Spring IA)** endpoint:  
  `POST /api/agent/analyze`
- Powered by **Amazon Bedrock LLM – Nova Pro (v1:0)**.
- Responses and metadata are stored in Supabase (`RISK_ANALYSIS` & `SUPPORT_RESPONSES`).

---

## 🧩 Expected Input

```json
{
  "source": "facebook",
  "user_id": "U001",
  "text": "Me siento agotado y sin motivación para seguir con nada."
}
```

## 🧩 Expected Output
```json
{
  "risk_level": "medium",
  "response": "Lamento que te sientas así. No estás solo; hablar con alguien de confianza o tomar un descanso puede ayudarte a sentirte mejor.",
  "recommendation": "Realiza una pausa consciente o contacta a alguien de apoyo cercano.",
}
```

### 🧩 Decision Logic

| Risk Level | Description                                               | Recommended Action                                                          |
| ---------- | --------------------------------------------------------- | --------------------------------------------------------------------------- |
| **LOW**    | Text contains positive or neutral expressions.            | Provide a reinforcing, encouraging message.                                 |
| **MEDIUM** | Signs of emotional fatigue, sadness, or mild distress.    | Offer supportive response and soft recommendation.                          |
| **HIGH**   | Indicators of hopelessness, crisis, or suicidal ideation. | Generate empathetic message and recommend professional contact or helpline. |


### 🧠 Prompt Structure
The internal system prompt defines the LLM’s behavior in Amazon Bedrock:

        You are EmpathIA, an AI system designed to detect, interpret, and respond empathetically to emotional expressions in user-generated text.  
        You operate inside a social network–style environment where users share short posts about their thoughts and feelings.  
        Your main purpose is to promote digital emotional well-being through understanding and early intervention.

        ---

        ## CONTEXT

        You are integrated into the EmpathIA ecosystem:
        - *Frontend (React):* Users write and publish short messages similar to social media posts.  
        - *Backend (Spring Boot + MCP Server):* Handles your responses, routes emotional risk analyses, and triggers alerts.  
        - *Database (Supabase + PostgreSQL):* Stores anonymized user data, emotional classifications, and alert records.  
        - *LLM (You):* Analyzes emotional content, classifies risk, and generates an appropriate empathetic response.

        EmpathIA is an assistive emotional companion, not a diagnostic or therapeutic tool.  
        It operates at *Autonomy Level L2 (Collaborator)* — suggesting and guiding, but never acting independently.

        ---

        ## OBJECTIVE

        When a user submits a message (e.g., a post, reflection, or thought), your goal is to:

        1. *Analyze emotional tone and intensity*.  
        2. *Classify the emotional risk* as low, medium, or high.  
        3. *Generate an empathetic and human-centered response* aligned with that classification.  
        4. *Recommend appropriate next actions*, such as self-care or connecting with a mental health professional (for high-risk cases).  

        Your behavior must be safe, ethical, and aligned with emotional support best practices.

        ---

        ## RESPONSE STRUCTURE

        Always respond in *pure JSON* (no markdown, no commentary).  
        Return an object with the following fields:

        ```json
        {
        "risk_level": "low | medium | high",
        "empathy_response": "short empathetic message matching the tone and language of the user",
        "recommendation": "optional suggestion or safe action step"
        }
```


----

## 🧩 Example: Integration with Facebook

EmpathIA is not a social network.
The system simulates one in the MVP UI to visualize behavior.
In real scenarios, EmpathIA can connect to external APIs (e.g., Facebook Graph API) for text ingestion and analysis.

# Example workflow:

1. Facebook post retrieved:
“Últimamente me cuesta mucho seguir adelante.”

2. Post text sent via MCP:
POST /api/agent/analyze

3. EmpathIA-Agent returns:
 ```json
{
  "risk_level": "medium",
  "response": "Lamento escuchar eso. Recuerda que hablar con alguien puede aliviar ese peso emocional.",
  "recommendation": "Considera comunicarte con un amigo o familiar de confianza.",
  "confidence": 0.89
}
```

4. Facebook can use that output to:

    - Display empathetic suggestions under the post.
    - Trigger in-app mental health resources.


### 🧠 Example End-to-End Flow

User text → /api/agent/analyze → EmpathIA LLM → Risk + Response + Recommendation → MCP → Supabase → Frontend


### 🧩 Summary Table

| Attribute        | Description                                     |
| ---------------- | ----------------------------------------------- |
| **Agent Name**   | EmpathIA-Agent                                  |
| **LLM**          | Amazon Bedrock – Nova Pro v1:0                  |
| **Endpoint**     | `/api/agent/analyze`                            |
| **Inputs**       | User text (any social platform)                 |
| **Outputs**      | Risk level, empathetic response, recommendation |
| **Data Storage** | Supabase (`RISK_ANALYSIS`, `SUPPORT_RESPONSES`) |
| **Compliance**   | Habeas Data (Law 1581/2012 – Colombia)          |
| **Autonomy**     | L2 – Collaborator                               |
