// app/components/CTASection.tsx
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative md:w-[70%] max-w-[80rem] flex items-center justify-center md:mx-auto mx-4 bg-[#0A3251] text-white md:py-30 py-10 px-6 rounded-lg my-20">
      <div className="absolute inset-0 bg-[url('/waves.png')] bg-cover bg-center opacity-80 rounded-lg" />
      <div className="relative max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-extrabold leading-snug font-sans-pro">
          Ready To Unlock Funding Opportunities <br /> For Your Organization?
        </h2>
        <p className="text-base md:text-lg text-white font-normal max-w-2xl mx-auto">
          Partner with Dynamic Space Consulting today and fuel your vision with
          sustainable resources.
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Button asChild className="text-sm sm:text-base px-6 py-3">
              <Link href="/contact-us">Book a Free Consultation</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="text-sm sm:text-base px-6 py-3"
            >
              <Link href="/contact-us">Discover Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
