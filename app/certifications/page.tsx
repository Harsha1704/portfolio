import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CertificationsSection } from "@/components/sections/CertificationsSection";

export const metadata: Metadata = {
  title: "Certifications",
  description:
    "Verified technical accreditations: Oracle AI Database Certified Foundations Associate, React.js (Tech Veda), and Front End Development (Great Learning).",
};

export default function CertificationsPage() {
  return (
    <div className="pt-24 pb-16">
      <Container className="mb-2">
        <Breadcrumbs items={[{ label: "Certifications" }]} />
      </Container>
      <CertificationsSection />
    </div>
  );
}
