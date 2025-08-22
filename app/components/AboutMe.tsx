import React from "react";
import Image from "next/image";





const description = " Hi, I’m Krushna a rising sophomore at UNC Chapel Hill focused on applying full-stack solutions/AI, electrical systems, and mechanical design to tackle challenges in tech, aerospace, and biomedical innovation. I do what it takes to turn ambitious ideas into reliable solutions for humanity. End to end, I design, build, test, and deliver systems that advance tech, aerospace, medicine, and intelligent systems."

export default function AboutMe() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-20">
      <div className="grid md:grid-cols-[1fr_1.5fr] gap-10 items-center">
        <div className="relative aspect-square w-full overflow-hidden rounded-2xl border">
          <Image
            src="/Headshot.jpg"
            alt="Portrait"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="space-y-5">
          <h2 className="text-3xl font-semibold tracking-tight">About</h2>
          <p className="text-muted-foreground">
            {description}
          </p>
          <ul className="grid sm:grid-cols-2 gap-3">
            {[
              "Full-stack development",
              "Deep Learning Research & Applications",
              "Electrical & Embedded Systems",
              "Mechanical Design & Analysis",
            ].map((item) => (
              <li key={item} className="rounded-xl border p-3 text-md">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}