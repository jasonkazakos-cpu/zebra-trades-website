import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the Zebra Trades Privacy Policy to understand how we collect, use and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-ink">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            tone="light"
            eyebrow="Legal"
            title="Privacy Policy"
            subtitle="Last Updated: June 2026"
          />
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl space-y-10 text-sm leading-relaxed text-slate sm:text-base">

            <div>
              <h2 className="font-display text-xl font-bold uppercase tracking-tight text-ink sm:text-2xl">
                Introduction
              </h2>
              <p className="mt-3">
                At {siteConfig.name}, we are committed to protecting your
                privacy and handling your personal information responsibly.
              </p>
              <p className="mt-3">
                This Privacy Policy explains how we collect, use and protect
                your information when you use our website or contact us
                regarding our services.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold uppercase tracking-tight text-ink sm:text-2xl">
                Who We Are
              </h2>
              <p className="mt-3">
                {siteConfig.name}
                <br />
                Home Improvement Specialists
                <br />
                Serving {siteConfig.county} and surrounding areas.
              </p>
              <p className="mt-3">
                For any privacy-related enquiries, please contact us via the{" "}
                <Link href="/contact" className="font-medium text-accent underline-offset-4 hover:underline">
                  Contact page
                </Link>
                .
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold uppercase tracking-tight text-ink sm:text-2xl">
                Information We Collect
              </h2>
              <p className="mt-3">We may collect:</p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5">
                <li>Name</li>
                <li>Email address</li>
                <li>Telephone number</li>
                <li>Property address</li>
                <li>Project details</li>
                <li>Photos uploaded through quotation forms</li>
                <li>Information submitted through contact forms</li>
              </ul>
              <p className="mt-3">
                We do not collect sensitive personal information unless
                voluntarily provided by you.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold uppercase tracking-tight text-ink sm:text-2xl">
                How We Use Your Information
              </h2>
              <p className="mt-3">We use your information to:</p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5">
                <li>Respond to enquiries</li>
                <li>Provide quotations</li>
                <li>Arrange surveys and appointments</li>
                <li>Deliver our services</li>
                <li>Improve our website and customer experience</li>
                <li>Comply with legal obligations</li>
              </ul>
              <p className="mt-3">
                We will never sell your personal information to third
                parties.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold uppercase tracking-tight text-ink sm:text-2xl">
                Website Analytics
              </h2>
              <p className="mt-3">
                Our website may use analytics tools to understand how
                visitors use the site. This information is anonymous and
                helps improve website performance and user experience.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold uppercase tracking-tight text-ink sm:text-2xl">
                Cookies
              </h2>
              <p className="mt-3">Our website may use cookies to:</p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5">
                <li>Improve website functionality</li>
                <li>Analyse website traffic</li>
                <li>Remember user preferences</li>
              </ul>
              <p className="mt-3">
                Visitors may disable cookies through their browser settings
                if preferred.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold uppercase tracking-tight text-ink sm:text-2xl">
                Data Storage &amp; Security
              </h2>
              <p className="mt-3">
                We take reasonable steps to protect personal information
                from:
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5">
                <li>Unauthorised access</li>
                <li>Loss</li>
                <li>Misuse</li>
                <li>Disclosure</li>
              </ul>
              <p className="mt-3">
                While we take security seriously, no internet transmission
                can be guaranteed as completely secure.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold uppercase tracking-tight text-ink sm:text-2xl">
                Third Party Services
              </h2>
              <p className="mt-3">
                Our website may contain links to third-party websites
                including:
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5">
                <li>Facebook</li>
                <li>Google</li>
                <li>Other external service providers</li>
              </ul>
              <p className="mt-3">
                We are not responsible for the privacy practices of
                third-party websites.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold uppercase tracking-tight text-ink sm:text-2xl">
                Your Rights
              </h2>
              <p className="mt-3">
                Under UK GDPR and Data Protection legislation, you have the
                right to:
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5">
                <li>Request access to your personal data</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to certain processing activities</li>
                <li>Request information about how your data is used</li>
              </ul>
              <p className="mt-3">
                Requests can be made through our{" "}
                <Link href="/contact" className="font-medium text-accent underline-offset-4 hover:underline">
                  Contact page
                </Link>
                .
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold uppercase tracking-tight text-ink sm:text-2xl">
                Contact Information
              </h2>
              <p className="mt-3">
                If you have any questions about this Privacy Policy or your
                personal data, please contact {siteConfig.name} through the{" "}
                <Link href="/contact" className="font-medium text-accent underline-offset-4 hover:underline">
                  website contact form
                </Link>
                .
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold uppercase tracking-tight text-ink sm:text-2xl">
                Policy Updates
              </h2>
              <p className="mt-3">
                We may update this Privacy Policy from time to time. Any
                updates will be published on this page.
              </p>
            </div>

          </div>
        </Container>
      </section>
    </>
  );
}
