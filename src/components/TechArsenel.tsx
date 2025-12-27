const skillCategories = [
  {
    title: "Software",
    skills: [
      { name: "Python", isPrimary: true },
      { name: "Java", isPrimary: false },
      { name: "C", isPrimary: false },
      { name: "Typescript", isPrimary: false },
      { name: "ReactJS", isPrimary: false },
      { name: "NodeJS", isPrimary: false },
      { name: "Django", isPrimary: false },
      { name: "Flask", isPrimary: false },
    ],
  },
  {
    title: "Intelligence",
    skills: [
      { name: "PyTorch", isPrimary: true },
      { name: "OpenCV", isPrimary: false },
      { name: "Computer Vision", isPrimary: false },
      { name: "Reinforcement Learning", isPrimary: false },
    ],
  },
  {
    title: "Firmware",
    skills: [
      { name: "Embedded Systems", isPrimary: true },
      { name: "ESP32 / Arduino", isPrimary: false },
      { name: "KiCad", isPrimary: false },
      { name: "SolidWorks", isPrimary: false },
    ],
  },

  {
    title: "Cloud",
    skills: [
      { name: "AWS", isPrimary: false },
      { name: "Docker / K8s", isPrimary: false },
      { name: "Terraform", isPrimary: false },
      { name: "PostgreSQL", isPrimary: false },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="stack" className="mb-32">
      <div className="flex items-end justify-between mb-8 border-b border-zinc-900 pb-4">
        <h2 className="text-2xl font-medium text-white tracking-wide">
          Technical Arsenal
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {skillCategories.map((category) => (
          <div key={category.title} className="space-y-4">
            <div className="text-s font-semibold text-zinc-500 uppercase tracking-widest">
              {category.title}
            </div>
            <ul className="space-y-2 text-s text-zinc-400">
              {category.skills.map((skill) => (
                <li key={skill.name} className="flex items-center gap-2">
                  <span
                    className={`w-1 h-1 rounded-full ${
                      skill.isPrimary ? "bg-white" : "bg-zinc-700"
                    }`}
                  ></span>
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
