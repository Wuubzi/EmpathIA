# Reference — EmpathIA (quick technical reference)

Quick reference for developers, reviewers and integrators: endpoints, code locations, JSON schemas, and local development commands. Keep this file in sync with implementations.

## Primary endpoints

- POST /api/agent/analyze — Input: JSON with field `text`. Returns an object containing `risk_level`, `empathy_response`, `recommendation`, `confidence`, `analysis_id`, and `alert_triggered`.

Example source locations:

- `mcpServer/src/main/java/...` — MCP Server controllers and services.
- `EmpathIA-mcp/src/main/java/...` — MCP modules.
- Frontend caller: `emotion-analyzer/app/...` (components under `emotion-analyzer/app/components/`).

## JSON Schema (contract)

Request schema (partial):

```json
{
  "$id": "https://example.com/schemas/agent-request.json",
  "type": "object",
  "required": ["text"],
  "properties": {
    "text": { "type": "string", "minLength": 1 },
    "source": { "type": "string" },
    "user_id": { "type": "string" }
  }
}
```

Response schema (partial):

```json
{
  "$id": "https://example.com/schemas/agent-response.json",
  "type": "object",
  "required": ["risk_level","empathy_response"],
  "properties": {
    "risk_level": { "type": "string", "enum": ["low","medium","high"] },
    "empathy_response": { "type": "string" },
    "recommendation": { "type": "string" },
    "confidence": { "type": "number" },
    "analysis_id": { "type": "string", "format": "uuid" },
    "alert_triggered": { "type": "boolean" }
  }
}
```

The schemas are included in the repository for use in tests and CI validation:

- `docs/schemas/agent-request.json` — request schema (required: `text`).
- `docs/schemas/agent-response.json` — response schema (required: `risk_level`, `empathy_response`).

Recommended validators: AJV (Node) or a JSON Schema library in Java for CI validation.

## Code locations (summary)

- Controllers and request/response handlers: `mcpServer/src/main/java/...`
- Agent logic and prompt templates: `EmpathIA-mcp/src/main/java/...` or `EmpathIA-backend/`
- Frontend components that call the API: `emotion-analyzer/app/components/`

## Useful commands (local development)

Frontend (PowerShell):

```powershell
cd .\emotion-analyzer; pnpm install; pnpm dev
```

Backend (Gradle wrapper, PowerShell):

```powershell
cd .\mcpServer\mcpServer; .\gradlew.bat bootRun
```

## Quick table of contents

- `docs/AGENT_DESIGN.md` — Contract, decision logic and best practices.
- `docs/ARCHITECTURE.md` — Architecture diagram and data flow.
- `docs/DATABASE_MODEL.md` — Database schema.
- `docs/TESTING_STRATEGY.md` — Testing strategy and sample cases.
- `docs/REFERENCE.md` — (this file) commands, paths and schemas.

Notes:
- Paths and commands assume the repository root contains this `docs/` directory.
