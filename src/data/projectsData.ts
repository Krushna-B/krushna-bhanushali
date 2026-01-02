export interface ProjectData {
  id: string;
  title: string;
  shortDescription: string;
  tags: string[];
  status: "Completed" | "In Progress" | "Featured";
  isLarge?: boolean;
  glowPosition?: "right" | "left";
  githubUrl?: string;
  liveUrl?: string;
  blogUrl?: string;
  image?: string;

  // Detail page data
  overview: string;
  context: string;
  year: string;
  role?: string;
  team?: string;
  technologies?: string[];
  features?: string[];
  challenges?: string[];
  outcomes?: string[];
}

export const projectsData: ProjectData[] = [
  {
    id: "sentinel",
    title: "Sentinel",
    shortDescription:
      "Full Stack application for real-time satellite visualization.",
    tags: ["Python", "FastAPI", "PostgreSQL", "Next.js"],
    status: "Completed",
    isLarge: true,
    glowPosition: "left",
    githubUrl: "https://github.com/Krushna-B/Sentinel",
    image: "/projects/Sentinel2.png",
    overview:
      "Sentinel is a comprehensive full-stack satellite tracking and visualization platform that provides real-time orbital data for thousands of satellites. Built with a Python FastAPI backend and PostgreSQL database, the system efficiently processes and serves satellite telemetry data through a modern Next.js frontend. The application features interactive 3D Earth visualization, real-time satellite position tracking, and detailed orbital parameter displays. Users can click on satellite poitn objects to retireve satellite details such as name, NORAD id, object type, payload type, and position.",
    context: "Personal Project",
    year: "2025",
    role: "Full-Stack Developer",
    technologies: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Next.js",
      "TypeScript",
      "RESTful APIs",
      "Three.js",
      "Docker",
    ],
    // features: [
    //   "Real-time satellite position tracking for 10,000+ satellites",
    //   "Interactive 3D Earth visualization with orbital paths",
    //   "Advanced filtering by satellite category, country, and mission type",
    //   "RESTful API with efficient caching and pagination",
    //   "Responsive design optimized for desktop and mobile",
    //   "Historical orbital data visualization and analysis",
    // ],
    // challenges: [
    //   "Processing and updating TLE (Two-Line Element) data for thousands of satellites efficiently",
    //   "Optimizing database queries for real-time position calculations",
    //   "Rendering performant 3D visualizations with large datasets",
    //   "Implementing proper caching strategies to reduce API load",
    // ],
    // outcomes: [
    //   "Successfully tracks and visualizes 10,000+ satellites in real-time",
    //   "Achieved sub-100ms API response times through optimization",
    //   "Implemented efficient data pipeline processing 50MB+ of satellite data daily",
    // ],
  },
  {
    id: "redis-clone",
    title: "Redis Clone",
    shortDescription:
      "A Redis-style, in-memory key-value server built from scratch in C to learn network programming, event-driven I/O, data structures, and concurrency.",
    tags: ["C", "Network Programming", "Data Structures"],
    status: "Completed",
    glowPosition: "left",
    githubUrl: "https://github.com/Krushna-B/redis-clone",
    overview:
      "A ground-up implementation of a Redis-like in-memory key-value store written in pure C. This project was taken on to develop understanding of network programming, event-driven architecture, and low-level systems programming. The server implements core Redis commands and uses non-blocking I/O with poll for handling concurrent connections efficiently. The implementation includes custom hash table data structures, time-based key expiration, and a custom protocol parser. Built to handle thousands of concurrent connections with minimal latency, this project showcases C programming, socket programming, and the fundamentals of high-performance server design.",
    context: "Learning Project",
    year: "2025",
    role: "Systems Developer",
    technologies: [
      "C",
      "Linux Sockets",
      "poll",
      "Hash Tables",
      "Event-Driven I/O",
      "Event Loops",
    ],
    // features: [
    //   "Non-blocking I/O using epoll for high concurrency",
    //   "Core Redis commands: GET, SET, DEL, EXPIRE, TTL",
    //   "Custom hash table implementation with collision handling",
    //   "Time-based key expiration with efficient cleanup",
    //   "Protocol parser compatible with Redis clients",
    //   "Support for thousands of concurrent connections",
    // ],
    // challenges: [
    //   "Implementing efficient event-driven I/O without external libraries",
    //   "Managing memory safely in C without leaks or undefined behavior",
    //   "Designing a scalable hash table with proper collision resolution",
    //   "Handling partial reads/writes in non-blocking sockets",
    // ],
    // outcomes: [
    //   "Handles 5,000+ concurrent connections with low latency",
    //   "Achieved <1ms response time for basic operations",
    //   "Zero memory leaks verified with Valgrind",
    //   "Deepened understanding of systems programming and network protocols",
    // ],
  },
  {
    id: "mira",
    title: "MIRA",
    shortDescription:
      "Backend for Intelligent conversational AI assistant with RAG-powered contextual memory using LangChain, Pinecone, and OpenAI.",
    tags: ["RAG", "Langchain", "Pinecone", "OpenAI API", "Flask", "Celery"],
    status: "Completed",
    glowPosition: "left",
    githubUrl: "https://github.com/Krushna-B/MIRA",
    overview:
      "MIRA (Memory-Integrated Retrieval Assistant) is a conversational AI backend that leverages Retrieval-Augmented Generation (RAG) to provide context-aware responses with long-term memory. The system uses LangChain to orchestrate document processing, embedding generation, and retrieval workflows, while Pinecone serves as the vector database for semantic search. OpenAI's language models power the conversational interface, enhanced by retrieved context from the knowledge base. Built with Flask and Celery, the backend handles asynchronous document processing, embedding generation, and maintains conversation history for personalized interactions. The system demonstrates understanding of modern LLM architectures, vector databases, and production-ready AI application design.",
    context: "Personal Project",
    year: "2025",
    role: "Backend Engineer & AI Developer",
    technologies: [
      "Python",
      "LangChain",
      "Pinecone",
      "OpenAI API",
      "Flask",
      "Celery",
      "Redis",
      "Vector Embeddings",
    ],
    // features: [
    //   "RAG-powered conversational AI with contextual memory",
    //   "Asynchronous document processing and embedding generation",
    //   "Semantic search using vector similarity in Pinecone",
    //   "Conversation history management with context injection",
    //   "Multi-format document support (PDF, TXT, Markdown)",
    //   "RESTful API for chat interactions and knowledge base management",
    // ],
    // challenges: [
    //   "Optimizing embedding generation for large document collections",
    //   "Balancing context window limits with relevant information retrieval",
    //   "Implementing efficient chunking strategies for various document types",
    //   "Managing asynchronous workflows with Celery for scalability",
    // ],
    // outcomes: [
    //   "Successfully processes and indexes 1,000+ documents",
    //   "Achieves high relevance in context retrieval for user queries",
    //   "Reduced response latency through optimized vector search",
    //   "Built production-ready AI backend architecture",
    // ],
  },
  {
    id: "ground-control-system",
    title: "Ground Control System",
    shortDescription:
      "Real-time rocket telemetry visualization system with live data streaming, flight monitoring, and post-flight analysis.",
    tags: ["Full-Stack", "Typescript", "Redis", "MongoDB", "WebSockets"],
    status: "Featured",
    glowPosition: "left",
    isLarge: true,
    githubUrl: "https://github.com/Krushna-B/ground_control_system",
    image: "/projects/Telemetry.png",
    overview:
      "A mission ground control system designed for real-time monitoring and analysis of rocket telemetry data during launch operations. The full-stack TypeScript application uses WebSockets for live data streaming, Redis for efficent publisher/subscriber architecture, and MongoDB for persistent flight data storage. The system visualizes altitude, velocity, acceleration, orientation, and environmental sensor readings in real-time with sub-100ms latency. Built for Radiant Space's launch vehicle operations, this system is now being tested with live rocket flights and handles mission-critical data with reliability and precision.",
    context: "Radiant Space - UNC",
    year: "2025",
    role: "Software Engineer",
    technologies: [
      "Full Stack",
      "TypeScript",
      "Node.js",
      "WebSockets",
      "Redis",
      "MongoDB",
      "React",
    ],
    // features: [
    //   "Real-time telemetry streaming with <100ms latency",
    //   "Live flight state detection (Pre-launch, Ascent, Apogee, Descent, Landing)",
    //   "3D trajectory visualization with Mapbox integration",
    //   "Multi-sensor data display: GPS, IMU, barometer, temperature",
    //   "Automated anomaly detection and alert system",
    //   "Post-flight data export and analysis tools",
    //   "Multi-vehicle support for simultaneous launches",
    // ],
    // challenges: [
    //   "Ensuring sub-100ms latency for mission-critical telemetry data",
    //   "Handling data loss and reconnection scenarios gracefully",
    //   "Synchronizing time-series data from multiple sensors",
    //   "Optimizing React rendering for high-frequency updates",
    // ],
    // outcomes: [
    //   "Successfully monitored 5+ live rocket launches",
    //   "Achieved 99.9% uptime during critical launch windows",
    //   "Processed 10,000+ telemetry packets per flight with zero data loss",
    //   "Enabled post-flight analysis that improved vehicle performance",
    // ],
  },
  {
    id: "tessa-flight-computer",
    title: "TESSA Flight Computer",
    shortDescription:
      "TESSA is a custom flight computer PCB for launch vehicles, designed for real-time sensor fusion, telemetry, and autonomous flight control using FreeRTOS.",
    tags: [
      "Commercial Hardware",
      "Embedded Systems",
      "PCB Design",
      "Power Electronics",
    ],
    status: "Completed",
    isLarge: true,
    glowPosition: "left",
    image: "/projects/TESSA.png",
    overview:
      "TESSA is a custom-designed flight computer for high-power launch vehicles. This project encompasses full hardware and firmware development, from PCB schematic design to real-time embedded systems programming. The flight computer integrates GPS, IMU, barometer, MOSFET Pyro Channels, and Flash Chip Storage to control the vehicle throughout flight. Built around commercial-grade microcontrollers the system manages sensor fusion, flight state detection, parachute deployment logic, and telemetry transmission. The custom PCB design prioritizes reliability, power efficiency, and vibration resistance, with ongoing testing to validate performance under extreme acceleration and temperature conditions.",
    context: "Radiant Space - UNC",
    year: "2025",
    role: "Hardware & Firmware Engineer",
    technologies: [
      "KiCad",
      "PCB Design",
      "Circuit Design",
      "Sensor Fusion",
      "Power Electronics",
      "RF Communication",
    ],
    // features: [
    //   "Custom PCB with integrated GPS, IMU (9-DOF), and barometer",
    //   "Real-time flight state detection and parachute deployment logic",
    //   "Onboard data logging to flash memory (1000+ flights capacity)",
    //   "900MHz telemetry transmission for ground station communication",
    //   "Low-power design with redundant power systems",
    //   "Vibration-resistant design rated for 20G+ acceleration",
    // ],
    // challenges: [
    //   "Designing PCB layout to minimize EMI in high-RF environment",
    //   "Implementing sensor fusion algorithms for accurate state detection",
    //   "Ensuring reliable operation under extreme vibration and temperature",
    //   "Power management for extended flight duration",
    // ],
    // outcomes: [
    //   "Successfully flown in 3+ rocket launches with 100% reliability",
    //   "Accurate altitude tracking within 5m of GPS ground truth",
    //   "Parachute deployment system with 100% success rate",
    //   "Reduced hardware costs by 60% compared to commercial alternatives",
    // ],
  },
  {
    id: "flight-computer-software",
    title: "Flight Computer Software",
    shortDescription:
      "Flight computer firmware for launch vehicles, based on the ESP32 and FreeRTOS, handling real-time sensor data, flight-state logic, and telemetry.",
    tags: ["C", "Embedded Systems", "FreeRTOS", "ESP-IDF", "Firmware"],
    status: "In Progress",
    isLarge: false,
    glowPosition: "left",
    githubUrl: "https://github.com/Krushna-B/tessa_v3",
    overview:
      "Advanced firmware for rocket flight computers built on ESP32 microcontrollers using FreeRTOS for real-time task management. The software implements a multi-threaded architecture handling sensor acquisition, Kalman filtering for state estimation, flight logic for deployment events, and telemetry transmission simultaneously. Written in C with ESP-IDF framework, the firmware prioritizes reliability and real-time performance under resource-constrained conditions. Features include sensor fusion algorithms combining GPS, IMU, and barometer data, finite state machine for flight phases, and robust error handling for mission-critical operations. The system logs flight data locally and transmits telemetry to ground stations for live monitoring during launches.",
    context: "Radiant Space - UNC",
    year: "2025",
    role: "Firmware Engineer",
    technologies: [
      "C",
      "Peripheral Drivers",
      "FreeRTOS",
      "ESP-IDF",
      "Embedded Systems",
    ],
    // features: [
    //   "Multi-threaded RTOS architecture for concurrent sensor processing",
    //   "Kalman filter implementation for accurate altitude and velocity estimation",
    //   "Finite state machine managing Pre-launch, Boost, Coast, Apogee, Descent phases",
    //   "Real-time telemetry encoding and transmission via UART",
    //   "Flash memory data logging with circular buffer for flight data",
    //   "Watchdog timers and fault detection for system reliability",
    // ],
    // challenges: [
    //   "Implementing real-time sensor fusion on resource-constrained MCU",
    //   "Tuning Kalman filter parameters for accurate state estimation",
    //   "Managing task priorities and timing in FreeRTOS",
    //   "Ensuring deterministic behavior under high-G acceleration",
    // ],
    // outcomes: [
    //   "Achieved 100Hz sensor sampling rate with stable task scheduling",
    //   "Accurate apogee detection within 50ms of true peak altitude",
    //   "Successfully deployed parachutes in 100% of test flights",
    //   "Firmware runs reliably for extended flight durations without crashes",
    // ],
  },
];
