import type { Metadata } from "next";
import { Hero } from "@/components/site/Hero";
import { ConsultationCta, ServicesGrid } from "@/components/site/Sections";
import { AboutBlock, WhyChoose, OurTeamBlock, SuccessMetricsBlock, CoreValuesBlock } from "@/components/site/HomeBlocks";

export const metadata: Metadata = {
  title: "Sterling Tax Partner — Your Trusted Tax & Compliance Expert, Kolkata",
  description:
    "Company/LLP formation, NGO registration, ROC filing, GST, ITR, tax audit and accounting services in BBD Bagh, Kolkata.",
};

export default function Index() {
  return (
    <>
      <Hero />
      <AboutBlock />
      <ServicesGrid />
      <WhyChoose />
      <SuccessMetricsBlock />
      <OurTeamBlock />
      <CoreValuesBlock />
      <ConsultationCta />
    </>
  );
}
