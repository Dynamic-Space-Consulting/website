import { HeroSection } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import Socials from "../components/Socials";

export default function BlogPage() {
  return (
    <main>
      <Navbar />
      <HeroSection
        bgImage="/blog-hero.png"
        mainText="Blog"
        subText="Explore articles, guides, and resources to help you unlock funding and scale your impact."
        button={false}
      />
      <div
        className="container h-screen mx-auto px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage: `url('/blog.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col items-center justify-center h-full text-center text-gray-800  p-8 space-y-4">
          <h3 className="text-4xl font-bold font-sans-pro text-[#0A3D62]">
            Coming Soon
          </h3>
          <p className="text-lg font-normal font-inter text-[#4A5568] max-w-2xl">
            Discover our blog for a better understanding on latest trends and
            insights. Here, we bring you engaging, up-to-date posts that keep
            you connected with us. See our posts in action by visiting our
            socials below!
          </p>
          <Socials />
        </div>
      </div>
    </main>
  );
}
