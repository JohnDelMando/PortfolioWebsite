import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import HeroImage2 from '../components/HeroImage2';
import Slider from '../components/Slider';

const Project = () => {
  return (
    <div>
      <NavBar />
      <HeroImage2 title="PROJECTS" />
      <Slider />
      <Footer />
    </div>
  )
}

export default Project;