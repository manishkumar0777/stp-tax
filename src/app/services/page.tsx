import type { Metadata } from "next";
import { PageBanner, ServicesGrid, ConsultationCta } from "@/components/site/Sections";

export const metadata: Metadata = {
  title: "Services — Sterling Tax Partner",
  description:
    "Company/LLP formation, NGO & society registration, ROC filing, GST, tax audit, ITR and accounting services in Kolkata.",
};

export default function ServicesPage() {
  return (
    <>
      <PageBanner title="Services" subtitle="Expert Compliance Solutions" />
      <ServicesGrid />
      <ConsultationCta />
    </>
  );
}
