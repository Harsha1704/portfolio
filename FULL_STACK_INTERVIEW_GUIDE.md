# Full-Stack Software Engineering Technical Interview Guide

**Candidate:** Sri Harsha (B.Tech CSE — AI & ML, LPU | CGPA: 8.51)  
**Target Roles:** Full-Stack Developer, AI Full-Stack Developer, Software Engineer  
**Core Technologies:** React.js, TypeScript, Next.js, Python, Flask, FastAPI, SQL / PostgreSQL, Docker, Git

---

## 1. Frontend Architecture & React Deep-Dive

### Q1: Explain the React Reconciliation Algorithm (Virtual DOM) and the role of Keys in lists.
**Answer:**
- **Virtual DOM:** A lightweight in-memory tree representation of the actual DOM nodes. When state or props change, React constructs a new Virtual DOM tree and compares it against the previous tree using a diffing algorithm called **Reconciliation** (Fiber architecture).
- **Heuristic Assumptions:**
  1. Two elements of different types produce completely different subtrees (unmounting the old and mounting the new).
  2. The developer can hint at which child elements are stable across renders using the `key` prop.
- **Why Keys Matter:** Without unique, stable keys (or using array indices when items are reordered/deleted), React falls back to mutating DOM nodes by index. If item 0 is removed, React unnecessarily re-renders every subsequent sibling, potentially causing state leaks in form inputs or animations. Unique keys allow React to recognize reordered, inserted, or removed nodes in $O(N)$ linear time.

### Q2: Compare `useMemo`, `useCallback`, and `useRef`. When should you NOT use them?
**Answer:**
- **`useMemo`:** Memoizes the *result* of an expensive calculation:
  ```typescript
  const filteredList = useMemo(() => expensiveFilter(items, query), [items, query]);
  ```
- **`useCallback`:** Memoizes a *function reference* across renders to prevent unnecessary re-renders of memoized child components (`React.memo`):
  ```typescript
  const handleClick = useCallback(() => doAction(id), [id]);
  ```
- **`useRef`:** Returns a mutable object `{ current: value }` that persists across renders without triggering a re-render when mutated. Used for DOM access (focusing inputs, measuring canvas) or storing mutable timer/interval IDs.
- **When NOT to use them:**
  - Wrapping cheap calculations (e.g., string concatenation, basic array mapping under 100 items) in `useMemo` introduces memory overhead and dependency tracking overhead that exceeds the cost of recomputation.
  - Adding `useCallback` to functions passed only to native HTML elements (`<button onClick={...}>`) adds no performance benefit because DOM elements don't shallow-compare props.

### Q3: How does the JavaScript Event Loop handle Call Stack, Microtasks, and Macrotasks?
**Answer:**
JavaScript is single-threaded. Execution order follows strict priority:
1. **Call Stack:** Synchronous code executes immediately to completion.
2. **Microtask Queue (High Priority):** When the Call Stack empties, the event loop drains the entire Microtask queue before executing anything else. Microtasks include:
   - `Promise.then()`, `Promise.catch()`, `Promise.finally()`
   - `async / await` resumption
   - `queueMicrotask()`
3. **Macrotask / Task Queue:** After all microtasks are drained and DOM rendering occurs, the event loop picks **one** macrotask. Macrotasks include:
   - `setTimeout()`, `setInterval()`
   - DOM I/O events (click, scroll)
   - `setImmediate()` (Node.js)
- **Classic Interview Riddle:**
  ```javascript
  console.log('1');
  setTimeout(() => console.log('2'), 0);
  Promise.resolve().then(() => console.log('3'));
  console.log('4');
  // Output: 1, 4, 3, 2
  ```

### Q4: Compare SSR, SSG, ISR, and CSR in Next.js. Which does your portfolio use?
**Answer:**
- **CSR (Client-Side Rendering):** Browser downloads minimal HTML shell and large JS bundle, compiling UI on the client. Fast subsequent transitions, but poor initial SEO and slower First Contentful Paint (FCP).
- **SSR (Server-Side Rendering):** HTML is generated on the server dynamically for every incoming HTTP request. Ideal for highly personalized, dynamic pages, but increases server compute and TTFB (Time to First Byte).
- **SSG (Static Site Generation):** Pages are compiled to pure HTML/CSS at build time. Highest possible performance, zero database latency at runtime, and easily distributed globally across CDNs.
- **ISR (Incremental Static Regeneration):** Updates static pages in the background after deployment without a full site rebuild using `revalidate: 60`.
- **Portfolio Architecture:** My portfolio utilizes **SSG (Static Site Generation)** with Next.js Turbopack. All 23 pages (including `/about`, `/projects`, and dynamic project case studies `/projects/[slug]`) are prerendered as static HTML at build time, yielding instant sub-second CDN delivery on Vercel.

---

## 2. Backend Engineering & Python Microservices

### Q5: What is the Python GIL (Global Interpreter Lock), and how do you achieve concurrency in Python?
**Answer:**
- **The GIL:** A mutex in CPython that prevents multiple native OS threads from executing Python bytecode simultaneously within a single process. It protects CPython's memory management from race conditions during reference counting.
- **Impact:**
  - *I/O-Bound Tasks (Network requests, database queries, file reading):* The GIL is released during I/O wait. Multi-threading (`threading.Thread`) or asynchronous event loops (`asyncio`) achieve high concurrency.
  - *CPU-Bound Tasks (Image processing in OpenCV, ML inference in scikit-learn):* Multi-threading does not speed up CPU tasks because only one thread executes at a time.
- **Solutions for Concurrency:**
  1. **Multi-Processing:** Use `multiprocessing` or process pools (Celery, Gunicorn workers) to spawn isolated Python processes, each with its own GIL and memory space.
  2. **C-Extensions:** Libraries like NumPy, OpenCV, and XGBoost execute heavy linear algebra in native C/C++ threads, completely releasing the GIL during computation.

### Q6: Compare WSGI (Flask) and ASGI (FastAPI).
**Answer:**
- **WSGI (Web Server Gateway Interface):** Synchronous standard (Flask, Django). Each incoming HTTP request is handled sequentially by a worker thread/process. If a worker blocks on a slow upstream API call (e.g., SatQuery waiting for a VLM response), that thread is stalled and cannot handle other traffic.
- **ASGI (Asynchronous Server Gateway Interface):** Modern asynchronous standard (FastAPI, Starlette). Built on Python's `asyncio` event loop. Using `async def` endpoints, when an I/O operation awaits (e.g., `await client.get(...)`), the event loop immediately switches to process other requests on the same thread, sustaining thousands of concurrent connections with low memory usage.

### Q7: What makes a RESTful API truly RESTful? What are the core HTTP methods and idempotency?
**Answer:**
- **REST (Representational State Transfer) Constraints:** Statelessness, client-server decoupling, uniform interface (resource-based URIs), cacheability, layered architecture.
- **HTTP Methods & Idempotency:**
  - An operation is **idempotent** if executing it multiple times produces the exact same server resource state as executing it once:
    $$f(f(x)) = f(x)$$
  - `GET`: Safe & Idempotent (Read resources).
  - `POST`: Neither Safe nor Idempotent (Creates a new subordinate resource; repeating creates duplicates).
  - `PUT`: Idempotent (Replaces the target resource entirely with the request payload).
  - `PATCH`: Non-idempotent by default (Applies partial modifications to a resource).
  - `DELETE`: Idempotent (Deleting resource `/items/5` multiple times leaves it deleted; returns 204 or 404).

### Q8: Explain CORS (Cross-Origin Resource Sharing) and the Preflight Request.
**Answer:**
- **Same-Origin Policy (SOP):** A browser security rule preventing scripts on origin A (`https://my-app.com`) from reading data from origin B (`https://api.my-app.com`) unless origin B explicitly permits it.
- **Preflight Request (`OPTIONS`):**
  - If a request is 'non-simple' (uses methods other than GET/HEAD/POST, or includes custom headers like `Authorization: Bearer <token>`, or has `Content-Type: application/json`), the browser automatically sends an HTTP `OPTIONS` request before the actual request.
  - The server must respond with appropriate CORS headers:
    - `Access-Control-Allow-Origin: https://my-app.com`
    - `Access-Control-Allow-Methods: GET, POST, OPTIONS`
    - `Access-Control-Allow-Headers: Authorization, Content-Type`
    - `Access-Control-Max-Age: 86400` (caches preflight response)
  - If preflight fails or headers don't match, the browser blocks the response from reaching client code.

---

## 3. Database Architecture & SQL

### Q9: Explain ACID Properties in Relational Databases with practical examples.
**Answer:**
- **A — Atomicity:** Transactions are 'all or nothing'. If a bank transfer deducts \$100 from Account A and crashes before crediting Account B, the entire transaction rolls back.
- **C — Consistency:** A transaction can only transition the database from one valid state to another, preserving all schema integrity constraints, foreign keys, and check rules.
- **I — Isolation:** Concurrent transactions execute without interfering with one another. Governed by ANSI isolation levels (Read Uncommitted, Read Committed, Repeatable Read, Serializable).
- **D — Durability:** Once a transaction commits, its changes survive system crashes and power outages via write-ahead logging (WAL).

### Q10: What are Database Indexes (B-Trees vs Hash), and when does an index HURT performance?
**Answer:**
- **B-Tree Index (Default in PostgreSQL/MySQL):** A self-balancing search tree where all leaf nodes reside at equal depth and are linked sequentially. Supports $O(\log N)$ equality searches (`=`), range queries (`BETWEEN`, `<`, `>`), and sorting (`ORDER BY`).
- **Hash Index:** $O(1)$ lookups for exact equality (`=`), but completely incapable of supporting range scans or sorting.
- **When an Index Hurts Performance:**
  1. *Write-Heavy Tables:* Every `INSERT`, `UPDATE`, or `DELETE` requires updating both the heap table and every associated index tree. Adding 10 indexes on a table drastically slows down write throughput.
  2. *Low-Cardinality Columns:* Indexing a boolean flag or a gender column with only two values causes the query planner to skip the index because a sequential table scan is faster than traversing index tree pages.
  3. *Small Tables:* Scanning a 100-row table directly in memory is faster than index lookups.

### Q11: Write a SQL query using a Common Table Expression (CTE) and a Window Function.
**Problem:** *Find the top 3 highest-earning engineers in each department.*
```sql
WITH RankedEmployees AS (
    SELECT 
        id,
        name,
        department_id,
        salary,
        DENSE_RANK() OVER (
            PARTITION BY department_id 
            ORDER BY salary DESC
        ) as salary_rank
    FROM employees
)
SELECT 
    name, 
    department_id, 
    salary, 
    salary_rank
FROM RankedEmployees
WHERE salary_rank <= 3
ORDER BY department_id, salary_rank;
```
- **Explanation:** `PARTITION BY department_id` divides the window into departmental buckets, and `DENSE_RANK()` assigns ranks without skipping numbers when ties occur.

---

## 4. Engineering Practices, Security & System Design

### Q12: How do you prevent the OWASP Top 3 Web Vulnerabilities (SQL Injection, XSS, CSRF)?
**Answer:**
1. **SQL Injection (SQLi):**
   - *Attack:* Untrusted user input is concatenated directly into SQL queries: `' OR '1'='1`.
   - *Defense:* Always use parameterized queries / prepared statements (or ORMs like SQLAlchemy/Prisma). Parameter markers treat input strictly as literals, never as executable SQL instructions.
2. **Cross-Site Scripting (XSS):**
   - *Attack:* Injecting malicious JavaScript into the DOM (`<script>steal(document.cookie)</script>`).
   - *Defense:* React natively escapes strings rendered in JSX (e.g., `{userInput}` is rendered as text, not HTML). Never use `dangerouslySetInnerHTML` with unsanitized user content; set Content Security Policy (CSP) headers; use `HttpOnly` cookie flags so JS cannot access auth tokens.
3. **Cross-Site Request Forgery (CSRF):**
   - *Attack:* Tricking an authenticated user's browser into executing an unauthorized POST action on another site using existing session cookies.
   - *Defense:* Use `SameSite=Strict` or `SameSite=Lax` cookie attributes; implement Anti-CSRF Synchronizer Tokens; prefer `Authorization: Bearer <JWT>` headers in REST APIs over automatic cookie transmission.

### Q13: Design a Scalable Rate Limiter for an API. What algorithm and data store would you use?
**Answer:**
- **Algorithm: Token Bucket or Sliding Window Counter.**
  - *Token Bucket:* A bucket of capacity $C$ refills at a constant rate $r$ tokens/second. Each request consumes 1 token. Handles sudden bursts up to capacity $C$ while enforcing long-term rate $r$.
  - *Sliding Window Counter:* Computes weighted request counts over the previous and current time window, preventing boundary bursts at the turn of a minute.
- **Data Store: Redis.**
  - Redis executes atomic operations in memory in sub-milliseconds.
  - Implement using Redis transactions (`MULTI/EXEC`) or an atomic Lua script:
    1. Read key `ratelimit:<client_ip>`.
    2. Check remaining tokens. If tokens $> 0$, decrement and return HTTP 200 with headers (`X-RateLimit-Remaining`).
    3. If tokens $= 0$, return HTTP 429 Too Many Requests with `Retry-After` header.
    4. Set Redis key expiration (`EXPIRE`) to ensure memory cleanup.
