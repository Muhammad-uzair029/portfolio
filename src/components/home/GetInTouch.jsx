import React, { useState, useEffect, useRef } from "react";

const contactInfo = [
  {
    icon: "fa-envelope",
    label: "Email",
    value: "muhammaduzairse@gmail.com",
    href: "mailto:muhammaduzairse@gmail.com",
    color: "#3b82f6",
  },
  {
    icon: "fa-phone",
    label: "Phone",
    value: "+92 305 563-6382",
    href: "tel:+923055636382",
    color: "#10b981",
  },
  {
    icon: "fa-map-marker-alt",
    label: "Location",
    value: "Lahore, Pakistan",
    href: null,
    color: "#8b5cf6",
  },
  {
    icon: "fa-briefcase",
    label: "Availability",
    value: "Open to Opportunities",
    href: null,
    color: "#f59e0b",
  },
];

const socials = [
  {
    icon: "fa-linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/muhammad-uzair-b20452168/",
    color: "#0077b5",
  },
  {
    icon: "fa-github",
    label: "GitHub",
    href: "https://github.com/Muhammad-uzair029",
    color: "#e2e8f0",
  },
];

const GetInTouch = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);
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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus({ type: "error", msg: "Please fill in all required fields." });
      return;
    }
    setSending(true);
    // Open mailto as fallback
    const mailto = `mailto:muhammaduzairse@gmail.com?subject=${encodeURIComponent(form.subject || "Portfolio Contact")}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.open(mailto, "_blank");
    setTimeout(() => {
      setSending(false);
      setStatus({ type: "success", msg: "Message prepared! Your email client should open." });
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 800);
  };

  return (
    <section id="contact" className="py-24 relative" ref={sectionRef}>
      <div
        className="absolute inset-0 opacity-15"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(59,130,246,0.2), transparent)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal text-center mb-16">
          <h2 className="section-heading">Get In Touch</h2>
          <p className="section-subheading">
            Interested in working together? I'm always open to discussing new opportunities, projects, and collaborations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Info */}
          <div className="reveal space-y-6">
            <div className="card-glass p-8">
              <h3 className="text-xl font-bold text-white mb-2">Let's connect</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                I'm currently exploring senior engineering opportunities with international
                technology companies. Whether it's a full-time role, freelance project,
                or technical collaboration — I'd love to hear from you.
              </p>

              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: `${item.color}18` }}
                    >
                      <i className={`fas ${item.icon} text-sm`} style={{ color: item.color }} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-slate-200 font-medium hover:text-white transition text-sm"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-slate-200 font-medium text-sm">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Socials */}
            <div className="card-glass p-6">
              <h4 className="text-white font-semibold mb-4">Social Profiles</h4>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 flex-1 p-3 rounded-xl border border-slate-700 hover:border-slate-500 transition-all duration-200 hover:bg-white/5"
                  >
                    <i className={`fab ${s.icon} text-lg`} style={{ color: s.color }} />
                    <span className="text-slate-300 text-sm font-medium">{s.label}</span>
                    <i className="fas fa-external-link-alt text-xs text-slate-600 ml-auto" />
                  </a>
                ))}
              </div>
            </div>

            {/* AWS Badge mini */}
            <a
              href="https://www.credly.com/badges/6e18420f-a7be-40c8-adee-7a90ff497a54"
              target="_blank"
              rel="noopener noreferrer"
              className="cert-badge flex items-center gap-4 p-5 rounded-2xl block"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "linear-gradient(135deg, #FF9900, #FF6600)" }}
              >
                <i className="fab fa-aws text-white text-xl" />
              </div>
              <div>
                <p className="text-xs text-orange-400 font-semibold">AWS CERTIFIED · 2025</p>
                <p className="text-white font-bold text-sm">AI Practitioner</p>
              </div>
              <i className="fas fa-external-link-alt text-slate-500 text-xs ml-auto" />
            </a>
          </div>

          {/* Right: Form */}
          <div className="reveal">
            <div className="card-glass p-8">
              <h3 className="text-xl font-bold text-white mb-6">Send a message</h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-slate-400 mb-2">
                      Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="input-glow w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-slate-200 placeholder-slate-500 text-sm transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-400 mb-2">
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="input-glow w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-slate-200 placeholder-slate-500 text-sm transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-slate-400 mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className="input-glow w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-slate-200 placeholder-slate-500 text-sm transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm text-slate-400 mb-2">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    className="input-glow w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-slate-200 placeholder-slate-500 text-sm transition-all resize-none"
                  />
                </div>

                {status && (
                  <div
                    className={`flex items-center gap-2 p-3 rounded-xl text-sm ${
                      status.type === "success"
                        ? "bg-green-500/15 border border-green-500/30 text-green-400"
                        : "bg-red-500/15 border border-red-500/30 text-red-400"
                    }`}
                  >
                    <i className={`fas ${status.type === "success" ? "fa-check-circle" : "fa-exclamation-circle"}`} />
                    {status.msg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="btn-primary w-full justify-center py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {sending ? (
                    <>
                      <i className="fas fa-spinner fa-spin text-xs" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane text-xs" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
