import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { AboutSection } from "@/components/sections/AboutSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Sri Harsha — B.Tech Computer Science & Engineering (AI & ML) at Lovely Professional University (8.51 CGPA). Dual-competency engineer bridging theoretical ML and production software.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      <Container className="mb-2">
        <Breadcrumbs items={[{ label: "About" }]} />
      </Container>
      <AboutSection />
    </div>
  );
}
