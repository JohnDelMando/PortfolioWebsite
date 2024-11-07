import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Form from "../components/Form";
import HeroImage2 from '../components/HeroImage2';

const Contact = () => {
  return (
    <div>
      <NavBar />
      <HeroImage2 title="CONTACT ME" />
      <Form />
      <Footer />
    </div>
  )
}

export default Contact;