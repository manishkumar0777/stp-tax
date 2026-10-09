import { createFileRoute } from "@tanstack/react-router";
import { PageBanner, ConsultationCta } from "@/components/site/Sections";
import { AboutBlock, WhyChoose } from "./index";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Sterling Tax Partner" },
      { name: "description", content: "Learn about Sterling Tax Partner, a Kolkata tax and compliance practice for businesses, startups and NGOs." },
      { property: "og:title", content: "About Sterling Tax Partner" },
      { property: "og:description", content: "Your trusted tax & compliance expert in BBD Bagh, Kolkata." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <>
      <PageBanner title="About Us" />
      <AboutBlock />
      <WhyChoose />
      <ConsultationCta />
    </>
  ),
});
