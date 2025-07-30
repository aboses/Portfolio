import React from 'react'
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content-left">
        <p>© 2025 Arpita Bose. All rights reserved.</p>
      </div>
      <hr/>
      <div className="footer-content-center">
        <h2>📧Contact: <span>arpitaboseshilpi@gmail.com</span></h2>
        <h2>📍Location: <span>Kolkata, West Bengal, India</span></h2>
      </div>
        <hr/>
      <div className="footer-content-right">
        <h2>Connect with me:</h2>
        <p>I'm a passionate web developer with a focus on creating dynamic and responsive web applications.</p>
        <p>Feel free to reach out for collaborations or just to say hello!</p>
        <h3>Follow me on:</h3>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/arpita-bose-874535161" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/aboses" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </div>
  )
}

export default Footer