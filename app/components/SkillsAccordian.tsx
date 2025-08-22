"use client";

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { useState } from "react";

type Section = { title: string; items: string[] };

export default function SkillsAccordion() {
  const skills: Section[] = [
    {
      title: "Full-Stack Engineering",
      items: ["Python", "Java", "Javascript", "Typescript","C","MATLAB","ReactJS","NodeJS","ExpressJS","TailwindCSS","FastAPI","SQLAlchemy","Git","MongoDB","PostgreSQL","Docker","Apache Kafka","AWS","Firebase","Websockets","RESTful APIS"],
    },
    {
      title: "Deep Learning / ML",
      items: [
        "Python (NumPy, Pandas)",
        "scikit-learn",
        "PyTorch",
        "OpenCV",
        "Jupyter / notebooks",
        "Data preprocessing & augmentation",
        "Model training & evaluation",
        "Hyperparameter tuning",
        "Inference APIs with FastAPI",
        "Dockerized deployment",
        "Visualization (Matplotlib)",
        "FAISS", "LangChain", "GPT-4 API"
      ]
    },
    {
      title: "Embedded Systems",
      items: ["C","KiCad", "PCB Design","Sensor fusion", "I2C","SPI","UART","FreeRTOS","BLE"],
    },
    {
      title: "Mechanical Design",
     items: [
          "CAD (Fusion 360)",
          "MATLAB",
          "Simulink",
          "OpenRocket simulations (stability, trajectory)",
          "ANSYS CFD/thermal analysis",
          "FEA"
        ],
    },
    {
      title: "Electrical Engineering ",
      items: [
            "Schematic capture & PCB layout (KiCad)",
            "SPICE simulation (LTspice/PSPICE)",
            "Simulink",
            "Analog circuits (op-amps, filters, instrumentation)",
            "Power electronics (buck/boost, LDO)",
            "Power integrity (decoupling, ground planes)",
            "Sensors & interfaces (I2C/SPI/UART, GPIO)",
            "Control systems (PID tuning)",

          ],
        }
  ];

  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 lg:px-8 py-16 scroll-mt-20">
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">Skills</h2>

      {/* Use per-item top borders so lines always show */}
      <Accordion type="single" collapsible className="mt-6">
        {skills.map((sec) => (
          <AccordionItem
            key={sec.title}
            value={sec.title}
            className="border-0 border-t border-border first:border-t-0"
          >
            <AccordionTrigger
              className="
                group flex w-full items-center justify-between gap-3
                py-4 md:py-5 text-left text-lg md:text-xl font-medium
                text-foreground hover:no-underline
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring

                /* FORCE the built-in chevron visible + animate */
                [&>svg]:inline-block [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-muted-foreground
                [&>svg]:transition-transform [&>svg]:duration-200
                data-[state=open]:[&>svg]:rotate-180
              "
            >
              {sec.title}
            </AccordionTrigger>

            <AccordionContent className="pb-5">
                <ChipList items={sec.items} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

function ChipList({ items }: { items: string[] }) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? items : items.slice(0, 25);
  const remaining = items.length - visible.length;

  return (
    <div>
      <ul className="mt-1 md:mt-2 flex flex-wrap gap-2">
        {visible.map((item) => (
          <li
            key={item}
            className="rounded-full border border-border bg-muted px-3 py-1
                       text-sm md:text-base text-foreground/90"
          >
            {item}
          </li>
        ))}
      </ul>

      {remaining > 0 && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-3 text-xs md:text-sm text-muted-foreground hover:text-foreground underline"
        >
          {expanded ? "Show less" : `Show all (${remaining} more)`}
        </button>
      )}
    </div>
  );
}