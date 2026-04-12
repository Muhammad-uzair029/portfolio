import React, { useState, useEffect, useRef } from "react";

const projectData = [
  {
    name: "GovWorx Public Safety Training Platform",
    company: "SoftAims",
    role: "Java Full Stack Engineer",
    category: "Full Stack",
    description:
      "Architected the signoff engine for multiple portals and roles to process 911 events and officer reports. Built the entire training events and reports system, ensuring accessibility compliance. Optimized AWS EventBridge polling architecture, significantly reducing cloud infrastructure costs.",
    achievements: [
      "Signoff engine handling multi-portal workflows",
      "AWS EventBridge cost optimization",
      "100% accessibility standards compliance",
    ],
    tech: ["React TypeScript", "Java Spring Boot", "AWS EventBridge", "SQS", "PostgreSQL"],
    link: "https://govworx.ai/",
    color: "#3b82f6",
    icon: "fa-shield-alt",
  },
  {
    name: "ORYN Lead Generation Platform",
    company: "SoftAims",
    role: "Senior Software Engineer",
    category: "AI & Automation",
    description:
      "End-to-end ownership from requirement gathering to deployment. Enhanced web scraping using advanced Puppeteer techniques, boosting performance by 25%. Integrated LinkedIn and Twitter APIs to improve automation efficiency by 80%.",
    achievements: [
      "25% web scraping performance boost",
      "80% automation efficiency improvement",
      "Full project lifecycle ownership",
    ],
    tech: ["React TypeScript", "Node.js", "Puppeteer", "PostgreSQL", "AWS EC2/RDS/S3", "CI/CD"],
    link: "https://oryn.io/",
    color: "#8b5cf6",
    icon: "fa-robot",
  },
  {
    name: "Illuscriber Clothing Measurement Extension",
    company: "SoftAims",
    role: "Team Lead",
    category: "Full Stack",
    description:
      "Led architecture design and team through a complex PSD-to-Canvas conversion system. Implemented pixel-perfect canvas rendering achieving 100% design accuracy. Set up automated deployment pipelines and led code reviews.",
    achievements: [
      "100% pixel-perfect design accuracy",
      "Led team through complex canvas implementation",
      "Automated deployment pipelines",
    ],
    tech: ["React TypeScript", "Node.js", "Canvas API", "PostgreSQL", "AWS"],
    link: "https://illuscriber.com/",
    color: "#06b6d4",
    icon: "fa-paint-brush",
  },
  {
    name: "Score (NeverOffside) Football Platform",
    company: "Aurora Solutions",
    role: "Software Engineer",
    category: "Full Stack",
    description:
      "Developed new features for web and Android (Kotlin) apps. Redesigned the Android app UI from legacy to modern experience. Integrated Stripe payments, SMS notifications, and AWS SQS for real-time match updates.",
    achievements: [
      "Complete Android UI redesign",
      "Stripe & SMS payment integration",
      "Real-time updates via AWS SQS",
    ],
    tech: ["React.js", "Node.js", "GraphQL", "PostgreSQL", "Native Android (Kotlin)"],
    link: "https://neveroffside.com/",
    color: "#10b981",
    icon: "fa-futbol",
  },
  {
    name: "NameGlo E-commerce Platform",
    company: "PureLogics",
    role: "Team Lead",
    category: "Full Stack",
    description:
      "Led team of 4 developers for a global e-commerce platform. Integrated international shipment SDKs for worldwide order fulfillment. Implemented Shopify APIs and webhooks for seamless storefront integration.",
    achievements: [
      "Led team of 4 developers end-to-end",
      "International shipping SDK integration",
      "Shopify API & webhooks implementation",
    ],
    tech: ["React.js", "Node.js", "MongoDB", "Shopify APIs", "Shipment SDKs"],
    link: "https://glostudio.design/",
    color: "#f59e0b",
    icon: "fa-shopping-bag",
  },
  {
    name: "DFS Army Betting Platform",
    company: "Aurora Solutions",
    role: "Software Engineer",
    category: "Full Stack",
    description:
      "Led Angular frontend development and Excel-to-DynamoDB data migration using Python automation scripts. Delivered complete integration for a high-volume sports betting platform with optimized database performance.",
    achievements: [
      "Python automation for Excel-to-DynamoDB migration",
      "High-volume transaction optimization",
      "Complete frontend-backend integration",
    ],
    tech: ["Angular", "Node.js", "PostgreSQL", "Python", "AWS DynamoDB"],
    link: "https://dfsarmy.com/",
    color: "#f43f5e",
    icon: "fa-trophy",
  },
  {
    name: "Google Calendar Free Slots Scheduler",
    company: "Open Source",
    role: "Creator & Maintainer",
    category: "Open Source",
    description:
      "Published NPM package for finding free time slots in Google Calendar. Enables developers to programmatically discover available time windows for scheduling automation and meeting planners.",
    achievements: [
      "Published to NPM registry",
      "Google Calendar API integration",
      "Developer-friendly SDK design",
    ],
    tech: ["Node.js", "TypeScript", "Google Calendar API", "NPM"],
    link: "https://www.npmjs.com/package/google-calendar-free-slots",
    color: "#34d399",
    icon: "fa-calendar-alt",
  },
];

const categories = ["All", "Full Stack", "AI & Automation", "Open Source"];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);
  const sectionRef = useRef(null);

  const filtered = activeFilter === "All"
    ? projectData
    : projectData.filter((p) => p.category === activeFilter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    const reveals = sectionRef.current?.querySelectorAll(".reveal");
    reveals?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-24 relative" ref={sectionRef}>
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(59,130,246,0.2), transparent)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal text-center mb-16">
          <h2 className="section-heading">Featured Projects</h2>
          <p className="section-subheading">
            Real-world products built and shipped — from AI-powered platforms to full-stack solutions
          </p>
        </div>

        {/* Filter tabs */}
        <div className="reveal flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveFilter(cat); setVisibleCount(6); }}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200 border ${
                activeFilter === cat
                  ? "border-blue-500 text-white"
                  : "border-slate-700 text-slate-400 hover:border-slate-500 hover:text-slate-200"
              }`}
              style={activeFilter === cat ? { background: "rgba(59,130,246,0.15)" } : {}}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.slice(0, visibleCount).map((project) => (
            <div key={project.name} className="reveal project-card card-glass flex flex-col">
              {/* Card header */}
              <div
                className="p-6 rounded-t-2xl flex items-start justify-between"
                style={{ background: `linear-gradient(135deg, ${project.color}15, ${project.color}08)` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: `${project.color}20`, border: `1px solid ${project.color}40` }}
                >
                  <i className={`fas ${project.icon} text-lg`} style={{ color: project.color }} />
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg transition-colors hover:bg-white/10 text-slate-400 hover:text-white"
                  aria-label={`Visit ${project.name}`}
                >
                  <i className="fas fa-external-link-alt text-sm" />
                </a>
              </div>

              {/* Card body */}
              <div className="p-6 flex flex-col flex-1">
                <div className="mb-3">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="text-xs px-2 py-0.5 rounded-full font-medium"
                      style={{ background: `${project.color}15`, color: project.color }}
                    >
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-white font-bold text-base leading-snug mb-1">{project.name}</h3>
                  <p className="text-xs text-slate-500">
                    {project.company} · {project.role}
                  </p>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Achievements */}
                <div className="mb-4">
                  {project.achievements.map((a, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300 mb-1">
                      <i className="fas fa-arrow-right text-xs mt-0.5 shrink-0" style={{ color: project.color }} />
                      {a}
                    </div>
                  ))}
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-0.5 rounded-md border"
                      style={{
                        background: `${project.color}10`,
                        borderColor: `${project.color}25`,
                        color: project.color,
                        filter: "brightness(1.4)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Visit link */}
              <div className="px-6 pb-5">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-medium transition-all duration-200 border"
                  style={{
                    borderColor: `${project.color}40`,
                    color: project.color,
                    background: `${project.color}10`,
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = `${project.color}20`; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = `${project.color}10`; }}
                >
                  Visit Project
                  <i className="fas fa-arrow-right text-xs" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Show more */}
        {visibleCount < filtered.length && (
          <div className="text-center mt-10">
            <button
              onClick={() => setVisibleCount((v) => v + 3)}
              className="btn-secondary px-8 py-3"
            >
              <i className="fas fa-plus text-xs" />
              Load More Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
