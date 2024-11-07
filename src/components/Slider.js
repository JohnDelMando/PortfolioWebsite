/**
 * Author: John Pangilinan
 */
import React, { useState } from 'react';
import "./Slider.css";
import ProjectImg1 from "../assets/project-image-1.jpg";
import { FaGithub } from 'react-icons/fa';

const Slider = () => {
    const [activeSlide, setActiveSlide] = useState(1);
    const totalSlides = 5;

    const handleSlideChange = (slideNumber) => {
        setActiveSlide(slideNumber);
    };

    const nextSlide = () => {
        setActiveSlide(activeSlide === totalSlides ? 1 : activeSlide + 1);
    };

    const prevSlide = () => {
        setActiveSlide(activeSlide === 1 ? totalSlides : activeSlide - 1);
    };

    return (
        <div className="sliders">
            <input
                type="radio"
                id="trigger1"
                name="slider"
                checked={activeSlide === 1}
                onChange={() => handleSlideChange(1)}
            />
            <label htmlFor="trigger1" />
            <input
                type="radio"
                id="trigger2"
                name="slider"
                checked={activeSlide === 2}
                onChange={() => handleSlideChange(2)}
            />
            <label htmlFor="trigger2" />
            <input
                type="radio"
                id="trigger3"
                name="slider"
                checked={activeSlide === 3}
                onChange={() => handleSlideChange(3)}
            />
            <label htmlFor="trigger3" />
            <input
                type="radio"
                id="trigger4"
                name="slider"
                checked={activeSlide === 4}
                onChange={() => handleSlideChange(4)}
            />
            <label htmlFor="trigger4" />
            <input
                type="radio"
                id="trigger5"
                name="slider"
                checked={activeSlide === 5}
                onChange={() => handleSlideChange(5)}
            />
            <label htmlFor="trigger5" />
            <div className={`slide ${activeSlide === 1 ? 'active' : ''}`}>
                <div className='image-container'>
                    <img className="project-img" src={ProjectImg1} alt="project-img-1"></img>
                    <div className="overlay-logo">
                        <a href="youtube.com">
                            <FaGithub size={30} style={{
                                color: "#fff", 
                                marginRight: "1rem"
                            }} />
                        </a>
                        <a href="youtube.com" className="overlay-text">DEMO</a>
                    </div>
                </div>
            </div>
            <div className={`slide ${activeSlide === 2 ? 'active' : ''}`}>
            <div className='image-container'>
                <img className="project-img" src={ProjectImg1} alt="project-img-2" />
                <div className="overlay-logo">
                    <a href="youtube.com">
                        <FaGithub size={30} style={{
                            color: "#fff", 
                            marginRight: "1rem"
                        }} />
                    </a>
                    </div>
                </div>
            </div>
            <div className={`slide ${activeSlide === 3 ? 'active' : ''}`}>
                <img className="project-img" src={ProjectImg1} alt="project-img-3" />
            </div>
            <div className={`slide ${activeSlide === 4 ? 'active' : ''}`}>
                <img className="project-img" src={ProjectImg1} alt="project-img-4" />
            </div>
            <div className={`slide ${activeSlide === 5 ? 'active' : ''}`}>
                <img className="project-img" src={ProjectImg1} alt="project-img-5" />
            </div>
            <button className="arrow left-arrow" onClick={prevSlide}>&lt;</button>
            <button className="arrow right-arrow" onClick={nextSlide}>&gt;</button>
        </div>
    );
};

export default Slider;