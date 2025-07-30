import React from 'react';
import './hero.css';
import heroImage from '../../assets/arpita_photo.jpg';
import resume from '../../assets/CV_ArpitaBose.pdf'; 
import AnchorLink from 'react-anchor-link-smooth-scroll';


const Hero = () => {
  return (
    <div id="Home" className="hero">
        <img src={heroImage} alt='Hero' />
        <h1>Hi, I'm Arpita Bose.<span><option>Meta certified Front-End Developer</option><option>Designer</option><option>MBA</option><option>Bio-medical Engineer</option></span></h1>
        <p>Welcome to my portfolio! I am a passionate front-end developer with a keen eye for design and a background in biomedical engineering. My journey has led me to create beautiful, functional web applications that enhance user experiences.</p>

        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='a-link' offset={50} href='#Contact'>Connect with me</AnchorLink></div>
            <div className="hero-resume"><a href={resume}>My Resume</a></div>
        </div>
    </div>
  )
}

export default Hero