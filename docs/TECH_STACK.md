# Tech stack — EmpathIA

Summary of technologies used and their purpose. This page is intended for technical reviewers and automated tools that extract dependencies.

| Capa | Tecnología | Propósito | Ubicación clave |
|---|---|---|---|
| Frontend | Next.js, React, TailwindCSS, Shadcn UI | MVP UI and social-style demo interface | `emotion-analyzer/` |
| Backend | Spring Boot (Java 17), Spring AI (MCP) | Orchestration, LLM calls, request validation and security | `mcpServer/`, `EmpathIA-mcp/`, `EmpathIA-backend/` |
| LLM | Amazon Bedrock (`amazon.nova-pro-v1:0`) | Semantic analysis and empathetic generation | Configured via backend Spring AI dependencies (`build.gradle`) |
| DB | Supabase (Postgres) | Persistence, auth and lightweight analytics | Declared in backend services and `docs/DATABASE_MODEL.md` |
| Infra / Observability | SMTP, Logs, Metrics, Tracing | Alert delivery, audit trails and performance metrics | MCP Server + Supabase + monitoring stack (recommended)

Notes and recommendations

- Versions & manifests:
	- Frontend dependencies are declared in `emotion-analyzer/package.json` (see Next.js, React and Tailwind versions).
	- Java and Spring dependencies are declared in `EmpathIA-backend/build.gradle`, `EmpathIA-mcp/build.gradle` and `mcpServer/mcpServer/build.gradle`.
- Security & secrets:
	- Keep LLM, database and notification credentials in a secure secret store (environment variables, Vault, or cloud provider secrets manager).
	- Limit access to production keys and use environment-scoped values for staging and CI.
- CI / Testing:
	- Validate JSON contracts in CI (AJV for Node or Java JSON Schema validators).
	- Add unit tests for prompt templates and small integration tests that mock LLM responses.
	- Use migration tooling (Flyway/Liquibase) for DB schema changes and include migrations in CI.
- Observability:
	- Collect metrics: LLM latency (p50/p95), request success/error rates, distribution of `risk_level` and alerts triggered.
	- Centralize logs and attach `analysis_id` to traces for cross-service debugging.
	- Recommend Prometheus + Grafana for metrics and Jaeger/Zipkin for distributed tracing.
- Deployment notes:
	- Deploy backend services behind an ingress (NGINX or cloud load balancer) with TLS termination.
	- Use autoscaling rules for backend services to handle LLM call bursts; prefer rate-limiting on the gateway.

