# Product Roadmap — EmpathIA

## Phase 1 – Hackathon (Current)
- Deliverables:
	- Collaborative agent implementation (L2).
	- Basic CRUD for posts.
	- Initial LLM-based risk analysis pipeline.
	- Email alerting to designated professionals.
- Success criteria:
	- End-to-end flow: client → /api/agent/analyze → stored analysis.
	- Create at least 50 synthetic test cases covering low/medium/high risk.
	- Email notifications successfully delivered in 95% of test alerts.

## Phase 2 – 6 months
- Objectives:
	- Improve model accuracy and reduce false positives/negatives.
	- Add an operational dashboard for emotional metrics and alert trends.
	- Integrate with professional messaging APIs (secure delivery).
- Milestones:
	- Evaluation harness with labeled dataset and model metrics (precision/recall by risk level).
	- Dashboard with p50/p95 LLM latency, alerts/hour, and risk distribution charts.
	- Secure messaging integration demo with one provider (e.g., SMS or secure messaging API).

## Phase 3 – 1 year
- Objectives:
	- Automated handoff workflows for high-risk cases to specialists.
	- Longitudinal tracking of emotional state for opt-in users.
	- Real-time chat between users and licensed professionals (human-in-loop).
- Milestones:
	- Specialist routing workflows and SLA definitions (response windows).
	- Longitudinal data model and retention policy in place.
	- Pilot integration with a licensed provider for supervised chat sessions.

## Phase 4 – 3 years
- Visionary goals:
	- Supervised autonomy (L5) under human oversight.
	- Nationwide preventive detection network (policy & partnerships required).
	- Multimodal detection (text + voice + behavioral signals).
- Research milestones:
	- Feasibility studies for multimodal fusion and privacy-preserving inference.
	- Regulatory assessment and partnership framework for large-scale deployment.

## Priorities
- Safety: minimize false negatives for HIGH risk and ensure conservative escalation policies.
- Traceability: every analysis must be auditable (correlated by `analysis_id`).
- Integrability: build clear, versioned APIs and lightweight SDKs for partners.

