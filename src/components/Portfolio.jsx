import { projects } from '../data/projects';

export default function Portfolio() {
  return (
    <section className="section section-portfolio" id="portfolio">
      <div className="container section-head">
        <span className="section-label">RECENT PROJECTS</span>
        <h2>Portfolio of Completed Signage Work</h2>
        <p className="section-subtitle">Real installations from shopfronts, glass graphics, vehicle branding and in-store wayfinding.</p>
      </div>

      <div className="container">
        <div className="portfolio-grid">
          {projects.map(project => (
            <article
              key={project.id}
              className="portfolio-item"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(11,11,11,0.45), rgba(11,11,11,0.75)), url('/assets/images/${project.image}')`
              }}
            >
              <div className="portfolio-meta">
                <span>{project.category}</span>
                <h3>{project.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
