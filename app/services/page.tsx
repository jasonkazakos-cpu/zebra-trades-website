import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import CtaBand from "@/components/CtaBand";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Handyman, kitchen installation, plumbing, garden rooms, air conditioning and more — home improvement services across Cheshunt and Hertfordshire.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-ink">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            tone="light"
            eyebrow="What We Do"
            title="Our Services"
            subtitle="Nine ways we help homeowners across Cheshunt and Hertfordshire, all backed by written, fixed-price quotes."
          />
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} variant="full" />
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="Not Sure Which Service You Need?"
        subtitle="Describe the job and we'll point you in the right direction, with a free, fixed-price quote."
      />
    </>
  );
}
