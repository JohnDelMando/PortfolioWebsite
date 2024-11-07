import "./Footer.css";
import { FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";
import React from 'react';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="mid">
                    <h4>
                        <div className="home">
                            <FaHome size={20} style={{
                                color: "#fff", 
                                marginRight: "2rem"
                            }} />
                            Regina SK, CANADA
                        </div>
                    </h4>
                    <div className="phone">
                        <h4>
                            <FaPhone size={20} style={{
                                color: "#fff", 
                                marginRight: "2rem"
                            }} />
                            (123) 123-1234
                        </h4>    
                    </div>
                    <div className="email">
                        <h4>
                            <FaMailBulk size={20} style={{
                                color: "#fff", 
                                marginRight: "2rem"
                            }} />
                            email@email.com
                        </h4>    
                    </div>
                    <div className="socials">
                        <a href="https://www.linkedin.com/in/john-delmando/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={30} style={{
                                    color: "#fff", 
                                    marginRight: "1rem"
                            }} />
                        </a>
                        <a href="https://github.com/JohnDelMando" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={30} style={{
                                    color: "#fff", 
                                    marginRight: "1rem"
                            }} />
                        </a>
                        {/* <a href="" target="_blank" rel="noopener noreferrer"> */}
                            <FaInstagram size={30} style={{
                                    color: "#fff", 
                                    marginRight: "1rem"
                            }} />
                        {/* </a> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
