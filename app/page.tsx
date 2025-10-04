import { HeroSection } from "./components/Hero";
import { Navbar } from "./components/Navbar";


export default function HomePage() {
  return (
    <main className="text-white">
      <Navbar />
      <HeroSection />
    
    </main>
  );
}
