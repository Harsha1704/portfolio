import React from "react";
import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { buttonVariants } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] pt-32 pb-20 flex items-center justify-center bg-white">
      <Container size="tight" className="text-center">
        <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-blue-50 text-blue-600 mb-6">
          <Compass className="w-8 h-8" />
        </div>

        <span className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-2">
          Error 404 • Resource Not Found
        </span>

        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
          Project or Page Not Found
        </h1>

        <p className="text-base text-slate-600 max-w-md mx-auto mb-8 leading-relaxed">
          The page or case study you requested does not exist or has been relocated within the website directory.
        </p>

        <Link
          href="/"
          className={buttonVariants({
            variant: "primary",
            size: "md",
          })}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          <span>Return to Homepage</span>
        </Link>
      </Container>
    </div>
  );
}
