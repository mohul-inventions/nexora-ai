export const solutionsData = [
  {
    id: 'student-assistant',
    title: 'AI Student Assistant',
    subtitle: 'Autonomous Academic & Life Co-Pilot',
    category: 'Student Experience',
    iconName: 'Bot',
    gradient: 'from-cyan-500/20 to-blue-600/20',
    borderGlow: 'hover:border-cyan-400/50',
    accentColor: '#06b6d4',
    badge: '24/7 Live Agent',
    description: 'Empowers students with instant course advising, deadline synthesizers, personalized exam study plans, and multi-lingual campus orientation.',
    highlights: [
      'Natural language timetable syncing & schedule clash resolution',
      'Personalized GPA tracking with actionable grade forecasts',
      'Automated prerequisite path recommendations',
      'Confidential peer mentoring & campus mental health routing'
    ],
    metric: '4.9/5 Student Rating across 12,000+ interactions'
  },
  {
    id: 'campus-management',
    title: 'Smart Campus Management',
    subtitle: 'Zero-Waste Facilities Automation',
    category: 'Operations & IoT',
    iconName: 'Building2',
    gradient: 'from-blue-500/20 to-indigo-600/20',
    borderGlow: 'hover:border-blue-400/50',
    accentColor: '#3b82f6',
    badge: '32% Energy Saved',
    description: 'Connects HVAC, dynamic classroom occupancy, renewable microgrids, and predictive maintenance onto a unified self-optimizing neural network.',
    highlights: [
      'Self-calibrating classroom climate based on real-time headcount',
      'Predictive equipment failure warning with 72-hour lead time',
      'Dynamic solar microgrid storage balancing',
      'Smart water leak detection across underground utility pipelines'
    ],
    metric: '3.82 MWh Saved Daily with zero comfort compromise'
  },
  {
    id: 'learning-resources',
    title: 'Intelligent Learning Resources',
    subtitle: 'Adaptive Knowledge Discovery Hub',
    category: 'Academics & Research',
    iconName: 'Sparkles',
    gradient: 'from-purple-500/20 to-pink-600/20',
    borderGlow: 'hover:border-purple-400/50',
    accentColor: '#a855f7',
    badge: 'RAG Knowledge Core',
    description: 'Transforms static syllabi and repository archives into interactive neural knowledge graphs with instant multi-format study synthesizers.',
    highlights: [
      'Syllabus-aligned research paper summarizer & citation helper',
      'Automated video lecture keyframe indexing & interactive transcripts',
      'Virtual laboratory equipment simulation assistant',
      'Cross-disciplinary study group matching algorithm'
    ],
    metric: '92% Faster literature review completion times'
  },
  {
    id: 'campus-safety',
    title: 'Campus Safety & Alerts',
    subtitle: 'Zero-Latency Perimeter & Crowd Intelligence',
    category: 'Safety & Security',
    iconName: 'ShieldAlert',
    gradient: 'from-emerald-500/20 to-cyan-600/20',
    borderGlow: 'hover:border-emerald-400/50',
    accentColor: '#10b981',
    badge: 'Privacy Preserved',
    description: 'Next-gen spatial intelligence delivering edge-based thermal monitoring, rapid blue-light beacon dispatch, and automated severe weather warning protocols.',
    highlights: [
      'Sub-second geofenced emergency beacon triangulation',
      'Night-time SafeWalk route generator with real-time lighting scores',
      '100% on-device visual anonymization complying with FERPA & GDPR',
      'Dynamic crowd flow management during athletic and cultural events'
    ],
    metric: '1.4s Emergency response dispatch initiation'
  }
];

export const demoChatPrompts = [
  "Where is the nearest study hub with available charging ports?",
  "What are the Central Library hours during finals week?",
  "How do I reserve an AI lab workstation for my project?",
  "Show live transit shuttle status for North Gate",
  "Where can I find student counseling & wellness services?"
];

export const demoChatResponses = {
  "study hub": {
    text: "According to live campus telemetry, **Turing Innovation Hub (2nd Floor, Room 204)** currently has **18 vacant powered cubicles** and 85 Mbps Wi-Fi speed. Quiet score is currently rated 9.4/10.",
    actions: ["View Interactive Map", "Reserve Cubicle for 2h"]
  },
  "library": {
    text: "During Finals Season (May 10–22), the **Main Central Library is open 24/7**. Silent reading floors (Floors 3 & 4) operate with continuous noise-level monitoring. Cafe kiosk on Ground Floor is open until 3:00 AM.",
    actions: ["Check Floor Occupancy", "Download Study Guide"]
  },
  "ai lab": {
    text: "Workstation reservations for the **NVIDIA DGX Deep Learning Lab (Eng Building C)** are managed directly via NEXORA. You currently have 40 quota credits this semester.",
    actions: ["Book 3-Hour Slot", "View Lab Safety Guidelines"]
  },
  "shuttle": {
    text: "🚌 **North Gate Shuttle Line**: Express Bus #4 is currently 3 minutes away from North Station, moving at 22 km/h. Next scheduled departure is at 12:45 PM with moderate seat availability (62% capacity).",
    actions: ["Live GPS Tracker", "View Route Map"]
  },
  "wellness": {
    text: "Student Wellness & Counseling is located at **Health & Well-being Pavilion, Wing B**. Drop-in confidential peer counseling is available today until 6:00 PM, or you can request an instant 1-on-1 virtual session.",
    actions: ["Schedule Session", "Access 24/7 Crisis Line"]
  },
  "fallback": {
    text: "Thank you for asking! In this **NEXORA Concept Prototype**, I can assist with campus transit, study desk availability, lab booking, cafeteria menus, and exam schedules. Try selecting one of the suggested prompts above!",
    actions: ["Browse Suggested Prompts", "Explore Campus Directory"]
  }
};

export const featuredProjects = [
  {
    id: 'traffic-management',
    title: 'AI-Based Smart Traffic Management',
    tagline: 'Autonomous Intersection Control & Campus Mobility',
    status: 'Concept Phase III',
    category: 'Computer Vision & IoT',
    badgeColor: 'border-cyan-500/40 text-cyan-300 bg-cyan-950/40',
    description: 'An intelligent edge-computing traffic regulator deployed across campus intersections. Uses privacy-safe optical flow analysis to optimize pedestrian signal cycles and prioritize electric campus shuttles.',
    techStack: ['YOLOv10 Edge', 'PyTorch', 'MQTT Broker', 'NVIDIA Jetson', 'WebSockets'],
    keyStats: [
      { label: 'Transit Delay', value: '-34%' },
      { label: 'Detection Acc.', value: '99.2%' },
      { label: 'Monitored Hubs', value: '14 Gates' }
    ],
    architectureOverview: 'Cameras process footage on-device with zero facial storage, extracting bounding box coordinates for vehicles and pedestrians. The edge controller dynamically adjusts signal timings based on real-time pedestrian queue lengths.',
    conceptDisclaimer: 'Concept project prototype simulated using synthetic campus traffic datasets.'
  },
  {
    id: 'campus-safety-system',
    title: 'Intelligent Campus Safety System',
    tagline: 'Spatial Sensor Fusion & Emergency Dispatch',
    status: 'Interactive Concept',
    category: 'Spatial AI & Security',
    badgeColor: 'border-violet-500/40 text-violet-300 bg-violet-950/40',
    description: 'A multi-modal sensor fusion system coordinating campus blue-light distress posts, thermal crowd monitoring, and ambient sound classification to safeguard students during late-night hours.',
    techStack: ['Spatial Sensor Fusion', 'OpenCV', 'LoRaWAN', 'FastAPI', 'AES-256 Encryption'],
    keyStats: [
      { label: 'Dispatch Trigger', value: '1.4 sec' },
      { label: 'Anonymization', value: '100% On-Device' },
      { label: 'Active Beacons', value: '48 Nodes' }
    ],
    architectureOverview: 'Integrates distributed low-power LoRaWAN nodes with acoustic anomaly detection (glass breaks, distress calls). When triggered, nearest security personnel receive encrypted geolocations and perimeter lighting automatically brightens by 200%.',
    conceptDisclaimer: 'Designed in compliance with academic privacy guidelines and student data protection standards.'
  },
  {
    id: 'student-productivity',
    title: 'Student Productivity Assistant',
    tagline: 'Context-Aware Academic Copilot & Syllabus Engine',
    status: 'Beta Concept',
    category: 'Generative AI & Knowledge Graphs',
    badgeColor: 'border-emerald-500/40 text-emerald-300 bg-emerald-950/40',
    description: 'A personalized academic co-pilot that synchronizes LMS syllabi, generates vector-searchable class review guides, and forms peer study groups based on learning styles and quiz preparation gaps.',
    techStack: ['LLM Orchestration', 'Pinecone Vector DB', 'LangChain', 'React 18', 'TailwindCSS'],
    keyStats: [
      { label: 'Time Saved', value: '4.2 hrs/wk' },
      { label: 'Study Groups', value: '380+ Formed' },
      { label: 'Query Accuracy', value: '96.8%' }
    ],
    architectureOverview: 'Connects to university canvas/Moodle exports via student-consented OAuth tokens. RAG pipeline extracts lecture assignments, creates spaced-repetition flashcards, and suggests optimal review sessions before exams.',
    conceptDisclaimer: 'Demonstration interface with mock student syllabus and synthetic knowledge base.'
  }
];

export const campusStats = {
  activeStudents: 18450,
  monitoredNodes: 248,
  energySavedMwh: '3.82',
  energySavedPercent: '28.4%',
  shuttleOnTime: '98.8%',
  openLabSeats: 74,
  alertsCleared: '100%',
  avgResponseSeconds: 1.4
};

export const whyNexoraCards = [
  {
    title: 'Radical Innovation',
    subtitle: 'Next-Gen Edge Intelligence',
    icon: 'Cpu',
    description: 'Pioneering multimodal AI models designed specifically for university ecosystems, delivering sub-second local edge processing without cloud dependencies.',
    color: 'from-cyan-500/20 to-blue-500/10'
  },
  {
    title: 'Universal Accessibility',
    subtitle: 'Inclusive by Design',
    icon: 'Users',
    description: 'WCAG AAA compliant interface, speech-to-text navigation, multi-lingual support for international scholars, and mobile-first micro-interactions.',
    color: 'from-violet-500/20 to-purple-500/10'
  },
  {
    title: 'Responsible & Privacy-First',
    subtitle: '100% Anonymized Telemetry',
    icon: 'Lock',
    description: 'Strict adherence to FERPA and GDPR standards. Student biometric data is never recorded, processed off-premise, or monetized.',
    color: 'from-emerald-500/20 to-teal-500/10'
  },
  {
    title: '10x Student Productivity',
    subtitle: 'Frictionless Campus Living',
    icon: 'Zap',
    description: 'Eliminates repetitive administrative friction—from classroom seat searches and shuttle delays to library reservation bottlenecks.',
    color: 'from-amber-500/20 to-orange-500/10'
  }
];

export const comparisonData = [
  { feature: 'Emergency Alert Response Time', traditional: '3 to 8 minutes', nexora: '1.4 seconds (Autonomous)' },
  { feature: 'Energy Consumption & HVAC', traditional: 'Fixed timer schedules', nexora: 'Real-time occupancy driven (-28%)' },
  { feature: 'Student Academic Inquiries', traditional: 'Office hours only (Queue wait)', nexora: '24/7 Instant neural co-pilot' },
  { feature: 'Campus Transit Efficiency', traditional: 'Static printed schedules', nexora: 'Predictive route & traffic balancing' },
  { feature: 'Privacy Protection Framework', traditional: 'Fragmented siloed databases', nexora: 'Zero-retention edge anonymization' }
];
