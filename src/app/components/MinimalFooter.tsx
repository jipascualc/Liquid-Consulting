import { useState } from "react";
import { X } from "lucide-react";
import svgPaths from "../../imports/svg-i8devqv4ve";
import imgLinkedinLogoPng from "../../assets/d28eb6f86c94a90ca460280a0a6c487c7998f48d.webp";
import imgImage from "../../assets/08f531c289052fa27e5ab01769f8c20f9e30f073.webp";

interface MinimalFooterProps {
  onServiceClick?: (serviceId: string) => void;
  onNavigate?: (page: "home" | "about" | "services") => void;
}

export function MinimalFooter({ onServiceClick, onNavigate }: MinimalFooterProps) {
  const currentYear = new Date().getFullYear();
  const [showTermsModal, setShowTermsModal] = useState(false);

  const handleServiceClick = (e: React.MouseEvent, serviceId: string) => {
    e.preventDefault();
    onServiceClick?.(serviceId);
  };

  const handleNavigation = (e: React.MouseEvent, page: "home" | "about" | "services") => {
    e.preventDefault();
    onNavigate?.(page);
  };

  const handleTermsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowTermsModal(true);
  };

  return (
    <footer className="bg-[#0d1c36] text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            {/* Logo */}
            <div className="h-[64px] w-[192px] relative">
              <div className="absolute left-[-460.16px] size-0 top-[-32px]">
                {/* Water Droplet Image */}
                <div className="absolute h-[70.56px] left-[597.6px] overflow-clip top-[29.76px] w-[40.8px]">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
                </div>
                {/* Gear Icon */}
                <div className="absolute left-[601.78px] size-[32.72px] top-[62.96px]">
                  <div className="absolute content-stretch flex flex-col items-start left-0 overflow-clip size-[32.72px] top-0">
                    <div className="h-[32.72px] overflow-clip relative shrink-0 w-full">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.72 32.72">
                        <path d={svgPaths.p39179b70} fill="white" fillOpacity="0.8" />
                      </svg>
                    </div>
                  </div>
                </div>
                {/* Liquid Text */}
                <div className="absolute h-[47.6px] left-[460.16px] top-[54.88px] w-[126.56px]">
                  <div className="absolute content-stretch flex flex-col h-[47.6px] items-start left-0 overflow-clip top-0 w-[126.56px]">
                    <div className="h-[47.6px] overflow-clip relative shrink-0 w-full">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 126.56 47.6">
                        <path d={svgPaths.p489f900} fill="white" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-6 text-white/70 leading-relaxed max-w-md">
              Optimizing food industry operations with expertise in aseptic technology, maintenance, and innovative solutions.
            </p>
            <a
              href="https://www.linkedin.com/company/liquidconsulting/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 opacity-70 hover:opacity-100 transition-opacity"
            >
              <img src={imgLinkedinLogoPng} alt="LinkedIn" className="w-6 h-6" />
            </a>
          </div>

          <div>
            <h3 className="text-white mb-4">Services</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li><a href="#" onClick={(e) => handleServiceClick(e, "emergency-support")} className="hover:text-white">Emergency Support</a></li>
              <li><a href="#" onClick={(e) => handleServiceClick(e, "service-contract")} className="hover:text-white">Service Contracts</a></li>
              <li><a href="#" onClick={(e) => handleServiceClick(e, "field-service")} className="hover:text-white">Field Service</a></li>
              <li><a href="#" onClick={(e) => handleServiceClick(e, "food-safety")} className="hover:text-white">Food Safety</a></li>
              <li><a href="#" onClick={(e) => handleServiceClick(e, "legacy-upgrade")} className="hover:text-white">Legacy Upgrade</a></li>
              <li><a href="#" onClick={(e) => handleServiceClick(e, "automation-advantage")} className="hover:text-white">Automation Advantage</a></li>
              <li><a href="#" onClick={(e) => handleServiceClick(e, "engineering")} className="hover:text-white">Engineering</a></li>
              <li><a href="#" onClick={(e) => handleServiceClick(e, "easy-products")} className="hover:text-white">Easy Products</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white mb-4">Company</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li><a href="#" onClick={(e) => handleNavigation(e, "home")} className="hover:text-white">Home</a></li>
              <li><a href="#" onClick={(e) => handleNavigation(e, "about")} className="hover:text-white">About</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-white/50">
          <p>© {currentYear} Liquid Consulting Inc. All rights reserved.</p>
          <div>
            <a href="#" onClick={handleTermsClick} className="hover:text-white">Terms & Policy</a>
          </div>
        </div>
      </div>

      {/* Terms Modal */}
      {showTermsModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setShowTermsModal(false)}>
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-[#0d1c36]">Terms & Policy</h2>
              <button
                onClick={() => setShowTermsModal(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="px-6 py-6 overflow-y-auto max-h-[calc(90vh-80px)]">
              <div className="prose prose-sm max-w-none">
                <h3 className="text-xl font-bold text-[#0d1c36] mb-4">Liquid General Terms and Conditions</h3>
                <p className="text-gray-700 mb-4">
                  As used in these General Terms and Conditions (these "Terms"), each party receiving services from Liquid Consulting, Inc. ("Liquid Consulting") shall be referred to as "Customer".
                </p>

                <h4 className="text-lg font-bold text-[#0d1c36] mt-6 mb-3">1. General Description and Scope of Service</h4>
                <p className="text-gray-700 mb-4">
                  Liquid Consulting agrees to provide to Customer, and Customer is retaining Liquid Consulting to provide, such technical assistance (the "Services"), as is described in a work order, which may be in the form of a purchase order issued by Customer and accepted in writing by Liquid Consulting, or may be via email communication evidencing an agreement between Customer and Liquid Consulting (each, a "Work Order"). Such services shall be provided in accordance with the provision of these Terms. The Work Order may also provide for the supply by Liquid Consulting of equipment, parts, materials and software (the "Equipment"). The Services and the Equipment are collectively referred to as the "Works". These Terms shall be deemed incorporated into each Work Order. In the event of a conflict between the terms of a Work Order and these Terms, these Terms shall apply. These Terms may only be modified in a writing signed by Liquid Consulting. Customer terms referenced or proposed to be incorporated into any Work Order shall be deemed rejected and not incorporated into any Work Order.
                </p>

                <h4 className="text-lg font-bold text-[#0d1c36] mt-6 mb-3">2. Independent Contractor</h4>
                <p className="text-gray-700 mb-4">
                  Liquid Consulting is an independent contractor. Neither Liquid Consulting nor any employee or contractor of Liquid Consulting shall be deemed an employee of Customer. Liquid Consulting shall be solely responsible for the payment of compensation of Liquid Consulting employees assigned to perform services hereunder, and such employees shall be informed that they are not entitled to the provision of any Customer employee benefits. Customer shall not be responsible for payment of worker's compensation, disability or other similar benefits, unemployment or other similar insurance or for withholding income or other similar taxes or social security for any Liquid Consulting employee, but such responsibility shall solely be that of Liquid Consulting.
                </p>

                <h4 className="text-lg font-bold text-[#0d1c36] mt-6 mb-3">3. Customer Representative</h4>
                <p className="text-gray-700 mb-4">
                  Customer shall designate an individual to serve as Customer's representative under each Work Order. Customer's representative will be charged with responsibility of acting as Customer's agent under a given Work Order, authorized to execute change orders and other amendatory documents, and its principal point of interface with Liquid Consulting under a given Work Order.
                </p>

                <h4 className="text-lg font-bold text-[#0d1c36] mt-6 mb-3">4. Work Product</h4>
                <p className="text-gray-700 mb-4">
                  <strong>4.1.</strong> Customer acknowledges that Liquid Consulting's business is based upon its expertise in providing services to its customers generally similar to those Liquid Consulting will provide to Customer under these Terms, and further, that it is to the benefit of all customers of Liquid Consulting, including Customer, that Liquid Consulting retains all ideas, inventions, know-how and other discoveries created in the course of Liquid Consulting's work, even those that may have benefitted or even resulted from input from Customer (collectively, "Work Product"). Accordingly, all ownership rights and title to any Work Product is hereby retained by and shall reside with Liquid Consulting.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>4.2.</strong> Notwithstanding Section 4.1 above, Liquid Consulting hereby grants Customer a nonexclusive, non-transferrable, personal license to utilize and implement any Work Product shared by Liquid Consulting with Customer (the "Customer License"). The Customer License shall be limited in scope to Customer's internal production purposes and limited in scope to the intended purpose and context of disclosure by Liquid Consulting of said Work Product to Customer. Notwithstanding the foregoing, to the extent any Services, Equipment, or Works provided to Customer include software, such software belongs exclusively to Liquid Consulting. Under no circumstances is Liquid Consulting required to provide to Customer the source code of any software.
                </p>

                <h4 className="text-lg font-bold text-[#0d1c36] mt-6 mb-3">5. Warranty</h4>
                <p className="text-gray-700 mb-4">
                  <strong>5.1.</strong> Liquid Consulting warrants that the Works will be free from defects for a period of twelve (12) months from the date of delivery to Customer.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>5.2.</strong> Customer shall notify Liquid Consulting of any defect within thirty (30) days after the defect was, or should have been discovered. Liquid Consulting shall, at its option, either repair or replace the defective Works or refund to Customer the amount paid for the defective Works. Replaced or repaired parts of the Works shall be subject to the same warranty as set out above for the reminder of the original warranty period, or six (6) months from the repair or installation of the replacement part, whichever is longer.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>5.3.</strong> Liquid Consulting shall not be liable for damage or loss resulting from ordinary wear and tear, use of the Works in a manner not provided in the Work Order or the failure of Customer to properly operate, maintain or clean the Works.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>5.4.</strong> EXCEPT AS EXPRESSLY SET OUT IN THIS PARAGRAPH 5, LIQUID CONSULTING DOES NOT MAKE ANY REPRESENTATIONS OR WARRANTIES OF ANY KIND WITH RESPECT TO THE WORKS, WHETHER IMPLIED BY LAW OR OTHERWISE, AND ANY SUCH REPRESENTATIONS OR WARRANTIES ARE HERBY EXPRESSLY DISCLAIMED. THE WARRANTIES SET FORTH IN THIS PAGRARAPH 5 ARE GIVEN IN LIEU OF AND EXCLUDE ALL OTHER WARRANTIES OR LIABILITIES IMPLIED BY LAW OR OTHERWISE, INCLUDING BUT NOT LIMITED TO ANY IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>5.5.</strong> The remedies set forth in the Clause 5 are Customer's exclusive remedies for breach of any warranty. Any lawsuit or other action for breach of the warranties set forth herein must be commenced with ninety (90) days following the expiration of the applicable warranty period.
                </p>

                <h4 className="text-lg font-bold text-[#0d1c36] mt-6 mb-3">6. Indemnification</h4>
                <p className="text-gray-700 mb-4">
                  <strong>6.1.</strong> Each party (the "Indemnifying Party") agrees to indemnify, defend and hold harmless the other party hereto and its officers, directors, shareholders and employees (each, an "Indemnitee"), from and against any third party claim for personal injury or property damage and associated actions, causes of action, suits, claims, demands, losses, costs and expenses (including without limitation reasonable attorneys' fees and court costs) to the extent arising from or in connection with the negligence or willful misconduct of the Indemnifying Party.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>6.2.</strong> In the event that an Indemnitee intends to seek indemnification under this Section 5, it will promptly inform the Indemnifying Party of a claim after receiving notice of the claim and will permit the Indemnifying Party to direct and control the defense of the claim; provided, however, that Indemnifying Party will not make any admission on behalf of or to settle any litigation without the prior written consent of Indemnitee, such consent not to be unreasonably withheld or delayed. The Indemnitee will in any event take reasonable steps to mitigate or reduce its loss pursuant to any claim.
                </p>

                <h4 className="text-lg font-bold text-[#0d1c36] mt-6 mb-3">7. Confidential Information</h4>
                <p className="text-gray-700 mb-4">
                  <strong>7.1.</strong> In connection with these Terms, a party ("Disclosing Party") may disclose to the other party ("Receiving Party") certain information intended to remain as proprietary and confidential (collectively, "Confidential Information"), including, but not limited to, information regarding production processes, business plans, financial data, operational data, business development plans, and/or other information or processes. The Term "Confidential Information" shall not include information which was or becomes generally available to the public other than as a result of a disclosure by a Party or an affiliate, agent or advisor including, without limitation, attorneys, accountants or consultant (collectively "Representatives").
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>7.2.</strong> Except as may be required by court order, subpoena or lawful demand of a governmental agency, Receiving Party hereby covenants and agrees: (a) to hold any Confidential Information obtained by it in the strictest confidence, (b) not to directly or indirectly reveal, report, publish, disclose or transfer any Confidential Information to any person or entity (other than officers, directors and other employees or Representatives of Receiving Party on a "need to know" basis (who in turn shall be advised of and subject to the confidentiality obligations set forth herein), and (c) not to utilize any Confidential Information for in a manner inconsistent with the purpose said Confidential Information was disclosed to Receiving Party.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>7.3.</strong> Receiving Party or its Representative may disclose Confidential Information if required by a governmental agency or court of competent jurisdiction, or the rules thereof; provided, however, Receiving Party agrees to give Disclosing Party prompt notice of receipt of the subpoena or other process requiring or requesting disclosure of Confidential Information.
                </p>

                <h4 className="text-lg font-bold text-[#0d1c36] mt-6 mb-3">8. Termination & Suspension of Work</h4>
                <p className="text-gray-700 mb-4">
                  <strong>8.1.</strong> In the event of any material breach of these Terms or stipulated terms of a Work Order by either party hereto, the other party may (reserving cumulatively all other remedies and rights under these Terms and in law and in equity) terminate the impacted Work Order(s) by giving 30 days' prior written notice thereof to the breaching party; provided, however, that these Terms shall not terminate at the end of said cure period if the party in breach has cured the breach of which it has been notified prior to the expiration of said cure period. Notwithstanding the foregoing, in the event of a breach that arises with respect to a specific Work Order, the non-breaching party's right to terminate shall be limited to the breached Work Order and not to any unrelated outstanding Work Orders, if any.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>8.2.</strong> Termination of these Terms shall not affect rights and/or obligation of the parties which arose prior to any such termination (unless otherwise provided herein) and such rights and/or obligations shall survive any such termination.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>8.3.</strong> Liquid Consulting shall have the right to suspend work under all Work Orders in the event Customer is over 30 days delinquent in its payment obligations under any Work Order.
                </p>

                <h4 className="text-lg font-bold text-[#0d1c36] mt-6 mb-3">9. Site Conditions</h4>
                <p className="text-gray-700 mb-4">
                  In connection with any on-site services to be provided by Liquid Consulting, Customer shall provide (i) reasonable working space, (ii) safe working conditions and work environment that comply with all applicable laws and regulations, and (iii) access to resources and materials which are necessary for the performance of the services.
                </p>

                <h4 className="text-lg font-bold text-[#0d1c36] mt-6 mb-3">10. Taxes</h4>
                <p className="text-gray-700 mb-4">
                  The charges for services provided hereunder do not include taxes unless noted otherwise in a Work Order. Customer agrees to pay any tax which may be levied on or assessed under a Work Order (excluding employment related taxes on Liquid Consulting personnel and income taxes on Liquid Consulting's net income), and, if any such tax is paid by Liquid Consulting, to reimburse Liquid Consulting therefor upon receipt by Customer of proof of payment by Liquid Consulting.
                </p>

                <h4 className="text-lg font-bold text-[#0d1c36] mt-6 mb-3">11. Payment Terms</h4>
                <p className="text-gray-700 mb-4">
                  Liquid Consulting's standard payment terms are net 18 days from the date of the invoice. If a Customer has negotiated extended payment terms beyond net 18 days, such terms shall revert to net 18 days if the Customer's account becomes delinquent. This policy ensures timely and consistent financial transactions, crucial for maintaining effective cash flow management within Liquid Consulting. Compliance with these terms is essential for sustaining ongoing business relations and operational efficiency. If a Customer fails to make a payment within the time described above, Liquid Consulting is entitled to charge a late fee of 5% of the amount owed. Further, any amount owed to Liquid Consulting shall accrue 10% interest after net 18 days from the date of the invoice.
                </p>

                <h4 className="text-lg font-bold text-[#0d1c36] mt-6 mb-3">12. Waiver of Certain Damages</h4>
                <p className="text-gray-700 mb-4">
                  EXCEPT AS OTHERWISE EXPRESSLY PROVIDED FOR WITHIN THESE TERMS, IN NO EVENT SHALL CUSTOMER OR LIQUID CONSULTING BE LIABLE, ONE TO THE OTHER, FOR INDIRECT, SPECIAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF OR IN CONNECTION WITH THE FURNISHING, PERFORMANCE, OR USE OF ANY PRODUCTS OR SERVICES PROVIDED PURSUANT TO THESE TERMS AND/OR ANY WORK ORDER. Additionally, under no circumstances shall Liquid Consulting's liability with respect to any given Work Order exceed an amount equal to the amount received by Liquid Consulting in connection therewith.
                </p>

                <h4 className="text-lg font-bold text-[#0d1c36] mt-6 mb-3">13. Waiver of Jury Trial</h4>
                <p className="text-gray-700 mb-4">
                  LIQUID CONSULTING AND CUSTOMER HEREBY KNOWINGLY, VOLUNTARILY AND IRREVOCABLY WAIVE ANY AND ALL RIGHT WHICH EITHER OF THEM MAY HAVE TO TRIAL BY JURY WITH RESPECT TO ANY PROCEEDING, LITIGATION OR COUNTERCLAIM BASED ON, OR ARISING OUT OF, UNDER, OR IN CONNECTION WITH THESE TERMS AND CONDITIONS OR LIQUID CONSULTING'S SERVICES, OR ANY COURSE OF CONDUCT, COURSE OF DEALING, STATEMENTS (WHETHER VERBAL OR WRITTEN) OR ACTIONS OF ANY PARTY HERETO.
                </p>

                <h4 className="text-lg font-bold text-[#0d1c36] mt-6 mb-3">14. Excusable Delay</h4>
                <p className="text-gray-700 mb-4">
                  <strong>14.1.</strong> In no event shall either party be liable to the other for any delay or failure to perform hereunder, which delay or failure to perform is due to causes beyond the control of said party, including, but not limited to, acts of God; acts of the public enemy; governmental actions; fires; floods; epidemics; quarantine restrictions; strikes or freight embargoes. Notwithstanding the foregoing, in every case the delay or failure to perform must be beyond the control and without the fault or negligence of the party claiming excusable delay.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>14.2.</strong> Performance times under these Terms shall be considered extended for a period of time equivalent to the time lost because of any delay which is excusable hereunder; provided, however, that, if any such delay shall, in the aggregate, last for a period of more than 45 days, either party may terminate the adversely impacted Work Order.
                </p>

                <h4 className="text-lg font-bold text-[#0d1c36] mt-6 mb-3">15. Non-Solicitation</h4>
                <p className="text-gray-700 mb-4">
                  During the time in which Liquid Consulting is providing services to Customer and for a period of two (2) years thereafter, Customer shall not directly or indirectly, in any capacity, interfere with, solicit, hire or entice away any employee or independent contractor, or former employee or independent contractor of the Liquid Consulting (i.e., any person who, at the time of such solicitation or hiring, had been an employee or independent contractor of Liquid Consulting within the past twelve (12) months from the date of determination). Customer covenants and agrees that the restrictions set forth herein and the covenants contained herein are reasonable in their limitation and are necessary to protect the legitimate business interests of Liquid Consulting and that the restraints are not unduly burdensome on Liquid Consulting. The parties further agree that if these restrictions or covenants are found to be unenforceable by a court of competent jurisdiction by reason of the length of time or scope, it is the intention of the parties that said restrictions or covenants be reformed by such court so that such period of time or scope be reduced to the extent necessary to cure such invalidity. The parties also agree that each of the restrictions or covenants set forth herein shall be construed as an agreement independent of any other provisions of this document or Customer's engagement of Liquid Consulting. The existence of any claim or cause of action that Customer may have against Liquid Consulting, whether predicated on this document or otherwise, shall not constitute any defense to the enforcement of the restrictions or covenants contained herein.
                </p>

                <h4 className="text-lg font-bold text-[#0d1c36] mt-6 mb-3">16. Miscellaneous</h4>
                <p className="text-gray-700 mb-4">
                  <strong>16.1.</strong> These Terms shall be binding upon the parties' respective successor and permitted assigns. Neither party may assign these Terms, and/or any of its rights and obligations hereunder except to a successor entity through merger or consolidation, without the prior written consent of the other party, such consent not to be unreasonably withheld, and any such attempted assignment shall be void. Subject to the foregoing, all of the terms, conditions, covenants, and agreements contained herein shall inure to the benefit of, and be binding upon, any such successor and any permitted assignees of the respective parties hereto. It is further understood and agreed that consent by either part to such assignment in one instance shall not constitute consent by the part to any other assignment.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>16.2.</strong> The validity of these Terms, the construction of the terms, and the interpretation of the rights and duties of the parties shall be governed by the laws of the State of Florida, without giving effect to its conflict of law principles. The parties agree that the courts situated within or having jurisdiction over Seminole County, Florida, shall be the exclusive courts of jurisdiction and venue for any litigation, special proceeding or other proceeding as between the parties that may be brought, or arise out of, or in connection with, or by reason of these Terms. Customer consents to jurisdiction and venue of any dispute or litigation in the state or federal courts having jurisdiction over Seminole County, Florida.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>16.3.</strong> No modification, amendment, supplement to or waiver of these Terms or any of its provisions shall be binding upon the parties hereto unless made in writing and duly signed by both parties. Customer waives the right to assert these Terms have been modified through course of dealing or any other equitable concept.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>16.4.</strong> A failure or delay of either party to these Terms to enforce at any time any of the provisions of these Terms, or to exercise any option which is herein provided, or to require at any time performance of any of the provisions hereof, shall in no way be construed to be a waiver of such provision of these Terms or shall not excuse the other party's performance of such, nor affect any rights at a later time to enforce the provision.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>16.5.</strong> In the event any one or more of the Terms shall for any reason be held to be invalid, illegal or unenforceable, the remaining provisions of these Terms shall be unimpaired, and the invalid, illegal or unenforceable provision shall be replaced by a mutually acceptable provision, which, being valid, legal and enforceable, comes closest to the intention of the parties underlying the invalid, illegal or unenforceable provision. If any provision of these Terms is held to be excessively broad as to duration, geographical scope, activity or subject, it is to be construed by limiting and reducing it, so as to be enforceable to the extent compatible with applicable law. If any provision of these Terms or the application of any such provision shall be held by a tribunal of competent jurisdiction to be contrary to law, the remaining previsions of these Terms shall continue in full force and effect.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>16.6.</strong> The terms and conditions of any and all Work Orders and any other attachment(s) to these Terms are incorporated herein by this reference and shall constitute part of these Terms as if fully set forth herein. These Terms, together with so incorporated attachments, constitutes the entire agreement between the parties and supersedes all previous agreements, promises, representations, whether written or oral, between the parties with respect to the subject matter hereof. Customer has not relied upon any oral representations or statements by Liquid Consulting. Customer waives the right to assert it has relied upon any oral representations or statements by Liquid Consulting and waives the right to assert any fraud-based claim, such as fraudulent inducement, against Liquid Consulting based upon any oral representations or statements.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>16.7.</strong> In the event of any litigation between the parties arising out of or relating to Services, Equipment, Works, or any Work Order, the prevailing party shall be entitled to recover from the non prevailing party all costs and reasonable attorneys' fees incurred, including, but not limited to, attorneys' fees in all investigations, mediations, lawsuits, trials, bankruptcies, and appeals, and including all attorneys' fees and costs incurred in determining the amount of attorneys' fees and costs.
                </p>

                <h4 className="text-lg font-bold text-[#0d1c36] mt-6 mb-3">Contact Information</h4>
                <div className="text-gray-700 mb-4">
                  <p><strong>Liquid</strong></p>
                  <p>3415 West Lake Mary Blvd</p>
                  <p>P.O. Box #951959</p>
                  <p>Lake Mary, FL 32795</p>
                  <p>+1-407-721-1750</p>
                  <p>contact.us@liquidconsulting.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
