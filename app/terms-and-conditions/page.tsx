"use client";

import Image from "next/image";
import Footer from "../components/Footer";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="relative w-full h-64 md:h-96 bg-gray-900">
        <Image
          src="/terms-hero.png" // replace with your uploaded image
          alt="Terms and Conditions Hero"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold">
            Terms & Conditions
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <main className="flex-1 max-w-5xl mx-auto px-6 py-12 prose prose-invert">
        <p><strong>Effective Date:</strong> 10th October, 2025</p>
        <p><strong>Website:</strong> https://www.dynamicspaceconsulting.com</p>
        <p><strong>Company:</strong> Dynamic Space Consulting (“we,” “our,” “us”)</p>

        <h2>1. Acceptance of Terms</h2>
        <p>By accessing or using this website, you agree to comply with and be bound by these Terms and Conditions and all applicable laws and regulations.</p>

        <h2>2. About Dynamic Space Consulting</h2>
        <p>Dynamic Space Consulting is a global fundraising consultancy firm providing prospect research, grant writing, and fundraising training services.</p>

        <h2>3. Use of Our Website</h2>
        <ul>
          <li>Do not attempt unauthorized access.</li>
          <li>Do not distribute harmful software or engage in fraud.</li>
          <li>Do not copy or distribute content without permission.</li>
        </ul>

        <h2>4. Intellectual Property Rights</h2>
        <p>All content is the property of Dynamic Space Consulting or its licensors and protected by Nigerian law.</p>

        <h2>5. Service Information</h2>
        <p>Descriptions of services, including pricing, are provided for general information. We reserve the right to modify or discontinue services without notice.</p>

        <h2>6. Payments and Refunds</h2>
        <p>Payments are non-refundable once work has commenced, unless required by law or agreed in writing.</p>

        <h2>7. No Guarantee of Funding</h2>
        <p>We provide consulting support but do not guarantee approval of grants, sponsorships, or funding applications.</p>

        <h2>8. Limitation of Liability</h2>
        <p>We are not liable for any loss, damages, or claims arising from your use of the website or reliance on its content.</p>

        <h2>9. Links to Third-Party Websites</h2>
        <p>We are not responsible for third-party content. Visiting such links is at your own risk.</p>

        <h2>10. Privacy</h2>
        <p>Your use of this website is governed by our Privacy Policy.</p>

        <h2>11. Changes to These Terms</h2>
        <p>We may update these Terms from time to time. Continued use constitutes acceptance of any changes.</p>

        <h2>12. Governing Law</h2>
        <p>These Terms are governed by the laws of the Federal Republic of Nigeria.</p>

        <h2>13. Contact Us</h2>
        <p>Email: info@dynamicspaceconsulting.com</p>
        <p>Website: www.dynamicspaceconsulting.com</p>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
