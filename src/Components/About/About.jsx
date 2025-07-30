import React from 'react';
import './About.css';
import aboutImage from '../../assets/arpita_photo.jpg'; // Replace with your actual image path

const About = () => {
  return (
    <div id='About' className="about">
        <div className="abt-title">
            <h1>About Me</h1>
        </div>
        <div className="abt-section">
            <div className="abt-image">
                <img src={aboutImage} alt="" />
            </div>
            <div className="abt-content">
                <div className="abt-text">
                    <p>
                        Hi, I'm Arpita! I'm an aspiring Front-End developer with a love for creating beautiful and functional websites.
                        I would love to specialize in front-end development, focusing on user experience and responsive design.
                        I love turning ideas into interactive web applications.
                    </p>
                    <p>
                        Feel free to connect with me!
                    </p>
                </div>
                <div className='abt-skills'>
                    <div className='skill-name'>HTML & CSS <hr style={{width: '80%'}}/></div>
                    <div className='skill-name'>JavaScript <hr style={{width: '70%'}}/></div>
                    <div className='skill-name'>React JS <hr style={{width: '50%'}}/></div>
                    <div className='skill-name'>Version Control <hr style={{width: '60%'}}/></div>
                    <div className='skill-name'>Responsive Design <hr style={{width: '50%'}}/></div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default About;

