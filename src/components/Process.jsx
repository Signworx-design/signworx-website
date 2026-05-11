const steps = [
  {
    number: "01",
    title: "Consultation",
    copy: "We define the location, purpose, scale, materials and visibility goals before anything goes into production.",
  },
  {
    number: "02",
    title: "Quote & Payment",
    copy: "You receive a formal quote to accept, with payment made according to our T&Cs before the project moves into design.",
  },
  {
    number: "03",
    title: "Design & Approval",
    copy: "Your concept is shaped into practical artwork with clear sizing, finishes and final sign-off.",
  },
  {
    number: "04",
    title: "Production",
    copy: "Printing, cutting, fabrication and finishing happen in-house with attention to the working environment.",
  },
  {
    number: "05",
    title: "Installation",
    copy: "Our team installs with clean alignment, strong fixings and a finish built to represent your business.",
  },
];

export default function Process() {
  return (
    <section className="section process" id="process">
      <div className="container">
        <div className="section-heading reveal">
          <span className="eyebrow">Workshop Workflow</span>
          <h2>FROM DESIGN TO INSTALLATION</h2>
          <p>
            A signage project should feel controlled from the first measurement to the final fixing.
          </p>
        </div>

        <div className="process-timeline">
          {steps.map((step) => (
            <article className="process-step reveal" key={step.number}>
              <div className="process-number">{step.number}</div>
              <div>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
