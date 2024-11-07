/**
 * Author: John Pangilinan
 */
import "./HeroImage2.css";
import React from 'react';
import OtherImg from "../assets/portfolio-background-2.jpg"

const HeroImage2 = ({title}) => {
  return (
    <div className="hero">
        <div className="mask-2">
            <img className="intro-img-2" src={OtherImg} alt="OtherImg" />
        </div>
        <div className="content-2">
            <h1>{title}</h1>
        </div>
    </div>
  )
}

export default HeroImage2;