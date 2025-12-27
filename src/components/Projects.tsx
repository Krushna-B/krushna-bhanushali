"use client";

import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  tags: string[];
  isLarge?: boolean;
  glowPosition?: "right" | "left";
  githubUrl?: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: "Sentinel",
    description: "Application for real-time satellite visualization.",
    tags: ["Python", "FastAPI", "PostgreSQL", "Next.js"],
    isLarge: true,
    glowPosition: "left",
    githubUrl: "https://github.com/Krushna-B/Sentinel",
    image: "/projects/Sentinel2.png",
  },
  {
    title: "C Shell",
    description:
      "Designed a minimal Unix shell in C supporting built-ins, tokenization, and process launching via fork/exec",
    tags: ["C", "OS", "Make"],
    glowPosition: "left",
    githubUrl: "https://github.com/Krushna-B/c-shell",
    image: "",
  },
  {
    title: "Redis Clone",
    description:
      "Hardware accelerator for CNN inference on Artix-7 architecture.",
    tags: ["C", "Network Programming", "Data Structures"],
  },
  {
    title: "TESAA Flight Computer",
    description:
      "Low-cost myoelectric prosthetic hand using EMG sensors and TinyML for gesture classification (94% accuracy).",
    tags: [
      "Commerial Hardware",
      "Embedded Systems,",
      "PCB Design",
      "Power Electronics",
    ],
    isLarge: true,
    glowPosition: "left",
    image: "/projects/TESSA.png",
  },
  {
    title: "Flight Computer Software",
    description:
      "ML dashboard visualizing neural network training in real-time for educational purposes.",
    tags: ["C", "Embedded Systems", "FreeRTOS", "ESP-IDF", "Firmware"],
    isLarge: true,
  },
  // {
  //   title: "Pineapple",
  //   description:
  //     "ML dashboard visualizing neural network training in real-time for educational purposes.",
  //   tags: ["Python", "TensorFlow"],
  // },
];

export default function Projects() {
  return (
    <section id="projects" className="mb-32">
      <div className="flex items-end justify-between mb-8">
        <h2 className="text-2xl font-medium text-white tracking-wide">
          Selected Works
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`group relative bg-zinc-900/40 border border-zinc-800/50 rounded-lg overflow-hidden min-h-[300px] flex flex-col justify-between p-6 cursor-pointer transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/60 ${
              project.isLarge ? "md:col-span-2" : ""
            }`}
          >
            {/* Project Image */}
            {project.image && (
              <div className="absolute inset-0 z-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-40 group-hover:opacity-80 transition-opacity duration-500"
                />
              </div>
            )}

            {/* Hover Arrow */}
            <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ArrowUpRight
                size={20}
                className="text-white"
                href={project.githubUrl}
              />
            </div>

            {/* Content */}
            <div className="mt-auto z-10">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider bg-white/5 text-zinc-400 rounded border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-zinc-500 hover:text-white transition-colors"
                  >
                    <Github size={18} strokeWidth={1.5} />
                  </a>
                )}
              </div>

              {/* Title */}
              <h3 className="text-xl font-medium text-white mb-2 group-hover:text-zinc-100 transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p
                className={`text-sm text-zinc-500 ${
                  project.isLarge ? "max-w-md" : ""
                }`}
              >
                {project.description}
              </p>
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent pointer-events-none"></div>

            {/* Glow Effect for Large Cards */}
            {project.isLarge && project.glowPosition === "right" && (
              <div className="absolute top-8 right-8 w-64 h-64 bg-zinc-800/30 rounded-full blur-3xl group-hover:bg-zinc-700/30 transition-colors duration-700 pointer-events-none"></div>
            )}
            {project.isLarge && project.glowPosition === "left" && (
              <div className="absolute top-8 left-8 w-64 h-64 bg-zinc-800/20 rounded-full blur-3xl group-hover:bg-zinc-700/20 transition-colors duration-700 pointer-events-none"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
