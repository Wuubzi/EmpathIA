# System Architecture — EmpathIA

This document describes the architecture of EmpathIA, a modular AI system for emotional-risk analysis of short user text. It is written for engineers and reviewers and focuses on component responsibilities, data flow, observability, security and deployment considerations.

Important: the frontend includes a social-style UI for demonstration only. EmpathIA is not a social platform; it is an analytical system that evaluates text and issues supportive responses and alerts when required.

## High-level overview

User client (Next.js) → MCP Server (Spring IA) → Agent service (Spring Boot) → LLM (Amazon Bedrock) → Persistence (Supabase/Postgres)

Sequence summary:

1. Client submits text (POST /api/agent/analyze).
2. MCP Server validates and forwards request to the agent service.
3. Agent service constructs a prompt, calls the LLM, and receives a structured result.
4. Post-processing: apply safety filters, map to normalized schema, persist analysis, and return response to client.

## Components and responsibilities

| Component | Tech / libs | Responsibility | Location (example) |
|---|---|---|---|
| Frontend (client) | Next.js, React, Tailwind, Shadcn UI | Collect user input, display analysis and history; demo UI only | `emotion-analyzer/` (`app/`, `components/`) |
| MCP Server / Gateway | Spring Boot, Spring AI (MCP) | Ingress point for requests, routing, authentication, rate limiting, request validation | `mcpServer/src/main/java/...` |
| Agent service | Spring Boot, Spring AI client | Construct prompts, call LLM, apply safety rules, normalize output | `EmpathIA-mcp/src/main/java/...` or `EmpathIA-backend/` |
| LLM | Amazon Bedrock (`amazon.nova-pro-v1:0`) | Semantic analysis and empathetic response generation | Configured via Spring AI dependencies (`build.gradle`) |
| Database / Persistence | Supabase (Postgres) | Store anonymized analyses, alerts, user metadata, audit logs | Supabase schema (see `docs/DATABASE_MODEL.md`) |
| Notification / Alerting | SMTP / external APIs | Deliver alerts to professionals or admins when `alert_triggered==true` | Backend integration layer |
| Observability | Logging, Metrics, Tracing | Capture request traces, LLM latency, risk distribution, alerts | Backend services + monitoring stack (prometheus/grafana recommended)

## Data model and storage

- Store minimal PII; prefer pseudonymous identifiers (hashes) where possible.
- Persist: analysis records, `analysis_id` (UUID), `model_version`, `risk_level`, `confidence`, and `alert` records.
- Referential schema and examples live in `docs/DATABASE_MODEL.md`.

## API contract (key endpoint)

- POST /api/agent/analyze
	- Request: JSON (see `docs/schemas/agent-request.json`) — required field: `text`.
	- Response: JSON (see `docs/schemas/agent-response.json`) — required fields: `risk_level`, `empathy_response`.

## Data flow (detailed)

1. Client POSTs text → MCP Server.
2. MCP Server authenticates (optional), validates JSON schema, and forwards to agent service.
3. Agent service:
	 - Enriches payload with metadata (source, timestamps).
	 - Calls LLM with a controlled prompt and model version.
	 - Receives LLM output and runs safety & anti-hallucination filters.
	 - Maps LLM output to canonical response schema.
4. Persist canonical analysis to Supabase and, if `alert_triggered == true`, create an alert record and call notification channels.
5. Return canonical response to client; optionally stream status updates for long-running LLM calls.

## Safety, moderation and filtering

- Implement a safety layer that removes or neutralizes harmful instructions, medical directives, and personally identifying content from the LLM output before persistence or display.
- Use deterministic rule-based checks and a small classifier ensemble for high-risk detection; log decisions for audit.
- For HIGH-risk outputs, flag `alert_triggered` and initiate escalation workflow (non-automated handoff to professional services is recommended).

## Observability & metrics

- Log per-request: `analysis_id`, `model_version`, `risk_level`, `confidence`, `latency_ms`, `source`.
- Metrics to collect: LLM call latency (p50/p95), distribution of `risk_level` over time, alerts per hour, failed validations.
- Tracing: instrument MCP Server and agent service spans for end-to-end latency analysis.

## Security & privacy

- Minimize PII storage: store hashed identifiers when user identity is not required.
- Secure LLM and Supabase credentials using environment variables and secret stores (Vault/Secrets Manager).
- Ensure transport security (TLS) for all network calls; enforce authentication/authorization on MCP endpoints.

## Deployment recommendations

- Run backend JVM services behind a reverse proxy (NGINX) with TLS termination.
- Use autoscaling policies for agent and MCP services to handle LLM request bursts.
- Keep LLM calls idempotent where possible and implement request rate-limiting.

## Example action flow (concise)

Client → POST /api/agent/analyze → MCP Server (validation) → Agent service (LLM call) → Safety filter → Persist → Notification (if needed) → Response to client

## References

- JSON Schemas: `docs/schemas/agent-request.json`, `docs/schemas/agent-response.json`.
- Data model: `docs/DATABASE_MODEL.md`.
- Dev / run commands: `docs/REFERENCE.md`.

