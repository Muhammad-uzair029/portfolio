import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/home/Hero";
import About from "./components/home/About";
import Skills from "./components/home/Skills";
import Experience from "./components/home/Experience";
import Projects from "./components/home/Project";
import Certifications from "./components/home/Certifications";
import Blog from "./components/home/Blog";
import GetInTouch from "./components/home/GetInTouch";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen" style={{ background: "#020817" }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Blog />
        <GetInTouch />
      </main>
      <Footer />
    </div>
  );
};

export default App;
