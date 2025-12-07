import Image from "next/image";
import styles from "./page.module.css";
import React from "react";
import Navbar from "./components/navbar/navbar";
import Resume from "./components/professional/Resume";
import AboutMe from "./components/about/aboutMe";
import ProjectsCarousel from "./components/projects/projects";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="mainContent">

        {/* ABOUT SECTION */}
        <section id="about">
          <AboutMe />
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects">
          <ProjectsCarousel />
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience">
          <div className="sectionHeader">
            <h1 className="tabHeader"> Experience </h1>
            <h2 className="subHeader"> A look into my professional Journey</h2>
          </div>
          <Resume />
        </section>
      </div>
      {/* CONTACT SECTION */}
      <section id="contact">
        <Footer />
      </section>
    </>
  );
}
