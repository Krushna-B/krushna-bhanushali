"use client";

import { Menu } from "lucide-react";
import Link from "next/link";

const HeaderInitals = "KB";
const Header = "Krushna Bhanushali Portfolio";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass-nav">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="#"
          className="text-white font-medium tracking-tight flex items-center gap-2 group"
        >
          <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-zinc-600 transition-colors duration-300">
            <span className="font-semibold text-sm tracking-tighter">
              {HeaderInitals}
            </span>
          </div>
          <span className="opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 text-sm text-zinc-400">
            {Header}
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="#about" className="hover:text-white transition-colors">
            About
          </Link>
          <Link
            href="#experience"
            className="hover:text-white transition-colors"
          >
            Experience
          </Link>
          <Link href="#projects" className="hover:text-white transition-colors">
            Projects
          </Link>
          <Link
            href="#contact"
            className="px-4 py-2 rounded-full bg-white text-black hover:bg-zinc-200 transition-colors text-xs font-semibold tracking-wide"
          >
            Let&apos;s Talk
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <button className="md:hidden text-white">
          <Menu size={24} strokeWidth={1.5} />
        </button>
      </div>
    </nav>
  );
}
