import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ExperienceSection } from "@/components/sections/ExperienceSection";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional industry experience of Sri Harsha — AI/ML Intern at Edufiy Tech Solutions (January 2025 – March 2025).",
};

export default function ExperiencePage() {
  return (
    <div className="pt-24 pb-16">
      <Container className="mb-2">
        <Breadcrumbs items={[{ label: "Experience" }]} />
      </Container>
      <ExperienceSection />
    </div>
  );
}
