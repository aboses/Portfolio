import React from 'react'
import './Contact.css';
import Mail from '../../Assets/mail_icon.svg';
import Call from '../../Assets/call_icon.svg';
import Location from '../../Assets/location_icon.svg';


const Contact = () => {


  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "adec9eec-9d4b-45b2-8199-76fafc6ff078");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id='Contact' className="contact">
        <div className='contact-title'>
            <h1>Contact Me</h1>
        </div>
        <div className='contact-section'>
            <div className='contact-info'>
                <h1>Get in Touch</h1>
                <p>I'm currently available to start working. Feel free to reach out!</p>
                <div className='contact-details'>
                  <div className="contact-detail">
                     <img src={Mail} alt="Mail Icon" />
                     <p>arpitaboseshilpi@gmail.com</p>
                  </div>
                  <div className="contact-detail">
                     <img src={Call} alt="Call Icon" />
                     <p>+91 70030 51702</p>
                  </div>
                  <div className="contact-detail">
                     <img src={Location} alt="Location Icon" />
                     <p>Kolkata, India</p>
                  </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className='contact-form'>
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Your Name' name='name'required />
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Your Email'name='email' required />
                <label htmlFor="">Your Message</label>
                <textarea placeholder='Your Message' rows="8" name='message' required></textarea>
                <button type="submit" className='contact-btn'>Send Message</button>
            </form>
        </div>
    </div>
  )
}
export default Contact;


