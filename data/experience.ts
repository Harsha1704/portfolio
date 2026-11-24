import { ExperienceItem } from "@/types";

export const experienceData: ExperienceItem[] = [
  {
    id: "edufiy-tech-solutions",
    role: "AI/ML Intern",
    company: "Edufiy Tech Solutions",
    period: "January 2025 – March 2025",
    location: "Technical Engineering Internship (Remote)",
    type: "Industry Internship",
    summary:
      "Contributed to machine learning pipeline development, exploratory data preprocessing workflows, and predictive model evaluation routines within an agile software engineering team.",
    bullets: [
      "Engineered end-to-end data preprocessing, missing-value imputation, outlier detection, and feature engineering workflows in Python using Pandas and NumPy.",
      "Trained, benchmarked, and evaluated machine learning models (Scikit-learn) across standard classification metrics including precision, recall, F1-score, and ROC-AUC.",
      "Collaborated with senior software engineers to package Python-based model inference routines into modular RESTful Flask backend services.",
      "Participated actively in daily Agile standups, two-week sprint reviews, user story tracking via Jira, and collaborative Git version control.",
    ],
    responsibilityGroups: [
      {
        area: "Data Preprocessing & Feature Engineering",
        points: [
          "Handled missing-value imputation, distribution scaling, and categorical encoding using Pandas and NumPy.",
          "Constructed structured feature transformation pipelines to convert raw tabular inputs into numerical feature matrices.",
        ],
      },
      {
        area: "Machine Learning Model Development",
        points: [
          "Configured, trained, and benchmarked baseline classification models using Scikit-learn.",
          "Conducted hyperparameter tuning and partitioned training/test subsets to establish consistent baseline performance.",
        ],
      },
      {
        area: "Validation & Performance Evaluation",
        points: [
          "Assessed model predictive accuracy across standard metrics: precision, recall, F1-score, and confusion matrices.",
          "Analyzed prediction discrepancies to identify feature limitations and guide data cleaning iterations.",
        ],
      },
      {
        area: "Service Packaging & Agile Collaboration",
        points: [
          "Encapsulated inference routines into modular Python Flask REST endpoints for internal service integration.",
          "Maintained daily standup reporting, sprint task estimation in Jira, and version control workflows in Git.",
        ],
      },
    ],
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Flask",
      "Git",
      "Jira",
      "Agile",
    ],
    certificateUrl:
      "https://drive.google.com/file/d/1x2jl_QRwv2fDJNII6fW0B_uY6zDk5b3_/view?usp=sharing",
    confidentialityNote:
      "Proprietary company workflows, client deliverables, and commercial dataset specifics at Edufiy Tech Solutions are omitted in accordance with professional confidentiality ethics and business practices.",
  },
];
