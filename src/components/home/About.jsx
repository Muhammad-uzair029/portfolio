import React, { useEffect, useRef } from "react";

const highlights = [
  { icon: "fa-brain", label: "AI & LLM Expert", desc: "LangChain, LangGraph, RAG, Agentic AI Systems" },
  { icon: "fa-layer-group", label: "Full Stack", desc: "React, Node.js, Java Spring Boot, TypeScript" },
  { icon: "fa-cloud", label: "AWS Certified", desc: "Lambda, EC2, RDS, S3, EventBridge, SQS" },
  { icon: "fa-users", label: "Team Lead", desc: "Led 6+ engineers across multiple projects" },
];

const achievements = [
  { value: "60%", label: "Efficiency boost via AI integration" },
  { value: "25%", label: "Web scraping performance increase" },
  { value: "80%", label: "Automation efficiency improvement" },
  { value: "100%", label: "Design accuracy on canvas projects" },
];

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const reveals = sectionRef.current?.querySelectorAll(".reveal");
    reveals?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 relative" ref={sectionRef}>
      {/* Subtle background accent */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(59,130,246,0.15), transparent)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="reveal text-center mb-16">
          <h2 className="section-heading">About Me</h2>
          <p className="section-subheading">
            Passionate engineer with a focus on building intelligent, scalable systems
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Text */}
          <div className="reveal space-y-6">
            <div className="card-glass p-8">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #3b82f6, #8b5cf6)" }}
                >
                  <i className="fas fa-user text-white text-lg" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Muhammad Uzair</h3>
                  <p className="text-blue-400 text-sm">Senior Full Stack Developer & Technical Team Lead</p>
                </div>
              </div>

              <p className="text-slate-300 leading-relaxed mb-4">
                With <span className="text-white font-semibold">5+ years</span> of progressive experience,
                I specialize in architecting scalable cloud solutions and building AI-powered applications.
                Currently serving as a <span className="text-blue-400 font-semibold">Technical Team Lead at SoftAims</span>,
                where I lead cross-functional engineering teams and drive technical strategy.
              </p>

              <p className="text-slate-300 leading-relaxed mb-4">
                My expertise spans the full technology stack — from intelligent AI systems using{" "}
                <span className="text-violet-400">LangChain, LangGraph, and RAG pipelines</span> to
                robust backends with <span className="text-blue-400">Java Spring Boot and Node.js</span>,
                and modern frontends with <span className="text-cyan-400">React & TypeScript</span>.
              </p>

              <p className="text-slate-300 leading-relaxed">
                As an <span className="text-white font-semibold">AWS Certified AI Practitioner (2025)</span>,
                I architect cloud-native solutions on AWS that are reliable, cost-efficient, and production-ready.
                I'm passionate about leveraging AI to solve real-world problems at scale.
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="btn-primary text-sm"
                >
                  <i className="fas fa-envelope text-xs" />
                  Get In Touch
                </a>
                <a
                  href="https://docs.google.com/document/d/10jziF7Qbd_P1SlF8JJDSCX3u6hbQyzb70Kfwi7mhu7o/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-sm"
                >
                  <i className="fas fa-download text-xs" />
                  Download CV
                </a>
              </div>
            </div>

            {/* Location & Contact quick info */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "fa-map-marker-alt", label: "Location", value: "Lahore, Pakistan" },
                { icon: "fa-envelope", label: "Email", value: "muhammaduzairse@gmail.com" },
                { icon: "fa-phone", label: "Phone", value: "+92 305 563-6382" },
                { icon: "fa-briefcase", label: "Status", value: "Open to Work" },
              ].map((item) => (
                <div key={item.label} className="card-glass p-4 flex items-center gap-3">
                  <i className={`fas ${item.icon} text-blue-400 text-sm w-4`} />
                  <div>
                    <p className="text-xs text-slate-500">{item.label}</p>
                    <p className="text-sm text-slate-200 font-medium truncate">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Highlights & Achievements */}
          <div className="space-y-6">
            {/* Highlights */}
            <div className="reveal grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className="card-glass p-5 glow-on-hover transition-all duration-300 cursor-default"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                    style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.2), rgba(139,92,246,0.2))" }}
                  >
                    <i className={`fas ${h.icon} text-blue-400`} />
                  </div>
                  <h4 className="text-white font-semibold mb-1">{h.label}</h4>
                  <p className="text-slate-400 text-xs">{h.desc}</p>
                </div>
              ))}
            </div>

            {/* Key Achievements */}
            <div className="reveal card-glass p-6">
              <h4 className="text-white font-bold mb-5 flex items-center gap-2">
                <i className="fas fa-chart-line text-green-400" />
                Key Achievements
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((a) => (
                  <div key={a.label} className="text-center p-4 rounded-xl bg-white/5">
                    <div className="text-3xl font-black gradient-text mb-1">{a.value}</div>
                    <div className="text-xs text-slate-400">{a.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* AWS Badge */}
            <div className="reveal">
              <a
                href="https://www.credly.com/badges/6e18420f-a7be-40c8-adee-7a90ff497a54"
                target="_blank"
                rel="noopener noreferrer"
                className="cert-badge flex items-center gap-4 p-5 rounded-2xl block"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "linear-gradient(135deg, #FF9900, #FF6600)" }}
                >
                  <i className="fab fa-aws text-white text-2xl" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-orange-400 font-semibold mb-0.5">AWS CERTIFIED</p>
                  <p className="text-white font-bold">AI Practitioner</p>
                  <p className="text-slate-400 text-xs mt-0.5">Issued 2025 · Verify on Credly</p>
                </div>
                <i className="fas fa-external-link-alt text-slate-500 text-xs" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
