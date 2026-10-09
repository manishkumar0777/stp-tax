import type { Metadata } from "next";
import { MapPin, Mail, Phone } from "lucide-react";
import { PageBanner, ContactForm } from "@/components/site/Sections";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us — Sterling Tax Partner",
  description:
    "Call 7439786257 or email sterlingtaxpartner@gmail.com. Visit us at Stephen House, BBD Bagh, Kolkata.",
};

export default function ContactPage() {
  const cards = [
    { icon: MapPin, t: "Our Address", v: SITE.address },
    { icon: Phone, t: "Phone Number", v: SITE.phoneDisplay, href: SITE.phoneHref, v2: SITE.phone2Display, href2: SITE.phone2Href },
    { icon: Mail, t: "Email Address", v: SITE.email, href: SITE.emailHref },
  ];
  return (
    <>
      <PageBanner title="Contact Us" subtitle="Get In Touch Today" />
      <section className="py-24">
        <div className="container-site">
          <div className="grid gap-7 md:grid-cols-3">
            {cards.map((c) => (
              <div
                key={c.t}
                className="flex flex-col items-center rounded-sm bg-secondary p-9 text-center"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <c.icon className="h-7 w-7" />
                </span>
                <h2 className="mt-5 text-xl font-bold">{c.t}</h2>
                {c.href ? (
                  <div className="mt-2 flex flex-col items-center gap-1">
                    <a
                      href={c.href}
                      className="break-all text-muted-foreground hover:text-primary"
                    >
                      {c.v}
                    </a>
                    {c.href2 && (
                      <a
                        href={c.href2}
                        className="break-all text-muted-foreground hover:text-primary"
                      >
                        {c.v2}
                      </a>
                    )}
                  </div>
                ) : (
                  <p className="mt-2 text-muted-foreground">{c.v}</p>
                )}
              </div>
            ))}
          </div>
          <div className="mt-20 grid gap-12 lg:grid-cols-2">
            <div>
              <p className="eyebrow">Get in touch</p>
              <h2 className="mb-8 mt-3 text-3xl font-bold md:text-4xl">Send Us a Message</h2>
              <ContactForm />
            </div>
            <iframe
              title="Office location map"
              src="https://www.google.com/maps?q=Stephen+House,+BBD+Bagh,+Kolkata+700001&output=embed"
              className="h-[460px] w-full rounded-sm border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}
