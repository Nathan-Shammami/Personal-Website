"use client";

import React, { useRef, useState, useEffect } from "react";
import projectList from "./projectsData";
import "./projectsStyles.css";

export default function ProjectsCarousel() {
    const [selectedIndex, setSelectedIndex] = useState<number>(0); 
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [translateX, setTranslateX] = useState(0);
    const carouselRef = useRef<HTMLDivElement | null>(null);
    const [cardWidth, setCardWidth] = useState(0);

    // math for getting card width based on screen size
    useEffect(() => {
        const updateCardWidth = () => {
            if (carouselRef.current) {
                const firstCard = carouselRef.current.querySelector('.projectCard');
                if (firstCard) {
                    const GAP = 24;
                    const newCardWidth = firstCard.getBoundingClientRect().width + GAP;
                    setCardWidth(newCardWidth);
                }
            }
        };

        updateCardWidth();
        window.addEventListener('resize', updateCardWidth);
        const timeout = setTimeout(updateCardWidth, 10);
        
        return () => {
            window.removeEventListener('resize', updateCardWidth);
            clearTimeout(timeout);
        };
    }, []);

    // overflow for previous and next
    const handlePrevious = () => {
        setSelectedIndex((prev) => (prev === 0? projectList.length -1 : prev - 1));
    };

    const handleNext = () => {
        setSelectedIndex((prev) => (prev === projectList.length -1 ? 0 : prev + 1));
    };

    // on mouse click
    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        setIsDragging(true);
        setStartX(e.touches[0].clientX);
    };

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsDragging(true);
        setStartX(e.clientX);
    };

    // on drag
    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        if (!isDragging) return;
        const currentX = e.touches[0].clientX;
        const diff = currentX - startX;
        setTranslateX(diff);
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (!isDragging) return;
        const currentX = e.clientX;
        const diff = currentX - startX;
        setTranslateX(diff);
    };

    // on mouse up
    const handleTouchEnd = () => {
        setIsDragging(false);
        if (Math.abs(translateX) > 100) {
        if (translateX > 0) {
            handlePrevious();
        } else {
            handleNext();
        }
        }
        setTranslateX(0);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        if (Math.abs(translateX) > 100) {
        if (translateX > 0) {
            handlePrevious();
        } else {
            handleNext();
        }
        }
        setTranslateX(0);
    };

    // listenrs for live updating
    useEffect(() => {
        if (isDragging) {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        }
        return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging, startX, translateX]);

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 10000);

        return () => clearInterval(interval);
    }, [selectedIndex]);

    return (
        <div className="projectsContainer">
            <div className="carouselWrapper">
                <div 
                    ref={carouselRef}
                    className="carousel"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    onMouseDown={handleMouseDown}
                >
                    <div 
                        className={`carouselTrack ${isDragging ? 'dragging' : ''}`}
                        style={{ 
                            transform: `translateX(calc(-${selectedIndex * cardWidth}px + ${translateX}px))`,
                        }}
                    >
                        {projectList.map((project, index) => (
                            <div 
                                key={index} 
                                className={`projectCard ${index === selectedIndex ? 'active' : ''}`}
                            >
                                <div className="cardImage" style={{ backgroundImage: `url(${project.image})` }}>
                                    <div className="imageOverlay" />
                                </div>
                                <div className="cardContent">
                                    <h3 className="cardTitle">{project.name}</h3>
                                    <p className="cardDescription">{project.description}</p>
                                    <div className="tagsRow">
                                        <div className="tags">
                                            {(project.technologies ?? []).map((tag, idx) => (
                                                <span key={idx} className="tag">{tag}</span>
                                            ))}
                                        </div>
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="viewProjectButton"
                                            >
                                                View Project →
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="carouselIndicators">
                {projectList.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedIndex(index)}
                        className={`indicator ${index === selectedIndex ? 'active' : ''}`}
                        aria-label={`Go to project ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}