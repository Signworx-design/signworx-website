import { AlertTriangle, Brush, Droplets, ShieldCheck } from "lucide-react";

const cleaningSteps = [
  "Clean ACP signs with water and pH-neutral soap to remove atmospheric fallout.",
  "Use a soft brush attachment on a telescopic water-fed pole for high signs.",
  "Increase cleaning frequency for matte colours, charcoal and polluted fallout areas.",
  "Make cleaning part of normal store or site maintenance before buildup damages the coating.",
];

const falloutItems = ["Sulphur dioxide", "Nitrogen oxides", "Chlorides"];

export default function MaintenanceOfSigns() {
  return (
    <section className="section maintenance-section" id="maintenance">
      <div className="container">
        <div className="maintenance-hero reveal">
          <div>
            <span className="eyebrow">Care Guide</span>
            <h2>MAINTENANCE OF SIGNS</h2>
            <p>
              Regular cleaning is essential for ACP and coated signage, especially matte finishes
              and charcoal colours. Dust, pollution and atmospheric fallout can sit on the surface,
              dull the colour and eventually damage the protective coating.
            </p>
          </div>

          <div className="maintenance-frequency">
            <Droplets size={34} strokeWidth={1.8} />
            <span>High fallout areas</span>
            <strong>Clean up to once a month</strong>
          </div>
        </div>

        <div className="maintenance-grid">
          <article className="maintenance-panel reveal">
            <AlertTriangle size={28} strokeWidth={1.8} />
            <h3>Why cleaning matters</h3>
            <p>
              South Africa, especially Johannesburg and Pretoria, is known for heavy atmospheric
              fallout. Once pollution builds up, UV exposure reacts with PE and PVDF coatings. The
              surface can look faded even when much of the problem is fallout hiding the colour.
            </p>
            <div className="fallout-list" aria-label="Common fallout substances">
              {falloutItems.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>

          <article className="maintenance-panel reveal">
            <Brush size={28} strokeWidth={1.8} />
            <h3>Matte and charcoal finishes</h3>
            <p>
              Matte surfaces have microscopic indentations that create the low-gloss effect, but
              those tiny recesses also collect fallout more easily. Charcoal and anthracite colours
              show small tonal changes more visibly because they include sensitive green and blue
              pigment components.
            </p>
          </article>

          <article className="maintenance-panel reveal">
            <ShieldCheck size={28} strokeWidth={1.8} />
            <h3>Warranty expectations</h3>
            <p>
              Supplier warranties for coatings and composite materials commonly require regular
              cleaning and exclude damage caused by polluted environments, chemical exposure or
              unequal sunlight exposure. Long-lasting products still need routine care.
            </p>
          </article>
        </div>

        <div className="cleaning-guide reveal">
          <div>
            <span className="eyebrow">Recommended Routine</span>
            <h3>KEEP SIGNS LOOKING NEW FOR LONGER</h3>
          </div>
          <ul>
            {cleaningSteps.map((step) => (
              <li key={step}>
                <span aria-hidden="true" />
                {step}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
