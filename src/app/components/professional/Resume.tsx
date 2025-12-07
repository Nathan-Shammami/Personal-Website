"use client";

import React, { useState } from "react";
import "./resumeStyles.css";
import { timelineData } from "./jobTimeline";

export default function Resume() {
    const [selectedIndex, setSelectedIndex] = useState<number>(0); 
    
    return (
        <div className="resumeContainer">
            <div className="timeline">
                {timelineData.map((job, index) => (
                    <div 
                        key={index} 
                        className={`timeline-item ${selectedIndex === index ? "selected" : ""}`}
                        onClick={() => setSelectedIndex(index)}
                    >
                        <div className="timeline-date">
                            {job.startDate.split('\n').map((line, i) => (
                                <div key={i}>{line}</div>
                            ))}
                        </div>
                        <div className="timeline-marker">
                            <div className={`timeline-dot ${selectedIndex === index ? "active" : ""}`}></div>
                            {index < timelineData.length - 1 && <div className="timeline-line"></div>}
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="content-section">
                <div className="resumeCard">
                    <h2>{timelineData[selectedIndex].role}</h2>
                    <h3>{timelineData[selectedIndex].company}</h3>
                    <p className="resumeMeta">
                        {timelineData[selectedIndex].duration}
                    </p>
                    <ul className="resumeDescription">
                        {timelineData[selectedIndex].description.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}