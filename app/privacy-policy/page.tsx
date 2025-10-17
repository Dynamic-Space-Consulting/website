"use client";

import Image from "next/image";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="relative w-full h-64 md:h-96 bg-gray-900">
        <Image
          src="/privacy-policy.png" // replace with your uploaded image
          alt="Privacy Policy Hero"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold">
            Privacy Policy
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <main className="flex-1 max-w-5xl mx-auto px-6 py-12 prose prose-invert">
        <p><strong>Effective Date:</strong> 10th October, 2025</p>
        <p><strong>Website:</strong> https://www.dynamicspaceconsulting.com</p>
        <p><strong>Company:</strong> Dynamic Space Consulting (“we,” “our,” “us”)</p>

        <h2>1. Introduction</h2>
        <p>
          Dynamic Space Consulting respects your privacy and is committed to protecting your personal information.
          This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or engage our services.
          By using our website or services, you agree to the terms of this Privacy Policy.
        </p>

        <h2>2. Information We Collect</h2>
        <h3>A. Personal Information</h3>
        <p>Provided voluntarily through forms, emails, or service requests, such as:</p>
        <ul>
          <li>Full name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Organization name</li>
          <li>Job title or role</li>
          <li>Billing or payment information (when applicable)</li>
        </ul>
        <h3>B. Non-Personal Information</h3>
        <p>Collected automatically when you visit our website:</p>
        <ul>
          <li>IP address</li>
          <li>Browser type and version</li>
          <li>Pages visited and time spent on our site</li>
          <li>Device information and operating system</li>
        </ul>

        <h2>3. How We Use Your Information</h2>
        <ul>
          <li>Respond to inquiries and service requests.</li>
          <li>Deliver consulting, training, and advisory services.</li>
          <li>Send invoices, confirmations, or administrative messages.</li>
          <li>Share relevant fundraising insights, resources, and updates (if subscribed).</li>
          <li>Improve our website, services, and user experience.</li>
          <li>Comply with legal and regulatory obligations.</li>
        </ul>

        <h2>4. Legal Basis for Processing (GDPR Compliance)</h2>
        <ul>
          <li>Consent</li>
          <li>Contract</li>
          <li>Legal Obligation</li>
          <li>Legitimate Interest</li>
        </ul>

        <h2>5. Data Retention</h2>
        <p>We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, including legal, accounting, or reporting requirements. When no longer needed, data is securely deleted or anonymized.</p>

        <h2>6. Information Sharing and Disclosure</h2>
        <p>We do not sell or rent personal data. We may share information only with trusted third-party service providers or legal authorities if required by law.</p>

        <h2>7. Data Security</h2>
        <p>We implement appropriate technical and organizational measures to protect your data from unauthorized access, alteration, or disclosure.</p>

        <h2>8. Cookies and Tracking Technologies</h2>
        <p>Our website may use cookies to enhance your browsing experience. You can disable cookies, but some features may not function properly.</p>

        <h2>9. Your Data Protection Rights</h2>
        <ul>
          <li>Access your personal data</li>
          <li>Request correction</li>
          <li>Request deletion</li>
          <li>Withdraw consent</li>
          <li>Object to processing</li>
          <li>Request data portability</li>
        </ul>

        <h2>10. International Data Transfers</h2>
        <p>Your data may be processed or stored outside your country. All transfers comply with applicable data protection laws.</p>

        <h2>11. Third-Party Links</h2>
        <p>Our website may include links to third-party websites. We are not responsible for their privacy practices or content.</p>

        <h2>12. Updates to This Policy</h2>
        <p>We may revise this Privacy Policy from time to time. Updated versions will be posted on this page with a new “Effective Date.”</p>

        <h2>13. Contact Us</h2>
        <p>Email: info@dynamicspaceconsulting.com</p>
        <p>Website: www.dynamicspaceconsulting.com</p>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
