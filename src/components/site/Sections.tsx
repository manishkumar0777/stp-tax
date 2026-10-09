import { Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { SITE, SERVICES } from "@/lib/site";
import heroImg from "@/assets/hero-1.jpg";

export function PageBanner({ title }: { title: string }) {
  return (
    <section className="relative isolate overflow-hidden py-28 text-center text-ink-foreground">
      <img src={heroImg} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-overlay" />
      <h1 className="text-4xl font-bold md:text-5xl">{title}</h1>
      <p className="mt-4 text-sm">
        <Link to="/" className="hover:text-primary">Home</Link> <span className="mx-2 text-primary">/</span> {title}
      </p>
    </section>
  );
}

export function CallBox() {
  return (
    <div className="flex items-center gap-4">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
        <Phone className="h-6 w-6" />
      </span>
      <div>
        <p className="text-sm font-semibold uppercase text-muted-foreground">Call us for a consultation</p>
        <a href={SITE.phoneHref} className="text-xl font-bold hover:text-primary">{SITE.phoneDisplay}</a>
      </div>
    </div>
  );
}

export function ServicesGrid() {
  return (
    <section className="bg-secondary py-24">
      <div className="container-site">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="eyebrow">Our Latest Services</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">What Kind of Services We Are Offering</h2>
        </div>
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <article
              key={s.title}
              className="group relative overflow-hidden rounded-sm border-b-4 border-transparent bg-card p-9 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-xl"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-sm bg-ink text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <s.icon className="h-8 w-8" />
              </span>
              <h3 className="mt-6 text-xl font-bold">
                <Link to="/contact" className="hover:text-primary">{s.title}</Link>
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{s.text}</p>
              <Link to="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-bold uppercase text-primary">
                Enquire <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ConsultationCta() {
  return (
    <section className="bg-ink py-16 text-ink-foreground">
      <div className="container-site flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
        <div>
          <p className="eyebrow">We are here to answer your questions</p>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">Need A Consultation?</h2>
        </div>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-sm bg-primary px-8 py-4 font-bold uppercase text-primary-foreground transition-opacity hover:opacity-90"
        >
          Get a free consultation <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

const inputCls =
  "w-full rounded-sm border border-input bg-background px-4 py-3.5 outline-none focus:border-primary focus:ring-1 focus:ring-ring";

export function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [err, setErr] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const data = {
      name: String(fd.get("name") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      phone: String(fd.get("phone") || "").trim() || null,
      service: String(fd.get("service") || "") || null,
      message: String(fd.get("message") || "").trim(),
    };
    if (!data.name || !/^\S+@\S+\.\S+$/.test(data.email) || !data.message) {
      setErr("Please fill in your name, a valid email and a message.");
      setState("error");
      return;
    }
    setState("sending");
    const { error } = await supabase.from("contact_submissions").insert(data);
    if (error) {
      setErr("Something went wrong. Please call or email us directly.");
      setState("error");
    } else {
      form.reset();
      setState("done");
    }
  }

  if (state === "done")
    return (
      <div className="flex flex-col items-center gap-3 rounded-sm bg-secondary p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-primary" />
        <h3 className="text-2xl font-bold">Thank you!</h3>
        <p className="text-muted-foreground">Your enquiry has been received. We will get back to you soon.</p>
        <button onClick={() => setState("idle")} className="mt-2 font-bold text-primary">Send another</button>
      </div>
    );

  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2" noValidate>
      <input name="name" placeholder="Your Name *" maxLength={100} className={inputCls} required />
      <input name="email" type="email" placeholder="Email Address *" maxLength={255} className={inputCls} required />
      <input name="phone" type="tel" placeholder="Phone Number" maxLength={20} className={inputCls} />
      <select name="service" className={inputCls} defaultValue="">
        <option value="">Select a Service</option>
        {SERVICES.map((s) => <option key={s.title}>{s.title}</option>)}
      </select>
      <textarea name="message" placeholder="Your Message *" rows={5} maxLength={2000} className={`${inputCls} sm:col-span-2`} required />
      {state === "error" && <p className="text-sm text-destructive sm:col-span-2">{err}</p>}
      <button
        type="submit"
        disabled={state === "sending"}
        className="inline-flex items-center justify-center gap-2 rounded-sm bg-ink px-8 py-4 font-bold uppercase text-primary transition-colors hover:bg-primary hover:text-primary-foreground disabled:opacity-60 sm:col-span-2 sm:justify-self-start"
      >
        {state === "sending" ? "Sending…" : "Submit Now"} <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}
