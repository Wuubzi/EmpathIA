# Development Team — EmpathIA

Project: EmpathIA — Emotional Risk Analysis System

Event: Hackathon 2025

Duration: 60 hours

Modality: Collaborative development (Spring Boot · React · Supabase)

---

This document summarizes the small cross-functional team that delivered the EmpathIA MVP. It preserves roles and primary responsibilities and adds practical ownership, communication and onboarding notes for reviewers and future contributors.

## Mission

Deliver a secure, auditable, and privacy-aware prototype that detects emotional risk from short texts and provides empathetic recommendations and escalation alerts where appropriate.

## Team members and primary responsibilities

| Name | Role | Primary responsibilities |
|---|---|---|
| Zharick Londoño | Frontend Developer | UI implementation (Next.js); component library under `emotion-analyzer/app/components/`; client-side integration with `/api/agent/analyze`; accessibility and usability reviews. |
| Carlos Salas | Backend Developer | Server-side endpoints (Spring Boot); MCP/LLM orchestration; persistence to Supabase; security and deployment configuration. |
| Santiago Palomino | QA / Product Analyst | Test case definition and execution; end-to-end validation; acceptance criteria; user-flow documentation and demo preparation. |

## Ownership and code locations

- Frontend ownership: `emotion-analyzer/` (app, components, styles).
- Backend ownership: `mcpServer/` and `EmpathIA-mcp/` (controllers, services, prompt templates).
- Data model and schemas: `docs/DATABASE_MODEL.md` and `docs/schemas/`.

## Working model and communication

- Development cadence: short iterative cycles with daily syncs during the hackathon.
- Code reviews: pull requests on GitHub; at least one reviewer for each merge to `main` or the feature branch.
- Communication channels: repository issues for tasks, a shared chat (Slack/Discord) for quick coordination, and scheduled demo sessions for stakeholder feedback.

## Deliverables and immediate handoff notes

- MVP deliverables: working demo (frontend), API endpoint (`/api/agent/analyze`), database schema, and deployment instructions.
- Handoff checklist for maintainers:
	1. Ensure environment variables for LLM and Supabase are provisioned in the deployment environment.
	2. Review `docs/REFERENCE.md` for run commands and schema locations.
	3. Run the included test cases (see `docs/TESTING_STRATEGY.md`) before accepting major changes.

## How to get started (quick onboarding)

1. Clone the repository and read `docs/REFERENCE.md` for local start commands.
2. Start the frontend: `cd emotion-analyzer; pnpm install; pnpm dev`.
3. Start the backend MCP server: `cd mcpServer/mcpServer; .\gradlew.bat bootRun` (PowerShell).
4. Run the basic validation suite described in `docs/TESTING_STRATEGY.md`.

## Contact and repository

Repository: https://github.com/Wuubzi/EmpathIA

For questions about feature ownership or deployment, open an issue and tag the responsible team member listed above.


