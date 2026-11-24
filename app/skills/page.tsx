import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SkillsSection } from "@/components/sections/SkillsSection";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Explore Sri Harsha's technical skills matrix categorized across 8 core domains: Programming Languages, AI & Machine Learning, Deep Learning & Computer Vision, Generative AI & LLM Technologies, Frontend Development, Backend Development & APIs, Databases, and Developer Tools & Platforms.",
};

export default function SkillsPage() {
  return (
    <div className="pt-24 pb-16">
      <Container className="mb-2">
        <Breadcrumbs items={[{ label: "Skills" }]} />
      </Container>
      <SkillsSection />
    </div>
  );
}
