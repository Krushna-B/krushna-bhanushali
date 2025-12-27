"use client";

import { ArrowUpRight, Link, LinkIcon, Send } from "lucide-react";
import { useState } from "react";

const GithubLink = "https://github.com/Krushna-B";
const LinkedInLink = "https://www.linkedin.com/in/krushna-bhanushali/";
const Xlink = "";
const Email = "Krushna.Bhanushali@unc.edu";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async () => {};

  return (
    <section id="contact" className="border-t border-zinc-800 pt-16">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div className="max-w-md">
          <h2 className="text-2xl font-medium text-white tracking-tight mb-4">
            Ready to build something amazing?
          </h2>
          <p className="text-zinc-400 text-sm mb-6">
            Currently looking for Summer 2026 Internships. I&apos;m always open
            to discussing new projects, creative ideas or opportunities to be
            part of your visions.
          </p>
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 text-white border-b border-white pb-0.5 hover:text-zinc-300 hover:border-zinc-300 transition-all"
          >
            {Email}
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Contact Form */}
        <form
          className="w-full md:w-1/2 space-y-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all placeholder:text-zinc-600"
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all placeholder:text-zinc-600"
            />
          </div>
          <textarea
            rows={4}
            placeholder="Message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all placeholder:text-zinc-600 resize-none"
          ></textarea>
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full bg-white text-black font-medium text-sm py-3 rounded-lg hover:bg-zinc-200 transition-colors flex justify-center items-center gap-2"
          >
            Send Message
            <Send size={14} />
          </button>
        </form>
      </div>

      {/* Footer */}
      <div className="flex flex-col md:flex-row justify-between items-center pt-16 mt-16 border-t border-zinc-900/50 text-xs text-zinc-600 pb-8">
        <p>© 2025 Krushna Bhanushali Portfolio. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          {/* <a href={Xlink} className="hover:text-zinc-400 transition-colors">
            Twitter
          </a> */}
          <a
            href={LinkedInLink}
            className="hover:text-zinc-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={GithubLink}
            className="hover:text-zinc-400 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
