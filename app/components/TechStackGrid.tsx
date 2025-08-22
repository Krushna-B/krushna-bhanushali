
import { ReactElement } from "react";
import { SiNextdotjs, SiReact, SiTailwindcss, SiTypescript, SiPython, SiPostgresql, SiDocker} from "react-icons/si";

const stack = [
  { name: "Next.js",      icon: SiNextdotjs,  color: "#000000"  },
  { name: "React",        icon: SiReact,      color: "#61DAFB"  },
  { name: "Tailwind",     icon: SiTailwindcss,color: "#38BDF8"  },
  { name: "TypeScript",   icon: SiTypescript, color: "#3178C6"  },
  { name: "Python",       icon: SiPython,     color: "#3776AB"  },
  { name: "PostgreSQL",   icon: SiPostgresql, color: "#4169E1"  },
  { name: "Docker",       icon: SiDocker,     color: "#2496ED"  },
];

export default function TechStackGrid() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-20">
      <h2 className="text-3xl font-semibold tracking-tight text-center">Tech I use</h2>
      <p className="text-muted-foreground text-center mt-2 max-w-2xl mx-auto">
        Swap these with your own stack—icons are just placeholders.
      </p>

      <div className="mt-10 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-8 gap-4">
        {stack.map((s) => {
          const Icon = s.icon as unknown as (props: any) => ReactElement;
          return (
            <div
              key={s.name}
              className="group rounded-2xl border p-5 flex flex-col items-center justify-center gap-3 transition
                         hover:shadow-lg hover:border-transparent
                         hover:bg-gradient-to-br hover:from-primary/10 hover:to-accent/10"
            >
              <div className="text-3xl drop-shadow-sm" style={{ color: s.color }}>
                <Icon />
              </div>
              <span className="text-xs text-muted-foreground group-hover:text-foreground">{s.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  )
}