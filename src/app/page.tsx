import Image from "next/image";
import styles from "./page.module.css";
import React from "react";
import Navbar from "./pages/navbar/components/navbar";
import Resume from "./pages/professional/components/Resume";

export default function Home() {
  return (
    <>
    <Navbar />
    <div className="sectionHeader">
      <h1 className="tabHeader"> About Me </h1>
      <h2 className="subHeader"> Who am I?</h2>
    </div>
    
    <div className="sectionHeader">
      <h1 className="tabHeader"> Experience </h1>
      <h2 className="subHeader"> A look into my professional Journey</h2>
    </div>
    <Resume />
    </>
  );
}
