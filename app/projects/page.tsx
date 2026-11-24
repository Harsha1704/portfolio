import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ProjectsSection } from "@/components/sections/ProjectsSection";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Sri Harsha's engineering projects: SatQuery AI, ResumeMatch AI, 3D Bharat, MoodMate, and TrafficShield with detailed architecture specifications.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-24 pb-16">
      <Container className="mb-2">
        <Breadcrumbs items={[{ label: "Projects" }]} />
      </Container>
      <ProjectsSection />
    </div>
  );
}
