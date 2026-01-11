"use client";

import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";
import Navbar from "@/components/Navbar";
import Capabilities from "@/components/Capabilities";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Process from "@/components/Process";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      {/* Use a wrapper if needed for z-index context, but standard flow is fine here */}
      <ScrollyCanvas />
      <Projects />
      <Capabilities />
      <Experience />
      <Education />
      <Process />
      <Contact />
    </main>
  );
}
