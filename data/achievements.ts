import { AchievementItem } from "@/types";

export const achievementsData: AchievementItem[] = [
  {
    id: "coding-problems-250",
    title: "Algorithmic Problem Solving",
    metric: "250+",
    platform: "LeetCode, GFG, Codeforces & HackerRank",
    subtitle: "250+ Problems Solved Across Competitive Platforms",
    description:
      "Disciplined algorithmic problem-solving across LeetCode, GeeksforGeeks, Codeforces, and HackerRank covering Arrays, Strings, Two Pointers, Trees, Hash Maps, and Dynamic Programming with optimal asymptotic complexity.",
    badges: ["250+ Solved", "LeetCode", "HackerRank", "Codeforces", "GFG"],
    details: [
      "Extensive practice solving algorithmic challenges across high-frequency patterns: Two Pointers, Sliding Window, Trees, and Graphs.",
      "Demonstrated competitive problem-solving in Python, C++, and Java with rigorous space-time profiling.",
    ],
  },
  {
    id: "hackerrank-orchestrate",
    title: "Global Coding Assessment",
    metric: "1,716",
    platform: "HackerRank Orchestrate",
    subtitle: "Rank 1,716 among 3,062 Global Competitors",
    description:
      "Competed in HackerRank's competitive engineering challenge, solving timed algorithmic problems under strict automated test-case evaluation and performance constraints.",
    badges: ["Rank 1,716 / 3,062", "Global Contest", "Timed Algorithms"],
    details: [
      "Evaluated on algorithmic correctness, asymptotic time efficiency, and memory constraints under timed contest conditions.",
      "Benchmarked competitively against 3,000+ software engineering students and developers internationally.",
    ],
  },
  {
    id: "hackerrank-stars",
    title: "Polyglot Language & Problem Solving Badges",
    metric: "4-Star × 4",
    platform: "HackerRank Skill Badges",
    subtitle: "Quadruple 4-Star Proficiency Badges",
    description:
      "Earned 4-star recognition across foundational engineering tracks, demonstrating polyglot proficiency and rigorous algorithmic accuracy in Problem Solving, Python, Java, and C++.",
    badges: ["★★★★ Problem Solving", "★★★★ Python", "★★★★ Java", "★★★★ C++"],
    details: [
      "Problem Solving Track: Graph traversals, searching/sorting algorithms, and modular arithmetic.",
      "Python & Java Tracks: Object-oriented architecture, standard library collections, and functional transformations.",
      "C++ Track: Memory semantics, pointers, references, and Standard Template Library (STL) data structures.",
    ],
  },
  {
    id: "codestorm-hackathon",
    title: "CODE STORM Hackathon",
    metric: "Rank 8",
    platform: "Competitive Hackathon",
    subtitle: "8th Rank among 50 Engineering Teams",
    description:
      "Collaborative engineering sprint building a functional technical prototype within strict time limits, judged by an expert panel on technical architecture, originality, and live execution.",
    badges: ["8th / 50 Teams", "Competitive Sprint", "Rapid Prototyping", "Technical Architecture"],
    details: [
      "Co-developed an end-to-end technical prototype from conception to working demo within tight hackathon timeframes.",
      "Secured 8th place finish among 50 competing university engineering teams.",
    ],
  },
];
