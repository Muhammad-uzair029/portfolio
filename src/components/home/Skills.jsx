import React, { useState, useEffect, useRef } from "react";

const skillData = [
  {
    category: "AI & LLM",
    icon: "fa-brain",
    color: "from-violet-600 to-purple-700",
    accent: "#8b5cf6",
    skills: [
      "LangChain", "LangGraph", "LangSmith", "Prompt Engineering",
      "RAG Systems", "Agentic AI", "Vector Databases", "OpenAI API",
      "Claude API", "Hugging Face",
    ],
  },
  {
    category: "Frontend",
    icon: "fa-desktop",
    color: "from-blue-600 to-cyan-600",
    accent: "#3b82f6",
    skills: [
      "React.js", "TypeScript", "Tailwind CSS", "Material-UI",
      "Canvas API", "WebSockets", "Angular", "Redux", "Next.js",
    ],
  },
  {
    category: "Backend",
    icon: "fa-server",
    color: "from-emerald-600 to-teal-600",
    accent: "#10b981",
    skills: [
      "Node.js", "Java Spring Boot", "NestJS", "Express", "Fastify",
      "GraphQL", "REST APIs", "Microservices", "WebSockets",
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: "fa-cloud",
    color: "from-orange-500 to-amber-600",
    accent: "#f59e0b",
    skills: [
      "AWS Lambda", "EC2", "RDS", "S3", "EventBridge",
      "SQS", "API Gateway", "Docker", "CI/CD", "GitHub Actions",
    ],
  },
  {
    category: "Databases",
    icon: "fa-database",
    color: "from-rose-600 to-pink-600",
    accent: "#f43f5e",
    skills: [
      "PostgreSQL", "MongoDB", "DynamoDB", "Redis",
      "MySQL", "Firebase", "Firestore",
    ],
  },
  {
    category: "Leadership",
    icon: "fa-users",
    color: "from-sky-600 to-indigo-600",
    accent: "#0ea5e9",
    skills: [
      "Team Leadership (6+ Engineers)", "Technical Architecture",
      "Code Review", "Technical Interviewing", "Sprint Planning",
      "Client Communication", "Agile / Scrum", "Process Improvement",
    ],
  },
];

const proficiencyBars = [
  { name: "AI & LLM Systems", value: 92, color: "#8b5cf6" },
  { name: "Frontend Development", value: 95, color: "#3b82f6" },
  { name: "Backend Engineering", value: 90, color: "#10b981" },
  { name: "Cloud & AWS", value: 85, color: "#f59e0b" },
  { name: "Team Leadership", value: 95, color: "#0ea5e9" },
  { name: "System Architecture", value: 88, color: "#f43f5e" },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [barsVisible, setBarsVisible] = useState(false);
  const sectionRef = useRef(null);
  const barsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );

    const barsObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setBarsVisible(true);
      },
      { threshold: 0.3 }
    );

    const reveals = sectionRef.current?.querySelectorAll(".reveal");
    reveals?.forEach((el) => observer.observe(el));
    if (barsRef.current) barsObserver.observe(barsRef.current);

    return () => {
      observer.disconnect();
      barsObserver.disconnect();
    };
  }, []);

  return (
    <section id="skills" className="py-24 relative" ref={sectionRef}>
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 80% 50%, rgba(139,92,246,0.3), transparent)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal text-center mb-16">
          <h2 className="section-heading">Technical Skills</h2>
          <p className="section-subheading">
            A comprehensive toolkit spanning AI, full-stack development, cloud infrastructure, and technical leadership
          </p>
        </div>

        {/* Category tabs */}
        <div className="reveal flex flex-wrap justify-center gap-2 mb-10">
          {skillData.map((cat, i) => (
            <button
              key={cat.category}
              onClick={() => setActiveTab(i)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 border ${
                activeTab === i
                  ? "border-blue-500/50 text-white"
                  : "border-slate-700 text-slate-400 hover:border-slate-500 hover:text-slate-200"
              }`}
              style={
                activeTab === i
                  ? { background: `${skillData[i].accent}18` }
                  : {}
              }
            >
              <i
                className={`fas ${cat.icon} text-xs`}
                style={{ color: activeTab === i ? cat.accent : undefined }}
              />
              {cat.category}
            </button>
          ))}
        </div>

        {/* Active category skills */}
        <div className="reveal card-glass p-8 mb-10">
          <div className="flex items-center gap-4 mb-6">
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${skillData[activeTab].color}`}
            >
              <i className={`fas ${skillData[activeTab].icon} text-white`} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{skillData[activeTab].category}</h3>
              <p className="text-slate-400 text-sm">{skillData[activeTab].skills.length} technologies</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {skillData[activeTab].skills.map((skill) => (
              <span
                key={skill}
                className="skill-tag"
                style={{
                  background: `${skillData[activeTab].accent}18`,
                  borderColor: `${skillData[activeTab].accent}35`,
                  color: skillData[activeTab].accent,
                  filter: "brightness(1.3)",
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* All skills grid */}
        <div className="reveal grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {skillData.map((cat) => (
            <div
              key={cat.category}
              className="card-glass p-5 hover:border-slate-600/50 transition-all duration-300 cursor-pointer"
              onClick={() => setActiveTab(skillData.indexOf(cat))}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center bg-gradient-to-br ${cat.color}`}>
                  <i className={`fas ${cat.icon} text-white text-sm`} />
                </div>
                <h4 className="text-white font-semibold text-sm">{cat.category}</h4>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.slice(0, 5).map((s) => (
                  <span
                    key={s}
                    className="text-xs px-2 py-0.5 rounded-full border"
                    style={{
                      background: `${cat.accent}12`,
                      borderColor: `${cat.accent}28`,
                      color: cat.accent,
                      filter: "brightness(1.4)",
                    }}
                  >
                    {s}
                  </span>
                ))}
                {cat.skills.length > 5 && (
                  <span className="text-xs px-2 py-0.5 rounded-full border border-slate-700 text-slate-500">
                    +{cat.skills.length - 5}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency bars */}
        <div className="reveal card-glass p-8" ref={barsRef}>
          <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
            <i className="fas fa-chart-bar text-blue-400" />
            Proficiency Overview
          </h3>
          <div className="space-y-5">
            {proficiencyBars.map((bar, i) => (
              <div key={bar.name}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-300 font-medium">{bar.name}</span>
                  <span className="font-bold" style={{ color: bar.color }}>{bar.value}%</span>
                </div>
                <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000"
                    style={{
                      width: barsVisible ? `${bar.value}%` : "0%",
                      background: `linear-gradient(90deg, ${bar.color}, ${bar.color}88)`,
                      transitionDelay: `${i * 120}ms`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
