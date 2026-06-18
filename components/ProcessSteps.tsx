export type Step = {
  number: string;
  title: string;
  body: string;
};

const defaultSteps: Step[] = [
  {
    number: "01",
    title: "Get in touch",
    body: "Call, email or send an enquiry through the website with a few details about the job.",
  },
  {
    number: "02",
    title: "Free, fixed-price quote",
    body: "We'll arrange a visit or call, then send a written quote with no obligation to go ahead.",
  },
  {
    number: "03",
    title: "Work carried out",
    body: "We turn up when we say we will and complete the job to a high standard, with minimal disruption.",
  },
  {
    number: "04",
    title: "Tidy up & aftercare",
    body: "We leave your home as we found it, and you can call us again if anything needs a second look.",
  },
];

export default function ProcessSteps({ steps = defaultSteps }: { steps?: Step[] }) {
  const cols = steps.length >= 5 ? "lg:grid-cols-5" : "lg:grid-cols-4";
  return (
    <ol className={`grid gap-8 sm:grid-cols-2 ${cols}`}>
      {steps.map((step) => (
        <li key={step.number} className="relative pl-0">
          <span className="font-mono text-sm text-accent">{step.number}</span>
          <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-ink">
            {step.title}
          </h3>
          <p className="mt-2 text-sm text-slate leading-relaxed">{step.body}</p>
        </li>
      ))}
    </ol>
  );
}
