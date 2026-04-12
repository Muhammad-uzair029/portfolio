import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="relative border-t"
      style={{
        borderColor: "rgba(59,130,246,0.1)",
        background: "linear-gradient(to top, #020817, #0a0f1e)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-bold text-sm"
                style={{ background: "linear-gradient(135deg, #3b82f6, #8b5cf6)" }}
              >
                MU
              </div>
              <span className="text-white font-bold text-lg">Muhammad Uzair</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Senior Full Stack Developer & Technical Team Lead specializing in AI-powered solutions and scalable cloud architectures.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Quick Links</h4>
            <div className="space-y-2">
              {[
                { label: "About", id: "about" },
                { label: "Skills", id: "skills" },
                { label: "Experience", id: "experience" },
                { label: "Projects", id: "projects" },
                { label: "Contact", id: "contact" },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="block text-slate-400 hover:text-white text-sm transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Contact</h4>
            <div className="space-y-3">
              <a
                href="mailto:muhammaduzairse@gmail.com"
                className="flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors"
              >
                <i className="fas fa-envelope text-blue-400 text-xs w-4" />
                muhammaduzairse@gmail.com
              </a>
              <a
                href="tel:+923055636382"
                className="flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors"
              >
                <i className="fas fa-phone text-green-400 text-xs w-4" />
                +92 305 563-6382
              </a>
              <div className="flex gap-3 pt-2">
                <a
                  href="https://www.linkedin.com/in/muhammad-uzair-b20452168/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg flex items-center justify-center border border-slate-700 hover:border-blue-500 hover:bg-blue-500/10 text-slate-400 hover:text-blue-400 transition-all"
                >
                  <i className="fab fa-linkedin text-sm" />
                </a>
                <a
                  href="https://github.com/Muhammad-uzair029"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg flex items-center justify-center border border-slate-700 hover:border-slate-400 hover:bg-white/5 text-slate-400 hover:text-white transition-all"
                >
                  <i className="fab fa-github text-sm" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {year} Muhammad Uzair. Built with React & Tailwind CSS.
          </p>
          <div className="flex items-center gap-1 text-slate-500 text-xs">
            <span>Open to work</span>
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse ml-1" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
