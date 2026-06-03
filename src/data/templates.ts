import { Building2, Database, Palette, ShieldCheck, Monitor, Server } from "lucide-react";

export type FieldType = "text" | "textarea" | "date" | "select" | "checkbox-group";

export interface TemplateField {
  id: string;
  label: string;
  type: FieldType;
  options?: string[];
  checkboxes?: string[];
  placeholder?: string;
  fullWidth?: boolean;
}

export interface Template {
  id: string;
  name: string;
  type: "assignment" | "receipt" | "review" | "risk" | "delivery" | "handover";
  fields?: TemplateField[];
}

export interface Category {
  id: string;
  name: string;
  icon: any;
  templates: Template[];
}

// ─── ARCHITECTURE ────────────────────────────────────────────────────────────

const archTemplate1Fields: TemplateField[] = [
  { id: "taskId", label: "Task ID", type: "text", placeholder: "ARC-[YYYYMMDD]-[NUM]" },
  { id: "projectName", label: "Project Name", type: "text" },
  { id: "moduleSystem", label: "Module / System", type: "text", placeholder: "System or Feature Name" },
  { id: "assignedTo", label: "Assigned To", type: "text", placeholder: "Architect Name" },
  { id: "assignedBy", label: "Assigned By", type: "text", placeholder: "Lead Architect / CTO" },
  { id: "environment", label: "Environment", type: "select", options: ["Development", "Staging", "Production"] },
  { id: "priority", label: "Priority", type: "select", options: ["High", "Medium", "Low"] },
  { id: "startDate", label: "Start Date", type: "date" },
  { id: "estimatedHours", label: "Estimated Hours / Days", type: "text", placeholder: "e.g. 5 days" },
  { id: "deadline", label: "Deadline", type: "date" },
  { id: "objective", label: "Objective", type: "textarea", placeholder: "Design the system architecture to ensure scalability, security, and business functionality." },
  { id: "scope", label: "Scope", type: "textarea", placeholder: "System Design, Technology Selection, Architecture Design, Performance & Scaling, Security Plan..." },
  { id: "successCriteria", label: "Success Criteria", type: "checkbox-group", checkboxes: [
    "All diagrams complete",
    "Technology stack selected",
    "Security requirements met",
    "Performance targets achieved",
    "Deployment architecture approved"
  ]}
];

const archTemplate2Fields: TemplateField[] = [
  { id: "taskId", label: "Task ID", type: "text", placeholder: "ARC-[YYYYMMDD]-[NUM]" },
  { id: "projectName", label: "Project Name", type: "text" },
  { id: "moduleSystem", label: "Module / System", type: "text" },
  { id: "reviewer", label: "Reviewer", type: "text" },
  { id: "reviewDate", label: "Review Date", type: "date" },
  { id: "projectStatus", label: "Project Status", type: "select", options: ["Initial Review", "Final Review", "Approved"] },
  { id: "reviewChecklist", label: "Review Checklist", type: "checkbox-group", checkboxes: [
    "System Modules — All modules correctly identified?",
    "System Modules — Functional separation between modules?",
    "Technology — Frontend/backend technologies correct?",
    "Technology — Database & components chosen correctly?",
    "Diagrams — System context diagram clear & complete?",
    "Diagrams — Component & data flow diagrams correct?",
    "Security & Scaling — Security strategy adequate?",
    "Security & Scaling — Scaling & load balancing ready?"
  ]},
  { id: "comments", label: "Comments", type: "textarea" },
  { id: "changeRecommendations", label: "Change Recommendations", type: "textarea" },
  { id: "approval", label: "Approval Decision", type: "select", options: ["Review approved", "More revision needed"] },
  { id: "reviewerSignature", label: "Reviewer Signature", type: "text" },
  { id: "signatureDate", label: "Signature Date", type: "date" }
];

const archTemplate3Fields: TemplateField[] = [
  { id: "taskId", label: "Task ID", type: "text", placeholder: "ARC-[YYYYMMDD]-[NUM]" },
  { id: "projectName", label: "Project Name", type: "text" },
  { id: "moduleSystem", label: "Module / System", type: "text" },
  { id: "riskIdentifier", label: "Risk Identifier", type: "text" },
  { id: "date", label: "Date", type: "date" },
  { id: "riskDescription", label: "Risk Description", type: "textarea", placeholder: "Type, potential impact, and who may be affected." },
  { id: "blockerInfo", label: "Blocker / Missing Information", type: "textarea" },
  { id: "potentialImpact", label: "Potential Impact", type: "textarea" },
  { id: "mitigationPlan", label: "Mitigation Plan", type: "textarea" },
  { id: "probability", label: "Risk Probability", type: "select", options: ["High", "Medium", "Low"] },
  { id: "severity", label: "Severity", type: "select", options: ["High", "Medium", "Low"] },
  { id: "riskScore", label: "Risk Score (Probability × Severity)", type: "select", options: ["High", "Medium", "Low"] },
  { id: "reviewUpdate", label: "Review & Update Plan", type: "textarea" },
  { id: "approval", label: "Approval Decision", type: "select", options: ["Risk acceptable", "Risk needs re-evaluation"] },
  { id: "signature", label: "Signature", type: "text" },
  { id: "signatureDate", label: "Signature Date", type: "date" }
];

const archTemplate4Fields: TemplateField[] = [
  { id: "taskId", label: "Task ID", type: "text", placeholder: "ARC-[YYYYMMDD]-[NUM]" },
  { id: "projectName", label: "Project Name", type: "text" },
  { id: "moduleSystem", label: "Module / System", type: "text" },
  { id: "architect", label: "Architect", type: "text" },
  { id: "deliveryDate", label: "Delivery Date", type: "date" },
  { id: "deliveryStatus", label: "Delivery Status", type: "select", options: ["On time", "Delayed", "Rework needed"] },
  { id: "deliverables", label: "Deliverables", type: "checkbox-group", checkboxes: [
    "System context diagram",
    "Component diagram",
    "Data flow diagram",
    "Deployment architecture diagram",
    "Technology stack document",
    "Security & scalability plan",
    "NFR checklist completed (Template 7)",
    "ADRs documented (Template 8)",
    "All change requests resolved (Template 6)"
  ]},
  { id: "deliveryConfirmation", label: "Delivery Confirmation Statement", type: "textarea" },
  { id: "verification", label: "Verification Checklist", type: "checkbox-group", checkboxes: [
    "Task completed",
    "All documentation verified",
    "Client or lead architect approval obtained",
    "All risks from Step 3 have mitigation plans",
    "All change requests from Step 2 are closed"
  ]},
  { id: "signature", label: "Signature", type: "text" },
  { id: "signatureDate", label: "Signature Date", type: "date" }
];

const archTemplate5Fields: TemplateField[] = [
  { id: "taskId", label: "Task ID", type: "text", placeholder: "ARC-[YYYYMMDD]-[NUM]" },
  { id: "projectName", label: "Project Name", type: "text" },
  { id: "moduleSystem", label: "Module / System", type: "text" },
  { id: "architectName", label: "Architect Name", type: "text" },
  { id: "commitmentDate", label: "Commitment Date", type: "date" },
  { id: "commitmentStatement", label: "Commitment Statement", type: "textarea" },
  { id: "receiverName", label: "Receiver Name", type: "text" },
  { id: "handoverDate", label: "Handover Date", type: "date" },
  { id: "itemsReceived", label: "Items Received / Handed Over", type: "checkbox-group", checkboxes: [
    "System design document",
    "Technology stack document",
    "Security plan",
    "Scalability plan",
    "Deployment diagram",
    "NFR checklist (Template 7)",
    "ADRs (Template 8)",
    "Final risk log (Template 3)",
    "Closed change requests (Template 6)"
  ]},
  { id: "studyTraining", label: "Study & Training Notes", type: "textarea" },
  { id: "successCriteria", label: "Success Criteria", type: "checkbox-group", checkboxes: [
    "All documentation complete",
    "Handover successfully completed",
    "Received items properly understood",
    "Receiver confirms understanding"
  ]},
  { id: "approval", label: "Approval Decision", type: "select", options: ["Handover successful", "Needs revision"] },
  { id: "receiverSignature", label: "Receiver Signature", type: "text" },
  { id: "architectSignature", label: "Architect Signature", type: "text" },
  { id: "signatureDate", label: "Date", type: "date" }
];

const archTemplate6Fields: TemplateField[] = [
  { id: "taskId", label: "Task ID", type: "text", placeholder: "ARC-[YYYYMMDD]-[NUM]" },
  { id: "projectName", label: "Project Name", type: "text" },
  { id: "requestedBy", label: "Requested By", type: "text" },
  { id: "requestDate", label: "Request Date", type: "date" },
  { id: "priority", label: "Priority", type: "select", options: ["Critical", "High", "Medium", "Low"] },
  { id: "relatedReviewFinding", label: "Related Review Finding", type: "text" },
  { id: "changeDescription", label: "Change Description", type: "textarea", placeholder: "What architecture change is needed?" },
  { id: "reasonForChange", label: "Reason for Change", type: "textarea" },
  { id: "affectedComponents", label: "Affected Components", type: "textarea", placeholder: "e.g. Database, API Gateway, Auth Service" },
  { id: "timelineImpact", label: "Timeline Impact", type: "text", placeholder: "+/- days" },
  { id: "costImpact", label: "Cost Impact", type: "text", placeholder: "+/- effort" },
  { id: "riskImpact", label: "Risk Impact", type: "select", options: ["High", "Medium", "Low"] },
  { id: "affectedDiagrams", label: "Affected Diagrams", type: "textarea" },
  { id: "approval", label: "Approval Decision", type: "select", options: ["Approved", "Rejected", "Needs more info"] },
  { id: "approvedBy", label: "Approved By", type: "text" },
  { id: "approvalDate", label: "Approval Date", type: "date" }
];

const archTemplate7Fields: TemplateField[] = [
  { id: "taskId", label: "Task ID", type: "text", placeholder: "ARC-[YYYYMMDD]-[NUM]" },
  { id: "projectName", label: "Project Name", type: "text" },
  { id: "reviewedOn", label: "Reviewed On", type: "date" },
  { id: "performanceNfrs", label: "Performance NFRs", type: "checkbox-group", checkboxes: [
    "API response time (p95) < 200ms — Met",
    "Throughput ≥ 1,000 requests/sec — Met"
  ]},
  { id: "performanceNotes", label: "Performance Notes / Risk if Not Met", type: "textarea" },
  { id: "scalabilityNfrs", label: "Scalability NFRs", type: "checkbox-group", checkboxes: [
    "Max concurrent users 50,000 — Met",
    "Horizontal scaling up to 20 nodes — Met"
  ]},
  { id: "scalabilityNotes", label: "Scalability Notes / Risk if Not Met", type: "textarea" },
  { id: "availabilityNfrs", label: "Availability NFRs", type: "checkbox-group", checkboxes: [
    "Uptime SLA 99.90% — Met",
    "RTO (Recovery Time Objective) < 4 hours — Met",
    "RPO (Recovery Point Objective) < 1 hour — Met"
  ]},
  { id: "availabilityNotes", label: "Availability Notes / Risk if Not Met", type: "textarea" },
  { id: "securityNfrs", label: "Security NFRs", type: "checkbox-group", checkboxes: [
    "Encryption at rest — AES-256 — Met",
    "Encryption in transit — TLS 1.2+ — Met"
  ]},
  { id: "securityNotes", label: "Security Notes / Risk if Not Met", type: "textarea" },
  { id: "complianceNfrs", label: "Compliance NFRs", type: "checkbox-group", checkboxes: [
    "GDPR / Data privacy compliant — Met",
    "Audit logging retention 30 days — Met"
  ]},
  { id: "complianceNotes", label: "Compliance Notes / Risk if Not Met", type: "textarea" },
  { id: "reliabilityNfrs", label: "Reliability NFRs", type: "checkbox-group", checkboxes: [
    "Backup frequency daily — Met",
    "Disaster recovery tested quarterly — Met"
  ]},
  { id: "reliabilityNotes", label: "Reliability Notes / Risk if Not Met", type: "textarea" },
  { id: "nfrOwner", label: "NFR Owner", type: "text" },
  { id: "nfrSignOffDate", label: "NFR Sign-off Date", type: "date" },
  { id: "nfrApproval", label: "NFR Approval", type: "select", options: ["All NFRs achievable", "Some NFRs need revision"] }
];

const archTemplate8Fields: TemplateField[] = [
  { id: "taskId", label: "Task ID", type: "text", placeholder: "ARC-[YYYYMMDD]-[NUM]" },
  { id: "adrNumber", label: "ADR Number", type: "text", placeholder: "e.g. 001, 002, ..." },
  { id: "title", label: "Title", type: "text", placeholder: "e.g. Choose database for user service" },
  { id: "date", label: "Date", type: "date" },
  { id: "status", label: "Status", type: "select", options: ["Proposed", "Accepted", "Deprecated", "Superseded"] },
  { id: "context", label: "Context (Why is this decision needed?)", type: "textarea" },
  { id: "decision", label: "Decision", type: "textarea" },
  { id: "alternativesConsidered", label: "Alternatives Considered", type: "textarea" },
  { id: "consequencesPositive", label: "Consequences — Positive", type: "textarea" },
  { id: "consequencesNegative", label: "Consequences — Negative", type: "textarea" },
  { id: "relatedAdrs", label: "Related ADRs", type: "text" },
  { id: "decisionMaker", label: "Decision Maker", type: "text" },
  { id: "reviewer", label: "Reviewer", type: "text" }
];

// ─── DATABASE ─────────────────────────────────────────────────────────────────

const dbTemplate1Fields: TemplateField[] = [
  { id: "taskId", label: "Task ID", type: "text", placeholder: "DB-[YYYYMMDD]-[NUM]" },
  { id: "projectName", label: "Project Name", type: "text" },
  { id: "moduleDatabase", label: "Module / Database", type: "text", placeholder: "Database or Feature Name" },
  { id: "assignedTo", label: "Assigned To", type: "text", placeholder: "DBA / Developer Name" },
  { id: "assignedBy", label: "Assigned By", type: "text", placeholder: "Lead / Manager Name" },
  { id: "environment", label: "Environment", type: "select", options: ["Development", "Staging", "Production"] },
  { id: "priority", label: "Priority", type: "select", options: ["High", "Medium", "Low"] },
  { id: "startDate", label: "Start Date", type: "date" },
  { id: "deadline", label: "Deadline", type: "date" },
  { id: "estimatedHours", label: "Estimated Hours / Days", type: "text", placeholder: "e.g. 3 days" },
  { id: "dbType", label: "Database Type", type: "select", options: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "SQLite", "Oracle", "MSSQL", "Other"] },
  { id: "objective", label: "Objective", type: "textarea", placeholder: "Design and implement the database schema to support the required functionality." },
  { id: "scope", label: "Scope", type: "textarea", placeholder: "Schema design, indexing strategy, migration scripts, performance tuning..." },
  { id: "technicalRequirements", label: "Technical Requirements", type: "textarea", placeholder: "Data volume, query performance targets, replication needs..." },
  { id: "successCriteria", label: "Success Criteria", type: "checkbox-group", checkboxes: [
    "Schema design complete and reviewed",
    "All migrations tested in staging",
    "Indexes optimised for critical queries",
    "Backup & recovery procedure documented",
    "No data integrity issues detected",
    "Performance targets achieved"
  ]}
];

const dbTemplate2Fields: TemplateField[] = [
  { id: "taskId", label: "Task ID", type: "text", placeholder: "DB-[YYYYMMDD]-[NUM]" },
  { id: "projectName", label: "Project Name", type: "text" },
  { id: "moduleDatabase", label: "Module / Database", type: "text" },
  { id: "developerName", label: "Developer / DBA Name", type: "text" },
  { id: "receivedDate", label: "Received Date", type: "date" },
  { id: "commitmentDate", label: "Commitment Date", type: "date" },
  { id: "taskUnderstood", label: "Task Understanding", type: "checkbox-group", checkboxes: [
    "Task requirements fully understood",
    "Schema scope clarified",
    "Migration strategy agreed",
    "Performance targets acknowledged",
    "Rollback plan discussed"
  ]},
  { id: "commitmentStatement", label: "Commitment Statement", type: "textarea", placeholder: "I confirm I understand the task and commit to delivering the database changes as specified." },
  { id: "technicalApproach", label: "Technical Approach", type: "textarea", placeholder: "Outline your design approach, tools, and migration strategy." },
  { id: "risksIdentified", label: "Risks / Blockers Identified", type: "textarea" },
  { id: "clarificationsNeeded", label: "Clarifications Needed", type: "textarea" },
  { id: "estimatedEffort", label: "Estimated Effort", type: "text", placeholder: "e.g. 2 days" },
  { id: "developerSignature", label: "Developer Signature", type: "text" },
  { id: "signatureDate", label: "Date", type: "date" }
];

const dbTemplate3Fields: TemplateField[] = [
  { id: "taskId", label: "Task ID", type: "text", placeholder: "DB-[YYYYMMDD]-[NUM]" },
  { id: "projectName", label: "Project Name", type: "text" },
  { id: "reviewerName", label: "Reviewer Name", type: "text" },
  { id: "reviewDate", label: "Review Date", type: "date" },
  { id: "schemaChecklist", label: "Schema Review", type: "checkbox-group", checkboxes: [
    "All required tables / collections present",
    "Correct data types used",
    "Primary keys defined",
    "Foreign key relationships correct",
    "Nullable / not-null constraints appropriate",
    "No redundant columns (normalisation checked)"
  ]},
  { id: "indexingChecklist", label: "Indexing & Performance", type: "checkbox-group", checkboxes: [
    "Indexes added for frequent query columns",
    "No missing indexes on foreign keys",
    "No over-indexing that harms write performance",
    "Query plans reviewed for critical queries"
  ]},
  { id: "securityChecklist", label: "Security", type: "checkbox-group", checkboxes: [
    "Sensitive data encrypted at rest",
    "No plaintext passwords stored",
    "Row-level security / access controls reviewed",
    "Audit logging fields present where required"
  ]},
  { id: "migrationChecklist", label: "Migration", type: "checkbox-group", checkboxes: [
    "Migration script idempotent",
    "Rollback script tested",
    "No breaking changes to existing data"
  ]},
  { id: "reviewComments", label: "Review Comments", type: "textarea" },
  { id: "changeRecommendations", label: "Change Recommendations", type: "textarea" },
  { id: "approval", label: "Approval Decision", type: "select", options: ["Approved", "Approved with changes", "Rejected — rework required"] },
  { id: "reviewerSignature", label: "Reviewer Signature", type: "text" },
  { id: "signatureDate", label: "Signature Date", type: "date" }
];

const dbTemplate4Fields: TemplateField[] = [
  { id: "taskId", label: "Task ID", type: "text", placeholder: "DB-[YYYYMMDD]-[NUM]" },
  { id: "projectName", label: "Project Name", type: "text" },
  { id: "riskIdentifier", label: "Risk Identifier", type: "text" },
  { id: "date", label: "Date", type: "date" },
  { id: "migrationRisks", label: "Migration Risks", type: "checkbox-group", checkboxes: [
    "Data loss during migration",
    "Extended downtime window",
    "Schema conflicts with existing data",
    "Rollback complexity",
    "Third-party dependency on schema"
  ]},
  { id: "riskDescription", label: "Risk Description", type: "textarea", placeholder: "Describe the specific risk and its potential impact on data or operations." },
  { id: "probability", label: "Probability", type: "select", options: ["High", "Medium", "Low"] },
  { id: "severity", label: "Severity", type: "select", options: ["High", "Medium", "Low"] },
  { id: "riskScore", label: "Risk Score", type: "select", options: ["High", "Medium", "Low"] },
  { id: "mitigationPlan", label: "Mitigation Plan", type: "textarea", placeholder: "Steps to reduce or eliminate the risk. Include rollback procedure." },
  { id: "rollbackStrategy", label: "Rollback Strategy", type: "textarea", placeholder: "If migration fails, how will data be restored?" },
  { id: "downtime", label: "Estimated Downtime", type: "text", placeholder: "e.g. 0 min (online), ~5 min (maintenance window)" },
  { id: "testingPlan", label: "Testing Plan", type: "textarea", placeholder: "How will migration be validated in staging before production?" },
  { id: "mitigationStatus", label: "Mitigation Status", type: "select", options: ["Mitigated", "In Progress", "Open"] },
  { id: "owner", label: "Risk Owner", type: "text" },
  { id: "reviewDate", label: "Review Date", type: "date" }
];

const dbTemplate5Fields: TemplateField[] = [
  { id: "taskId", label: "Task ID", type: "text", placeholder: "DB-[YYYYMMDD]-[NUM]" },
  { id: "projectName", label: "Project Name", type: "text" },
  { id: "developerName", label: "Developer / DBA Name", type: "text" },
  { id: "deliveryDate", label: "Delivery Date", type: "date" },
  { id: "deliveryStatus", label: "Delivery Status", type: "select", options: ["On Time", "Delayed", "Needs Revision"] },
  { id: "delayReason", label: "Reason if Delayed", type: "textarea" },
  { id: "deliverables", label: "Deliverable Checklist", type: "checkbox-group", checkboxes: [
    "Schema changes applied",
    "Migration scripts tested in staging",
    "Rollback script ready",
    "Indexes added / optimised",
    "Data integrity verified",
    "Performance benchmarks met",
    "Backup confirmed before production deploy",
    "Documentation updated"
  ]},
  { id: "qualityMetrics", label: "Quality Metrics", type: "textarea", placeholder: "e.g. Unit test coverage %, query response times, rows migrated, errors encountered." },
  { id: "environmentValidation", label: "Environment Validation", type: "checkbox-group", checkboxes: [
    "Development environment working",
    "Staging environment working",
    "Production migration plan approved"
  ]},
  { id: "approvalDecision", label: "Approval", type: "select", options: ["Approved", "Rejected for Revision"] },
  { id: "approvedBy", label: "Approved By", type: "text" },
  { id: "approvalDate", label: "Approval Date", type: "date" }
];

const dbTemplate6Fields: TemplateField[] = [
  { id: "taskId", label: "Task ID", type: "text", placeholder: "DB-[YYYYMMDD]-[NUM]" },
  { id: "projectName", label: "Project Name", type: "text" },
  { id: "developerName", label: "Developer / DBA Name", type: "text" },
  { id: "handoverDate", label: "Handover Date", type: "date" },
  { id: "handoverTo", label: "Handover Recipients", type: "checkbox-group", checkboxes: [
    "Backend Team — Schema integration",
    "DevOps Team — Migration deployment",
    "QA Team — Integration testing",
    "DBA / Database Admin — Ongoing management"
  ]},
  { id: "handoverItems", label: "Handover Items", type: "checkbox-group", checkboxes: [
    "Entity-relationship (ER) diagram",
    "Migration scripts (up & down)",
    "Rollback scripts",
    "Seed / test data scripts",
    "Performance test results",
    "Database documentation",
    "Environment variable / connection string guide"
  ]},
  { id: "knowledgeTransfer", label: "Knowledge Transfer Notes", type: "textarea", placeholder: "Topics covered, who attended, training materials shared." },
  { id: "knownIssues", label: "Known Issues & Limitations", type: "textarea", placeholder: "Any outstanding issues, workarounds, or future improvements needed." },
  { id: "monitoringAlerts", label: "Monitoring & Alerts Configured", type: "checkbox-group", checkboxes: [
    "Slow query alerts configured",
    "Disk usage alerts configured",
    "Replication lag alerts configured (if applicable)"
  ]},
  { id: "finalDeclaration", label: "Final Declaration", type: "textarea", placeholder: "I confirm that all database work has been completed, tested, documented, and properly handed over." },
  { id: "approvalStatus", label: "Handover Status", type: "select", options: ["Handover Completed", "Additional Clarification Required"] },
  { id: "developerSignature", label: "Developer Signature", type: "text" },
  { id: "receiverSignature", label: "Receiver Signature", type: "text" },
  { id: "completionDate", label: "Completion Date", type: "date" }
];

// ─── UI/UX ────────────────────────────────────────────────────────────────────

const uiTemplate1Fields: TemplateField[] = [
  { id: "taskId", label: "Task ID", type: "text", placeholder: "UX-[YYYYMMDD]-[NUM]" },
  { id: "projectName", label: "Project Name", type: "text" },
  { id: "componentPage", label: "Component / Page", type: "text", placeholder: "e.g. User Dashboard, Checkout Flow" },
  { id: "designerName", label: "Designer Name", type: "text" },
  { id: "assignedBy", label: "Assigned By", type: "text" },
  { id: "priority", label: "Priority", type: "select", options: ["High", "Medium", "Low"] },
  { id: "startDate", label: "Start Date", type: "date" },
  { id: "deadline", label: "Deadline", type: "date" },
  { id: "estimatedHours", label: "Estimated Hours", type: "text" },
  { id: "figmaLink", label: "Figma / Design Tool Link", type: "text", placeholder: "https://figma.com/..." },
  { id: "designStyle", label: "Design Style / Brand Guidelines", type: "text", placeholder: "Link to brand guide or brief description" },
  { id: "objective", label: "Objective", type: "textarea", placeholder: "What experience should this design achieve?" },
  { id: "scope", label: "Scope", type: "textarea", placeholder: "Screens, flows, components in scope. Out of scope items." },
  { id: "targetUsers", label: "Target Users", type: "textarea", placeholder: "Who will use this? Any accessibility requirements?" },
  { id: "designRequirements", label: "Design Requirements", type: "textarea", placeholder: "Responsiveness, breakpoints, theme, key interactions." },
  { id: "successCriteria", label: "Success Criteria", type: "checkbox-group", checkboxes: [
    "All screens / flows designed",
    "Responsive designs for mobile, tablet, desktop",
    "Design system components used consistently",
    "Accessibility (WCAG 2.1 AA) considered",
    "Prototype / interactive flows completed",
    "Stakeholder sign-off obtained"
  ]}
];

const uiTemplate2Fields: TemplateField[] = [
  { id: "taskId", label: "Task ID", type: "text", placeholder: "UX-[YYYYMMDD]-[NUM]" },
  { id: "projectName", label: "Project Name", type: "text" },
  { id: "componentPage", label: "Component / Page", type: "text" },
  { id: "designerName", label: "Designer Name", type: "text" },
  { id: "receivedDate", label: "Received Date", type: "date" },
  { id: "commitmentDate", label: "Commitment Date", type: "date" },
  { id: "taskUnderstood", label: "Task Understanding Checklist", type: "checkbox-group", checkboxes: [
    "User goals and pain points understood",
    "Brand guidelines reviewed",
    "Screen scope agreed",
    "Responsive breakpoints confirmed",
    "Accessibility requirements noted"
  ]},
  { id: "commitmentStatement", label: "Commitment Statement", type: "textarea" },
  { id: "designApproach", label: "Design Approach", type: "textarea", placeholder: "Tools, methodology (e.g. Design Thinking, Atomic Design), iteration plan." },
  { id: "risksIdentified", label: "Risks / Blockers Identified", type: "textarea" },
  { id: "clarificationsNeeded", label: "Clarifications Needed", type: "textarea" },
  { id: "designerSignature", label: "Designer Signature", type: "text" },
  { id: "signatureDate", label: "Date", type: "date" }
];

const uiTemplate3Fields: TemplateField[] = [
  { id: "taskId", label: "Task ID", type: "text", placeholder: "UX-[YYYYMMDD]-[NUM]" },
  { id: "projectName", label: "Project Name", type: "text" },
  { id: "componentPage", label: "Component / Page Reviewed", type: "text" },
  { id: "reviewerName", label: "Reviewer Name", type: "text" },
  { id: "reviewDate", label: "Review Date", type: "date" },
  { id: "uxChecklist", label: "UX Quality", type: "checkbox-group", checkboxes: [
    "User flows are logical and intuitive",
    "Error states and empty states designed",
    "Loading / skeleton states present",
    "Microcopy clear and consistent",
    "Navigation hierarchy correct"
  ]},
  { id: "visualChecklist", label: "Visual Design", type: "checkbox-group", checkboxes: [
    "Design system / component library used correctly",
    "Typography hierarchy consistent",
    "Colour palette matches brand guidelines",
    "Spacing and grid system applied consistently",
    "Icons and illustrations consistent"
  ]},
  { id: "accessibilityChecklist", label: "Accessibility (WCAG 2.1 AA)", type: "checkbox-group", checkboxes: [
    "Colour contrast ratio ≥ 4.5:1 (text)",
    "Focus states visible on interactive elements",
    "Alt text specified for all images",
    "Form labels associated with inputs",
    "Reading order logical for screen readers"
  ]},
  { id: "responsiveChecklist", label: "Responsiveness", type: "checkbox-group", checkboxes: [
    "Mobile layout (320–767px) designed",
    "Tablet layout (768–1023px) designed",
    "Desktop layout (1024px+) designed",
    "Touch targets ≥ 44×44px on mobile"
  ]},
  { id: "reviewComments", label: "Review Comments", type: "textarea" },
  { id: "changeRecommendations", label: "Change Recommendations", type: "textarea" },
  { id: "approval", label: "Approval Decision", type: "select", options: ["Approved", "Approved with changes", "Rejected — rework required"] },
  { id: "reviewerSignature", label: "Reviewer Signature", type: "text" },
  { id: "signatureDate", label: "Signature Date", type: "date" }
];

const uiTemplate4Fields: TemplateField[] = [
  { id: "taskId", label: "Task ID", type: "text", placeholder: "UX-[YYYYMMDD]-[NUM]" },
  { id: "projectName", label: "Project Name", type: "text" },
  { id: "riskIdentifier", label: "Risk Identifier", type: "text" },
  { id: "date", label: "Date", type: "date" },
  { id: "riskCategories", label: "Risk Categories", type: "checkbox-group", checkboxes: [
    "Missing assets / design resources",
    "Unclear requirements from product team",
    "Accessibility compliance risk",
    "Dependency on third-party UI library",
    "Design-development handover misalignment",
    "Timeline risk — scope creep"
  ]},
  { id: "riskDescription", label: "Risk Description", type: "textarea" },
  { id: "probability", label: "Probability", type: "select", options: ["High", "Medium", "Low"] },
  { id: "severity", label: "Severity", type: "select", options: ["High", "Medium", "Low"] },
  { id: "riskScore", label: "Risk Score", type: "select", options: ["High", "Medium", "Low"] },
  { id: "mitigationPlan", label: "Mitigation Plan", type: "textarea" },
  { id: "blockers", label: "Current Blockers", type: "textarea", placeholder: "What is blocking progress right now?" },
  { id: "owner", label: "Risk Owner", type: "text" },
  { id: "reviewDate", label: "Review Date", type: "date" },
  { id: "status", label: "Status", type: "select", options: ["Open", "In Progress", "Mitigated", "Closed"] }
];

const uiTemplate5Fields: TemplateField[] = [
  { id: "taskId", label: "Task ID", type: "text", placeholder: "UX-[YYYYMMDD]-[NUM]" },
  { id: "projectName", label: "Project Name", type: "text" },
  { id: "componentPage", label: "Component / Page", type: "text" },
  { id: "designerName", label: "Designer Name", type: "text" },
  { id: "deliveryDate", label: "Delivery Date", type: "date" },
  { id: "deliveryStatus", label: "Delivery Status", type: "select", options: ["On Time", "Delayed", "Needs Revision"] },
  { id: "delayReason", label: "Reason if Delayed", type: "text" },
  { id: "deliverables", label: "Deliverable Checklist", type: "checkbox-group", checkboxes: [
    "Figma / design file organised and shared",
    "All screens / flows completed",
    "Component library updated",
    "Prototype / interactive flows ready",
    "Design specification / redlines documented",
    "Asset export pack prepared",
    "Responsive variants complete",
    "Accessibility annotations added"
  ]},
  { id: "developerHandoffNotes", label: "Developer Hand-off Notes", type: "textarea", placeholder: "Key interactions, animations, spacing notes, font sizes, colours." },
  { id: "approvalDecision", label: "Approval", type: "select", options: ["Approved", "Rejected for Revision"] },
  { id: "approvedBy", label: "Approved By", type: "text" },
  { id: "approvalDate", label: "Approval Date", type: "date" }
];

const uiTemplate6Fields: TemplateField[] = [
  { id: "taskId", label: "Task ID", type: "text", placeholder: "UX-[YYYYMMDD]-[NUM]" },
  { id: "projectName", label: "Project Name", type: "text" },
  { id: "designerName", label: "Designer Name", type: "text" },
  { id: "handoverDate", label: "Handover Date", type: "date" },
  { id: "handoverTo", label: "Handover Recipients", type: "checkbox-group", checkboxes: [
    "Frontend Team — Implementation",
    "QA Team — Visual / functional testing",
    "Product Team — Feature sign-off"
  ]},
  { id: "handoverItems", label: "Handover Items", type: "checkbox-group", checkboxes: [
    "Figma project link shared",
    "Design tokens / style guide shared",
    "Asset export package delivered",
    "Interactive prototype link shared",
    "Accessibility audit report shared",
    "User flow documentation shared"
  ]},
  { id: "knowledgeTransfer", label: "Knowledge Transfer Notes", type: "textarea" },
  { id: "knownIssues", label: "Known Issues & Outstanding Items", type: "textarea" },
  { id: "finalDeclaration", label: "Final Declaration", type: "textarea" },
  { id: "approvalStatus", label: "Handover Status", type: "select", options: ["Handover Completed", "Additional Clarification Required"] },
  { id: "designerSignature", label: "Designer Signature", type: "text" },
  { id: "receiverSignature", label: "Receiver Signature", type: "text" },
  { id: "completionDate", label: "Completion Date", type: "date" }
];

// ─── SECURITY ─────────────────────────────────────────────────────────────────

const secTemplate1Fields: TemplateField[] = [
  { id: "taskId", label: "Task ID", type: "text", placeholder: "SEC-[YYYYMMDD]-[NUM]" },
  { id: "projectName", label: "Project Name", type: "text" },
  { id: "moduleSystem", label: "Module / System", type: "text" },
  { id: "assignedTo", label: "Assigned To", type: "text", placeholder: "Security Engineer Name" },
  { id: "assignedBy", label: "Assigned By", type: "text" },
  { id: "environment", label: "Environment", type: "select", options: ["Development", "Staging", "Production"] },
  { id: "priority", label: "Priority", type: "select", options: ["Critical", "High", "Medium", "Low"] },
  { id: "startDate", label: "Start Date", type: "date" },
  { id: "deadline", label: "Deadline", type: "date" },
  { id: "securityDomain", label: "Security Domain", type: "select", options: ["Authentication & Authorisation", "Data Protection", "API Security", "Infrastructure Security", "Compliance", "Penetration Testing", "Other"] },
  { id: "objective", label: "Objective", type: "textarea", placeholder: "What security outcome must be achieved?" },
  { id: "scope", label: "Scope", type: "textarea", placeholder: "Systems, endpoints, or data in scope. Exclusions." },
  { id: "complianceFramework", label: "Compliance Framework", type: "text", placeholder: "e.g. OWASP Top 10, ISO 27001, GDPR, PCI-DSS, HIPAA" },
  { id: "successCriteria", label: "Success Criteria", type: "checkbox-group", checkboxes: [
    "All critical/high vulnerabilities remediated",
    "Security review passed",
    "Penetration test report clean",
    "Authentication & authorisation hardened",
    "Data encryption implemented",
    "Audit logging enabled"
  ]}
];

const secTemplate2Fields: TemplateField[] = [
  { id: "taskId", label: "Task ID", type: "text", placeholder: "SEC-[YYYYMMDD]-[NUM]" },
  { id: "projectName", label: "Project Name", type: "text" },
  { id: "moduleSystem", label: "Module / System Reviewed", type: "text" },
  { id: "reviewerName", label: "Reviewer Name", type: "text" },
  { id: "reviewDate", label: "Review Date", type: "date" },
  { id: "authChecklist", label: "Authentication & Authorisation", type: "checkbox-group", checkboxes: [
    "Authentication mechanism implemented correctly",
    "JWT / session tokens expire appropriately",
    "Role-based access control (RBAC) enforced",
    "Privilege escalation prevented",
    "Password policy meets security standards",
    "MFA available for sensitive operations"
  ]},
  { id: "inputValidation", label: "Input Validation & Injection Prevention", type: "checkbox-group", checkboxes: [
    "All inputs validated and sanitised",
    "SQL injection prevented (parameterised queries)",
    "XSS prevention in place",
    "CSRF protection implemented",
    "File upload restrictions enforced"
  ]},
  { id: "dataProtection", label: "Data Protection", type: "checkbox-group", checkboxes: [
    "Sensitive data encrypted at rest",
    "Data encrypted in transit (TLS 1.2+)",
    "PII data minimised / anonymised where possible",
    "Secrets not hardcoded in source code",
    "Environment variables secured"
  ]},
  { id: "reviewComments", label: "Review Comments", type: "textarea" },
  { id: "vulnerabilitiesFound", label: "Vulnerabilities Found", type: "textarea", placeholder: "List each finding with severity (Critical / High / Medium / Low)." },
  { id: "approval", label: "Approval Decision", type: "select", options: ["Approved — No critical issues", "Conditional — Minor fixes required", "Rejected — Critical issues found"] },
  { id: "reviewerSignature", label: "Reviewer Signature", type: "text" },
  { id: "signatureDate", label: "Signature Date", type: "date" }
];

const secTemplate3Fields: TemplateField[] = [
  { id: "taskId", label: "Task ID", type: "text", placeholder: "SEC-[YYYYMMDD]-[NUM]" },
  { id: "projectName", label: "Project Name", type: "text" },
  { id: "moduleSystem", label: "Module / System Reviewed", type: "text" },
  { id: "reviewerName", label: "Reviewer Name", type: "text" },
  { id: "reviewDate", label: "Review Date", type: "date" },
  { id: "apiSecurity", label: "API Security", type: "checkbox-group", checkboxes: [
    "API authentication required on all endpoints",
    "Rate limiting configured",
    "API versioning implemented",
    "Sensitive data not exposed in responses",
    "CORS policy correctly configured",
    "Error messages do not leak system info"
  ]},
  { id: "infrastructureSecurity", label: "Infrastructure Security", type: "checkbox-group", checkboxes: [
    "Firewall rules reviewed",
    "Open ports minimised",
    "Security groups / network policies set correctly",
    "Container images scanned for vulnerabilities",
    "Secrets managed via secret manager (not env files)"
  ]},
  { id: "loggingMonitoring", label: "Logging & Monitoring", type: "checkbox-group", checkboxes: [
    "Security events logged (login, access denied, errors)",
    "Audit log tamper-protection in place",
    "Alerting configured for suspicious activity",
    "Log retention policy meets compliance requirements"
  ]},
  { id: "owaspTop10", label: "OWASP Top 10 Coverage", type: "checkbox-group", checkboxes: [
    "A01 Broken Access Control — Checked",
    "A02 Cryptographic Failures — Checked",
    "A03 Injection — Checked",
    "A04 Insecure Design — Checked",
    "A05 Security Misconfiguration — Checked",
    "A06 Vulnerable & Outdated Components — Checked",
    "A07 Identification & Authentication Failures — Checked",
    "A08 Software & Data Integrity Failures — Checked",
    "A09 Security Logging & Monitoring Failures — Checked",
    "A10 Server-Side Request Forgery (SSRF) — Checked"
  ]},
  { id: "additionalFindings", label: "Additional Findings", type: "textarea" },
  { id: "remediationPlan", label: "Remediation Plan", type: "textarea" },
  { id: "approval", label: "Approval Decision", type: "select", options: ["Approved", "Conditional", "Rejected"] },
  { id: "reviewerSignature", label: "Reviewer Signature", type: "text" },
  { id: "signatureDate", label: "Signature Date", type: "date" }
];

const secTemplate4Fields: TemplateField[] = [
  { id: "taskId", label: "Task ID", type: "text", placeholder: "SEC-[YYYYMMDD]-[NUM]" },
  { id: "projectName", label: "Project Name", type: "text" },
  { id: "riskIdentifier", label: "Risk / Vulnerability ID", type: "text" },
  { id: "date", label: "Date", type: "date" },
  { id: "vulnerabilityType", label: "Vulnerability Type", type: "select", options: ["Authentication", "Authorisation", "Injection", "Cryptography", "Configuration", "Dependency", "Data Exposure", "Logging & Monitoring", "Other"] },
  { id: "riskDescription", label: "Risk / Vulnerability Description", type: "textarea" },
  { id: "cvssScore", label: "CVSS Score (if applicable)", type: "text", placeholder: "e.g. 8.1 (High)" },
  { id: "probability", label: "Probability", type: "select", options: ["High", "Medium", "Low"] },
  { id: "severity", label: "Severity", type: "select", options: ["Critical", "High", "Medium", "Low"] },
  { id: "affectedSystems", label: "Affected Systems / Endpoints", type: "textarea" },
  { id: "exploitScenario", label: "Exploit Scenario", type: "textarea", placeholder: "How could an attacker exploit this?" },
  { id: "mitigationPlan", label: "Mitigation / Remediation Plan", type: "textarea" },
  { id: "mitigationStatus", label: "Mitigation Status", type: "select", options: ["Mitigated", "In Progress", "Accepted Risk", "Open"] },
  { id: "owner", label: "Risk Owner", type: "text" },
  { id: "dueDate", label: "Remediation Due Date", type: "date" }
];

const secTemplate5Fields: TemplateField[] = [
  { id: "taskId", label: "Task ID", type: "text", placeholder: "SEC-[YYYYMMDD]-[NUM]" },
  { id: "projectName", label: "Project Name", type: "text" },
  { id: "moduleSystem", label: "Module / System", type: "text" },
  { id: "engineerName", label: "Security Engineer Name", type: "text" },
  { id: "deliveryDate", label: "Delivery Date", type: "date" },
  { id: "deliveryStatus", label: "Delivery Status", type: "select", options: ["On Time", "Delayed", "Needs Revision"] },
  { id: "deliverables", label: "Deliverable Checklist", type: "checkbox-group", checkboxes: [
    "All critical/high vulnerabilities remediated",
    "Security review passed (Template 2 or 3)",
    "Penetration test completed (if required)",
    "Risk assessment documented (Template 4)",
    "Authentication & authorisation hardened",
    "Encryption implemented (at rest + in transit)",
    "Rate limiting configured",
    "Audit logging enabled",
    "Security documentation updated"
  ]},
  { id: "outstandingIssues", label: "Outstanding / Accepted Risks", type: "textarea", placeholder: "List any accepted risks with justification." },
  { id: "approvalDecision", label: "Approval", type: "select", options: ["Approved — Ready for production", "Conditional approval", "Rejected — Security issues unresolved"] },
  { id: "approvedBy", label: "Approved By", type: "text" },
  { id: "approvalDate", label: "Approval Date", type: "date" }
];

const secTemplate6Fields: TemplateField[] = [
  { id: "taskId", label: "Task ID", type: "text", placeholder: "SEC-[YYYYMMDD]-[NUM]" },
  { id: "projectName", label: "Project Name", type: "text" },
  { id: "engineerName", label: "Security Engineer Name", type: "text" },
  { id: "handoverDate", label: "Handover Date", type: "date" },
  { id: "handoverTo", label: "Handover Recipients", type: "checkbox-group", checkboxes: [
    "DevOps / Infrastructure Team",
    "Development Team",
    "QA Team",
    "Compliance / Audit Team"
  ]},
  { id: "handoverItems", label: "Handover Items", type: "checkbox-group", checkboxes: [
    "Security review report",
    "Vulnerability assessment report (Template 4)",
    "Penetration test report",
    "OWASP checklist (Template 3)",
    "Remediation log",
    "Security configuration documentation",
    "Monitoring & alerting runbook"
  ]},
  { id: "knowledgeTransfer", label: "Knowledge Transfer Notes", type: "textarea" },
  { id: "ongoingMonitoring", label: "Ongoing Security Monitoring Plan", type: "textarea", placeholder: "Who is responsible for ongoing security monitoring? What alerts are configured?" },
  { id: "knownRisks", label: "Known / Accepted Residual Risks", type: "textarea" },
  { id: "finalDeclaration", label: "Final Declaration", type: "textarea" },
  { id: "approvalStatus", label: "Handover Status", type: "select", options: ["Handover Completed", "Pending Items"] },
  { id: "engineerSignature", label: "Security Engineer Signature", type: "text" },
  { id: "receiverSignature", label: "Receiver Signature", type: "text" },
  { id: "completionDate", label: "Completion Date", type: "date" }
];

// ─── FRONTEND ─────────────────────────────────────────────────────────────────

const feTemplate1Fields: TemplateField[] = [
  { id: "taskId", label: "Task ID", type: "text", placeholder: "FE-[YYYYMMDD]-[NUM]" },
  { id: "projectName", label: "Project Name", type: "text" },
  { id: "componentPage", label: "Component / Page", type: "text" },
  { id: "assignedTo", label: "Assigned To", type: "text", placeholder: "Frontend Developer Name" },
  { id: "assignedBy", label: "Assigned By", type: "text" },
  { id: "environment", label: "Environment", type: "select", options: ["Development", "Staging", "Production"] },
  { id: "priority", label: "Priority", type: "select", options: ["High", "Medium", "Low"] },
  { id: "startDate", label: "Start Date", type: "date" },
  { id: "deadline", label: "Deadline", type: "date" },
  { id: "estimatedHours", label: "Estimated Hours / Days", type: "text" },
  { id: "figmaLink", label: "Figma / Design Link", type: "text" },
  { id: "techStack", label: "Tech Stack", type: "text", placeholder: "e.g. React, TypeScript, Tailwind CSS" },
  { id: "objective", label: "Objective", type: "textarea" },
  { id: "scope", label: "Scope", type: "textarea", placeholder: "Components, pages, interactions in scope." },
  { id: "apiEndpoints", label: "API Endpoints / Dependencies", type: "textarea", placeholder: "List API endpoints or backend services this feature depends on." },
  { id: "successCriteria", label: "Success Criteria", type: "checkbox-group", checkboxes: [
    "All components implemented per design",
    "Responsive on mobile, tablet, desktop",
    "Unit tests passing (>80% coverage)",
    "API integration tested",
    "No console errors or warnings",
    "Accessibility (WCAG 2.1 AA) verified",
    "Performance: Lighthouse score ≥ 80"
  ]}
];

const feTemplate2Fields: TemplateField[] = [
  { id: "taskId", label: "Task ID", type: "text", placeholder: "FE-[YYYYMMDD]-[NUM]" },
  { id: "projectName", label: "Project Name", type: "text" },
  { id: "componentPage", label: "Component / Page", type: "text" },
  { id: "developerName", label: "Developer Name", type: "text" },
  { id: "receivedDate", label: "Received Date", type: "date" },
  { id: "commitmentDate", label: "Commitment Date", type: "date" },
  { id: "taskUnderstood", label: "Task Understanding Checklist", type: "checkbox-group", checkboxes: [
    "Design / Figma file reviewed",
    "API contracts understood",
    "Responsive requirements confirmed",
    "Accessibility requirements noted",
    "State management approach agreed",
    "Browser compatibility targets confirmed"
  ]},
  { id: "commitmentStatement", label: "Commitment Statement", type: "textarea" },
  { id: "technicalApproach", label: "Technical Approach", type: "textarea", placeholder: "Component structure, state management, API integration strategy." },
  { id: "risksIdentified", label: "Risks / Blockers Identified", type: "textarea" },
  { id: "clarificationsNeeded", label: "Clarifications Needed", type: "textarea" },
  { id: "developerSignature", label: "Developer Signature", type: "text" },
  { id: "signatureDate", label: "Date", type: "date" }
];

const feTemplate3Fields: TemplateField[] = [
  { id: "taskId", label: "Task ID", type: "text", placeholder: "FE-[YYYYMMDD]-[NUM]" },
  { id: "projectName", label: "Project Name", type: "text" },
  { id: "componentPage", label: "Component / Page Reviewed", type: "text" },
  { id: "reviewerName", label: "Reviewer Name", type: "text" },
  { id: "reviewDate", label: "Review Date", type: "date" },
  { id: "codeQuality", label: "Code Quality", type: "checkbox-group", checkboxes: [
    "Code follows project conventions & style guide",
    "No commented-out or dead code",
    "No hardcoded values — constants / env vars used",
    "Components are single-responsibility",
    "Reusable components extracted appropriately",
    "TypeScript types correct — no any"
  ]},
  { id: "functionalChecklist", label: "Functionality", type: "checkbox-group", checkboxes: [
    "All acceptance criteria met",
    "API integration correct — error states handled",
    "Form validation implemented",
    "Loading / empty / error states designed",
    "Navigation / routing correct"
  ]},
  { id: "designChecklist", label: "Design Fidelity", type: "checkbox-group", checkboxes: [
    "Matches Figma design accurately",
    "Responsive on all target breakpoints",
    "Animations / transitions match spec",
    "Correct fonts, colours, spacing"
  ]},
  { id: "performanceChecklist", label: "Performance", type: "checkbox-group", checkboxes: [
    "No unnecessary re-renders",
    "Images optimised (WebP, lazy loaded)",
    "Code-splitting applied for large bundles",
    "No memory leaks in useEffect"
  ]},
  { id: "testingChecklist", label: "Testing", type: "checkbox-group", checkboxes: [
    "Unit tests written and passing",
    "Integration tests covering key flows",
    "No critical console errors or warnings"
  ]},
  { id: "reviewComments", label: "Review Comments", type: "textarea" },
  { id: "approval", label: "Approval Decision", type: "select", options: ["Approved", "Approved with changes", "Rejected — rework required"] },
  { id: "reviewerSignature", label: "Reviewer Signature", type: "text" },
  { id: "signatureDate", label: "Signature Date", type: "date" }
];

const feTemplate4Fields: TemplateField[] = [
  { id: "taskId", label: "Task ID", type: "text", placeholder: "FE-[YYYYMMDD]-[NUM]" },
  { id: "projectName", label: "Project Name", type: "text" },
  { id: "riskIdentifier", label: "Risk Identifier", type: "text" },
  { id: "date", label: "Date", type: "date" },
  { id: "riskCategories", label: "Risk Categories", type: "checkbox-group", checkboxes: [
    "Breaking API changes from backend",
    "Third-party library dependency issues",
    "Browser compatibility issues",
    "Performance regression",
    "Design-implementation mismatch",
    "State management complexity",
    "Timeline / scope creep risk"
  ]},
  { id: "riskDescription", label: "Risk Description", type: "textarea" },
  { id: "probability", label: "Probability", type: "select", options: ["High", "Medium", "Low"] },
  { id: "severity", label: "Severity", type: "select", options: ["High", "Medium", "Low"] },
  { id: "riskScore", label: "Risk Score", type: "select", options: ["High", "Medium", "Low"] },
  { id: "mitigationPlan", label: "Mitigation Plan", type: "textarea" },
  { id: "technicalDebt", label: "Technical Debt Identified", type: "textarea", placeholder: "Any shortcuts taken? Plan to address later?" },
  { id: "owner", label: "Risk Owner", type: "text" },
  { id: "reviewDate", label: "Review Date", type: "date" },
  { id: "status", label: "Status", type: "select", options: ["Open", "In Progress", "Mitigated", "Closed"] }
];

const feTemplate5Fields: TemplateField[] = [
  { id: "taskId", label: "Task ID", type: "text", placeholder: "FE-[YYYYMMDD]-[NUM]" },
  { id: "projectName", label: "Project Name", type: "text" },
  { id: "componentPage", label: "Component / Page", type: "text" },
  { id: "developerName", label: "Developer Name", type: "text" },
  { id: "deliveryDate", label: "Delivery Date", type: "date" },
  { id: "deliveryStatus", label: "Delivery Status", type: "select", options: ["On Time", "Delayed", "Needs Revision"] },
  { id: "delayReason", label: "Reason if Delayed", type: "text" },
  { id: "implementationChecklist", label: "Implementation", type: "checkbox-group", checkboxes: [
    "All components implemented per design",
    "API integration working correctly",
    "Form validation implemented",
    "Error & loading states handled"
  ]},
  { id: "qualityChecklist", label: "Quality", type: "checkbox-group", checkboxes: [
    "Unit tests passing (>80% coverage)",
    "Integration tests passing",
    "No critical console errors",
    "No critical bugs outstanding"
  ]},
  { id: "performanceChecklist", label: "Performance", type: "checkbox-group", checkboxes: [
    "Response time within target",
    "Lighthouse score ≥ 80",
    "No memory leaks",
    "Images and assets optimised"
  ]},
  { id: "accessibilityChecklist", label: "Accessibility & Responsiveness", type: "checkbox-group", checkboxes: [
    "WCAG 2.1 AA compliance verified",
    "Responsive on mobile, tablet, desktop",
    "Keyboard navigation working",
    "Screen reader tested"
  ]},
  { id: "deploymentChecklist", label: "Deployment", type: "checkbox-group", checkboxes: [
    "Environment variables configured",
    "Build passing in CI/CD",
    "Staging environment validated"
  ]},
  { id: "approvalDecision", label: "Approval", type: "select", options: ["Approved", "Rejected for Revision"] },
  { id: "approvedBy", label: "Approved By", type: "text" },
  { id: "approvalDate", label: "Approval Date", type: "date" }
];

const feTemplate6Fields: TemplateField[] = [
  { id: "taskId", label: "Task ID", type: "text", placeholder: "FE-[YYYYMMDD]-[NUM]" },
  { id: "projectName", label: "Project Name", type: "text" },
  { id: "componentPage", label: "Component / Page", type: "text" },
  { id: "developerName", label: "Developer Name", type: "text" },
  { id: "handoverDate", label: "Handover Date", type: "date" },
  { id: "handoverTo", label: "Handover Recipients", type: "checkbox-group", checkboxes: [
    "QA Team — Functional & regression testing",
    "DevOps Team — Deployment & monitoring",
    "Product Team — Feature sign-off",
    "Design Team — Design QA"
  ]},
  { id: "handoverItems", label: "Handover Items", type: "checkbox-group", checkboxes: [
    "Source code (PR merged)",
    "PR link",
    "Storybook / component documentation",
    "Unit & integration test results",
    "Lighthouse performance report",
    "Accessibility audit report",
    "Environment variables documented",
    "Known issues list"
  ]},
  { id: "knowledgeTransfer", label: "Knowledge Transfer Notes", type: "textarea" },
  { id: "knownIssues", label: "Known Issues & Limitations", type: "textarea" },
  { id: "finalDeclaration", label: "Final Declaration", type: "textarea" },
  { id: "approvalStatus", label: "Handover Status", type: "select", options: ["Handover Completed", "Additional Clarification Required"] },
  { id: "developerSignature", label: "Developer Signature", type: "text" },
  { id: "receiverSignature", label: "Receiver Signature", type: "text" },
  { id: "completionDate", label: "Completion Date", type: "date" }
];

// ─── BACKEND ──────────────────────────────────────────────────────────────────

const beTemplate1Fields: TemplateField[] = [
  { id: "taskId", label: "Task ID", type: "text", placeholder: "BE-[YYYYMMDD]-[NUM]" },
  { id: "projectName", label: "Project Name", type: "text" },
  { id: "moduleService", label: "Module / Service", type: "text", placeholder: "e.g. User Service, Payment API" },
  { id: "assignedTo", label: "Assigned To", type: "text", placeholder: "Backend Developer Name" },
  { id: "assignedBy", label: "Assigned By", type: "text" },
  { id: "environment", label: "Environment", type: "select", options: ["Development", "Staging", "Production"] },
  { id: "priority", label: "Priority", type: "select", options: ["High", "Medium", "Low"] },
  { id: "startDate", label: "Start Date", type: "date" },
  { id: "deadline", label: "Deadline", type: "date" },
  { id: "estimatedHours", label: "Estimated Hours / Days", type: "text" },
  { id: "techStack", label: "Tech Stack", type: "text", placeholder: "e.g. Node.js, Express, PostgreSQL, Redis" },
  { id: "objective", label: "Objective", type: "textarea" },
  { id: "scope", label: "Scope", type: "textarea", placeholder: "APIs, services, database changes, integrations in scope." },
  { id: "apiEndpoints", label: "API Endpoints to Implement", type: "textarea", placeholder: "GET /api/v1/... | POST /api/v1/... | etc." },
  { id: "successCriteria", label: "Success Criteria", type: "checkbox-group", checkboxes: [
    "All API endpoints implemented per specification",
    "Request validation working",
    "Error handling complete",
    "Unit tests passing (>80% coverage)",
    "Integration tests passing",
    "API documentation (Swagger/OpenAPI) updated",
    "Security — authentication & authorisation enforced",
    "Performance targets met"
  ]}
];

const beTemplate2Fields: TemplateField[] = [
  { id: "taskId", label: "Task ID", type: "text", placeholder: "BE-[YYYYMMDD]-[NUM]" },
  { id: "projectName", label: "Project Name", type: "text" },
  { id: "moduleService", label: "Module / Service", type: "text" },
  { id: "developerName", label: "Developer Name", type: "text" },
  { id: "receivedDate", label: "Received Date", type: "date" },
  { id: "commitmentDate", label: "Commitment Date", type: "date" },
  { id: "taskUnderstood", label: "Task Understanding Checklist", type: "checkbox-group", checkboxes: [
    "API specification reviewed",
    "Database schema requirements understood",
    "Authentication / authorisation requirements confirmed",
    "Third-party integrations identified",
    "Performance targets acknowledged",
    "Deployment requirements confirmed"
  ]},
  { id: "commitmentStatement", label: "Commitment Statement", type: "textarea" },
  { id: "technicalApproach", label: "Technical Approach", type: "textarea", placeholder: "Architecture decisions, framework choices, data flow." },
  { id: "risksIdentified", label: "Risks / Blockers Identified", type: "textarea" },
  { id: "clarificationsNeeded", label: "Clarifications Needed", type: "textarea" },
  { id: "developerSignature", label: "Developer Signature", type: "text" },
  { id: "signatureDate", label: "Date", type: "date" }
];

const beTemplate3Fields: TemplateField[] = [
  { id: "taskId", label: "Task ID", type: "text", placeholder: "BE-[YYYYMMDD]-[NUM]" },
  { id: "projectName", label: "Project Name", type: "text" },
  { id: "moduleService", label: "Module / Service Reviewed", type: "text" },
  { id: "reviewerName", label: "Reviewer Name", type: "text" },
  { id: "reviewDate", label: "Review Date", type: "date" },
  { id: "codeQuality", label: "Code Quality", type: "checkbox-group", checkboxes: [
    "Code follows project conventions",
    "No dead or commented-out code",
    "No hardcoded secrets or magic values",
    "Single responsibility principle applied",
    "Proper error handling on all paths",
    "TypeScript types correct — no any"
  ]},
  { id: "apiChecklist", label: "API Design", type: "checkbox-group", checkboxes: [
    "All endpoints implemented per specification",
    "RESTful conventions followed",
    "Request validation on all inputs",
    "Response format consistent",
    "HTTP status codes correct",
    "Error responses include useful messages"
  ]},
  { id: "securityChecklist", label: "Security", type: "checkbox-group", checkboxes: [
    "Authentication implemented correctly",
    "Authorisation checks in place",
    "Input validation prevents injection",
    "Rate limiting configured",
    "No sensitive data in logs or responses"
  ]},
  { id: "testingChecklist", label: "Testing", type: "checkbox-group", checkboxes: [
    "Unit tests written and passing",
    "Integration / API tests passing",
    "Edge cases and error paths tested"
  ]},
  { id: "performanceChecklist", label: "Performance & Reliability", type: "checkbox-group", checkboxes: [
    "Database queries optimised",
    "N+1 queries eliminated",
    "Async operations handled correctly",
    "No memory leaks"
  ]},
  { id: "reviewComments", label: "Review Comments", type: "textarea" },
  { id: "approval", label: "Approval Decision", type: "select", options: ["Approved", "Approved with changes", "Rejected — rework required"] },
  { id: "reviewerSignature", label: "Reviewer Signature", type: "text" },
  { id: "signatureDate", label: "Signature Date", type: "date" }
];

const beTemplate4Fields: TemplateField[] = [
  { id: "taskId", label: "Task ID", type: "text", placeholder: "BE-[YYYYMMDD]-[NUM]" },
  { id: "projectName", label: "Project Name", type: "text" },
  { id: "riskIdentifier", label: "Risk Identifier", type: "text" },
  { id: "date", label: "Date", type: "date" },
  { id: "riskCategories", label: "Risk Categories", type: "checkbox-group", checkboxes: [
    "Breaking API changes affecting frontend",
    "Database migration failure",
    "Third-party API dependency",
    "Security vulnerability",
    "Performance regression",
    "Async operation failure",
    "Data integrity risk",
    "Timeline delay"
  ]},
  { id: "riskDescription", label: "Risk Description", type: "textarea" },
  { id: "probability", label: "Probability", type: "select", options: ["High", "Medium", "Low"] },
  { id: "severity", label: "Severity", type: "select", options: ["High", "Medium", "Low"] },
  { id: "riskScore", label: "Risk Score", type: "select", options: ["High", "Medium", "Low"] },
  { id: "mitigationPlan", label: "Mitigation Plan", type: "textarea" },
  { id: "technicalDebt", label: "Technical Debt Identified", type: "textarea" },
  { id: "blockers", label: "Current Blockers", type: "textarea" },
  { id: "owner", label: "Risk Owner", type: "text" },
  { id: "reviewDate", label: "Review Date", type: "date" },
  { id: "status", label: "Status", type: "select", options: ["Open", "In Progress", "Mitigated", "Closed"] }
];

const beTemplate5Fields: TemplateField[] = [
  { id: "taskId", label: "Task ID", type: "text", placeholder: "BE-[YYYYMMDD]-[NUM]" },
  { id: "projectName", label: "Project Name", type: "text" },
  { id: "moduleService", label: "Module / Service", type: "text" },
  { id: "developerName", label: "Developer Name", type: "text" },
  { id: "deliveryDate", label: "Delivery Date", type: "date" },
  { id: "deliveryStatus", label: "Delivery Status", type: "select", options: ["On Time", "Delayed", "Needs Revision"] },
  { id: "delayReason", label: "Reason if Delayed", type: "text" },
  { id: "apiChecklist", label: "API Implementation", type: "checkbox-group", checkboxes: [
    "All endpoints implemented per specification",
    "Request validation working",
    "Response format correct",
    "Error handling complete"
  ]},
  { id: "dbChecklist", label: "Database", type: "checkbox-group", checkboxes: [
    "Database changes applied",
    "Migration scripts tested",
    "Rollback script ready",
    "Indexes added if needed",
    "Data integrity maintained"
  ]},
  { id: "securityChecklist", label: "Security", type: "checkbox-group", checkboxes: [
    "Authentication implemented",
    "Authorisation checks in place",
    "Input validation applied",
    "Rate limiting configured",
    "No security vulnerabilities outstanding"
  ]},
  { id: "testingChecklist", label: "Testing", type: "checkbox-group", checkboxes: [
    "Unit tests passing (>80% coverage)",
    "Integration tests passing",
    "API tests passing",
    "No critical bugs"
  ]},
  { id: "performanceChecklist", label: "Performance", type: "checkbox-group", checkboxes: [
    "Response time within target",
    "Concurrent requests handled",
    "Rate limiting working",
    "No memory leaks"
  ]},
  { id: "documentationChecklist", label: "Documentation", type: "checkbox-group", checkboxes: [
    "Swagger / OpenAPI updated",
    "Postman collection updated",
    "API documentation complete",
    "Environment variables documented"
  ]},
  { id: "approvalDecision", label: "Approval", type: "select", options: ["Approved", "Rejected for Revision"] },
  { id: "approvedBy", label: "Approved By", type: "text" },
  { id: "approvalDate", label: "Approval Date", type: "date" }
];

const beTemplate6Fields: TemplateField[] = [
  { id: "taskId", label: "Task ID", type: "text", placeholder: "BE-[YYYYMMDD]-[NUM]" },
  { id: "projectName", label: "Project Name", type: "text" },
  { id: "moduleService", label: "Module / Service", type: "text" },
  { id: "developerName", label: "Developer Name", type: "text" },
  { id: "handoverDate", label: "Handover Date", type: "date" },
  { id: "handoverTo", label: "Handover Recipients", type: "checkbox-group", checkboxes: [
    "Frontend Team — API integration & contract",
    "QA Team — Integration testing",
    "DevOps Team — Deployment & monitoring",
    "Product Team — Feature sign-off",
    "Support Team — Troubleshooting"
  ]},
  { id: "handoverItems", label: "Handover Items", type: "checkbox-group", checkboxes: [
    "Source code (PR merged)",
    "PR link",
    "Swagger / OpenAPI spec",
    "Postman collection",
    "Migration scripts",
    "Rollback scripts",
    "Environment variables (.env.example)",
    "Deployment instructions",
    "API documentation",
    "Known issues list",
    "Performance test results"
  ]},
  { id: "apiContract", label: "API Contract Summary (Base URL & Key Endpoints)", type: "textarea", placeholder: "Base URL: ...\nGET /api/v1/... — purpose\nPOST /api/v1/... — purpose" },
  { id: "knowledgeTransfer", label: "Knowledge Transfer Notes", type: "textarea" },
  { id: "knownIssues", label: "Known Issues & Limitations", type: "textarea" },
  { id: "monitoringAlerts", label: "Monitoring & Alerts", type: "checkbox-group", checkboxes: [
    "Error rate > 1% alert configured",
    "Response time > target alert configured",
    "Database connection pool alert configured",
    "Metrics dashboard set up"
  ]},
  { id: "finalDeclaration", label: "Final Declaration", type: "textarea", placeholder: "I confirm that all backend work has been completed, tested, documented, and properly handed over." },
  { id: "approvalStatus", label: "Handover Status", type: "select", options: ["Handover Completed", "Additional Clarification Required"] },
  { id: "developerSignature", label: "Developer Signature", type: "text" },
  { id: "receiverSignature", label: "Receiver Signature", type: "text" },
  { id: "completionDate", label: "Completion Date", type: "date" }
];

// ─── CATEGORIES ───────────────────────────────────────────────────────────────

export const categories: Category[] = [
  {
    id: "architecture",
    name: "Architecture Task Management",
    icon: Building2,
    templates: [
      { id: "arch-1", name: "Task Assignment Template", type: "assignment", fields: archTemplate1Fields },
      { id: "arch-2", name: "Architecture Design Review Template", type: "review", fields: archTemplate2Fields },
      { id: "arch-3", name: "Risk Identification Template", type: "risk", fields: archTemplate3Fields },
      { id: "arch-4", name: "Delivery Confirmation Template", type: "delivery", fields: archTemplate4Fields },
      { id: "arch-5", name: "Commitment & Handover Template", type: "handover", fields: archTemplate5Fields },
      { id: "arch-6", name: "Change Request Template", type: "assignment", fields: archTemplate6Fields },
      { id: "arch-7", name: "Non-Functional Requirements (NFR) Checklist", type: "review", fields: archTemplate7Fields },
      { id: "arch-8", name: "Architecture Decision Record (ADR)", type: "assignment", fields: archTemplate8Fields },
    ]
  },
  {
    id: "database",
    name: "Database Task Management",
    icon: Database,
    templates: [
      { id: "db-1", name: "Database Task Assignment", type: "assignment", fields: dbTemplate1Fields },
      { id: "db-2", name: "Database Task Receipt & Commitment", type: "receipt", fields: dbTemplate2Fields },
      { id: "db-3", name: "Database Design Review", type: "review", fields: dbTemplate3Fields },
      { id: "db-4", name: "Database Risk & Migration Assessment", type: "risk", fields: dbTemplate4Fields },
      { id: "db-5", name: "Database Delivery Confirmation", type: "delivery", fields: dbTemplate5Fields },
      { id: "db-6", name: "Database Commitment & Handover", type: "handover", fields: dbTemplate6Fields },
    ]
  },
  {
    id: "uiux",
    name: "UI/UX Task Management",
    icon: Palette,
    templates: [
      { id: "ui-1", name: "UI/UX Task Assignment", type: "assignment", fields: uiTemplate1Fields },
      { id: "ui-2", name: "UI/UX Task Receipt & Commitment", type: "receipt", fields: uiTemplate2Fields },
      { id: "ui-3", name: "UI/UX Design Review", type: "review", fields: uiTemplate3Fields },
      { id: "ui-4", name: "UI/UX Risk & Blocker Assessment", type: "risk", fields: uiTemplate4Fields },
      { id: "ui-5", name: "UI/UX Delivery Confirmation", type: "delivery", fields: uiTemplate5Fields },
      { id: "ui-6", name: "UI/UX Commitment & Handover", type: "handover", fields: uiTemplate6Fields },
    ]
  },
  {
    id: "security",
    name: "Security Task Management",
    icon: ShieldCheck,
    templates: [
      { id: "sec-1", name: "Security Task Assignment", type: "assignment", fields: secTemplate1Fields },
      { id: "sec-2", name: "Security Review & Validation", type: "review", fields: secTemplate2Fields },
      { id: "sec-3", name: "Security Review & Validation (Extended)", type: "review", fields: secTemplate3Fields },
      { id: "sec-4", name: "Security Risk & Vulnerability Assessment", type: "risk", fields: secTemplate4Fields },
      { id: "sec-5", name: "Security Delivery Confirmation", type: "delivery", fields: secTemplate5Fields },
      { id: "sec-6", name: "Security Commitment & Handover", type: "handover", fields: secTemplate6Fields },
    ]
  },
  {
    id: "frontend",
    name: "Frontend Task Management",
    icon: Monitor,
    templates: [
      { id: "fe-1", name: "Frontend Task Assignment", type: "assignment", fields: feTemplate1Fields },
      { id: "fe-2", name: "Frontend Task Receipt & Commitment", type: "receipt", fields: feTemplate2Fields },
      { id: "fe-3", name: "Frontend Code & Design Review", type: "review", fields: feTemplate3Fields },
      { id: "fe-4", name: "Frontend Risk & Technical Assessment", type: "risk", fields: feTemplate4Fields },
      { id: "fe-5", name: "Frontend Delivery Confirmation", type: "delivery", fields: feTemplate5Fields },
      { id: "fe-6", name: "Frontend Commitment & Handover", type: "handover", fields: feTemplate6Fields },
    ]
  },
  {
    id: "backend",
    name: "Backend Task Management",
    icon: Server,
    templates: [
      { id: "be-1", name: "Backend Task Assignment", type: "assignment", fields: beTemplate1Fields },
      { id: "be-2", name: "Backend Task Receipt & Commitment", type: "receipt", fields: beTemplate2Fields },
      { id: "be-3", name: "Backend Code & API Review", type: "review", fields: beTemplate3Fields },
      { id: "be-4", name: "Backend Risk & Technical Assessment", type: "risk", fields: beTemplate4Fields },
      { id: "be-5", name: "Backend Delivery Confirmation", type: "delivery", fields: beTemplate5Fields },
      { id: "be-6", name: "Backend Commitment & Handover", type: "handover", fields: beTemplate6Fields },
    ]
  }
];
