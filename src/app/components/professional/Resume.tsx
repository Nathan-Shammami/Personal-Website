"use client";

import React, { useEffect, useState } from "react";
import "./resumeStyles.css";
import { timelineData } from "./jobTimeline";

export default function Resume() {
    const [selectedIndex, setSelectedIndex] = useState<number>(0); 
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [windowWidth, setWindowWidth] = useState(0);
    const mobileTimeline = [...timelineData].reverse()
    const [timeline, setTimeline] = useState(timelineData);

   
    useEffect(() => {
        const handleResize = () => {
            if (typeof window !== 'undefined') {
                const width = window.innerWidth;
                setWindowWidth(window.innerWidth);
            }
            if (windowWidth <= 770){
                setIsMobile(true);
                setTimeline(mobileTimeline)
                console.log("use mobile")
            } else if (windowWidth > 770) {
                setIsMobile(false);
                setTimeline(timelineData)
                console.log("use desktop")
            }
        }
        handleResize();
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize);
    },[windowWidth])

    return (
        <div className="resumeContainer">
            <div className="timeline">

                {timeline.map((job, index) => (
                    <div 
                        key={index} 
                        className={`timelineItem ${selectedIndex === index ? "selected" : ""}`}
                        onClick={() => setSelectedIndex(index)}
                    >
                        <div className="timelineDate">
                            {job.startDate.split('\n').map((line, i) => (
                                <div key={i}>{line}</div>
                            ))}
                        </div>
                        <div className="timelineMarker">
                            <div className={`timelineDot ${selectedIndex === index ? "active" : ""}`}></div>
                            {index < timeline.length - 1 && <div className="timelineLine"></div>}
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="contentSection">
                <div className="resumeCard">
                    <h2>{timeline[selectedIndex].role}</h2>
                    <h3>{timeline[selectedIndex].company}</h3>
                    <p className="resumeMeta">
                        {timeline[selectedIndex].duration}
                    </p>
                    <ul className="resumeDescription">
                        {timeline[selectedIndex].description.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}