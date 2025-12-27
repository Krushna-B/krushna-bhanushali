import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechArsenel";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      {/* Background Grid */}
      <div
        className="fixed inset-0 z-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundSize: "40px 40px",
          backgroundImage:
            "linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)",
        }}
      ></div>

      {/* Ambient Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <Navbar />

      <main className="relative z-10 pt-32 pb-20 max-w-5xl mx-auto px-6">
        <Hero />
        <Projects />
        <TechStack />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
