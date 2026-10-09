import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, ShieldCheck, Layers, HeartHandshake, Clock } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import aboutImg from "@/assets/about.jpg";
import { CallBox, ConsultationCta, ServicesGrid } from "@/components/site/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sterling Tax Partner — Your Trusted Tax & Compliance Expert, Kolkata" },
      { name: "description", content: "Company/LLP formation, NGO registration, ROC filing, GST, ITR, tax audit and accounting services in BBD Bagh, Kolkata." },
      { property: "og:title", content: "Sterling Tax Partner — Tax & Compliance Experts in Kolkata" },
      { property: "og:description", content: "Company formation, GST, ITR, ROC filing and accounting compliance — all in one place." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const SLIDES = [
  { img: hero1, eyebrow: "Start your business, stress-free!", l1: "Company & LLP", l2: "Formation Made Easy", text: "From incorporation to ROC filings — we handle the paperwork so you can focus on growth." },
  { img: hero2, eyebrow: "We make your compliance simpler", l1: "GST, ITR &", l2: "Tax Audit Experts", text: "Accurate, timely tax filings and audit support for individuals and businesses." },
  { img: hero1, eyebrow: "Your trusted tax & compliance expert", l1: "All Your Compliance", l2: "in One Place!", text: "Accounting, NGO & Society registration and ongoing statutory compliance under one roof." },
];

function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % SLIDES.length), 6000);
    return () => clearInterval(t);
  }, [i]);
  const s = SLIDES[i];
  return (
    <section className="relative isolate h-[560px] overflow-hidden text-ink-foreground md:h-[720px]">
      <img key={`img-${i}`} src={s.img} alt="" width={1920} height={1088} className="animate-hero-zoom absolute inset-0 -z-20 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-overlay" />
      <div key={i} className="container-site flex h-full flex-col justify-center">
        <p className="animate-hero-up eyebrow text-base">{s.eyebrow}</p>
        <h1 className="animate-hero-up mt-4 text-4xl font-bold leading-tight [animation-delay:150ms] sm:text-6xl md:text-7xl">
          {s.l1}<br />{s.l2}
        </h1>
        <p className="animate-hero-up mt-6 max-w-xl text-lg text-ink-foreground/85 [animation-delay:300ms]">{s.text}</p>
        <div className="animate-hero-up mt-9 [animation-delay:450ms]">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-sm bg-primary px-8 py-4 font-bold uppercase text-primary-foreground hover:opacity-90">
            Get In Touch <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
      <div className="absolute bottom-8 right-8 flex gap-3">
        {[ArrowLeft, ArrowRight].map((Icon, k) => (
          <button
            key={k}
            aria-label={k ? "Next slide" : "Previous slide"}
            onClick={() => setI((v) => (v + (k ? 1 : SLIDES.length - 1)) % SLIDES.length)}
            className="flex h-14 w-14 items-center justify-center rounded-full border border-ink-foreground/40 transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
          >
            <Icon className="h-5 w-5" />
          </button>
        ))}
      </div>
    </section>
  );
}

export function AboutBlock() {
  return (
    <section className="py-24">
      <div className="container-site grid items-center gap-14 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Start your business, stress-free</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">Who We Are – Your Trusted Tax & Compliance Partner</h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            At Sterling Tax Partner, we are dedicated to simplifying the complexities of business formation, taxation
            and compliance for entrepreneurs, startups, NGOs and established businesses alike. With a customer-centric
            approach, we provide end-to-end solutions — from company and LLP registration to GST, ITR, ROC filings and
            accounting — so you can focus on running your business.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-8">
            <CallBox />
            <Link to="/about" className="inline-flex items-center gap-2 rounded-sm bg-ink px-8 py-4 font-bold uppercase text-primary hover:bg-primary hover:text-primary-foreground">
              About Us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -bottom-5 -right-5 h-full w-full rounded-sm border-4 border-primary" />
          <img src={aboutImg} alt="Tax consultant advising a client" loading="lazy" width={1024} height={1152} className="relative h-[480px] w-full rounded-sm object-cover" />
        </div>
      </div>
    </section>
  );
}

const WHY = [
  { icon: ShieldCheck, t: "Expertise You Can Trust", d: "We work with precision and care on every filing and registration." },
  { icon: Layers, t: "One-Stop Solution", d: "Comprehensive tax and compliance services for all your business needs." },
  { icon: HeartHandshake, t: "Customer-Centric Approach", d: "Tailored solutions to meet your unique requirements." },
  { icon: Clock, t: "Timely Delivery", d: "We prioritise accuracy and punctuality in all our services." },
];

export function WhyChoose() {
  return (
    <section className="py-24">
      <div className="container-site grid items-center gap-14 lg:grid-cols-2">
        <div className="grid grid-cols-2 gap-5">
          <img src={hero2} alt="Tax documents and calculator" loading="lazy" className="h-80 w-full rounded-sm object-cover" />
          <img src={aboutImg} alt="Consultation in progress" loading="lazy" className="mt-12 h-80 w-full rounded-sm object-cover" />
        </div>
        <div>
          <p className="eyebrow">Why Choose Us?</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Why Choose Us?</h2>
          <div className="mt-10 space-y-7">
            {WHY.map((w) => (
              <div key={w.t} className="flex gap-5">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-sm bg-primary text-primary-foreground">
                  <w.icon className="h-7 w-7" />
                </span>
                <div>
                  <h3 className="text-xl font-bold">{w.t}</h3>
                  <p className="mt-1 text-muted-foreground">{w.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <>
      <Hero />
      <AboutBlock />
      <ServicesGrid />
      <WhyChoose />
      <ConsultationCta />
    </>
  );
}
