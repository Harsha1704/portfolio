# Java & Data Structures and Algorithms (DSA) Interview Mastery Roadmap

**Candidate Profile:** Sri Harsha  
**Academic Record:** B.Tech CSE (AI & ML), Lovely Professional University (CGPA: 8.51)  
**Verified Milestones:** 250+ Problems Solved across LeetCode, GFG, Codeforces, HackerRank | 4-Star Problem Solving Badge | HackerRank Orchestrate Rank 1,716/3,062  
**Language Focus:** Java 17+ (Robust Object-Oriented Architecture, Strong Typings, Generics, Collections Framework)

---

## 1. Roadmap Overview & Strategic Time Allocation

| Phase | Core Focus Modules | Problem Target | Target Complexity Competency |
|---|---|---|---|
| **Phase 1: Foundations** | Arrays, Strings, Two Pointers, Sliding Window, Hashing | 80 Problems | $O(N)$ Linear Time, In-Place Inversion |
| **Phase 2: Linear Structures** | Linked Lists, Stacks, Queues, Monotonic Stack Patterns | 50 Problems | $O(1)$ Auxiliary Space, Single-Pass Traversals |
| **Phase 3: Hierarchies & Log-Search** | Binary Search, Recursion, Binary Trees, BST, Heaps | 60 Problems | $O(\log N)$ Search Space, Tree DFS/BFS |
| **Phase 4: Non-Linear & Advanced** | Graphs, Disjoint Set Union (DSU), Shortest Paths | 35 Problems | $O(V + E)$ Graph Traversals |
| **Phase 5: Optimization & Logic** | Greedy Algorithms, Dynamic Programming (1D, 2D) | 40 Problems | State Space Reduction, Overlapping Subproblems |

---

## 2. Java Collections Framework Quick Reference

```java
// Common Collection Initialization & Time Complexities:
List<Integer> list = new ArrayList<>();                 // Add: Amortized O(1), Get: O(1)
Map<String, Integer> map = new HashMap<>();             // Put/Get: O(1) avg, O(N) worst
Set<Integer> set = new HashSet<>();                     // Add/Contains: O(1) avg
Queue<Integer> queue = new ArrayDeque<>();              // Offer/Poll: O(1)
Deque<Integer> stack = new ArrayDeque<>();              // Push/Pop: O(1) (Better than legacy Stack)
PriorityQueue<Integer> minHeap = new PriorityQueue<>(); // Add/Poll: O(log K)
PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());
```

---

## 3. Topic-by-Topic Mastery Modules

---

### Module 1: Arrays & Strings
- **Core Concepts:** Contiguous memory allocation, cache locality, prefix sums, kadane's algorithm for maximum subarrays.
- **Key Pattern:** Prefix Sum ($O(1)$ range queries):
  $$\text{Prefix}[i] = \text{Prefix}[i-1] + \text{nums}[i]$$
- **Classic Interview Exercises:**
  - *Easy:* Two Sum (LeetCode 1) — $O(N)$ with HashMap.
  - *Medium:* Kadane's Algorithm / Maximum Subarray (LeetCode 53) — $O(N)$ time, $O(1)$ space.
  - *Medium:* Product of Array Except Self (LeetCode 238) — $O(N)$ time without division.
  - *Hard:* First Missing Positive (LeetCode 41) — $O(N)$ time with in-place index hashing.
- **Java Implementation — Kadane's Algorithm:**
```java
public int maxSubArray(int[] nums) {
    int maxSoFar = nums[0];
    int currentMax = nums[0];
    for (int i = 1; i < nums.length; i++) {
        currentMax = Math.max(nums[i], currentMax + nums[i]);
        maxSoFar = Math.max(maxSoFar, currentMax);
    }
    return maxSoFar; // O(N) Time, O(1) Space
}
```

---

### Module 2: Two Pointers & Sliding Window
- **Core Concepts:** Dual index manipulation (converging pointers from both ends or forward-expanding window).
- **Pattern Signals:** Sorted array pairs, subarray with constraint (sum $\le k$, unique characters), palindrome validation.
- **Classic Interview Exercises:**
  - *Easy:* Valid Palindrome (LeetCode 125) — $O(N)$ time, $O(1)$ space.
  - *Medium:* Container With Most Water (LeetCode 11) — $O(N)$ two pointers converging inward.
  - *Medium:* Longest Substring Without Repeating Characters (LeetCode 3) — $O(N)$ sliding window with HashSet.
  - *Hard:* Minimum Window Substring (LeetCode 76) — $O(N)$ frequency array window.
- **Java Implementation — Longest Substring Without Repeating Characters:**
```java
public int lengthOfLongestSubstring(String s) {
    int[] lastIndex = new int[128]; // ASCII frequency tracker
    Arrays.fill(lastIndex, -1);
    int maxLength = 0, left = 0;
    
    for (int right = 0; right < s.length(); right++) {
        char c = s.charAt(right);
        if (lastIndex[c] >= left) {
            left = lastIndex[c] + 1; // Jump left pointer past duplicate
        }
        lastIndex[c] = right;
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength; // O(N) Time, O(1) Aux Space
}
```

---

### Module 3: Binary Search & Search Space Reduction
- **Core Concepts:** Logarithmic reduction on monotonically sorted arrays or monotonic answer spaces:
  $$\text{mid} = \text{left} + \frac{\text{right} - \text{left}}{2} \quad \text{(Avoids integer overflow)}$$
- **Pattern Signals:** "Find in sorted array", "Search in rotated array", "Find minimum capacity satisfying condition".
- **Classic Interview Exercises:**
  - *Easy:* Binary Search (LeetCode 704).
  - *Medium:* Search in Rotated Sorted Array (LeetCode 33) — $O(\log N)$ time.
  - *Medium:* Koko Eating Bananas (LeetCode 875) — Binary search on answer space $[1, \max(piles)]$.
  - *Hard:* Median of Two Sorted Arrays (LeetCode 4) — $O(\log(\min(M, N)))$.

---

### Module 4: Stacks, Queues & Monotonic Stacks
- **Core Concepts:** LIFO / FIFO order. A **Monotonic Stack** maintains elements in strictly increasing or decreasing order to find the *Next Greater Element* in $O(N)$ total time.
- **Classic Interview Exercises:**
  - *Easy:* Valid Parentheses (LeetCode 20) — $O(N)$ time.
  - *Medium:* Daily Temperatures (LeetCode 739) — Monotonic decreasing stack.
  - *Medium:* Min Stack (LeetCode 155) — $O(1)$ getMin using dual stack.
  - *Hard:* Trapping Rain Water (LeetCode 42) — $O(N)$ time, $O(1)$ space using two pointers or monotonic stack.
- **Java Implementation — Daily Temperatures:**
```java
public int[] dailyTemperatures(int[] temperatures) {
    int n = temperatures.length;
    int[] result = new int[n];
    Deque<Integer> stack = new ArrayDeque<>(); // stores indices
    
    for (int i = 0; i < n; i++) {
        while (!stack.isEmpty() && temperatures[i] > temperatures[stack.peek()]) {
            int prevIdx = stack.pop();
            result[prevIdx] = i - prevIdx;
        }
        stack.push(i);
    }
    return result; // O(N) Time, O(N) Space
}
```

---

### Module 5: Trees, Binary Search Trees (BST) & Traversals
- **Core Concepts:**
  - **DFS Traversals:** Pre-order (Root-L-R), In-order (L-Root-R $\rightarrow$ sorted order in BST), Post-order (L-R-Root).
  - **BFS Traversal:** Level-order using Queue (`ArrayDeque`).
- **Classic Interview Exercises:**
  - *Easy:* Invert Binary Tree (LeetCode 226) — $O(N)$ time.
  - *Medium:* Lowest Common Ancestor in Binary Tree (LeetCode 236) — $O(N)$ post-order recursion.
  - *Medium:* Validate Binary Search Tree (LeetCode 98) — Boundary checking with `(min, max)` range.
  - *Hard:* Binary Tree Maximum Path Sum (LeetCode 124) — $O(N)$ bottom-up DFS.
- **Java Implementation — Lowest Common Ancestor (LCA):**
```java
public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
    if (root == null || root == p || root == q) return root;
    TreeNode left = lowestCommonAncestor(root.left, p, q);
    TreeNode right = lowestCommonAncestor(root.right, p, q);
    if (left != null && right != null) return root; // p and q in separate subtrees
    return left != null ? left : right; // O(N) Time, O(H) Space
}
```

---

### Module 6: Heaps & Priority Queues (Top-K Patterns)
- **Core Concepts:** Complete binary tree satisfying heap property. Min-heap keeps smallest element at root; max-heap keeps largest.
- **Key Pattern:** Maintaining a min-heap of size $K$ to find the $K$-th largest element in $O(N \log K)$ time (far superior to $O(N \log N)$ sorting).
- **Classic Interview Exercises:**
  - *Medium:* Kth Largest Element in an Array (LeetCode 215) — Min-heap of size $K$ or Quickselect ($O(N)$ avg).
  - *Medium:* Top K Frequent Elements (LeetCode 347) — Bucket sort ($O(N)$) or PriorityQueue ($O(N \log K)$).
  - *Hard:* Merge k Sorted Lists (LeetCode 23) — Min-heap holding $K$ list nodes ($O(N \log K)$).

---

### Module 7: Graphs (DFS, BFS, Dijkstra, Topological Sort)
- **Core Concepts:** Adjacency list representation `Map<Integer, List<Integer>>`.
  - **BFS:** Shortest path in unweighted graphs.
  - **DFS:** Cycle detection, connected components.
  - **Topological Sort:** Kahn's Algorithm (in-degree array + Queue) for Directed Acyclic Graphs (DAGs).
  - **Dijkstra's Algorithm:** Single-source shortest path with non-negative weights using `PriorityQueue` in $O((V + E) \log V)$.
- **Classic Interview Exercises:**
  - *Medium:* Number of Islands (LeetCode 200) — Grid DFS/BFS ($O(M \times N)$).
  - *Medium:* Course Schedule I & II (LeetCode 207, 210) — Topological Sort / Cycle detection.
  - *Hard:* Word Ladder (LeetCode 127) — Bidirectional BFS.
- **Java Implementation — Course Schedule (Cycle Detection / Kahn's Algorithm):**
```java
public boolean canFinish(int numCourses, int[][] prerequisites) {
    List<List<Integer>> adj = new ArrayList<>();
    for (int i = 0; i < numCourses; i++) adj.add(new ArrayList<>());
    int[] inDegree = new int[numCourses];
    
    for (int[] edge : prerequisites) {
        adj.get(edge[1]).add(edge[0]);
        inDegree[edge[0]]++;
    }
    
    Queue<Integer> queue = new ArrayDeque<>();
    for (int i = 0; i < numCourses; i++) {
        if (inDegree[i] == 0) queue.offer(i);
    }
    
    int processedCourses = 0;
    while (!queue.isEmpty()) {
        int node = queue.poll();
        processedCourses++;
        for (int neighbor : adj.get(node)) {
            if (--inDegree[neighbor] == 0) {
                queue.offer(neighbor);
            }
        }
    }
    return processedCourses == numCourses; // O(V + E) Time, O(V + E) Space
}
```

---

### Module 8: Dynamic Programming (DP)
- **Core Concepts:** Overlapping subproblems + Optimal substructure.
  1. *Define State:* What does $dp[i]$ or $dp[i][j]$ represent?
  2. *Transition Equation:* How does state $i$ derive from previous states?
  3. *Base Cases:* Initialization values.
  4. *Space Optimization:* Can 2D DP be compressed to 1D rolling array?
- **Classic Interview Exercises:**
  - *Easy:* Climbing Stairs (LeetCode 70) — Fibonacci progression ($O(N)$ time, $O(1)$ space).
  - *Medium:* Coin Change (LeetCode 322) — Unbounded knapsack pattern ($O(N \times \text{amount})$).
  - *Medium:* Longest Increasing Subsequence (LeetCode 300) — $O(N \log N)$ with binary search (Patience Sorting).
  - *Medium:* Longest Common Subsequence (LeetCode 1143) — 2D Grid DP.
  - *Hard:* Edit Distance (LeetCode 72) — 2D string transformation DP.
- **Java Implementation — Coin Change (1D DP):**
```java
public int coinChange(int[] coins, int amount) {
    int[] dp = new int[amount + 1];
    Arrays.fill(dp, amount + 1); // Sentinel value
    dp[0] = 0;
    
    for (int i = 1; i <= amount; i++) {
        for (int coin : coins) {
            if (i >= coin) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    return dp[amount] > amount ? -1 : dp[amount]; // O(amount * coins.length) Time
}
```
