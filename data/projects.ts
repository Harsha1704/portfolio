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
          badgeText: "Local Dev Service",
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
      operationalCaveat: "Runs as a local development service in Python Flask and React; production cloud deployment is planned for future microservice clustering.",
    },

    title: "ResumeMatch AI",
    subtitle: "Intelligent Resume-Job Description Alignment & Career Telemetry Platform",
    category: "Applied NLP & GenAI",
    status: "prototype",
    statusLabel: "Prototype / Local Development",
    summary:
      "A candidate telemetry platform that parses complex resume documents (PDF/DOCX), extracts semantic entities and skill profiles, and computes alignment metrics against target job descriptions with keyword disparity matrices.",
    tags: ["NLP", "Generative AI", "Scikit-learn", "React.js", "Flask", "Python"],
    liveUrl: null,
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
    ],
    plannedFeatures: [
      "Interview Intelligence module generating tailored technical and behavioral preparation questions.",
      "STAR-method generative bullet point enhancement suggestions.",
      "User authentication and historical telemetry tracking with PostgreSQL persistence.",
      "Direct LinkedIn job posting URL ingestion for one-click comparison.",
    ],
    techStack: [
      { category: "NLP & Machine Learning", items: ["Python", "Scikit-learn (Logistic Regression)", "TF-IDF FeatureUnion (Word + Char)", "NLTK / Regex"] },
      { category: "Backend & API", items: ["Flask", "RESTful Architecture", "PyPDF2", "python-docx", "Pytest (292 tests)"] },
      { category: "Frontend", items: ["React.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
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
    order: 3,
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
    order: 4,
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
    order: 5,
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
];
