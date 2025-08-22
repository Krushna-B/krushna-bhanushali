import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-border/50">
      <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Krushna Bhanushali. All rights reserved.
        </p>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="#about" className="hover:text-primary">About</Link>
          <Link href="#work" className="hover:text-primary">Projects</Link>
          <Link href="#skills" className="hover:text-primary">Skills</Link>
          <Link href="#contact" className="hover:text-primary">Contact</Link>
        </nav>
      </div>
    </footer>
  )
}
