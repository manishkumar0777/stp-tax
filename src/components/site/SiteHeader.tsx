"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MapPin, Mail, Phone, Menu, X, ArrowRight } from "lucide-react";
import logo from "@/assets/sterling-logo.png";
import { SITE } from "@/lib/site";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact Us" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

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
          <a
            href={SITE.phoneHref}
            className="hidden items-center gap-2 font-semibold hover:text-primary lg:flex"
          >
            <Phone className="h-4 w-4 text-primary" /> {SITE.phoneDisplay}
          </a>
        </div>
      </div>
      <div className="sticky top-0 z-40 bg-background shadow-sm">
        <div className="container-site flex h-24 items-center justify-between">
          <Link href="/" aria-label={SITE.name}>
            <img
              src={(logo as any).src || logo}
              alt={`${SITE.name} logo`}
              className="h-14 w-auto"
              width={840}
              height={210}
            />
          </Link>
          <nav className="hidden items-center gap-8 lg:flex">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className={`text-[17px] font-medium transition-colors hover:text-primary ${pathname === n.href ? "text-primary" : "text-foreground"}`}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/contact"
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
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className={`block border-b px-6 py-3 font-medium ${pathname === n.href ? "text-primary" : ""}`}
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
