"use client";

import { useEffect, useState, useRef } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer"; // Assuming you have a Footer component

export default function PrivacyPolicyPage() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target === sectionRef.current) {
            setContentVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative w-full h-screen flex items-center justify-center bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/privacy-policy.png')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="max-w-2xl mx-auto text-base md:text-lg">
            Understand how we collect, use, and protect your information
          </p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section
        ref={sectionRef}
        className={`max-w-6xl mx-auto px-6 md:px-10 py-12 md:py-20 transition-all duration-900 ease-out transform ${
          contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="space-y-6 text-[#545556]">
          <p><strong>Effective Date:</strong> 10th October, 2025</p>
          <p><strong>Website:</strong> https://www.dynamicspaceconsulting.com</p>
          <p><strong>Company:</strong> Dynamic Space Consulting (“we,” “our,” “us”)</p>

          <h2 className="text-xl md:text-2xl font-semibold">1. Introduction</h2>
          <p>
            Dynamic Space Consulting respects your privacy and is committed to protecting your personal information. 
            This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or engage our services. 
            By using our website or services, you agree to the terms of this Privacy Policy.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold">2. Information We Collect</h2>
          <p><strong>A. Personal Information</strong></p>
          <ul className="list-disc ml-6">
            <li>Full name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Organization name</li>
            <li>Job title or role</li>
            <li>Billing or payment information (when applicable)</li>
          </ul>
          <p><strong>B. Non-Personal Information</strong></p>
          <ul className="list-disc ml-6">
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Pages visited and time spent on our site</li>
            <li>Device information and operating system</li>
          </ul>

          <h2 className="text-xl md:text-2xl font-semibold">3. How We Use Your Information</h2>
          <ul className="list-disc ml-6">
            <li>Respond to inquiries and service requests.</li>
            <li>Deliver consulting, training, and advisory services.</li>
            <li>Send invoices, confirmations, or administrative messages.</li>
            <li>Share relevant fundraising insights, resources, and updates (if subscribed).</li>
            <li>Improve our website, services, and user experience.</li>
            <li>Comply with legal and regulatory obligations.</li>
          </ul>

          <h2 className="text-xl md:text-2xl font-semibold">4. Legal Basis for Processing (GDPR Compliance)</h2>
          <ul className="list-disc ml-6">
            <li>Consent: You have given clear consent for us to process your personal data.</li>
            <li>Contract: Processing is necessary for performing a service agreement or contract.</li>
            <li>Legal Obligation: We must process data to comply with applicable laws.</li>
            <li>Legitimate Interest: Processing is necessary for our legitimate business interests.</li>
          </ul>

          <h2 className="text-xl md:text-2xl font-semibold">5. Data Retention</h2>
          <p>
            We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, including legal, accounting, or reporting requirements. 
            When no longer needed, data is securely deleted or anonymized.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold">6. Information Sharing and Disclosure</h2>
          <p>
            We do not sell or rent personal data. We may share information only with trusted third-party service providers or legal authorities as required by law.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold">7. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your data from unauthorized access, alteration, or disclosure.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold">8. Cookies and Tracking Technologies</h2>
          <p>
            Our website may use cookies to enhance your browsing experience. You can modify your browser settings to disable cookies, but some features may not function properly.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold">9. Your Data Protection Rights</h2>
          <p>Depending on your location, you have the right to access, correct, delete, or restrict processing of your personal data. Contact us at info@dynamicspaceconsulting.com to exercise your rights.</p>

          <h2 className="text-xl md:text-2xl font-semibold">10. International Data Transfers</h2>
          <p>Your data may be processed or stored outside your country, with safeguards to comply with data protection laws.</p>

          <h2 className="text-xl md:text-2xl font-semibold">11. Third-Party Links</h2>
          <p>We are not responsible for the privacy practices or content of third-party websites. Please review their policies before sharing personal information.</p>

          <h2 className="text-xl md:text-2xl font-semibold">12. Updates to This Policy</h2>
          <p>We may revise this Privacy Policy from time to time. The updated version will be posted on this page with a new “Effective Date.”</p>

          <h2 className="text-xl md:text-2xl font-semibold">13. Contact Us</h2>
          <p>Email: info@dynamicspaceconsulting.com</p>
          <p>Website: www.dynamicspaceconsulting.com</p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
