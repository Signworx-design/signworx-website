const reasons = [
  {
    id: 1,
    icon: '🧭',
    title: 'Professional Design',
    description: 'Industry-led signage design that elevates visibility and brand message.'
  },
  {
    id: 2,
    icon: '🏭',
    title: 'In-House Production',
    description: 'Centralised workshop control for consistent quality and on-time delivery.'
  },
  {
    id: 3,
    icon: '🧰',
    title: 'Installation Teams',
    description: 'Experienced installers handling complex shopfronts, hoardings and hoist work.'
  },
  {
    id: 4,
    icon: '⚡',
    title: 'Fast Turnaround',
    description: 'Efficient workflow from order to site installation without compromising finish.'
  },
  {
    id: 5,
    icon: '🔧',
    title: 'Premium Materials',
    description: 'Durable substrates, illumination systems and coatings built for harsh conditions.'
  },
  {
    id: 6,
    icon: '🚚',
    title: 'Nationwide Service',
    description: "Project management and installations across South Africa's major centres."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="section">
      <div className="container section-head">
        <span className="section-label">WHY CHOOSE US</span>
        <h2>Manufacturing. Installation. Reliability.</h2>
      </div>

      <div className="container">
        <div className="reason-grid">
          {reasons.map(reason => (
            <article key={reason.id} className="reason-card">
              <div className="reason-icon">{reason.icon}</div>
              <div>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
