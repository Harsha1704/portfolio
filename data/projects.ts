import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    id: "satquery-ai",
    slug: "satquery-ai",
    systemFlowDiagram: {
      title: "SatQuery AI Multimodal Spatial-Language Flow",
      caption: "OpenCV multi-scale raster image tiling coupled with Vision-Language Model prompting for natural language satellite imagery interrogation.",
      explanation: "High-resolution geospatial imagery is sliced into 512x512 tile patches with coordinate metadata. Analyst natural language prompts are combined with localized spatial context and passed to a multimodal vision-language model API (GPT-4 Vision / Gemini API). The model returns localized land-use classifications and semantic bounding coordinates rendered onto an interactive React web canvas.",
      steps: [
        {
          stage: "Data Ingestion",
          title: "Raster Imagery & Natural Language Prompt",
          component: "GeoTIFF / PNG Ingestion & Query Parser",
          description: "Ingests high-resolution satellite imagery alongside analyst natural language queries.",
          status: "implemented",
          badgeText: "Multimodal Inputs",
        },
        {
          stage: "Featurization",
          title: "Multi-Scale OpenCV Spatial Tiling",
          component: "OpenCV Slicer & Thumbnail Generator",
          description: "Slices large overhead scenes into 512x512 tile grids to preserve fine detail within token budgets.",
          status: "implemented",
          badgeText: "Tile Pyramids",
        },
        {
          stage: "ML Inference",
          title: "Vision-Language Spatial Reasoning",
          component: "GPT-4V / Gemini API Multimodal Model",
          description: "Evaluates image tiles against zero-shot spatial bounding-box prompts and land-use taxonomy.",
          status: "implemented",
          badgeText: "Zero-Shot Reasoning",
        },
        {
          stage: "Backend API",
          title: "Python Orchestration Service",
          component: "Python Flask / HTTP Client Orchestrator",
          description: "Manages API rate limits, exponential backoff, and converts model text to structured coordinates.",
          status: "implemented",
          badgeText: "JSON Serialization",
        },
        {
          stage: "User Interface",
          title: "Interactive Spatial Canvas & Chat",
          component: "React.js Geospatial Viewport",
          description: "Displays imagery with bounding box overlays, land-use classifications, and conversational sidebar.",
          status: "implemented",
          badgeText: "Interactive Canvas",
        },
      ],
    },
    mlServing: {
      pipelineTitle: "SatQuery AI ML-to-Web Serving Architecture",
      pipelineDescription: "How large overhead raster datasets are tiled, contextualized into multimodal API prompts, and streamed into interactive client-side visual overlays.",
      dataInput: {
        title: "Raster Imagery Upload & Analyst Query Ingestion",
        description: "Users upload overhead aerial imagery or select pre-loaded GIS scenes, accompanied by natural language queries targeting infrastructure, land-use, or anomalous patterns.",
      },
      featureAndInference: {
        title: "Multi-Scale Tiling & Multimodal Vision-Language Inference",
        description: "OpenCV partitions the large raster into 512x512 pixel patches to preserve resolution without exceeding API token budgets. Vision-language models evaluate tiles against domain-specific spatial prompts.",
      },
      backendIntegration: {
        title: "Python Orchestration & API Rate-Limit Handling",
        description: "Backend coordinates parallel tile queries, formats system prompts with geographic taxonomy rules, and aggregates JSON bounding boxes and semantic interpretations.",
      },
      frontendCommunication: {
        title: "REST API Responses & Geospatial Coordinate Mapping",
        description: "The React frontend receives structured tile metadata and relative bounding coordinates, transforming model outputs into pixel-accurate canvas overlays.",
      },
      outputVisualization: {
        title: "Interactive Map Viewport & Multi-Turn Chat",
        description: "Displays high-resolution imagery with highlighted bounding boxes, land-use classification tags, and a conversational chat sidebar explaining spatial findings.",
      },
      operationalCaveat: "Research prototype in active development; relies on external multimodal LLM APIs with provider-dependent token latency.",
    },

    title: "SatQuery AI",
    subtitle: "Interactive Vision-Language Assistant for Multimodal Remote Sensing Image Analysis",
    category: "Multimodal AI",
    status: "prototype",
    statusLabel: "Prototype / Local Development",
    summary:
      "An interactive vision-language assistant designed to ingest remote sensing and aerial imagery, allowing domain practitioners to query geographic visual patterns, land-use classifications, and infrastructure anomalies using natural language.",
    tags: ["Multimodal AI", "Computer Vision", "Python", "Flask", "React.js", "OpenCV"],
    liveUrl: null,
    repoUrl: "https://github.com/Harsha1704/Satquery_ai",
    timeline: "2024 - Present",
    featured: true,
    order: 1,
    objectives: [
      "Bridge the semantic gap between overhead nadir satellite imagery and domain-specific analytical queries.",
      "Eliminate manual GIS visual scanning by converting natural language prompts into targeted spatial insights.",
      "Design an extensible pipeline supporting optical, multispectral, and SAR raster tile ingestion.",
      "Evaluate inference latency targets for interactive browser-based spatial exploration (provider dependent).",
    ],
    problemStatement: {
      context:
        "Remote sensing imagery from orbital satellites and aerial drones captures critical environmental, urban, and agricultural intelligence. However, standard geospatial analysis requires specialized GIS software (ArcGIS, QGIS) and manual interpretation by trained analysts.",
      coreChallenge:
        "Standard vision-language models are predominantly trained on horizontal, ground-level photography. When presented with overhead nadir perspectives, dense repetitive textures, and varying ground sampling distances (GSD), they suffer from spatial disorientation and hallucination.",
      engineeringGoal:
        "Engineer a prompt-guided visual reasoning pipeline that normalizes aerial raster tiles, extracts multi-scale feature patches, and aligns visual embeddings with geographic reasoning tokens for structured contextual analysis.",
    },
    architectureSummary:
      "Ingests raster tiles into a vision backbone for multi-scale feature extraction, fusing visual embeddings with user prompt tokens via cross-attention layers to yield structured spatial interpretations.",
    architectureLayers: [
      {
        layer: "Client & Presentation",
        component: "React.js + Tailwind CSS Geospatial Explorer (UI Prototype)",
        details: "Interactive raster tile canvas, viewport coordinate tracker, prompt input console, and structured visual telemetry.",
        status: "implemented",
      },
      {
        layer: "API Gateway & Routing",
        component: "Flask REST API Services",
        details: "Asynchronous task dispatch, image payload validation, session management, and spatial response serialization.",
        status: "implemented",
      },
      {
        layer: "Preprocessing & Vision Ingestion",
        component: "OpenCV & NumPy Preprocessing Pipeline (Conceptual / Prototype)",
        details: "Dynamic window tiling (512x512 target patch size), contrast normalization, and histogram equalization specification.",
        status: "implemented",
      },
      {
        layer: "Vision-Language Reasoning Engine",
        component: "Multimodal Foundation Model API Adapter",
        details: "Prompt-guided spatial anchoring and zero-shot geographic categorization via vision-language APIs (Gemini / OpenAI Vision).",
        status: "implemented",
      },
      {
        layer: "Spatial Grounding & Bounding",
        component: "Coordinate Grounding & Heatmap Engine",
        details: "Pixel-to-geocoordinate bounding box projection and visual highlight overlays for identified terrain features.",
        status: "planned",
      },
      {
        layer: "Fine-Tuning & Custom Adapters",
        component: "Domain-Specific LoRA Weights",
        details: "Parameter-efficient fine-tuning on LandCoverNet and RSVQA aerial benchmarks for enhanced remote sensing precision.",
        status: "planned",
      },
    ],
    mermaidDiagram: `flowchart LR
    A[Satellite / Aerial Tile Input] --> B[Image Preprocessing & Patching]
    B --> C[Vision Backbone / Feature Extraction]
    UserPrompt[Natural Language Query] --> D[Text Tokenizer & Prompt Pipeline]
    C --> E[Multimodal Fusion / Cross-Attention]
    D --> E
    E --> F[Inference & Reasoning Engine]
    F --> G[Structured Spatial Insights]`,
    implementationSections: [
      {
        title: "Overhead Perspective Preprocessing & Tiling Specification",
        description:
          "Satellite raster tiles can exceed standard model input dimensions (e.g., 4096x4096px). The ingestion architecture specifies segmenting scenes into 512x512 patches with border padding.",
        items: [
          "Target windowing designed to preserve edge continuity across adjacent tile boundaries.",
          "Histogram equalization specified to mitigate variations in atmospheric lighting and cloud shadows.",
          "Band normalization handles RGB visual spectrum and simulated multispectral composite views.",
        ],
      },
      {
        title: "Prompt Engineering & Spatial Grounding Anchors",
        description:
          "To mitigate orientation confusion inherent to nadir views, queries are enriched with geographic anchor prompts defining scale, elevation context, and target semantic categories.",
        items: [
          "System prompt conditioning enforces domain-specific terminology (e.g., impervious surface, riparian buffer).",
          "Structured JSON response schema guarantees parseable spatial telemetry, land-cover percentages, and confidence ratings.",
          "Rejection sampling eliminates ambiguous inferences when tile resolution falls below recognizable GSD thresholds.",
        ],
      },
    ],
    screenshots: [
      {
        id: "sat-1",
        title: "Geospatial Tile Ingestion & Analysis Canvas",
        caption: "Conceptual UI visualization illustrating satellite tile upload, coordinate telemetry, and natural language query interface.",
        tag: "Conceptual UI",
        placeholderType: "geospatial",
      },
      {
        id: "sat-2",
        title: "Vision-Language Reasoning Telemetry",
        caption: "Conceptual inference telemetry mockup illustrating structured breakdown of land-use classifications and infrastructure detection.",
        tag: "Inference Concept",
        placeholderType: "pipeline",
      },
      {
        id: "sat-3",
        title: "Multi-Scale Patch Extraction Pipeline",
        caption: "Architectural diagram mockup illustrating tile normalization, sliding window extraction, and feature tensor alignment.",
        tag: "Pipeline Flow",
        placeholderType: "model",
      },
    ],
    implementedFeatures: [
      "Multimodal input ingestion for high-resolution remote sensing imagery and natural language queries.",
      "Vision-language alignment interpreting vegetation, water bodies, and urban infrastructure in context.",
      "Interactive query response pipeline generating descriptive structural insights and geographic categorizations.",
      "Pre-inference image normalization specification optimized for dense spatial representations.",
      "Structured output format parsing responses into land-use classifications, anomaly flags, and confidence indicators.",
    ],
    plannedFeatures: [
      "Bounding box spatial grounding with visual overlay highlighting queried geographic entities.",
      "Temporal change detection comparing multi-temporal scenes to summarize environmental shifts.",
      "Parameter-efficient domain adapters (LoRA) fine-tuned on LandCoverNet and RSVQA benchmarks.",
      "Direct GeoTIFF / shapefile vector layer export for GIS software compatibility.",
    ],
    techStack: [
      { category: "AI & Vision Models", items: ["Multimodal LLMs", "OpenAI Vision API / Gemini API", "Hugging Face Transformers"] },
      { category: "Backend & Processing", items: ["Python", "Flask", "OpenCV", "NumPy", "Pillow (PIL)"] },
      { category: "Frontend", items: ["React.js", "TypeScript", "Tailwind CSS", "Lucide React"] },
      { category: "Deployment Target", items: ["Vercel (Client)", "Render (API Engine)", "Docker"] },
    ],
    challenges: [
      {
        challenge: "Generic vision-language models struggle with overhead nadir perspectives versus horizontal imagery.",
        solution: "Engineered prompt-guided spatial anchors and preprocessing normalization to enhance land-cover context.",
      },
      {
        challenge: "High-resolution satellite tiles exceed maximum token payload limits of multimodal APIs.",
        solution: "Designed hierarchical downsampling and localized region-of-interest cropping prior to API transmission.",
      },
    ],
    metrics: [
      { label: "Inference Latency", value: "Not benchmarked (API dependent)" },
      { label: "Target Resolution", value: "Multi-scale raster tiles" },
      { label: "Target Patch Size", value: "512x512 px (Design spec)" },
      { label: "Validation Status", value: "Prototype (Unbenchmarked)" },
    ],
    resultsAndLimitations: {
      results: [
        "Demonstrates qualitative semantic interpretation of high-level geographic features (canopy cover, road networks, water bodies).",
        "Streamlines visual query formulation through natural language prompts instead of manual GIS toolchains.",
        "Generates structured JSON metadata alongside natural language explanations in test queries.",
      ],
      limitations: [
        "Inference latency is not formally benchmarked; live turnaround depends entirely on upstream foundation API provider quotas.",
        "Exact bounding box coordinate grounding is currently on the roadmap; responses currently provide textual spatial descriptions.",
        "Tested primarily on optical raster imagery; multispectral near-infrared (NIR) and SAR imagery support is in scoping.",
      ],
    },
    roadmap: [
      {
        phase: "Phase 1 (Current)",
        title: "Functional Core & API Pipeline",
        description: "Raster tile ingestion, preprocessing normalization, and multimodal vision-language query execution.",
      },
      {
        phase: "Phase 2 (Upcoming)",
        title: "Spatial Grounding & Heatmap Generation",
        description: "Visual bounding boxes and attention heatmaps overlaid directly onto the interactive map canvas.",
      },
      {
        phase: "Phase 3 (Future)",
        title: "Domain Fine-Tuning & Multi-Temporal Analysis",
        description: "Fine-tuned LoRA weights on LandCoverNet/RSVQA datasets and automated bi-temporal change detection.",
      },
    ],
  },
  {
    id: "resumematch-ai",
    slug: "resumematch-ai",
    systemFlowDiagram: {
      title: "ResumeMatch AI NLP Extraction & Match Flow",
      caption: "End-to-end document parsing, n-gram TF-IDF vectorization, calibrated Logistic Regression, and Jaccard token overlap scoring.",
      explanation: "Resumes in PDF or DOCX formats and target job descriptions are ingested via a Flask REST API. Text is extracted, normalized, and mapped to a technology alias dictionary. Word and character TF-IDF feature unions are passed into a calibrated Logistic Regression model to determine candidate suitability tiers, while Jaccard token overlap generates skill gap matrices for revision feedback.",
      steps: [
        {
          stage: "Data Ingestion",
          title: "Document & Job Text Ingestion",
          component: "PDF / DOCX Extractor & Input Handler",
          description: "Parses complex multi-format candidate resumes and raw job description requirements.",
          status: "implemented",
          badgeText: "Multipart Upload",
        },
        {
          stage: "Featurization",
          title: "NLP Normalization & TF-IDF",
          component: "Scikit-learn FeatureUnion (Word/Char N-Grams)",
          description: "Sanitizes text, normalizes technology aliases, and generates high-dimensional n-gram vectors.",
          status: "implemented",
          badgeText: "24 Category Dictionary",
        },
        {
          stage: "ML Inference",
          title: "Calibrated Suitability Scoring",
          component: "Logistic Regression + Jaccard Matcher",
          description: "Classifies candidate fit into actionable tiers (No Fit, Potential Fit, Good Fit) and computes overlap.",
          status: "implemented",
          badgeText: "Balanced Class Weights",
        },
        {
          stage: "Backend API",
          title: "Flask REST Microservice",
          component: "Python Flask REST Application",
          description: "Validates input payloads, executes extraction pipelines, and serializes match diagnostics to JSON.",
          status: "implemented",
          badgeText: "Live REST API",
        },
        {
          stage: "User Interface",
          title: "Diagnostic Career Telemetry UI",
          component: "React.js Interactive Client",
          description: "Renders match score gauges, keyword disparity matrices, and prioritized revision recommendations.",
          status: "implemented",
          badgeText: "Client Dashboard",
        },
      ],
    },
    mlServing: {
      pipelineTitle: "ResumeMatch AI ML-to-Web Serving Architecture",
      pipelineDescription: "End-to-end architectural flow connecting document text parsing, TF-IDF feature union transformation, scikit-learn model inference, and interactive client telemetry.",
      dataInput: {
        title: "Multipart Document Upload & Raw Text Extraction",
        description: "The web client submits resumes (PDF/DOCX) alongside job description strings via multipart HTTP POST. The backend parses documents and converts raw layouts into clean text.",
      },
      featureAndInference: {
        title: "TF-IDF N-Grams & Calibrated Logistic Regression",
        description: "Extracts word (1-3) and character (3-5) n-grams through scikit-learn FeatureUnion. Logistic Regression evaluates role alignment probability, while token sets compute Jaccard similarity.",
      },
      backendIntegration: {
        title: "Flask REST API & JSON Serialization",
        description: "Flask handles request routing, payload validation, and serializes match scores, detected entities, and keyword disparities into structured JSON responses.",
      },
      frontendCommunication: {
        title: "Asynchronous Fetch & State Management",
        description: "React frontend triggers asynchronous HTTP requests with upload progress indicators, receiving parsed skill matrices and match confidence scores.",
      },
      outputVisualization: {
        title: "Candidate Telemetry Gauges & Revision Matrices",
        description: "Visualizes candidate compatibility tiers (Good Fit, Potential Fit, No Fit), keyword alignment bars, missing skills checklists, and prioritized resume revision recommendations.",
      },
      operationalCaveat: "Interactive web client deployed live on Vercel; Python Flask REST API deployed on Render with automated health monitoring. Free-tier cloud instances may require a brief wake-up period on initial request.",
    },

    title: "ResumeMatch AI",
    subtitle: "Intelligent Resume-Job Description Alignment & Career Telemetry Platform",
    category: "Applied NLP & GenAI",
    status: "live",
    statusLabel: "Live Demo",
    summary:
      "A candidate telemetry platform that parses complex resume documents (PDF/DOCX), extracts semantic entities and skill profiles, and computes alignment metrics against target job descriptions with keyword disparity matrices.",
    tags: ["NLP", "Generative AI", "Scikit-learn", "React.js", "Flask", "Python", "Vercel", "Render"],
    liveUrl: "https://frontend-mu-rust-l6t4ywn0qf.vercel.app",
    apiUrl: "https://resumematch-ai-api-atil.onrender.com",
    repoUrl: "https://github.com/Harsha1704/ResumeMatch_AI",
    timeline: "2024 - Present",
    featured: true,
    order: 2,
    objectives: [
      "Eliminate keyword-stuffing vulnerabilities by measuring semantic and syntactic fit between candidate resumes and job requirements.",
      "Extract structured technical competencies, frameworks, and tools from unstructured multi-format documents (PDF/DOCX).",
      "Calculate mathematical skill gap disparity using Jaccard Similarity and vector space metrics.",
      "Deliver actionable, prioritized resume revision recommendations rather than opaque binary rejection scores.",
    ],
    problemStatement: {
      context:
        "Modern hiring pipelines process thousands of applicants through legacy Applicant Tracking Systems (ATS). Candidates frequently struggle to understand why their applications fail, while recruiters spend hours parsing mismatched credentials.",
      coreChallenge:
        "Legacy ATS platforms rely on brittle keyword matchers that miss relevant synonyms and fail when resumes use multi-column designs. Conversely, candidates lack transparent diagnostic tooling to identify exact vocabulary gaps.",
      engineeringGoal:
        "Build a natural language processing engine that extracts resume entities, normalizes technology aliases using a curated technology dictionary, and classifies candidate fit into actionable tiers (No Fit, Potential Fit, Good Fit).",
    },
    architectureSummary:
      "Multi-stage document extraction pipeline parsing unstructured text into structured entity graphs, mapped against tokenized job specifications using TF-IDF feature unions, calibrated Logistic Regression classification, and weighted requirement coverage.",
    architectureLayers: [
      {
        layer: "Client & Visualization",
        component: "React.js Dynamic Dashboard (UI Prototype)",
        details: "Drag-and-drop document upload, real-time match telemetry, skill gap disparity breakdown, and interactive recommendations.",
        status: "implemented",
      },
      {
        layer: "Document Ingestion & Parsing",
        component: "PyPDF2 & PDFMiner Extraction Pipeline",
        details: "Multi-page text extraction, tabular data stripping, layout normalization, and whitespace cleanup.",
        status: "implemented",
      },
      {
        layer: "Entity Recognition & Alias Normalization",
        component: "Curated Technology Alias Database",
        details: "Regex & dictionary normalization distinguishing ambiguous tokens (e.g. 'IT', 'R', 'Go') from target technical stacks.",
        status: "implemented",
      },
      {
        layer: "Machine Learning Classifier",
        component: "Scikit-learn Logistic Regression Baseline (Source Verified)",
        details: "Calibrated Logistic Regression (C=0.5/1.0, balanced weights) trained on word/char TF-IDF n-grams (resume_ml/classical.py, 292 passing tests).",
        status: "implemented",
      },
      {
        layer: "Similarity & Requirement Coverage",
        component: "Weighted Taxonomy Requirement Engine (Source Verified)",
        details: "Canonical requirement matching with priority weights (required: 1.0, optional: 0.25) and contextual evidence classification (backend/app/services/job_matching.py).",
        status: "implemented",
      },
      {
        layer: "Interview Intelligence Module",
        component: "Generative Question Generator",
        details: "Dynamic generation of targeted technical and behavioral interview preparation prompts based on identified skill gaps.",
        status: "planned",
      },
      {
        layer: "Persistence & Telemetry History",
        component: "PostgreSQL Database Layer",
        details: "Candidate profile tracking, historical resume iteration scoring, and multi-version comparison.",
        status: "planned",
      },
    ],
    mermaidDiagram: `flowchart TD
    DocInput[Resume PDF/DOCX] --> TextExtractor[Document Parsing & Text Extraction]
    JDInput[Job Description Text] --> JDCleaner[Text Preprocessing & Normalization]
    TextExtractor --> NLPParser[NER & Skill Entity Extraction]
    JDCleaner --> NLPParser
    NLPParser --> EmbeddingEngine[TF-IDF FeatureUnion & Word/Char N-Grams]
    EmbeddingEngine --> Classifier[Calibrated Logistic Regression Model]
    Classifier --> AnalyticsEngine[Weighted Requirement Coverage & Gap Analysis]
    AnalyticsEngine --> Dashboard[Interactive Candidate Dashboard]`,
    implementationSections: [
      {
        title: "Model Architecture: Calibrated Logistic Regression & TF-IDF (Source Verified)",
        description:
          "Verified directly in codebase (resume_ml/classical.py and resume_ml/features.py):",
        items: [
          "Feature pipeline combines word-level TF-IDF (1-2 n-grams, 20k features), character-level TF-IDF (2-5 n-grams, 20k features), and layout statistics.",
          "Calibrated Logistic Regression model evaluated with StratifiedGroupKFold cross-validation to prevent group leakage.",
          "Validated across a comprehensive test suite of 292 passing unit and integration tests achieving 97.65% code coverage.",
        ],
      },
      {
        title: "Requirement Matching Engine: Taxonomy Coverage vs. Historical Jaccard Formulation",
        description:
          "Distinguishing actual codebase implementation from historical proposal documentation:",
        items: [
          "Implemented Codebase (backend/app/services/job_matching.py): Employs an explainable weighted requirement coverage engine evaluating mandatory skills (weight: 1.0), optional skills (weight: 0.25), and section evidence (PROJECTS/EXPERIENCE vs raw mention).",
          "Historical Proposal: Jaccard Similarity J(R,J) = |R ∩ J| / |R ∪ J| was documented in early research notes as an unweighted overlap baseline.",
          "Conflict & Negation Detection: The production service detects negated resume claims and contradictory statements, flagging them as UNCERTAIN.",
        ],
      },
    ],
    screenshots: [
      {
        id: "resume-1",
        title: "Document Upload & Candidate Telemetry Dashboard",
        caption: "Conceptual UI visualization illustrating dual resume and job description ingestion with match scoring telemetry gauge.",
        tag: "Conceptual UI",
        placeholderType: "dashboard",
      },
      {
        id: "resume-2",
        title: "Skill Disparity Matrix & Gap Analysis",
        caption: "Conceptual analytics mockup illustrating identified competencies, missing requirements, and recommended revisions.",
        tag: "Analytics Concept",
        placeholderType: "pipeline",
      },
      {
        id: "resume-3",
        title: "Classification & Fit Probability Breakdown",
        caption: "Conceptual model telemetry mockup illustrating probability scores for No Fit, Potential Fit, and Good Fit tiers.",
        tag: "Model Concept",
        placeholderType: "model",
      },
    ],
    implementedFeatures: [
      "Multi-format document parsing extracting text and tabular structures from PDF and DOCX files.",
      "Semantic skill and keyword extraction using NLP pattern matching and entity identification.",
      "Calibrated Logistic Regression classification using word and character n-gram TF-IDF vectorization (verified in classical.py).",
      "Weighted requirement coverage engine distinguishing required, optional, and negated skills (verified in job_matching.py).",
      "Curated technology alias database eliminating false positive matches for short acronyms.",
      "Extensive test harness with 292 passing automated tests and 97.65% code coverage.",
      "Live multi-tier cloud deployment: React client deployed on Vercel and Flask REST microservice deployed on Render.",
    ],
    plannedFeatures: [
      "Interview Intelligence module generating tailored technical and behavioral preparation questions.",
      "STAR-method generative bullet point enhancement suggestions.",
      "User authentication and historical telemetry tracking with PostgreSQL persistence.",
      "Direct LinkedIn job posting URL ingestion for one-click comparison.",
    ],
    techStack: [
      { category: "NLP & Machine Learning", items: ["Python", "Scikit-learn (Logistic Regression)", "TF-IDF FeatureUnion (Word + Char)", "NLTK / Regex"] },
      { category: "Backend & API", items: ["Flask", "RESTful Architecture", "PyPDF2", "python-docx", "Pytest (292 tests)", "Render"] },
      { category: "Frontend & Deployment", items: ["React.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"] },
      { category: "Storage (Planned)", items: ["PostgreSQL", "Supabase"] },
    ],
    challenges: [
      {
        challenge: "Resumes have highly irregular typographic layouts (multi-column, varied fonts) that break sequential scrapers.",
        solution: "Constructed layout-aware normalization layers before feeding tokens into semantic scoring pipelines.",
      },
      {
        challenge: "Short acronyms like 'IT', 'AI', or 'R' trigger false-positive keyword matches in natural prose.",
        solution: "Built a curated technology alias database with boundary-sensitive token verification and contextual validation.",
      },
    ],
    metrics: [
      { label: "Test Coverage", value: "97.65% (292 Tests Passed)" },
      { label: "Feature Pipeline", value: "TF-IDF (Word + Char N-Grams)" },
      { label: "Model Baseline", value: "Logistic Regression (Calibrated)" },
      { label: "Requirement Weighting", value: "Contextual Coverage Engine" },
    ],
    resultsAndLimitations: {
      results: [
        "Verified production codebase with 292 passing automated tests and 97.65% code coverage (documented in test-results.txt).",
        "Source-verified calibrated Logistic Regression and word/char TF-IDF feature union pipelines (resume_ml/classical.py, features.py).",
        "Source-verified weighted taxonomy requirement matching engine detecting mandatory vs optional skills and negated claims (backend/app/services/job_matching.py).",
        "Live dual-tier deployment: Interactive web client on Vercel (https://frontend-mu-rust-l6t4ywn0qf.vercel.app) backed by live Flask REST API on Render (https://resumematch-ai-api-atil.onrender.com/health).",
      ],
      limitations: [
        "Jaccard similarity index is a historical baseline formulation; the production codebase uses weighted taxonomy coverage.",
        "Historical test accuracy of 67.03% (validation: 72.01%) reflects early classifier iterations; transformer fine-tuning is on the roadmap.",
        "Interview question generator is currently on the roadmap; session persistence is currently local/in-memory.",
      ],
    },
    roadmap: [
      {
        phase: "Phase 1 (Completed)",
        title: "Parsing & Baseline ML Core",
        description: "PDF/DOCX ingestion, NLP entity extraction, Jaccard overlap formulation, and baseline Logistic Regression scoring.",
      },
      {
        phase: "Phase 2 (Current)",
        title: "Interactive Web Dashboard",
        description: "React.js interface with telemetry displays, visual gap charts, and keyword export.",
      },
      {
        phase: "Phase 3 (Upcoming)",
        title: "Interview Intelligence & User Persistence",
        description: "PostgreSQL profile tracking, STAR-method generative bullet re-writer, and personalized interview simulators.",
      },
    ],
  },
  {
    id: "employee-attrition-risk-prediction",
    slug: "employee-attrition-risk-prediction",
    title: "Employee Attrition Risk Prediction",
    subtitle: "Enterprise HR Analytics, ML Risk Scoring & Explainable AI Retention Platform",
    category: "Machine Learning / Predictive Analytics / Explainable AI",
    status: "prototype",
    statusLabel: "Prototype / Local Development",
    summary:
      "An HR analytics and machine-learning platform that predicts employee attrition risk, explains contributing factors via SHAP interpretability, and provides actionable retention recommendations through an interactive 8-tab Streamlit analytics dashboard.",
    tags: [
      "Machine Learning",
      "Explainable AI (XAI)",
      "SHAP",
      "Python",
      "Scikit-learn",
      "XGBoost",
      "LightGBM",
      "CatBoost",
      "Streamlit",
      "Pandas",
    ],
    liveUrl: null,
    repoUrl: "https://github.com/Harsha1704/Employee_Attrition_Risk_Prediction",
    timeline: "2024",
    featured: false,
    order: 3,
    objectives: [
      "Predict individual employee turnover probability to identify flight risks before departure occurs.",
      "Demystify complex tree ensemble predictions using local and global SHAP (SHapley Additive exPlanations) values.",
      "Address severe class imbalance inherent to attrition datasets using SMOTE-family oversampling strategies.",
      "Translate raw model risk probabilities into concrete, department-tailored HR retention playbooks and Power BI exports.",
    ],
    problemStatement: {
      context:
        "Voluntary employee turnover imposes substantial direct and indirect costs on enterprises—averaging 1.5x–2x an employee's annual salary across recruiting, onboarding, and domain knowledge loss. Traditional HR management relies on lagging exit interviews rather than proactive predictive intelligence.",
      coreChallenge:
        "HR attrition data is intrinsically imbalanced (typically 15%–17% attrition baseline) and presents intricate non-linear relationships across compensation, overtime burden, work-life balance, and managerial tenure. Black-box models without interpretability are unusable by HR business partners due to compliance and trust constraints.",
      engineeringGoal:
        "Develop an end-to-end predictive and explainable pipeline that benchmarks 14+ classifiers, handles class skew with Borderline-SMOTE, computes real-time SHAP force plots, and exposes risk heatmaps and recommendations in an intuitive multi-tab console.",
    },
    architectureSummary:
      "A staged machine-learning workflow encompassing automated data cleaning, 20+ HR-domain feature engineering ratios, Mutual Information feature selection, SMOTE resampling, multi-model benchmarking (XGBoost, LightGBM, CatBoost), SHAP explainability, and interactive Streamlit UI delivery.",
    architectureLayers: [
      {
        layer: "Data Ingestion & Hygiene",
        component: "IBM HR Dataset Ingestion & Validation",
        details: "Ingests 1,470 records and 35 original employee attributes; validates missing values, cardinality, and numerical distributions.",
        status: "implemented",
      },
      {
        layer: "Feature Engineering & Selection",
        component: "20+ Domain Ratios & Mutual Information Filter",
        details: "Synthesizes TotalSatisfaction, StabilityRatio, TenurePerJob, and CompensationRatio; ranks feature importance using Mutual Information scores.",
        status: "implemented",
      },
      {
        layer: "Resampling & Balancing",
        component: "imbalanced-learn SMOTE-Family Pipeline",
        details: "Mitigates the 16.1% attrition minority skew using SMOTE, Borderline-SMOTE, and ADASYN within StratifiedKFold validation splits.",
        status: "implemented",
      },
      {
        layer: "Ensemble Training & Tuning",
        component: "14+ Classifier Benchmark Engine",
        details: "Systematic evaluation of XGBoost, LightGBM, CatBoost, Random Forest, Extra Trees, and Logistic Regression with RandomizedSearchCV hyperparameter optimization.",
        status: "implemented",
      },
      {
        layer: "Explainable AI (XAI)",
        component: "SHAP TreeExplainer & Permutation Importance",
        details: "Computes local feature contribution waterfalls for individual employees and global summary plots across organizational units.",
        status: "implemented",
      },
      {
        layer: "Analytics & Presentation",
        component: "8-Tab Streamlit Dashboard & Power BI Exporter",
        details: "Interactive UI for single employee inference, bulk CSV batch scoring, department risk heatmaps, retention recommendations, and structured CSV exports.",
        status: "implemented",
      },
    ],
    systemFlowDiagram: {
      title: "Employee Attrition ML Pipeline & Explainability Architecture",
      caption: "End-to-end data transformation, multi-classifier training, SHAP feature attribution, and interactive Streamlit decision dashboard.",
      explanation: "Raw employee HR records pass through automated data sanitation and domain feature engineering. The imbalanced training split is resampled via SMOTE and fed into hyperparameter-tuned gradient boosted trees. Inference outputs generate dual deliverables: calibrated attrition probability scores and granular SHAP force plots consumed by the 8-tab Streamlit console.",
      steps: [
        {
          stage: "Data Ingestion",
          title: "IBM HR Dataset Parsing",
          component: "Pandas Ingestion & Cleaning Engine",
          description: "Parses 1,470 records across 35 attributes, cleaning zero-variance constants and verifying data integrity.",
          status: "implemented",
          badgeText: "1,470 Records",
        },
        {
          stage: "Featurization",
          title: "20+ HR-Domain Feature Engineering",
          component: "Mutual Information & Ratio Synthesizer",
          description: "Computes satisfaction composites, tenure-to-age ratios, and compensation parity indices; prunes collinear features.",
          status: "implemented",
          badgeText: "20+ Ratios",
        },
        {
          stage: "Model Training",
          title: "14+ Classifiers & SMOTE Resampling",
          component: "XGBoost, LightGBM, CatBoost Benchmark",
          description: "Trains candidate classifiers under Stratified 5-Fold CV with RandomizedSearchCV tuning and minority oversampling.",
          status: "implemented",
          badgeText: "14+ Classifiers",
        },
        {
          stage: "Explainability",
          title: "SHAP Interpretability Engine",
          component: "TreeExplainer Attribution Core",
          description: "Calculates Shapley values to pinpoint dominant attrition drivers (OverTime, MonthlyIncome, StockOptions).",
          status: "implemented",
          badgeText: "SHAP / XAI",
        },
        {
          stage: "Analytics UI",
          title: "8-Tab Streamlit Console & Export",
          component: "Interactive Operational Dashboard",
          description: "Delivers single/batch risk scoring, department risk heatmaps, actionable HR playbooks, and Power BI-ready CSV export.",
          status: "implemented",
          badgeText: "8-Tab UI",
        },
      ],
    },
    mlServing: {
      pipelineTitle: "Employee Attrition Predictive Inference & Interpretability Flow",
      pipelineDescription: "How employee profile vectors are ingested, engineered, evaluated through serialized tree ensembles, and converted into explainable retention insights.",
      dataInput: {
        title: "Employee Profile & Batch CSV Ingestion",
        description: "Streamlit UI accepts individual employee parameter inputs via interactive sliders/dropdowns or multi-employee batch CSV uploads.",
      },
      featureAndInference: {
        title: "Dynamic Ratio Transformation & Model Inference",
        description: "Precomputed transformers construct domain ratios, apply ordinal encodings, and invoke the best-performing serialized model artifact (e.g., tuned LightGBM/CatBoost).",
      },
      backendIntegration: {
        title: "SHAP TreeExplainer Calculation & Thresholding",
        description: "Backend computes exact Shapley contribution vectors for the employee, mapping positive/negative pressure on the calibrated attrition boundary.",
      },
      frontendCommunication: {
        title: "Risk Category Binning & Factor Ranking",
        description: "Probabilities are categorized into Low, Medium, and High Risk tiers alongside the top 5 push/pull factors influencing the score.",
      },
      outputVisualization: {
        title: "Interactive Risk Gauge, SHAP Waterfall & Retention Guidance",
        description: "Renders visual risk gauges, interactive SHAP force plots, department attrition heatmaps, and rule-based HR intervention checklists.",
      },
      operationalCaveat: "Evaluated on the benchmark IBM HR dataset in a local Streamlit runtime; representative metrics reflect experimental benchmark conditions.",
    },
    mermaidDiagram: `flowchart TD
    A[Raw IBM HR Dataset 1,470 Records] --> B[Data Cleaning & Outlier Analysis]
    B --> C[Feature Engineering: 20+ Domain Ratios]
    C --> D[Mutual Information Feature Selection]
    D --> E[Train/Test Split & SMOTE Balancing]
    E --> F[14+ Classifier Benchmark Engine]
    F --> G[Best Model: Tuned Gradient Boosted Trees]
    G --> H[SHAP TreeExplainer Local & Global Attribution]
    G --> I[Risk Probability Scoring Engine]
    H --> J[8-Tab Interactive Streamlit Dashboard]
    I --> J
    J --> K[Power BI-Ready CSV Export]`,
    implementationSections: [
      {
        title: "HR-Domain Feature Engineering & Information-Theoretic Selection",
        description:
          "Raw HR survey attributes often hide compound behavioral signals. Engineered 20+ non-linear domain features capturing career momentum, compensation equity, and burnout risk.",
        items: [
          "Satisfaction Composites: Combines EnvironmentSatisfaction, JobSatisfaction, and RelationshipSatisfaction into aggregated TotalSatisfaction.",
          "Career Velocity Metrics: Formulated TenurePerJob (YearsAtCompany / NumCompaniesWorked) and PromotionVelocity (YearsSinceLastPromotion / YearsAtCompany).",
          "Work-Life Stress Index: Coupled OverTime indicators with DistanceFromHome and BusinessTravel frequency to quantify operational fatigue.",
          "Mutual Information Pruning: Ranked all candidate features against the attrition target, eliminating zero-variance attributes (Over18, StandardHours).",
        ],
      },
      {
        title: "Imbalance Mitigation & 14+ Classifier Benchmark Architecture",
        description:
          "Because voluntary turnover is a minority event (16.1% prevalence), naive accuracy is misleading. Implemented a rigorous cross-validation and resampling framework.",
        items: [
          "Resampling Strategies: Compared SMOTE, Borderline-SMOTE, and ADASYN to synthesize minority examples near decision boundaries without overfitting.",
          "Multi-Model Tournament: Benchmarked 14+ algorithms including XGBoost, LightGBM, CatBoost, Random Forest, AdaBoost, Gradient Boosting, Extra Trees, and Logistic Regression.",
          "Robust Validation: Enforced 5-fold Stratified K-Fold cross-validation paired with RandomizedSearchCV for hyperparameter exploration across learning rate, tree depth, and subsample ratios.",
          "Threshold Calibration: Adjusted decision cutoffs to balance recall (catching true flight risks) against precision (minimizing false alarms for HR teams).",
        ],
      },
      {
        title: "Explainable AI (XAI) & Actionable Retention Recommendation Engine",
        description:
          "Predictive models cannot guide retention strategies without causal transparency. Integrated SHAP to provide granular, interpretable explanations for every prediction.",
        items: [
          "Local Explanations: Deployed SHAP TreeExplainer to produce individual waterfall plots detailing exactly which attributes increased or decreased turnover risk.",
          "Global Feature Importance: Aggregated Shapley values identifying organization-wide turnover drivers (OverTime, MonthlyIncome, Age, and TotalWorkingYears).",
          "Automated HR Action Playbook: Built rule-based retention triggers suggesting tailored counter-measures (e.g., commute relief, compensation review, lateral project moves).",
          "Enterprise BI Compatibility: Structured batch inference outputs into formatted CSV tables pre-configured for import into corporate Power BI dashboards.",
        ],
      },
    ],
    screenshots: [
      {
        id: "attrition-1",
        title: "Interactive Attrition Risk Console",
        caption: "Streamlit analytics dashboard tab illustrating employee profile input, calculated attrition probability, and risk tier categorization.",
        tag: "Analytics UI",
        placeholderType: "dashboard",
      },
      {
        id: "attrition-2",
        title: "SHAP Explainability & Waterfall Attribution",
        caption: "Visual interpretability tab displaying local feature contributions and SHAP summary plots pinpointing key departure drivers.",
        tag: "Explainable AI",
        placeholderType: "pipeline",
      },
      {
        id: "attrition-3",
        title: "Department Heatmaps & Retention Guidance",
        caption: "Aggregated department risk heatmaps paired with automated, role-specific retention recommendation checklists.",
        tag: "HR Strategy",
        placeholderType: "telemetry",
      },
    ],
    implementedFeatures: [
      "End-to-end preprocessing pipeline for IBM HR Analytics dataset (1,470 employees, 35 attributes).",
      "Synthesis of 20+ HR-domain features including stability ratios, satisfaction composites, and compensation equity indices.",
      "Mutual Information feature selection eliminating redundant and non-informative survey variables.",
      "SMOTE-family class imbalance handling (SMOTE, Borderline-SMOTE, ADASYN) within cross-validation splits.",
      "Benchmarking harness across 14+ machine learning classifiers with hyperparameter tuning via RandomizedSearchCV.",
      "SHAP TreeExplainer integration providing individual waterfall plots and global feature attribution rankings.",
      "Comprehensive 8-tab Streamlit dashboard supporting single-employee simulation and multi-employee batch CSV scoring.",
      "Department-level risk heatmaps, attrition analytics visualizations, and automated HR retention recommendation playbooks.",
      "Power BI-ready structured CSV export functionality for enterprise reporting.",
    ],
    plannedFeatures: [
      "Survival analysis (Cox Proportional Hazards) to model time-to-departure rather than binary turnover probability.",
      "FastAPI microservice containerization with REST endpoints for HRIS (Workday / BambooHR) webhook integration.",
      "Counterfactual explanation generator to compute the minimal policy change required to flip high-risk employees to safe status.",
      "Integration with natural language employee feedback sentiment analysis to combine survey metrics with unstructured text.",
    ],
    techStack: [
      { category: "Machine Learning & Resampling", items: ["Scikit-learn", "XGBoost", "LightGBM", "CatBoost", "imbalanced-learn (SMOTE)", "RandomizedSearchCV"] },
      { category: "Explainable AI & Analysis", items: ["SHAP (SHapley Additive exPlanations)", "Mutual Information", "Permutation Importance", "NumPy", "Pandas"] },
      { category: "Dashboard & Visualization", items: ["Streamlit (8-Tab Console)", "Matplotlib", "Seaborn", "Plotly"] },
      { category: "Environment & Serialization", items: ["Python 3.10+", "Joblib / Pickle", "Git", "Power BI CSV Integration"] },
    ],
    challenges: [
      {
        challenge: "Balancing precision versus recall under severe class imbalance (16.1% turnover baseline) with asymmetric operational costs.",
        solution: "Analyzed the business-critical precision/recall trade-off: failing to detect an employee who subsequently resigns (false negative) inflicts substantial turnover and re-hiring costs (~1.5x salary), whereas flagging a satisfied employee (false positive) expends HR retention interventions. Tuned classification probability cutoffs across StratifiedKFold validation splits to prioritize higher minority recall while maintaining actionable precision.",
      },
      {
        challenge: "Black-box nature of advanced gradient boosting ensembles preventing adoption by risk-averse HR business partners.",
        solution: "Integrated SHAP TreeExplainer to compute exact additive feature attributions for every inference, rendering visual waterfall plots that clearly justify each risk score.",
      },
      {
        challenge: "Collinearity and noise across 35 multi-scale survey questions and demographic attributes.",
        solution: "Formulated domain-specific composite ratios and applied Mutual Information filtering to isolate high-leverage predictive factors while discarding uninformative constants.",
      },
    ],
    metrics: [
      { label: "Reported Performance", value: "Representative README Results" },
      { label: "Metric Evaluation", value: "ROC-AUC ~0.84–0.88 (Unreproduced)" },
      { label: "Optimization Target", value: "Precision/Recall Trade-off" },
      { label: "Explainability", value: "SHAP (TreeExplainer)" },
    ],
    resultsAndLimitations: {
      results: [
        "Presents representative model benchmark results cited from the repository README on the IBM HR dataset (e.g., ensemble test ROC-AUC ~0.84–0.88, balanced minority recall); these reflect the author's experimental trials and are not presented as independently reproduced production guarantees.",
        "Delivers transparent feature attribution through local and global SHAP explanations, highlighting OverTime, MonthlyIncome, and StockOptionLevel as primary attrition catalysts in the benchmark dataset.",
        "Operationalizes predictive scoring through an interactive 8-tab Streamlit dashboard supporting single-employee what-if testing, batch CSV predictions, and Power BI-ready exports.",
      ],
      limitations: [
        "Reported model metrics are representative results documented in the repository README rather than independently audited or reproduced benchmarks.",
        "The precision/recall trade-off requires distinct operational calibration per company: organizations with high intervention costs require higher precision, whereas talent-scarce teams prioritize recall.",
        "Evaluated on the synthetic IBM HR Analytics benchmark dataset; real-world enterprise adoption requires retraining and validation on live corporate HRIS data distributions.",
        "Packaged as an interactive local Streamlit application rather than a deployed multi-tenant cloud enterprise service.",
      ],
    },
    roadmap: [
      {
        phase: "Phase 1 (Completed)",
        title: "Data Pipeline, 14+ Model Benchmark & SHAP Integration",
        description: "Delivered data preprocessing, 20+ feature engineering ratios, SMOTE resampling, multi-model evaluation, and SHAP explainability.",
      },
      {
        phase: "Phase 2 (Completed)",
        title: "8-Tab Streamlit Console & Batch Scoring",
        description: "Constructed comprehensive multi-tab UI for individual risk scoring, batch CSV inference, risk heatmaps, and Power BI export.",
      },
      {
        phase: "Phase 3 (Roadmap)",
        title: "Survival Modeling & Enterprise HRIS Webhooks",
        description: "Incorporate time-to-event survival analysis, counterfactual recommendations, and FastAPI microservice integration with Workday.",
      },
    ],
  },
  {
    id: "trafficshield",
    slug: "trafficshield",
    systemFlowDiagram: {
      title: "TrafficShield System Flow & Dual-Engine Pipeline",
      caption: "Hardware-constrained unidirectional telemetry pipeline extracting 13 forward-observable flow features for simultaneous supervised classification and unsupervised novelty detection.",
      explanation: "Because unidirectional optical taps eliminate the reverse return path, traditional TCP handshake tracking cannot be utilized. Instead, 13 forward-observable timing and packet features are computed per flow batch. An XGBoost model classifies known malicious signatures, while an Isolation Forest computes an anomaly score against baseline normal traffic. Pre-deserialization SHA-256 validation guarantees model integrity before inference, and scores are streamed via FastAPI to a React 19 SOC command console.",
      steps: [
        {
          stage: "Data Ingestion",
          title: "Unidirectional Packet Capture",
          component: "Optical Tap / Data Diode Tap Socket",
          description: "Ingests forward packet streams without return path or TCP ACK feedback context.",
          status: "implemented",
          badgeText: "Forward Stream Only",
        },
        {
          stage: "Featurization",
          title: "13 Forward Feature Extraction",
          component: "Flow Accumulator & Statistical Featurizer",
          description: "Extracts packet length statistics, inter-arrival intervals, TCP flags, and payload entropy.",
          status: "implemented",
          badgeText: "Zero Reverse Telemetry",
        },
        {
          stage: "ML Inference",
          title: "Dual-Engine Threat Scoring",
          component: "XGBoost Classifier + Isolation Forest",
          description: "Simultaneous supervised threat classification and unsupervised zero-day novelty scoring.",
          status: "implemented",
          badgeText: "SHA-256 Verified Artifacts",
        },
        {
          stage: "Backend API",
          title: "FastAPI Scoring Microservice",
          component: "Python FastAPI / Uvicorn Service",
          description: "Asynchronous `/predict` and `/stream` endpoints with strict Pydantic payload models.",
          status: "implemented",
          badgeText: "Sub-Second Ingestion",
        },
        {
          stage: "SOC UI",
          title: "Live React 19 SOC Console",
          component: "React 19 / Tailwind CSS Dashboard",
          description: "Real-time flow triage, risk score gauges, anomalous flow cards, and operational alerts.",
          status: "implemented",
          badgeText: "Live on Vercel",
        },
      ],
    },
    mlServing: {
      pipelineTitle: "TrafficShield ML-to-Web Serving Architecture",
      pipelineDescription: "How unidirectional network packet streams are captured, transformed into strict forward features, evaluated against frozen dual-model weights, and rendered in the live SOC console.",
      dataInput: {
        title: "Unidirectional Packet Ingestion",
        description: "Raw packet traces (PCAP files or simulated diode streams) enter the ingestion worker where packets are grouped into time-windowed flow records without requiring return ACK packets.",
      },
      featureAndInference: {
        title: "13 Forward Features & Dual ML Inference",
        description: "Computes 13 forward features (packet lengths, inter-arrival deltas, header flags, entropy). Frozen XGBoost scores known threats, while calibrated Isolation Forest detects structural anomalies.",
      },
      backendIntegration: {
        title: "FastAPI REST Service & Cryptographic Verification",
        description: "Python FastAPI exposes asynchronous scoring endpoints with Pydantic validation. The service fails closed if model weight files deviate from hardcoded SHA-256 cryptographic digests.",
      },
      frontendCommunication: {
        title: "Client State Reconciliation & Polling",
        description: "The React 19 frontend queries the scoring service via HTTP REST endpoints, updating internal telemetry states with zero re-rendering cascades across inactive metric tiles.",
      },
      outputVisualization: {
        title: "Real-Time SOC Console & Alert Telemetry",
        description: "Displays sub-second flow threat status (Normal, Suspicious, Critical), dual confidence gauges, anomaly score distributions, and actionable triage recommendations.",
      },
      operationalCaveat: "Live hardware deployment utilizes optical data diodes; cloud deployment on Vercel is hosted with simulated streaming flow records for interactive evaluation.",
    },

    title: "TrafficShield",
    subtitle: "Unidirectional IP Traffic Network Anomaly Detection Platform",
    category: "Intelligent Systems",
    status: "live",
    statusLabel: "Live Demo",
    summary:
      "An enterprise-grade, hybrid ML-based network anomaly detection platform designed for unidirectional optical taps and data diodes protecting critical infrastructure. It couples a frozen supervised classifier (XGBoost) with an unlabelled-calibrated anomaly detector (Isolation Forest) across 13 forward-observable packet and timing features to detect known attack signatures and novel zero-day structural anomalies without reverse-flow telemetry.",
    tags: ["Network Security", "Machine Learning", "XGBoost", "Isolation Forest", "React 19", "FastAPI / Python", "Vercel"],
    liveUrl: "https://trafficshield.vercel.app",
    repoUrl: "https://github.com/Harsha1704/trafficshield",
    timeline: "2024 - Present",
    featured: true,
    order: 4,
    objectives: [
      "Engineer a unidirectional flow anomaly detection platform tailored for physical data diodes and optical taps.",
      "Enforce a strict 13 forward-observable packet feature policy with zero reverse-flow telemetry requirements.",
      "Couple frozen supervised XGBoost (tau = 0.50) with unlabelled-calibrated Isolation Forest (tau = 0.727896) into a 4-tier transparent taxonomy.",
      "Implement fail-closed cryptographic anti-tamper validation (SHA-256 pre-deserialization checks) for all inference artifacts.",
      "Deploy a high-density, real-time SOC command center in React 19 providing live flow scoring and alert triage.",
    ],
    problemStatement: {
      context:
        "Critical infrastructure monitoring links (substations, industrial SCADA, defense networks) increasingly rely on unidirectional optical taps and hardware data diodes to physically guarantee zero ingress and prevent cyber intrusions.",
      coreChallenge:
        "Conventional intrusion detection systems (Snort, Zeek, standard ML baselines) depend heavily on bidirectional flow context (round-trip times, TCP handshake acknowledgement latencies, client-to-server vs server-to-client packet ratios). Across a hardware data diode, reverse packets do not exist, causing bidirectional models to fail.",
      engineeringGoal:
        "Architect a dual-engine machine learning pipeline that operates strictly on causal, forward-observable packet features (sbytes, sload, sttl, smeansz, etc.), fusing supervised signature detection with unsupervised structural novelty detection.",
    },
    architectureSummary:
      "Couples a passive packet capture driver (Npcap/WinPcap) and 10,000-flow LRU reconstructor with a dual-engine hybrid inference engine (XGBoost + Isolation Forest) and an enterprise React 19 Dark Tactical SOC console.",
    architectureLayers: [
      {
        layer: "Physical Tap & Packet Ingestion",
        component: "Passive Packet Capture Driver (Npcap / WinPcap)",
        details: "Raw Ethernet frame capture from optical tap interfaces with bounded packet buffers and zero payload persistence.",
        status: "implemented",
      },
      {
        layer: "Flow Reconstruction & Extraction",
        component: "13 Causal Forward Features Engine",
        details: "State-free forward-flow reconstruction (10,000 active flow LRU cache, 15s timeout) computing sbytes, sload, sttl, smeansz.",
        status: "implemented",
      },
      {
        layer: "Cryptographic Model Security",
        component: "Fail-Closed SHA-256 Anti-Tamper Service",
        details: "Pre-deserialization cryptographic digest verification for model weights, preprocessors, and threshold configurations.",
        status: "implemented",
      },
      {
        layer: "Dual-Engine Hybrid Inference",
        component: "Fused XGBoost + Isolation Forest Pipeline",
        details: "Frozen supervised XGBoost (tau=0.50) coupled with unlabelled-calibrated Isolation Forest (tau=0.727896) classifying 4 operational states.",
        status: "implemented",
      },
      {
        layer: "Enterprise SOC Command Center",
        component: "React 19 + TypeScript Dark Console (Vercel Edge)",
        details: "Real-time flow telemetry, dual-engine score transparency, alert triage with hybrid evidence, and statistical drift tracking.",
        status: "implemented",
      },
    ],
    mermaidDiagram: `flowchart TD
    Tap[Unidirectional Optical Tap / Diode] --> Pcap[Passive Packet Capture Driver]
    Pcap --> FlowRecon[Flow Reconstruction & 13 Causal Forward Features]
    FlowRecon --> SHA256[Cryptographic Model Digest Verification]
    SHA256 --> XGBoost[Frozen Supervised XGBoost Engine]
    SHA256 --> IsoForest[Calibrated Isolation Forest Detector]
    XGBoost --> Fuser[4-Tier Hybrid Taxonomy Classifier]
    IsoForest --> Fuser
    Fuser --> SOC[React 19 Dark Tactical SOC Console]`,
    implementationSections: [
      {
        title: "Strict 13-Feature Forward-Observable Policy",
        description:
          "To guarantee physical diode compatibility, reverse-flow metrics (dbytes, dload, dttl, ackdat) are barred from the feature schema. The engine operates purely on causal, forward metrics:",
        items: [
          "Forward packet sizing and inter-arrival intervals: sbytes, smeansz, sload, and duration.",
          "Network transport telemetry: protocol, state flags, sttl, and forward packet volume.",
          "Zero bidirectional dependencies: eliminating evasion risks arising from missing reverse flow context.",
        ],
      },
      {
        title: "Hybrid 4-Tier Severity Taxonomy",
        description:
          "Rather than a fragile single-score heuristic, detections are partitioned into transparent operational categories:",
        items: [
          "DUAL_CONFIRMED: Both XGBoost and Isolation Forest alert (high confidence critical threat).",
          "SUPERVISED_ONLY_ALERT: Known signature detected by XGBoost while structural geometry appears standard.",
          "UNSUPERVISED_NOVELTY: Structural deviation detected by Isolation Forest (novel zero-day candidate).",
          "NORMAL_TRAFFIC: Nominal baseline flow within statistical operating parameters.",
        ],
      },
    ],
    screenshots: [
      {
        id: "traffic-1",
        title: "Enterprise Dark SOC Command Center",
        caption: "Live operational telemetry dashboard showing real-time network flow inspection, sensor health, and threat distribution.",
        tag: "Live SOC Console",
        placeholderType: "dashboard",
      },
      {
        id: "traffic-2",
        title: "Hybrid Threat Triage & Evidence Panel",
        caption: "Dual-engine scoring breakdown displaying XGBoost confidence against calibrated Isolation Forest novelty scores.",
        tag: "Inference Engine",
        placeholderType: "telemetry",
      },
      {
        id: "traffic-3",
        title: "Unidirectional Feature Flow Pipeline",
        caption: "Strict 13-feature forward-observable causal packet extraction architecture operating without reverse-flow telemetry.",
        tag: "Data Pipeline",
        placeholderType: "pipeline",
      },
    ],
    implementedFeatures: [
      "Strict 13-feature unidirectional causal forward packet policy.",
      "Hybrid detection engine fusing XGBoost (tau=0.50) with Isolation Forest (tau=0.727896).",
      "Fail-closed cryptographic model anti-tamper with SHA-256 digest validation.",
      "Passive live packet capture and bounded LRU flow reconstruction (10,000 flows).",
      "Enterprise Dark SOC Command Center deployed live on Vercel at https://trafficshield.vercel.app.",
    ],
    plannedFeatures: [
      "Distributed multi-sensor telemetry aggregator over authenticated mTLS tunnels.",
      "Automated dynamic threshold tuning based on diurnal enterprise baseline shifts.",
      "Integration with enterprise SIEM backends (Splunk, Elastic SIEM).",
    ],
    techStack: [
      { category: "ML & Detection", items: ["XGBoost", "Isolation Forest", "Scikit-learn", "NumPy", "Pandas"] },
      { category: "Network & Capture", items: ["Npcap / WinPcap", "Scapy", "Raw Sockets", "Python"] },
      { category: "Frontend & Console", items: ["React 19", "TypeScript", "Tailwind CSS v4", "Lucide React", "Vercel"] },
      { category: "Backend & Security", items: ["Python FastAPI", "Waitress / Gunicorn", "SHA-256 Anti-Tamper"] },
    ],
    challenges: [
      {
        challenge: "Unidirectional optical taps lose return path context, breaking traditional bidirectional intrusion models.",
        solution: "Formulated a strict 13 forward-feature policy and coupled supervised classification with unsupervised structural novelty scoring.",
      },
      {
        challenge: "Preventing model poisoning or artifact tampering in critical infrastructure environments.",
        solution: "Engineered pre-deserialization SHA-256 digest verification that fails closed if model artifacts deviate by a single byte.",
      },
    ],
    metrics: [
      { label: "ML Architecture", value: "Hybrid XGBoost + Isolation Forest" },
      { label: "Causal Policy", value: "Strict 13 Forward Features (Zero Reverse)" },
      { label: "Cryptographic Security", value: "SHA-256 Digest Validation" },
      { label: "Console Runtime", value: "Live on Vercel (React 19)" },
    ],
    resultsAndLimitations: {
      results: [
        "Proven sub-second batch flow inference with dual-engine transparency on forward-only packet traces.",
        "Clear isolation of novel zero-day structural anomalies via calibrated Isolation Forest thresholding.",
        "Live deployed SOC command center delivering operational visibility into network flows.",
      ],
      limitations: [
        "Live packet capture on Windows workstations requires an installed Npcap/WinPcap driver.",
        "Cloud-hosted Vercel console operates against streamed flow traces rather than direct physical hardware interfaces.",
        "Diode hardware integration is tested via optical loopback and PCAP playback simulations in development.",
      ],
    },
    roadmap: [
      {
        phase: "Phase 1 (Completed)",
        title: "Unidirectional Feature Extraction & Hybrid Model Training",
        description: "13 forward-observable feature policy, XGBoost/Isolation Forest training, and SHA-256 anti-tamper verification.",
      },
      {
        phase: "Phase 2 (Completed / Live)",
        title: "Live SOC Command Center & Vercel Deployment",
        description: "React 19 high-density dark operational dashboard, live flow scoring, and public Vercel deployment.",
      },
      {
        phase: "Phase 3 (Upcoming)",
        title: "Distributed Sensor Clustering & SIEM Integration",
        description: "Centralized multi-tap aggregator with mTLS tunnels and automated diurnal threshold adaptation.",
      },
    ],
  },
  {
    id: "moodmate",
    slug: "moodmate",
    mlServing: {
      pipelineTitle: "MoodMate ML-to-Web Serving Architecture",
      pipelineDescription: "Continuous video frame capture, OpenCV facial landmark detection, CNN emotion classification, and mood-adaptive acoustic playlist recommendation.",
      dataInput: {
        title: "Webcam Frame Capture & ROI Isolation",
        description: "Captures 30 FPS video frames from user webcam; OpenCV Haar Cascade classifier detects faces and crops 48x48 pixel grayscale face regions.",
      },
      featureAndInference: {
        title: "4-Block CNN Inference on FER2013 & Temporal Smoothing",
        description: "Keras CNN model trained on FER2013 computes probability distribution across 7 emotion classes. An exponential moving average across 15 frames suppresses instantaneous classification flicker.",
      },
      backendIntegration: {
        title: "Flask Video Streaming & Valence-Energy Mapping",
        description: "Flask serves a multipart MJPEG video stream with superimposed emotion bounding boxes and maps dominant emotional states to target acoustic valence and energy vectors.",
      },
      frontendCommunication: {
        title: "HTTP Video Stream & Telemetry Polling",
        description: "The browser client displays the annotated stream in a responsive HTML5 video/image viewport while receiving emotion probabilities via lightweight JSON polling.",
      },
      outputVisualization: {
        title: "Real-Time Emotion Telemetry & Dynamic Playlist",
        description: "Renders live emotion probability gauges (Happy, Sad, Angry, Surprised, Fear, Disgust, Neutral) and dynamically updates recommended song tracks matching user emotional mood.",
      },
      operationalCaveat: "Local development application running on localhost with laptop webcam; cloud deployment is pending browser-side WebAssembly/TensorFlow.js edge migration.",
    },

    title: "MoodMate",
    subtitle: "Real-Time Facial Expression Recognition & Music Recommendation Engine",
    category: "Computer Vision",
    status: "prototype",
    statusLabel: "Prototype / Local Development",
    summary:
      "An affective computing application that analyzes live video frames from a web camera, detects user facial micro-expressions, classifies dominant emotional states via deep neural networks, and generates personalized music recommendations.",
    tags: ["TensorFlow", "Keras", "OpenCV", "Python", "Flask", "Deep Learning"],
    liveUrl: null,
    repoUrl: "https://github.com/Harsha1704/MoodMate",
    timeline: "2024",
    featured: true,
    order: 5,
    objectives: [
      "Build an end-to-end affective computing pipeline linking facial expression recognition to mood-adaptive acoustic recommendations.",
      "Target real-time face detection and emotion classification on standard laptop webcams without dedicated GPUs (unbenchmarked target).",
      "Eliminate erratic playlist thrashing through temporal smoothing and confidence-threshold filtering.",
      "Deliver a browser interface displaying live video stream telemetry and categorized playlist recommendations.",
    ],
    problemStatement: {
      context:
        "Music streaming platforms rely almost exclusively on explicit user searches or historical listening habits. They lack real-time ambient awareness of a listener's current psychological or affective state.",
      coreChallenge:
        "Facial expression classification in the wild is notoriously sensitive to ambient lighting variations, head pose changes, and momentary micro-movements. Naive frame-by-frame emotion classifiers produce erratic predictions that disrupt music playback.",
      engineeringGoal:
        "Train a deep convolutional neural network on standard facial expression benchmarks (FER2013) and integrate temporal smoothing filters to map sustained emotional states to curated acoustic profiles.",
    },
    architectureSummary:
      "OpenCV video frame ingestion pipeline with decoupled multithreaded processing, fed into a trained two-stage CNN for FER2013 emotion inference, smoothed via exponential moving averages, and mapped to music recommendations via audio feature cosine similarity.",
    architectureLayers: [
      {
        layer: "Video Capture & Stream Processing",
        component: "Decoupled Multi-Threaded Video Engine (Source Verified)",
        details: "Dedicated inference thread separated from 30 FPS display loop (CAMERA_W=640, CAMERA_H=480, webcam_realtime.py).",
        status: "implemented",
      },
      {
        layer: "Face Detection & ROI Isolation",
        component: "Haar Cascade Half-Resolution Detector (Source Verified)",
        details: "Runs on 320x240 downscaled frames every 5th frame (PREDICT_EVERY=5) for 4x speedup, isolating facial bounding coordinates.",
        status: "implemented",
      },
      {
        layer: "Preprocessing & Normalization",
        component: "128x128 Grayscale Pipeline (Source Verified)",
        details: "128x128 pixel normalization (IMG_SIZE=128), histogram equalization, and tensor scaling [0, 1] (preprocess.py).",
        status: "implemented",
      },
      {
        layer: "Deep Learning Classifier",
        component: "Two-Stage CNN on FER2013 (Source Verified)",
        details: "Trained on FER2013 across 7 emotion classes (angry, disgust, fear, happy, neutral, sad, surprise); achieved 70.28% test accuracy and 88.12% top-2 accuracy on 7,048 test images.",
        status: "implemented",
      },
      {
        layer: "Temporal Smoothing",
        component: "Exponential Moving Average (EMA) Smoother (Source Verified)",
        details: "EMA filter (alpha=0.45, max track age=15) preventing erratic playlist shifts caused by transient facial expressions.",
        status: "implemented",
      },
      {
        layer: "Music Recommendation Engine",
        component: "Cosine Similarity Feature Matcher (Source Verified)",
        details: "Filters songs across 6 Spotify audio features (valence, energy, danceability, acousticness, instrumentalness, tempo) with genre preference boost (music_recommender.py).",
        status: "implemented",
      },
      {
        layer: "Streaming Integration (Roadmap)",
        component: "Spotify Web API Integration",
        details: "OAuth 2.0 user authentication for direct playlist queue manipulation in candidate's personal Spotify account.",
        status: "planned",
      },
    ],
    mermaidDiagram: `flowchart LR
    Webcam[Video Stream Capture - 30 FPS Thread] --> FaceDetect[Haar Cascade - Every 5th Frame]
    FaceDetect --> Preprocess[128x128 Grayscale Normalization]
    Preprocess --> CNNModel[Two-Stage CNN - FER2013 Model]
    CNNModel --> EMASmooth[Exponential Moving Average Smoothing]
    EMASmooth --> Recommender[Cosine Similarity Music Recommender]
    Recommender --> AudioUI[Audio Track Dispatcher & HUD]`,
    implementationSections: [
      {
        title: "CNN Architecture & FER2013 Benchmark Results (Source Verified)",
        description:
          "Verified directly in model training code and evaluation artifacts (src/train_model.py, models/classification_report.txt, models/training_summary.json):",
        items: [
          "Trained on FER2013 dataset across all 7 canonical emotion categories (angry, disgust, fear, happy, neutral, sad, surprise).",
          "Two-stage training methodology: Stage 1 (20 epochs, head LR 3e-4), Stage 2 fine-tuning (15 epochs, FT LR 1e-5, unfreezing top 30 layers).",
          "Empirical benchmark on 7,048 test images: 70.28% overall test accuracy, 88.12% top-2 accuracy, and 0.6005 macro F1.",
        ],
      },
      {
        title: "Realtime Engine & Audio Feature Matching (Source Verified)",
        description:
          "Verified in runtime application files (app/webcam_realtime.py, src/music_recommender.py, src/emotion_mapping.py):",
        items: [
          "Thread decoupling: Video display runs asynchronously at 30 FPS while inference evaluates every 5th frame on a worker thread.",
          "Temporal smoothing: Employs exponential moving average (alpha=0.45) rather than unweighted majority voting.",
          "Music recommendation: Computes cosine similarity between target emotion mood vectors and music dataset features (valence, energy, danceability, acousticness, instrumentalness, tempo).",
        ],
      },
    ],
    screenshots: [
      {
        id: "mood-1",
        title: "Real-Time Video Stream HUD & Face Tracker",
        caption: "Conceptual UI visualization illustrating facial bounding box, real-time emotion probability bars, and FPS counter.",
        tag: "Vision Concept",
        placeholderType: "telemetry",
      },
      {
        id: "mood-2",
        title: "Mood-Matrix Recommendation Dispatcher",
        caption: "Conceptual interface visualization displaying acoustic playlist recommendations matching detected emotional states.",
        tag: "Recommender Concept",
        placeholderType: "dashboard",
      },
      {
        id: "mood-3",
        title: "Emotion Classification Probability Distribution",
        caption: "Conceptual model telemetry mockup illustrating probability breakdown across all 7 FER2013 emotion categories.",
        tag: "Model Concept",
        placeholderType: "model",
      },
    ],
    implementedFeatures: [
      "Real-time webcam video streaming, face detection, and region-of-interest (ROI) isolation via OpenCV.",
      "Facial emotion classification via deep CNN (Keras/TensorFlow) predicting categorical emotion states.",
      "Histogram equalization and grayscale normalization mitigating lighting disparities.",
      "Rolling temporal buffer logic designed to prevent playlist thrashing from momentary expressions.",
      "Dynamic mood-matrix recommendation mapping classified emotional states to music selections.",
      "Visual interface prototype displaying camera feed and prediction confidence telemetry.",
    ],
    plannedFeatures: [
      "Spotify Web API OAuth integration for personalized user playlist streaming.",
      "Multimodal acoustic tone analysis combining facial landmark tracking with vocal intonation.",
      "Mobile-friendly edge inference via TensorFlow.js running fully client-side.",
      "Historical affective telemetry charts tracking mood trends over study and work sessions.",
    ],
    techStack: [
      { category: "Deep Learning & Vision", items: ["TensorFlow", "Keras", "OpenCV", "NumPy", "Scikit-learn"] },
      { category: "Benchmark Dataset", items: ["FER2013 Facial Expression Dataset"] },
      { category: "Backend & Streaming", items: ["Python", "Flask", "Multipart HTTP Streaming"] },
      { category: "Frontend", items: ["HTML5 Canvas", "JavaScript", "React.js", "Tailwind CSS"] },
    ],
    challenges: [
      {
        challenge: "Variable ambient lighting and extreme head angles frequently produce false emotion classifications.",
        solution: "Implemented histogram equalization and confidence-threshold filtering to prevent erratic playlist changes.",
      },
      {
        challenge: "Continuous neural network inference on raw 1080p video streams causes CPU throttling.",
        solution: "Decoupled face detection from CNN inference by downscaling frames and evaluating once every 3rd frame.",
      },
    ],
    metrics: [
      { label: "Model Benchmark", value: "70.28% Acc (7,048 Test Imgs)" },
      { label: "Top-2 Accuracy", value: "88.12% (FER2013 Test Set)" },
      { label: "Emotion Classes", value: "7 Categories (Source Verified)" },
      { label: "Video Display", value: "30 FPS Decoupled Thread" },
    ],
    resultsAndLimitations: {
      results: [
        "Achieved 70.28% overall test accuracy and 88.12% top-2 accuracy on 7,048 FER2013 test images (verified in models/classification_report.txt).",
        "Implements a non-blocking multithreaded runtime achieving 30 FPS display while offloading inference to a worker thread.",
        "Generates dynamic music recommendations matching emotional states via cosine similarity on Spotify acoustic features.",
      ],
      limitations: [
        "Inference is evaluated every 5th frame rather than every frame to maintain real-time 30 FPS display on consumer CPUs.",
        "Model accuracy is bounded by standard FER2013 dataset label noise (e.g., subtle smile vs neutral ambiguity).",
        "Music recommendations are driven by the local acoustic dataset (music_data.csv); live Spotify account OAuth is on the roadmap.",
      ],
    },
    roadmap: [
      {
        phase: "Phase 1 (Completed)",
        title: "CNN Model & Video Pipeline Core",
        description: "OpenCV webcam capture, Haar Cascade face detection, Keras CNN model trained on FER2013, and Flask streaming.",
      },
      {
        phase: "Phase 2 (Current)",
        title: "Temporal Smoothing & Mood Recommender",
        description: "Rolling buffer majority voting, mood-matrix playlist mapping, and web client HUD display.",
      },
      {
        phase: "Phase 3 (Upcoming)",
        title: "Spotify API Integration & TensorFlow.js",
        description: "Official Spotify Web API OAuth connector, edge browser inference via TensorFlow.js, and mood trend charts.",
      },
    ],
  },
  {
    id: "distributed-file-system",
    slug: "distributed-file-system",
    title: "Distributed File System with Fault Tolerance",
    subtitle: "Python Socket-Based Replicated Storage Engine with Automatic Node Recovery & SHA-256 Integrity",
    category: "Operating Systems / Distributed Systems",
    status: "prototype",
    statusLabel: "Prototype / Local Development",
    summary:
      "A Python-based distributed file storage system that distributes file chunks across multiple storage nodes and provides 3-way replication, node failure detection via TCP/UDP heartbeat mechanisms, automatic re-replication recovery, and cryptographic SHA-256 data integrity verification.",
    tags: [
      "Distributed Systems",
      "Operating Systems",
      "Python",
      "TCP/IP Sockets",
      "TCP/UDP Heartbeats",
      "Multithreading",
      "Fault Tolerance",
      "SHA-256",
      "JSON Persistence",
    ],
    liveUrl: null,
    repoUrl: "https://github.com/Harsha1704/Distributed-File-System-with-Fault-Tolerance",
    timeline: "2024",
    featured: false,
    order: 6,
    objectives: [
      "Implement a robust Master-Worker distributed storage topology capable of splitting large files into discrete chunks across nodes.",
      "Guarantee high availability and data durability through three-way replication (Replication Factor RF = 3).",
      "Detect storage node crashes in real time using asynchronous TCP/UDP heartbeat monitoring mechanisms without network congestion.",
      "Orchestrate automatic re-replication healing to restore the target replication factor upon node failure detection.",
      "Prevent silent bit rot and network corruption using cryptographic SHA-256 chunk and file checksum validation.",
    ],
    problemStatement: {
      context:
        "Large-scale distributed systems must store and retrieve massive datasets across commodity machines where hardware failures (disk crashes, power outages, network partitions) are the norm rather than an exception.",
      coreChallenge:
        "Coordinating file chunk distribution across multiple independent storage nodes while maintaining metadata consistency, detecting unresponsive nodes quickly without false alarms, and automatically healing degraded replication states without human intervention.",
      engineeringGoal:
        "Architect a pure-Python distributed file system inspired by Google File System (GFS) and HDFS, featuring a centralized thread-safe Master server, multi-node chunk storage, dual TCP data transfer and TCP/UDP heartbeat networking, and automatic self-healing replication.",
    },
    architectureSummary:
      "A centralized Master-Worker distributed architecture utilizing a thread-safe Master server for chunk placement and namespace management, multiple independent Storage Nodes for block persistence, and a CLI Client utilizing connection-oriented TCP sockets for reliable chunk streaming and TCP/UDP heartbeat pulses for health monitoring.",
    architectureLayers: [
      {
        layer: "Client Interface",
        component: "Interactive CLI Client",
        details: "Provides command-line primitives: upload, download, list, delete, and node failure simulation with automated chunk splitting and reconstruction.",
        status: "implemented",
      },
      {
        layer: "Coordination & Metadata",
        component: "Master Server & Namespace Manager",
        details: "Thread-safe metadata registry maintaining file-to-chunk mappings, node status tables, and atomic JSON snapshot persistence.",
        status: "implemented",
      },
      {
        layer: "Transport & Health Protocol",
        component: "TCP Data Transfer & TCP/UDP Heartbeat Layer",
        details: "High-throughput connection-oriented TCP sockets for reliable file chunk data transfer; lightweight TCP/UDP heartbeat pulses for periodic node health checks.",
        status: "implemented",
      },
      {
        layer: "Storage Node Cluster",
        component: "Multi-Process Storage Node Daemons",
        details: "Independent storage worker daemons managing local chunk directories, servicing chunk write/read requests, and transmitting periodic heartbeats.",
        status: "implemented",
      },
      {
        layer: "Fault Detection & Self-Healing",
        component: "Heartbeat Monitor & Re-Replication Worker",
        details: "Asynchronous background daemon monitoring node timestamps; triggers automated chunk migration to healthy nodes when RF drops below 3.",
        status: "implemented",
      },
      {
        layer: "Integrity & Anti-Tamper",
        component: "SHA-256 Verification Engine",
        details: "Computes cryptographic hashes during chunking; validates integrity at storage write and client-side pre-assembly to eliminate corruption.",
        status: "implemented",
      },
    ],
    systemFlowDiagram: {
      title: "Master-Node Distributed Storage & Automatic Healing Pipeline",
      caption: "File chunking, 3-way replicated placement, UDP health monitoring, and automated re-replication workflow.",
      explanation: "Clients split files into fixed chunks and query the Master for placement on 3 distinct storage nodes. Chunks are streamed via TCP with SHA-256 checksums. Storage nodes transmit continuous UDP heartbeats to the Master. If a node fails, the Master detects the missed heartbeats, identifies under-replicated chunks, and commands an active node to copy replicas to a healthy node.",
      steps: [
        {
          stage: "Ingestion",
          title: "File Chunking & SHA-256 Hashing",
          component: "Client Chunking Processor",
          description: "Divides uploaded files into discrete binary chunks and computes SHA-256 checksums for each chunk and the whole file.",
          status: "implemented",
          badgeText: "Chunking + SHA-256",
        },
        {
          stage: "Placement",
          title: "Master Metadata & Node Allocation",
          component: "Master Metadata Registry",
          description: "Allocates 3 distinct healthy storage nodes per chunk to satisfy Replication Factor RF = 3 and records mappings atomically.",
          status: "implemented",
          badgeText: "RF = 3 Topology",
        },
        {
          stage: "Storage Transfer",
          title: "Parallel TCP Chunk Streaming",
          component: "TCP Socket Transfer Layer",
          description: "Streams chunk byte arrays directly to allocated storage nodes; nodes persist blocks and acknowledge successful write.",
          status: "implemented",
          badgeText: "TCP Streaming",
        },
        {
          stage: "Health Monitor",
          title: "Periodic UDP Heartbeat Tracking",
          component: "UDP Heartbeat Daemon",
          description: "Storage nodes broadcast periodic UDP pulses; Master tracks last-seen timestamps and flags nodes dead if timeout expires.",
          status: "implemented",
          badgeText: "UDP Heartbeats",
        },
        {
          stage: "Self-Healing",
          title: "Automated Re-Replication Recovery",
          component: "Re-Replication Engine",
          description: "When a node crash is declared, Master locates surviving chunk copies and instructs an active node to re-replicate to restore RF = 3.",
          status: "implemented",
          badgeText: "Auto Self-Healing",
        },
      ],
    },
    mermaidDiagram: `flowchart TD
    Client[Client CLI: Upload / Download / List / Delete]
    Master[Master Server: Metadata Registry & Health Monitor]
    Node1[Storage Node 1]
    Node2[Storage Node 2]
    Node3[Storage Node 3]
    Node4[Storage Node 4 - Standby]

    Client -->|1. Request Chunk Placement| Master
    Master -->|2. Return Target Node List RF=3| Client
    Client -->|3. TCP Stream Chunk A| Node1
    Client -->|3. TCP Stream Chunk A| Node2
    Client -->|3. TCP Stream Chunk A| Node3

    Node1 -.->|UDP Heartbeat| Master
    Node2 -.->|UDP Heartbeat| Master
    Node3 -.->|UDP Heartbeat| Master
    Node4 -.->|UDP Heartbeat| Master

    Node2 -.->|Node 2 Fails / Heartbeat Timeout| Master
    Master -->|4. Trigger Re-Replication: Copy Chunk A to Node 4| Node1
    Node1 -->|5. Transfer Replicated Chunk A| Node4`,
    implementationSections: [
      {
        title: "Master-Node Architecture & Thread-Safe Metadata Management",
        description:
          "The Master server acts as the centralized coordinator, tracking file namespaces, chunk locations, and storage node liveness while remaining free of heavy chunk transfer traffic.",
        items: [
          "Thread-Safe In-Memory State: Utilizes threading locks (Lock / RLock) to synchronize concurrent client metadata modifications and prevent race conditions.",
          "Atomic JSON Persistence: Metadata snapshots are committed to disk atomically to ensure system recovery without corrupted state following Master process restarts.",
          "Chunk Placement Table: Maps each logical file to an ordered array of chunk IDs, with each chunk ID mapped to a set of physical Storage Node network addresses.",
          "Decoupled Data Plane: Clients communicate with the Master strictly for metadata; actual chunk payloads flow directly between Client and Storage Nodes over TCP.",
        ],
      },
      {
        title: "Three-Way Replication (RF = 3) & Automatic Failure Recovery",
        description:
          "High availability is guaranteed by enforcing a constant Replication Factor of 3 across all stored chunks, combined with autonomous node failure detection and repair.",
        items: [
          "Dual Networking Protocols: Employs lightweight UDP datagrams for frequent node heartbeats (minimizing overhead) and connection-oriented TCP sockets for reliable chunk I/O.",
          "Heartbeat Timeout Daemon: Master runs a background monitor thread auditing storage node timestamps. A node missing heartbeats beyond the configured threshold is marked dead.",
          "Automated Re-Replication: Master scans the chunk placement table for chunks hosted on the failed node, finds surviving replicas on healthy nodes, and commands a copy to an under-utilized node to restore RF = 3.",
          "Failure Simulation CLI: Built-in command options allow operators to purposefully kill or disconnect storage nodes to demonstrate live re-replication and continuous read availability.",
        ],
      },
      {
        title: "Chunking, Reconstruction & Cryptographic SHA-256 Integrity",
        description:
          "Data integrity is verified end-to-end to protect against network bit flips, partial transmissions, and silent on-disk corruption.",
        items: [
          "Fixed-Size Chunking: Client divides incoming files into fixed-size chunks with sequential numbering, enabling parallel multi-node distribution.",
          "Per-Chunk SHA-256 Checksums: Every chunk calculates an independent SHA-256 hash at creation, stored in Master metadata and validated by the Storage Node upon write.",
          "Client-Side Reconstruction Verification: During file download, client retrieves chunks from accessible replica nodes, validates each chunk's SHA-256, reassembles the binary stream, and verifies the whole-file hash.",
          "CLI File Operations: Supports full lifecycle storage commands including upload, download, list files/nodes, delete with replica cleanup, and cluster status inspection.",
        ],
      },
    ],
    screenshots: [
      {
        id: "dfs-1",
        title: "Distributed File System Cluster Topology",
        caption: "Architecture layout illustrating Master server coordination, 3-way replication across storage nodes, and dual TCP/UDP communication channels.",
        tag: "Cluster Topology",
        placeholderType: "pipeline",
      },
      {
        id: "dfs-2",
        title: "Node Failure Detection & Re-Replication Console",
        caption: "Terminal telemetry illustrating UDP heartbeat timeout detection, degraded replication state identification, and automatic re-replication recovery.",
        tag: "Fault Tolerance",
        placeholderType: "telemetry",
      },
      {
        id: "dfs-3",
        title: "CLI Operations & Integrity Verification",
        caption: "Interactive CLI interface demonstrating chunk splitting, SHA-256 checksum validation, file reconstruction, and cluster status reporting.",
        tag: "CLI Console",
        placeholderType: "dashboard",
      },
    ],
    implementedFeatures: [
      "Master server managing file-to-chunk metadata, storage node registries, and chunk allocation tables.",
      "Three-way chunk replication (RF = 3) ensuring continuous data availability through node outages.",
      "File chunking engine splitting files into discrete binary blocks and reassembling them on download.",
      "Dual-channel networking: reliable TCP socket streams for chunk data and connectionless UDP for heartbeats.",
      "Heartbeat-based node failure detection daemon auditing node liveness timestamps in the background.",
      "Automatic re-replication mechanism transferring chunks from surviving nodes to healthy nodes upon node crash.",
      "End-to-end cryptographic SHA-256 verification per chunk and for full-file reconstruction.",
      "Thread-safe in-memory Master state synchronized with atomic JSON metadata persistence.",
      "Full-featured CLI operations supporting file upload, download, file listing, file deletion, and cluster status.",
      "Interactive node failure simulation tool for verifying fault tolerance in local development.",
    ],
    plannedFeatures: [
      "Raft consensus protocol implementation to replace the single Master and eliminate the single point of failure (SPOF).",
      "Dynamic chunk rebalancing algorithm to equalize disk space utilization across heterogeneous storage nodes.",
      "Reed-Solomon erasure coding as an alternative to 3-way replication to reduce storage overhead while preserving fault tolerance.",
      "gRPC / Protobuf transport layer migration to optimize serialization throughput over high-latency networks.",
    ],
    techStack: [
      { category: "Core Systems & Networking", items: ["Python 3.10+", "TCP/IP Sockets", "UDP Datagrams", "SocketServer"] },
      { category: "Concurrency & Synchronization", items: ["threading (Thread, Lock, RLock)", "Concurrent Connection Handlers"] },
      { category: "Data Integrity & Storage", items: ["hashlib (SHA-256)", "Binary Stream I/O", "Atomic JSON Persistence"] },
      { category: "Tools & Testing", items: ["CLI Interface (argparse / cmd)", "Node Failure Simulator", "Git"] },
    ],
    challenges: [
      {
        challenge: "Preventing race conditions and split metadata state during concurrent file uploads and node registrations.",
        solution: "Enforced thread-safe reentrant locks around Master metadata tables and coupled updates with atomic write-and-rename JSON persistence.",
      },
      {
        challenge: "Detecting dead storage nodes promptly without saturating the network with continuous connection overhead.",
        solution: "Implemented a dual-channel communication architecture: utilizing reliable TCP sockets for data streaming (chunk upload, download, and re-replication) while tracking storage node liveness via periodic TCP/UDP heartbeat mechanisms.",
      },
      {
        challenge: "Guaranteeing zero silent data corruption (bit rot) across distributed chunk storage nodes.",
        solution: "Embedded SHA-256 checksums in Master metadata for every individual chunk and the aggregate file, verifying hashes both upon node receipt and client reassembly.",
      },
    ],
    metrics: [
      { label: "Replication Factor", value: "RF = 3 (Configurable)" },
      { label: "Transport Protocols", value: "TCP (Data) + TCP/UDP (Heartbeats)" },
      { label: "Integrity Standard", value: "Cryptographic SHA-256" },
      { label: "Recovery Mode", value: "Automatic Re-Replication" },
    ],
    resultsAndLimitations: {
      results: [
        "Verified successful automatic re-replication: when any storage node is terminated, the Master promptly detects missed heartbeats and restores RF = 3 on surviving nodes.",
        "Verified chunk-level and file-level SHA-256 checksum validation, successfully detecting simulated payload tampering during client download.",
        "Demonstrated clean multi-process operation running Master and multiple independent storage nodes concurrently on local loopback.",
      ],
      limitations: [
        "Features a single Master architecture representing a single point of failure (SPOF); multi-master Raft consensus is on the future roadmap.",
        "Tested primarily on single-host multi-process loopback network environments rather than geographically distributed WAN nodes.",
        "Uses whole-chunk 3-way replication rather than erasure coding, requiring 3x raw storage capacity relative to file size.",
      ],
    },
    roadmap: [
      {
        phase: "Phase 1 (Completed)",
        title: "Core Master-Node Engine & TCP/UDP Network Layer",
        description: "Implemented file chunking, TCP chunk transport, UDP heartbeat monitoring, and thread-safe Master metadata registry.",
      },
      {
        phase: "Phase 2 (Completed)",
        title: "3-Way Replication, Auto Self-Healing & CLI",
        description: "Implemented RF = 3 replication, automated re-replication on node crash, SHA-256 verification, and CLI interface.",
      },
      {
        phase: "Phase 3 (Roadmap)",
        title: "Raft Consensus & Erasure Coding",
        description: "Eliminate single Master SPOF via Raft consensus leader election and implement Reed-Solomon erasure coding.",
      },
    ],
  },
  {
    id: "3d-bharat",
    slug: "3d-bharat",
    title: "3D Bharat",
    subtitle: "Interactive Digital Heritage Exploration Platform (2D SVG Live; 3D/WebGL Planned)",
    category: "3D & Interactive Web",
    status: "prototype",
    statusLabel: "Prototype / Local Development",
    summary:
      "An interactive digital heritage exploration platform built to democratize access to Indian architectural landmarks, featuring an implemented interactive 2D SVG geographic monument exploration interface with architectural and historical metadata. Interactive WebGL/Three.js 3D model rendering capabilities are on the planned future roadmap.",
    tags: ["React.js", "Interactive 2D SVG Map", "Cultural Heritage Tech", "Metadata Catalog", "WebGL (Planned)"],
    liveUrl: null,
    repoUrl: "https://github.com/Harsha1704/3D_Bharat",
    timeline: "2024",
    featured: true,
    order: 7,
    objectives: [
      "Preserve and showcase Indian architectural heritage through interactive 3D digital models accessible in web browsers.",
      "Enable spatial navigation across Indian states and union territories via an interactive geographic map interface.",
      "Target 60 FPS rendering performance on commodity consumer hardware without requiring native client downloads.",
      "Contextualize architectural monuments with rich historical metadata, dynasties, and structural engineering insights.",
    ],
    problemStatement: {
      context:
        "India possesses one of the world's richest collections of cultural and architectural monuments spanning millennia. However, physical access is geographically constrained, and conventional digital representations are limited to flat 2D photography and static Wikipedia articles.",
      coreChallenge:
        "High-fidelity 3D architectural meshes contain millions of polygons and massive texture maps that cause tab crashes, download latencies, and framerate drops on mobile devices and integrated GPUs.",
      engineeringGoal:
        "Build a lightweight, responsive web platform utilizing optimized asset delivery, WebGL orbit controls, and dynamic spatial annotations linked to a structured heritage metadata repository.",
    },
    architectureSummary:
      "WebGL rendering canvas coupled with an asynchronous asset streaming layer that serves optimized 3D geometry alongside structured architectural metadata and interactive state-by-state geographic navigation.",
    architectureLayers: [
      {
        layer: "Geographic Navigation",
        component: "Interactive SVG India Map & State Selector",
        details: "State-by-state spatial filtering connecting regional monuments to geographic coordinates and cultural eras.",
        status: "implemented",
      },
      {
        layer: "Historical & Contextual Metadata",
        component: "Structured Landmark Knowledge Base",
        details: "Architectural blueprints, historical timelines, dynasty associations, and structural engineering trivia.",
        status: "implemented",
      },
      {
        layer: "Responsive Presentation Layer",
        component: "React.js + Tailwind CSS Heritage Portal",
        details: "Monument catalog, filter controls, responsive modal inspectors, and media carousels.",
        status: "implemented",
      },
      {
        layer: "Client 3D Viewport (Roadmap Phase 13)",
        component: "WebGL / Three.js 3D Viewport (Target Prototype)",
        details: "Perspective camera, orbit controls, custom lighting rigs (ambient + directional), and raycasted coordinate pins.",
        status: "planned",
      },
      {
        layer: "Asset Streaming & Optimization (Roadmap Phase 7/13)",
        component: "GLTF / Draco Asset Delivery Pipeline (Design Budget)",
        details: "Mesh decimation target (< 5MB budget) and Draco geometry compression for 3D model delivery.",
        status: "planned",
      },
      {
        layer: "Geospatial Backend & AI (Roadmap Phases 5-6)",
        component: "Node.js / Flask + PostGIS & Cultural Knowledge Graph",
        details: "Spatial database queries for radius-based landmark discovery, multi-hop dynasty traversal, and AI guide assistant.",
        status: "planned",
      },
    ],
    mermaidDiagram: `flowchart LR
    AssetRepo[Optimized 3D Model Repository - GLTF/GLB] --> WebLoader[WebGL / 3D Asset Loader]
    MetaDB[Historical & Contextual Metadata DB] --> APILayer[Backend REST API / Static Asset Layer]
    WebLoader --> Canvas[Interactive 3D Viewport]
    APILayer --> Infobox[Contextual Information Panel]
    Canvas --> UI[Unified React Client Application]
    Infobox --> UI`,
    implementationSections: [
      {
        title: "3D Asset Optimization & Geometry Budget (Design Specification)",
        description:
          "To target smooth rendering performance across desktop and mobile browsers, the architectural 3D delivery pipeline is designed around rigorous polygon and payload budgets:",
        items: [
          "Target polygon decimation designed to retain architectural silhouettes while reducing vertex density.",
          "Target asset payload budget: Aiming under 5MB per model using compressed binary GLTF with Draco geometry compression.",
          "Texture atlas optimization: Baking ambient occlusion and diffuse maps into unified compressed textures.",
        ],
      },
      {
        title: "Interactive Spatial Annotation & State Navigation",
        description:
          "Visitors explore monuments through coordinated state maps and architectural detail views:",
        items: [
          "State navigation synchronized with SVG regional maps for seamless cultural exploration.",
          "Curated historical facts and dynasty timelines connected to regional architectural styles.",
          "Screen-space coordinate projections designed for interactive spatial fact pins.",
        ],
      },
    ],
    screenshots: [
      {
        id: "bharat-1",
        title: "3D Architectural Landmark Viewport",
        caption: "Conceptual 3D visualization illustrating monument orbit, material rendering, and lighting inspection concept.",
        tag: "3D Concept",
        placeholderType: "geospatial",
      },
      {
        id: "bharat-2",
        title: "Geographic Exploration & State Selector",
        caption: "Conceptual UI visualization of the regional navigation interface across Indian states and union territories.",
        tag: "Conceptual UI",
        placeholderType: "dashboard",
      },
      {
        id: "bharat-3",
        title: "Contextual Architectural Metadata Modal",
        caption: "Conceptual modal visualization displaying historical style, dynasty origins, and construction engineering trivia.",
        tag: "Metadata Concept",
        placeholderType: "pipeline",
      },
    ],
    implementedFeatures: [
      "Curated heritage catalog of Indian architectural monuments with contextual documentation.",
      "State and regional navigation linking geographic coordinates to cultural landmarks.",
      "Responsive web layout scaling smoothly across mobile, tablet, and desktop viewports.",
      "Structured architectural metadata presentation detailing dynasties, eras, and construction styles.",
    ],
    plannedFeatures: [
      "Full Three.js WebGL 3D viewer integration for interactive model orbit, zoom, and pan controls in the browser.",
      "WebXR / Virtual Reality mode for direct browser-based spatial headsets.",
      "AI Heritage Guide: In-viewport conversational assistant answering historical inquiries in real time.",
      "Cultural Knowledge Graph linking monuments, dynasties, and historical trade routes.",
      "PostgreSQL / PostGIS spatial backend for proximity clustering and radius discovery.",
    ],
    techStack: [
      { category: "Frontend & UI", items: ["React.js", "TypeScript", "HTML5 Canvas", "Tailwind CSS"] },
      { category: "3D & Graphics (Roadmap)", items: ["WebGL", "Three.js / React Three Fiber (Target)", "GLTF / GLB", "Draco Compression"] },
      { category: "Backend & Assets", items: ["Node.js / Express", "Cloud Asset Storage", "REST APIs"] },
      { category: "Planned Data Layer", items: ["PostgreSQL / PostGIS", "Cultural Knowledge Graph"] },
    ],
    challenges: [
      {
        challenge: "High-polygon 3D meshes cause severe framerate degradation on mobile and integrated GPUs.",
        solution: "Established a strict design budget requiring mesh decimation and compressed GLTF binary formats to keep asset sizes under 5MB.",
      },
      {
        challenge: "Synchronizing 2D UI overlay pins with continuous camera orbit manipulations.",
        solution: "Formulated normalized device coordinate (NDC) projections to anchor HTML pins precisely to 3D mesh coordinates.",
      },
    ],
    metrics: [
      { label: "Framerate Target", value: "Target: 60 FPS (Hardware dependent)" },
      { label: "Asset Size Budget", value: "Target: < 5MB (Design budget)" },
      { label: "Rendering Tech", value: "Three.js / WebGL (Target Prototype)" },
      { label: "UI Scalability", value: "Mobile + Desktop (Responsive)" },
    ],
    resultsAndLimitations: {
      results: [
        "Delivers an engaging digital heritage catalog framework directly in standard web browsers.",
        "Demonstrates clean state-by-state geographic filtering and structured historical contextualization.",
        "Establishes a complete technical roadmap for 3D model streaming, PostGIS backend, and Knowledge Graph integration.",
      ],
      limitations: [
        "Performance framerates are not benchmarked; client-side rendering speed depends on local device GPU capabilities.",
        "The complete 3D interactive viewer is in development (Phase 13 on project roadmap); currently focuses on catalog and map views.",
        "PostGIS backend geospatial queries and Cultural Knowledge Graph are in design/scoping phases.",
      ],
    },
    roadmap: [
      {
        phase: "Phase 1 (Completed)",
        title: "Heritage Map & Catalog Foundation",
        description: "State-by-state navigation, landmark database schema, and responsive UI design system.",
      },
      {
        phase: "Phase 2 (Current)",
        title: "3D Asset Optimization & Viewer Integration",
        description: "Three.js WebGL canvas integration, Draco GLTF compression pipeline, and interactive orbit controls.",
      },
      {
        phase: "Phase 3 (Upcoming)",
        title: "Cultural Knowledge Graph & WebXR",
        description: "Graph database traversal linking historical eras, PostGIS proximity queries, and WebXR spatial headset support.",
      },
    ],
  }
];
