import { Link } from "@tanstack/react-router";
import { MapPin, Mail, Phone } from "lucide-react";
import { SITE, SERVICES } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-muted">
      <div className="container-site grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="text-2xl font-bold text-ink-foreground">
            Sterling <span className="text-primary">Tax Partner</span>
          </h3>
          <p className="mt-4 leading-relaxed">
            {SITE.tagline}. We simplify business formation, taxation and compliance for entrepreneurs,
            startups and established businesses.
          </p>
        </div>
        <div>
          <h4 className="mb-5 text-lg font-bold text-ink-foreground">Quick Links</h4>
          <ul className="space-y-3">
            {[
              ["/", "Home"],
              ["/about", "About Us"],
              ["/services", "Services"],
              ["/contact", "Contact Us"],
            ].map(([to, l]) => (
              <li key={to}>
                <Link to={to as "/"} className="hover:text-primary">» {l}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-5 text-lg font-bold text-ink-foreground">Our Services</h4>
          <ul className="space-y-3">
            {SERVICES.map((s) => (
              <li key={s.title}>
                <Link to="/services" className="hover:text-primary">» {s.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-5 text-lg font-bold text-ink-foreground">Contact Info</h4>
          <ul className="space-y-4">
            <li className="flex gap-3"><MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />{SITE.address}</li>
            <li><a href={SITE.phoneHref} className="flex gap-3 hover:text-primary"><Phone className="h-5 w-5 text-primary" />{SITE.phoneDisplay}</a></li>
            <li><a href={SITE.emailHref} className="flex gap-3 break-all hover:text-primary"><Mail className="h-5 w-5 shrink-0 text-primary" />{SITE.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-muted/20">
        <div className="container-site py-5 text-center text-sm">
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
