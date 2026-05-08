export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>
      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="hero-eyebrow">30 YEARS OF SIGNAGE EXPERIENCE</span>
          <h1>PROFESSIONAL SIGNAGE & BRANDING SOLUTIONS</h1>
          <p>Custom manufactured signage, vehicle branding, lightboxes, CNC lettering and large format print solutions built for businesses that need to be seen.</p>
          <div className="hero-actions">
            <a href="mailto:info@signworx.co.za?subject=Request%20Quote" className="btn-primary">
              GET A QUOTE
            </a>
            <button onClick={() => scrollToSection('portfolio')} className="btn-outline">
              VIEW OUR WORK
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="work-card">
            <div className="work-card-header">Premium Signage Showcase</div>
            <div className="work-card-body">
              <div className="sign-panel">
                <div className="sign-panel-mark">S</div>
                <div className="sign-panel-text">signworx</div>
              </div>
              <div className="sign-details">
                <p>Illuminated shop sign</p>
                <p>Vehicle fleet wrap</p>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-stats">
          <div>30+ Years Experience</div>
          <div>5000+ Projects</div>
          <div>In-House Manufacturing</div>
        </div>
      </div>
    </section>
  );
}
