import { Link } from "react-router-dom";
import "./HeroImage.css";
import React from 'react';
import IntroImg from "../assets/portfolio-background.jpg"

const HeroImage = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={IntroImg} alt="IntroImg"/>
        </div>
        <div className="content">
            <p>Welcome to my website!</p>
            <h1>John Pangilinan</h1>
            <div>
                <Link to="/project" className="button">Projects</Link>
                <Link to="/contact" className="button-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImage;