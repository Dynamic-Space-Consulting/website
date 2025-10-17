import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <main className="relative">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section with Sticky Parallax */}
      <section className="relative h-[500px] w-full overflow-hidden">
        <div className="sticky top-0 h-[500px] w-full">
          <Image
            src="/privacy-policy.png"
            alt="Privacy Policy Hero"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl text-white font-bold text-center px-4">
              Privacy Policy
            </h1>
          </div>
        </div>
      </section>

      {/* Page Content */}
      <section className="max-w-6xl mx-auto px-6 py-10 space-y-6">
        <p><strong>Effective Date:</strong> 10th October, 2025</p>
        <p>
          <strong>Website:</strong>{" "}
          <a
            href="https://www.dynamicspaceconsulting.com"
            className="text-blue-600 hover:underline"
          >
            https://www.dynamicspaceconsulting.com
          </a>
        </p>
        <p><strong>Company:</strong> Dynamic Space Consulting (“we,” “our,” “us”)</p>

        <h2 className="text-2xl font-semibold mt-6">1. Introduction</h2>
        <p>
          Dynamic Space Consulting respects your privacy and is committed to protecting your personal
          information. This Privacy Policy explains how we collect, use, and safeguard your information when you visit
          our website or engage our services. By using our website or services, you agree to the terms of this Privacy Policy.
        </p>

        <h2 className="text-2xl font-semibold mt-6">2. Information We Collect</h2>
        <h3 className="text-xl font-semibold mt-4">A. Personal Information</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Full name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Organization name</li>
          <li>Job title or role</li>
          <li>Billing or payment information (when applicable)</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4">B. Non-Personal Information</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>IP address</li>
          <li>Browser type and version</li>
          <li>Pages visited and time spent on our site</li>
          <li>Device information and operating system</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">3. How We Use Your Information</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Respond to inquiries and service requests.</li>
          <li>Deliver consulting, training, and advisory services.</li>
          <li>Send invoices, confirmations, or administrative messages.</li>
          <li>Share relevant fundraising insights, resources, and updates (if subscribed).</li>
          <li>Improve our website, services, and user experience.</li>
          <li>Comply with legal and regulatory obligations.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">4. Legal Basis for Processing (GDPR Compliance)</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Consent: You have given clear consent for us to process your personal data.</li>
          <li>Contract: Processing is necessary for performing a service agreement or contract.</li>
          <li>Legal Obligation: We must process data to comply with applicable laws.</li>
          <li>Legitimate Interest: Processing is necessary for our legitimate business interests (e.g., improving our services).</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">5. Data Retention</h2>
        <p>
          We retain personal data only for as long as necessary to fulfill the purposes for which it was
          collected, including legal, accounting, or reporting requirements. When no longer needed, data is securely deleted or anonymized.
        </p>

        <h2 className="text-2xl font-semibold mt-6">6. Information Sharing and Disclosure</h2>
        <p>
          We do not sell or rent personal data. We may share information only with:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Trusted third-party service providers (e.g., email platforms, payment processors).</li>
          <li>Legal authorities, if required by law or regulation.</li>
        </ul>
        <p>All third parties are bound by confidentiality agreements and required to protect your data.</p>

        <h2 className="text-2xl font-semibold mt-6">7. Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to protect your data from unauthorized access, alteration, or disclosure.
          These include encryption, secure servers, password protection, and limited employee access.
        </p>

        <h2 className="text-2xl font-semibold mt-6">8. Cookies and Tracking Technologies</h2>
        <p>
          Our website may use cookies to enhance your browsing experience. Cookies help us understand user behavior and improve our site performance.
          You can modify your browser settings to disable cookies, but some features of the site may not function properly as a result.
        </p>

        <h2 className="text-2xl font-semibold mt-6">9. Your Data Protection Rights</h2>
        <p>
          Depending on your location, you have the right to:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Access your personal data.</li>
          <li>Request correction of inaccurate information.</li>
          <li>Request deletion of your data (“right to be forgotten”).</li>
          <li>Withdraw consent at any time.</li>
          <li>Object to or restrict processing.</li>
          <li>Request data portability.</li>
        </ul>
        <p>To exercise any of these rights, contact us at <a href="mailto:info@dynamicspaceconsulting.com" className="text-blue-600 hover:underline">info@dynamicspaceconsulting.com</a>.</p>

        <h2 className="text-2xl font-semibold mt-6">10. International Data Transfers</h2>
        <p>
          Because Dynamic Space Consulting operates globally, your data may be processed or stored outside your country. We ensure that all data transfers comply with applicable data protection laws and that adequate safeguards are in place.
        </p>

        <h2 className="text-2xl font-semibold mt-6">11. Third-Party Links</h2>
        <p>
          Our website may include links to third-party websites. We are not responsible for the privacy practices or content of those websites. We encourage you to review their privacy policies before sharing personal information.
        </p>

        <h2 className="text-2xl font-semibold mt-6">12. Updates to This Policy</h2>
        <p>
          We may revise this Privacy Policy from time to time. The updated version will be posted on this page with a new “Effective Date.” Please review it periodically to stay informed about how we protect your data.
        </p>

        <h2 className="text-2xl font-semibold mt-6">13. Contact Us</h2>
        <p>
          If you have any questions, concerns, or requests about this Privacy Policy, please contact us at:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Email: <a href="mailto:info@dynamicspaceconsulting.com" className="text-blue-600 hover:underline">info@dynamicspaceconsulting.com</a></li>
          <li>Website: <a href="https://www.dynamicspaceconsulting.com" className="text-blue-600 hover:underline">www.dynamicspaceconsulting.com</a></li>
        </ul>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
