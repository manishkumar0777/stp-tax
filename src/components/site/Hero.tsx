"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";

const SLIDES = [
  {
    img: hero1 as any,
    eyebrow: "Start your business, stress-free!",
    l1: "Company & LLP",
    l2: "Formation Made Easy",
    text: "From incorporation to ROC filings — we handle the paperwork so you can focus on growth.",
  },
  {
    img: hero2 as any,
    eyebrow: "We make your compliance simpler",
    l1: "GST, ITR &",
    l2: "Tax Audit Experts",
    text: "Accurate, timely tax filings and audit support for individuals and businesses.",
  },
  {
    img: hero1 as any,
    eyebrow: "Your trusted tax & compliance expert",
    l1: "All Your Compliance",
    l2: "in One Place!",
    text: "Accounting, NGO & Society registration and ongoing statutory compliance under one roof.",
  },
];

export function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % SLIDES.length), 6000);
    return () => clearInterval(t);
  }, [i]);
  const s = SLIDES[i] ?? SLIDES[0]!;

  return (
    <section className="relative isolate h-[720px] overflow-hidden text-ink-foreground md:h-[1000px]">
      <img
        key={`img-${i}`}
        src={s.img.src}
        alt=""
        width={1920}
        height={1088}
        className="animate-hero-zoom absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-overlay" />
      <div key={i} className="container-site flex h-full flex-col justify-center">
        <p className="animate-hero-up eyebrow text-base">{s.eyebrow}</p>
        <h1 className="animate-hero-up mt-4 text-4xl font-bold leading-tight [animation-delay:150ms] sm:text-6xl md:text-7xl">
          {s.l1}
          <br />
          {s.l2}
        </h1>
        <p className="animate-hero-up mt-6 max-w-xl text-lg text-ink-foreground/85 [animation-delay:300ms]">
          {s.text}
        </p>
        <div className="animate-hero-up mt-9 [animation-delay:450ms]">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-sm bg-primary px-8 py-4 font-bold uppercase text-primary-foreground hover:opacity-90"
          >
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
