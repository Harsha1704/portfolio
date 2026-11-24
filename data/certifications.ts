import { CertificationItem } from "@/types";

export const certificationsData: CertificationItem[] = [
  {
    id: "oracle-mysql",
    title: "Oracle Certified Associate — MySQL Database",
    issuer: "Oracle Corporation",
    date: "September 2026",
    verificationStatus: "Verified Industry",
    strategicValue:
      "Validates relational database administration, schema design, ACID transactions, complex SQL queries, and relational persistence pipelines for software applications.",
    competencies: [
      "Relational Database Schema Design & Normalization",
      "ACID Transaction Management & Integrity Constraints",
      "Complex SQL Joins, Indexing & Query Optimization",
      "Data Persistence for Python/Node.js Web Architectures",
    ],
    credentialNote:
      "Certification credential on file (verification ID available upon request).",
  },
  {
    id: "react-tech-veda",
    title: "React.js Professional Certification",
    issuer: "Tech Veda",
    date: "April 2026",
    verificationStatus: "Verified Professional",
    strategicValue:
      "Validates practical engineering proficiency in component composition, custom React hooks, state lifecycle patterns, and asynchronous API integration.",
    competencies: [
      "Component-Driven Architecture & Design Hierarchy",
      "State & Props Lifecycle Management",
      "Custom React Hooks (useState, useEffect, useMemo, useCallback)",
      "Virtual DOM Reconciliation & Rendering Performance",
      "Asynchronous REST API Integration & Error Boundaries",
    ],
    credentialNote:
      "Certification awarded following practical technical assessment and coursework completion at Tech Veda.",
  },
  {
    id: "frontend-great-learning",
    title: "Front End Development Certification",
    issuer: "Great Learning",
    date: "November 2024",
    verificationStatus: "Verified Course",
    strategicValue:
      "Establishes rigorous foundations in standards-compliant semantic HTML5, modern CSS3 layout paradigms, and JavaScript ES6+ browser scripting.",
    competencies: [
      "HTML5 Semantic Document Structures & ARIA Accessibility",
      "Responsive Modern CSS3 (Flexbox & CSS Grid Systems)",
      "JavaScript ES6+ Standards & Asynchronous Programming",
      "Cross-Device Viewport Ergonomics & Responsive Design",
    ],
    credentialNote:
      "Accreditation issued upon completion of comprehensive frontend engineering curriculum by Great Learning.",
  },
];
