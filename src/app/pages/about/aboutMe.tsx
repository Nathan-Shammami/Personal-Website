"use client";

import React, { useState, useEffect } from "react";
import "./aboutMeStyles.css";
import Images from "../../assets/index";

export default function AboutMe() {
    const [index, setIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);
    const images = [Images.headshot, Images.designDay, Images.gradPhoto,];

    useEffect(() => {
        const interval = setInterval(() => {
            setIsFading(true);
            setTimeout(() => {
                setIndex((prev) => (prev + 1) % images.length);
                setIsFading(false);
            }, 500);
        }, 10000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="sectionHeader">
            <h1 className="tabHeader"> Hello! I'm Nathan </h1>
            
            <div className="aboutMeContainer">
                <div className="aboutMeContainerLeft">
                    <h2 className="subHeader"> Born and raised in Walled lake Michigan, I'm a new-grad software engineer from Michigan State University who loves to build, explore, and learn new things.</h2>
                </div>
                <div className="aboutMeContainerRight">
                    <div className="image-container">
                    <img
                        src={images[index].src ?? images[index]}
                        alt="image of me"
                        className={`rotating-img ${isFading ? "fade-out" : "fade-in"}`}
                    />
                    </div>
                </div>
            </div>
        </div>
    );
}