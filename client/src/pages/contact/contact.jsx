import React from 'react'
import './contact.css'
import Card from './Card/card';

const data = [
  {
    image: "https://avatars.githubusercontent.com/u/92421383?v=4",
    name: "Sagar Gupta",
    role: "Full Stack Developer",
    about:
      "Problem Solver | Competitive Programmer | Full Stack Developer , I am a quick learner and a team player. I am always ready to learn new things and contribute to the community.",
    linkedin: "https://www.linkedin.com/in/siddharth-singh-1a1b1b1b1/",
    github: "https://github.com/Sagargupta16",
    instagram: "https://www.instagram.com/sagar_sethh/",
  },
  {
    image: "https://avatars.githubusercontent.com/u/97335790?v=4",
    name: "Sachin Gupta",
    role: "Full Stack Developer",
    about:
      "A passionate developer who loves to code and explore new technologies and frameworks. I am a quick learner and a team player. I am always ready to learn new things and contribute to the community.",
    linkedin: "https://www.linkedin.com/in/sachin-gupta-4aa151222/",
    github: "https://github.com/sachin-gupta99",
    instagram: "https://www.instagram.com/_.sachin_.gupta/",
  },
];

function abc(e) {
  e.preventDefault();
  const name = e.target[0].value;
  const email = e.target[1].value;
  const subject = e.target[2].value;
  const message = e.target[3].value;
  const data = {
    name,
    email,
    message,
    subject,
  };
  console.log(data);
  e.target[0].value = "";
  e.target[1].value = "";
  e.target[2].value = "";
  e.target[3].value = "";
}

const contact = () => {
  return (
    <div>
      <div className="contact">
        <div className="contact__bottom">
          <h1>Get in Touch</h1>
          <form onSubmit={abc}>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Message" />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="contact__top">
          <h1>Contact the Team</h1>
          <div className="card">
            {data.map((item) => {
              return <Card data={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default contact
