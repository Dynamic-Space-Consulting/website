import { HeroSection } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import ContactForm from "./widgets/contact-form";

export default function Contact() {
  return (
    <main>
      <Navbar />
      <HeroSection
        bgImage="/contact-us-hero.png"
        mainText="Contact Us"
        subText="Let's Build Your Funding Strategy Together."
        button={false}
      />
      <ContactForm />
    </main>
  );
}
