import { ArrowRight, Github, Linkedin } from "lucide-react";
import Link from "next/link";

const HeroHeader = "";
const HeroDescription =
  "I’m a UNC student passionate about software in intelligent systems, robotics, and aerospace. Currently learning and developing projects across software, hardware, and autonomous systems.";

const GithubLink = "https://github.com/Krushna-B";
const LinkedInLink = "https://www.linkedin.com/in/krushna-bhanushali/";

export default function Hero() {
  return (
    <section
      id="about"
      className="min-h-[60vh] flex flex-col justify-center mb-24"
    >
      {/* Status Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/50 border border-zinc-800 w-fit mb-8">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="text-xs font-medium text-zinc-300">
          Open to opportunities
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight mb-6 leading-[1.1]">
        Building ambitious systems <br className="hidden md:block" />
        <span className="text-zinc-500">across software and hardware.</span>
      </h1>

      {/* Description */}
      <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10 font-light leading-relaxed">
        {HeroDescription}
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-wrap items-center gap-4">
        <Link
          href="#projects"
          className="group flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium text-sm hover:bg-zinc-200 transition-all"
        >
          View Projects
          <ArrowRight
            size={16}
            strokeWidth={1.5}
            className="group-hover:translate-x-0.5 transition-transform"
          />
        </Link>
        <a
          href={GithubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 border border-zinc-800 text-white font-medium text-sm hover:bg-zinc-800 transition-colors"
        >
          <Github size={16} strokeWidth={1.5} />
          GitHub
        </a>
        <a
          href={LinkedInLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 border border-zinc-800 text-white font-medium text-sm hover:bg-zinc-800 transition-colors"
        >
          <Linkedin size={16} strokeWidth={1.5} />
          LinkedIn
        </a>
      </div>

      {/* Quick Stats */}
      {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 border-t border-zinc-800 pt-8">
        <div>
          <h3 className="text-3xl text-white font-semibold tracking-tight">
            3+
          </h3>
          <p className="text-xs text-zinc-500 uppercase tracking-widest mt-1">
            Years Coding
          </p>
        </div>
        <div>
          <h3 className="text-3xl text-white font-semibold tracking-tight">
            20+
          </h3>
          <p className="text-xs text-zinc-500 uppercase tracking-widest mt-1">
            Projects Shipped
          </p>
        </div>
        <div>
          <h3 className="text-3xl text-white font-semibold tracking-tight">
            1k+
          </h3>
          <p className="text-xs text-zinc-500 uppercase tracking-widest mt-1">
            Commits 2023
          </p>
        </div>
        <div>
          <h3 className="text-3xl text-white font-semibold tracking-tight">
            100%
          </h3>
          <p className="text-xs text-zinc-500 uppercase tracking-widest mt-1">
            Enthusiasm
          </p>
        </div>
      </div> */}
    </section>
  );
}
