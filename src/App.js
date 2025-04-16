import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import ResumePage from "./components/ResumePage";
import RecentWork from "./components/RecentWork";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />

      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>
      <section id="resume">
        <ResumePage />
      </section>
      <section id="recent-work">
        <RecentWork />
      </section>

      {/* <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section> */}

      <Footer />
    </div>
  );
};

export default App;
