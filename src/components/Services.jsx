import { services } from '../data/services';

export default function Services() {
  return (
    <section className="section section-services" id="services">
      <div className="container section-head">
        <span className="section-label">OUR SERVICES</span>
        <h2>Industrial Signage Capabilities</h2>
      </div>

      <div className="container">
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
