import { Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Layers, HeartHandshake, Clock } from "lucide-react";
import hero2 from "@/assets/hero-2.jpg";
import aboutImg from "@/assets/about.jpg";
import { CallBox } from "@/components/site/Sections";

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

