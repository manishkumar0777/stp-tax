import type { Metadata } from "next";
import { PageBanner, ConsultationCta } from "@/components/site/Sections";
import { AboutBlock, WhyChoose } from "@/components/site/HomeBlocks";

export const metadata: Metadata = {
  title: "About Us — Sterling Tax Partner",
  description:
    "Learn about Sterling Tax Partner, a Kolkata tax and compliance practice for businesses, startups and NGOs.",
};

export default function AboutPage() {
  return (
    <>
      <PageBanner title="About Us" subtitle="Your Trusted Tax Partner" />
      <AboutBlock />
      <WhyChoose />
      <ConsultationCta />
    </>
  );
}
