import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import Container from "@/components/Container";
import Logo from "@/components/Logo";
import SwatchStrip from "@/components/SwatchStrip";
import FacebookIcon from "@/components/icons/FacebookIcon";
import { navLinks, siteConfig } from "@/data/site";
import { services } from "@/data/services";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-paper">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-4 text-sm text-paper/70 max-w-xs">
            {siteConfig.motto}
          </p>
          <p className="mt-4 text-sm text-paper/60 max-w-xs">
            Home improvements for {siteConfig.baseTown} and{" "}
            {siteConfig.county}, backed by {siteConfig.yearsTrading} years on
            the tools.
          </p>
          <a
            href={siteConfig.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Zebra Trades on Facebook (opens in a new tab)"
            title="Zebra Trades on Facebook"
            className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-paper/80 hover:text-accent transition-colors"
          >
            <FacebookIcon className="size-4" />
            Follow Zebra Trades on Facebook
          </a>
          <a
            href={siteConfig.googleReadReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Read Zebra Trades Google reviews (opens in a new tab)"
            className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-paper/80 hover:text-accent transition-colors"
          >
            ⭐ Read Our Google Reviews
          </a>
          <a
            href={siteConfig.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Leave a Google review for Zebra Trades (opens in a new tab)"
            className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-paper/80 hover:text-accent transition-colors"
          >
            ⭐ Leave Us a Google Review
          </a>
          <a
            href={siteConfig.facebookReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Read Zebra Trades reviews on Facebook (opens in a new tab)"
            className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-paper/80 hover:text-accent transition-colors"
          >
            ⭐ Read Our Reviews on Facebook
          </a>
        </div>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-paper/80 hover:text-paper transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Our Services
          </h3>
          <ul className="mt-4 space-y-2.5">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={service.href ?? `/services#${service.slug}`}
                  className="text-sm text-paper/80 hover:text-paper transition-colors"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Get In Touch
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-paper/80">
            <li className="flex items-start gap-2.5">
              <Phone className="size-4 mt-0.5 shrink-0" strokeWidth={1.75} aria-hidden="true" />
              <a href={siteConfig.phoneHref} className="hover:text-paper transition-colors">
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="size-4 mt-0.5 shrink-0" strokeWidth={1.75} aria-hidden="true" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-paper transition-colors">
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="size-4 mt-0.5 shrink-0" strokeWidth={1.75} aria-hidden="true" />
              <span>
                Covering {siteConfig.baseTown} &amp; {siteConfig.county}
              </span>
            </li>
          </ul>
        </div>
      </Container>

      <SwatchStrip />

      <Container className="flex flex-col items-center gap-3 py-5 text-xs text-paper/55 sm:flex-row sm:justify-between">
        <p>
          &copy; {year} {siteConfig.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link href="/privacy-policy" className="hover:text-paper transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms-and-conditions" className="hover:text-paper transition-colors">
            Terms &amp; Conditions
          </Link>
        </div>
        <p>{siteConfig.motto}</p>
      </Container>
    </footer>
  );
}
