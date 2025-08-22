import { link } from "fs";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";



const EmailURL = "mailto:Krushna.Bhanushali@unc.edu";
const githubURL= "https://github.com/Krushna-B";
const linkedinURL = "https://linkedin.com/in/krushna-bhanushali";
const instagramURL =  "https://instagram.com/krushnabhanushali";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
      <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card text-card-foreground p-6 sm:p-8 md:p-12 shadow-sm">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground text-center">
          Let’s build something great.
        </h2>
        <p className="mt-3 text-center text-muted-foreground max-w-2xl mx-auto">
          I’m currently open to internships oppurtunites and collabs. Feel free to reach out even if it’s just a quick hello.
        </p>


        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">

          <a
            href={EmailURL}
            aria-label="Email me"
            className="inline-flex items-center justify-center gap-2 rounded-xl
                       px-5 py-3 bg-primary text-primary-foreground hover:opacity-90 transition
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <FaEnvelope className="h-4 w-4" />
            <span>Email me</span>
          </a>

      
          <Link
            href={githubURL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex items-center justify-center gap-2 rounded-xl
                       border border-border px-5 py-3 hover:bg-muted transition
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <FaGithub className="h-4 w-4 text-[#181717] dark:text-white" />
            <span>GitHub</span>
          </Link>

      
          <Link
            href={linkedinURL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex items-center justify-center gap-2 rounded-xl
                       border border-border px-5 py-3 hover:bg-muted transition
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <FaLinkedin className="h-4 w-4 text-[#0A66C2]" />
            <span>LinkedIn</span>
          </Link>


          <Link
            href={instagramURL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="inline-flex items-center justify-center gap-2 rounded-xl
                       border border-border px-5 py-3 hover:bg-muted transition
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <FaInstagram className="h-4 w-4 text-[#E4405F]" />
            <span>Instagram</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
