# NEXORA AI — Smart Campus, Smarter Future

> **AI Website Generation Internship Project**  
> A premium, futuristic, modern responsive web platform delivering integrated edge intelligence, student academic co-pilots, sustainable energy balancing, and zero-latency campus safety.

---

## 🚀 Live Demo & Tech Stack

* **Frontend Framework:** React 18 (SPA Architecture)
* **Build Tool:** Vite 6
* **Styling Engine:** Tailwind CSS 3.4 with custom glassmorphism, glowing gradients & cyber accents
* **Icons:** Lucide React
* **Typography:** Plus Jakarta Sans & JetBrains Mono (Google Fonts)
* **Interactive Engine:** Client-side state orchestration, keyword-matching assistant simulator, dynamic telemetry charts

---

## 🌟 Implemented Sections & Features

### 1. Header & Navigation (`Navbar.jsx`)
* Glowing brand mark with animated pulse indicator.
* Smooth scroll navigation linking to all sections: **Home**, **About**, **Solutions**, **AI Demo**, **Projects**, **Dashboard**, **Why NEXORA**, and **Contact**.
* Real-time campus grid status badge (`GRID LIVE • 99.98%`).
* Prominent "Get Started" modal trigger.
* Fully responsive slide-down mobile drawer.

### 2. Hero Section (`Hero.jsx`)
* Headline: *"Building the Future of Smart Campuses"*.
* High-impact description articulating AI-driven academic innovation.
* Dual CTA buttons ("Explore Solutions" & "View Projects") + Direct Interactive AI Demo launcher.
* Futuristic dashboard visual featuring simulated core telemetry, real-time response latency, active node indicators, and floating verified chips.
* Cyber grid backdrop and cyan/violet radial lighting blurs.

### 3. Vision & Architecture (`About.jsx`)
* Core vision explaining how AI unifies physical campus infrastructure with academic workflows.
* Interactive 3-pillar selector (**Smarter Learning**, **Safer Living**, **Sustainable Efficiency**) with real-time benchmarks.
* 4-card architectural breakdown: Decentralized Edge Nodes, FERPA/GDPR Compliance, Modular APIs, and Open Telemetry.

### 4. Campus Solutions Matrix (`Solutions.jsx` & `SolutionModal.jsx`)
Four comprehensive solution modules:
1. **AI Student Assistant** — 24/7 autonomous course advising, timetable sync, prerequisite tracking.
2. **Smart Campus Management** — Zero-waste dynamic HVAC scheduling and solar microgrid balancing.
3. **Intelligent Learning Resources** — RAG knowledge core, syllabus review guides, laboratory simulations.
4. **Campus Safety & Alerts** — Zero-latency blue-light beacon triangulation and privacy-first SafeWalk pathways.
* Interactive modal to inspect technical specifications and validated impact metrics.

### 5. Interactive AI Assistant Demo (`AiAssistantDemo.jsx`)
* Interactive conversational interface with realistic typing indicators and quick query response pills.
* Free-form question matching with keyword-based contextual responses.
* Clearly labeled with an amber banner: *"CONCEPT DEMO • Predefined Rule Engine • Not Connected to Live LLM"*.
* Actionable mock buttons (e.g., *"Reserve Cubicle"*, *"Check Floor Occupancy"*, *"Live GPS Tracker"*).

### 6. Featured Concept Projects (`FeaturedProjects.jsx` & `ProjectModal.jsx`)
Three concept project cards with interactive filters:
1. **AI-Based Smart Traffic Management** (`YOLOv10 Edge`, `PyTorch`, `MQTT Broker`, `NVIDIA Jetson`)
2. **Intelligent Campus Safety System** (`Spatial Sensor Fusion`, `OpenCV`, `LoRaWAN`, `FastAPI`, `AES-256`)
3. **Student Productivity Assistant** (`LLM Orchestration`, `Pinecone Vector DB`, `LangChain`, `React`)
* Technology badges, quantitative metrics, and architectural drill-down modals.
* Explicitly identified as concept prototypes.

### 7. Live Telemetry Dashboard (`Dashboard.jsx`)
* Real-time clock and simulated auto-refreshing campus metrics:
  * Students Connected (18,450+)
  * Energy Saved Today (3.82 MWh / -28.4%)
  * Transit Punctuality (98.8%)
  * Safety Nodes Online (48 / 48)
* 24-hour visual power comparison chart (NEXORA Optimized vs Legacy Baseline).
* Sector occupancy breakdown (Central Science Library, Engineering Quad, Coworking Hub, Athletic Pavilion).
* Sector switcher (North Science Quad, Central Library, Engineering Hub).
* Prominently badged: *"ILLUSTRATIVE SAMPLE DATA ONLY"*.

### 8. Why NEXORA (`WhyNexora.jsx`)
* Four pillars: **Radical Innovation**, **Universal Accessibility**, **Responsible & Privacy-First AI**, and **10x Student Productivity**.
* Comprehensive feature comparison matrix contrasting Traditional University Systems with NEXORA AI.

### 9. Contact & Pilot Request (`Contact.jsx`)
* Interactive inquiry form with Name, University Email, Campus Role, Solution Focus, and Message fields.
* Rigorous client-side validation (email regex format, character limits, required field errors).
* Visual feedback with submission state indicator and confirmation modal.
* Clearly labeled: Client-side prototype simulation (no unauthorized remote transmission).

### 10. Footer (`Footer.jsx`)
* Full brand identity, platform navigation links, tech stack badges, and internship task attribution.
* Back-to-top smooth scroll button and copyright notice.

---

## 🛠️ Installation & Local Setup

### Prerequisites
* [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
* `npm` (or `pnpm` / `yarn`)

### Steps

1. **Navigate to the project folder:**
   ```bash
   cd C:\Users\mohul\.gemini\antigravity\scratch\nexora-ai
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview the production build locally:**
   ```bash
   npm run preview
   ```

---

## 🌐 Deployment Instructions

### Option 1: Deploy to Vercel (Recommended)
1. Push this repository to GitHub or GitLab.
2. Visit [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import the repository.
4. Framework Preset will automatically detect **Vite**.
5. Click **"Deploy"**.

### Option 2: Deploy to Netlify
1. Run `npm run build` to generate the `/dist` folder.
2. Drag and drop the `/dist` folder directly onto [Netlify Drop](https://app.netlify.com/drop), or connect your Git repository.

### Option 3: Deploy to GitHub Pages
1. In `vite.config.js`, set `base: '/<repository-name>/'`.
2. Run `npm run build`.
3. Deploy the `dist` directory to your `gh-pages` branch.

---

## 📋 Evaluation Checklist

- [x] Tech stack: React + Vite + Tailwind CSS + Lucide React icons
- [x] Black and deep navy background with cyan & violet gradients
- [x] Glassmorphism cards with subtle glowing borders & smooth animations
- [x] Navbar with brand logo, links, Get Started button, and responsive mobile menu
- [x] Hero section with headline, description, CTAs, and futuristic dashboard visual
- [x] About section with campus AI vision and architectural pillars
- [x] 4 Solution cards with key highlights and interactive architecture modals
- [x] Interactive AI Assistant demo with predefined queries & clear demo disclaimer
- [x] 3 Featured Concept Projects with tech badges and interactive modals
- [x] Dashboard with live statistics, SVG/CSS charts, and sample data labels
- [x] Why NEXORA section with 4 pillars and comparative analysis table
- [x] Contact form with full client-side validation and confirmation modal
- [x] Footer with links, description, tech stack, and copyright
- [x] Clean, modular React component architecture with 0 console/build errors

---
*Created for the AI Website Generation Internship Assignment.*
