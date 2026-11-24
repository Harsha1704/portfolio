import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { EducationSection } from "@/components/sections/EducationSection";

export const metadata: Metadata = {
  title: "Education",
  description:
    "Academic background of Sri Harsha — Lovely Professional University B.Tech CSE (AI & ML) with 8.51 CGPA, Narayana Junior College (94.9%), and Sri Chaitanya Techno School (92.67%).",
};

export default function EducationPage() {
  return (
    <div className="pt-24 pb-16">
      <Container className="mb-2">
        <Breadcrumbs items={[{ label: "Education" }]} />
      </Container>
      <EducationSection />
    </div>
  );
}
