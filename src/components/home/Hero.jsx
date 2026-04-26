import React, { useState, useEffect } from "react";

const roles = [
  "Senior Full Stack Developer",
  "Technical Team Lead",
  "AI & LLM Engineer",
  "AWS Certified AI Practitioner",
  "Software Architect",
];

const HeroParticle = ({ style }) => (
  <div className="particle" style={style} />
);

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [particles] = useState(() =>
    Array.from({ length: 40 }, (_, i) => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 4}s`,
      animationDuration: `${3 + Math.random() * 4}s`,
    }))
  );

  // Typewriter effect
  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg"
    >
      {/* Floating orbs */}
      <div className="orb orb-blue" style={{ width: 600, height: 600, top: "-15%", left: "-10%" }} />
      <div className="orb orb-purple" style={{ width: 500, height: 500, bottom: "-10%", right: "-5%" }} />
      <div className="orb orb-cyan" style={{ width: 400, height: 400, top: "40%", left: "60%" }} />

      {/* Particles */}
      <div className="particles">
        {particles.map((p, i) => (
          <HeroParticle key={i} style={p} />
        ))}
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Name */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white mb-4 leading-tight tracking-tight">
          Muhammad{" "}
          <span className="gradient-text block sm:inline">Uzair</span>
        </h1>

        {/* Typewriter */}
        <div className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-300 mb-6 h-10">
          <span className="typing-cursor">{displayed}</span>
        </div>

        {/* Tagline */}
        <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Architecting intelligent systems with{" "}
          <span className="text-blue-400 font-semibold">AI & LLM technologies</span>,
          leading engineering teams, and building scalable full-stack solutions.
          Based in{" "}
          <span className="text-violet-400">Lahore, Pakistan</span>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <a
            href="https://docs.google.com/document/d/10jziF7Qbd_P1SlF8JJDSCX3u6hbQyzb70Kfwi7mhu7o/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm sm:text-base !px-8 !py-3.5"
          >
            <i className="fas fa-file-alt"></i>
            View Resume
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-secondary text-sm sm:text-base !px-8 !py-3.5"
          >
            <i className="fas fa-envelope"></i>
            Contact Me
          </a>
          <a
            href="https://github.com/Muhammad-uzair029"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-sm sm:text-base !px-8 !py-3.5"
          >
            <i className="fab fa-github"></i>
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-uzair-b20452168/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-sm sm:text-base !px-8 !py-3.5"
          >
            <i className="fab fa-linkedin"></i>
            LinkedIn
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {[
            { label: "Years Experience", value: "5+", icon: "fa-briefcase" },
            { label: "Projects Shipped", value: "15+", icon: "fa-rocket" },
            { label: "Engineers Led", value: "6+", icon: "fa-users" },
            { label: "AWS Certified", value: "2025", icon: "fa-aws" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="card-glass p-4 text-center glow-on-hover transition-all duration-300"
            >
              <i className={`fas ${stat.icon} text-blue-400 text-xl mb-2 block`} />
              <div className="text-2xl font-black text-white">{stat.value}</div>
              <div className="text-xs text-slate-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 text-xs">
        <span>Scroll down</span>
        <div className="w-5 h-8 rounded-full border border-slate-600 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-blue-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
