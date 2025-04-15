import React from 'react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">TERMS OF SERVICE</h1>
        <p className="text-gray-600 mb-8">Last updated April 01, 2025</p>

        <h2 className="text-2xl font-bold mb-6">AGREEMENT TO OUR LEGAL TERMS</h2>

        <div className="space-y-6 text-gray-700">
          <p>
            We are VEEP Pte Ltd ('Company', 'we', 'us', or 'our'), a company registered in Singapore at 69 Loyang Dr, Singapore 508958, Singapore 508958.
          </p>

          <p>
            We operate the website <a href="https://www.veep.sg" className="text-blue-600 hover:underline">https://www.veep.sg</a> (the 'Site'), as well as any other related products and services that refer or link to these legal terms (the 'Legal Terms') (collectively, the 'Services').
          </p>

          <p>
            You can contact us by phone at +6580333484, email at marketing@veepgroup.sg, or by mail to 69 Loyang Dr, Singapore 508958, Singapore 508958, Singapore.
          </p>

          <p>
            These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity ('you'), and VEEP Pte Ltd, concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
          </p>

          <p>
            Supplemental terms and conditions or documents that may be posted on the Services from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Legal Terms at any time and for any reason. We will alert you about any changes by updating the 'Last updated' date of these Legal Terms, and you waive any right to receive specific notice of each such change. It is your responsibility to periodically review these Legal Terms to stay informed of updates. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Legal Terms by your continued use of the Services after the date such revised Legal Terms are posted.
          </p>

          <p>
            The Services are intended for users who are at least 18 years old. Persons under the age of 18 are not permitted to use or register for the Services.
          </p>

          <p>
            We recommend that you print a copy of these Legal Terms for your records.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6" id="table-of-contents">TABLE OF CONTENTS</h2>
          <ul className="list-decimal list-inside space-y-2 ml-4 mb-12">
            {[
              "OUR SERVICES",
              "INTELLECTUAL PROPERTY RIGHTS",
              "USER REPRESENTATIONS",
              "PURCHASES AND PAYMENT",
              "PROHIBITED ACTIVITIES",
              "USER GENERATED CONTRIBUTIONS",
              "CONTRIBUTION LICENCE",
              "SERVICES MANAGEMENT",
              "PRIVACY POLICY",
              "TERM AND TERMINATION",
              "MODIFICATIONS AND INTERRUPTIONS",
              "GOVERNING LAW",
              "DISPUTE RESOLUTION",
              "CORRECTIONS",
              "DISCLAIMER",
              "LIMITATIONS OF LIABILITY",
              "INDEMNIFICATION",
              "USER DATA",
              "ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES",
              "SMS TEXT MESSAGING",
              "MISCELLANEOUS",
              "CONTACT US"
            ].map((item, index) => (
              <li key={index}>
                <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-blue-600 hover:underline">
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <section id="our-services" className="mb-12">
            <h2 className="text-2xl font-bold mb-6">1. OUR SERVICES</h2>
            <p className="text-gray-700 mb-4">
              The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.
            </p>
          </section>

          <section id="intellectual-property-rights" className="mb-12">
            <h2 className="text-2xl font-bold mb-6">2. INTELLECTUAL PROPERTY RIGHTS</h2>
            <h3 className="text-xl font-semibold mb-4">Our intellectual property</h3>
            <p className="text-gray-700 mb-4">
              We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the 'Content'), as well as the trademarks, service marks, and logos contained therein (the 'Marks').
            </p>
            <p className="text-gray-700 mb-4">
              Our Content and Marks are protected by copyright and trademark laws (and various other intellectual property rights and unfair competition laws) and treaties around the world.
            </p>
            <p className="text-gray-700 mb-4">
              The Content and Marks are provided in or through the Services 'AS IS' for your personal, non-commercial use or internal business purpose only.
            </p>

            <h3 className="text-xl font-semibold mb-4">Your use of our Services</h3>
            <p className="text-gray-700 mb-4">
              Subject to your compliance with these Legal Terms, including the 'PROHIBITED ACTIVITIES' section below, we grant you a non-exclusive, non-transferable, revocable licence to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4 text-gray-700">
              <li>access the Services; and</li>
              <li>download or print a copy of any portion of the Content to which you have properly gained access,</li>
            </ul>
            <p className="text-gray-700 mb-4">
              solely for your personal, non-commercial use or internal business purpose.
            </p>
          </section>

          <section id="user-representations" className="mb-12">
            <h2 className="text-2xl font-bold mb-6">3. USER REPRESENTATIONS</h2>
            <p className="text-gray-700 mb-4">
              By using the Services, you represent and warrant that: (1) you have the legal capacity and you agree to comply with these Legal Terms; (2) you are not a minor in the jurisdiction in which you reside; (3) you will not access the Services through automated or non-human means, whether through a bot, script or otherwise; (4) you will not use the Services for any illegal or unauthorised purpose; and (5) your use of the Services will not violate any applicable law or regulation.
            </p>
            <p className="text-gray-700 mb-4">
              If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Services (or any portion thereof).
            </p>
          </section>

          <section id="purchases-and-payment" className="mb-12">
            <h2 className="text-2xl font-bold mb-6">4. PURCHASES AND PAYMENT</h2>
            <p className="text-gray-700 mb-4">All purchases are non-refundable.</p>
            <p className="text-gray-700 mb-4">
              You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Services. You further agree to promptly update account and payment information, including email address, payment method, and payment card expiration date, so that we can complete your transactions and contact you as needed. Sales tax will be added to the price of purchases as deemed required by us. We may change prices at any time.
            </p>
            <p className="text-gray-700 mb-4">
              You agree to pay all charges at the prices then in effect for your purchases and any applicable shipping fees, and you authorise us to charge your chosen payment provider for any such amounts upon placing your order. We reserve the right to correct any errors or mistakes in pricing, even if we have already requested or received payment.
            </p>
            <p className="text-gray-700">
              We reserve the right to refuse any order placed through the Services. We may, in our sole discretion, limit or cancel quantities purchased per person, per household, or per order. These restrictions may include orders placed by or under the same customer account, the same payment method, and/or orders that use the same billing or shipping address. We reserve the right to limit or prohibit orders that, in our sole judgment, appear to be placed by dealers, resellers, or distributors.
            </p>
          </section>

          <section id="prohibited-activities" className="mb-12">
            <h2 className="text-2xl font-bold mb-6">5. PROHIBITED ACTIVITIES</h2>
            <p className="text-gray-700 mb-4">
              You may not access or use the Services for any purpose other than that for which we make the Services available. The Services may not be used in connection with any commercial endeavours except those that are specifically endorsed or approved by us.
            </p>
            <p className="text-gray-700 mb-4">As a user of the Services, you agree not to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
              <li>Systematically retrieve data or other content from the Services to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
              <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</li>
              <li>Circumvent, disable, or otherwise interfere with security-related features of the Services.</li>
              <li>Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services.</li>
              <li>Use any information obtained from the Services in order to harass, abuse, or harm another person.</li>
              <li>Make improper use of our support services or submit false reports of abuse or misconduct.</li>
              <li>Use the Services in a manner inconsistent with any applicable laws or regulations.</li>
              <li>Engage in unauthorised framing of or linking to the Services.</li>
              <li>Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material that interferes with any party's uninterrupted use and enjoyment of the Services.</li>
              <li>Engage in any automated use of the system.</li>
              <li>Delete the copyright or other proprietary rights notice from any Content.</li>
            </ul>
          </section>

          <section id="user-generated-contributions" className="mb-12">
            <h2 className="text-2xl font-bold mb-6">6. USER GENERATED CONTRIBUTIONS</h2>
            <p className="text-gray-700 mb-4">
              The Services does not offer users to submit or post content. We may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Services, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, "Contributions").
            </p>
            <p className="text-gray-700 mb-4">
              Contributions may be viewable by other users of the Services and through third-party websites. As such, any Contributions you transmit may be treated in accordance with the Services' Privacy Policy. When you create or make available any Contributions, you thereby represent and warrant that:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700 mb-4">
              <li>The creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights, including but not limited to the copyright, patent, trademark, trade secret, or moral rights of any third party.</li>
              <li>You are the creator and owner of or have the necessary licences, rights, consents, releases, and permissions to use and to authorise us, the Services, and other users of the Services to use your Contributions in any manner contemplated by the Services and these Legal Terms.</li>
              <li>You have the written consent, release, and/or permission of each and every identifiable individual person in your Contributions to use the name or likeness of each and every such identifiable individual person to enable inclusion and use of your Contributions in any manner contemplated by the Services and these Legal Terms.</li>
              <li>Your Contributions are not false, inaccurate, or misleading.</li>
              <li>Your Contributions are not unsolicited or unauthorised advertising, promotional materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of solicitation.</li>
              <li>Your Contributions are not obscene, lewd, lascivious, filthy, violent, harassing, libelous, slanderous, or otherwise objectionable (as determined by us).</li>
              <li>Your Contributions do not ridicule, mock, disparage, intimidate, or abuse anyone.</li>
              <li>Your Contributions do not violate any applicable law, regulation, or rule.</li>
              <li>Your Contributions do not violate the privacy or publicity rights of any third party.</li>
              <li>Your Contributions do not include any offensive comments that are connected to race, national origin, gender, sexual preference, or physical handicap.</li>
              <li>Your Contributions do not otherwise violate, or link to material that violates, any provision of these Legal Terms, or any applicable law or regulation.</li>
            </ul>
          </section>

          <section id="services-management" className="mb-12">
            <h2 className="text-2xl font-bold mb-6">8. SERVICES MANAGEMENT</h2>
            <p className="text-gray-700 mb-4">
              We reserve the right, but not the obligation, to: (1) monitor the Services for violations of these Legal Terms; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Legal Terms, including without limitation, reporting such user to law enforcement authorities; (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof; (4) in our sole discretion and without limitation, notice, or liability, to remove from the Services or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and (5) otherwise manage the Services in a manner designed to protect our rights and property and to facilitate the proper functioning of the Services.
            </p>
          </section>

          <section id="privacy-policy" className="mb-12">
            <h2 className="text-2xl font-bold mb-6">9. PRIVACY POLICY</h2>
            <p className="text-gray-700 mb-4">
              We care about data privacy and security. Please review our Privacy Policy. By using the Services, you agree to be bound by our Privacy Policy, which is incorporated into these Legal Terms. Please be advised the Services are hosted in Singapore. If you access the Services from any other region of the world with laws or other requirements governing personal data collection, use, or disclosure that differ from applicable laws in Singapore, then through your continued use of the Services, you are transferring your data to Singapore, and you expressly consent to have your data transferred to and processed in Singapore.
            </p>
          </section>

          <section id="term-and-termination" className="mb-12">
            <h2 className="text-2xl font-bold mb-6">10. TERM AND TERMINATION</h2>
            <p className="text-gray-700 mb-4">
              These Legal Terms shall remain in full force and effect while you use the Services. WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE LEGAL TERMS OR OF ANY APPLICABLE LAW OR REGULATION.
            </p>
            <p className="text-gray-700 mb-4">
              If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party. In addition to terminating or suspending your account, we reserve the right to take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress.
            </p>
          </section>

          <section id="modifications-and-interruptions" className="mb-12">
            <h2 className="text-2xl font-bold mb-6">11. MODIFICATIONS AND INTERRUPTIONS</h2>
            <p className="text-gray-700 mb-4">
              We reserve the right to change, modify, or remove the contents of the Services at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Services. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Services.
            </p>
            <p className="text-gray-700 mb-4">
              We cannot guarantee the Services will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Services, resulting in interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Services at any time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Services during any downtime or discontinuance of the Services. Nothing in these Legal Terms will be construed to obligate us to maintain and support the Services or to supply any corrections, updates, or releases in connection therewith.
            </p>
          </section>

          <section id="governing-law" className="mb-12">
            <h2 className="text-2xl font-bold mb-6">12. GOVERNING LAW</h2>
            <p className="text-gray-700 mb-4">
              These Legal Terms shall be governed by and defined following the laws of Singapore. VEEP Pte Ltd and yourself irrevocably consent that the courts of Singapore shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these Legal Terms.
            </p>
          </section>

          <section id="dispute-resolution" className="mb-12">
            <h2 className="text-2xl font-bold mb-6">13. DISPUTE RESOLUTION</h2>
            
            <h3 className="text-xl font-semibold mb-4">Informal Negotiations</h3>
            <p className="text-gray-700 mb-4">
              To expedite resolution and control the cost of any dispute, controversy, or claim related to these Legal Terms (each a "Dispute" and collectively, the "Disputes") brought by either you or us (individually, a "Party" and collectively, the "Parties"), the Parties agree to first attempt to negotiate any Dispute (except those Disputes expressly provided below) informally for at least sixty (60) days before initiating arbitration. Such informal negotiations commence upon written notice from one Party to the other Party.
            </p>

            <h3 className="text-xl font-semibold mb-4">Binding Arbitration</h3>
            <p className="text-gray-700 mb-4">
              Any dispute arising out of or in connection with these Legal Terms, including any question regarding its existence, validity, or termination, shall be referred to and finally resolved by the International Commercial Arbitration Court under the European Arbitration Chamber (Belgium, Brussels, Avenue Louise, 146) according to the Rules of this ICAC, which, as a result of referring to it, is considered as the part of this clause. The number of arbitrators shall be three (3). The seat, or legal place, or arbitration shall be Singapore, Singapore. The language of the proceedings shall be English. The governing law of these Legal Terms shall be substantive law of Singapore.
            </p>

            <h3 className="text-xl font-semibold mb-4">Restrictions</h3>
            <p className="text-gray-700 mb-4">
              The Parties agree that any arbitration shall be limited to the Dispute between the Parties individually. To the full extent permitted by law, (a) no arbitration shall be joined with any other proceeding; (b) there is no right or authority for any Dispute to be arbitrated on a class-action basis or to utilize class action procedures; and (c) there is no right or authority for any Dispute to be brought in a purported representative capacity on behalf of the general public or any other persons.
            </p>
          </section>

          <section id="corrections" className="mb-12">
            <h2 className="text-2xl font-bold mb-6">14. CORRECTIONS</h2>
            <p className="text-gray-700 mb-4">
              There may be information on the Services that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Services at any time, without prior notice.
            </p>
          </section>

          <section id="disclaimer" className="mb-12">
            <h2 className="text-2xl font-bold mb-6">15. DISCLAIMER</h2>
            <p className="text-gray-700 mb-4">
              THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SERVICES' CONTENT OR THE CONTENT OF ANY WEBSITES OR MOBILE APPLICATIONS LINKED TO THE SERVICES AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE SERVICES, (3) ANY UNAUTHORISED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SERVICES, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SERVICES BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SERVICES.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
