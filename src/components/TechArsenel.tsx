const skillCategories = [
  {
    title: "Software",
    skills: [
      { name: "Python", isPrimary: true },
      { name: "Java", isPrimary: true },
      { name: "C", isPrimary: true },
      { name: "Typescript", isPrimary: true },
      { name: "ReactJS", isPrimary: true },
      { name: "NodeJS", isPrimary: true },
      { name: "Django", isPrimary: true },
      { name: "Flask", isPrimary: true },
      { name: "PostgreSQL", isPrimary: true },
      { name: "Redis", isPrimary: true },
      { name: "MongoDB", isPrimary: true },
      { name: "Git", isPrimary: true },
      { name: "Docker", isPrimary: true },
      { name: "Kafka", isPrimary: true },
      { name: "AWS", isPrimary: true },
    ],
  },
  {
    title: "Intelligence",
    skills: [
      { name: "PyTorch", isPrimary: true },
      { name: "TensorFlow", isPrimary: true },
      { name: "NumPy", isPrimary: true },
      { name: "OpenCV", isPrimary: true },
      { name: "Langchain", isPrimary: true },
      { name: "Computer Vision", isPrimary: true },
      { name: "LiDAR/Camera Perception", isPrimary: true },
      { name: "Scikit-learn", isPrimary: true },
      { name: "OpenAI API", isPrimary: true },
      { name: "Pinecone", isPrimary: true },
    ],
  },
  {
    title: "Firmware",
    skills: [
      { name: "Embedded Systems", isPrimary: true },
      { name: "ESP32 / Arduino", isPrimary: true },
      { name: "FreeRTOS", isPrimary: true },
      { name: "I2C/SPI/UART", isPrimary: true },
      { name: "GPIO/ADC/Timers", isPrimary: true },
      { name: "ESP-IDF", isPrimary: true },
      { name: "Sensor Fusion", isPrimary: true },
      { name: "PID Control", isPrimary: true },
      { name: "Linux/Unix", isPrimary: true },
      { name: "ROS2", isPrimary: true },
    ],
  },

  {
    title: "Hardware",
    skills: [
      { name: "KiCAD", isPrimary: true },
      { name: "MATLAB", isPrimary: true },
      { name: "Simulink", isPrimary: true },
      { name: "Circuit Design", isPrimary: true },
      { name: "Power Electronics", isPrimary: true },
      { name: "Fusion 360", isPrimary: true },
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
