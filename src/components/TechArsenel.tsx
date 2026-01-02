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
      { name: "PostgreSQL", isPrimary: false },
      { name: "Redis", isPrimary: false },
      { name: "MongoDB", isPrimary: false },
      { name: "Git", isPrimary: false },
      { name: "Docker", isPrimary: false },
      { name: "Kafka", isPrimary: false },
      { name: "AWS", isPrimary: false },
    ],
  },
  {
    title: "Intelligence",
    skills: [
      { name: "PyTorch", isPrimary: true },
      { name: "TensorFlow", isPrimary: true },
      { name: "NumPy", isPrimary: true },
      { name: "OpenCV", isPrimary: false },
      { name: "Langchain", isPrimary: false },
      { name: "Computer Vision", isPrimary: false },
      { name: "LiDAR/Camera Perception", isPrimary: false },
      { name: "Scikit-learn", isPrimary: false },
      { name: "OpenAI API", isPrimary: false },
      { name: "Pinecone", isPrimary: false },
    ],
  },
  {
    title: "Firmware",
    skills: [
      { name: "Embedded Systems", isPrimary: true },
      { name: "ESP32 / Arduino", isPrimary: false },
      { name: "FreeRTOS", isPrimary: false },
      { name: "I2C/SPI/UART", isPrimary: false },
      { name: "GPIO/ADC/Timers", isPrimary: false },
      { name: "ESP-IDF", isPrimary: false },
      { name: "Sensor Fusion", isPrimary: false },
      { name: "PID Control", isPrimary: false },
      { name: "Linux/Unix", isPrimary: false },
      { name: "ROS2", isPrimary: false },
    ],
  },

  {
    title: "Hardware",
    skills: [
      { name: "KiCAD", isPrimary: false },
      { name: "MATLAB", isPrimary: false },
      { name: "Simulink", isPrimary: false },
      { name: "Circuit Design", isPrimary: false },
      { name: "Power Electronics", isPrimary: false },
      { name: "Fusion 360", isPrimary: false },
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
