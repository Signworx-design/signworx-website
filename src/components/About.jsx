import { useEffect, useState, useRef } from 'react';

export default function About() {
  const [statsAnimated, setStatsAnimated] = useState(false);
  const [stats, setStats] = useState({
    years: 0,
    projects: 0,
    clients: 0
  });
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !statsAnimated) {
            setStatsAnimated(true);
            animateStats();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [statsAnimated]);

  const animateStats = () => {
    const targets = { years: 30, projects: 5000, clients: 1000 };
    const duration = 2000;
    const steps = duration / 30;

    Object.keys(targets).forEach(key => {
      const target = targets[key];
      const stepIncrement = target / steps;
      let current = 0;

      const counter = setInterval(() => {
        current += stepIncrement;
        if (current >= target) {
          setStats(prev => ({ ...prev, [key]: target }));
          clearInterval(counter);
        } else {
          setStats(prev => ({ ...prev, [key]: Math.floor(current) }));
        }
      }, 30);
    });
  };

  return (
    <section className="section" id="about">
      <div className="container about-inner">
        <div className="about-image"></div>

        <div className="about-copy">
          <span className="section-label">BUILT ON EXPERIENCE</span>
          <h2>Signworx delivers industrial-grade signage built to last.</h2>
          <p>Driven by 30 years of local craft, we manufacture in-house, manage installations and support clients nationwide with premium production standards.</p>
          <ul className="about-list">
            <li>30 years industry experience</li>
            <li>In-house manufacturing</li>
            <li>Professional installations</li>
            <li>Nationwide service coverage</li>
            <li>Premium materials only</li>
            <li>Fast turnaround times</li>
          </ul>

          <div className="stats-grid" ref={statsRef}>
            <div className="stat-card">
              <strong><span className="stat-number">{stats.years}</span><span className="stat-symbol">+</span></strong>
              <span>Years Experience</span>
            </div>
            <div className="stat-card">
              <strong><span className="stat-number">{stats.projects}</span><span className="stat-symbol">+</span></strong>
              <span>Projects Delivered</span>
            </div>
            <div className="stat-card">
              <strong><span className="stat-number">{stats.clients}</span><span className="stat-symbol">+</span></strong>
              <span>Clients Served</span>
            </div>
            <div className="stat-card">
              <strong>24<span className="stat-symbol">/7</span></strong>
              <span>Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
