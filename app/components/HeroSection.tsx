import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";


const headingText = "Krushna Bhanushali"
const descriptionText = "B.S. Computer Science | Minor in Neuroscience and Engineering @ UNC Chapel Hill"        

const linkedinURL = "https://linkedin.com/in/krushna-bhanushali";
const githubURL = "https://github.com/Krushna-B";
const instagramURL = "https://instagram.com/krushnabhanushali";

export default function HeroSection() {
  return (
    <section id="home" className="mx-auto max-w-6xl px-4 pt-30 pb-12">
      <div className="flex flex-col items-center text-center gap-3">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
          {headingText}
        </h1>

        <p className="mt-4 text-muted-foreground">
          {descriptionText}
        </p>

        <div className="mt-6 flex items-center gap-4">
          <Link
            href="#work"
            className="rounded-lg bg-primary text-primary-foreground px-5 py-3 hover:opacity-90 transition"
          >
            View projects
          </Link>
          <Link
            href="#contact"
            className="rounded-lg border px-5 py-3 hover:bg-muted transition"
          >
            Contact
          </Link>
        </div>
       

        <div className="mt-4 flex items-center gap-4 text-muted-foreground">
          <Link
              href={githubURL}
              target="_blank"
              aria-label="GitHub"
            >
              <div className="p-3 bg-gradient-to-br from-gray-800 to-gray-700 rounded-full shadow-lg transform transition hover:scale-110 hover:rotate-6">
                <FaGithub className="w-5 h-5 text-white" />
              </div>
            </Link>

          <Link
            href={linkedinURL}
            target="_blank"
            aria-label="LinkedIn"
          >
            <div className="p-3 bg-gradient-to-br from-blue-700 to-blue-500 rounded-full shadow-lg transform transition hover:scale-110 hover:-rotate-6">
              <FaLinkedin className="w-5 h-5 text-white" />
            </div>
          </Link>


            <Link
            href={instagramURL}
            target="_blank"
            aria-label="Instagram"
          >
            <div className="p-3 bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-500 rounded-full shadow-lg transform transition hover:scale-110 hover:rotate-6">
              <FaInstagram className="w-5 h-5 text-white" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}



