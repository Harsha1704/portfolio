# Machine Learning & AI Technical Interview Guide

**Candidate:** Sri Harsha (B.Tech CSE — AI & ML, LPU | CGPA: 8.51)  
**Target Roles:** AI/ML Engineer, Machine Learning Engineer, Applied AI Developer  
**Scope:** Core Fundamentals, Mathematical Formulations, Architecture Tradeoffs, Practical Scenarios

---

## 1. Fundamentals & Learning Paradigms

### Q1: What is the fundamental mathematical difference between Supervised, Unsupervised, and Self-Supervised Learning?
**Answer:**
- **Supervised Learning:** Learns a mapping function $f: \mathcal{X} \rightarrow \mathcal{Y}$ from labeled pairs $(x_i, y_i)$. Objective: minimize empirical risk $\frac{1}{N}\sum \mathcal{L}(f(x_i), y_i)$. Examples: Logistic Regression in ResumeMatch AI, XGBoost in TrafficShield.
- **Unsupervised Learning:** Discovers intrinsic structure, density, or clustering $P(X)$ without ground-truth labels $y$. Objective: minimize reconstruction loss or maximize separation. Examples: Isolation Forest in TrafficShield, K-Means clustering.
- **Self-Supervised Learning:** Derives supervisory signals directly from unstructured data by solving pretext tasks (e.g., masked language modeling in BERT, next-token prediction in GPT, contrastive vision-text alignment in CLIP).

### Q2: What is the Bias-Variance Tradeoff, and how do you diagnose it in practice?
**Answer:**
Total expected prediction error decomposes into:
$$\mathbb{E}[(y - \hat{f}(x))^2] = \text{Bias}[\hat{f}(x)]^2 + \text{Var}[\hat{f}(x)] + \sigma^2$$
- **High Bias (Underfitting):** Model is too simplistic (e.g., linear model on non-linear data). Training error is high, validation error is equally high. *Remedy:* Increase model capacity, add polynomial features, reduce regularization.
- **High Variance (Overfitting):** Model memorizes noise. Training error is very low, but validation error is significantly higher (generalization gap). *Remedy:* Add regularization (L1/L2), collect more data, apply dropout (as in MoodMate's CNN), prune trees.

### Q3: Explain Data Leakage and how to prevent it in machine learning pipelines.
**Answer:**
Data leakage occurs when information from outside the training dataset influences model training.
- **Types:**
  1. *Target Leakage:* A feature containing information about the ground truth that won't be available at test time (e.g., including 'interview_date' in an application acceptance predictor).
  2. *Train-Test Contamination:* Fitting scalers, imputers, or TF-IDF vectorizers on the entire dataset before splitting.
- **Prevention:** Always perform train-test splits *before* any transformation. Encapsulate transformations inside a `Pipeline` or `FeatureUnion` so estimators only call `.fit()` on training folds and `.transform()` on test folds. Use `GroupKFold` when multiple rows originate from the same user or entity.

---

## 2. Classical Machine Learning & Ensembles

### Q4: Derive the Logistic Regression hypothesis and its loss function (Binary Cross-Entropy).
**Answer:**
- **Hypothesis:** Maps linear combinations $\mathbf{w}^T\mathbf{x} + b$ to probabilities $[0, 1]$ using the sigmoid function:
  $$h_{\mathbf{w}}(\mathbf{x}) = \sigma(\mathbf{w}^T\mathbf{x} + b) = \frac{1}{1 + e^{-(\mathbf{w}^T\mathbf{x} + b)}}$$
- **Likelihood:** Assuming Bernoulli trials where $P(y=1|\mathbf{x}) = \hat{y}$ and $P(y=0|\mathbf{x}) = 1 - \hat{y}$:
  $$L(\mathbf{w}) = \prod_{i=1}^N \hat{y}_i^{y_i} (1 - \hat{y}_i)^{1 - y_i}$$
- **Cost Function (Log-Loss / Binary Cross-Entropy):** Minimizing negative log-likelihood:
  $$J(\mathbf{w}) = -\frac{1}{N} \sum_{i=1}^N \left[ y_i \log(\hat{y}_i) + (1 - y_i) \log(1 - \hat{y}_i) \right]$$
- **Gradient:** $\frac{\partial J}{\partial \mathbf{w}} = \frac{1}{N} \mathbf{X}^T (\hat{\mathbf{y}} - \mathbf{y})$, which has an intuitive interpretation: the gradient is proportional to the prediction error weighted by feature inputs.

### Q5: What is the geometric difference between L1 (Lasso) and L2 (Ridge) Regularization?
**Answer:**
- **L1 Regularization (Lasso):** Penalty is $\lambda \sum |w_i|$. Geometrically, the constraint region is a diamond (hyper-octahedron) with sharp corners on the coordinate axes. The elliptical loss contours touch the corners, driving coefficients to exact zeros, producing sparse feature selection.
- **L2 Regularization (Ridge):** Penalty is $\lambda \sum w_i^2$. Geometrically, the constraint region is a smooth circle/hypersphere. Coefficients shrink smoothly toward zero but rarely become exactly zero.
- **ElasticNet:** Linearly combines both: $\alpha \text{L1} + (1-\alpha) \text{L2}$, useful when correlated features exist.

### Q6: How does XGBoost differ from standard Gradient Boosted Decision Trees (GBDT)?
**Answer:**
1. **Second-Order Taylor Approximation:** Standard GBDT uses only the first derivative (gradient $g_i$). XGBoost uses both the first gradient $g_i$ and the second derivative (Hessian $h_i$) of the loss function, allowing exact Newton-Raphson optimization.
2. **Explicit Regularization:** Objective includes tree complexity penalty:
   $$\Omega(f) = \gamma T + \frac{1}{2} \lambda \sum_{j=1}^T w_j^2$$
   where $T$ is leaf count and $w_j$ are leaf weights, preventing deep overfitting.
3. **Sparsity-Aware Split Finding:** Automatically assigns a default direction for missing values.
4. **Column Subsampling & Shrinkage:** Employs Random Forest-style feature subsampling and learning rate shrinkage $\eta$.

### Q7: Explain the mathematical mechanism of Isolation Forest.
**Answer:**
Isolation Forest detects anomalies by isolation rather than profiling normal behavior.
- **Mechanism:** Given a dataset of $N$ instances, it builds an ensemble of $T$ completely random binary isolation trees (iTrees). At each node, a feature is selected uniformly at random, and a split point is chosen randomly between the feature's min and max values.
- **Path Length:** Anomalous observations have extreme values or reside in sparse regions; they require very few random splits to isolate and appear near the root (short path length $h(x)$).
- **Anomaly Score:**
  $$s(x, n) = 2^{-\frac{\mathbb{E}[h(x)]}{c(n)}}$$
  where $c(n) = 2\ln(n - 1) + 0.5772156649 - \frac{2(n - 1)}{n}$ is the average path length of an unsuccessful search in a Binary Search Tree (BST).
  - If $\mathbb{E}[h(x)] \rightarrow 0 \Rightarrow s \rightarrow 1$ (High-confidence anomaly).
  - If $\mathbb{E}[h(x)] \rightarrow n - 1 \Rightarrow s \rightarrow 0$ (Normal point).

---

## 3. Evaluation Metrics & Class Imbalance

### Q8: When would you prioritize Precision over Recall, and vice versa? Give concrete examples from your projects.
**Answer:**
$$\text{Precision} = \frac{\text{TP}}{\text{TP} + \text{FP}}, \quad \text{Recall} = \frac{\text{TP}}{\text{TP} + \text{FN}}$$
- **Prioritize Precision (Cost of False Positive is high):**
  - In a legal or corporate document classifier, tagging a non-compliant candidate as qualified causes wasted interviewing resources.
  - In spam detection: flagging an important recruiter offer email as spam (FP) is unacceptable.
- **Prioritize Recall (Cost of False Negative is disastrous):**
  - In **TrafficShield (Critical Infrastructure Anomaly Detection):** Missing an actual cyberattack (FN) can cause physical shutdown of an electrical substation or power grid. We tune $\tau = 0.50$ on XGBoost to maximize Recall for weaponized exploits.
  - In cancer detection or disease diagnosis.

### Q9: What is the difference between Macro, Micro, and Weighted F1-Score?
**Answer:**
- **Micro F1:** Aggregates global TP, FP, FN across all classes, then computes F1. Micro F1 equals overall accuracy in multi-class single-label classification; it is dominated by majority classes.
- **Macro F1:** Computes standard F1 independently for each class and takes the arithmetic mean:
  $$\text{Macro F1} = \frac{1}{K}\sum_{k=1}^K F1_k$$
  Every class has equal weight. In **MoodMate**, Disgust (500 samples) has equal voice to Happy (8,000 samples). This is the best metric for evaluating true balance across imbalanced classes.
- **Weighted F1:** Computes class F1-scores weighted by support (class frequency):
  $$\text{Weighted F1} = \sum_{k=1}^K \frac{N_k}{N} F1_k$$
  Can artificially mask poor performance on critical minority classes.

### Q10: Why is ROC-AUC misleading on heavily imbalanced datasets, and what should be used instead?
**Answer:**
$\text{ROC-AUC}$ plots True Positive Rate (Recall) against False Positive Rate:
$$\text{FPR} = \frac{\text{FP}}{\text{FP} + \text{TN}}$$
When negative samples drastically outnumber positives (e.g., 999,000 benign packets vs 1,000 attack packets in network traffic), even 10,000 False Positives yields a small $\text{FPR} = \frac{10000}{10000 + 989000} \approx 0.01$, making the ROC curve look deceptively perfect ($\text{AUC} > 0.98$).
- **Superior Alternative:** **Precision-Recall AUC (PR-AUC / Average Precision)**. Because PR-AUC focuses exclusively on the positive minority class and evaluates Precision ($\frac{\text{TP}}{\text{TP} + \text{FP}}$) without being inflated by a colossal True Negative count.

---

## 4. NLP & Feature Engineering

### Q11: Explain TF-IDF mathematically and explain why character n-grams were used in ResumeMatch AI.
**Answer:**
- **Mathematical Definition:**
  $$\text{TF-IDF}(t, d, D) = \text{TF}(t, d) \times \text{IDF}(t, D)$$
  where $\text{TF}(t, d) = \frac{f_{t,d}}{\sum_{t'} f_{t',d}}$ (or sublinear $1 + \log(f_{t,d})$), and $\text{IDF}(t, D) = \log\left(\frac{1 + |D|}{1 + |\{d \in D : t \in d\}|}\right) + 1$.
- **Why Character N-Grams:**
  Standard word tokens treat 'PostgreSQL' and 'Postgres' as completely unrelated tokens. Candidates frequently introduce typographical variations, hyphenations ('front-end' vs 'frontend'), or morphological forms ('containerize' vs 'containerization'). Character n-grams (`analyzer='char_wb', ngram_range=(3, 5)`) break words into boundary-constrained sub-word chunks, capturing morphological similarity without requiring brittle stemmers.

### Q12: How do Dense Embeddings (e.g., Word2Vec, BERT) differ from Sparse Embeddings (TF-IDF, One-Hot)?
**Answer:**
- **Sparse Embeddings (TF-IDF):** High-dimensional ($V \approx 10,000–100,000$), orthogonal vectors where each dimension represents an exact lexical token. Strengths: fast computation, exact keyword matching, zero out-of-vocabulary hallucination. Limitation: zero semantic understanding (cosine similarity between 'physician' and 'doctor' is exactly 0).
- **Dense Embeddings (Sentence-BERT / OpenAI):** Low-dimensional continuous vectors ($d \approx 384–1536$) learned through neural networks where vector proximity represents semantic cosine similarity. Strengths: captures conceptual meaning, synonyms, contextual context. Limitation: computationally heavier, prone to semantic drift on short technical acronyms.

---

## 5. Deep Learning & Computer Vision

### Q13: Walk through the operations in a Convolutional Layer: Kernel, Stride, Padding, Receptive Field.
**Answer:**
- **Convolution Operation:** For input $\mathbf{X}$ and kernel $\mathbf{K}$ of size $k \times k$, the output at $(i, j)$ is the sum of element-wise products:
  $$(\mathbf{X} * \mathbf{K})(i, j) = \sum_{m} \sum_{n} \mathbf{X}(i+m, j+n) \mathbf{K}(m, n)$$
- **Output Dimensions Formula:**
  $$\text{Output Size} = \left\lfloor \frac{W - K + 2P}{S} \right\rfloor + 1$$
  where $W$ is input dimension, $K$ is kernel size, $P$ is padding, and $S$ is stride.
- **Padding:** 'valid' ($P=0$, spatial size shrinks); 'same' ($P = \frac{K - 1}{2}$, preserves spatial dimensions when $S=1$).
- **Receptive Field:** The spatial region in the input image that directly influences a neuron in a deeper layer. Stacking $L$ layers of $3\times3$ convolutions with stride 1 expands the receptive field to $1 + L \times (3 - 1)$.

### Q14: How does Backpropagation work in Convolutional Neural Networks?
**Answer:**
Backpropagation applies the multivariable chain rule to calculate gradients of loss $\mathcal{L}$ with respect to kernel weights $\mathbf{K}$ and input feature maps $\mathbf{X}$:
1. **Gradient w.r.t. Weights:** $\frac{\partial \mathcal{L}}{\partial \mathbf{K}} = \mathbf{X} * \frac{\partial \mathcal{L}}{\partial \mathbf{Y}}$, where $\frac{\partial \mathcal{L}}{\partial \mathbf{Y}}$ is the incoming error gradient from the subsequent layer.
2. **Gradient w.r.t. Input:** $\frac{\partial \mathcal{L}}{\partial \mathbf{X}} = \frac{\partial \mathcal{L}}{\partial \mathbf{Y}} * \text{rot}_{180}(\mathbf{K})$, which is a full convolution with the kernel rotated 180 degrees, propagating error back to earlier layers.
3. Weights are updated via optimizers (Adam, SGD with momentum): $\mathbf{K} \leftarrow \mathbf{K} - \eta \frac{\partial \mathcal{L}}{\partial \mathbf{K}}$.

### Q15: Why is MaxPooling preferred over AveragePooling in emotion recognition CNNs?
**Answer:**
MaxPooling takes the maximum activation in a $2\times2$ spatial window: $\max(x_{i,j})$. Facial expressions depend on sharp, high-frequency spatial gradients—edges of eyes, curvature of lips, furrow of brows. MaxPooling acts as a feature detector preserving dominant edge activations while suppressing background noise. AveragePooling smooths pixel values, muting sharp edge signals that distinguish a smile from a neutral expression.

### Q16: Explain how Contrastive Learning works in Vision-Language Models (e.g., CLIP in SatQuery AI).
**Answer:**
Given a batch of $N$ (image, text) pairs:
1. Image encoder $f_{\text{img}}$ outputs normalized image embeddings $\mathbf{I}_i$; Text encoder $f_{\text{text}}$ outputs normalized text embeddings $\mathbf{T}_j$.
2. Compute an $N \times N$ cosine similarity matrix: $S_{i, j} = \mathbf{I}_i \cdot \mathbf{T}_j / \tau$.
3. **InfoNCE Loss:** Jointly maximizes cosine similarity along the diagonal (positive matching pairs $i = j$) while minimizing off-diagonal similarities (negative non-matching pairs):
   $$\mathcal{L}_{\text{CLIP}} = \frac{1}{2} (\mathcal{L}_{\text{image}} + \mathcal{L}_{\text{text}})$$
   $$\mathcal{L}_{\text{image}} = -\frac{1}{N}\sum_{i=1}^N \log \frac{e^{S_{i,i}}}{\sum_{j=1}^N e^{S_{i,j}}}$$
This projects vision and language into a unified multimodal vector space, allowing natural language queries to align zero-shot with satellite image tiles in SatQuery AI.

---

## 6. Generative AI, RAG & LLM Serving

### Q17: What is Retrieval-Augmented Generation (RAG), and what are its core architectural components?
**Answer:**
RAG combines external information retrieval with autoregressive generation to eliminate LLM hallucination and provide verified, domain-specific answers.
- **Core Pipeline:**
  1. *Chunking & Ingestion:* Documents are chunked (e.g., 500 tokens with 50-token overlap) and embedded via a bi-encoder model into a vector database (Pinecone, ChromaDB, pgvector).
  2. *Retrieval:* User query is embedded; a nearest-neighbor vector search (cosine / HNSW index) retrieves top-$k$ relevant chunks.
  3. *Re-ranking (Optional):* Cross-encoder re-ranks candidate chunks for exact semantic relevance.
  4. *Augmented Generation:* Retrieved chunks are prepended as grounding context into the LLM system prompt: *"Answer strictly using provided context. If unknown, say UNVERIFIED"*.

### Q18: What is Model Quantization (e.g., INT8, FP4) and how does it affect inference?
**Answer:**
Model weights are typically stored in 32-bit floating point (FP32) or 16-bit half precision (FP16).
- **Quantization:** Maps continuous floating-point weights to lower-bit integers:
  $$q = \text{round}\left(\frac{x}{S}\right) + Z$$
  where $S$ is a scale factor and $Z$ is zero-point.
- **INT8:** Reduces model memory footprint by 75% compared to FP32 (e.g., a 7B parameter model shrinks from 28GB to ~7GB), allowing deployment on edge devices or low-cost cloud GPUs with minimal (<1%) perplexity loss.

---

## 7. Practical Engineering Scenarios

### Scenario 1: "Your model performs with 98% accuracy on training data and 97% on validation data, but in production, users complain it fails 40% of the time. What happened and how do you diagnose it?"
**Answer Framework:**
1. **Data Distribution Shift / Covariate Shift:** Production inputs diverge from training distributions $P_{\text{train}}(X) \ne P_{\text{prod}}(X)$ (e.g., in MoodMate, users have different webcam lighting; in ResumeMatch, resumes have new formatting styles).
2. **Concept Drift:** The underlying relationship between features and target has changed $P(Y|X)$ (e.g., in TrafficShield, attackers adopted novel encrypted tunneling techniques).
3. **Training-Serving Skew:** Discrepancy between feature extraction logic in offline training notebooks versus live production APIs (e.g., different normalization constants or tokenizers).
4. **Diagnosis & Remedy:** Log production inference payloads, compute Population Stability Index (PSI) and Wasserstein distance between training and production feature distributions, and establish automated retraining triggers.

### Scenario 2: "You are tasked with deploying an ML model that must process 1,000 requests per second with <50ms latency. How do you architect this?"
**Answer Framework:**
1. **Model Optimization:** Convert Python Scikit-learn/PyTorch models to ONNX Runtime or TensorRT; apply INT8 post-training quantization.
2. **Serving Engine:** Deploy using high-performance C++ inference servers like Triton Inference Server or FastAPI with async workers (Uvicorn/Gunicorn).
3. **Horizontal Autoscaling:** Package containers into a Kubernetes cluster with Horizontal Pod Autoscaler (HPA) scaling on CPU/GPU utilization.
4. **Caching Layer:** Cache high-frequency query embeddings in Redis to bypass model inference entirely for duplicate payloads.
