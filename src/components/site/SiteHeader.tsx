import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Mail, Phone, Menu, X, ArrowRight } from "lucide-react";
import logo from "@/assets/sterling-logo.png.asset.json";
import { SITE } from "@/lib/site";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <div className="hidden bg-ink text-ink-foreground md:block">
        <div className="container-site flex h-11 items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" /> {SITE.address}
            </span>
            <span className="h-5 w-px bg-primary" />
            <a href={SITE.emailHref} className="flex items-center gap-2 hover:text-primary">
              <Mail className="h-4 w-4 text-primary" /> {SITE.email}
            </a>
          </div>
          <a href={SITE.phoneHref} className="hidden items-center gap-2 font-semibold hover:text-primary lg:flex">
            <Phone className="h-4 w-4 text-primary" /> {SITE.phoneDisplay}
          </a>
        </div>
      </div>
      <div className="sticky top-0 z-40 bg-background shadow-sm">
        <div className="container-site flex h-24 items-center justify-between">
          <Link to="/" aria-label={SITE.name}>
            <img src={logo.url} alt={`${SITE.name} logo`} className="h-14 w-auto" width={840} height={210} />
          </Link>
          <nav className="hidden items-center gap-8 lg:flex">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: true }}
                className="text-[17px] font-medium text-foreground transition-colors hover:text-primary"
                activeProps={{ className: "text-primary" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <Link
            to="/contact"
            className="hidden items-center gap-2 rounded-sm bg-ink px-7 py-4 text-sm font-bold uppercase text-primary transition-colors hover:bg-primary hover:text-primary-foreground lg:inline-flex"
          >
            Consult an Expert <ArrowRight className="h-4 w-4" />
          </Link>
          <button
            className="rounded-sm bg-ink p-2.5 text-primary lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <nav className="border-t bg-background lg:hidden">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: true }}
                className="block border-b px-6 py-3 font-medium"
                activeProps={{ className: "text-primary" }}
              >
                {n.label}
              </Link>
            ))}
            <a href={SITE.phoneHref} className="block px-6 py-3 font-semibold text-primary">
              Call {SITE.phoneDisplay}
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
