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

        {/* EXPERIENCE SECTION */}
        <section id="experience">
          <div className="sectionHeader">
            <h1 className="tabHeader"> Experience </h1>
            <h2 className="subHeader"> A look into my professional Journey</h2>
          </div>
          <Resume />
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects">
          <div className="sectionHeader">
            <h1 className="tabHeader"> My Projects </h1>
            <h2 className="subHeader"> A selection of projects I've worked on</h2>
          </div>
          <ProjectsCarousel />
        </section>


      </div>

      {/* CONTACT SECTION */}
      <section id="contact">
        <Footer />
      </section>
    </>
  );
}


// TODO Mobile Responsiveness
// TODO Add animations to sections
// TODO Add more projects to the projects section
// TODO UI improvements