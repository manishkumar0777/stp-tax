import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";
import { SITE, SERVICES } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-muted">
      <div className="container-site grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-3">
          <h3 className="text-2xl font-bold text-ink-foreground">
            Sterling <span className="text-primary">Tax Partner</span>
          </h3>
          <p className="mt-4 leading-relaxed">
            {SITE.tagline}. We simplify business formation, taxation and compliance for
            entrepreneurs, startups and established businesses.
          </p>
        </div>
        <div className="lg:col-span-2">
          <h4 className="mb-5 text-lg font-bold text-ink-foreground">Links & Services</h4>
          <ul className="space-y-3">
            {[
              ["/", "Home"],
              ["/about", "About Us"],
              ["/services", "All Services"],
              ["/contact", "Contact Us"],
            ].map(([to, l]) => (
              <li key={to}>
                <Link href={to as string} className="hover:text-primary">
                  » {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-3">
          <h4 className="mb-5 text-lg font-bold text-ink-foreground">Contact Info</h4>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
              {SITE.address}
            </li>
            <li>
              <div className="flex flex-col gap-1">
                <a href={SITE.phoneHref} className="flex gap-3 hover:text-primary">
                  <Phone className="h-5 w-5 text-primary" />
                  {SITE.phoneDisplay}
                </a>
                <a href={SITE.phone2Href} className="flex gap-3 hover:text-primary">
                  <Phone className="h-5 w-5 opacity-0" />
                  {SITE.phone2Display}
                </a>
              </div>
            </li>
            <li>
              <a href={SITE.emailHref} className="flex gap-3 break-all hover:text-primary">
                <Mail className="h-5 w-5 shrink-0 text-primary" />
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>
        <div className="lg:col-span-4">
          <h4 className="mb-5 text-lg font-bold text-ink-foreground">Locate Us</h4>
          <iframe
            title="Office location map"
            src="https://www.google.com/maps?q=Stephen+House,+BBD+Bagh,+Kolkata+700001&output=embed"
            className="aspect-square w-full rounded-sm border-0"
            loading="lazy"
          />
        </div>
      </div>
      <div className="border-t border-ink-muted/20">
        <div className="container-site py-5 text-center text-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p>
            Designed & Developed by{" "}
            <a 
              href="https://youlearn.in" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary hover:underline font-semibold"
            >
              YouLearn
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
