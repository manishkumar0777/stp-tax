import { createFileRoute } from "@tanstack/react-router";
import { PageBanner, ServicesGrid, ConsultationCta } from "@/components/site/Sections";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Sterling Tax Partner" },
      { name: "description", content: "Company/LLP formation, NGO & society registration, ROC filing, GST, tax audit, ITR and accounting services in Kolkata." },
      { property: "og:title", content: "Our Services — Sterling Tax Partner" },
      { property: "og:description", content: "Six core tax and compliance services for businesses and NGOs." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <>
      <PageBanner title="Services" />
      <ServicesGrid />
      <ConsultationCta />
    </>
  ),
});
