import React from 'react'
import './card.css'
import {FaInstagram,FaGithub,FaLinkedin} from 'react-icons/fa'

const card = (props) => {
    const {image,name,role,about,linkedin,github,instagram} = props.data;
  return (
    <div className="card_item">
      <div className='card_image'>
        <img src={image} alt="Pic" />
      </div>
      <h1>{name}</h1>
      <h2>{role}</h2>
      <p>{about}</p>
      <div className="card_social">
        <a href={linkedin} target="_blank" rel="noreferrer" className='card_social_link'>
            <FaLinkedin/>
        </a>
        <a href={github} target="_blank" rel="noreferrer" className='card_social_link'>
            <FaGithub/>
        </a>
        <a href={instagram} target="_blank" rel="noreferrer" className='card_social_link'>
            <FaInstagram/>
        </a>
      </div>
    </div>
  );
}

export default card
    
    
    
    
