import React, { useEffect, useRef } from "react";

const experienceData = [
  {
    role: "Technical Team Lead",
    company: "SoftAims",
    companyUrl: "https://thesoftaims.com/",
    period: "Oct 2023 – Present",
    type: "Full-time",
    badge: "Current",
    badgeColor: "#10b981",
    color: "#3b82f6",
    highlights: [
      "Lead cross-functional team of 6+ engineers across multiple high-impact products",
      "Improved development processes by 60% through AI tool integration and awareness sessions",
      "Architect scalable cloud solutions on AWS (Lambda, EC2, RDS, EventBridge, SQS)",
      "Drive technical interviews, sprint planning, project demos, and kick-off meetings",
      "Delivered GovWorx, ORYN, and Illuscriber from planning to production",
    ],
    tech: ["React TypeScript", "Java Spring Boot", "Node.js", "AWS", "AI/LLM"],
  },
  {
    role: "Software Engineer",
    company: "PureLogics",
    companyUrl: "https://purelogics.com/",
    period: "Jun 2023 – Oct 2023",
    type: "Full-time",
    badge: null,
    color: "#8b5cf6",
    highlights: [
      "Led a dynamic team of 4 developers focused on development and operational excellence",
      "Implemented AWS Lambda functions for back-end processes, enhancing system scalability",
      "Used AWS Elastic Load Balancing to distribute traffic during peak loads",
      "Managed client communication from planning through feature delivery",
      "Delivered NameGlo e-commerce platform with international shipping SDK integration",
    ],
    tech: ["React.js", "Node.js", "MongoDB", "AWS Lambda", "Shopify APIs"],
  },
  {
    role: "Software Engineer",
    company: "Aurora Solutions",
    companyUrl: "https://www.aurorasolutions.io/",
    period: "Sep 2021 – May 2023",
    type: "Full-time",
    badge: null,
    color: "#06b6d4",
    highlights: [
      "Served as full-stack engineer and mobile developer on four fast-paced projects",
      "Developed serverless backend services using AWS Lambda integrated via API Gateway",
      "Redesigned Android application from legacy UI to modern user experience",
      "Integrated Stripe payments, SMS notifications, and AWS SQS for real-time updates",
      "Collaborated with cross-functional teams on Score (NeverOffside) and DFS Army platforms",
    ],
    tech: ["React.js", "Node.js", "Angular", "GraphQL", "Native Android (Kotlin)", "AWS"],
  },
  {
    role: "Flutter Developer",
    company: "MGS Apps Technology",
    companyUrl: null,
    period: "Jan 2021 – Jun 2021",
    type: "Full-time",
    badge: null,
    color: "#f59e0b",
    highlights: [
      "Developed Islamic mobile apps using Flutter framework",
      "Managed Firebase authentication and Firestore database operations",
      "Resolved app crashes and optimized performance for Android devices",
      "Integrated third-party APIs and handled comprehensive app testing",
    ],
    tech: ["Flutter", "Firebase", "Firestore", "Dart"],
  },
];

const Experience = () => {
  const sectionRef = useRef(null);

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
    <section id="experience" className="py-24 relative" ref={sectionRef}>
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 20% 50%, rgba(59,130,246,0.3), transparent)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal text-center mb-16">
          <h2 className="section-heading">Work Experience</h2>
          <p className="section-subheading">
            5+ years of progressive experience delivering high-impact software solutions
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px hidden sm:block"
            style={{
              background: "linear-gradient(to bottom, #3b82f6, #8b5cf6, transparent)",
              transform: "translateX(-50%)",
            }}
          />

          <div className="space-y-10">
            {experienceData.map((exp, i) => (
              <div
                key={exp.company}
                className={`reveal relative flex flex-col md:flex-row gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div
                  className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-current items-center justify-center z-10 top-8"
                  style={{ borderColor: exp.color, background: "#020817" }}
                >
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: exp.color }} />
                </div>

                {/* Card */}
                <div className={`md:w-1/2 ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="card-glass p-6 project-card">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                          {exp.badge && (
                            <span
                              className="text-xs px-2 py-0.5 rounded-full font-semibold"
                              style={{ background: `${exp.badgeColor}20`, color: exp.badgeColor }}
                            >
                              {exp.badge}
                            </span>
                          )}
                        </div>
                        {exp.companyUrl ? (
                          <a
                            href={exp.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold hover:underline"
                            style={{ color: exp.color }}
                          >
                            {exp.company} <i className="fas fa-external-link-alt text-xs" />
                          </a>
                        ) : (
                          <span className="font-semibold" style={{ color: exp.color }}>
                            {exp.company}
                          </span>
                        )}
                      </div>
                      <div className="text-right shrink-0">
                        <span className="text-slate-400 text-xs">{exp.period}</span>
                        <br />
                        <span className="text-xs text-slate-500">{exp.type}</span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-2 mb-4">
                      {exp.highlights.map((h, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-slate-300">
                          <i
                            className="fas fa-check-circle text-xs mt-0.5 shrink-0"
                            style={{ color: exp.color }}
                          />
                          {h}
                        </li>
                      ))}
                    </ul>

                    {/* Tech */}
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2 py-0.5 rounded-full border"
                          style={{
                            background: `${exp.color}12`,
                            borderColor: `${exp.color}30`,
                            color: exp.color,
                            filter: "brightness(1.3)",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
