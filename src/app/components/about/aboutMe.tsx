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
            <div className="aboutMeContainer">
                <div className="aboutMeContainerLeft">
                    <h1 className="tabHeader"> Hello! I'm Nathan </h1>
                    <h2 className="subHeader"> Born and raised in Walled Lake Michigan, I'm a recently graduated software engineer from Michigan State University who loves to build, explore, and learn new things.</h2>
                    <br />
                    <h2 className="subHeader">Since graduating, I’ve been focused on mobile and web development at APS, where I’ve helped design and build full stack apps across React, React Native, and nextjs apps. </h2>
                    <br />
                    <h2 className="subHeader">Outside of work, I enjoy playing around with personal projects and hanging out with friends. I have also recently been getting into winter and water sports with wake surfing in the summer and skiing in the winters.</h2>
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