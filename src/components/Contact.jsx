import { useState } from "react";
import { Mail, MapPin, MessageCircle, Phone, Send, Share2 } from "lucide-react";

const emptyForm = {
  name: "",
  company: "",
  phone: "",
  email: "",
  message: "",
};

const contactEmail = "info@signworx.co.za";

export default function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [sent, setSent] = useState(false);

  const updateField = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const submitForm = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent("Signworx Website Enquiry");
    const body = encodeURIComponent(
      `Name: ${form.name}\nCompany: ${form.company || "Not supplied"}\nPhone: ${form.phone}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    setSent(true);
    setForm(emptyForm);
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-layout">
        <div className="contact-copy reveal">
          <span className="eyebrow">Start a Project</span>
          <h2>READY TO MAKE YOUR BRAND VISIBLE?</h2>
          <p>
            Send through the signage, branding, print or installation work you need quoted. The
            Signworx team will help with practical advice, production and installation.
          </p>

          <div className="contact-methods">
            <a href="tel:+27446951078">
              <Phone size={20} />
              <span>044 695 1078</span>
            </a>
            <a href="mailto:info@signworx.co.za">
              <Mail size={20} />
              <span>info@signworx.co.za</span>
            </a>
            <a href="https://www.facebook.com/Signworx" target="_blank" rel="noreferrer">
              <Share2 size={20} />
              <span>Facebook: Signworx</span>
            </a>
            <div>
              <MapPin size={20} />
              <span>8 Sioux St, Voorbaai, Mossel Bay, 6500</span>
            </div>
          </div>

          <a
            className="quote-button contact-whatsapp"
            href="https://wa.me/27630752497?text=Hello%20Signworx%2C%20I%20would%20like%20to%20request%20a%20quote."
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={18} />
            WhatsApp Us
          </a>
        </div>

        <form className="contact-form reveal" onSubmit={submitForm}>
          <label>
            <span>Name</span>
            <input name="name" value={form.name} onChange={updateField} required />
          </label>
          <label>
            <span>Company</span>
            <input name="company" value={form.company} onChange={updateField} />
          </label>
          <label>
            <span>Phone</span>
            <input name="phone" type="tel" value={form.phone} onChange={updateField} required />
          </label>
          <label>
            <span>Email</span>
            <input name="email" type="email" value={form.email} onChange={updateField} required />
          </label>
          <label className="wide-field">
            <span>Message</span>
            <textarea name="message" rows="6" value={form.message} onChange={updateField} required />
          </label>
          <button className="quote-button submit-button" type="submit">
            <Send size={18} />
            Submit Enquiry
          </button>
          {sent && <p className="success-message">Thank you. Your enquiry has been received.</p>}
        </form>
      </div>
    </section>
  );
}
