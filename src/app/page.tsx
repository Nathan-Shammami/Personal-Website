import Image from "next/image";
import styles from "./page.module.css";
import React from "react";
import Navbar from "./pages/navbar/components/navbar";

export default function Home() {
  return (
    <>
    <Navbar />
    <h1> Welcome! </h1>
    </>
  );
}
