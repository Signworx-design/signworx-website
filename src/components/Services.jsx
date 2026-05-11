import { useState } from "react";
import { services } from "../data/services";

export default function Services() {
  const [openService, setOpenService] = useState(0);

  return (
    <section className="section services-section" id="services">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Production Capabilities</span>
          <h2>SIGNAGE BUILT FOR THE REAL WORLD</h2>
          <p>
            From vehicle fleets to shopfronts, glass, safety signage and apparel, every service is
            practical, visible and manufactured with intent.
          </p>
        </div>

        <div className="services-list">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isOpen = openService === index;

            return (
              <article className={`service-row ${isOpen ? "is-open" : ""}`} key={service.title}>
                <button
                  className="service-trigger"
                  onClick={() => setOpenService(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                >
                  <span className="service-number">{String(index + 1).padStart(2, "0")}</span>
                  <Icon size={26} strokeWidth={1.8} />
                  <h3>{service.title}</h3>
                  <span className="service-toggle">{isOpen ? "Close" : "View"}</span>
                </button>

                <div className="service-details" aria-hidden={!isOpen}>
                  <p>{service.description}</p>
                </div>
              </article>
            );
          })}
        </div>

        <p className="services-more">And much more.</p>
      </div>
    </section>
  );
}
