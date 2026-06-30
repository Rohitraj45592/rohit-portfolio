import { createFileRoute } from "@tanstack/react-router";
import {
  motion,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
  AnimatePresence,
} from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowRight,
  ArrowUp,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Trophy,
  Award,
  Sparkles,
  Users,
  Coffee,
  Sun,
  Moon,
  Search,
  X,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Square,
  Volume2,
  VolumeX,
  Instagram,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import GITHUB_PROJECTS from "../data/github_projects.json";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const check = () => {
      setIsMobile(
        window.innerWidth < 768 ||
        window.matchMedia("(hover: none)").matches ||
        ("ontouchstart" in window) ||
        navigator.maxTouchPoints > 0
      );
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

function openCalendly() {
  if (typeof window === "undefined") return;
  const url = "https://calendly.com/rohitraj2522003/30min";
  
  if (!(window as any).Calendly) {
    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => {
      (window as any).Calendly.initPopupWidget({ url });
    };
    document.body.appendChild(script);
  } else {
    (window as any).Calendly.initPopupWidget({ url });
  }
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rohit Raj - AI & Full-Stack Developer" },
      { name: "description", content: "B.Tech CSE (AI & ML) student at KIT Varanasi building GenAI, FastAPI, and React products." },
      { property: "og:title", content: "Rohit Raj - Portfolio" },
      { property: "og:description", content: "IBM intern (Top 15%), CGPA 8.63, deployed GyanSetu AI GenAI ERP on Vercel." },
    ],
  }),
  component: Portfolio,
});

/* ---------- Data ---------- */

type SkillNode = { name: string; level: number; note: string };

const EXPERIENCE = [
  {
    company: "IBM CEP (Virtual Internship)",
    role: "Web & Mobile Development Intern",
    date: "Jul 2025 – Aug 2025",
    initials: "IBM",
    color: "var(--terracotta)",
    bullets: [
      "Completed 4-week IBM-supported program in Web, Mobile Dev & Digital Marketing",
      "Finished in top 15% of cohort; earned Rs. 4,000 stipend",
      "Delivered 3+ front-end projects in HTML5, CSS3 & JavaScript with clean, responsive layouts",
      "Applied agile workflow with task tracking and iterative review cycles",
    ],
  },
];

const LeetCodeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M16.102 17.93l-2.69 2.607c-.466.451-1.111.696-1.744.696a2.285 2.285 0 0 1-1.744-.696L3.666 14.3c-.466-.451-.71-.1-.71-.71V9.45c0-.61.244-1.258.71-1.709l6.258-6.103a2.285 2.285 0 0 1 1.744-.696c.633 0 1.278.245 1.744.696l2.69 2.607a.64.64 0 0 1-.01.902l-2.072 2.008a.63.63 0 0 1-.902-.01l-1.442-1.396a.434.434 0 0 0-.643 0l-3.9 3.8a.46.46 0 0 0 0 .653l3.9 3.8a.434.434 0 0 0 .643 0l1.442-1.396a.63.63 0 0 1 .902-.01l2.072 2.008a.64.64 0 0 1 .01.902zm6.464-8.78a.44.44 0 0 0-.44-.44h-5.06a.44.44 0 0 0-.44.44v5.06a.44.44 0 0 0 .44.44h5.06a.44.44 0 0 0 .44-.44V9.15z" />
  </svg>
);

type ProjectType = {
  id: string;
  name: string;
  blurb: string;
  tags: string[];
  accent: string;
  featured?: boolean;
  badge?: string;
  live?: string;
  github?: string;
  year: string;
  month: string;
  story: string;
  impact: string[];
  longImpact?: string[];
  category: string;
  architecture: string[];
  challenges: { title: string; solution: string }[];
  deviceType: "laptop" | "mobile";
  videoUrl?: string;
};

const PROJECTS: ProjectType[] = [
  {
    id: "gyansetu",
    name: "GyanSetu AI",
    blurb: "GenAI Student ERP Copilot with Text-to-SQL AI engine",
    tags: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "SQLAlchemy", "LLM APIs", "Supabase", "JWT Auth", "Vercel"],
    accent: "var(--terracotta)",
    featured: true,
    badge: "84+ commits",
    live: "https://gyansetu-ai-obxu.vercel.app",
    github: "https://github.com/Rohitraj45592",
    year: "2026",
    month: "Jun",
    story: "Built a production-deployed full-stack GenAI ERP — Next.js + TypeScript + Tailwind frontend, FastAPI + SQLAlchemy backend with a Text-to-SQL AI engine. Students query attendance, marks & timetable in natural language; AI converts to SQL and returns real-time data.",
    impact: [
      "Production-deployed on Vercel with live demo and 84+ GitHub commits.",
      "Students query data in natural language; AI converts to SQL in real-time.",
      "Stack: PostgreSQL, Supabase, LLM APIs, JWT Auth, Vercel.",
    ],
    longImpact: [
      "Built a production-deployed full-stack GenAI ERP with Next.js + TypeScript + Tailwind frontend and FastAPI + SQLAlchemy backend with a Text-to-SQL AI engine.",
      "Students can query attendance records, marks, and timetable data in natural language; the AI engine converts queries to SQL and returns real-time data from PostgreSQL via Supabase.",
      "Implemented JWT Authentication for secure access, Supabase for database management, and deployed the entire stack on Vercel with 84+ commits and a live demo.",
    ],
    category: "Web Apps",
    architecture: ["Next.js + TypeScript Frontend", "FastAPI + SQLAlchemy Backend", "Text-to-SQL AI Engine", "PostgreSQL + Supabase DB", "JWT Auth + Vercel Deploy"],
    challenges: [
      {
        title: "Natural Language to SQL Accuracy",
        solution: "Designed a structured prompt template with schema context and few-shot examples to guide the LLM in generating accurate, safe SQL queries."
      },
      {
        title: "JWT Auth Across Frontend & Backend",
        solution: "Implemented a unified token verification middleware in FastAPI that validates tokens issued by the Next.js frontend, ensuring seamless cross-service auth."
      }
    ],
    deviceType: "laptop",
  },
  {
    id: "foodapp",
    name: "React Food Ordering App",
    blurb: "Responsive food ordering app with real-time cart management",
    tags: ["React.js", "JavaScript", "CSS3", "useState", "useEffect"],
    accent: "var(--peach)",
    live: "https://react-food-project-kappa.vercel.app",
    github: "https://github.com/Rohitraj45592/React-food-project",
    year: "2025",
    month: "Mar",
    story: "Built a responsive food ordering application with 5+ reusable React components, useState/useEffect hooks, dynamic cart with real-time item updates across 3+ screen sizes.",
    impact: [
      "5+ reusable React components with clean component architecture.",
      "Dynamic cart with real-time item updates using useState/useEffect hooks.",
      "Fully responsive across 3+ screen sizes.",
    ],
    longImpact: [
      "Built a responsive food ordering application with 5+ reusable React components, utilizing useState and useEffect hooks for state management.",
      "Implemented a dynamic cart system with real-time item addition, removal, and quantity updates without page reloads.",
      "Designed a fully responsive layout that works seamlessly across desktop, tablet, and mobile screen sizes using adaptive CSS.",
    ],
    category: "Web Apps",
    architecture: ["React.js SPA", "useState/useEffect Hooks", "Component-based Architecture", "Responsive CSS Layout"],
    challenges: [
      {
        title: "Cart State Sync Across Components",
        solution: "Used prop drilling and shared state patterns to keep cart updates synchronized across menu, cart sidebar, and checkout components in real time."
      },
      {
        title: "Responsive Layout Across Screen Sizes",
        solution: "Applied CSS flexbox and media queries to create adaptive layouts that rearrange gracefully from desktop grid to mobile stacked view."
      }
    ],
    deviceType: "laptop",
  },
  {
    id: "wikipedia",
    name: "Wikipedia Information Portal",
    blurb: "Portal fetching live Wikipedia REST API data with improved UX",
    tags: ["HTML5", "CSS3", "JavaScript", "REST API", "DOM Manipulation"],
    accent: "var(--teal)",
    github: "https://github.com/Rohitraj45592",
    year: "2025",
    month: "Jan",
    story: "Built a portal fetching live Wikipedia REST API data, then redesigned the navigation UI to reduce average user click depth by 40% through improved page structure and intuitive information architecture.",
    impact: [
      "Live Wikipedia REST API integration for real-time data fetching.",
      "Redesigned navigation UI reducing user click depth by 40%.",
      "Clean, accessible interface built with vanilla HTML/CSS/JS.",
    ],
    longImpact: [
      "Built a portal fetching live Wikipedia REST API data, enabling users to search and browse articles without leaving the app.",
      "Redesigned the navigation UI and page structure through iterative UX improvements, reducing average user click depth by 40%.",
      "Implemented client-side search, dynamic content rendering, and intuitive information hierarchy using pure HTML5, CSS3, and JavaScript.",
    ],
    category: "Web Apps",
    architecture: ["HTML5 + CSS3 + JavaScript", "Wikipedia REST API", "Client-side Search", "Dynamic DOM Rendering"],
    challenges: [
      {
        title: "API Rate Limiting on Search",
        solution: "Added debouncing logic to the search input handler, delaying API calls until the user stops typing to prevent hitting Wikipedia's rate limits."
      },
      {
        title: "Navigation UX Complexity",
        solution: "Restructured content into a sidebar + main view layout and added breadcrumb navigation, reducing click depth by 40% compared to the original flat structure."
      }
    ],
    deviceType: "laptop",
  },
  {
    id: "loginpage",
    name: "Responsive Login Page",
    blurb: "Client-side validated login form with adaptive CSS grid layout",
    tags: ["HTML5", "CSS3", "JavaScript", "CSS Grid", "Form Validation"],
    accent: "#3b82f6",
    github: "https://github.com/Rohitraj45592",
    year: "2024",
    month: "Dec",
    story: "Built a client-side form validation system across 3 input fields with a fully responsive layout across desktop and mobile via adaptive CSS grid layout. Clean, accessible UI with real-time feedback.",
    impact: [
      "Client-side validation across 3 input fields with real-time feedback.",
      "Fully responsive across desktop and mobile via adaptive CSS grid.",
      "Clean, accessible interface with clear error messaging.",
    ],
    longImpact: [
      "Implemented client-side form validation across 3 input fields (name, email, password) with real-time error feedback and clear user messaging.",
      "Designed a fully responsive layout using CSS grid that adapts cleanly from desktop to mobile without JavaScript frameworks.",
      "Applied accessibility best practices including semantic HTML, keyboard navigation support, and visible focus states.",
    ],
    category: "Web Apps",
    architecture: ["HTML5 Semantic Markup", "CSS Grid Responsive Layout", "Vanilla JS Validation", "Accessible UI Patterns"],
    challenges: [
      {
        title: "Real-time Validation UX",
        solution: "Implemented blur and input event listeners with debouncing to show validation feedback only after the user finishes typing, avoiding disruptive mid-input errors."
      },
      {
        title: "Cross-device Responsive Layout",
        solution: "Used CSS grid with auto-fit columns and percentage-based padding to create a layout that adapts smoothly across all screen sizes without breakpoint hacks."
      }
    ],
    deviceType: "laptop",
  },
];

const ALL_PROJECTS: ProjectType[] = [
  ...PROJECTS,
  ...GITHUB_PROJECTS
    .filter(gp => !PROJECTS.some(p => p.id === gp.id || gp.id.includes(p.id)))
    .map((gp) => ({
      id: gp.id,
      name: gp.name,
      blurb: gp.blurb || "GitHub repository showcasing software development.",
      tags: gp.tags,
      accent: gp.language === "TypeScript" ? "var(--terracotta)" : gp.language === "Python" ? "var(--peach)" : "var(--teal)",
      featured: gp.stars > 0,
      live: gp.live || undefined,
      github: gp.github,
      year: gp.created_at.split("-")[0],
      month: new Date(gp.created_at).toLocaleString("en-US", { month: "short" }),
      story: gp.blurb || "GitHub repository showcasing software development.",
      impact: [
        `Primary development language: ${gp.language}`,
        `GitHub stars: ${gp.stars}`,
        `Last updated: ${new Date(gp.updated_at).toLocaleDateString()}`
      ],
      category: gp.language === "Python" ? "AI & ML" 
                : (gp.language === "Java" || gp.tags.some(t => ["android", "mobile", "ios"].includes(t.toLowerCase()))) ? "Mobile & IoT" 
                : "Web Apps",
      architecture: [gp.language, "GitHub VCS"],
      challenges: [
        {
          title: "Repository Initialization",
          solution: "Maintained clean repository architecture and automated builds for production delivery."
        }
      ],
      deviceType: (gp.language === "Java" || gp.tags.some(t => ["android", "mobile", "ios"].includes(t.toLowerCase()))) ? "mobile" as const : "laptop" as const,
      videoUrl: undefined
    }))
];

const ACHIEVEMENTS = [
  { title: "IBM CEP Internship — Top 15% Cohort", detail: "IBM CEP Virtual Internship, Aug 2025" },
  { title: "CGPA 8.63 — Top 15% of CSE (AI & ML) Batch", detail: "Kashi Institute of Technology, Varanasi" },
  { title: "GyanSetu AI — Production Deployed on Vercel", detail: "84+ GitHub commits · Live Demo Available" },
  { title: "IBM CEP Certificate — Web, Mobile & Digital Marketing", detail: "IBM Certified · Jul 2025" },
  { title: "Tata GenAI Powered Data Analytics — Job Simulation", detail: "Forage · Issued Jun 2026 · ID: zCGjzJHmnvhqbKo7Q" },
  { title: "Generative AI Essentials Certificate", detail: "TCS iON · Issued Jun 2026 · ID: 1683-31219338-1016" },
];

const LEADERSHIP = [
  { icon: "01", title: "IBM CEP Program Top Performer", detail: "Completed IBM-supported Web & Mobile Development internship, finishing in top 15% of cohort with Rs. 4,000 stipend (Jul–Aug 2025)." },
  { icon: "02", title: "GyanSetu AI — Solo Full-Stack Builder", detail: "Architected and deployed a production GenAI ERP system from scratch, handling frontend, backend, database, and AI engine independently with 84+ commits." },
  { icon: "03", title: "Academic Excellence", detail: "Maintained CGPA of 8.63 consistently across 3 semesters, ranking in the top 15% of the CSE (AI & ML) batch at Kashi Institute of Technology, Varanasi." },
  { icon: "04", title: "GenAI & Full-Stack Self-Learner", detail: "Independently learned Next.js, FastAPI, PostgreSQL, SQLAlchemy, LLM APIs, and Text-to-SQL outside coursework to build production-grade applications." },
  { icon: "05", title: "Open Source Contributor", detail: "Maintains active GitHub presence at github.com/Rohitraj45592 with regular commits across web, AI, and full-stack projects." },
];

/* ---------- Shared bits ---------- */

function LaptopMockup({ videoUrl, fallbackImg, projectId }: { videoUrl?: string; fallbackImg?: string; projectId?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const [flashIcon, setFlashIcon] = useState<"play" | "pause" | null>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const userPausedRef = useRef(false);

  const triggerControls = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = setTimeout(() => {
      setShowControls(false);
    }, 2500);
  };

  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused || !isPlaying) {
      userPausedRef.current = false;
      videoRef.current.play().then(() => {
        setIsPlaying(true);
        setFlashIcon("play");
        setTimeout(() => setFlashIcon(null), 700);
      }).catch((err) => {
        console.log("Play failed:", err);
      });
    } else {
      userPausedRef.current = true;
      videoRef.current.pause();
      setIsPlaying(false);
      setFlashIcon("pause");
      setTimeout(() => setFlashIcon(null), 700);
    }
  };

  const handleMuteToggle = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleStop = () => {
    if (!videoRef.current) return;
    userPausedRef.current = true;
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    setIsPlaying(false);
    setProgress(0);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const duration = videoRef.current.duration;
    if (duration > 0) {
      setProgress((current / duration) * 100);
    }
  };

  const handleContainerClick = (e: React.MouseEvent) => {
    if (e.target instanceof Element && e.target.closest('.video-controls-bar')) {
      return;
    }
    handlePlayPause();
    triggerControls();
  };

  // IntersectionObserver: play only when visible, pause when off-screen
  useEffect(() => {
    if (!videoUrl) return;
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!videoRef.current) return;
        if (entry.isIntersecting) {
          if (!userPausedRef.current) {
            videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
          }
        } else {
          videoRef.current.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [videoUrl]);

  useEffect(() => {
    setIsPlaying(false);
    setProgress(0);
    userPausedRef.current = false;
    if (videoUrl && videoRef.current) {
      videoRef.current.load();
    }
  }, [videoUrl]);

  useEffect(() => {
    return () => {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, []);

  // Compute dynamic domain based on projectId
  let domain = "rohitraj.dev";
  if (projectId === "varnothsava") domain = "varnothsava.sode-edu.in";
  else if (projectId === "guardian") domain = "guardian-ai.security";
  else if (projectId === "cropmate") domain = "cropmate.iot.farm";
  else if (projectId === "ambucare") domain = "ambucare.emergency.in";
  else if (projectId === "smartquiz") domain = "examedge.quiz.net";
  else if (projectId === "hackothsava") domain = "hackothsava.in";
  else if (projectId === "hpl") domain = "hpl.hackathon.live";

  // Compute dynamic soft glow color based on project accent
  let glowColor = "rgba(224, 86, 36, 0.12)"; // Terracotta default
  if (projectId === "cropmate") glowColor = "rgba(235, 143, 115, 0.12)"; // Peach
  else if (projectId === "ambucare" || projectId === "mindshift") glowColor = "rgba(43, 150, 141, 0.12)"; // Teal
  else if (projectId === "guardian") glowColor = "rgba(235, 143, 115, 0.12)"; // Peach
  else if (projectId === "varnothsava") glowColor = "rgba(224, 86, 36, 0.12)"; // Terracotta
  else if (projectId === "hackothsava") glowColor = "rgba(163, 230, 53, 0.12)"; // Lime green
  else if (projectId === "hpl") glowColor = "rgba(59, 130, 246, 0.12)"; // Blue

  return (
    <div ref={containerRef} className="relative w-full max-w-[680px] mx-auto select-none">
      {/* Ambient Accent Glow */}
      <div 
        className="absolute -inset-10 rounded-full blur-[80px] pointer-events-none opacity-60 dark:opacity-40 transition-all duration-700"
        style={{
          background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`
        }}
      />

      {/* Screen Frame */}
      <div className="relative border-[10px] border-[#1e1d1b] rounded-t-2xl bg-[#1e1d1b] shadow-2xl aspect-[16/10] overflow-hidden">
        {/* Webcam */}
        <div className="absolute top-1 left-1/2 -translate-x-1/2 z-30 h-1.5 w-1.5 rounded-full bg-zinc-800 flex items-center justify-center">
          <div className="h-0.5 w-0.5 rounded-full bg-blue-900" />
        </div>
        
        {/* Screen Content */}
        <div className="relative w-full h-full bg-[#0c0c0e] overflow-hidden flex flex-col">
          {videoUrl && (
            /* Mock Browser Header */
            <div className="h-6 bg-[#1a1917] border-b border-white/5 flex items-center px-2 gap-2 select-none shrink-0 z-20">
              {/* Dots */}
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff5f56]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#ffbd2e]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#27c93f]" />
              </div>
              {/* Address Bar */}
              <div className="flex-1 max-w-[280px] mx-auto h-4 bg-black/30 rounded-md flex items-center justify-center px-2 border border-white/5">
                <span className="text-[7px] text-cream/40 font-mono truncate">{domain}</span>
              </div>
            </div>
          )}

          <div className="flex-1 relative bg-[#0c0c0e] overflow-hidden flex items-center justify-center">
            {videoUrl ? (
              <>
                <video
                  ref={videoRef}
                  src={videoUrl}
                  preload="none"
                  loop
                  muted
                  playsInline
                  onTimeUpdate={handleTimeUpdate}
                  className="w-full h-full object-contain cursor-pointer"
                  onClick={handleContainerClick}
                />

                {/* Centered Flash Icon Overlay */}
                <AnimatePresence>
                  {flashIcon && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1.2 }}
                      exit={{ opacity: 0, scale: 1.5 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="absolute inset-0 m-auto z-30 flex items-center justify-center pointer-events-none"
                    >
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-white shadow-lg">
                        {flashIcon === "play" ? (
                          <Play className="w-6 h-6 fill-white text-white translate-x-0.5" />
                        ) : (
                          <Pause className="w-6 h-6 fill-white text-white" />
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {/* Control bar overlay on hover or touch */}
                <div 
                  className={`absolute inset-0 bg-black/35 flex flex-col justify-end p-2 z-20 transition-opacity duration-300 ${
                    showControls ? "opacity-100" : "opacity-0 hover:opacity-100"
                  }`}
                  onClick={handleContainerClick}
                >
                  <div className="video-controls-bar flex items-center justify-between text-white text-[10px] bg-[#1a1917]/90 backdrop-blur-md p-1.5 rounded-lg gap-2 pointer-events-auto shadow-lg border border-white/5">
                    <button onClick={handlePlayPause} className="hover:text-terracotta transition-colors p-1" title="Play/Pause">
                      {isPlaying ? <Pause className="h-3.5 w-3.5 fill-white text-white" /> : <Play className="h-3.5 w-3.5 fill-white text-white" />}
                    </button>
                    <button onClick={handleStop} className="hover:text-terracotta transition-colors p-1" title="Stop">
                      <Square className="h-3.5 w-3.5 fill-white text-white" />
                    </button>
                    
                    {/* Progress bar */}
                    <div className="flex-1 h-1.5 bg-white/20 rounded-full overflow-hidden cursor-pointer" onClick={(e) => {
                      if (!videoRef.current) return;
                      const rect = e.currentTarget.getBoundingClientRect();
                      const clickX = e.clientX - rect.left;
                      const width = rect.width;
                      const newTime = (clickX / width) * videoRef.current.duration;
                      videoRef.current.currentTime = newTime;
                    }}>
                      <div className="h-full bg-terracotta transition-all duration-100" style={{ width: `${progress}%` }} />
                    </div>

                    <button onClick={handleMuteToggle} className="hover:text-terracotta transition-colors p-1" title={isMuted ? "Unmute" : "Mute"}>
                      {isMuted ? <VolumeX className="h-3.5 w-3.5" /> : <Volume2 className="h-3.5 w-3.5" />}
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-gradient-to-br from-[#262320] to-[#1c1a17] text-cream/40 text-center font-mono">
                {fallbackImg === "GYANSETU_LIVE" ? (
                  <iframe
                    src="https://gyansetu-ai-obxu.vercel.app"
                    className="w-full h-full border-0"
                    style={{ pointerEvents: "none" }}
                    title="GyanSetu AI Live Preview"
                  />
                ) : fallbackImg ? (
                  <img src={fallbackImg} className="w-full h-full object-cover" alt="Project screen" />
                ) : (
                  <>
                    <div className="text-[10px] text-terracotta animate-pulse uppercase tracking-wider mb-2 font-sans font-bold">Project Online</div>
                    <div className="text-[8px] opacity-75">SECURE DEVICE PREVIEW</div>
                  </>
                )}
              </div>
            )}
            {/* Glare overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.08] z-10" />
          </div>
        </div>
      </div>
      
      {/* Laptop Base Hinge */}
      <div className="relative h-2 w-[108%] -left-[4%] bg-gradient-to-b from-[#e5e7eb] to-[#9ca3af] dark:from-[#3f3f46] dark:to-[#18181b] rounded-b-md shadow-lg border-t border-white/20 dark:border-white/5 flex justify-center">
        {/* Notch */}
        <div className="w-16 h-1 bg-[#babcbe] dark:bg-[#27272a] rounded-b-sm" />
      </div>
      <div className="absolute -bottom-1 inset-x-[-2%] h-1 bg-black/25 blur-sm rounded-full" />
    </div>
  );
}

function MobileMockup({ videoUrl, fallbackImg, projectId }: { videoUrl?: string; fallbackImg?: string; projectId?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const [flashIcon, setFlashIcon] = useState<"play" | "pause" | null>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const userPausedRef = useRef(false);

  const triggerControls = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = setTimeout(() => {
      setShowControls(false);
    }, 2500);
  };

  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused || !isPlaying) {
      userPausedRef.current = false;
      videoRef.current.play().then(() => {
        setIsPlaying(true);
        setFlashIcon("play");
        setTimeout(() => setFlashIcon(null), 700);
      }).catch((err) => {
        console.log("Play failed:", err);
      });
    } else {
      userPausedRef.current = true;
      videoRef.current.pause();
      setIsPlaying(false);
      setFlashIcon("pause");
      setTimeout(() => setFlashIcon(null), 700);
    }
  };

  const handleMuteToggle = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleStop = () => {
    if (!videoRef.current) return;
    userPausedRef.current = true;
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    setIsPlaying(false);
    setProgress(0);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const duration = videoRef.current.duration;
    if (duration > 0) {
      setProgress((current / duration) * 100);
    }
  };

  const handleContainerClick = (e: React.MouseEvent) => {
    if (e.target instanceof Element && e.target.closest('.video-controls-bar')) {
      return;
    }
    handlePlayPause();
    triggerControls();
  };

  // IntersectionObserver: play only when visible, pause when off-screen
  useEffect(() => {
    if (!videoUrl) return;
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!videoRef.current) return;
        if (entry.isIntersecting) {
          if (!userPausedRef.current) {
            videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
          }
        } else {
          videoRef.current.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [videoUrl]);

  useEffect(() => {
    setIsPlaying(false);
    setProgress(0);
    userPausedRef.current = false;
    if (videoUrl && videoRef.current) {
      videoRef.current.load();
    }
  }, [videoUrl]);

  useEffect(() => {
    return () => {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, []);

  // Compute dynamic soft glow color based on project accent
  let glowColor = "rgba(43, 150, 141, 0.12)"; // Teal default
  if (projectId === "cropmate") glowColor = "rgba(235, 143, 115, 0.12)"; // Peach
  else if (projectId === "varnothsava") glowColor = "rgba(224, 86, 36, 0.12)"; // Terracotta
  else if (projectId === "guardian") glowColor = "rgba(235, 143, 115, 0.12)"; // Peach
  else if (projectId === "hackothsava") glowColor = "rgba(163, 230, 53, 0.12)"; // Lime green
  else if (projectId === "hpl") glowColor = "rgba(59, 130, 246, 0.12)"; // Blue

  return (
    <div ref={containerRef} className="relative w-[210px] sm:w-[230px] mx-auto select-none">
      {/* Ambient Accent Glow */}
      <div 
        className="absolute -inset-12 rounded-full blur-[60px] pointer-events-none opacity-70 dark:opacity-50 transition-all duration-700"
        style={{
          background: `radial-gradient(circle, ${glowColor} 0%, transparent 75%)`
        }}
      />

      {/* Phone Frame */}
      <div className="relative border-[8px] border-[#1e1d1b] rounded-[30px] bg-[#1e1d1b] shadow-2xl aspect-[9/19] overflow-hidden ring-1 ring-white/10">
        {/* Dynamic Island */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 z-30 h-4 w-12 rounded-full bg-black flex items-center justify-center">
          <div className="absolute right-3.5 h-1 w-1 rounded-full bg-blue-900" />
        </div>
        
        {/* Screen Content */}
        <div className="relative w-full h-full bg-[#0c0c0e] overflow-hidden rounded-[22px] flex flex-col">
          {videoUrl && (
            /* Mobile Status Bar */
            <div className="h-5 bg-black/25 flex items-center justify-between px-3 text-[7px] text-white/80 font-mono select-none z-10 shrink-0">
              <span>9:41</span>
              <div className="flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-white/80 inline-block" />
                <span className="text-[6px] opacity-75">5G</span>
                <div className="w-3 h-1.5 border border-white/60 rounded-xs p-0.5 flex items-center">
                  <div className="h-full w-full bg-white/80 rounded-3xs" />
                </div>
              </div>
            </div>
          )}

          <div className="flex-1 relative bg-[#0c0c0e] overflow-hidden flex items-center justify-center">
            {videoUrl ? (
              <>
                <video
                  ref={videoRef}
                  src={videoUrl}
                  preload="none"
                  loop
                  muted
                  playsInline
                  onTimeUpdate={handleTimeUpdate}
                  className="w-full h-full object-contain cursor-pointer"
                  onClick={handleContainerClick}
                />

                {/* Centered Flash Icon Overlay */}
                <AnimatePresence>
                  {flashIcon && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1.2 }}
                      exit={{ opacity: 0, scale: 1.5 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="absolute inset-0 m-auto z-30 flex items-center justify-center pointer-events-none"
                    >
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-white shadow-lg">
                        {flashIcon === "play" ? (
                          <Play className="w-5 h-5 fill-white text-white translate-x-0.5" />
                        ) : (
                          <Pause className="w-5 h-5 fill-white text-white" />
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {/* Control bar overlay on hover or touch */}
                <div 
                  className={`absolute inset-0 bg-black/35 flex flex-col justify-end p-2 z-20 transition-opacity duration-300 ${
                    showControls ? "opacity-100" : "opacity-0 hover:opacity-100"
                  }`}
                  onClick={handleContainerClick}
                >
                  <div className="video-controls-bar flex items-center justify-between text-white text-[9px] bg-[#1a1917]/90 backdrop-blur-md p-1.5 rounded-md gap-1.5 pointer-events-auto shadow-lg border border-white/5">
                    <button onClick={handlePlayPause} className="hover:text-terracotta transition-colors p-0.5" title="Play/Pause">
                      {isPlaying ? <Pause className="h-3 w-3 fill-white text-white" /> : <Play className="h-3 w-3 fill-white text-white" />}
                    </button>
                    <button onClick={handleStop} className="hover:text-terracotta transition-colors p-0.5" title="Stop">
                      <Square className="h-3 w-3 fill-white text-white" />
                    </button>
                    
                    {/* Progress bar */}
                    <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden cursor-pointer" onClick={(e) => {
                      if (!videoRef.current) return;
                      const rect = e.currentTarget.getBoundingClientRect();
                      const clickX = e.clientX - rect.left;
                      const width = rect.width;
                      const newTime = (clickX / width) * videoRef.current.duration;
                      videoRef.current.currentTime = newTime;
                    }}>
                      <div className="h-full bg-terracotta transition-all duration-100" style={{ width: `${progress}%` }} />
                    </div>

                    <button onClick={handleMuteToggle} className="hover:text-terracotta transition-colors p-0.5" title={isMuted ? "Unmute" : "Mute"}>
                      {isMuted ? <VolumeX className="h-3 w-3" /> : <Volume2 className="h-3 w-3" />}
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-gradient-to-br from-[#262320] to-[#1c1a17] text-cream/40 text-center font-mono">
                {fallbackImg ? (
                  <img src={fallbackImg} className="w-full h-full object-cover" alt="Mobile Screen" />
                ) : (
                  <>
                    <div className="text-[9px] text-teal animate-pulse uppercase tracking-wider mb-2 font-sans font-bold">Mobile App</div>
                    <div className="text-[7px] opacity-75">LIVE APP DEMO</div>
                  </>
                )}
              </div>
            )}
            {/* Glare overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.08] z-10" />
          </div>
        </div>
      </div>
      {/* Buttons */}
      <div className="absolute left-[-10px] top-16 w-0.5 h-8 bg-[#1e1d1b] rounded-l-sm" />
      <div className="absolute left-[-10px] top-26 w-0.5 h-8 bg-[#1e1d1b] rounded-l-sm" />
      <div className="absolute right-[-10px] top-20 w-0.5 h-10 bg-[#1e1d1b] rounded-r-sm" />
      
      {/* Bottom Shadow */}
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-4/5 h-2 bg-black/20 blur-md rounded-full" />
    </div>
  );
}

const EASE = [0.22, 1, 0.36, 1] as const;

function SectionHeading({ eyebrow, title, story }: { eyebrow: string; title: string; story?: string }) {
  return (
    <div className="mb-14 text-center">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: EASE }}
        className="mb-3 text-xs font-medium uppercase tracking-[0.32em] text-terracotta"
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, delay: 0.08, ease: EASE }}
        className="font-display text-4xl font-bold text-charcoal md:text-5xl"
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, delay: 0.18, ease: EASE }}
        className="mx-auto mt-4 h-[2px] w-14 origin-left rounded-full bg-teal"
      />
      {story && <MicroStory text={story} />}
    </div>
  );
}

function MicroStory({ text }: { text: string }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: EASE }}
      className="mx-auto mt-6 max-w-xl font-display text-base italic leading-relaxed text-charcoal/65 md:text-lg"
    >
      {text}
    </motion.p>
  );
}

function Reveal({ children, delay = 0, x = 0, y = 30 }: { children: ReactNode; delay?: number; x?: number; y?: number }) {
  const isMobile = useIsMobile();
  const targetX = isMobile ? 0 : x;
  const targetY = isMobile ? 12 : y;

  return (
    <motion.div
      initial={{ opacity: 0, x: targetX, y: targetY }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: isMobile ? 0 : delay * 0.5, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Immersion: scroll bar + grain + cursor + spotlight ---------- */

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const w = useTransform(scrollYProgress, (v) => `${v * 100}%`);
  return (
    <motion.div
      aria-hidden
      style={{ width: w }}
      className="fixed left-0 top-0 z-[70] h-[2px] origin-left bg-gradient-to-r from-terracotta via-peach to-teal"
    />
  );
}

function Grain() {
  const isMobile = useIsMobile();
  if (isMobile) return null;
  const svg =
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.18  0 0 0 0 0.16  0 0 0 0 0.14  0 0 0 0 0.6 0'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.35'/></svg>`,
    );
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[55] opacity-[0.07] mix-blend-multiply"
      style={{ backgroundImage: `url("${svg}")`, backgroundSize: "180px 180px" }}
    />
  );
}

function OrganicCursor() {
  const isMobile = useIsMobile();
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const rx = useSpring(x, { stiffness: 350, damping: 28, mass: 0.5 });
  const ry = useSpring(y, { stiffness: 350, damping: 28, mass: 0.5 });
  const dx = useSpring(x, { stiffness: 700, damping: 30, mass: 0.25 });
  const dy = useSpring(y, { stiffness: 700, damping: 30, mass: 0.25 });
  const [mode, setMode] = useState<"idle" | "link" | "tag">("idle");
  const [section, setSection] = useState<"hero" | "skills" | "work" | "contact" | "default">("default");
  const [label, setLabel] = useState<string>("");

  useEffect(() => {
    if (isMobile) return;
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const el = e.target as HTMLElement;
      if (el.closest("[data-cursor='tag']")) setMode("tag");
      else if (el.closest("a, button, [data-cursor='link']")) setMode("link");
      else setMode("idle");
      const sec = el.closest("[data-section]") as HTMLElement | null;
      const s = (sec?.dataset.section as typeof section) || "default";
      setSection(s);
      const customLabel = (el.closest("[data-cursor-label]") as HTMLElement | null)?.dataset.cursorLabel;
      setLabel(customLabel || "");
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y, isMobile]);

    const palette = {
  hero:    { ring: "#d4af37", dot: "#2D2A24", glow: "rgba(212,175,55,0.25)", shape: "circle", verb: "explore" },
  skills:  { ring: "#d4af37", dot: "#2D2A24", glow: "rgba(212,175,55,0.30)", shape: "plus",   verb: "pluck"   },
  work:    { ring: "#d4af37", dot: "#2D2A24", glow: "rgba(212,175,55,0.35)", shape: "square", verb: "open"    },
  contact: { ring: "#d4af37", dot: "#2D2A24", glow: "rgba(212,175,55,0.25)", shape: "nib",    verb: "write"   },
  default: { ring: "#d4af37", dot: "#2D2A24", glow: "rgba(212,175,55,0.18)", shape: "circle", verb: ""         },
}[section];  ;

  if (isMobile) return null;

  const ringScale = mode === "link" ? 1.9 : mode === "tag" ? 1.4 : 1;
  const showVerb = mode === "link" && !!palette.verb;
  const radius = palette.shape === "square" ? "4px" : palette.shape === "nib" ? "50% 0 50% 50%" : "9999px";

  return (
    <>
      <motion.div
        aria-hidden
        style={{ x: rx, y: ry, background: `radial-gradient(circle, ${palette.glow}, transparent 70%)` }}
        className="pointer-events-none fixed left-0 top-0 z-[59] hidden h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full md:block"
      />
      <motion.div
        aria-hidden
        style={{ x: rx, y: ry, scale: ringScale, borderColor: palette.ring, borderRadius: radius }}
        transition={{ scale: { duration: 0.25, ease: EASE } }}
        className="pointer-events-none fixed left-0 top-0 z-[60] hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 border-[1.5px] md:block"
      >
        {palette.shape === "plus" && (
          <>
            <span className="absolute left-1/2 top-1/2 h-3 w-px -translate-x-1/2 -translate-y-1/2" style={{ background: palette.ring }} />
            <span className="absolute left-1/2 top-1/2 h-px w-3 -translate-x-1/2 -translate-y-1/2" style={{ background: palette.ring }} />
          </>
        )}
      </motion.div>
      <motion.div
        aria-hidden
        style={{ x: dx, y: dy, background: palette.dot }}
        className="pointer-events-none fixed left-0 top-0 z-[60] hidden h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full md:block"
      />
      <AnimatePresence>
        {showVerb && (
          <motion.div
            aria-hidden
            key="verb"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.18 }}
            style={{ x: rx, y: ry, background: palette.ring }}
            className="pointer-events-none fixed left-0 top-0 z-[61] ml-6 mt-4 hidden -translate-y-1/2 rounded-full px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-cream md:block"
          >
            {label || palette.verb}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Spotlight() {
  const isMobile = useIsMobile();
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (isMobile) return;
    const onMove = (e: MouseEvent) => {
      if (!ref.current) return;
      ref.current.style.background = `radial-gradient(620px circle at ${e.clientX}px ${e.clientY}px, rgba(232,168,124,0.18), transparent 55%)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [isMobile]);

  if (isMobile) return null;
  return <div ref={ref} aria-hidden className="pointer-events-none fixed inset-0 z-[1]" />;
}

function Magnetic({ children, strength = 0.35 }: { children: ReactNode; strength?: number }) {
  const isMobile = useIsMobile();
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 260, damping: 18, mass: 0.4 });

  if (isMobile) {
    return <div style={{ display: "inline-block" }}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      style={{ x: sx, y: sy, display: "inline-block" }}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        x.set((e.clientX - (r.left + r.width / 2)) * strength);
        y.set((e.clientY - (r.top + r.height / 2)) * strength);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

function Marquee({ items }: { items: string[] }) {
  return (
    <div
      aria-hidden
      className="relative overflow-hidden border-y border-charcoal/10 bg-charcoal py-5 text-cream w-full"
      style={{ transform: "rotate(-1.2deg)", marginLeft: "-2%", width: "104%" }}
    >
      <div className="flex w-max shrink-0 animate-marquee-scroll">
        {/* Track 1 */}
        <div className="flex items-center gap-12 pr-12 whitespace-nowrap font-display text-2xl italic">
          {items.map((t, i) => (
            <span key={i} className="flex items-center gap-12">
              <span>{t}</span>
              <span className="text-peach">*</span>
            </span>
          ))}
        </div>
        {/* Track 2 */}
        <div className="flex items-center gap-12 pr-12 whitespace-nowrap font-display text-2xl italic" aria-hidden="true">
          {items.map((t, i) => (
            <span key={i} className="flex items-center gap-12">
              <span>{t}</span>
              <span className="text-peach">*</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function NowWidget() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () => {
      const fmt = new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "2-digit",
        timeZone: "Asia/Kolkata",
        hour12: true,
      });
      setTime(fmt.format(new Date()));
    };
    tick();
    const i = setInterval(tick, 30000);
    return () => clearInterval(i);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6, ease: EASE }}
      className="fixed bottom-5 right-5 md:right-20 z-40 hidden items-center gap-3 rounded-full border border-charcoal/10 bg-white/85 px-4 py-2.5 shadow-warm backdrop-blur-md md:flex dark:bg-card/85"
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-pulse-dot absolute inline-flex h-full w-full rounded-full bg-teal" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
      </span>
      <span className="font-mono text-[11px] text-charcoal/70">
        Varanasi · {time || "—"} · open to work
      </span>
    </motion.div>
  );
}

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsVisible(latest > 300);
    });
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const pathLength = useSpring(scrollYProgress, { stiffness: 100, damping: 25 });
  const strokeDashoffset = useTransform(pathLength, (v) => 100 - v * 100);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 15 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-charcoal/10 bg-white/90 text-charcoal shadow-warm backdrop-blur-sm transition-colors hover:border-terracotta hover:text-terracotta dark:bg-card/90 dark:border-border/30 cursor-pointer"
          aria-label="Scroll to top"
        >
          <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 36 36">
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-charcoal/5 dark:text-cream/5"
            />
            <motion.circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="100"
              style={{
                strokeDashoffset,
              }}
              className="text-terracotta"
            />
          </svg>
          <ArrowUp className="h-4 w-4 relative z-10" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

function FloatingMusicPlayer({ loadingComplete }: { loadingComplete: boolean }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted,   setIsMuted]   = useState(false);
  const [volume,    setVolume]    = useState(0.35);
  const [expanded,  setExpanded]  = useState(false);
  const audioRef   = useRef<HTMLAudioElement | null>(null);
  const unmuteDone = useRef(false); // guard so the unmute only runs once

  // Unmute and play once the loading screen completes
  useEffect(() => {
    if (!loadingComplete) return;
    const audio = audioRef.current;
    if (!audio || unmuteDone.current) return;

    unmuteDone.current = true;
    
    // Function to try to play and unmute
    const startAudio = () => {
      audio.muted = false;
      audio.play().then(() => {
        setIsPlaying(true);
        // Ramp up volume
        let v = 0;
        audio.volume = 0;
        const ramp = setInterval(() => {
          v = Math.min(v + 0.02, 0.35);
          audio.volume = v;
          setVolume(parseFloat(v.toFixed(2)));
          if (v >= 0.35) clearInterval(ramp);
        }, 25);
        cleanup();
      }).catch((err) => {
        console.log("Autoplay blocked, waiting for user gesture:", err);
      });
    };

    const handleGesture = () => {
      startAudio();
    };

    const cleanup = () => {
      window.removeEventListener("click", handleGesture);
      window.removeEventListener("touchstart", handleGesture);
      window.removeEventListener("keydown", handleGesture);
    };

    // Try immediately
    startAudio();

    // Setup fallback listeners for first interaction
    window.addEventListener("click", handleGesture);
    window.addEventListener("touchstart", handleGesture);
    window.addEventListener("keydown", handleGesture);

    return () => cleanup();
  }, [loadingComplete]);

  // ── Play / Pause ── directly controls the audio element
  const handlePlayPause = (e: React.MouseEvent) => {
    e.stopPropagation();
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  // ── Mute ── directly controls the audio element
  const handleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const audio = audioRef.current;
    if (!audio) return;
    const next = !isMuted;
    audio.muted = next;
    setIsMuted(next);
  };

  // ── Volume slider ── directly controls the audio element
  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    const audio = audioRef.current;
    const v = parseFloat(e.target.value);
    setVolume(v);
    if (audio) {
      audio.volume = v;
      if (v > 0 && isMuted) {
        audio.muted = false;
        setIsMuted(false);
      }
    }
  };

  const BARS = [0.5, 1, 0.65, 0.85, 0.55];

  return (
    <motion.div
      initial={{ y: 64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}
      className="fixed bottom-6 left-4 z-50 select-none"
      style={{ touchAction: "manipulation" }}
    >
      {/* autoPlay + muted → browser always allows muted autoplay */}
      <audio
        ref={audioRef}
        src="/ambient.mp3"
        autoPlay
        muted
        loop
        preload="auto"
        style={{ display: "none" }}
      />

      {/* Pill — hover/tap to expand */}
      <motion.div
        animate={{ width: expanded ? 232 : 110 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className="flex h-11 items-center overflow-hidden rounded-full border border-white/40 bg-white/85 shadow-[0_6px_28px_rgba(0,0,0,0.14)] backdrop-blur-2xl dark:border-white/10 dark:bg-[#1c1a17]/90"
        style={{ paddingLeft: 6, paddingRight: 6 }}
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
        onClick={(e) => { e.stopPropagation(); setExpanded(p => !p); }}
      >
        {/* Play / Pause */}
        <button
          onClickCapture={handlePlayPause}
          aria-label={isPlaying ? "Pause music" : "Play music"}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-terracotta text-white shadow-sm transition-transform duration-150 hover:scale-105 active:scale-90 cursor-pointer"
        >
          {isPlaying
            ? <Pause className="h-[11px] w-[11px]" />
            : <Play  className="h-[12px] w-[12px] translate-x-[1px]" />
          }
        </button>

        {/* Waveform bars */}
        <div
          aria-hidden
          className="mx-[10px] flex shrink-0 items-end gap-[3px]"
          style={{ height: 18 }}
        >
          {BARS.map((scale, i) => (
            <motion.span
              key={i}
              style={{
                display: "block",
                width: 3,
                height: 18,
                borderRadius: 99,
                background: "#3A7C7C",
                transformOrigin: "bottom",
                willChange: "transform",
              }}
              animate={
                isPlaying && !isMuted
                  ? { scaleY: [scale * 0.25, scale, scale * 0.5, scale * 0.88, scale * 0.25] }
                  : { scaleY: 0.18 }
              }
              transition={{
                duration: 0.78 + i * 0.12,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.1,
                repeatType: "loop",
              }}
            />
          ))}
        </div>

        {/* Mute button */}
        <button
          onClickCapture={handleMute}
          aria-label={isMuted ? "Unmute music" : "Mute music"}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-charcoal/60 transition-colors duration-150 hover:bg-charcoal/10 hover:text-terracotta active:scale-90 dark:text-cream/60 cursor-pointer"
        >
          {isMuted
            ? <VolumeX className="h-[15px] w-[15px]" />
            : <Volume2 className="h-[15px] w-[15px]" />
          }
        </button>

        {/* Volume slider (only when expanded) */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              key="vol"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 68 }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
              className="ml-1 shrink-0 overflow-hidden flex items-center"
              style={{ height: 44 }}
              onClickCapture={(e) => e.stopPropagation()}
            >
              <input
                type="range"
                min={0}
                max={1}
                step={0.05}
                value={isMuted ? 0 : volume}
                onChange={handleVolume}
                aria-label="Volume"
                className="w-[64px] cursor-pointer accent-terracotta"
                style={{ height: 4 }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Track label */}
      <AnimatePresence>
        {isPlaying && (
          <motion.p
            key="lbl"
            initial={{ opacity: 0, y: 3 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            aria-hidden
            className="mt-1.5 text-center font-mono text-[9px] uppercase tracking-[0.18em] text-charcoal/38 dark:text-cream/32"
          >
            {isMuted ? "🔇 muted" : "♩ calm piano · looping"}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}


/* ---------- Sections ---------- */

function Nav({ theme, toggleTheme }: { theme: "light" | "dark"; toggleTheme: () => void }) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md border-b border-charcoal/10" style={{ background: theme === "dark" ? "rgba(18,17,14,0.75)" : "rgba(253,248,243,0.75)" }}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-3 group">
          {/* Geometric BP Monogram Logo */}
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 group-hover:rotate-12">
            <polygon points="18,2 34,10 34,26 18,34 2,26 2,10" fill="#C2654A" opacity="0.12" />
            <polygon points="18,2 34,10 34,26 18,34 2,26 2,10" stroke="#C2654A" strokeWidth="1.5" fill="none" />
            <polygon points="18,8 28,13 28,23 18,28 8,23 8,13" stroke="#3A7C7C" strokeWidth="1" fill="none" opacity="0.5" />
            <text x="18" y="22" textAnchor="middle" fontFamily="serif" fontWeight="bold" fontSize="12" fill="currentColor" className="text-charcoal" letterSpacing="-1">RR</text>
          </svg>
          <span className="font-display text-xl font-bold tracking-tight text-charcoal">
            rohit<span className="text-terracotta">.</span>
          </span>
        </a>
        <nav className="hidden gap-8 text-sm font-medium text-charcoal/70 md:flex">
          <a href="#work" className="hover:text-terracotta transition-colors">Work</a>
          <a href="#experience" className="hover:text-terracotta transition-colors">Journey</a>
          <a href="#achievements" className="hover:text-terracotta transition-colors">Wins</a>
          <a href="#contact" className="hover:text-terracotta transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="grid h-8 w-8 place-items-center rounded-full border border-charcoal/20 text-charcoal hover:border-terracotta hover:text-terracotta transition-all cursor-pointer"
            aria-label="Toggle theme"
            data-cursor="link"
          >
            <AnimatePresence mode="wait" initial={false}>
              {theme === "dark" ? (
                <motion.div
                  key="moon"
                  initial={{ rotate: -90, scale: 0, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: 90, scale: 0, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Moon className="h-4 w-4" />
                </motion.div>
              ) : (
                <motion.div
                  key="sun"
                  initial={{ rotate: -90, scale: 0, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: 90, scale: 0, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Sun className="h-4 w-4" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
          <a
            href="/Rohit Raj.pdf"
            download="Rohit_Raj_Resume.pdf"
            className="hidden items-center gap-1.5 rounded-full border border-charcoal/20 px-3.5 py-1.5 text-xs font-medium text-charcoal transition-all hover:border-terracotta hover:text-terracotta md:inline-flex"
          >
            Resume.pdf
          </a>
          <button
            onClick={openCalendly}
            className="rounded-full bg-terracotta px-4 py-2 text-xs font-medium text-cream transition-transform hover:-translate-y-0.5 cursor-pointer"
          >
            Schedule Call
          </button>
          <a
            href="#contact"
            className="rounded-full bg-charcoal px-4 py-2 text-xs font-medium text-cream transition-transform hover:-translate-y-0.5"
          >
            Say hi
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  const isMobile = useIsMobile();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yIllu = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const rotIllu = useTransform(scrollYProgress, [0, 1], [0, 25]);
  const opacityIllu = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const spx = useSpring(px, { stiffness: 80, damping: 20 });
  const spy = useSpring(py, { stiffness: 80, damping: 20 });
  const tx1 = useTransform(spx, (v) => v * 18);
  const ty1 = useTransform(spy, (v) => v * 18);
  const tx2 = useTransform(spx, (v) => v * -28);
  const ty2 = useTransform(spy, (v) => v * -28);

  const nameWords = ["Rohit", "Raj"];

  return (
    <section
      id="top"
      data-section="hero"
      ref={ref}
      onMouseMove={(e) => {
        if (isMobile) return;
        const r = ref.current!.getBoundingClientRect();
        px.set((e.clientX - r.left - r.width / 2) / r.width);
        py.set((e.clientY - r.top - r.height / 2) / r.height);
      }}
      className="relative overflow-hidden px-6 pb-32 pt-12 md:pt-20"
    >
      {/* organic blobs */}
      <div
        aria-hidden
        className="animate-blob absolute -right-32 -top-20 h-[480px] w-[480px] rounded-full opacity-60 blur-3xl"
        style={{ background: "radial-gradient(circle, #E8A87C 0%, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="animate-blob absolute -left-32 top-40 h-[360px] w-[360px] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, #3A7C7C 0%, transparent 70%)", animationDelay: "3s" }}
      />

      {/* Faint rule lines, editorial feel */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-32 mx-auto hidden h-px max-w-6xl bg-charcoal/10 md:block" />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-40 mx-auto hidden h-px max-w-6xl bg-charcoal/10 md:block" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-12">
        {/* Details column (order-2 on mobile, md:order-1 on desktop) */}
        <div className="order-2 md:order-1 md:col-span-7">
          <div className="mb-5 flex items-center gap-3">
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="h-px w-10 origin-left bg-terracotta"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xs font-medium uppercase tracking-[0.4em] text-terracotta"
            >
              Hello, I'm
            </motion.p>
            <span className="font-mono text-[11px] text-charcoal/40">No. 01 / Portfolio</span>
          </div>

          {/* Word-by-word name reveal with mask */}
          <h1 className="font-display text-5xl font-bold leading-[1.02] text-charcoal md:text-7xl">
            {nameWords.map((w, i) => (
              <span key={w} className={`mr-3 inline-block overflow-hidden align-bottom pb-4 -mb-4 ${i === 1 ? "pr-6" : ""}`}>
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.2 + i * 0.12, ease: EASE }}
                  className={`inline-block pb-4 ${i === 1 ? "text-gradient-warm italic pr-4" : ""}`}
                >
                  {w}
                </motion.span>
              </span>
            ))}
          </h1>

          <div className="mt-6 overflow-hidden">
            <motion.p
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.55, ease: EASE }}
              className="max-w-lg font-display text-xl italic text-charcoal/75 md:text-2xl"
            >
              B.Tech CSE (AI &amp; ML) Student
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.85 }}
            className="mt-7 inline-flex items-center gap-2 rounded-full border border-terracotta/20 bg-white/70 px-4 py-2 text-sm text-charcoal shadow-warm backdrop-blur-sm dark:bg-card/70"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-pulse-dot absolute inline-flex h-full w-full rounded-full bg-terracotta" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-terracotta" />
            </span>
            <span className="font-mono text-xs">Currently building</span>
            <span className="font-mono text-xs font-semibold text-terracotta">GyanSetu AI</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-terracotta px-7 py-3.5 text-sm font-medium text-cream shadow-warm transition-shadow hover:shadow-warm-lg"
              >
                See My Work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Magnetic>
            <Magnetic>
              <button
                onClick={openCalendly}
                className="inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 text-sm font-medium text-cream hover:bg-teal/90 shadow-warm transition-colors cursor-pointer"
              >
                Schedule a Meeting
              </button>
            </Magnetic>
            <Magnetic>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-charcoal/20 px-6 py-3 text-sm font-medium text-charcoal/70 transition-colors hover:border-terracotta hover:text-terracotta cursor-pointer dark:text-cream/70 dark:border-white/20"
              >
                Send Message
              </a>
            </Magnetic>
          </motion.div>

          {/* Hero Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="mt-6 flex flex-wrap items-center gap-5 text-charcoal/70 dark:text-cream/70"
          >
            <a
              href="https://linkedin.com/in/rohit-upadhyay25"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-terracotta transition-colors p-1"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/Rohitraj45592"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-terracotta transition-colors p-1"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-terracotta transition-colors p-1"
              aria-label="LeetCode"
            >
              <LeetCodeIcon className="h-5 w-5 text-charcoal dark:text-cream hover:text-terracotta dark:hover:text-terracotta transition-colors" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-terracotta transition-colors p-1"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="mailto:rohitraj2522003@gmail.com"
              className="hover:text-terracotta transition-colors p-1"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </motion.div>

          {/* Stat strip */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2, ease: EASE }}
            className="mt-12 grid max-w-md grid-cols-3 divide-x divide-charcoal/10"
          >
            {[
              { v: "8.63", l: "CGPA (Top 15%)" },
              { v: "84+", l: "GitHub Commits" },
              { v: "IBM", l: "Intern (Top 15%)" },
            ].map((s) => (
              <div key={s.l} className="px-4 first:pl-0">
                <p className="font-display text-2xl font-bold text-charcoal">{s.v}</p>
                <p className="mt-1 text-[11px] uppercase tracking-wider text-charcoal/55">{s.l}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Circular Telemetry Profile Photo Widget (order-1 on mobile, md:order-2 on desktop) */}
        <div className="order-1 md:order-2 md:col-span-5 relative flex items-center justify-center py-6 md:py-0">
          <motion.div
            style={{ y: yIllu, rotate: rotIllu, opacity: opacityIllu }}
            className="relative flex h-[280px] w-[280px] items-center justify-center md:h-[310px] md:w-[310px]"
          >
            {/* Outer rotating dashed ring */}
            <motion.div 
              style={isMobile ? {} : { x: tx1, y: ty1 }}
              className="animate-rotate-cw absolute inset-0 rounded-full border border-dashed border-terracotta/40" 
            />
            
            {/* Middle rotating tech ring */}
            <motion.div 
              style={isMobile ? {} : { x: tx2, y: ty2 }}
              className="animate-rotate-ccw absolute inset-3 rounded-full border border-charcoal/10"
            >
              <span className="absolute -top-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-teal shadow-warm" />
              <span className="absolute -bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-teal shadow-warm" />
            </motion.div>
 
            {/* Static alignment guides */}
            <div className="absolute inset-6 rounded-full border border-charcoal/5">
              <div className="absolute -left-1 top-1/2 h-px w-2 -translate-y-1/2 bg-charcoal/20" />
              <div className="absolute -right-1 top-1/2 h-px w-2 -translate-y-1/2 bg-charcoal/20" />
              <div className="absolute -top-1 left-1/2 h-2 w-px -translate-x-1/2 bg-charcoal/20" />
              <div className="absolute -bottom-1 left-1/2 h-2 w-px -translate-x-1/2 bg-charcoal/20" />
            </div>
 
            {/* Inner frame wrapper */}
            <div className="absolute inset-9 rounded-full border border-terracotta/20 bg-cream/30 shadow-[0_0_24px_rgba(194,101,74,0.05)] backdrop-blur-[2px]" />
 
            {/* Profile Photo Wrapper */}
            <div className="relative h-[165px] w-[165px] overflow-hidden rounded-full border-4 border-cream ring-4 ring-terracotta shadow-warm md:h-[185px] md:w-[185px] group cursor-none">
              <img 
                src="/profile.png" 
                alt="Rohit Raj" 
                className="h-full w-full object-cover object-[center_17%] scale-[1.15] transition-transform duration-700 ease-out group-hover:scale-[1.25]"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=240&h=240";
                }}
              />
              <div className="pointer-events-none absolute inset-0 bg-terracotta/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-color-dodge" />
            </div>

            {/* Orbiting Tech Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
              animate={{ opacity: 1, scale: 1, rotate: 4 }}
              transition={{ delay: 1.1, duration: 0.6, ease: EASE }}
              className="absolute bottom-4 left-0 max-w-[150px] rounded-md border border-charcoal/10 bg-peach/95 p-2.5 font-mono text-[9px] leading-snug text-charcoal shadow-warm backdrop-blur-sm"
              style={{ transform: "rotate(4deg)" }}
            >
              <p className="font-bold uppercase tracking-wider text-charcoal/60">About</p>
              <p className="mt-0.5">KIT, Varanasi</p>
              <p>CSE AI &amp; ML · 2028</p>
            </motion.div>

            <div className="pointer-events-none absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-charcoal/10 bg-cream/95 px-3 py-1 font-mono text-[9px] uppercase tracking-widest text-charcoal shadow-warm backdrop-blur-sm dark:bg-card/95">
              Varanasi · Open to Work
            </div>
          </motion.div>
        </div>
      </div>

      {/* organic divider */}
      <svg viewBox="0 0 1440 80" className="absolute bottom-0 left-0 w-full text-cream-tint" preserveAspectRatio="none">
        <path fill="currentColor" d="M0,40 C360,90 720,0 1080,40 C1260,60 1380,30 1440,40 L1440,80 L0,80 Z" />
      </svg>
    </section>
  );
}

/* ---------- Skills ---------- */

const CATEGORY_META: Record<string, { color: string; label: string; bg: string }> = {
  Languages:  { color: "#C2654A", label: "Languages",  bg: "rgba(194,101,74,0.07)" },
  Frameworks: { color: "#3A7C7C", label: "Frameworks", bg: "rgba(58,124,124,0.07)" },
  "AI/GenAI": { color: "#8b5cf6", label: "AI/GenAI",  bg: "rgba(139,92,246,0.07)" },
  Tools:      { color: "#E8A87C", label: "Tools",       bg: "rgba(232,168,124,0.07)" },
  Databases:  { color: "#2D2A24", label: "Databases",   bg: "rgba(45,42,36,0.05)" },
};

type HexSkill = SkillNode & { category: string };
const HEX_SKILLS: HexSkill[] = [
  { name: "Python", level: 90, note: "AI workflows, FastAPI services, and ML scripts", category: "Languages" },
  { name: "JavaScript", level: 88, note: "DOM logic, REST APIs, and production frontends", category: "Languages" },
  { name: "TypeScript", level: 85, note: "Type-safe React and Next.js applications", category: "Languages" },
  { name: "Java", level: 75, note: "OOP and coursework projects", category: "Languages" },
  { name: "SQL", level: 82, note: "Relational queries, schema design, and PostgreSQL", category: "Languages" },
  { name: "React.js", level: 90, note: "Component systems and interactive UIs", category: "Frameworks" },
  { name: "Next.js", level: 85, note: "SSR, routing, and deploy-ready web apps", category: "Frameworks" },
  { name: "FastAPI", level: 85, note: "Python APIs, SQLAlchemy, and AI service layers", category: "Frameworks" },
  { name: "Tailwind CSS", level: 88, note: "Utility-first responsive design", category: "Frameworks" },
  { name: "HTML5 & CSS3", level: 92, note: "Semantic markup and adaptive layouts", category: "Frameworks" },
  { name: "Git & GitHub", level: 90, note: "Version control, commits, and collaboration", category: "Tools" },
  { name: "VS Code", level: 92, note: "Primary development environment", category: "Tools" },
  { name: "Vercel", level: 88, note: "Deployment and CI/CD for web apps", category: "Tools" },
  { name: "Postman", level: 85, note: "REST API testing and documentation", category: "Tools" },
  { name: "PostgreSQL", level: 84, note: "Relational database for GyanSetu AI", category: "Databases" },
  { name: "Supabase", level: 80, note: "Managed Postgres with real-time features", category: "Databases" },
  { name: "LLM APIs", level: 82, note: "Text-to-SQL and GenAI integration", category: "AI/GenAI" },
  { name: "RAG", level: 75, note: "Retrieval-Augmented Generation patterns", category: "AI/GenAI" },
  { name: "Machine Learning", level: 72, note: "Coursework and applied ML models", category: "AI/GenAI" },
  { name: "Text-to-SQL", level: 80, note: "Core feature powering GyanSetu AI engine", category: "AI/GenAI" },
]

const TECH_LOGOS: Record<string, string> = {
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  TypeScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  SQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  Dart: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
  React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "React.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  FastAPI: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  Django: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  Flask: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
  Express: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  Firebase: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg",
  "Git & GitHub": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  Docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "Android Studio": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg",
  Vercel: "https://cdn.simpleicons.org/vercel/000000",
  Render: "https://cdn.simpleicons.org/render/46E3B7",
  MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  Firestore: "https://cdn.simpleicons.org/firebase/FFCA28",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  "HTML5 & CSS3": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "VS Code": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  Postman: "https://cdn.simpleicons.org/postman/FF6C37",
  PostgreSQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  Supabase: "https://cdn.simpleicons.org/supabase/3ECF8E",
  "LLM APIs": "https://cdn.simpleicons.org/openai/000000",
  RAG: "https://cdn.simpleicons.org/langchain/1C3C3C",
  "Machine Learning": "https://cdn.simpleicons.org/scikitlearn/F7931E",
  "Text-to-SQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
};

function TechLogo({ name }: { name: string }) {
  return (
    <img
      src={TECH_LOGOS[name]}
      alt={`${name} logo`}
      loading="lazy"
      className="h-12 w-12 object-contain drop-shadow-[0_10px_18px_rgba(45,42,36,0.12)] md:h-14 md:w-14"
    />
  );
}

function HexCell({
  skill,
  index,
  onHover,
  dimmed,
  highlighted,
}: {
  skill: HexSkill;
  index: number;
  onHover: (s: HexSkill | null) => void;
  dimmed: boolean;
  highlighted: boolean;
}) {
  const meta = CATEGORY_META[skill.category];
  const isExpert = skill.level >= 90;
  const clipHex = "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";
  const isMobile = useIsMobile();

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: dimmed ? 0.2 : 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, ease: "easeOut", delay: isMobile ? 0 : (index % 6) * 0.015 }}
      className={`flex h-full min-w-0 flex-col items-center justify-start gap-3 transition-opacity duration-300 ${dimmed ? "opacity-20 pointer-events-none" : "opacity-100"}`}
    >
      {/* Floating inner wrapper */}
      <motion.div
        animate={isMobile ? {} : { y: [0, -5, 0] }}
        transition={{
          duration: 3.2 + (index % 5) * 0.35,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.2,
        }}
        whileHover={{ y: -8, scale: 1.06, zIndex: 30 }}
        onMouseEnter={() => onHover(skill)}
        onMouseLeave={() => onHover(null)}
        className="relative h-[118px] w-[104px] cursor-pointer md:h-[150px] md:w-[132px]"
      >
        {/* Glow ring */}
        {(isExpert || highlighted) && (
          <motion.div
            className="absolute inset-[-8px]"
            style={{ clipPath: clipHex, background: meta.color, filter: "blur(6px)" }}
            animate={isMobile ? {} : { opacity: highlighted ? [0.4, 0.9, 0.4] : [0, 0.4, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: index * 0.28 }}
          />
        )}
        {/* Hex body */}
        <div
          className="absolute inset-0"
          style={{
            clipPath: clipHex,
            background: `linear-gradient(145deg, white 10%, ${meta.color}28 60%, ${meta.color}18 100%)`,
          }}
        />
        {/* Hex border */}
        <div
          className="absolute inset-0"
          style={{
            clipPath: clipHex,
            boxShadow: `inset 0 0 0 ${highlighted ? "2.5px" : "1.5px"} ${meta.color}${highlighted ? "" : "60"}`,
          }}
        />
        {/* Level indicator */}
        <div
          className="absolute left-0 right-0 bottom-0"
          style={{
            clipPath: clipHex,
            height: `${skill.level * 0.7}%`,
            background: `linear-gradient(180deg, transparent 0%, ${meta.color}25 100%)`,
          }}
        />
        {/* Tech logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="grid h-16 w-16 place-items-center rounded-2xl bg-white/72 shadow-[0_12px_28px_rgba(45,42,36,0.09)] backdrop-blur-sm md:h-20 md:w-20 dark:bg-card/72">
            <TechLogo name={skill.name} />
          </div>
        </div>
        {/* Expert indicator */}
        {isExpert && (
          <motion.div
            className="absolute -top-1.5 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full ring-2 ring-cream-tint"
            style={{ background: meta.color }}
            animate={isMobile ? {} : { scale: [1, 1.4, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
          />
        )}
      </motion.div>

      {/* Label */}
      <div className="text-center leading-tight">
        <p
          className="max-w-[8.5rem] text-wrap font-mono text-[10px] font-bold uppercase tracking-widest"
          style={{ color: meta.color }}
        >
          {skill.name}
        </p>
      </div>
    </motion.div>
  );
}


const RESUME_SEGMENTS = [
  {
    keywords: ["gyansetu", "soil", "nain", "nain 2.0", "funding", "5 lakh", "agriculture", "sensor"],
    title: "Project GyanSetu AI (IBM CEP Funded)",
    content: "Project GyanSetu AI is an IoT-enabled smart agriculture assistant that secured Rs. 5 Lakhs in funding from the IBM CEP (New Age Incubation Network) program. It is designed to assist farmers by monitoring real-time soil health, recommending crop configurations, and automating irrigation flows.",
    citations: ["#achievements"]
  },
  {
    keywords: ["education", "college", "study", "smvitm", "udupi", "cgpa", "marks", "grade", "university", "qualification"],
    title: "Academic Background",
    content: "Rohit Raj is pursuing a B.Tech in Computer Science & Engineering (AI & ML) at Kashi Institute of Technology, Varanasi. He is in the 2024 - 2028 batch and maintains a CGPA of 8.63, placing him in the top 15% of his batch.",
    citations: ["#education"]
  },
  {
    keywords: ["experience", "work", "job", "intern", "internship", "antarita", "systemtron", "journeybuddy", "roles"],
    title: "Work Experience",
    content: "Rohit has completed an IBM CEP Virtual Internship (Jul - Aug 2025) as a Web & Mobile Development Intern, finishing in the top 15% of the cohort and earning a Rs. 4,000 stipend. He delivered 3+ front-end projects in HTML5, CSS3 & JavaScript.",
    citations: ["#experience"]
  },
  {
    keywords: ["skills", "languages", "python", "typescript", "react", "next.js", "databases", "java", "firebase", "tech stack", "technologies"],
    title: "Technical Stack",
    content: "Rohit specializes in modern technologies:\n- Languages: Python, JavaScript, TypeScript, Java, SQL\n- Frameworks: React.js, Next.js, FastAPI, Tailwind CSS, HTML5/CSS3\n- AI/GenAI: LLM APIs, Text-to-SQL, RAG, Machine Learning\n- Tools: Git/GitHub, VS Code, Vercel, Postman\n- Databases: PostgreSQL, Supabase",
    citations: ["#skills"]
  },
  {
    keywords: ["varnothsava", "fest", "college fest", "website", "ticket", "payment", "razorpay"],
    title: "GyanSetu AI — GenAI Student ERP",
    content: "GyanSetu AI is a production-deployed full-stack GenAI ERP built by Rohit with Next.js, TypeScript, FastAPI, PostgreSQL, and LLM APIs. Students can query attendance, marks & timetable in natural language; the AI converts queries to SQL and returns real-time data. It has 84+ GitHub commits and is live on Vercel.",
    citations: ["#work"]
  },
  {
    keywords: ["hackathon", "hackathons", "wins", "trophy", "awards", "canara", "acu"],
    title: "Hackathon Awards & Milestones",
    content: "Rohit's key achievements include:\n- IBM CEP Internship Certificate (Jul 2025), finishing in top 15% of cohort.\n- CGPA 8.63, ranking in the top 15% of CSE (AI & ML) batch at KIT Varanasi.\n- Deployed GyanSetu AI on Vercel with 84+ GitHub commits as a production GenAI ERP.",
    citations: ["#achievements"]
  },
  {
    keywords: ["contact", "email", "mail", "linkedin", "phone", "hire", "socials"],
    title: "Contact Details",
    content: "You can reach Rohit Raj at:\n- Email: rohitraj2522003@gmail.com\n- LinkedIn: linkedin.com/in/rohit-upadhyay25\n- GitHub: github.com/Rohitraj45592\n- Phone: +91 7004478054",
    citations: ["#contact"]
  },
  {
    keywords: ["judge-it", "judgeit", "judging", "supabase", "platform"],
    title: "JudgeIt Platform",
    content: "JudgeIt is a production-hardened, full-stack judging platform built with Next.js 14, Supabase, and Tailwind CSS. It is designed to coordinate hackathons, startup pitches, and competitions, enabling organizers to manage judges and input scores in real time.",
    citations: ["#work"]
  }
];

function formatMessageText(text: string) {
  const lines = text.split("\n");
  let inList = false;
  let listItems: string[] = [];
  const renderedElements: React.ReactNode[] = [];

  const flushList = (key: string | number) => {
    if (listItems.length > 0) {
      renderedElements.push(
        <ul key={`ul-${key}`} className="list-disc pl-5 mb-3 space-y-1.5 text-charcoal/80 dark:text-cream/80">
          {listItems.map((item, idx) => (
            <li key={idx} className="text-xs leading-relaxed">{item}</li>
          ))}
        </ul>
      );
      listItems = [];
      inList = false;
    }
  };

  lines.forEach((line, index) => {
    const trimmed = line.trim();
    if (trimmed.startsWith("### ")) {
      flushList(index);
      renderedElements.push(
        <h5 key={index} className="font-display text-sm font-bold text-teal dark:text-teal mb-3 mt-3">
          {trimmed.replace("### ", "")}
        </h5>
      );
    } else if (trimmed.startsWith("- ")) {
      inList = true;
      listItems.push(trimmed.replace("- ", ""));
    } else if (/^\d+\.\s/.test(trimmed)) {
      flushList(index);
      renderedElements.push(
        <div key={index} className="mb-2.5 pl-3 border-l-2 border-terracotta/30 text-xs leading-relaxed text-charcoal/90 dark:text-cream/90">
          <strong className="text-terracotta font-mono mr-1">{trimmed.match(/^\d+\./)?.[0]}</strong> {trimmed.replace(/^\d+\.\s+/, "")}
        </div>
      );
    } else if (trimmed === "") {
      flushList(index);
    } else {
      flushList(index);
      renderedElements.push(
        <p key={index} className="mb-3 last:mb-0 text-xs leading-relaxed text-charcoal/90 dark:text-cream/90">
          {trimmed}
        </p>
      );
    }
  });

  flushList("end");
  return renderedElements;
}

function AILab() {
  const [messages, setMessages] = useState<Array<{ id: string; sender: "user" | "bot"; text: string; citations?: string[] }>>([
    {
      id: "initial",
      sender: "bot",
      text: "Hello! I am your interactive search assistant. You can ask me anything about Rohit's skills, experience, projects, or background. Tap a quick-start question below or type your own!"
    }
  ]);
  const [query, setQuery] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [typingSteps, setTypingSteps] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMountedRef = useRef(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!isMountedRef.current) {
      isMountedRef.current = true;
      return;
    }
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: "smooth"
      });
    }
  }, [messages, isTyping, typingSteps]);

  const handleSend = (textToSend: string) => {
    if (!textToSend.trim()) return;

    const userMsg = { id: `user-${Date.now()}`, sender: "user" as const, text: textToSend };
    setMessages(prev => [...prev, userMsg]);
    setQuery("");
    setIsTyping(true);
    setTypingSteps(["SCANNING SEMANTIC INDEX..."]);

    setTimeout(() => {
      setTypingSteps(prev => [...prev, "COMPARING SEGMENTS & RELEVANCY..."]);
      
      setTimeout(() => {
        setTypingSteps(prev => [...prev, "FORMULATING DETAILED RESPONSE..."]);

        setTimeout(() => {
          const cleanQuery = textToSend.toLowerCase();
          let bestSegment = null;
          let maxMatches = 0;

          for (const segment of RESUME_SEGMENTS) {
            let matches = 0;
            for (const kw of segment.keywords) {
              if (cleanQuery.includes(kw)) {
                matches++;
              }
            }
            if (matches > maxMatches) {
              maxMatches = matches;
              bestSegment = segment;
            }
          }

          let botText = "";
          let citations: string[] = [];

          if (bestSegment && maxMatches > 0) {
            botText = `### ${bestSegment.title}\n\n${bestSegment.content}`;
            citations = bestSegment.citations;
          } else {
            botText = "I couldn't find a direct match for that query in Rohit's portfolio segment data index.\n\nHowever, you can explore the **Work Showcase** or reach out directly in the **Contact** section for a quick discussion!";
            citations = ["#contact"];
          }

          setMessages(prev => [...prev, {
            id: `bot-${Date.now()}`,
            sender: "bot" as const,
            text: botText,
            citations
          }]);
          setIsTyping(false);
          setTypingSteps([]);
        }, 600);
      }, 500);
    }, 450);
  };

  const handleChipClick = (q: string) => {
    if (isTyping) return;
    handleSend(q);
  };

  const chips = [
    "What is GyanSetu AI?",
    "Where does he study?",
    "Show IBM internship",
    "Show work experience"
  ];

  return (
    <section id="ai-lab" className="relative bg-cream-tint/30 px-6 py-24 border-t border-charcoal/5 scroll-mt-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Interactive Search"
          title="Search My Portfolio"
          story="Explore my qualifications, technical skills, and projects in real time. Ask a custom question or select one of the quick prompts below to search my credentials index."
        />

        <div className="group/console relative mt-12 p-[1px] rounded-3xl bg-charcoal/10 dark:bg-white/10 hover:bg-gradient-to-r hover:from-terracotta/30 hover:to-teal/30 transition-all duration-500 shadow-warm-lg hover:shadow-warm-xl">
          <div className="relative overflow-hidden rounded-3xl bg-white/90 dark:bg-[#151311]/90 backdrop-blur-md p-4 sm:p-6 md:p-8 flex flex-col h-[500px] sm:h-[550px] md:h-[600px] transition-colors duration-300">
            {/* Ambient Background Glows inside Console */}
            <div className="absolute top-0 right-0 -mt-24 -mr-24 w-80 h-80 rounded-full bg-teal/5 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -mb-24 -ml-24 w-80 h-80 rounded-full bg-terracotta/5 blur-3xl pointer-events-none" />

            {/* Chat header */}
            <div className="relative z-10 flex items-center justify-between border-b border-charcoal/10 dark:border-white/10 pb-4">
              <div className="flex items-center">
                {/* macOS Window Controls */}
                <div className="flex items-center gap-1.5 mr-4">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56] opacity-80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e] opacity-80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f] opacity-80" />
                </div>
                <div>
                  <h4 className="font-sans text-xs font-bold text-charcoal/80 dark:text-cream/80">Search Console</h4>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
                </span>
                <span className="font-mono text-[9px] text-charcoal/50 dark:text-cream/50 uppercase tracking-wider">
                  Active
                </span>
              </div>
            </div>

            {/* Messages list */}
            <div 
              ref={containerRef}
              className="relative z-10 flex-1 overflow-y-auto py-6 space-y-6 pr-1 scrollbar-thin scrollbar-thumb-charcoal/10 dark:scrollbar-thumb-white/10"
            >
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[90%] sm:max-w-[80%] rounded-2xl p-4 text-xs leading-relaxed ${
                    msg.sender === "user" 
                      ? "bg-gradient-to-br from-terracotta to-terracotta/95 text-cream rounded-tr-none font-sans shadow-sm" 
                      : "bg-cream-tint/80 dark:bg-white/5 border border-charcoal/5 dark:border-white/5 text-charcoal dark:text-cream rounded-tl-none font-sans shadow-sm"
                  }`}>
                    {msg.sender === "bot" ? (
                      <div>
                        {formatMessageText(msg.text)}
                        
                        {msg.citations && msg.citations.length > 0 && (
                          <div className="mt-4 border-t border-charcoal/5 dark:border-white/5 pt-3 flex flex-wrap items-center gap-2">
                            <span className="font-mono text-[9px] text-charcoal/40 dark:text-white/40">CITATIONS:</span>
                            {msg.citations.map((cite) => (
                              <a
                                key={cite}
                                href={cite}
                                onClick={(e) => {
                                  e.preventDefault();
                                  document.querySelector(cite)?.scrollIntoView({ behavior: "smooth" });
                                }}
                                className="inline-flex items-center gap-1 rounded bg-teal/15 px-2 py-0.5 font-mono text-[8px] uppercase tracking-wider text-teal hover:bg-teal/25 transition-colors"
                              >
                                {cite.replace("#", "[") + "]"}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <span className="whitespace-pre-line">{msg.text}</span>
                    )}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="max-w-[90%] sm:max-w-[80%] rounded-2xl rounded-tl-none bg-cream-tint/80 dark:bg-white/5 border border-charcoal/5 dark:border-white/5 p-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="flex h-1.5 w-1.5 animate-pulse rounded-full bg-teal" />
                      <span className="flex h-1.5 w-1.5 animate-pulse rounded-full bg-teal" style={{ animationDelay: "0.2s" }} />
                      <span className="flex h-1.5 w-1.5 animate-pulse rounded-full bg-teal" style={{ animationDelay: "0.4s" }} />
                    </div>
                    <div className="space-y-1">
                      {typingSteps.map((step, sIdx) => (
                        <p key={sIdx} className="font-mono text-[9px] text-teal/80 dark:text-teal/70 animate-pulse">{">"} {step}</p>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quick chips & Input form */}
            <div className="relative z-10 border-t border-charcoal/10 dark:border-white/10 pt-4 space-y-4">
              {/* Quick chips */}
              <div 
                className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap no-scrollbar"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {chips.map((chip) => (
                  <button
                    key={chip}
                    disabled={isTyping}
                    onClick={() => handleChipClick(chip)}
                    className="flex-shrink-0 rounded-full border border-charcoal/10 dark:border-white/10 bg-white/50 dark:bg-white/5 px-3.5 py-1.5 font-sans text-xs text-charcoal/70 dark:text-cream/70 hover:border-teal hover:text-teal dark:hover:border-teal dark:hover:text-teal hover:bg-teal/5 transition-all shadow-sm disabled:opacity-50 disabled:pointer-events-none cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                  >
                    {chip}
                  </button>
                ))}
              </div>

              {/* Input field */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend(query);
                }}
                className="relative flex items-center w-full bg-cream-tint/40 dark:bg-charcoal/30 rounded-2xl border border-charcoal/15 dark:border-white/10 px-4 py-2.5 focus-within:border-teal/50 focus-within:ring-4 focus-within:ring-teal/5 transition-all duration-300"
              >
                <input
                  type="text"
                  disabled={isTyping}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={isMobile ? "Ask anything..." : "Ask about my skills, experience, or GyanSetu AI..."}
                  className="flex-1 bg-transparent font-sans text-xs text-charcoal dark:text-cream placeholder-charcoal/40 dark:placeholder-white/30 outline-none disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={isTyping || !query.trim()}
                  className="ml-2 rounded-xl bg-teal p-2 text-white hover:bg-teal/90 hover:scale-105 active:scale-95 transition-all disabled:opacity-30 disabled:pointer-events-none cursor-pointer flex items-center justify-center shadow-sm"
                  aria-label="Send query"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>
        </div>
      </div>
    </div>
  </section>
  );
}
function Skills() {
  const [hovered, setHovered] = useState<HexSkill | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const cats = Object.keys(CATEGORY_META);

  const catCounts = cats.reduce<Record<string, number>>((acc, c) => {
    acc[c] = HEX_SKILLS.filter(s => s.category === c).length;
    return acc;
  }, {});

  return (
    <section data-section="skills" id="skills" className="relative overflow-hidden bg-cream-tint px-6 pt-28 pb-14">
      <div aria-hidden className="pointer-events-none absolute -left-40 -top-20 h-[500px] w-[500px] rounded-full opacity-25 blur-3xl"
           style={{ background: "radial-gradient(circle, #C2654A 0%, transparent 65%)" }} />
      <div aria-hidden className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full opacity-20 blur-3xl"
           style={{ background: "radial-gradient(circle, #3A7C7C 0%, transparent 65%)" }} />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills"
          title="My Tech Stack"
          story="A practical set of technologies shaped by building web applications, mobile platforms, and AI prototypes."
        />

        {/* Search bar */}
        <div className="mx-auto mb-12 max-w-md">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-charcoal/35">
              <Search className="h-4 w-4" />
            </span>
            <input
              type="text"
              placeholder="Search stack (e.g. Python, React)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-2 rounded-full border border-charcoal/15 bg-white/70 backdrop-blur-sm outline-none font-sans text-xs transition-all focus:border-terracotta focus:ring-1 focus:ring-terracotta/20 text-charcoal dark:bg-card/70"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-charcoal/35 hover:text-terracotta"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {/* Category legend */}
        <div className="mb-14 flex flex-wrap justify-center gap-6">
          {cats.map((c) => {
            const cm = CATEGORY_META[c];
            const isHovered = hoveredCategory === c;
            return (
              <div
                key={c}
                onMouseEnter={() => setHoveredCategory(c)}
                onMouseLeave={() => setHoveredCategory(null)}
                className={`flex items-center gap-2.5 cursor-pointer transition-all duration-300 p-1.5 rounded-lg ${isHovered ? "bg-white/80 shadow-warm scale-105 dark:bg-card/80" : "hover:scale-105"}`}
              >
                <div className="h-4 w-4 flex-shrink-0"
                  style={{ background: cm.color, clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }} />
                <span className="font-mono text-xs text-charcoal/65 uppercase tracking-wider">
                  {c} <span className="text-charcoal/30">({catCounts[c]})</span>
                </span>
              </div>
            );
          })}
          <div className="flex items-center gap-2">
            <motion.div className="h-3 w-3 rounded-full flex-shrink-0" style={{ background: "#C2654A" }}
              animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 2, repeat: Infinity }} />
            <span className="font-mono text-xs text-charcoal/55 uppercase tracking-wider">Expert</span>
          </div>
        </div>

        {/* Honeycomb grid */}
        <div className="relative mx-auto grid max-w-6xl select-none grid-cols-2 place-items-center gap-x-5 gap-y-9 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {HEX_SKILLS.map((skill, skillIdx) => {
            const matchesSearch = searchQuery === "" || skill.name.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = hoveredCategory === null || skill.category === hoveredCategory;
            const isDimmed = !matchesSearch || !matchesCategory;
            const isHighlighted = searchQuery !== "" && skill.name.toLowerCase().includes(searchQuery.toLowerCase());

            return (
              <HexCell
                key={skill.name}
                skill={skill}
                index={skillIdx}
                onHover={setHovered}
                dimmed={isDimmed}
                highlighted={isHighlighted}
              />
            );
          })}
        </div>

        {/* Premium hover detail card */}
        <div className="mx-auto mt-14 max-w-2xl" style={{ minHeight: 130 }}>
          <AnimatePresence mode="wait">
            {hovered ? (
              <motion.div
                key={hovered.name}
                initial={{ opacity: 0, y: 18, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.96 }}
                transition={{ duration: 0.3, ease: EASE }}
                className="relative overflow-hidden rounded-3xl"
                style={{
                  background: `linear-gradient(135deg, white 50%, ${CATEGORY_META[hovered.category].color}12 100%)`,
                  border: `1px solid ${CATEGORY_META[hovered.category].color}45`,
                  boxShadow: `0 24px 60px ${CATEGORY_META[hovered.category].color}22, 0 4px 16px rgba(0,0,0,0.06)`,
                }}
              >
                <div className="flex items-center gap-6 p-7">
                  <div className="relative flex-shrink-0" style={{ width: 80, height: 92 }}>
                    <div className="absolute inset-0" style={{
                      clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                      background: `linear-gradient(145deg, ${CATEGORY_META[hovered.category].color}30, ${CATEGORY_META[hovered.category].color}65)`,
                    }} />
                    <div className="absolute inset-0 flex items-center justify-center p-5">
                      <TechLogo name={hovered.name} />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="font-display text-2xl font-bold text-charcoal">{hovered.name}</h4>
                        <p className="font-mono text-[11px] uppercase tracking-[0.3em] mt-0.5"
                           style={{ color: CATEGORY_META[hovered.category].color }}>
                          {hovered.category}
                        </p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <p className="font-mono text-sm font-bold uppercase tracking-wider"
                           style={{ color: CATEGORY_META[hovered.category].color }}>
                          {hovered.level >= 90 ? "Expert" : hovered.level >= 75 ? "Proficient" : "Familiar"}
                        </p>
                      </div>
                    </div>
                    {/* Animated proficiency bar */}
                    <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-charcoal/8">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: `linear-gradient(90deg, ${CATEGORY_META[hovered.category].color}77, ${CATEGORY_META[hovered.category].color})` }}
                        initial={{ width: 0 }}
                        animate={{ width: `${hovered.level}%` }}
                        transition={{ duration: 0.75, ease: EASE }}
                      />
                    </div>
                    <p className="mt-3 font-display text-sm italic text-charcoal/60 leading-relaxed">
                      {hovered.note}
                    </p>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="idle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center justify-center rounded-3xl border border-dashed border-charcoal/12 py-10"
              >
                <p className="font-display text-base italic text-charcoal/30">
                  Hover any hexagon to explore the skill
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

/* ---------- Experience ---------- */

function Experience() {
  const isMobile = useIsMobile();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.6"] });
  const pathLen = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="experience" ref={ref} className="relative px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Work Experience"
          title="Professional Journey"
          story="Hands-on experience building platforms, working with product teams, and delivering clean frontend and backend code."
        />

        <div className="relative">
          {/* scroll-drawn wavy line */}
          <svg className="pointer-events-none absolute left-0 top-0 hidden h-full w-full md:block" preserveAspectRatio="none" viewBox="0 0 800 800">
            <path d="M100,80 C400,160 600,40 700,200 C800,360 200,400 100,560 C0,720 500,700 700,760" fill="none" stroke="#C2654A" strokeWidth="2" strokeDasharray="6 8" opacity="0.18" />
            <motion.path
              d="M100,80 C400,160 600,40 700,200 C800,360 200,400 100,560 C0,720 500,700 700,760"
              fill="none"
              stroke="#C2654A"
              strokeWidth="2.5"
              strokeLinecap="round"
              style={{ pathLength: pathLen }}
            />
          </svg>

          <div className="space-y-10">
            {EXPERIENCE.map((e, i) => (
              <Reveal key={e.company} delay={i * 0.05} x={i % 2 === 0 ? -30 : 30}>
                <div className={`md:flex ${i % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}>
                  <div
                    className="relative w-full max-w-xl rounded-2xl bg-white p-6 shadow-warm md:p-8 dark:bg-card"
                    style={isMobile ? {} : { transform: `rotate(${i % 2 === 0 ? "-1.2deg" : "1.5deg"})` }}
                  >
                    <div className="mb-4 flex items-start gap-4">
                      <div
                        className="grid h-12 w-12 shrink-0 place-items-center rounded-full font-mono text-sm font-bold text-cream"
                        style={{ background: e.color }}
                      >
                        {e.initials}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-display text-xl font-bold text-charcoal">{e.role}</h3>
                        <p className="text-sm text-teal">{e.company} | <span className="font-mono text-xs text-charcoal/60">{e.date}</span></p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-charcoal/80">
                      {e.bullets.map((b) => (
                        <li key={b} className="flex gap-2">
                          <span className="mt-2 h-[2px] w-3 shrink-0 bg-terracotta" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LoadingScreen({ onComplete }: { onComplete?: () => void }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("INITIALIZING...");
  const [isComplete, setIsComplete] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsComplete(true);
            if (onComplete) onComplete();
            setTimeout(() => setVisible(false), 900);
          }, 500);
          return 100;
        }

        const next = prev + 1;

        if (next === 25) setStatusText("PREPARING STACK...");
        if (next === 50) setStatusText("COMPILING PROJECTS...");
        if (next === 75) setStatusText("CALIBRATING INTERFACE...");
        if (next === 95) setStatusText("SYSTEM READY...");

        return next;
      });
    }, 14);

    return () => clearInterval(timer);
  }, []);

  if (!visible) return null;

  const radius = 50;
  const strokeWidth = 3;
  const circ = 2 * Math.PI * radius;
  const strokeDashoffset = circ * (1 - progress / 100);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden pointer-events-none select-none">
      {/* Sliding Upper Panel */}
      <motion.div
        initial={{ y: "0%" }}
        animate={{ y: isComplete ? "-100%" : "0%" }}
        transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
        className="absolute top-0 left-0 w-full h-[50vh] bg-[#12110e] flex flex-col justify-end items-center pointer-events-auto"
      >
        {/* Faint blueprint lines in background */}
        <div className="absolute inset-0 blueprint-grid opacity-[0.03]" />
        <div className="absolute inset-0 tech-dot-grid opacity-[0.05]" />
      </motion.div>

      {/* Sliding Lower Panel */}
      <motion.div
        initial={{ y: "0%" }}
        animate={{ y: isComplete ? "100%" : "0%" }}
        transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
        className="absolute bottom-0 left-0 w-full h-[50vh] bg-[#12110e] pointer-events-auto"
      >
        {/* Faint blueprint lines in background */}
        <div className="absolute inset-0 blueprint-grid opacity-[0.03]" />
        <div className="absolute inset-0 tech-dot-grid opacity-[0.05]" />
      </motion.div>

      {/* Floating Center Tech HUD Overlay */}
      <motion.div
        initial={{ opacity: 1, scale: 1 }}
        animate={{ opacity: isComplete ? 0 : 1, scale: isComplete ? 0.9 : 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="absolute inset-0 z-10 flex flex-col items-center justify-center text-[#fdf8f3]"
      >
        <div className="relative flex flex-col items-center max-w-sm px-6 text-center">
          {/* Pulsing circular glow background */}
          <div className="absolute h-64 w-64 rounded-full bg-terracotta/[0.04] blur-3xl animate-pulse" />

          {/* Premium Circular Loader */}
          <div className="relative flex h-32 w-32 items-center justify-center">
            {/* SVG Progress Ring */}
            <svg className="absolute inset-0 h-full w-full rotate-[-90deg]" viewBox="0 0 112 112">
              <circle
                cx="56"
                cy="56"
                r={radius}
                stroke="rgba(253, 248, 243, 0.05)"
                strokeWidth={strokeWidth}
                fill="none"
              />
              <motion.circle
                cx="56"
                cy="56"
                r={radius}
                stroke="var(--terracotta)"
                strokeWidth={strokeWidth}
                strokeDasharray={circ}
                animate={{ strokeDashoffset }}
                transition={{ duration: 0.1, ease: "easeOut" }}
                strokeLinecap="round"
                fill="none"
              />
            </svg>

            {/* Logo Text inside the circle */}
            <div className="font-display text-2xl font-bold tracking-tighter text-[#fdf8f3]">
              RR<span className="text-terracotta">.</span>
            </div>
          </div>

          <span className="mt-8 font-mono text-[10px] tracking-[0.3em] text-terracotta font-bold">
            {String(progress).padStart(3, "0")}%
          </span>

          <span className="mt-2 font-mono text-[9px] uppercase tracking-[0.45em] text-[#fdf8f3]/45 min-h-[1.5em] transition-all">
            {statusText}
          </span>
        </div>
      </motion.div>
    </div>
  );
}

function CircularProgress({ pct, color }: { pct: number; color: string }) {
  const radius = 16;
  const circ = 2 * Math.PI * radius;
  const strokeDashoffset = circ - (pct / 100) * circ;
  return (
    <div className="relative h-11 w-11 flex items-center justify-center shrink-0">
      <svg className="h-full w-full rotate-[-90deg]">
        <circle
          cx="22"
          cy="22"
          r={radius}
          stroke="currentColor"
          strokeWidth="2"
          fill="transparent"
          className="text-charcoal/5"
        />
        <motion.circle
          cx="22"
          cy="22"
          r={radius}
          stroke={color}
          strokeWidth="2"
          fill="transparent"
          strokeDasharray={circ}
                    initial={{ strokeDashoffset: circ }}
          whileInView={{ strokeDashoffset }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          strokeLinecap="round"
        />
      </svg>
      <span className="absolute font-mono text-[8px] font-bold text-charcoal/80">{pct}%</span>
    </div>
  );
}

function Education() {
  const isMobile = useIsMobile();
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const pointerY = useSpring(useTransform(scrollYProgress, [0.15, 0.75], ["0%", "92%"]), {
    stiffness: 100,
    damping: 25,
  });

const EDUCATION_LIST = [
  {
    institution: "Kashi Institute of Technology, Varanasi",
    degree: "B.Tech – Computer Science & Engineering (AI & ML)",
    date: "Aug 2024 – May 2028",
    details: [
      "Specializing in Machine Learning, Deep Learning, and Generative AI systems.",
      "Coursework in Artificial Intelligence, Database Systems, and full-stack integration.",
      "Built production-deployed GyanSetu AI GenAI ERP during studies.",
      "Maintained CGPA of 8.63, ranking in the top 15% of the CSE (AI & ML) batch."
    ],
    badge: "CGPA: 8.63",
    accent: "#C2654A",
    progress: 40,
    status: "In Progress"
  },
  {
    institution: "Basu Private ITI, Bhojpur, Bihar",
    degree: "National Trade Certificate — Electrician (NSQF Level 5)",
    date: "Aug 2021 – Jul 2023",
    details: [
      "Government of India certified trade training under Ministry of Skill Development & Entrepreneurship.",
      "Completed 2-year Electrician trade program under Craftsmen Training Scheme (CTS).",
      "Passed All India Trade Test — Result: Pass | Score: 1005/1200.",
      "Certificate issued by Directorate General of Training, New Delhi (19-Aug-2023).",
    ],
    badge: "Govt. Certified",
    accent: "#3A7C7C",
    progress: 100,
    status: "Completed"
  },
  {
    institution: "Higher Secondary School, Bihar",
    degree: "12th — Higher Secondary Certificate (Grade B)",
    date: "2020 – 2022",
    details: [
      "Completed Higher Secondary Education with Grade B.",
      "Bihar Board examination — passed 2022.",
      "Science stream with focus on core subjects.",
    ],
    badge: "Grade B",
    accent: "#E8A87C",
    progress: 100,
    status: "Completed"
  },
];
  return (
    <section id="education" className="relative bg-cream-tint/30 px-6 py-24 border-t border-charcoal/5">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Education"
          title="Academic Background"
          story="My formal studies in Artificial Intelligence and Data Science, building core foundations in algorithms, databases, and software engineering."
        />

        <div className="grid gap-12 md:grid-cols-12 mt-12" ref={sectionRef}>
          {/* Left Column: Cybernetic Chrono-Scale */}
          <div className="hidden md:flex md:col-span-3 flex-col items-end justify-between py-10 pr-8 border-r border-charcoal/5 relative min-h-[440px]">
            {/* Ruler rail track */}
            <div className="absolute right-0 top-0 bottom-0 w-px bg-charcoal/10 dark:bg-border/20">
              {/* Glowing runner pointer */}
              <motion.div
                style={{ top: pointerY }}
                className="absolute right-[-4.5px] h-2.5 w-2.5 rounded-full bg-terracotta border-2 border-cream dark:border-card shadow-[0_0_10px_#c2654a]"
              />
            </div>

            {/* Scale Year Points */}
            <div className="relative text-right w-full flex flex-col justify-between h-full min-h-[380px]">
              <div className="relative">
  <span className="font-mono text-xs font-bold text-charcoal/60 block">2028</span>
  <span className="font-display text-[9px] uppercase tracking-wider text-terracotta font-semibold">Graduation</span>
  <span className="absolute right-[-36px] top-1.5 h-[1px] w-2 bg-charcoal/20" />
</div>
<div className="relative pt-24">
  <span className="font-mono text-xs font-bold text-charcoal/60 block">2023</span>
  <span className="font-display text-[9px] uppercase tracking-wider text-teal font-semibold">ITI Passed</span>
  <span className="absolute right-[-36px] top-[102px] h-[1px] w-2 bg-charcoal/20" />
</div>
<div className="relative pt-24">
  <span className="font-mono text-xs font-bold text-charcoal/60 block">2022</span>
  <span className="font-display text-[9px] uppercase tracking-wider text-charcoal/40 font-semibold">12th Passed</span>
  <span className="absolute right-[-36px] top-[102px] h-[1px] w-2 bg-charcoal/20" />
</div>
            </div>
          </div>

          {/* Right Column: Stage Cards */}
          <div className="md:col-span-9 space-y-8">
            {EDUCATION_LIST.map((edu, idx) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                className="group relative p-[1px] clip-tech-card bg-charcoal/10 hover:bg-gradient-to-r hover:from-terracotta hover:to-teal transition-all duration-500 shadow-warm"
              >
                <div
                  className="relative overflow-hidden clip-tech-card bg-white p-6 md:p-8 h-full flex flex-col justify-between dark:bg-card"
                  onMouseMove={(e) => {
                    if (isMobile) return;
                    const rect = e.currentTarget.getBoundingClientRect();
                    const mouseX = e.clientX - rect.left;
                    const mouseY = e.clientY - rect.top;
                    e.currentTarget.style.setProperty("--x", `${mouseX}px`);
                    e.currentTarget.style.setProperty("--y", `${mouseY}px`);
                  }}
                >
                  {/* Hover Spotlight Glow */}
                  {!isMobile && (
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: `radial-gradient(220px circle at var(--x, 50%) var(--y, 50%), ${edu.accent}14, transparent 70%)`
                      }}
                    />
                  )}
                  
                  {/* Decorative dot matrix layer */}
                  <div className="absolute inset-0 tech-dot-grid opacity-[0.02] group-hover:opacity-[0.05] transition-opacity pointer-events-none" />

                  {/* Cybernetic code identifier */}
                  <span className="absolute top-2 right-4 font-mono text-[7px] text-charcoal/20 uppercase select-none pointer-events-none">
                    [ academic.stage // {String(idx + 1).padStart(2, "0")} ]
                  </span>

                  <div>
                    <div className="mb-5 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span className="rounded-full px-2.5 py-0.5 font-mono text-[8px] uppercase tracking-widest text-cream font-bold" style={{ background: edu.accent }}>
                          {edu.badge}
                        </span>
                        <span className="font-mono text-[9px] uppercase tracking-wider text-charcoal/40">{edu.status}</span>
                      </div>
                      
                      {/* Interactive Circular Progress Dial */}
                      <CircularProgress pct={edu.progress} color={edu.accent} />
                    </div>

                    <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
                      <h3 className="font-display text-xl font-bold text-charcoal group-hover:text-gradient-warm transition-colors duration-300">
                        {edu.degree}
                      </h3>
                      <span className="font-mono text-xs text-charcoal/45 whitespace-nowrap md:ml-4">{edu.date}</span>
                    </div>
                    
                    <p className="mt-1 text-sm font-semibold text-teal leading-snug">
                      {edu.institution}
                    </p>

                    <ul className="mt-6 space-y-2.5">
                      {edu.details.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-xs text-charcoal/80 leading-normal">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: edu.accent }} />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Projects Card Grid & Modals ---------- */

function ProjectCard({
  project,
  index,
  onOpenCaseStudy,
}: {
  project: typeof PROJECTS[0];
  index: number;
  onOpenCaseStudy: () => void;
}) {
  const isMobile = useIsMobile();
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-8, 8]);
  const springX = useSpring(rotateX, { stiffness: 220, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 220, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile) return;
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    cardRef.current.style.setProperty("--x", `${mouseX}px`);
    cardRef.current.style.setProperty("--y", `${mouseY}px`);

    const tiltX = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const tiltY = (e.clientY - rect.top - rect.height / 2) / rect.height;
    x.set(tiltX);
    y.set(tiltY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={isMobile ? {} : { rotateX: springX, rotateY: springY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.02 }}
      className="group relative p-[1px] clip-tech-card bg-charcoal/10 hover:bg-gradient-to-r hover:from-terracotta hover:to-teal transition-all duration-500 shadow-warm hover:shadow-warm-lg"
    >
      <div className="relative overflow-hidden clip-tech-card bg-white p-6 md:p-8 h-full flex flex-col justify-between dark:bg-card">
        {/* Dynamic Glowing Accent Light */}
        {!isMobile && (
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background: `radial-gradient(220px circle at var(--x, 50%) var(--y, 50%), ${project.accent}20, transparent 65%)`,
            }}
          />
        )}

        {/* Technical dot matrix grid pattern */}
        <div className="absolute inset-0 tech-dot-grid opacity-[0.02] group-hover:opacity-[0.05] transition-opacity pointer-events-none" />

        {/* Cybernetic code identifier */}
        <span className="absolute top-2 right-4 font-mono text-[7px] text-charcoal/20 uppercase select-none pointer-events-none">
          [ sys:project // {String(index + 1).padStart(2, "0")} ]
        </span>

        <div>
          <div className="mb-4 flex items-center justify-between">
            <span className="font-mono text-[9px] uppercase tracking-wider text-charcoal/45">
              {project.month} {project.year}
            </span>
            <span
              className="rounded-full px-2.5 py-0.5 font-mono text-[8px] uppercase tracking-widest text-cream"
              style={{ background: project.accent }}
            >
              {project.category}
            </span>
          </div>

          <h3 className="font-display text-2xl font-bold text-charcoal group-hover:text-gradient-warm transition-colors duration-300">
            {project.name}
          </h3>
          <p className="mt-2 text-xs italic text-charcoal/70 leading-relaxed">
            {project.blurb}
          </p>

          {/* Quick Metrics / Bullets preview */}
          <ul className="mt-4 space-y-1.5">
            {project.impact.slice(0, 2).map((imp, idx) => (
              <li key={idx} className="flex gap-1.5 text-[11px] text-charcoal/80">
                <span style={{ color: project.accent }}>✦</span>
                <span className="line-clamp-1">{imp}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 pt-4 border-t border-charcoal/10">
          {/* Tech badges */}
          <div className="flex flex-wrap gap-1 mb-4">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="rounded-md border bg-cream-tint/30 px-1.5 py-0.5 font-mono text-[9px]"
                style={{ borderColor: `${project.accent}25`, color: "var(--charcoal)" }}
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 4 && (
              <span className="font-mono text-[9px] text-charcoal/45 px-1">
                +{project.tags.length - 4}
              </span>
            )}
          </div>

          <div className="flex items-center justify-between">
            {project.live && project.live !== "#" ? (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1 font-mono text-[9px] uppercase tracking-widest text-teal hover:text-terracotta transition-colors font-semibold"
              >
                <ExternalLink className="h-3 w-3" /> Live
              </a>
            ) : (
              <span className="font-mono text-[9px] text-charcoal/30 select-none cursor-not-allowed">
                Private Repo
              </span>
            )}

            <button
              onClick={(e) => {
                e.stopPropagation();
                onOpenCaseStudy();
              }}
              className="inline-flex items-center gap-1 font-mono text-[9px] uppercase tracking-widest text-terracotta hover:underline font-semibold cursor-pointer"
            >
              Deep Dive <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Projects() {
  const [viewMode, setViewMode] = useState<"grid" | "timeline">("timeline");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<typeof PROJECTS[0] | null>(null);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    setVisibleCount(6);
  }, [activeCategory]);

  const [activeTimelineIdx, setActiveTimelineIdx] = useState(0);

  const [isAutoplay, setIsAutoplay] = useState(false);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isAutoplay && viewMode === "timeline") {
      autoplayTimerRef.current = setInterval(() => {
        setActiveTimelineIdx((prev) => (prev + 1) % PROJECTS.length);
      }, 5000);
    } else {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    }
    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    };
  }, [isAutoplay, viewMode]);

  const nextProject = () => {
    setActiveTimelineIdx((prev) => (prev + 1) % PROJECTS.length);
  };

  const prevProject = () => {
    setActiveTimelineIdx((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
  };

  const toggleAutoplay = () => {
    setIsAutoplay((prev) => !prev);
  };

  const stopAutoplay = () => {
    setIsAutoplay(false);
    setActiveTimelineIdx(0);
  };

  const categories = ["All", "Featured", "AI & ML", "Web Apps", "Frontend UI", "Mobile & IoT"];

  const filteredProjects = ALL_PROJECTS.filter((p) => {
    if (activeCategory === "All") return true;
    if (activeCategory === "Featured") return p.featured;
    return p.category === activeCategory;
  });

  const timelineProj = PROJECTS[activeTimelineIdx];

  return (
    <section data-section="work" id="work" className="relative bg-cream-tint px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Featured Projects"
          story="A collection of web apps, full-stack tools, and AI prototypes built to solve real-world problems."
        />

        {/* View Toggle & Filtering Tabs */}
        <div className="flex flex-col items-center justify-between gap-6 mb-12 border-b border-charcoal/10 pb-6 md:flex-row">
          {/* Toggle buttons */}
          <div className="inline-flex rounded-full border border-charcoal/15 bg-white/50 p-1 backdrop-blur-sm dark:bg-card/50">
            <button
              onClick={() => setViewMode("grid")}
              className={`rounded-full px-5 py-1.5 font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                viewMode === "grid" ? "bg-terracotta text-cream" : "text-charcoal/65 hover:text-charcoal"
              }`}
            >
              More Projects
            </button>
            <button
              onClick={() => setViewMode("timeline")}
              className={`rounded-full px-5 py-1.5 font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                viewMode === "timeline" ? "bg-terracotta text-cream" : "text-charcoal/65 hover:text-charcoal"
              }`}
            >
              Timeline Story
            </button>
          </div>

          {/* Filtering tabs */}
          {viewMode === "grid" && (
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActiveCategory(c)}
                  className={`rounded-md px-3.5 py-1 font-mono text-[10px] uppercase tracking-widest transition-all cursor-pointer ${
                    activeCategory === c
                      ? "bg-charcoal text-cream"
                      : "border border-charcoal/15 bg-white/40 hover:bg-white text-charcoal/70 dark:bg-card/40"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Grid View Panel */}
        {viewMode === "grid" ? (
          <div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.slice(0, visibleCount).map((project, idx) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={idx}
                  onOpenCaseStudy={() => setSelectedCaseStudy(project)}
                />
              ))}
            </div>
            {visibleCount < filteredProjects.length && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-12 flex flex-col items-center gap-3"
              >
                <p className="font-mono text-xs text-charcoal/40 uppercase tracking-widest">
                  Showing {visibleCount} of {filteredProjects.length} projects
                </p>
                <button
                  onClick={() => setVisibleCount((n) => n + 6)}
                  className="group inline-flex items-center gap-2 rounded-full border-2 border-charcoal/20 bg-white/60 px-8 py-3 font-mono text-sm font-semibold text-charcoal/80 backdrop-blur-sm transition-all hover:border-terracotta hover:bg-terracotta hover:text-cream hover:shadow-warm-lg dark:bg-card/60 dark:text-cream/80 cursor-pointer"
                >
                  Load More Projects
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </motion.div>
            )}
            {visibleCount >= filteredProjects.length && filteredProjects.length > 6 && (
              <p className="mt-10 text-center font-mono text-xs text-charcoal/35 uppercase tracking-widest">
                ✓ All {filteredProjects.length} projects loaded
              </p>
            )}
          </div>
        ) : (
          /* Original Interactive Timeline View */
          <div className="mx-auto max-w-6xl">
            {/* Timeline rail */}
            <div className="relative mx-auto mt-8 max-w-6xl">
              <div className="absolute left-0 right-0 top-7 hidden h-px bg-charcoal/15 lg:block" />
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: EASE }}
                className="absolute left-0 right-0 top-7 hidden h-[2px] origin-left bg-gradient-to-r from-terracotta via-peach to-teal lg:block"
                style={{ opacity: 0.35 }}
              />

              <div className="grid grid-cols-2 gap-y-6 md:grid-cols-4 lg:grid-cols-8 lg:gap-y-0">
                {PROJECTS.map((pr, i) => {
                  const isActive = i === activeTimelineIdx;
                  return (
                    <div key={pr.name} className="relative flex flex-col items-center">
                      <button
                        onMouseEnter={() => setActiveTimelineIdx(i)}
                        onFocus={() => setActiveTimelineIdx(i)}
                        onClick={() => setActiveTimelineIdx(i)}
                        data-cursor="link"
                        data-cursor-label={pr.name}
                        className="group relative grid h-14 w-14 place-items-center cursor-pointer"
                      >
                        {isActive && (
                          <motion.span
                            className="absolute inset-0 rounded-full border-2"
                            style={{ borderColor: pr.accent }}
                            animate={{ scale: [1, 1.6], opacity: [0.7, 0] }}
                            transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
                          />
                        )}
                        <motion.span
                          animate={{ scale: isActive ? 1.15 : 1 }}
                          transition={{ type: "spring", stiffness: 300, damping: 18 }}
                          className="relative grid h-6 w-6 place-items-center rounded-full ring-4 ring-cream-tint"
                          style={{ background: pr.accent }}
                        />
                      </button>
                      <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-charcoal/55">
                        {pr.month} {pr.year}
                      </p>
                      <p className={`mt-1 text-center font-display text-sm font-semibold transition-colors ${isActive ? "text-charcoal" : "text-charcoal/50"}`}>
                        {pr.name}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Timeline card panel */}
            <div className="mx-auto mt-12 max-w-6xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={timelineProj.name}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.45, ease: EASE }}
                  className="relative p-[1.5px] clip-tech-card shadow-warm"
                  style={{ background: `linear-gradient(135deg, ${timelineProj.accent}66 0%, rgba(45,42,36,0.15) 100%)` }}
                >
                  <div className="relative grid gap-8 overflow-hidden clip-tech-card bg-white p-8 md:grid-cols-12 md:p-12 dark:bg-card">
                    <div
                      aria-hidden
                      className="absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-20 blur-3xl pointer-events-none"
                      style={{ background: timelineProj.accent }}
                    />
                    <span className="absolute right-6 top-5 font-mono text-[10px] text-charcoal/30 select-none">
                      No. {String(activeTimelineIdx + 1).padStart(2, "0")} / {String(PROJECTS.length).padStart(2, "0")}
                    </span>

                    {/* Left info */}
                    <div className="relative md:col-span-5 flex flex-col justify-between">
                      <div>
                        <div className="mb-3 flex items-center gap-3">
                          <span className="h-px w-8 animate-pulse" style={{ background: timelineProj.accent }} />
                          <span className="font-mono text-[10px] uppercase tracking-[0.3em]" style={{ color: timelineProj.accent }}>
                            The Project Story
                          </span>
                        </div>
                        <h3 className="font-display text-3xl font-bold text-charcoal md:text-4xl">
                          {timelineProj.name}
                          {timelineProj.badge && (
                            <span
                              className="ml-3 inline-flex items-center gap-1 rounded-full px-2.5 py-1 align-middle text-[10px] font-medium text-cream font-mono"
                              style={{ background: timelineProj.accent }}
                            >
                              <Users className="h-3 w-3" /> {timelineProj.badge}
                            </span>
                          )}
                        </h3>
                        <p className="mt-2 font-display text-base italic text-charcoal/70">{timelineProj.blurb}</p>
                        <p className="mt-5 text-[15px] leading-relaxed text-charcoal/80">{timelineProj.story}</p>

                        <div className="mt-6 flex flex-wrap gap-5 text-xs font-mono uppercase tracking-wider">
                          {timelineProj.live && timelineProj.live !== "#" ? (
                            <a href={timelineProj.live} target="_blank" rel="noopener noreferrer" className="group/l inline-flex items-center gap-1.5 text-teal hover:text-terracotta transition-colors font-semibold">
                              <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                            </a>
                          ) : (
                            <span className="inline-flex items-center gap-1.5 text-charcoal/30 cursor-not-allowed select-none">
                              <ExternalLink className="h-3.5 w-3.5" /> Private Repo
                            </span>
                          )}
                          {timelineProj.github && timelineProj.github !== "#" && (
                            <a href={timelineProj.github} target="_blank" rel="noopener noreferrer" className="group/g inline-flex items-center gap-1.5 text-charcoal/70 hover:text-terracotta transition-colors font-semibold">
                              <Github className="h-3.5 w-3.5" /> Source Code
                            </a>
                          )}
                          <button
                            onClick={() => setSelectedCaseStudy(timelineProj)}
                            className="group/c inline-flex items-center gap-1.5 text-terracotta hover:underline font-semibold cursor-pointer"
                          >
                            Deep Case Study
                          </button>
                        </div>
                      </div>

                      {/* Sub-layout for Impact and Technologies in Left Column */}
                      <div className="mt-8 grid gap-6 sm:grid-cols-2 border-t border-charcoal/10 pt-6">
                        <div>
                          <div className="mb-3 flex items-center gap-3">
                            <span className="h-px w-6 bg-teal" />
                            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-teal">Key Impact</span>
                          </div>
                          <ul className="space-y-2">
                            {timelineProj.impact.map((m) => (
                              <li key={m} className="flex items-start gap-2 text-xs">
                                <span className="font-display text-sm font-bold leading-none mt-0.5" style={{ color: timelineProj.accent }}>
                                  ✦
                                </span>
                                <span className="text-[12px] text-charcoal/85 leading-normal">{m}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <div className="mb-3 flex items-center gap-3">
                            <span className="h-px w-6 bg-charcoal/30" />
                            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-charcoal/55">Technologies</span>
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {timelineProj.tags.map((t) => (
                              <span
                                key={t}
                                className="rounded-md border bg-cream-tint/30 px-2 py-0.5 font-mono text-[9px] clip-tech-card-sm"
                                style={{ borderColor: `${timelineProj.accent}44`, color: "var(--charcoal)" }}
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Device Mockup */}
                    <div className="relative md:col-span-7 flex flex-col justify-center items-center">
                      {timelineProj.deviceType === "laptop" ? (
                        <LaptopMockup videoUrl={timelineProj.videoUrl} fallbackImg={timelineProj.id === "gyansetu" ? "GYANSETU_LIVE" : timelineProj.id === "foodapp" ? "https://github.com/Rohitraj45592/React-food-project/raw/main/screenshots/screenshot1.png" : undefined} projectId={timelineProj.id} />
                      ) : (
                        <MobileMockup videoUrl={timelineProj.videoUrl} projectId={timelineProj.id} />
                      )}

                      {/* Slideshow Controller Bar */}
                      <div className="mt-6 flex items-center gap-4 bg-charcoal/5 dark:bg-white/5 px-4 py-2 rounded-full border border-charcoal/10 dark:border-white/10 shadow-sm backdrop-blur-md">
                        <button
                          onClick={prevProject}
                          className="p-1.5 rounded-full hover:bg-charcoal/10 dark:hover:bg-white/10 text-charcoal/70 hover:text-terracotta transition-colors cursor-pointer"
                          title="Previous Project"
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </button>
                        
                        <button
                          onClick={toggleAutoplay}
                          className="p-1.5 rounded-full hover:bg-charcoal/10 dark:hover:bg-white/10 text-charcoal/70 hover:text-terracotta transition-colors cursor-pointer"
                          title={isAutoplay ? "Pause Slideshow" : "Start Slideshow"}
                        >
                          {isAutoplay ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                        </button>

                        <button
                          onClick={stopAutoplay}
                          className="p-1.5 rounded-full hover:bg-charcoal/10 dark:hover:bg-white/10 text-charcoal/70 hover:text-terracotta transition-colors cursor-pointer"
                          title="Stop Slideshow"
                        >
                          <Square className="h-4 w-4" />
                        </button>

                        <button
                          onClick={nextProject}
                          className="p-1.5 rounded-full hover:bg-charcoal/10 dark:hover:bg-white/10 text-charcoal/70 hover:text-terracotta transition-colors cursor-pointer"
                          title="Next Project"
                        >
                          <ChevronRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        )}

        {/* Public GitHub repositories footer list removed as it is redundant with the More Projects tab */}
      </div>

      <Dialog open={selectedCaseStudy !== null} onOpenChange={(open) => { if (!open) setSelectedCaseStudy(null); }}>
        <DialogContent className="max-w-4xl md:max-w-5xl bg-cream border-charcoal/20 dark:bg-[#12110e] dark:border-[#302c27] max-h-[90vh] overflow-y-auto">
          {selectedCaseStudy && (() => {
            const isFeatured = PROJECTS.some((p) => p.id === selectedCaseStudy.id);
            return (
              <>
                <DialogHeader className="border-b border-charcoal/10 pb-4 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-charcoal/50">
                      {isFeatured ? "Case Study deep-dive" : "GitHub Repository details"}
                    </span>
                    <span
                      className="rounded-full px-2.5 py-0.5 font-mono text-[8px] uppercase tracking-widest text-cream"
                      style={{ background: selectedCaseStudy.accent }}
                    >
                      {selectedCaseStudy.category}
                    </span>
                  </div>
                  <DialogTitle className="font-display text-3xl font-bold text-charcoal">
                    {selectedCaseStudy.name}
                  </DialogTitle>
                  <p className="mt-1 text-sm italic text-charcoal/70">
                    {selectedCaseStudy.blurb}
                  </p>
                </DialogHeader>
                
                <div className="grid gap-8 md:grid-cols-12 text-sm text-charcoal/90">
                  {/* Left Column: Details, Architecture, Challenges */}
                  <div className={isFeatured ? "md:col-span-7 space-y-6" : "md:col-span-8 space-y-6"}>
                    {/* Story / Description */}
                    <div>
                      <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-terracotta mb-2 font-bold">
                        {isFeatured ? "Project Story & Details" : "Repository Description"}
                      </h4>
                      <p className="leading-relaxed text-xs">
                        {selectedCaseStudy.story}
                      </p>
                    </div>
                    
                    {/* Subsystem Architecture Diagram */}
                    {isFeatured && (
                      <div>
                        <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-teal mb-2 font-bold">
                          System Architecture
                        </h4>
                        <div className="rounded-xl border border-dashed border-charcoal/20 bg-cream-tint/50 p-4 dark:bg-card/50">
                          <div className="flex flex-wrap items-center justify-center gap-3">
                            {selectedCaseStudy.architecture.map((node, index) => (
                              <div key={index} className="flex items-center gap-2">
                                <div className="rounded-md border bg-white px-2.5 py-1.5 font-mono text-[10px] shadow-sm text-center border-charcoal/10 dark:bg-card dark:border-border">
                                  {node}
                                </div>
                                {index < selectedCaseStudy.architecture.length - 1 && (
                                  <span className="font-mono text-xs text-charcoal/30 animate-pulse">→</span>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {/* Engineering Challenges */}
                    {isFeatured && (
                      <div>
                        <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-teal mb-3 font-bold">
                          Engineering Challenges &amp; Resolutions
                        </h4>
                        <div className="grid gap-3 sm:grid-cols-2">
                          {selectedCaseStudy.challenges.map((ch, idx) => (
                            <div key={idx} className="rounded-xl bg-white/70 p-4 border border-charcoal/5 dark:bg-card/70">
                              <p className="font-display text-sm font-bold text-charcoal mb-1">
                                {ch.title}
                              </p>
                              <p className="text-[11px] text-charcoal/75 leading-normal">
                                {ch.solution}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Generic Project Tech/Topics */}
                    {!isFeatured && (
                      <div>
                        <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-teal mb-2.5 font-bold">
                          Technologies &amp; Topics
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {selectedCaseStudy.tags.map((t) => (
                            <span
                              key={t}
                              className="rounded-md border bg-cream-tint/30 px-2 py-0.5 font-mono text-[10px] clip-tech-card-sm"
                              style={{ borderColor: `${selectedCaseStudy.accent}44`, color: "var(--charcoal)" }}
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Right Column: Device Mockup & Metrics */}
                  <div className={isFeatured ? "md:col-span-5 space-y-6 flex flex-col justify-between" : "md:col-span-4 space-y-6 flex flex-col justify-between"}>
                    {/* Video Mockup Frame - Featured Only */}
                    {isFeatured && (
                      <div className="flex items-center justify-center py-6 bg-cream-tint/30 rounded-2xl border border-charcoal/5 dark:bg-[#1c1a17]/40">
                        {selectedCaseStudy.deviceType === "laptop" ? (
                          <LaptopMockup videoUrl={selectedCaseStudy.videoUrl} fallbackImg={selectedCaseStudy.id === "gyansetu" ? "GYANSETU_LIVE" : selectedCaseStudy.id === "foodapp" ? "https://github.com/Rohitraj45592/React-food-project/raw/main/screenshots/screenshot1.png" : undefined} projectId={selectedCaseStudy.id} />
                        ) : (
                          <MobileMockup videoUrl={selectedCaseStudy.videoUrl} projectId={selectedCaseStudy.id} />
                        )}
                      </div>
                    )}
                    
                    {/* Impact / Stats */}
                    <div>
                      <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-terracotta mb-3 font-bold">
                        {isFeatured ? "Core Metrics & Impact" : "Repository Statistics"}
                      </h4>
                      <ul className="space-y-2">
                        {(selectedCaseStudy.longImpact || selectedCaseStudy.impact).map((imp, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs">
                            <span className="mt-1 flex h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                            <span>{imp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Case study footer links */}
                    <div className="pt-4 border-t border-charcoal/10 flex items-center justify-end gap-4">
                      {selectedCaseStudy.github && selectedCaseStudy.github !== "#" && (
                        <a
                          href={selectedCaseStudy.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-charcoal/70 hover:text-terracotta"
                        >
                          <Github className="h-4 w-4" /> Source Code
                        </a>
                      )}
                      {selectedCaseStudy.live && selectedCaseStudy.live !== "#" ? (
                        <a
                          href={selectedCaseStudy.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-full bg-terracotta px-4 py-2 text-xs font-mono uppercase tracking-wider text-cream shadow-sm hover:shadow-warm-lg"
                        >
                          <ExternalLink className="h-3.5 w-3.5" /> Launch App
                        </a>
                      ) : (
                        <span className="text-[10px] font-mono uppercase tracking-wider text-charcoal/30 select-none">
                          Internal Corporate Sandbox
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </>
            );
          })()}
        </DialogContent>
      </Dialog>
    </section>
  );
}

/* ---------- Achievements ---------- */

function Achievements() {
  const isMobile = useIsMobile();

  return (
    <section id="achievements" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Awards & Milestones"
          title="Recognition & Wins"
          story="Key milestones from hackathons, incubation programs, and academic achievements."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {ACHIEVEMENTS.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{
                opacity: 0,
                scale: isMobile ? 1 : 0.6,
                rotate: isMobile ? 0 : -8,
                y: isMobile ? 12 : 30
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                rotate: 0,
                y: 0
              }}
              viewport={{ once: true, margin: "-60px" }}
              transition={isMobile ? { duration: 0.4, delay: (i % 4) * 0.03 } : { type: "spring", stiffness: 160, damping: 14, delay: (i % 4) * 0.03 }}
              className="relative p-[1.5px] clip-tech-card-sm bg-charcoal/10 hover:bg-terracotta transition-all duration-300 shadow-warm"
            >
              <motion.div
                whileHover={{ rotateX: 4, rotateY: -4, translateY: -4 }}
                style={{ transformPerspective: 800 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative h-full overflow-hidden clip-tech-card-sm bg-white p-6 flex flex-col justify-between dark:bg-card"
              >
                {/* stamp numeral */}
                <span className="pointer-events-none absolute -right-1 -top-1 font-mono text-6xl font-bold italic text-terracotta/[0.06] select-none">
                  0{i + 1}
                </span>
                <div>
                  <div className="mb-4 grid h-10 w-10 place-items-center rounded-md bg-teal/10 text-teal clip-tech-card-sm transition-colors group-hover:bg-teal group-hover:text-cream">
                    {i === 0 ? <Trophy className="h-5 w-5" /> : i === 3 ? <Sparkles className="h-5 w-5" /> : <Award className="h-5 w-5" />}
                  </div>
                  <h3 className="font-display text-lg font-bold leading-snug text-charcoal">{a.title}</h3>
                </div>
                <p className="mt-4 text-xs text-charcoal/65 leading-relaxed">{a.detail}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Leadership ---------- */

function Leadership() {
  return (
    <section className="bg-cream-tint px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Leadership"
          title="Extracurricular Activities"
          story="Organizing technical events, leading project teams, and contributing to the developer community."
        />
        <div className="space-y-5">
          {LEADERSHIP.map((l, i) => (
            <Reveal key={l.title} x={i % 2 === 0 ? -30 : 30}>
              <div
                className={`flex items-start gap-4 rounded-2xl bg-white p-6 shadow-warm dark:bg-card ${i % 2 === 0 ? "md:ml-0 md:mr-16" : "md:ml-16 md:mr-0"}`}
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-cream-tint text-2xl font-mono dark:bg-muted font-bold text-terracotta">
                  {l.icon}
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-lg font-bold text-charcoal">{l.title}</h3>
                  <p className="mt-1 text-sm text-charcoal/70">{l.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section data-section="contact" id="contact" className="relative overflow-hidden px-6 py-24">
      <div
        aria-hidden
        className="animate-blob absolute -left-32 top-20 h-96 w-96 rounded-full opacity-50 blur-3xl"
        style={{ background: "radial-gradient(circle, #E8A87C 0%, transparent 70%)" }}
      />
      <div className="relative mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
        <Reveal x={-30}>
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.32em] text-terracotta">Contact</p>
            <h2 className="font-display text-4xl font-bold leading-tight text-charcoal md:text-5xl">
              Let's work <span className="italic text-gradient-warm">together</span>
            </h2>
            <p className="mt-3 max-w-md font-display text-base italic text-charcoal/65">
              The best collaborations start with a single, low-stakes message. This is yours.
            </p>
            <div className="mt-8 mb-6">
              <button
                onClick={openCalendly}
                className="inline-flex items-center gap-2.5 rounded-full bg-teal px-6 py-3 text-sm font-medium text-cream shadow-warm transition-transform hover:-translate-y-0.5 cursor-pointer"
              >
                Schedule Call
              </button>
            </div>

            <div className="space-y-4 text-sm">
              <a href="mailto:rohitraj2522003@gmail.com" className="group flex items-center gap-3 text-charcoal hover:text-terracotta transition-colors">
                <Mail className="h-4 w-4" />
                <span className="underline-offset-4 group-hover:underline">rohitraj2522003@gmail.com</span>
              </a>
              <a href="https://linkedin.com/in/rohit-upadhyay25" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-charcoal hover:text-terracotta transition-colors">
                <Linkedin className="h-4 w-4" />
                <span className="underline-offset-4 group-hover:underline">linkedin.com/in/rohit-upadhyay25</span>
              </a>
              <a href="https://github.com/Rohitraj45592" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-charcoal hover:text-terracotta transition-colors">
                <Github className="h-4 w-4" />
                <span className="underline-offset-4 group-hover:underline">github.com/Rohitraj45592</span>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-charcoal hover:text-terracotta transition-colors">
                <LeetCodeIcon className="h-4 w-4 text-charcoal group-hover:text-terracotta transition-colors" />
                <span className="underline-offset-4 group-hover:underline">#</span>
              </a>
             <a href="https://www.instagram.com/_.rohit_upadhyay._" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-charcoal hover:text-terracotta transition-colors">
                <Instagram className="h-4 w-4" />
                <span className="underline-offset-4 group-hover:underline">@_.rohit_upadhyay._</span>
              </a> 
            </div>
          </div>
        </Reveal>

        <Reveal x={30}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="space-y-6"
          >
            {(["Name", "Email", "Message"] as const).map((label) => (
              <div key={label}>
                <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.25em] text-charcoal/60">
                  {label}
                </label>
                {label === "Message" ? (
                  <textarea
                    rows={4}
                    required
                    className="w-full resize-none border-b-2 border-charcoal/15 bg-transparent py-2 text-sm text-charcoal outline-none transition-colors focus:border-terracotta"
                  />
                ) : (
                  <input
                    type={label === "Email" ? "email" : "text"}
                    required
                    className="w-full border-b-2 border-charcoal/15 bg-transparent py-2 text-sm text-charcoal outline-none transition-colors focus:border-terracotta"
                  />
                )}
              </div>
            ))}
            <Magnetic strength={0.45}>
              <button
                type="submit"
                disabled={sent}
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-terracotta px-7 py-3.5 text-sm font-medium text-cream shadow-warm transition-shadow hover:shadow-warm-lg disabled:opacity-90 cursor-pointer"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {sent ? (
                    <motion.span key="ok" initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -12, opacity: 0 }} className="inline-flex items-center gap-2">
                      Thanks - I'll be in touch
                    </motion.span>
                  ) : (
                    <motion.span key="send" initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -12, opacity: 0 }} className="inline-flex items-center gap-2">
                      Send Message
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </Magnetic>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */

function Footer() {
  return (
    <footer className="relative border-t border-charcoal/10 px-6 pb-10 pt-16">
      <div className="mx-auto max-w-6xl">
        <p className="font-display text-5xl font-bold leading-none text-charcoal md:text-7xl">
          Let's <span className="italic text-gradient-warm">build</span> something
        </p>
        <p className="mt-4 max-w-md text-sm text-charcoal/60">
          Open to software development or AI/ML internships, freelance, and collaborative projects.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <button
            onClick={openCalendly}
            className="inline-flex items-center gap-2 rounded-full bg-terracotta px-6 py-3 text-sm font-medium text-cream shadow-warm transition-transform hover:-translate-y-0.5 cursor-pointer"
          >
            Schedule a Meeting
          </button>
          <a
            href="mailto:rohitraj2522003@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border border-charcoal/20 px-6 py-3 text-sm font-medium text-charcoal transition-colors hover:border-terracotta hover:text-terracotta cursor-pointer dark:text-cream/70 dark:border-white/20 dark:hover:bg-white/5"
          >
            Email Me
          </a>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-charcoal/10 pt-6 text-xs text-charcoal/60">
          <p className="inline-flex items-center gap-1.5">
            Copyright 2026 Rohit Raj - Built with <Coffee className="h-3 w-3 text-terracotta" /> and curiosity
          </p>
          <p className="font-mono">v1.0 | portfolio</p>
        </div>
      </div>
    </footer>
  );
}

function BlueprintLayout({ theme }: { theme?: "light" | "dark" }) {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none">
      {/* Background blueprint grid pattern */}
      <div className="absolute inset-0 blueprint-grid opacity-50" />
      {/* Background dotted grid pattern */}
      <div className="absolute inset-0 tech-dot-grid opacity-30" />
      
      {/* Vertical layout lines */}
      <div className="absolute left-[5%] top-0 bottom-0 w-px bg-charcoal/5 hidden md:block" />
      <div className="absolute left-[15%] top-0 bottom-0 w-px bg-charcoal/5 hidden md:block" />
      <div className="absolute right-[15%] top-0 bottom-0 w-px bg-charcoal/5 hidden md:block" />
      <div className="absolute right-[5%] top-0 bottom-0 w-px bg-charcoal/5 hidden md:block" />
      
      {/* Horizontal divider coordinates */}
      <div className="absolute top-[32%] left-[5%] text-[8px] font-mono text-charcoal/20 hidden md:block tracking-widest">
        SYS · GRID · 22
      </div>
      <div className="absolute top-[68%] right-[5%] text-[8px] font-mono text-charcoal/20 hidden md:block tracking-widest text-right">
        SYS · GRID · 99
      </div>
    </div>
  );
}

/* ---------- Page ---------- */

function Portfolio() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("theme") as "light" | "dark") || "light";
    }
    return "light";
  });
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  return (
    <div className="relative min-h-screen bg-cream text-charcoal overflow-x-hidden transition-colors duration-300">
      <LoadingScreen onComplete={() => setLoadingComplete(true)} />
      <BlueprintLayout theme={theme} />
      <ScrollProgress />
      <Grain />
      <Spotlight />
      <OrganicCursor />
      <NowWidget />
      <ScrollToTop />
      <FloatingMusicPlayer loadingComplete={loadingComplete} />
      <Nav theme={theme} toggleTheme={toggleTheme} />
      <main className="relative z-10">
        <Hero />
        <Marquee items={["Open to Internships", "CGPA 8.63 · Top 15%", "Building GyanSetu AI", "IBM Certified · 2025", "AI · Full-stack · GenAI"]} />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Achievements />
        <Leadership />
        <AILab />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
