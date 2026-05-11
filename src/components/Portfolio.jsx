import { projects } from "../data/projects";

export default function Portfolio() {
  return (
    <section className="section portfolio-section" id="work">
      <div className="container">
        <div className="section-heading reveal">
          <span className="eyebrow">Selected Work</span>
          <h2>PROJECTS WITH STREET PRESENCE</h2>
          <p>
            A focused look at signage categories that help businesses become easier to find,
            remember and trust.
          </p>
        </div>

        <div className="portfolio-grid">
          {projects.map((project) => (
            <article className="project-card reveal" key={project.title}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay" />
              </div>
              <div className="project-copy">
                <span>{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
