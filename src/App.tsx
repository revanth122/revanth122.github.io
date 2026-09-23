import { useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CursorGlow from "./components/CursorGlow";
import Modal from "./components/Modal";
import type { SectionKey } from "./types";

export default function App() {
  const [active, setActive] = useState<SectionKey | null>(null);
  const close = () => setActive(null);

  return (
    <div className="relative min-h-screen bg-bg">
      <div className="dot-grid pointer-events-none fixed inset-0 opacity-[0.4]" />
      <CursorGlow />
      <Nav onOpen={setActive} />
      <main>
        <Hero onOpen={setActive} />
      </main>
      <Footer />

      <Modal open={active === "about"} onClose={close}>
        <About />
      </Modal>
      <Modal open={active === "skills"} onClose={close}>
        <Skills />
      </Modal>
      <Modal open={active === "experience"} onClose={close}>
        <Experience />
      </Modal>
      <Modal open={active === "projects"} onClose={close}>
        <Projects />
      </Modal>
      <Modal open={active === "education"} onClose={close}>
        <Education />
      </Modal>
      <Modal open={active === "contact"} onClose={close}>
        <Contact />
      </Modal>
    </div>
  );
}
