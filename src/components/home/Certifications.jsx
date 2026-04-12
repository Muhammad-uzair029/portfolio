import React, { useEffect, useRef } from "react";

const certifications = [
  {
    title: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services",
    date: "2025",
    credentialUrl: "https://www.credly.com/badges/6e18420f-a7be-40c8-adee-7a90ff497a54",
    icon: "fa-aws",
    iconColor: "#FF9900",
    iconBg: "linear-gradient(135deg, #FF9900, #FF6600)",
    description: "Validates expertise in AI/ML concepts, AWS AI services, and responsible AI practices.",
    badgeType: "Certification",
    badgeColor: "#FF9900",
  },
  {
    title: "Claude Code in Action",
    issuer: "Anthropic",
    date: "2025",
    credentialUrl: null,
    icon: "fa-code",
    iconColor: "#CC785C",
    iconBg: "linear-gradient(135deg, #CC785C, #A0522D)",
    description: "Advanced training on leveraging Claude Code for AI-assisted software development workflows.",
    badgeType: "Course",
    badgeColor: "#CC785C",
  },
  {
    title: "Introduction to Subagents",
    issuer: "Anthropic",
    date: "2025",
    credentialUrl: null,
    icon: "fa-robot",
    iconColor: "#7C3AED",
    iconBg: "linear-gradient(135deg, #7C3AED, #5B21B6)",
    description: "Deep dive into agentic AI systems, multi-agent orchestration, and autonomous AI workflows.",
    badgeType: "Course",
    badgeColor: "#7C3AED",
  },
];

const Certifications = () => {
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
    <section id="certifications" className="py-24 relative" ref={sectionRef}>
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 70% 50%, rgba(139,92,246,0.3), transparent)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal text-center mb-16">
          <h2 className="section-heading">Certifications & Courses</h2>
          <p className="section-subheading">
            Staying sharp at the cutting edge of AI and cloud technologies
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert) => (
            <div key={cert.title} className="reveal">
              {cert.credentialUrl ? (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-badge flex flex-col p-6 rounded-2xl h-full block"
                >
                  <CertCard cert={cert} />
                </a>
              ) : (
                <div className="cert-badge flex flex-col p-6 rounded-2xl h-full">
                  <CertCard cert={cert} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* AI Expertise callout */}
        <div className="reveal mt-16 card-glass p-8 max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #3b82f6, #8b5cf6)" }}
            >
              <i className="fas fa-brain text-white text-xl" />
            </div>
            <h3 className="text-2xl font-bold text-white">AI-First Engineering</h3>
          </div>
          <p className="text-slate-400 max-w-2xl mx-auto text-base leading-relaxed">
            Combining deep technical expertise with cutting-edge AI knowledge. From designing{" "}
            <span className="text-violet-400">agentic AI systems</span> with LangGraph to implementing{" "}
            <span className="text-blue-400">RAG pipelines</span> and deploying on{" "}
            <span className="text-orange-400">AWS</span> — I bring the full AI stack to production.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {["LangChain", "LangGraph", "LangSmith", "RAG", "Agentic AI", "AWS AI Services", "Prompt Engineering"].map((tag) => (
              <span key={tag} className="skill-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CertCard = ({ cert }) => (
  <>
    <div className="flex items-start justify-between mb-5">
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center"
        style={{ background: cert.iconBg }}
      >
        <i className={`fas ${cert.icon} text-white text-2xl`} />
      </div>
      <div className="flex flex-col items-end gap-1">
        <span
          className="text-xs px-2 py-0.5 rounded-full font-semibold"
          style={{ background: `${cert.badgeColor}20`, color: cert.badgeColor }}
        >
          {cert.badgeType}
        </span>
        <span className="text-xs text-slate-500">{cert.date}</span>
      </div>
    </div>

    <h3 className="text-white font-bold text-base mb-1">{cert.title}</h3>
    <p className="text-sm font-medium mb-3" style={{ color: cert.iconColor }}>
      {cert.issuer}
    </p>
    <p className="text-slate-400 text-sm leading-relaxed flex-1">{cert.description}</p>

    {cert.credentialUrl && (
      <div className="flex items-center gap-1 mt-4 text-xs text-slate-500">
        <i className="fas fa-check-circle text-green-400" />
        <span>Verified Credential · View on Credly</span>
        <i className="fas fa-external-link-alt ml-auto" />
      </div>
    )}
  </>
);

export default Certifications;
