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
        </div>
      </div>
    </div>
  );
};

export default Terms;
