import { Download, ArrowRight } from "lucide-react";

const jobs = [
  {
    title: "AI Researcher",
    company: "Bai Lab",
    location: "UNC Chapel Hill",
    period: "November 2024 - Present",
    responsibilities: [
      "Implemented high-throughput data ingestion measured by 4.32 million readings per day by streaming 100 sensor readings/sec from Web Bluetooth Low Energy (Web BLE) into Firestore.",
      "Applied a Conv2D - GRU hybrid deep learning model in PyTorch to recognize 26 ASL gestures from 48 NIRS photodiode signals via wearables sensors.",
    ],
  },
  {
    title: "Autonomous Vehicle Engineer",
    company: "Rams Engineering",
    location: "UNC Chapel Hill",
    period: "Auguest 2025 - Present",
    responsibilities: [
      "Developed an interactive data visualization tool for analyzing climate change patterns using D3.js.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Radiant Space",
    location: "UNC Chapel Hill",
    period: "April 2025 - Present",
    responsibilities: [
      "Developed an interactive data visualization tool for analyzing climate change patterns using D3.js.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="mb-32">
      <div className="flex items-end justify-between mb-12">
        <h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight">
          Work History
        </h2>
        <a
          href="#"
          className="hidden md:flex items-center gap-1 text-sm text-zinc-500 hover:text-white transition-colors"
        >
          Download Resume
          <Download size={14} />
        </a>
      </div>

      <div className="relative space-y-12 pl-2">
        {/* Vertical Line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-[1px] bg-zinc-800"></div>

        {jobs.map((job, index) => (
          <div key={index} className="relative pl-8 group">
            <div className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full bg-zinc-950 border border-zinc-600 group-hover:border-white group-hover:bg-zinc-800 transition-colors z-10"></div>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
              <div>
                <h3 className="text-lg font-medium text-white group-hover:text-indigo-300 transition-colors">
                  {job.title}
                </h3>
                <div className="text-sm text-zinc-500">
                  {job.company} • {job.location}
                </div>
              </div>
              <span className="text-xs font-medium text-zinc-500 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
                {job.period}
              </span>
            </div>
            <ul className="list-none space-y-2 mt-4 text-sm text-zinc-400 leading-relaxed">
              {job.responsibilities.map((responsibility, respIndex) => (
                <li key={respIndex} className="flex gap-3">
                  <ArrowRight
                    size={14}
                    className="shrink-0 mt-0.5 text-zinc-600"
                  />
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
