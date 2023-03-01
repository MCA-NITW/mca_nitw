import React from 'react'
import './contact.css'
import {ImLocation} from 'react-icons/im'
import {AiFillPhone} from 'react-icons/ai'
import {HiOutlineMail} from 'react-icons/hi'
import {FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn} from 'react-icons/fa'

function abc(e) {
  e.preventDefault();

  const name = e.target[0].value;
  const email = e.target[1].value;
  const message = e.target[2].value;

  const data = {
    name,
    email,
    message,
  };

  console.log(data);

  e.target[0].value = "";
  e.target[1].value = "";
  e.target[2].value = "";

}

const contact = () => {
  return (
    <div className="contact-main">
      <div className="contact-form">
        <form onSubmit={abc}>
          <label>Name</label>
          <input type="text" placeholder="Enter your name" required />
          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />
          <label>Message</label>
          <textarea placeholder="Enter your message" required />
          <button type="submit">Submit</button>
        </form>

        <div className="contact-info">
          <div className="contact-info-item">
            <ImLocation /> <div>NITW, India</div>
          </div>
          <div className="contact-info-item">
            <AiFillPhone />
            <div>
              <a href="tel:+91-8770532413">+91 8770532413</a>
            </div>
          </div>
          <div className="contact-info-item">
            <HiOutlineMail />
            <div>
              <a href="mailto:sg85207@gmail.com">Gmail</a>
            </div>
          </div>

          <div className="social-media">
            <a href="https://www.facebook.com/">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/">
              <FaInstagram />
            </a>
            <a href="https://www.twitter.com/">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default contact
