const reasons = [
  "Professional Design",
  "In-House Manufacturing",
  "Skilled Installation Teams",
  "Premium Materials",
  "Fast Turnaround",
  "Built for Visibility",
];

export default function WhyChooseUs() {
  return (
    <section className="section why-section">
      <div className="container">
        <div className="section-heading reveal">
          <span className="eyebrow">Why Signworx</span>
          <h2>PRACTICAL QUALITY WHERE IT COUNTS</h2>
        </div>

        <div className="why-list">
          {reasons.map((reason, index) => (
            <article className="why-block reveal" key={reason}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{reason}</h3>
              <p>
                Signage decisions are handled with clear thinking, strong production control and a
                focus on visibility in the real world.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
