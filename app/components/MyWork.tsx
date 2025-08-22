import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";


const projects = [
  { title: "Sentinel — LEO Object Map", image: "", href:"", tags: ["React.Js", "TypeScript", "FastAPI", "PostgreSQL", "AWS Lambda"] },
  { title: "Genesis I", image: "/projects/Genesis2.png",href:"", tags: ["Fusion 360", "OpenRocket", "ANSYS CFD", "Propulsion", "Avionics"]},
  { title: "TESSA – Genesis I Flight Computer", href:"",image: "/projects/TESSA.png", tags: ["Circut Design","Embedded Systems","KiCad","Power Electronics"] },
  { title: "Brain Tumor AI Recognition", href:"",image: "/projects/BrainTumor.png",  tags: ["Python", "PyTorch", "Medical Imaging", "MRI", "CNN"]},
  { title: "MedTrak", image: "/projects/MedTrak.png", href:"",tags: ["Swift", "SwiftUI", "iOS"] },
];

export default function MyWork() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-4 py-20">
      <h2 className="text-3xl font-semibold tracking-tight">Selected work</h2>
      <Separator className="bg-primary-foreground"/>
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <Link key={p.title} href={p.href} className="group overflow-hidden rounded-2xl border bg-card hover:shadow-xl transition">
            <div className="relative aspect-[16/10]">
              <Image src={p.image} alt={p.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
            </div>
            <div className="p-4 space-y-3">
              <div className="font-medium">{p.title}</div>
              <div className="flex flex-wrap gap-2">
                {p.tags.map(t => <span key={t} className="text-xs rounded-full border px-2 py-1 text-muted-foreground">{t}</span>)}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

