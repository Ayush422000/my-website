import { RoughHighlight } from "./RoughHighlight";
import { ArrowUpRight, Chrome, BookOpen } from "lucide-react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AI-Powered Gmail Assistant",

    description:
      "Built Smart AI Email Reply Generator integrating Gemini API, boosting email productivity by ~60% faster reply drafting.",
    highlights: [
      "Developed frontend (React + Vite + Material UI) and backend (Spring Boot, REST APIs)",
      "Designed a Chrome Extension (Manifest V3) integrated directly into Gmail",
      "Implemented secure API authentication and tone customization",
      "Achieved ~30% faster API response times compared to baseline implementations",
    ],
    tech: [
      "Java",
      "Spring Boot",
      "React",
      "Vite",
      "Material UI",
      "Chrome Extension",
      "Gemini API",
    ],
    icon: Chrome,
    color: "purple" as const,
    github: "https://github.com/Ayush422000/ai-email-reply",
    // live: "https://github.com/Ayush422000/ai-email-reply",
  },
  {
    title: "Chat-Room",
    image: "/chat-room.png",
    description:
      "Built a chat system enabling instant multi-user communication with zero-lag message delivery and automatic connection management.",
    highlights: [
      "Implemented message broker architecture with topic-based pub-sub pattern for scalable real-time broadcasting across chat rooms",
      "Designed responsive UI with Bootstrap featuring live message rendering, connection state indicators, and sender identification",
      "Created dynamic UI using Thymeleaf, Bootstrap and JavaScript ES6 with real-time message rendering and connection state management",
    ],
    tech: [
      "Java",
      "Spring Boot",
      "WebSocket",
      "STOMP",
      "Thymeleaf",
      "JavaScript ES6",
      "Bootstrap",
      "SockJS",
      "Maven",
    ],
    icon: BookOpen,
    color: "green" as const,

    github: "https://github.com/Ayush422000/simple-chat-room",
    // live: "",
  },
  {
    title: "Book Finder",
    description:
      "Built a book finder web app with React 18 and Open Library API, supporting multi-type search (title, author, subject, publisher).",
    highlights: [
      "Designed a modern, responsive UI with animations, hover effects and mobile-first layouts",
      "Implemented favorites, search history and a 5-star review system with persistent storage",
      "Kept the UI clean with modern card layouts and hover animations",
    ],
    tech: [
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Open Library API",
    ],
    icon: BookOpen,
    color: "blue" as const,

    github: "https://github.com/Ayush422000/book-finder",
    live: "https://book-finder-puce-three.vercel.app/",
  },
];

export const Projects = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            Some of the projects I've worked on:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-all duration-300 opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.2 + index * 0.15}s` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-muted">
                  <project.icon size={24} className="text-foreground" />
                </div>

                <div className="flex-1 flex items-center justify-between">
                  {/* Project Title */}
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                    <RoughHighlight
                      color={project.color}
                      type="underline"
                      delay={500 + index * 200}
                    >
                      {project.title}
                    </RoughHighlight>
                    <ArrowUpRight
                      size={18}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </h3>

                  {/* GitHub + Live buttons */}
                  <div className="flex items-center gap-3 ml-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-muted hover:bg-primary/10 transition-colors"
                      >
                        <Github size={18} className="text-foreground" />
                      </a>
                    )}

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-muted hover:bg-primary/10 transition-colors"
                      >
                        <ExternalLink size={18} className="text-foreground" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-4">
                {project.description}
              </p>

              <ul className="list-disc list-outside ml-5 space-y-2 mb-6">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="text-sm text-muted-foreground">
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <img
          src={projects.image}
          alt={projects.title}
          className="w-full mt-6 rounded-lg object-cover shadow-sm"
        />
      </div>
    </section>
  );
};
