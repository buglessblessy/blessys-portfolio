export const skills = [
  { 
    name: "React.js", 
    level: 95, 
    category: "Frontend",
    description: "React 19, Hooks, Context API, Redux Toolkit" 
  },
  { 
    name: "JavaScript", 
    level: 90, 
    category: "Languages",
    description: "ES6+, Async/Await, DOM Manipulation" 
  },
  { 
    name: "Tailwind CSS", 
    level: 95, 
    category: "Styling",
    description: "Utility-first CSS, Responsive Design, Framer Motion" 
  },
  { 
    name: "HTML5/CSS3", 
    level: 98, 
    category: "Frontend",
    description: "Semantic HTML, Flexbox, Grid, Glassmorphism" 
  },
  { 
    name: "Git/GitHub", 
    level: 85, 
    category: "Tools",
    description: "Version Control, Agile/Scrum, Jira" 
  },
  { 
    name: "Jest/RTL", 
    level: 80, 
    category: "Testing",
    description: "Unit Testing, Integration Testing, TDD" 
  }
];

export const projects = [
  {
    id: 1,
    title: "AI Chat Stream",
    desc: "A high-performance chat interface featuring real-time message streaming using the Gemini API. Implemented AbortController for efficient request cancellation and memory management.",
    tech: ["React", "Gemini API", "Framer Motion", "Lucide Icons"],
    url: "https://ai-chat-stream.netlify.app/",
    github: "https://github.com/buglessblessy" 
  },
  {
    id: 2,
    title: "AI Resume Builder",
    desc: "A production-grade platform leveraging AI for content optimization. Features multi-step form state management and real-time PDF preview generation.",
    tech: ["React 19", "TypeScript", "Tailwind CSS", "REST API"],
    url: "https://blessys-ai-resume-builder.netlify.app/",
    github: "https://github.com/buglessblessy"
  },
  {
    id: 3,
    title: "Movie Search Portal",
    desc: "A dynamic media discovery hub using the OMDb API. Optimized with search debouncing and a responsive Netflix-style grid layout to handle high-frequency API calls.",
    tech: ["React", "Axios", "Bootstrap", "Debouncing"],
    url: "https://blessys-movie-search-portal.netlify.app/",
    github: "https://github.com/buglessblessy"
  },
  {
    id: 4,
    title: "GitHub Finder",
    desc: "A developer tool designed to fetch and visualize GitHub user data. Implemented clean error handling and skeleton loaders for an enhanced user experience during data fetching.",
    tech: ["React", "GitHub API", "Tailwind CSS", "Skeleton Loaders"],
    url: "https://blessys-github-finder.netlify.app/",
    github: "https://github.com/buglessblessy"
  },
  {
    id: 5,
    title: "The Guessing Game",
    desc: "An interactive logic game focused on JavaScript DOM manipulation and state logic. Highlights performance-oriented CSS animations and game-loop mechanics.",
    tech: ["JavaScript (ES6+)", "HTML5", "CSS3 Animations"],
    url: "https://blessys-guess-game.netlify.app/",
    github: "https://github.com/buglessblessy"
  }
];

export const experience = [
  {
    role: "Freelance Frontend Developer",
    company: "Remote",
    duration: "Sep 2025 - Present",
    details: "Developing responsive SPAs using React 19 and Vite. Maintaining 90%+ test coverage with Jest and implementing high-fidelity glassmorphic designs."
  },
  {
    role: "React Trainee",
    company: "Sutherland, Chennai",
    duration: "Jun 2024 - Aug 2025",
    details: "Built reusable UI components in an Agile/Scrum environment. Optimized application performance and resolved cross-browser compatibility issues."
  }
];

export const education = {
  degree: "MCA (Master of Computer Applications)",
  college: "Bharathiar University, Coimbatore",
  score: "8.1 CGPA",
  location: "Tamil Nadu, India"
};