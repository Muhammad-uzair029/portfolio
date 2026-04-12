import React, { useState, useEffect, useRef } from "react";

const articles = [
  {
    title: "AI is Eating Software: The Last Job Standing",
    subtitle: "Marc Andreessen said software is eating the world. Now AI is eating the software.",
    date: "Feb 20, 2026",
    readTime: "4 min read",
    tags: ["AI", "Future of Work"],
    url: "https://medium.com/@muhammaduzairse/ai-is-eating-software-the-last-job-standing-1d337e0cdc82",
    accent: "#8b5cf6",
    icon: "fa-brain",
    featured: true,
  },
  {
    title: "Why Most Developers Are Using AI Wrong (And Losing Massive Time)",
    subtitle: "Developers who don't learn to use AI properly will be completely left behind in 6 months.",
    date: "Feb 20, 2026",
    readTime: "4 min read",
    tags: ["AI Usage", "Productivity"],
    url: "https://medium.com/@muhammaduzairse/why-most-developers-are-using-ai-wrong-and-losing-massive-time-9b7b469f49de",
    accent: "#3b82f6",
    icon: "fa-robot",
    featured: true,
  },
  {
    title: "The Parameter Everyone Ignores (Until Their AI Starts Hallucinating)",
    subtitle: "One overlooked parameter can make your LLM outputs go from reliable to completely untrustworthy.",
    date: "Nov 6, 2025",
    readTime: "4 min read",
    tags: ["Prompt Engineering", "Hallucinations", "LLM"],
    url: "https://medium.com/@muhammaduzairse/the-parameter-everyone-ignores-until-their-ai-starts-hallucinating-d6fe420fd169",
    accent: "#f43f5e",
    icon: "fa-exclamation-triangle",
    featured: false,
  },
  {
    title: "RAG vs Fine-tuning vs Prompt Engineering: Choosing Your LLM Strategy",
    subtitle: "When building LLM applications with domain-specific knowledge, you face a crucial architectural decision.",
    date: "Oct 15, 2025",
    readTime: "3 min read",
    tags: ["RAG", "LLM", "Architecture"],
    url: "https://medium.com/@muhammaduzairse/rag-vs-fine-tuning-vs-prompt-engineering-choosing-your-llm-strategy-da5f86b4a7af",
    accent: "#10b981",
    icon: "fa-sitemap",
    featured: false,
  },
  {
    title: "Streaming vs Batch Processing for LLM Outputs: Architecture and UX Tradeoffs",
    subtitle: "When your LLM generates a response, this critical decision shapes both performance and user experience.",
    date: "Oct 10, 2025",
    readTime: "5 min read",
    tags: ["LLM", "Architecture", "UX"],
    url: "https://medium.com/@muhammaduzairse/streaming-vs-batch-processing-for-llm-outputs-architecture-and-ux-tradeoffs-5c1d266397f2",
    accent: "#06b6d4",
    icon: "fa-stream",
    featured: false,
  },
  {
    title: "Choosing the Right Architecture: Hybrid Data Retrieval vs MCP Server with LLMs",
    subtitle: "How to architect data retrieval systems for AI-powered applications — a deep-dive comparison.",
    date: "Oct 8, 2025",
    readTime: "5 min read",
    tags: ["AI Architecture", "MCP", "Software Engineering"],
    url: "https://medium.com/@muhammaduzairse/choosing-the-right-architecture-hybrid-data-retrieval-vs-mcp-server-with-llms-ead33bb46b1e",
    accent: "#f59e0b",
    icon: "fa-project-diagram",
    featured: false,
  },
  {
    title: "Spring Boot Test — Library Management API",
    subtitle: "A comprehensive tutorial: solving a HackerRank-style problem by building REST APIs with Spring Boot.",
    date: "Sep 3, 2025",
    readTime: "6 min read",
    tags: ["Java", "Spring Boot", "REST API"],
    url: "https://medium.com/@muhammaduzairse/spring-boot-test-library-management-api-2c65071ab1e9",
    accent: "#34d399",
    icon: "fa-leaf",
    featured: false,
  },
  {
    title: "Scaling Systems: Strategies for Building Robust Architectures",
    subtitle: "Understanding web architecture and the key strategies needed to scale systems effectively.",
    date: "Jul 15, 2024",
    readTime: "3 min read",
    tags: ["System Design", "Scalability", "Architecture"],
    url: "https://medium.com/@muhammaduzairse/scaling-systems-strategies-for-building-robust-architectures-6eb91b69a010",
    accent: "#a78bfa",
    icon: "fa-expand-arrows-alt",
    featured: false,
  },
  {
    title: "MongoDB Query Optimizations",
    subtitle: "Practical MongoDB optimization techniques that every backend developer should know.",
    date: "May 16, 2023",
    readTime: "3 min read",
    tags: ["MongoDB", "Database", "Performance"],
    url: "https://medium.com/@muhammaduzairse/mongodb-query-optimizations-60e839986d1e",
    accent: "#4ade80",
    icon: "fa-database",
    featured: false,
  },
];

const Blog = () => {
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef(null);

  const featured = articles.filter((a) => a.featured);
  const rest = articles.filter((a) => !a.featured);
  const visibleRest = showAll ? rest : rest.slice(0, 4);

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
  }, [showAll]);

  return (
    <section id="blog" className="py-24 relative" ref={sectionRef}>
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 30% 50%, rgba(139,92,246,0.25), transparent)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="reveal text-center mb-16">
          <h2 className="section-heading">Tech Writing</h2>
          <p className="section-subheading">
            Sharing insights on AI, LLM engineering, and software architecture on Medium
          </p>
        </div>

        {/* Featured articles — large cards */}
        <div className="reveal grid md:grid-cols-2 gap-6 mb-8">
          {featured.map((article) => (
            <ArticleCard key={article.url} article={article} large />
          ))}
        </div>

        {/* Rest — compact grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {visibleRest.map((article) => (
            <div key={article.url} className="reveal">
              <ArticleCard article={article} />
            </div>
          ))}
        </div>

        {/* Toggle + CTA */}
        <div className="reveal flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
          {!showAll && rest.length > 4 && (
            <button
              onClick={() => setShowAll(true)}
              className="btn-secondary px-6 py-2.5 text-sm"
            >
              <i className="fas fa-chevron-down text-xs" />
              Show {rest.length - 4} More Articles
            </button>
          )}
          <a
            href="https://medium.com/@muhammaduzairse"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-6 py-2.5 text-sm"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
            </svg>
            All Articles on Medium
          </a>
        </div>
      </div>
    </section>
  );
};

const ArticleCard = ({ article, large = false }) => (
  <a
    href={article.url}
    target="_blank"
    rel="noopener noreferrer"
    className={`project-card card-glass flex flex-col h-full block ${
      large ? "p-6" : "p-5"
    }`}
    style={{ textDecoration: "none" }}
    onMouseEnter={(e) => {
      e.currentTarget.style.borderColor = `${article.accent}50`;
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = "";
    }}
  >
    {/* Top row */}
    <div className="flex items-start justify-between mb-4">
      <div
        className={`${large ? "w-11 h-11" : "w-9 h-9"} rounded-xl flex items-center justify-center shrink-0`}
        style={{
          background: `${article.accent}18`,
          border: `1px solid ${article.accent}30`,
        }}
      >
        <i
          className={`fas ${article.icon} ${large ? "text-base" : "text-sm"}`}
          style={{ color: article.accent }}
        />
      </div>
      <i className="fas fa-external-link-alt text-slate-600 text-xs mt-1" />
    </div>

    {/* Title */}
    <h3
      className={`font-bold text-white leading-snug mb-2 ${
        large ? "text-lg" : "text-sm"
      }`}
    >
      {article.title}
    </h3>

    {/* Subtitle */}
    {large && (
      <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
        {article.subtitle}
      </p>
    )}

    {/* Meta */}
    <div className="flex items-center gap-3 text-xs text-slate-500 mt-auto pt-3">
      <span className="flex items-center gap-1">
        <i className="fas fa-calendar-alt" />
        {article.date}
      </span>
      <span className="flex items-center gap-1">
        <i className="fas fa-clock" />
        {article.readTime}
      </span>
    </div>

    {/* Tags */}
    {article.tags.length > 0 && (
      <div className="flex flex-wrap gap-1.5 mt-3">
        {article.tags.slice(0, large ? 3 : 2).map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 rounded-full border"
            style={{
              background: `${article.accent}12`,
              borderColor: `${article.accent}28`,
              color: article.accent,
              filter: "brightness(1.4)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    )}
  </a>
);

export default Blog;
