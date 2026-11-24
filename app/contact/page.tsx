import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Sri Harsha for AI/ML engineering opportunities, full-stack software development roles, and technical collaborations.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 pb-16">
      <Container className="mb-2">
        <Breadcrumbs items={[{ label: "Contact" }]} />
      </Container>
      <ContactSection />
    </div>
  );
}
