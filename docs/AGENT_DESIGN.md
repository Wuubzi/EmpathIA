# Agent design — EmpathIA

This document is a concise, technical specification of the EmpathIA agent. It is focused on the agent contract, lifecycle, decision logic, safety rules and observability.

Important: EmpathIA is NOT a social support network. The frontend simulates a social-style UI for demonstration only. EmpathIA is an analytical, assistive system that provides supportive messages and recommendations — it does not replace professional care.

## Purpose

The EmpathIA agent analyzes short user texts, classifies emotional risk (LOW / MEDIUM / HIGH), generates a concise empathetic response and recommends safe next steps. The agent is intended for early detection and supportive intervention only.
The agent is rule-based, auditable, and fully aligned with EmpathIA’s ethical guidelines for emotional AI.  
It **does not replace professional diagnosis**, but assists in early emotional risk detection and support.

## Overview

| Agent              | Purpose                                                                                          | LLM Model                             | Autonomy Level        |
| ------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------- | --------------------- |
| **EmpathIA-Agent** | Analyze emotional tone, assess risk, generate empathetic responses, and provide recommendations. | Amazon Bedrock `amazon.nova-pro-v1:0` | **L2 – Collaborator** |

## Contract (request → response)

- Minimal request example (application/json):

```json
{ "text": "I feel hopeless and tired" }
```

- Minimal response schema (application/json):

```json
{
  "risk_level": "low|medium|high",
  "empathy_response": "short empathetic message",
  "recommendation": "brief safe suggestion (optional)",
  "analysis_id": "uuid-v4",
  "alert_triggered": false
}
```

See formal JSON Schemas in `docs/schemas/agent-request.json` and `docs/schemas/agent-response.json`.

Recommended metadata fields: `model_version`, `metadata.source`, `timestamp`.

## High-level flow

1. Frontend (Next.js) sends POST /api/agent/analyze with JSON payload.
2. MCP Server (Spring IA) validates the payload and routes the request to the agent service.
3. Agent service calls the LLM (Amazon Bedrock) via Spring AI.
4. Post-process: safety filters, response normalization, persistence to Supabase, and response returned to the client.

Key implementation locations:

- Frontend: `emotion-analyzer/` (see `app/` and `app/components/`).
- MCP Server and agent services: `mcpServer/src/main/java/...`, `EmpathIA-mcp/src/main/java/...`.
- LLM-related code and dependency management: `EmpathIA-backend/build.gradle`.

## Decision logic (summary)

|  Level | Example signals                                      | System action (automated)                                                          |
| -----: | ---------------------------------------------------- | ---------------------------------------------------------------------------------- |
|    LOW | Neutral or positive expressions                      | Short reinforcing message                                                          |
| MEDIUM | Persistent sadness, fatigue, hopelessness (moderate) | Empathetic response + self-care suggestions                                        |
|   HIGH | Suicidal ideation, self-harm, imminent danger        | Empathetic response + recommend professional contact; set `alert_triggered = true` |

The LLM output must be sanitized by a safety filter before persistence or display.

## Safety & compliance

- The agent must never provide medical, legal, or clinical instructions.
- For HIGH risk, the system should prioritize escalation logic (alerts to professionals / administrators) while preserving user privacy.
- Minimize storing PII. Prefer hashed or pseudonymized identifiers when persisting user-related data.

## Observability & auditability

- Include `analysis_id` (UUID) and `model_version` in every response for traceability.
- Log LLM request/response latency and classification distribution (`risk_level`) for monitoring.
- Recommended metrics: LLM latency, confidence distribution, alerts per period.

## Testing & validation

- Keep fixtures for typical inputs/outputs under `tests/fixtures/`.
- Validate request/response shapes against the JSON Schemas in CI using AJV (Node) or a Java JSON Schema library.
- Mock LLM calls in CI to run deterministic tests (reduce Bedrock costs and latency). See `docs/TESTING_STRATEGY.md`.

## Example

Request:

```json
{ "text": "I don't want to live anymore" }
```

Example response (contract-compliant):

```json
{
  "risk_level": "high",
  "empathy_response": "I'm really sorry you're feeling this way. You are not alone.",
  "recommendation": "Please contact local emergency services or a crisis hotline immediately.",
  "analysis_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "alert_triggered": true
}
```

## References

- JSON Schemas: `docs/schemas/agent-request.json`, `docs/schemas/agent-response.json`.
- Quick reference and dev commands: `docs/REFERENCE.md`.

---

### Prompt Structure

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

````

## Example: Integration with Facebook

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
  "analysis_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "alert_triggered": true

}
````

4. Facebook can use that output to:

   - Display empathetic suggestions under the post.
   - Trigger in-app mental health resources.

### Summary Table

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
