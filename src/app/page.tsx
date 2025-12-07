import Image from "next/image";
import styles from "./page.module.css";
import React from "react";
import Navbar from "./pages/navbar/navbar";
import Resume from "./pages/professional/Resume";
import AboutMe from "./pages/about/aboutMe";

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
        <div className="sectionHeader">
            <h1 className="tabHeader"> Projects </h1>
            <h2 className="subHeader"> These are some of my personal projects </h2>
          </div>

        {/* EXPERIENCE SECTION */}
        <section id="experience">
          <div className="sectionHeader">
            <h1 className="tabHeader"> Experience </h1>
            <h2 className="subHeader"> A look into my professional Journey</h2>
          </div>
          <Resume />
        </section>

        {/* CONTACT SECTION */}
        <section id="contact">
        </section>
      </div>
    </>
  );
}
