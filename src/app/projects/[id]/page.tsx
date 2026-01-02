"use client";

import { useParams, useRouter } from "next/navigation";
import { projectsData } from "@/data/projectsData";
import { ArrowLeft, Github, ExternalLink, FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const projectId = params.id as string;

  const project = projectsData.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-medium text-white mb-4">
            Project not found
          </h1>
          <Link
            href="/#projects"
            className="text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.15] pointer-events-none"></div>
      <div className="fixed inset-0 bg-gradient-radial from-indigo-900/20 via-transparent to-transparent pointer-events-none"></div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-6 py-12 md:py-20">
        {/* Back Button */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform"
          />
          <span className="text-sm">Back to Projects</span>
        </Link>

        {/* Header Section */}
        <div className="mb-12">
          {/* Status Badge */}
          <div className="flex items-center gap-3 mb-6">
            <span
              className={`px-3 py-1 text-xs font-medium uppercase tracking-wider rounded-full border ${
                project.status === "Featured"
                  ? "bg-indigo-500/10 text-indigo-400 border-indigo-500/20"
                  : project.status === "Completed"
                  ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                  : "bg-zinc-500/10 text-zinc-400 border-zinc-500/20"
              }`}
            >
              {project.status}
            </span>
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium uppercase tracking-wider bg-white/5 text-zinc-400 rounded-full border border-white/5"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-medium text-white mb-6 tracking-tight">
            {project.title}
          </h1>

          {/* Short Description */}
          <p className="text-lg text-zinc-400 leading-relaxed max-w-3xl">
            {project.shortDescription}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 mt-8">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black text-sm font-medium rounded-lg hover:bg-zinc-200 transition-colors"
              >
                <Github size={16} />
                View Code
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-900 text-white text-sm font-medium rounded-lg border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800 transition-colors"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
            {project.blogUrl && (
              <a
                href={project.blogUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-900 text-white text-sm font-medium rounded-lg border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800 transition-colors"
              >
                <FileText size={16} />
                Read Blog Post
              </a>
            )}
          </div>
        </div>

        {/* Hero Image */}
        {project.image && (
          <div className="relative w-full h-[300px] md:h-[500px] mb-16 rounded-xl overflow-hidden border border-zinc-800/50 bg-zinc-900/40">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-contain"
              priority
            />
          </div>
        )}

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Project Overview - Left Column (2/3 width) */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-medium text-white mb-4 border-l-2 border-indigo-500 pl-4">
                Project Overview
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                {project.overview}
              </p>
            </div>

            {/* Features */}
            {project.features && project.features.length > 0 && (
              <div>
                <h3 className="text-xl font-medium text-white mb-4">
                  Key Features
                </h3>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0"></div>
                      <span className="text-zinc-400 leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Challenges */}
            {project.challenges && project.challenges.length > 0 && (
              <div>
                <h3 className="text-xl font-medium text-white mb-4">
                  Technical Challenges
                </h3>
                <ul className="space-y-3">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 mt-2 flex-shrink-0"></div>
                      <span className="text-zinc-400 leading-relaxed">
                        {challenge}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Outcomes */}
            {project.outcomes && project.outcomes.length > 0 && (
              <div>
                <h3 className="text-xl font-medium text-white mb-4">
                  Outcomes & Impact
                </h3>
                <ul className="space-y-3">
                  {project.outcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></div>
                      <span className="text-zinc-400 leading-relaxed">
                        {outcome}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Project Info - Right Sidebar (1/3 width) */}
          <div className="md:col-span-1">
            <div className="bg-zinc-900/40 border border-zinc-800/50 rounded-lg p-6 sticky top-8">
              <h3 className="text-lg font-medium text-white mb-6">
                Project Info
              </h3>

              <div className="space-y-5">
                {/* Context */}
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-zinc-500 mb-2">
                    Context
                  </h4>
                  <p className="text-sm text-white">{project.context}</p>
                </div>

                {/* GitHub */}
                {project.githubUrl && (
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-zinc-500 mb-2">
                      GitHub
                    </h4>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors break-all"
                    >
                      View Repository
                    </a>
                  </div>
                )}

                {/* Status */}
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-zinc-500 mb-2">
                    Status
                  </h4>
                  <p className="text-sm text-white">{project.status}</p>
                </div>

                {/* Year */}
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-zinc-500 mb-2">
                    Year
                  </h4>
                  <p className="text-sm text-white">{project.year}</p>
                </div>

                {/* Role */}
                {project.role && (
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-zinc-500 mb-2">
                      Role
                    </h4>
                    <p className="text-sm text-white">{project.role}</p>
                  </div>
                )}

                {/* Technologies */}
                {project.technologies && project.technologies.length > 0 && (
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-zinc-500 mb-2">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-white/5 text-zinc-400 rounded border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTAs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* All Projects CTA */}
          <Link
            href="/#projects"
            className="group relative bg-zinc-900/40 border border-zinc-800/50 rounded-lg p-6 hover:border-zinc-700 hover:bg-zinc-900/60 transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium text-white mb-1">
                  All Projects
                </h3>
                <p className="text-sm text-zinc-400">
                  View my complete portfolio
                </p>
              </div>
              <ArrowLeft
                size={20}
                className="text-zinc-500 group-hover:text-white group-hover:-translate-x-1 transition-all"
              />
            </div>
          </Link>

          {/* Let's Talk CTA */}
          <Link
            href="/#contact"
            className="group relative bg-indigo-500/10 border border-indigo-500/20 rounded-lg p-6 hover:border-indigo-500/30 hover:bg-indigo-500/15 transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium text-white mb-1">
                  Interested? Let&apos;s Talk
                </h3>
                <p className="text-sm text-indigo-400">
                  I&apos;d love to discuss this project with you
                </p>
              </div>
              <ExternalLink
                size={20}
                className="text-indigo-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
