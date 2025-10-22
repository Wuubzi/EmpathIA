# Testing strategy — EmpathIA

Purpose: verify functionality, safety/ethics, and the empathetic quality of the full analysis pipeline.

## Test types and tools

| Type | Tool / location | Purpose |
|---|---|---|
| Unit tests | JUnit (backend) — see `EmpathIA-backend/src/test/java/com/emotionalAnalyzer/EmpathIA/Services`<br>Jest (frontend) | Verify local logic and input validation |
| Integration tests | Postman / Supertest | Validate API endpoints such as `POST /api/agent/analyze` and persistence to Supabase |
| Contract tests | JSON Schema (AJV, Java validators) | Ensure request/response compatibility across services using `docs/schemas/*.json` |
| LLM tests | Mock LLM responses (fixtures/mocks) | Validate classification, response templates and safety in controlled scenarios |
| Ethical validation | Rule-based scripts + manual review | Detect directive or harmful outputs and ensure non-directive, empathetic tone |
| E2E UI tests | Playwright / Cypress | Validate user flows: submit → analyze → view history/alerts |

## Existing backend tests

The repository already contains backend unit/integration tests for core services. See:

`EmpathIA-backend/src/test/java/com/emotionalAnalyzer/EmpathIA/Services`

Include these tests in CI to continuously verify business logic related to analysis scoring, alerting and persistence.

## Example contract test (fixture)

Input (fixture):

```json
{ "text": "No quiero seguir viviendo así" }
```

Minimal assertions:

- `risk_level` === "high"
- `alert_triggered` === true
- `empathy_response` exists and is non-directive
- Response validates against the response JSON Schema (`docs/schemas/agent-response.json`)

## Recommendations for test assets and CI

- Fixtures & versioning:
  - Store fixtures in `tests/fixtures/` and version them alongside schema changes.
  - Include representative low/medium/high-risk cases and edge cases (empty text, extremely long text, PII-filled text).
- LLM mocking:
  - Mock LLM calls in CI to avoid costs; use canned responses that exercise safety rules and response templates.
  - Add golden-file tests for prompt outputs and normalized responses.
- CI integration:
  - Validate JSON schemas with AJV (Node) or a Java validator step.
  - Run backend unit tests (`./gradlew test`) and frontend unit tests (`pnpm test`) in CI.
  - Optionally run a lightweight Postman collection for integration smoke tests against a staging environment.
- Cost control:
  - Run LLM behavior tests only against mocks in CI; run a small set of live LLM tests in a gated job (restricted tokens) for periodic validation.

## Ethical and safety testing

- Tone validation: ensure responses are empathetic, non-directive and avoid giving medical/legal instructions.
- Escalation checks: verify that HIGH risk cases result in `alert_triggered=true` and proper alert records are created.
- Auditability: every test run that affects persisted state should log `analysis_id` and model metadata to enable traceability.

## Quick links

- Request schema: `docs/schemas/agent-request.json`
- Response schema: `docs/schemas/agent-response.json`

