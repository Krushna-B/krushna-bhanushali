"use client";

import { ArrowUpRight, Link, LinkIcon, Send } from "lucide-react";
import { useState } from "react";

const GithubLink = "https://github.com/Krushna-B";
const LinkedInLink = "https://www.linkedin.com/in/krushna-bhanushali/";
const Xlink = "";
const Email = "Krushna.Bhanushali@unc.edu";

export default function Contact() {
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xeeqnzwe";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };
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
        <form className="w-full md:w-1/2 space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <input
              name="name"
              type="text"
              placeholder="Name"
              value={formData.name ?? ""}
              onChange={handleChange}
              className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all placeholder:text-zinc-600"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email ?? ""}
              onChange={handleChange}
              className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all placeholder:text-zinc-600"
              required
            />
          </div>

          <textarea
            name="message"
            rows={4}
            placeholder="Message"
            value={formData.message ?? ""}
            onChange={handleChange}
            className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all placeholder:text-zinc-600 resize-none"
            required
          />

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full bg-white text-black font-medium text-sm py-3 rounded-lg hover:bg-zinc-200 transition-colors flex justify-center items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
            <Send size={14} />
          </button>

          {status === "sent" && (
            <p className="text-sm text-zinc-400">
              Sent - I’ll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-400">
              Something went wrong. Try again.
            </p>
          )}
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
