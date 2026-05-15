const terms = [
  "It is the responsibility of the Customer to ensure that all Signs / Lightboxes are acceptable to the Landlord and that no infringement of any By-laws are made by erecting the sign in /on an area designated by the Customer (Municipal Regulations) It is the customer’s responsibility to complete any application forms as requested by the Municipality and will be responsible for any fees outstanding towards such an application. If there is any infringement of Municipal By-Laws and signs need to be removed it will be at additional cost for the Customer. Payment of Signworx invoices cannot be held back in such an instance and the Customer will still need to pay the full outstanding amount immediatley. Electricity Supply and connections to the Lightboxes are the responsibility of the Customer. The Supply conform to all Municipal Regulations and be properly earthed and switched.",
  "No Electrical Connections will be made by Signworx to the mains (220Volt) Fitment personnel will demonstrate a demo connection to show that all components are in working order and will be signed off by the relevant person as in working condition.",
  "NO GUARANTEE OR WARRANTY OF ANY ELECTRICAL COMPONENTS IF CONNECTED AS ABOVE",
  "The Transformers do carry a warranty but is not covered by incorrect connection or power spikes - if faulty the Electrician responsible for the connections need to file a report with the supplier along with Proof of Qualification within the Warranty Period.",
  "Any defaults after fitment regarding Electricity supply or connections are for the Customer’s account.",
  "All connections to be connected via DAY/NIGHT switch NO LEDS CAN BURN 24 HOURS CONTINUOUSLY",
  "Proofs will be done AFTER acceptance of quotations and deposits paid. Customers need to ensure that all Proofs have been signed and that SIGNWORX will not be held responsible for any mistakes in design thereafter",
  "Any changes will be for the Customer’s account along with re-fitment",
  "All digital printed vinyl react differently to locations installed - all digital prints carry a 2 year warranty on fading",
  "Additional UV Protection can be requested to stretch the lifespan of digital printing",
  "Please note the difference between SOLID Vinyl prints and CONTRAVISION",
  "All digital prints will be applicated on the EXTERIOR of windows and glass area except if requested for interior application at additional cost for this being a total different material and application method",
  "Only if quotation states “interior application clear vinyl digital print” will it be valid. In case of interior applications the Customer needs to make sure that all furniture and obstructions had been removed in such areas beforehand and will not be the responsibility of the fitment team",
  "It is the responsibility of the Customer that all window areas are clean and ready for application before the actual fitment date. Our products and printing are of outstanding quality and can only be as good as the surface applied on - All broken windows and damaged surfaces needs to be replaced beforehand.",
  "If a lightbox needs to be refurbished and the old signage removed form the Perspex / Acrylic facing Signworx cannot be held responsible if the surface applicated to is brittle or in a bad state and needs to be replaced in case of breakage.",
  "Plans / drawings required by the relevant Authorities is the responsibility of the Customer. Signworx shall not be held obliged to reproduce any material which in their opinion is illegal. The Customer shall indemnify Signworx against any claim cost and expenses arising out of the infringement of copyright/Tradmark/Patent or Design.",
  "All products manufactured, illustrations, designs and drawings produced by Signworx are protected under the Copyright Act of 1980 and stay the property of Signworx until paid in full. Should the customer fail to pay the products it will be removed at additional cost.",
  "Signworx will not be responsible for any damages or any 3rd party vehicles, property or injuries that might occur during or after fitment of any signage and will not be held responsible for any claims that may occur",
  "SIGNWORX PRODUCTS AND FITMENT DOES NOT HAVE ANY GUARANTEE AGAINST DAMAGES AS AN ACT OF GOD BY WIND OR ANY OTHER FACTORS",
  "No guarantee or warranty of any products unless state so per quotation or any manufactured products or craftmanship.",
  "Only products carrying a manufacturers guarantee can be taken up by the client directly with such a supplier on their TERMS AND CONDITIONS.",
  "SIGNING AND OR APPROVING THE QUOTATION ALSO STATES THAT THEREBY THE CUSTOMER HAS READ THE TERMS AND CONDITIONS AND WILL COMPLY THERETO",
  "70% Deposit payalbe for amounts exceeding R300.00 - Amounts less than R300.00 payment in full",
  "PLEASE NOTE : Ibond / Brushed Ibond signs eg. House nrs and names needs to be washed weekly with soapy water when close to ocean to prevent white rust.",
  "PLEASE NOTE By accepting the quotation and or paying a deposit or full amount we are given permission to continue with the quote - ordering materials / designs / site visits etc should you cancel the acceptance a 15% handling fee is applicable.",
  "Removal of existing vinyl from vehicles - Signworx shall not be held responsible for any scratches, dents or peelings of paint that might occur",
  "Artwork supplied in AI generated format may require redrawing, resizing, alignment correction, vector reconstruction, font replacement, image cleanup, or other adjustments to meet print and production standards.",
  "Any modifications required to make AI generated artwork suitable for production will be billed as additional artwork / design time",
  "Final artwork charges will depend on the condition and usability of the supplied file. Signworx reserves the right to determine whether supplied artwork is print ready. BY ORDER MANAGEMENT",
];

export default function TermsAndConditions() {
  return (
    <section className="section terms-section" id="terms">
      <div className="container">
        <div className="section-heading reveal">
          <span className="eyebrow">By Order Management</span>
          <h2>TERMS & CONDITIONS</h2>
        </div>

        <ol className="terms-list reveal">
          {terms.map((term, index) => (
            <li key={`${index + 1}-${term.slice(0, 18)}`}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{term}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
