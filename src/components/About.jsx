import { CheckCircle2 } from "lucide-react";
import shopfrontSign from "../assets/images/shopfront-sign.jpg";

const features = [
  "In-house production",
  "Professional installation",
  "Premium materials",
  "Fast turnaround",
  "Practical signage advice",
];

export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container about-layout">
        <div className="about-media reveal">
          <img src={shopfrontSign} alt="Signworx shopfront signage work" />
          <div className="about-stamp">
            <strong>30+</strong>
            <span>Years on the tools</span>
          </div>
        </div>

        <div className="about-copy reveal">
          <span className="eyebrow">BUILT ON EXPERIENCE</span>
          <h2>BUILT ON EXPERIENCE</h2>
          <p>
            Signworx has spent over 30 years helping businesses stand out with professional signage,
            vehicle branding, lightboxes, large format printing and custom manufactured branding
            solutions.
          </p>

          <ul className="feature-list">
            {features.map((feature) => (
              <li key={feature}>
                <CheckCircle2 size={18} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
