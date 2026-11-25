# Technical Mock Interview System & Evaluation Scorecard

**Candidate:** Sri Harsha  
**Academic Record:** B.Tech CSE (AI & ML), Lovely Professional University (CGPA: 8.51)  
**Target Roles:** AI/ML Engineer, Machine Learning Engineer, AI Full-Stack Developer  
**System Purpose:** Interactive mock interview evaluation protocol, competency rubrics, and diagnostic scorecards.

---

## 1. Mock Interview Tracks & Structure

| Track ID | Track Name | Duration | Primary Focus Areas | Key Deliverables |
|---|---|---|---|---|
| **Track 1** | **HR & Culture Screening** | 15 Mins | 60s/2min pitch, Edufiy internship, communication, career alignment | Elevator delivery, culture fit assessment |
| **Track 2** | **Python & Java Fundamentals** | 20 Mins | Memory models, GIL, OOP design, Collections, Exceptions, Types | Language mastery, precision |
| **Track 3** | **DSA Problem Solving** | 45 Mins | Live coding (Two pointers, Trees, Graphs, DP), space-time profiling | Clean Java code, optimal asymptotic analysis |
| **Track 4** | **Machine Learning & AI** | 30 Mins | Loss functions, XGBoost, Isolation Forest, TF-IDF, CNNs, Metrics | Mathematical derivations, algorithm tradeoffs |
| **Track 5** | **Full-Stack & Systems** | 30 Mins | React Virtual DOM, Next.js SSG, REST, CORS, SQL Joins & Indexing | Architectural clarity, security hygiene |
| **Track 6** | **Project Defense Deep-Dive** | 45 Mins | SatQuery AI, ResumeMatch AI, TrafficShield, MoodMate, 3D Bharat | Technical defense, handling follow-up challenges |
| **Track 7** | **Combined Technical Interview** | 60 Mins | Comprehensive: 1 Coding + 1 ML Deep Dive + 1 System Design + Behavioral | Final hiring readiness assessment |

---

## 2. Standard Evaluation Rubric (1 – 5 Scale)

Each candidate response is scored across 6 core engineering competencies:

```
[1] Unsatisfactory  : Incorrect answer, unable to explain concepts, no working code.
[2] Marginal        : Identifies basic terms but cannot explain tradeoffs or mathematical mechanisms.
[3] Competent       : Correct technical answer with standard implementation; minor prompting needed for edge cases.
[4] Advanced        : Thorough technical explanation, optimal asymptotic complexity, handles edge cases proactively.
[5] Exceptional     : Production-grade depth, explains real-world tradeoffs, alternative architectures, and failure modes.
```

### Competency Definitions:
1. **Problem Understanding & Clarification:** Does the candidate ask clarifying questions regarding constraints, input types, and scale before diving in?
2. **Technical & Conceptual Accuracy:** Are mathematical derivations, algorithmic logic, and framework mechanics factually sound?
3. **Code Quality & Asymptotic Analysis:** Is the code clean, modular, and idiomatic (Java/Python)? Is time/space complexity precisely stated?
4. **Architectural & System Thinking:** Can the candidate trace data flow end-to-end (ML $\rightarrow$ API $\rightarrow$ Database $\rightarrow$ Client UI)?
5. **Edge Cases & Failure Handling:** Are null inputs, empty buffers, rate limits, out-of-vocabulary tokens, and hardware constraints addressed?
6. **Communication & Defense:** Does the candidate communicate with poise and structured logic when challenged by follow-up inquiries?

---

## 3. Interactive Mock Interview Protocol

When conducting a live mock interview session with the assistant:
1. **Single-Question Rule:** The interviewer presents exactly **one question at a time**.
2. **Independent Candidate Attempt:** The candidate provides their authentic answer, code, or technical explanation. (The model answer is **never** revealed before the candidate's attempt).
3. **Structured Evaluation & Feedback:**
   - **Score (1–5)** across the 6 competencies.
   - **What was strong:** Concrete positive elements in the candidate's explanation.
   - **Gaps / Blind spots:** Missing edge cases, suboptimal complexities, or vague terminology.
   - **Model Improved Response:** How a senior engineer or top candidate would articulate the answer.
4. **Progress to Next Question:** The interviewer advances to the next sequential question.

---

## 4. Diagnostic Mock Scorecard Template

Use this template to record performance during each mock interview session.

```markdown
### Mock Interview Session Record

- **Date & Time:** [YYYY-MM-DD HH:MM]
- **Track:** [Track 1 - 7]
- **Interviewer / Simulator:** [Antigravity AI / Peer]
- **Target Role:** [AI/ML Engineer / Full-Stack Developer]

#### Competency Scoring Grid:
| Competency | Score (1-5) | Specific Evaluator Notes & Observations |
|---|---|---|
| 1. Problem Clarification & Constraints | _ / 5 | |
| 2. Technical & Conceptual Accuracy | _ / 5 | |
| 3. Code Quality & Space-Time Profiling | _ / 5 | |
| 4. System & Architectural Thinking | _ / 5 | |
| 5. Edge Cases & Error Resilience | _ / 5 | |
| 6. Structured Communication & Composure | _ / 5 | |
| **Total Weighted Score** | **_ / 30** | **Percent: __%** |

#### Key Strengths Observed:
- [Strength 1]
- [Strength 2]

#### Critical Areas for Immediate Improvement:
- [Gap 1]
- [Gap 2]

#### Final Decision:
[ ] STRONG HIRE (27 - 30)
[ ] HIRE (23 - 26)
[ ] LEANING HIRE (19 - 22)
[ ] LEANING NO HIRE (15 - 18)
[ ] NO HIRE (< 15)

#### Actionable Remediation Plan:
- [Next step 1]
- [Next step 2]
```

---

## 5. Sample Question Bank per Interview Track

### Track 1: HR & Culture Screening (15 Mins)
1. "Walk me through your resume in 60 seconds."
2. "Why are you interested in bridging AI/ML with full-stack development instead of focusing solely on modeling?"
3. "Tell me about your 2-month internship at Edufiy Tech Solutions. What were your specific technical responsibilities?"
4. "Where do you see your engineering skills expanding over the next 2 years?"

### Track 2: Python & Java Fundamentals (20 Mins)
1. "In Java, what is the contract between `equals()` and `hashCode()`? What happens in a `HashMap` if you override one without the other?"
2. "Explain the Python GIL. Why does a multi-threaded Python program with 4 threads not run 4x faster on a 4-core CPU for CPU-heavy tasks?"
3. "What are Java Generics and Type Erasure? Why can't you create `new T[]` at runtime?"
4. "Explain Python generators and the `yield` keyword. How do they save memory compared to list comprehensions?"

### Track 3: DSA Problem Solving (45 Mins)
1. "Given an array of integers `nums` and an integer `k`, return the length of the longest subarray where the absolute difference between any two elements is $\le k$."
2. "Given the root of a binary tree, serialize it into a string and deserialize it back into the original tree structure."
3. "Implement a Least Recently Used (LRU) Cache supporting `get(key)` and `put(key, value)` in $O(1)$ time complexity."
4. "Given a directed graph of course prerequisites, determine if all courses can be finished and output a valid topological order."

### Track 4: Machine Learning & AI (30 Mins)
1. "Derive the Binary Cross-Entropy loss function from the Bernoulli likelihood."
2. "In TrafficShield, why did you pair XGBoost with an Isolation Forest? How is an Isolation Forest anomaly score calculated mathematically?"
3. "Explain the difference between L1 and L2 regularization. Why does L1 produce sparse feature vectors?"
4. "What is sublinear term frequency scaling in TF-IDF, and why was it necessary for ResumeMatch AI?"

### Track 5: Full-Stack & Systems (30 Mins)
1. "How does React's reconciliation diffing algorithm work? What happens when you use array indices as component keys?"
2. "What happens during a CORS preflight `OPTIONS` request? When does the browser trigger it?"
3. "Explain ACID properties in relational databases. What are dirty reads and phantom reads, and which isolation level prevents them?"
4. "How would you design a distributed rate limiter in Redis to handle 5,000 requests per second across 10 API instances?"

### Track 6: Project Defense Deep-Dive (45 Mins)
1. **TrafficShield:** "How do you detect network anomalies across a physical optical tap without return TCP ACK telemetry?"
2. **ResumeMatch AI:** "Why did you replace the historical Jaccard formulation with a weighted taxonomy coverage engine in `job_matching.py`?"
3. **SatQuery AI:** "How do you handle gigapixel satellite imagery with multimodal VLM token limits using OpenCV?"
4. **MoodMate:** "How does the 15-frame exponential moving average filter prevent playlist thrashing from facial micro-expressions?"
5. **3D Bharat:** "What is Draco geometry compression, and how does it fit into your 5MB mobile asset budget roadmap?"

### Track 7: Combined Technical Interview (60 Mins)
- **Part 1 (10 mins):** Professional introduction & project architecture overview.
- **Part 2 (25 mins):** Live Java coding problem (e.g., Sliding window or Binary tree path traversal) with space-time profiling.
- **Part 3 (15 mins):** Deep dive into machine learning loss functions, calibration, and feature engineering tradeoffs.
- **Part 4 (10 mins):** System design scenario (e.g., Designing an asynchronous document parsing pipeline with task queues).
