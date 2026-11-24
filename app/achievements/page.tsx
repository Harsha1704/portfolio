import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { AchievementsSection } from "@/components/sections/AchievementsSection";

export const metadata: Metadata = {
  title: "Achievements",
  description:
    "Competitive programming milestones and hackathon finishes: 100+ LeetCode problems, HackerRank Orchestrate (Rank 1,716/3,062), 4-star badges, and CODE STORM Hackathon (8th / 50 teams).",
};

export default function AchievementsPage() {
  return (
    <div className="pt-24 pb-16">
      <Container className="mb-2">
        <Breadcrumbs items={[{ label: "Achievements" }]} />
      </Container>
      <AchievementsSection />
    </div>
  );
}
