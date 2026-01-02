"use client";

import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/data/projectsData";

export default function Projects() {
  return (
    <section id="projects" className="mb-32">
      <div className="flex items-end justify-between mb-8">
        <h2 className="text-2xl font-medium text-white tracking-wide">
          Selected Works
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projectsData.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${project.id}`}
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
              <ArrowUpRight size={20} className="text-white" />
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
                  <Github
                    size={18}
                    strokeWidth={1.5}
                    className="text-zinc-500"
                  />
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
                {project.shortDescription}
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
          </Link>
        ))}
      </div>
    </section>
  );
}
