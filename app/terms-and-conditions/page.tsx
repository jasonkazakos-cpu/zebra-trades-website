import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Read the Zebra Trades Terms & Conditions covering quotations, pricing, payments, guarantees and customer responsibilities.",
};

const sections = [
  {
    title: "1. Introduction",
    body: (
      <>
        <p className="mt-3">
          These Terms &amp; Conditions apply to all services provided by{" "}
          {siteConfig.name}.
        </p>
        <p className="mt-3">
          By requesting a quotation, booking services or using this website,
          you agree to these Terms &amp; Conditions.
        </p>
      </>
    ),
  },
  {
    title: "2. Quotations",
    body: (
      <ul className="mt-3 list-disc space-y-1.5 pl-5">
        <li>All quotations are valid for 30 days unless otherwise stated.</li>
        <li>Quotations are based on the information available at the time.</li>
        <li>Additional work requested after a quotation has been accepted may be charged separately.</li>
        <li>Verbal estimates are provided as guidance only and are not binding quotations.</li>
      </ul>
    ),
  },
  {
    title: "3. Pricing",
    body: (
      <ul className="mt-3 list-disc space-y-1.5 pl-5">
        <li>Prices displayed on the website are guide prices only unless otherwise stated.</li>
        <li>Final pricing may vary depending on site conditions, access, materials and project requirements.</li>
        <li>Fixed quotations will be provided before work begins where appropriate.</li>
      </ul>
    ),
  },
  {
    title: "4. Deposits & Payments",
    body: (
      <ul className="mt-3 list-disc space-y-1.5 pl-5">
        <li>Certain projects may require a deposit before work commences.</li>
        <li>Deposits are non-refundable once materials have been ordered.</li>
        <li>Payment terms will be agreed before work starts.</li>
        <li>Final payment is due upon completion unless otherwise agreed in writing.</li>
      </ul>
    ),
  },
  {
    title: "5. Customer Responsibilities",
    body: (
      <>
        <p className="mt-3">Customers are responsible for:</p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5">
          <li>Providing safe access to the property.</li>
          <li>Ensuring adequate parking where possible.</li>
          <li>Informing {siteConfig.name} of any known issues affecting the work.</li>
          <li>Removing valuables or fragile items from work areas.</li>
        </ul>
      </>
    ),
  },
  {
    title: "6. Delays",
    body: (
      <>
        <p className="mt-3">
          {siteConfig.name} will not be held responsible for delays caused
          by:
        </p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5">
          <li>Adverse weather</li>
          <li>Supplier shortages</li>
          <li>Material delays</li>
          <li>Access restrictions</li>
          <li>Circumstances beyond our reasonable control</li>
        </ul>
      </>
    ),
  },
  {
    title: "7. Additional Works",
    body: (
      <>
        <p className="mt-3">Where unforeseen issues are discovered during a project:</p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5">
          <li>Work may be paused.</li>
          <li>Additional quotations may be required.</li>
          <li>Customers will be informed before additional chargeable work proceeds.</li>
        </ul>
      </>
    ),
  },
  {
    title: "8. Materials",
    body: (
      <>
        <p className="mt-3">Unless otherwise agreed:</p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5">
          <li>Materials remain the property of {siteConfig.name} until paid for in full.</li>
          <li>Material availability may affect project timescales.</li>
          <li>Equivalent products may be substituted where necessary following customer approval.</li>
        </ul>
      </>
    ),
  },
  {
    title: "9. Guarantees",
    body: (
      <>
        <p className="mt-3">
          {siteConfig.name} aims to provide high-quality workmanship.
        </p>
        <p className="mt-3">
          Any workmanship guarantees provided will be specified within
          individual quotations or invoices.
        </p>
        <p className="mt-3">
          Manufacturer warranties remain subject to the manufacturer&apos;s
          terms and conditions.
        </p>
      </>
    ),
  },
  {
    title: "10. Appliance Installation",
    body: (
      <ul className="mt-3 list-disc space-y-1.5 pl-5">
        <li>Appliance installation prices are based on standard installations.</li>
        <li>Additional plumbing, electrical or cabinet modifications may incur extra charges.</li>
        <li>Gas appliances require installation by a Gas Safe registered engineer.</li>
      </ul>
    ),
  },
  {
    title: "11. Media Walls & Bespoke Installations",
    body: (
      <ul className="mt-3 list-disc space-y-1.5 pl-5">
        <li>Media wall pricing is based on standard specifications.</li>
        <li>Bespoke designs may require additional design, materials and installation costs.</li>
        <li>Decorative finishes are quoted separately unless specifically included.</li>
      </ul>
    ),
  },
  {
    title: "12. Garden Rooms, Pergolas & Large Projects",
    body: (
      <ul className="mt-3 list-disc space-y-1.5 pl-5">
        <li>Site surveys may be required before final quotations are issued.</li>
        <li>Planning permission and building regulation requirements remain the responsibility of the property owner unless otherwise agreed.</li>
      </ul>
    ),
  },
  {
    title: "13. Website Information",
    body: (
      <>
        <p className="mt-3">
          While {siteConfig.name} makes every effort to ensure information
          is accurate:
        </p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5">
          <li>Prices may change without notice.</li>
          <li>Product information may vary.</li>
          <li>Website content is provided for general information only.</li>
        </ul>
      </>
    ),
  },
  {
    title: "14. Limitation of Liability",
    body: (
      <>
        <p className="mt-3">To the maximum extent permitted by law:</p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5">
          <li>{siteConfig.name} shall not be liable for indirect or consequential losses.</li>
          <li>Liability shall not exceed the value of the services provided.</li>
        </ul>
        <p className="mt-3">
          Nothing within these Terms excludes any rights provided under UK
          consumer protection legislation.
        </p>
      </>
    ),
  },
  {
    title: "15. Cancellation Policy",
    body: (
      <>
        <p className="mt-3">
          Customers should provide as much notice as possible when
          cancelling appointments.
        </p>
        <p className="mt-3">
          Where materials have already been purchased, reasonable costs may
          be deducted from any refund due.
        </p>
      </>
    ),
  },
  {
    title: "16. Privacy",
    body: (
      <>
        <p className="mt-3">
          Customer information is handled in accordance with the{" "}
          {siteConfig.name} Privacy Policy.
        </p>
        <p className="mt-3">
          Please refer to the{" "}
          <Link href="/privacy-policy" className="font-medium text-accent underline-offset-4 hover:underline">
            Privacy Policy
          </Link>{" "}
          page for further information.
        </p>
      </>
    ),
  },
  {
    title: "17. Governing Law",
    body: (
      <>
        <p className="mt-3">
          These Terms &amp; Conditions are governed by the laws of England
          and Wales.
        </p>
        <p className="mt-3">
          Any disputes shall be subject to the jurisdiction of the courts of
          England and Wales.
        </p>
      </>
    ),
  },
  {
    title: "18. Contact Information",
    body: (
      <p className="mt-3">
        For questions regarding these Terms &amp; Conditions, please contact{" "}
        {siteConfig.name} using the{" "}
        <Link href="/contact" className="font-medium text-accent underline-offset-4 hover:underline">
          website contact page
        </Link>
        .
      </p>
    ),
  },
];

export default function TermsAndConditionsPage() {
  return (
    <>
      <section className="bg-ink">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            tone="light"
            eyebrow="Legal"
            title="Terms & Conditions"
            subtitle="Last Updated: June 2026"
          />
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl space-y-10 text-sm leading-relaxed text-slate sm:text-base">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="font-display text-xl font-bold uppercase tracking-tight text-ink sm:text-2xl">
                  {section.title}
                </h2>
                {section.body}
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
