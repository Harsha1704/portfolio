# Comprehensive Project Technical Interview Guide

**Candidate:** Sri Harsha  
**Degree:** B.Tech Computer Science & Engineering (AI & ML), Lovely Professional University (CGPA: 8.51)  
**Target Roles:** AI/ML Engineer, Machine Learning Engineer, AI Full-Stack Developer, Applied AI Engineer  
**Portfolio:** [https://portfolio-six-lake-12.vercel.app/](https://portfolio-six-lake-12.vercel.app/) • [GitHub](https://github.com/Harsha1704)

---

# Project 1: SatQuery AI — Interactive Vision-Language Assistant for Remote Sensing

**Domain:** Multimodal AI, Remote Sensing & Computer Vision  
**Context:** Smart India Hackathon (SIH) Problem Statement 26167  
**Repository:** [https://github.com/Harsha1704/Satquery_ai](https://github.com/Harsha1704/Satquery_ai)  
**Implementation Status:** Prototype / Local Development (Research Prototype)

---

### 1. 30-Second Elevator Pitch
> "SatQuery AI is an interactive vision-language system designed for Smart India Hackathon problem 26167 to democratize satellite imagery analysis. Traditional GIS software requires specialized geospatial analysts to locate infrastructure, evaluate canopy cover, and detect anomalies. SatQuery AI allows non-expert users to query high-resolution overhead raster scenes using natural language. It slices massive GeoTIFF/PNG imagery into 512×512 multi-scale tiles using OpenCV, constructs spatially grounded prompt envelopes, and feeds them into multimodal vision-language APIs to stream structured land-use classifications and semantic bounding descriptions back to a React canvas."

---

### 2. 2-Minute Technical Summary
> "The core motivation behind SatQuery AI was addressing the semantic gap between raw overhead nadir imagery and actionable domain insights. Unlike consumer photography, satellite rasters have gigapixel dimensions, varying ground sample distance (GSD), and severe perspective distortion from top-down angles.
> 
> My technical approach uses a four-stage pipeline:
> 1. **Ingestion & Preprocessing:** Large raster scenes (GeoTIFF, PNG) are parsed using OpenCV and Pillow. Because raw satellite scenes exceed the context token budgets of foundation models, I engineered an OpenCV multi-scale sliding window algorithm that partitions images into 512×512 pixel patches while retaining coordinate metadata and hierarchical pyramids.
> 2. **Prompt Conditioning & Featurization:** The natural language user query is injected into a conditioned prompt envelope that enforces strict geographic taxonomy—differentiating impervious surfaces, riparian zones, and canopy cover.
> 3. **Multimodal Inference:** Tile patches and prompts are dispatched to multimodal vision-language models (GPT-4 Vision / Gemini API), returning structured JSON containing land-use categories, confidence intervals, and textual spatial bounding coordinates.
> 4. **Presentation:** A Python Flask orchestration service handles API rate limits, exponential backoff, and coordinate serialization, rendering results onto an interactive React viewport.
> 
> In terms of project status, it is a functional local prototype. Performance is API-dependent and not yet benchmarked against dedicated domain datasets, and bounding boxes are currently provided textually with spatial overlay on our active roadmap."

---

### 3. 5-Minute Technical Walkthrough

#### Stage 1: Problem Definition & Data Slicing
In satellite remote sensing, images often span 5000×5000 to 15000×15000 pixels. Directly feeding an entire scene to a Vision-Language Model is impossible due to token limit constraints and resolution compression (which blurs fine infrastructure like power pylons or narrow roads).
I engineered an OpenCV tiling module (`cv2.resize`, array slicing):
- Large rasters are partitioned into overlapping 512×512 pixel tiles with a 15% overlap margin to prevent edge truncation of geographic objects.
- Spatial coordinate transforms preserve the $(x, y)$ pixel bounds relative to the parent raster's CRS (Coordinate Reference System) or normalized bounding coordinates $[0, 1]$.

#### Stage 2: Prompt Engineering & Schema Enforcement
Generic VLMs frequently hallucinate or produce unstructured natural prose. To guarantee programmatic client consumption:
- The backend injects a strict system prompt instructing the model to act as a GIS analyst.
- Output is enforced via a Pydantic-like JSON schema:
  ```json
  {
    "tile_id": "patch_r02_c04",
    "land_use": [{"class": "Water Body", "coverage_pct": 34.2}],
    "infrastructure_detected": ["Bridge", "Paved Highway"],
    "anomalies": ["Sediment plume near northern embankment"],
    "confidence_score": 0.88,
    "spatial_coordinates": {"box_2d": [120, 45, 310, 240]}
  }
  ```

#### Stage 3: Orchestration & Error Resilience
The Python Flask service receives client queries, evaluates tile relevance through thumbnail heuristic downsampling or full-resolution patch sweeps, and makes parallel async requests to external VLM endpoints. It includes exponential backoff to handle provider rate-limits (HTTP 429) and falls back to coarse macro-level descriptions if sub-tile token quotas are constrained.

#### Stage 4: Client-Side Interactive Viewport
Built in React.js with Lucide icons, the interface provides a dual-pane layout: an interactive map canvas supporting zoom/pan transformations on the overhead imagery, and a conversational telemetry sidebar displaying classified land-use breakdowns, confidence scores, and historical query logs.

---

### 4. Architecture & Serving Flow
```
[User Natural Query + GeoTIFF/PNG]
         │
         ▼
[Python Flask Backend Ingestion Engine]
         │
         ├───► [OpenCV Multi-Scale Tile Slicer] ──► 512x512 Patches + Spatial Metadata
         │
         ├───► [GIS Prompt Envelope Generator] ──► Domain Taxonomy Conditioning
         │
         ▼
[Multimodal Vision-Language API (GPT-4V / Gemini)]
         │
         ▼ (Structured JSON Stream)
[Coordinate Normalizer & Rate-Limit Handler]
         │
         ▼ (REST Payload)
[React.js Interactive Canvas + Analytics Sidebar]
```

---

### 5. Ten Likely Technical Interview Questions & Model Answers

#### Q1: Why did you choose 512×512 tile sizes instead of 256×256 or 1024×1024?
**Answer:** "512×512 represents the optimal sweet spot between resolution preservation and token economics. 256×256 tiles break high-level spatial context (e.g., an entire reservoir or runway cannot fit in one tile), leading to fragmented inferences. Conversely, 1024×1024 tiles consume significantly higher token counts per API call and cause multimodal models to internally downscale the patch, destroying small-scale features like narrow canal breaches or vehicles."

#### Q2: How did you preserve spatial context across tile boundaries?
**Answer:** "I implemented a sliding-window stride with a 15% overlap (76 pixels) across adjacent tiles. Furthermore, each tile's prompt metadata retains its matrix index and neighboring tile IDs $(row \pm 1, col \pm 1)$, allowing the backend aggregator to stitch boundary-intersecting entity predictions together."

#### Q3: Satellite images usually have multiple spectral bands (e.g., Sentinel-2 13 bands including NIR). How does SatQuery AI handle multispectral data?
**Answer:** "In our current prototype, we convert input rasters into 3-channel RGB (true color) or false-color composites (e.g., NIR-Red-Green for vegetation analysis) before sending to multimodal APIs, because foundation VLMs natively accept 3-channel inputs. Native multi-spectral tensor ingestion (e.g., handling 13-band GeoTIFFs directly) is a planned enhancement requiring custom pre-trained patch encoders."

#### Q4: Why use an external VLM API instead of training a local YOLO or Mask R-CNN model?
**Answer:** "YOLO and Mask R-CNN excel at closed-set object detection on pre-labeled categories. However, Smart India Hackathon problem 26167 required open-vocabulary natural language interrogation—analysts wanted to ask conversational questions like *'Has agricultural runoff increased near the western river bend?'* VLMs provide zero-shot semantic reasoning that closed-set detectors cannot match."

#### Q5: What is Ground Sample Distance (GSD), and how does it impact model inference?
**Answer:** "GSD is the physical distance on the ground represented by the width of a single pixel (e.g., 30m for Landsat, 10m for Sentinel-2, 30cm for commercial Maxar). If the GSD is 10m, a car is smaller than a single pixel and physically cannot be detected. In SatQuery AI, we reject fine-grained queries if the image metadata indicates the GSD is coarser than the object resolution threshold."

#### Q6: How do you prevent hallucination in VLM spatial outputs?
**Answer:** "We use three defenses: first, system prompt constraints specifying 'If an infrastructure element is not visually distinct with >80% confidence, report ABSENT'; second, structured JSON schema validation that rejects non-conforming responses; third, post-inference heuristic checks validating that identified bounding coordinates fall strictly within the tile's pixel boundaries."

#### Q7: How does the Flask backend handle API rate limits during multi-tile sweeps?
**Answer:** "We implemented an exponential backoff retry policy with jitter using Python's `tenacity` library. If a provider returns HTTP 429, the system waits $2^n + \text{random\_jitter}$ seconds before retrying, capped at 3 attempts before raising an explicit status to the client."

#### Q8: What is the computational bottleneck of this pipeline?
**Answer:** "The primary bottleneck is upstream multimodal API network latency, which averages 1.2 to 2.5 seconds per tile inference. OpenCV tiling and prompt generation take under 35 milliseconds locally."

#### Q9: How does the React frontend maintain responsive zoom and pan on high-resolution images?
**Answer:** "The frontend uses HTML5 Canvas with CSS transform matrices (`translate3d`, `scale`) to leverage GPU compositing. Only visible tile coordinates are rendered in the DOM, avoiding heavy re-render cascades."

#### Q10: How would you evaluate the model's accuracy quantitatively?
**Answer:** "By benchmarking against standardized aerial datasets like LandCoverNet or RSVQA using intersection-over-union (IoU) for bounding boxes, mean Average Precision (mAP), and classification F1-score across standard land-cover taxonomy."

---

### 6. Five Challenging Follow-Up Questions & Defenses

#### Q1: "Isn't sending hundreds of satellite tiles to GPT-4V/Gemini economically unfeasible in production?"
**Defense:** "Absolutely, for large-scale production sweeps, sending every tile to a commercial multimodal API would be cost-prohibitive. The production architecture would adopt a two-stage hierarchical triage: a lightweight local model (such as a quantized MobileNet or CLIP zero-shot filter) scans all tiles in milliseconds to discard empty ocean or desert patches, passing only the top 5% candidate tiles with detected anomalies to the multimodal VLM for semantic reasoning."

#### Q2: "Why build in Flask rather than FastAPI with asynchronous coroutines?"
**Defense:** "Flask was selected for the prototype due to rapid prototyping speed and clean synchronization with OpenCV Python bindings. However, for a high-concurrency production system handling dozens of concurrent GIS analysts, FastAPI with `asyncio.gather` for parallel tile dispatch and ASGI deployment on Uvicorn is the superior engineering choice, which is scoped on our backend roadmap."

#### Q3: "How do you handle coordinate transformations between raw pixel space and real-world latitude/longitude (WGS84)?"
**Defense:** "GeoTIFF files encode an affine transformation matrix $(x_{\text{geo}} = a \cdot x + b \cdot y + c)$. In our data pipeline, we preserve this affine matrix during tiling. When the model returns a pixel bounding box $[x_1, y_1, x_2, y_2]$ within tile $(r, c)$, we multiply the local pixel offset back through the parent affine matrix to yield exact WGS84 GPS coordinates."

#### Q4: "If cloud cover obscures a tile, how does your system handle it?"
**Defense:** "Cloud cover creates false positives in spectral brightness. In the preprocessing layer, a simple threshold on luminance and spectral variance identifies cloud saturation (>85% white pixels with low texture gradient). The system flags the tile as CLOUD_OBSCURED and prompts the user that optical data is obstructed."

#### Q5: "What if the user asks a question unrelated to the image, such as 'Who won the election?'"
**Defense:** "We enforce input guardrails in the prompt template with system boundaries: 'You are exclusively an aerial remote sensing analyst. If a query does not pertain to the visual geospatial contents of the provided image patch, respond with OUT_OF_SCOPE'."

---

### 7. Three Realistic Limitations & Improvement Roadmap
1. **API Latency & Cost:** Dependent on third-party commercial APIs. *Roadmap improvement:* Fine-tune a lightweight open-weight VLM (such as PaliGemma or Qwen2-VL) deployed locally on a dedicated GPU instance.
2. **Textual vs Visual Grounding:** Visual bounding box overlays are currently generated as coordinate text rather than real-time canvas overlays. *Roadmap improvement:* Implement client-side SVG bounding box projection mapped directly to image pixel coordinates.
3. **RGB-Only Ingestion:** Multispectral bands (SAR, NIR, SWIR) are collapsed into RGB representations. *Roadmap improvement:* Integrate specialized geospatial encoders (like Prithvi or SatMAE) to process raw multispectral GeoTIFF tensors natively.

---
---

# Project 2: ResumeMatch AI — Intelligent Resume-Job Description Alignment Platform

**Domain:** Applied NLP & Generative AI, Career Telemetry  
**Live Frontend:** [https://frontend-mu-rust-l6t4ywn0qf.vercel.app](https://frontend-mu-rust-l6t4ywn0qf.vercel.app)  
**Live Backend API:** [https://resumematch-ai-api-atil.onrender.com](https://resumematch-ai-api-atil.onrender.com) (`/health` returns HTTP 200 OK)  
**Repository:** [https://github.com/Harsha1704/ResumeMatch_AI](https://github.com/Harsha1704/ResumeMatch_AI)  
**Implementation Status:** Live Demo (Multi-Tier Cloud Deployment)

---

### 1. 30-Second Elevator Pitch
> "ResumeMatch AI is a production-deployed candidate telemetry platform that solves the black-box opacity of traditional Applicant Tracking Systems (ATS). While legacy screeners rely on naive keyword matching—vulnerable to keyword stuffing and unable to identify semantic alignment—ResumeMatch AI extracts structured technical competencies from complex PDF and DOCX files. It featurizes text through a scikit-learn FeatureUnion combining word (1-3) and character (3-5) n-gram TF-IDF matrices, evaluates fit using a calibrated Logistic Regression classifier, and calculates contextual skill gap matrices using an explainable weighted taxonomy engine in Flask and React."

---

### 2. 2-Minute Technical Summary
> "The core challenge in resume parsing is structural irregularity: multi-column formats, non-standard font encodings, and short technical acronyms (like 'AI', 'R', or 'Go') that cause false-positive matches in natural prose.
> 
> My implementation features:
> 1. **Robust Ingestion:** Resumes (PDF/DOCX) and raw job descriptions are ingested via multipart upload. I built layout-aware text extraction using PyPDF2 and python-docx, coupled with an acronym boundary validator and a 24-category curated technology alias dictionary.
> 2. **Dual Featurization & ML Inference:** To capture both domain vocabulary and sub-word morphological patterns (e.g., 'containerize' vs 'containerization'), I built a `FeatureUnion` combining word n-grams (1-3) and character n-grams (3-5). A calibrated Logistic Regression model classifies suitability into three tiers: No Fit, Potential Fit, and Good Fit.
> 3. **Weighted Taxonomy Matching vs Historical Jaccard:** While our early research proposed standard Jaccard token overlap, the production codebase in `backend/app/services/job_matching.py` implements an explainable weighted requirement engine: mandatory skills carry weight 1.0, optional skills 0.25, and section evidence is weighted higher if found under PROJECTS or EXPERIENCE versus raw mentions. It also detects negated claims (e.g., 'not experienced in Kubernetes').
> 4. **Cloud Deployment:** Frontend is live on Vercel, and the Flask REST API is containerized on Render with health telemetry. The codebase is supported by 292 passing automated unit and integration tests achieving 97.65% code coverage."

---

### 3. 5-Minute Technical Walkthrough

#### Stage 1: Document Parsing & Entity Extraction
Document parsing handles diverse candidate formatting:
- Raw byte streams from PDF/DOCX are extracted and normalized to remove ligature artifacts (e.g., `ﬁ` to `fi`), tab stops, and multi-column visual splits.
- A boundary-sensitive regex engine scans tokens against a curated technology taxonomy of over 400 aliases, ensuring short tokens like `C` or `R` are matched only as isolated programming language identifiers and not within words like 'Customer' or 'Reasoning'.

#### Stage 2: TF-IDF FeatureUnion Engineering
Traditional word-level bag-of-words ignores typos and morphological derivations:
- `FeatureUnion` integrates:
  - `TfidfVectorizer(ngram_range=(1, 3), max_features=5000, sublinear_tf=True)`: captures compound technical phrases like 'distributed database', 'RESTful API', 'continuous integration'.
  - `TfidfVectorizer(analyzer='char_wb', ngram_range=(3, 5), max_features=10000)`: sub-word character n-grams bounded by word boundaries to handle typos and inflections.
- Sublinear term frequency scaling ($1 + \log(\text{tf})$) dampens the impact of candidates repeating a keyword 50 times in white text.

#### Stage 3: Calibrated Classification & Weighted Matching
- **Classification:** Logistic Regression was selected over black-box deep models for its high calibration, explainable feature coefficients, and microsecond inference speed. Probability outputs are calibrated using Platt scaling (`CalibratedClassifierCV`) to output honest posterior probabilities across suitability tiers.
- **Explainable Taxonomy Engine (`job_matching.py`):**
  - Identifies mandatory requirements from the job description (using modal verbs: 'must have', 'required', 'minimum 3 years').
  - Calculates coverage:
    $$\text{Score} = \frac{\sum_{s \in \text{Matched}} w_s \cdot e_s}{\sum_{s \in \text{Required}} w_s}$$
    where $w_s$ is importance weight (1.0 mandatory, 0.25 optional) and $e_s$ is section multiplier (1.2 if in Experience/Projects, 0.8 if in Skills list only).
  - Negation handling: Context windows around detected skills are scanned for negation cues ('no experience with', 'unfamiliar with', 'learning'); matches are flagged as `UNCERTAIN` or excluded.

#### Stage 4: Test Harness & Quality Engineering
The production API includes 292 passing automated tests in Pytest covering document edge cases (corrupt PDFs, zero-length strings, malicious script payloads), featurization boundary conditions, classification thresholds, and API response contracts, achieving 97.65% code coverage.

---

### 4. Architecture & Serving Flow
```
[Client Multipart Upload (PDF/DOCX + Job Spec)]
                     │
                     ▼
[Flask REST Microservice (Render Production Engine)]
                     │
     ├───► [PyPDF2 / python-docx Parsing + Normalization]
     ├───► [Curated Tech Alias Dictionary (Boundary Regex)]
     ├───► [FeatureUnion: Word (1-3) + Char (3-5) TF-IDF]
     │
     ├───► [Calibrated Logistic Regression Classifier] ──► Fit Probabilities
     │
     └───► [Weighted Taxonomy Coverage Engine] ──────────► Skill Gap Matrix & Negation
                     │
                     ▼ (JSON Contract)
[React.js Frontend Dashboard (Vercel Production Client)]
- Candidate Compatibility Gauges (Good / Potential / No Fit)
- Matched Competencies vs Missing Keywords Breakdown
- Prioritized Actionable Revision Checklist
```

---

### 5. Ten Likely Technical Interview Questions & Model Answers

#### Q1: Why use Logistic Regression instead of fine-tuning BERT or an LLM for classification?
**Answer:** "Three primary reasons: inference latency, deterministic reproducibility, and explainability. Logistic Regression with TF-IDF runs inference in under 5 milliseconds on commodity CPU hardware and has zero hallucination risk. Its linear coefficients allow us to inspect exactly which n-grams contributed to a score. For candidate telemetry, transparency and speed are vital. Fine-tuning a cross-encoder transformer is on our future roadmap for semantic nuances, but Logistic Regression establishes a rock-solid, production-grade baseline."

#### Q2: What is the difference between model prediction and actual hiring suitability?
**Answer:** "A model prediction is merely a mathematical correlation between textual n-grams in a resume and job description strings. Actual hiring suitability involves holistic evaluation: problem-solving ability, cultural fit, authentic project execution, and communication skills. A candidate with a low keyword match score might be an exceptional engineer who simply wrote a concise resume, while an unqualified candidate could game textual matching. That is why ResumeMatch AI presents actionable revision recommendations rather than automated binary rejection decisions."

#### Q3: Why is sublinear term frequency scaling (`sublinear_tf=True`) important in resume analysis?
**Answer:** "In standard TF-IDF, a term appearing 20 times has 20 times the weight of a term appearing once. In resumes, candidates frequently stuff keywords (e.g., repeating 'Python' 20 times in a footer). Sublinear TF replaces raw frequency $\text{tf}$ with $1 + \log(\text{tf})$ for $\text{tf} > 0$. This dampens frequency inflation: appearing 20 times only yields a weight of $1 + \log(20) \approx 3.99$, heavily punishing keyword stuffing."

#### Q4: How did you prevent data leakage during cross-validation?
**Answer:** "We utilized `StratifiedGroupKFold` cross-validation. If multiple resumes originated from the same candidate or source distribution, grouping ensured that no candidate's variations appeared in both training and validation splits simultaneously. Furthermore, the TF-IDF vectorizer was fit strictly on the training fold and only transformed the test fold to prevent vocabulary leakage."

#### Q5: What is the limitation of the Jaccard similarity index in resume matching?
**Answer:** "Jaccard similarity treats all tokens equally: $J(A, B) = \frac{|A \cap B|}{|A \cup B|}$. If a candidate matches 'Git' and 'HTML', Jaccard gives that the exact same weight as matching 'Kubernetes' and 'PyTorch'. In production, matching a core mandatory requirement is significantly more critical than matching an optional secondary tool. That is why our production engine uses weighted requirement coverage in `job_matching.py` rather than raw Jaccard overlap."

#### Q6: How does the system handle multi-column resumes where standard scrapers read horizontally across columns?
**Answer:** "Standard PDF text extractors read bounding text boxes sequentially by vertical position, merging column 1 line 1 with column 2 line 1. We built layout-aware parsing that sorts text blocks primarily by horizontal column boundaries $(x_0, x_1)$ before vertical flow $(y_0)$, ensuring column text flows logically as separate paragraphs."

#### Q7: How does your negation handling algorithm work?
**Answer:** "When a technical entity (e.g., 'Docker') is detected, the engine inspects a preceding context window of 5 tokens for negation keywords ('not', 'never', 'unfamiliar', 'lacking', 'zero', 'no practical'). If a negation cue is found, the match is removed from the confirmed skills list and categorized as `UNCERTAIN_OR_NEGATED`."

#### Q8: What happens on Render free-tier cold starts, and how does the frontend handle it?
**Answer:** "Render's free tier spins down inactive web services after 15 minutes. On a cold request, the container spin-up takes 15–20 seconds. To prevent user frustration, our React client displays an informative loading status indicator explaining that the cloud microservice is warming up, accompanied by an animated progress bar."

#### Q9: How did you achieve 97.65% test coverage?
**Answer:** "Using Pytest and `pytest-cov`, we wrote comprehensive unit tests covering parsing edge cases (empty documents, corrupted PDFs, password-protected files), tokenizer alias matches, FeatureUnion transformation pipelines, classification threshold edge cases, and Flask route error responses (400 Bad Request, 413 Payload Too Large, 500 Internal Error)."

#### Q10: How would you scale this microservice to handle 10,000 resumes per minute?
**Answer:** "We would decouple upload ingestion from parsing using an asynchronous task queue like Celery or AWS SQS with Redis. When a user uploads resumes, the Flask/FastAPI service saves documents to S3 and enqueues task IDs, returning HTTP 202 Accepted. A pool of distributed worker nodes parses documents, executes batched inference, and stores results in a PostgreSQL/Supabase database, notifying the client via WebSockets or polling."

---

### 6. Five Challenging Follow-Up Questions & Defenses

#### Q1: "Isn't TF-IDF incapable of understanding synonyms, such as 'AWS' and 'Amazon Web Services'?"
**Defense:** "In raw isolation, standard TF-IDF cannot connect synonyms. That is precisely why we engineered a preprocessing alias normalization layer: prior to TF-IDF featurization, technical synonyms (e.g., 'AWS', 'Amazon Web Services', 'EC2') are mapped to canonical ontology IDs ('TECH_AWS'). This ensures TF-IDF receives unified semantic tokens."

#### Q2: "Why use character n-grams? Doesn't that explode the feature space?"
**Defense:** "Character n-grams bound to words (`analyzer='char_wb'`) capture prefix and suffix variations like 'deploy', 'deployed', 'deployment' without needing aggressive language stemmers that often corrupt technical jargon (e.g., Porter stemmer corrupts 'operating' and 'operations'). By setting `max_features=10000`, we cap memory usage while preserving sub-word resilience."

#### Q3: "What if a candidate writes their skills in an image or screenshot inside the PDF?"
**Defense:** "Text-based extractors (PyPDF2) cannot read rasterized images embedded in PDFs. In our current architecture, this is documented as a known limitation. In production, we would integrate an OCR pipeline (like Tesseract or Google Cloud Vision) as a fallback when extracted text character count is below a threshold."

#### Q4: "How do you calibrate probabilities in Logistic Regression, and why is calibration necessary?"
**Defense:** "Raw sigmoid outputs in Logistic Regression can be uncalibrated when class distributions are imbalanced or when L2 regularization shrinks coefficients. We use `CalibratedClassifierCV` with isotonic regression or Platt scaling on a validation fold, guaranteeing that when the model outputs a 0.80 probability, 80% of candidates in that bucket are genuinely Good Fits."

#### Q5: "How do you protect your upload endpoint against security attacks like Zip Bombs or PDF exploits?"
**Defense:** "We enforce three defensive layers: first, payload size limits (capped at 10MB) enforced at the reverse proxy and Flask level (`MAX_CONTENT_LENGTH`); second, strict MIME-type validation verifying actual magic bytes rather than file extensions; third, parsing in sandboxed memory spaces with timeout thresholds to prevent infinite recursive decompression attacks."

---

### 7. Three Realistic Limitations & Improvement Roadmap
1. **Semantic Nuance Beyond Keywords:** Subtle contextual project achievements cannot be fully captured by n-gram matching. *Roadmap improvement:* Integrate a dense bi-encoder transformer (Sentence-BERT / MiniLM) to compute semantic cosine embeddings alongside lexical TF-IDF.
2. **Session Persistence:** Currently in-memory and stateless per request. *Roadmap improvement:* Deploy PostgreSQL/Supabase database schema with user authentication for historical candidate tracking.
3. **Generative Bullet Re-writing:** Recommends missing skills but does not generate rewritten STAR-method bullet points. *Roadmap improvement:* Connect an LLM API to suggest rewritten resume bullet points incorporating missing technical competencies.

---
---

# Project 3: TrafficShield — Unidirectional IP Network Anomaly Detection Platform

**Domain:** Network Security, Machine Learning & Systems Architecture  
**Live SOC Console:** [https://trafficshield.vercel.app](https://trafficshield.vercel.app)  
**Repository:** [https://github.com/Harsha1704/trafficshield](https://github.com/Harsha1704/trafficshield)  
**Implementation Status:** Live Demo (Vercel Production Deployment)

---

### 1. 30-Second Elevator Pitch
> "TrafficShield is an enterprise-grade network anomaly detection platform engineered specifically for critical infrastructure (SCADA, power grids, defense networks) protected by physical data diodes and unidirectional optical taps. Standard intrusion detection systems like Snort or Zeek fail on unidirectional links because they rely on bidirectional TCP handshake tracking and round-trip acknowledgments. TrafficShield enforces a strict 13 forward-observable flow feature policy, coupling a frozen supervised XGBoost classifier for known attack signatures with an unsupervised Isolation Forest for zero-day structural anomalies, validated via SHA-256 cryptographic anti-tamper checks and visualized in a real-time React 19 SOC command console."

---

### 2. 2-Minute Technical Summary
> "Critical infrastructure networks increasingly enforce physical isolation using hardware data diodes—fiber-optic transmitters without a receive photodiode—guaranteeing that data can only travel outbound and completely eliminating remote ingress attack vectors.
> 
> However, this hardware architecture breaks traditional ML-based intrusion detection:
> 1. **Zero Reverse Telemetry:** Reverse packets, TCP ACK flags, client-to-server ratios, and round-trip times physically do not exist across a diode.
> 2. **13 Forward Features:** TrafficShield extracts strictly causal forward-observable features: source packet lengths, inter-arrival time deltas, forward TCP control flags, and payload byte entropy across a bounded 10,000-flow LRU cache.
> 3. **Dual-Engine Hybrid Inference:** A frozen supervised XGBoost model ($\tau = 0.50$) identifies known cyberattack signatures (DDoS floods, port scans), while an unlabelled-calibrated Isolation Forest ($\tau = 0.727896$) scores deviations from baseline normal traffic to uncover zero-day structural anomalies.
> 4. **Fail-Closed Cryptographic Security:** To prevent model poisoning in sensitive environments, the Python service verifies model weight SHA-256 digests prior to deserialization; if a file deviates by a single bit, the system fails closed and refuses inference.
> 
> Our public deployment on Vercel features a React 19 SOC command center that streams simulated flow traces for live recruiter evaluation, while hardware deployments interface directly with Npcap optical tap drivers."

---

### 3. 5-Minute Technical Walkthrough

#### Stage 1: Hardware-Constrained Packet Capture & Flow Reconstruction
- Physical unidirectional optical taps split the light signal from industrial networks.
- Packet capture driver (Npcap / raw sockets in Python) reads incoming packet headers.
- **Bounded LRU Flow Accumulator:** Because reverse TCP FIN/RST packets cannot be observed, flows cannot be closed naturally. An LRU flow table capped at 10,000 active records expires idle flows after a 15-second inactivity timeout or maximum 60-second window, preventing memory exhaustion under high packet rates.

#### Stage 2: The 13 Forward-Observable Feature Policy
All bidirectional features (like `dbytes`, `dload`, `dttl`, `dmeansz`, `ack_latency`) are strictly excluded. The 13 forward features comprise:
1. `sbytes`: Source-to-destination transaction bytes.
2. `sload`: Source bits per second.
3. `sttl`: Source time-to-live header value (indicates OS / routing hops).
4. `smeansz`: Mean packet size transmitted by source.
5. `dur`: Flow duration elapsed in forward direction.
6. `trans_depth`: Pipelined request depth.
7. `response_body_len`: Observable forward body payload length.
8. `spkts`: Total forward packet count.
9. `syn_flag`: Forward TCP SYN presence.
10. `psh_flag`: Forward TCP PUSH presence (indicates immediate payload push).
11. `rst_flag`: Forward TCP RST presence.
12. `inter_arrival_mean`: Mean interval between successive source packets.
13. `payload_entropy`: Shannon entropy ($\sum -p_i \log_2 p_i$) of payload bytes (detects encrypted tunnels or packed malware).

#### Stage 3: Dual-Engine Hybrid ML Detection
A single model cannot solve both known threats and zero-days:
- **XGBoost Classifier:** Trained on supervised attack datasets (UNSW-NB15 / CIC-IDS) constrained strictly to forward features. Uses gradient-boosted trees with threshold $\tau = 0.50$ to classify known threat signatures with low false-negative rates.
- **Isolation Forest:** Unsupervised anomaly detector trained exclusively on benign baseline traffic. Partitions high-dimensional feature space using random split trees; anomalous flows isolate near root nodes with short path lengths. Threshold is calibrated at $\tau = 0.727896$.
- **4-Tier Decision Matrix:**
  - *Tier 1 (Normal):* XGBoost $< 0.50$, IsoForest $< 0.728$.
  - *Tier 2 (Suspicious Novelty):* XGBoost $< 0.50$, IsoForest $\ge 0.728$ (Potential Zero-Day structural anomaly).
  - *Tier 3 (Known Signature Threat):* XGBoost $\ge 0.50$, IsoForest $< 0.728$ (Known attack variant).
  - *Tier 4 (Critical Hybrid Threat):* XGBoost $\ge 0.50$, IsoForest $\ge 0.728$ (High-confidence active compromise).

#### Stage 4: Cryptographic Model Integrity & Live SOC UI
- Before `pickle.load` or `joblib.load`, the Python engine computes the SHA-256 digest of the `.bin` / `.json` weight files against hardcoded constant digests. A hash mismatch aborts execution.
- React 19 frontend provides a Dark Tactical SOC Command Center with sub-second alert cards, dual probability gauges, and packet triage telemetry.

---

### 4. Architecture & Serving Flow
```
[Unidirectional Hardware Optical Tap / Data Diode]
                   │
                   ▼ (Raw Packet Stream - No Return Path)
[Npcap Driver / 10,000-Flow Bounded LRU Cache]
                   │
                   ▼
[13 Forward-Observable Feature Extractor]
(Packet Lengths, Inter-arrival Deltas, TCP Flags, Shannon Entropy)
                   │
                   ├───► [SHA-256 Anti-Tamper Verification] (Fails closed on mismatch)
                   │
                   ├───► [Supervised XGBoost (tau=0.50)] ──────► Known Attack Probability
                   │
                   └───► [Unsupervised Isolation Forest (tau=0.728)] ──► Novelty Anomaly Score
                   │
                   ▼
[4-Tier Hybrid Decision Classifier (Normal / Suspicious / Signature / Critical)]
                   │
                   ▼ (REST Streaming Telemetry)
[React 19 Enterprise Dark SOC Command Center (Vercel Live Demo)]
- Dual Real-Time Confidence Gauges
- Severity Triage Badges & Anomaly Distributions
- Threat Mitigation Recommendations
```

---

### 5. Ten Likely Technical Interview Questions & Model Answers

#### Q1: What is a data diode, and why do critical infrastructure networks use them?
**Answer:** "A data diode is a physical hardware cybersecurity device that enforces physical unidirectionality on a network cable—allowing data to travel in only one direction. It uses an optical LED/laser transmitter on the sending side and a photodiode receiver on the listening side, with no return fiber. Critical infrastructure uses them to stream SCADA telemetry out to corporate networks while making it physically impossible for external attackers to inject commands or malware into the industrial control system."

#### Q2: Why do standard network intrusion detection systems like Snort or Zeek fail across data diodes?
**Answer:** "Traditional NIDS rely heavily on stateful TCP reconstruction. They track the three-way handshake (SYN, SYN-ACK, ACK), evaluate round-trip times, and compare client request bytes to server response bytes. Across a hardware data diode, return packets physically do not exist. Traditional NIDS see only incomplete half-open connections and either drop the traffic, flood false positives, or fail to compute bidirectional flow statistics."

#### Q3: How did you select the 13 forward features?
**Answer:** "We conducted feature ablation on the UNSW-NB15 dataset. We systematically eliminated all destination-derived features (`dbytes`, `dload`, `dttl`, `dmeansz`, `ct_dst_sport_ltm`). From the remaining source-forward features, we selected the 13 with the highest mutual information scores and lowest inter-feature collinearity, focusing on volume (`sbytes`, `sload`), timing (`dur`, `inter_arrival_mean`), protocol state (`syn`, `psh`, `rst`, `sttl`), and payload randomness (`payload_entropy`)."

#### Q4: Why Shannon entropy? What does high entropy signify in network packets?
**Answer:** "Shannon entropy measures the randomness of byte values in the payload: $H = -\sum p_i \log_2(p_i)$, ranging from 0 (all identical bytes) to 8 (perfectly uniform random distribution). High entropy (>7.2) indicates encrypted payloads (SSH, TLS, VPN tunnels) or compressed/packed malware binaries. In industrial networks where protocols like Modbus or DNP3 are unencrypted plain text with low entropy, sudden high-entropy bursts indicate potential command-and-control encapsulation."

#### Q5: How does Isolation Forest detect anomalies mathematically?
**Answer:** "Isolation Forest isolates anomalies instead of profiling normal points. It recursively partitions features with random split values. Because anomalies have extreme values or structural sparsity, they require significantly fewer splits to isolate and appear near the root of the tree with short average path length $h(x)$. The anomaly score is normalized as $s(x, n) = 2^{-\frac{E(h(x))}{c(n)}}$. If $s$ approaches 1, the flow is structurally anomalous."

#### Q6: Why pair XGBoost with Isolation Forest instead of using XGBoost alone?
**Answer:** "XGBoost is a supervised model: it only recognizes attack patterns it has seen in training data. A novel zero-day exploit or custom industrial protocol manipulation that mimics normal packet rates will bypass XGBoost. Isolation Forest is unsupervised: it has no concept of attack labels, only structural divergence from baseline normal traffic. Pairing them provides defense-in-depth: XGBoost catches known weaponized exploits with low false-negative rates, while Isolation Forest catches unexpected zero-days."

#### Q7: Why is SHA-256 pre-deserialization validation necessary in Python?
**Answer:** "Python serialization (`pickle`, `joblib`) is notoriously vulnerable to arbitrary code execution: if an attacker modifies the `.pkl` weight file on disk, deserializing it executes arbitrary system commands. In high-assurance critical infrastructure, we verify the file's SHA-256 hash against a hardcoded constant digest *before* opening the file stream. If the hash deviates by a single byte, the process immediately halts (fail-closed)."

#### Q8: How did you determine the Isolation Forest threshold $\tau = 0.727896$?
**Answer:** "The threshold was calibrated on an unlabelled validation set of benign baseline industrial traffic by setting the decision boundary at the 99.5th percentile of normal anomaly scores. This fixes the false alarm rate on baseline traffic at exactly 0.5% while maximizing sensitivity to structural deviations."

#### Q9: What is the purpose of the 10,000-flow LRU cache?
**Answer:** "In bidirectional networking, flows close when a TCP FIN/RST packet exchange occurs. Unidirectionally, we never observe return teardowns. Without a bounded cache, flow tables would grow indefinitely until system RAM exhausts (denial-of-service). A 10,000-capacity Least-Recently-Used (LRU) cache with a 15-second inactivity timeout guarantees constant $O(1)$ memory consumption under arbitrary packet rates."

#### Q10: How does the cloud deployment on Vercel differ from hardware deployment?
**Answer:** "Vercel is a serverless web hosting platform that cannot attach to raw network sockets or hardware optical diodes. The public Vercel deployment hosts the React 19 Dark Tactical SOC console using pre-recorded and synthesized streaming network flow traces. Hardware deployment runs on an on-premise industrial Linux gateway interfacing directly with Npcap and physical optical taps."

---

### 6. Five Challenging Follow-Up Questions & Defenses

#### Q1: "Isn't a 15-second flow timeout too long for high-speed DDoS detection?"
**Defense:** "Flow timeout only governs table expiration for inactive flows; it does not delay inference. For active high-volume floods, packet count and byte thresholds are evaluated on sliding mini-batch windows every 100 milliseconds, allowing sub-second alert generation long before the flow expires."

#### Q2: "What happens if legitimate industrial network traffic changes seasonally or during factory maintenance?"
**Defense:** "Static anomaly thresholds in Isolation Forest can drift if production baselines evolve. On our technical roadmap, we specify dynamic threshold adaptation using a moving 24-hour diurnal baseline window, updating the Isolation Forest background score distribution without requiring manual retraining."

#### Q3: "Can't an attacker bypass your 13 forward features by mimicking benign packet sizes and inter-arrival times?"
**Defense:** "This is known as a low-and-slow mimicry attack. While an attacker can pad packets to match average size (`smeansz`), mimicking both timing variance (`inter_arrival_mean`), cumulative byte rates (`sload`), header flag sequences (`syn`, `psh`), and payload entropy simultaneously is mathematically difficult. Even if they bypass XGBoost, the slight multivariate covariance shift is flagged by Isolation Forest."

#### Q4: "Why use React 19 for a security console instead of an off-the-shelf tool like Grafana?"
**Defense:** "Off-the-shelf dashboards like Grafana are built for time-series metrics polling, not specialized alert triage workflows with custom confidence gauges, dual ML score reconciliations, and cryptographic status telemetry. React 19 allowed us to build an ultra-responsive Dark Tactical interface with zero re-rendering cascades and bespoke triage action flows."

#### Q5: "How does the model handle encrypted traffic like TLS 1.3?"
**Defense:** "TLS 1.3 encrypts application payloads, but packet headers, timing intervals, and packet size distributions remain visible in plain text. Features like `sbytes`, `sload`, `sttl`, `inter_arrival_mean`, and `payload_entropy` (which approaches 8.0 for ciphertext) provide sufficient statistical signal to detect anomalous beaconing or exfiltration without decrypting payloads."

---

### 7. Three Realistic Limitations & Improvement Roadmap
1. **Multi-Gigabit Line Rate Throughput:** Python user-space packet capture cannot sustain 10+ Gbps line-rate processing. *Roadmap improvement:* Re-implement the packet capture and featurization pipeline in C/C++ or Rust using eBPF/XDP for kernel-level packet inspection.
2. **Dynamic Threshold Tuning:** The Isolation Forest threshold ($\tau = 0.727896$) is currently static. *Roadmap improvement:* Implement diurnal adaptive threshold estimation based on rolling 24-hour baseline distributions.
3. **SIEM Integration:** Alerts are currently presented in the SOC console. *Roadmap improvement:* Build native syslog, CEF, and mTLS forwarders to export alert telemetry into enterprise SIEM platforms (Splunk, Elastic SIEM).

---
---

# Project 4: MoodMate — Real-Time Facial Emotion Recognition & Acoustic Recommendation

**Domain:** Computer Vision, Affective Computing, Deep Learning  
**Repository:** [https://github.com/Harsha1704/MoodMate](https://github.com/Harsha1704/MoodMate)  
**Implementation Status:** Prototype / Local Development (Local Webcam Application)

---

### 1. 30-Second Elevator Pitch
> "MoodMate is an affective computing application that bridges real-time computer vision with mood-adaptive music recommendations. Running on a standard consumer laptop webcam, it captures live video frames, isolates facial regions using OpenCV Haar Cascades, and passes 48×48 grayscale patches into a 4-block deep Convolutional Neural Network trained on the FER2013 dataset. To prevent instantaneous playlist thrashing caused by facial micro-expressions, it applies a 15-frame exponential moving average smoothing filter, mapping stable emotional states into acoustic valence and energy targets for personalized music recommendation."

---

### 2. 2-Minute Technical Summary
> "The engineering challenge in webcam-based facial emotion recognition is two-fold: high inference jitter and domain variance in lighting and camera angles.
> 
> My implementation consists of:
> 1. **Computer Vision Preprocessing:** Video frames are grabbed at 30 FPS. OpenCV's Haar Cascade classifier detects faces in real time. The region of interest (ROI) is cropped, converted to grayscale, and downsampled to 48×48 pixels matching the FER2013 format, followed by min-max normalization $[0, 1]$.
> 2. **Deep CNN Architecture:** A 4-block custom Convolutional Neural Network built in Keras/TensorFlow. Each block pairs dual $3\times3$ convolutions with Batch Normalization, ReLU activation, $2\times2$ MaxPooling, and Dropout (0.25 to 0.50) to prevent overfitting on the noisy FER2013 dataset. A Dense layer with Softmax outputs a probability distribution across 7 emotion classes: Angry, Disgust, Fear, Happy, Sad, Surprise, Neutral.
> 3. **15-Frame Temporal Smoothing:** Human facial expressions transition smoothly, but frame-by-frame neural network predictions flicker due to rapid blinks or micro-movements. I engineered a 15-frame rolling window smoothing filter using exponential moving averages. A recommendation transition is triggered only when emotional confidence exceeds a sustained threshold.
> 4. **Acoustic Mapping:** Dominant emotional states are mapped to musical feature dimensions (valence and energy) to generate mood-congruent or mood-elevating playlist suggestions."

---

### 3. 5-Minute Technical Walkthrough

#### Stage 1: Webcam Pipeline & ROI Extraction
Webcam input stream via `cv2.VideoCapture`:
- For each frame, `cv2.cvtColor` converts BGR to grayscale.
- `haarcascade_frontalface_default.xml` detects face rectangles $(x, y, w, h)$.
- If multiple faces are detected, the system prioritizes the primary face with the largest area $w \cdot h$.
- Face ROI is cropped, resized to $48\times48$ using bilinear interpolation, and reshaped to tensor shape $(1, 48, 48, 1)$.

#### Stage 2: 4-Block CNN Architecture
FER2013 contains 35,887 grayscale images of size 48×48. To prevent catastrophic overfitting:
- **Block 1:** Conv2D(64, (3,3), padding='same') $\rightarrow$ BatchNorm $\rightarrow$ ReLU $\rightarrow$ Conv2D(64, (3,3)) $\rightarrow$ BatchNorm $\rightarrow$ ReLU $\rightarrow$ MaxPool2D(2,2) $\rightarrow$ Dropout(0.25).
- **Block 2:** Conv2D(128, (3,3), padding='same') $\rightarrow$ BatchNorm $\rightarrow$ ReLU $\rightarrow$ Conv2D(128, (3,3)) $\rightarrow$ BatchNorm $\rightarrow$ ReLU $\rightarrow$ MaxPool2D(2,2) $\rightarrow$ Dropout(0.25).
- **Block 3:** Conv2D(256, (3,3), padding='same') $\rightarrow$ BatchNorm $\rightarrow$ ReLU $\rightarrow$ Conv2D(256, (3,3)) $\rightarrow$ BatchNorm $\rightarrow$ ReLU $\rightarrow$ MaxPool2D(2,2) $\rightarrow$ Dropout(0.25).
- **Block 4:** Conv2D(512, (3,3), padding='same') $\rightarrow$ BatchNorm $\rightarrow$ ReLU $\rightarrow$ Conv2D(512, (3,3)) $\rightarrow$ BatchNorm $\rightarrow$ ReLU $\rightarrow$ MaxPool2D(2,2) $\rightarrow$ Dropout(0.30).
- **Dense Classifier:** Flatten $\rightarrow$ Dense(512) $\rightarrow$ BatchNorm $\rightarrow$ ReLU $\rightarrow$ Dropout(0.50) $\rightarrow$ Dense(7, activation='softmax').

#### Stage 3: Temporal Stabilization & Anti-Flicker Filter
If a user smiles for 2 seconds but blinks in frame 12, a raw classifier might flicker to 'Sad' or 'Fear'.
- We maintain a circular buffer of the last 15 prediction vectors $\mathbf{p}_t = [p_1, \dots, p_7]$.
- Weighted exponential decay gives higher weight to recent frames:
  $$\mathbf{s}_t = \sum_{k=0}^{14} \alpha^k \mathbf{p}_{t-k}, \quad \alpha = 0.85$$
- The smoothed dominant emotion is $\arg\max(\mathbf{s}_t)$, gated by a minimum confidence threshold of 0.45.

#### Stage 4: Acoustic Feature Mapping
Emotions are mapped onto the Russell Circumplex Model of Affect (Valence vs Arousal/Energy):
- **Happy:** High Valence (0.8–1.0), High Energy (0.7–0.9) $\rightarrow$ Upbeat Pop / Dance.
- **Sad:** Low Valence (0.1–0.3), Low Energy (0.2–0.4) $\rightarrow$ Acoustic / Melodic Ballads.
- **Angry:** Low Valence (0.2–0.4), High Energy (0.8–1.0) $\rightarrow$ Rock / Instrumental Metal.
- **Neutral / Calm:** Moderate Valence (0.5), Low Energy (0.3–0.5) $\rightarrow$ Lo-Fi / Ambient Chill.

---

### 4. Ten Likely Technical Interview Questions & Model Answers

#### Q1: What are the key limitations of the FER2013 dataset?
**Answer:** "FER2013 has three major challenges: first, severe class imbalance—Happy has over 8,000 images while Disgust has fewer than 600; second, labeling noise—crowdsourced labels frequently confuse Fear with Surprise or Sad with Neutral; third, low resolution (48×48 grayscale), which discards color nuances and fine facial wrinkle texture."

#### Q2: Why use Batch Normalization after convolutions?
**Answer:** "Batch Normalization normalizes the activation outputs across the mini-batch to zero mean and unit variance. This stabilizes internal covariate shift, allows higher learning rates, acts as a mild regularizer, and prevents vanishing/exploding gradients in deep networks."

#### Q3: Why is Haar Cascade used instead of MTCNN or MediaPipe in this prototype?
**Answer:** "Haar Cascades run in under 8 milliseconds on consumer laptop CPUs using integral image representations and AdaBoost cascade stages. While MTCNN and MediaPipe offer higher landmark precision, Haar Cascade provided the fastest zero-dependency real-time CPU throughput for standard frontal faces."

#### Q4: How does dropout prevent overfitting?
**Answer:** "Dropout randomly zeroes out a fraction (e.g., 25% or 50%) of neuron activations during training on each forward pass. This prevents co-adaptation of features, forcing neurons to learn robust, generalized representations rather than memorizing training data quirks."

#### Q5: Can facial expressions accurately determine internal psychological emotion?
**Answer:** "No, and this is a critical ethical and scientific limitation. Facial expression recognition measures external somatic muscle configurations (Action Units), not true internal cognitive emotional states. A person may smile when nervous or maintain a flat affect when content. MoodMate infers observable facial expression classifications for entertainment recommendation, not psychological diagnosis."

#### Q6: How would you resolve the class imbalance in FER2013?
**Answer:** "We implemented data augmentation (random rotations, horizontal flips, slight zoom, brightness shifts) targeting under-represented classes like Disgust, combined with focal loss or balanced class weights ($w_c = \frac{N}{K \cdot n_c}$) in the categorical cross-entropy loss function."

#### Q7: Why use $3\times3$ convolutions instead of larger $5\times5$ or $7\times7$ filters?
**Answer:** "Stacking two $3\times3$ convolutional layers achieves the exact same receptive field as a single $5\times5$ layer ($3 + 3 - 1 = 5$), but introduces two non-linear ReLU activations instead of one, and requires fewer parameters: $2 \times (3^2 \times C) = 18C$ versus $5^2 \times C = 25C$, yielding 28% fewer weights."

#### Q8: How does the Flask backend stream video to the browser?
**Answer:** "Flask serves a multipart HTTP response with content type `multipart/x-mixed-replace; boundary=frame`. The Python generator loops continuously, encoding annotated OpenCV frames into JPEG bytes (`cv2.imencode('.jpg', frame)`), streaming successive JPEG payloads over a single HTTP connection."

#### Q9: What metric did you use to evaluate model performance?
**Answer:** "Macro-averaged F1-score and confusion matrices. Because FER2013 is heavily imbalanced, overall accuracy is deceptive (a model predicting 'Happy' often gets artificially high accuracy). Macro F1 gives equal weight to all 7 classes regardless of frequency."

#### Q10: How would you port this from Flask streaming to client-side edge inference?
**Answer:** "By exporting the trained Keras model to TensorFlow.js (`tfjs-converter`) or ONNX runtime WebAssembly. The browser accesses the webcam directly via the HTML5 `navigator.mediaDevices.getUserMedia` API, executing inference in a Web Worker on the local GPU via WebGL, eliminating all video network transmission."

---

### 5. Five Challenging Follow-Up Questions & Defenses

#### Q1: "Isn't an MJPEG video stream over Flask horribly inefficient?"
**Defense:** "Yes, multipart MJPEG streaming is bandwidth-heavy because every frame is compressed as an independent JPEG image without inter-frame temporal compression (like H.264). For a local prototype on localhost, it provides zero-latency frame verification. However, as noted on our roadmap, production architectures should execute inference directly inside the browser using TensorFlow.js or WebRTC."

#### Q2: "What happens if the user turns their head or looks away (profile view)?"
**Defense:** "Haar frontal face cascades fail when the face yaw exceeds 30 degrees. In our pipeline, when no face is detected, the temporal buffer maintains the last known valid emotional state for up to 3 seconds before gracefully transitioning to a 'Neutral' default, avoiding jarring playlist interruptions."

#### Q3: "Why not use a pre-trained ResNet or VGG rather than a custom 4-block CNN?"
**Defense:** "Standard ResNet-50 or VGG-16 networks expect $224\times224\times3$ inputs and contain tens of millions of parameters. Upscaling 48×48 grayscale patches to 224×224 adds computational bloat without adding actual spatial information. Our custom 4-block CNN has under 2 million parameters, runs effortlessly at 30 FPS on CPU, and is tailored to 48×48 resolution."

#### Q4: "How do you map categorical emotions (like Disgust) to acoustic music features?"
**Defense:** "Disgust is challenging to map acoustically. In our mapping matrix, Disgust and Anger share low valence and high tension, so we map Disgust to ambient, high-energy rhythm tracks or allow the user to select an 'Elevation' mode that intentionally plays contrasting upbeat music to soothe agitation."

#### Q5: "How does lighting variation affect the model, and how did you mitigate it?"
**Defense:** "Uneven lighting causes sharp shadows that mimic facial landmarks. We apply histogram equalization (`cv2.equalizeHist`) on the cropped grayscale face patch prior to inference. This flattens the luminance histogram, maximizing contrast across facial features regardless of ambient lighting."

---

### 6. Three Realistic Limitations & Improvement Roadmap
1. **FER2013 Label Noise & Imbalance:** Crowdsourced training labels limit peak test accuracy to ~67–70%. *Roadmap improvement:* Fine-tune on cleaner affective datasets like AffectNet or RAF-DB with label smoothing.
2. **Local Python Execution:** Relies on local Python environment and webcam permissions. *Roadmap improvement:* Migrate model to TensorFlow.js for zero-installation in-browser execution.
3. **Mock Audio Playlists:** Uses curated acoustic metadata rather than live streaming. *Roadmap improvement:* Integrate official Spotify Web API OAuth and Web Playback SDK for seamless in-app streaming.

---
---

# Project 5: 3D Bharat — Interactive Digital Heritage Exploration Platform

**Domain:** 3D & Digital Heritage Tech, Interactive Web Graphics  
**Repository:** [https://github.com/Harsha1704/3D_Bharat](https://github.com/Harsha1704/3D_Bharat)  
**Implementation Status:** Prototype / Local Development (2D SVG Map & Metadata Live; 3D WebGL on Roadmap)

---

### 1. 30-Second Elevator Pitch
> "3D Bharat is an interactive digital heritage exploration platform built to preserve and showcase Indian architectural landmarks. While traditional online representations are confined to flat 2D photography and static Wikipedia articles, 3D Bharat provides an implemented, responsive state-by-state 2D SVG geographic exploration map linked to structured architectural blueprints, historical timelines, and dynasty metadata. We have established a comprehensive technical roadmap and asset optimization budget (<5MB binary GLTF with Draco compression) to bring WebGL/Three.js interactive 3D model orbit viewers directly to consumer web browsers."

---

### 2. 2-Minute Technical Summary
> "India possesses one of the world's richest collections of cultural monuments spanning millennia, but physical access is geographically constrained.
> 
> My engineering implementation focuses on:
> 1. **Implemented Foundation:** An interactive 2D SVG vector map of Indian states and union territories built in React.js. Clicking a state dynamically queries and filters a curated catalog of monuments, displaying architectural blueprints, construction eras, dynasties, and structural engineering trivia.
> 2. **Responsive Design System:** Fluid layouts built with Tailwind CSS, responsive modal inspectors, and tabbed architectural detail sheets that scale from mobile devices to desktop viewports with zero horizontal overflow.
> 3. **Planned 3D Graphics Roadmap (Phase 13):** High-fidelity architectural 3D meshes often contain millions of polygons and 50MB+ texture maps that crash mobile browsers. I engineered a complete technical specification targeting smooth 60 FPS rendering on commodity hardware by enforcing a strict polygon decimation target (<50k vertices) and Draco geometry compression within a 5MB payload budget using Three.js and React Three Fiber.
> 4. **Future Spatial Data Layer:** The roadmap scopes a PostgreSQL/PostGIS spatial database for radius-based landmark discovery and a Cultural Knowledge Graph linking monuments, trade routes, and historical rulers."

---

### 3. Ten Likely Technical Interview Questions & Model Answers

#### Q1: What is currently implemented versus planned on the roadmap in 3D Bharat?
**Answer:** "The implemented codebase comprises the interactive state-by-state 2D SVG vector map, the responsive monument catalog, filter controls, modal inspectors, and the structured architectural metadata database. The WebGL Three.js interactive 3D model viewport, Draco compression asset pipeline, PostGIS geospatial queries, and Cultural Knowledge Graph are documented on our future technical roadmap (Phases 7 through 13)."

#### Q2: What is Draco geometry compression, and how does it optimize 3D delivery?
**Answer:** "Draco is an open-source library developed by Google for compressing 3D geometric meshes and point clouds. It quantizes vertex positions, normals, and texture coordinates, using entropy coding to reduce GLTF/GLB file sizes by 70% to 90%. This allows a 40MB architectural mesh to be compressed under 4MB, dramatically reducing browser download latency."

#### Q3: How do you target 60 FPS rendering in mobile web browsers?
**Answer:** "By optimizing the three rendering bottlenecks: polygon count (keeping vertices under 50,000 via mesh decimation), draw calls (merging meshes sharing materials to keep draw calls under 30 per frame), and texture memory (using compressed KTX2 / Basis Universal GPU textures instead of uncompressed PNGs)."

#### Q4: Why use SVG for the state map instead of a raster image or Google Maps API?
**Answer:** "SVG elements are resolution-independent vectors that scale infinitely without pixelation and have negligible file sizes (<50KB). Crucially, every state path in SVG is a first-class DOM node, allowing direct CSS styling, hover animations, focus accessibility, and native React `onClick` event listeners without incurring API quota costs."

#### Q5: How would normalized device coordinates (NDC) anchor 2D pins to a 3D mesh?
**Answer:** "In Three.js, a 3D point in world space $\mathbf{v}$ is projected onto the camera's screen coordinates using $\mathbf{v}_{\text{ndc}} = \mathbf{v} \times M_{\text{view}} \times M_{\text{proj}}$. Screen pixel coordinates are obtained via $x = (x_{\text{ndc}} + 1)/2 \times \text{width}$ and $y = (-y_{\text{ndc}} + 1)/2 \times \text{height}$. This anchors HTML tooltips to specific monument architectural pillars during orbit."

#### Q6: How would you structure a PostGIS query to find monuments within 50km of a user?
**Answer:** "Using the `ST_DWithin` spatial query over geography types:
```sql
SELECT id, name, location 
FROM monuments 
WHERE ST_DWithin(geog_point, ST_MakePoint(longitude, latitude)::geography, 50000);
```
Using a spatial GiST index (`CREATE INDEX ON monuments USING GIST(geog_point)`), the query executes in sub-milliseconds."

#### Q7: What is the benefit of a Cultural Knowledge Graph?
**Answer:** "Relational databases struggle with multi-hop recursive queries (e.g., 'Find all monuments built by dynasties that traded with the Cholas between 900–1100 CE'). A graph database (Neo4j) represents rulers, architectural styles, dynasties, and materials as nodes and edges, allowing multi-hop Cypher queries."

#### Q8: What is LOD (Level of Detail) in 3D rendering?
**Answer:** "LOD dynamically switches between different mesh resolutions based on camera distance. When viewing an entire temple complex from far away, a low-poly mesh (2,000 vertices) is rendered. As the user zooms into a carved pillar, the engine swaps to a high-fidelity mesh (30,000 vertices), conserving GPU memory."

#### Q9: How do you ensure accessible navigation for keyboard users on the SVG map?
**Answer:** "Each SVG path element is assigned `role='button'`, `tabIndex={0}`, an `aria-label` stating the state name and monument count, and `onKeyDown` handlers for `Enter` and `Space`, accompanied by visible focus rings via CSS `:focus-visible`."

#### Q10: What is WebXR, and how is it scoped in your roadmap?
**Answer:** "WebXR is an open web standard that enables direct VR and AR experiences in browsers without native app downloads. It would allow users with Meta Quest or Apple Vision Pro headsets to inspect Indian monuments in 1:1 room-scale spatial dimensions."

---

### 4. Three Realistic Limitations & Improvement Roadmap
1. **Absence of Live 3D Mesh in Production:** The production site features the 2D catalog framework. *Roadmap improvement:* Complete Phase 13 integration of Three.js canvas with an initial GLTF model of the Konark Sun Temple or Taj Mahal.
2. **Static JSON Metadata:** Landmark data is currently loaded statically. *Roadmap improvement:* Deploy PostgreSQL/PostGIS backend with RESTful API endpoints.
3. **Lack of Conversational Guidance:** Users read text descriptions manually. *Roadmap improvement:* Build an 'AI Heritage Guide' in-viewport conversational assistant using RAG over historical archives.
