import React from 'react'
import classes from './profile.module.css'

const skills = ["HTML","CSS","JavaScript","React","Node","Express","MongoDB","Python","Django","C++","C","Java","PHP","MySQL","Git","GitHub","Linux",]

const experience = [
    {
        title: "Web Developer",
        company: "XYZ Company",
        location: "India",
        from: "2020",
        to: "Present"
    }
]

const education = [
    {
        title: "B.Tech",
        company: "ABC College",
        location: "India",
        from: "2016",
        to: "2020"
    }
]

const social = [
    {
        title: "Facebook",
        link: "https://www.facebook.com"
    },
    {
        title: "Twitter",
        link: "https://www.twitter.com"
    },
    {
        title: "Instagram",
        link: "https://www.instagram.com"
    },
    {
        title: "LinkedIn",
        link: "https://www.linkedin.com"
    }
]

const codingprofiles = [
    {
        title: "CodeChef",
        link: "https://www.codechef.com"
    },
    {
        title: "CodeForces",
        link: "https://www.codeforces.com"
    },
    {
        title: "HackerRank",
        link: "https://www.hackerrank.com"
    },
    {
        title: "HackerEarth",
        link: "https://www.hackerearth.com"
    }
]



const profile = () => {
  return (
    <div className={classes.profile}>
      <div className={classes.profile_left}>
        <div className={classes.profile_left_top}>
          <div className={classes.profile_left_top_upper}>
            <div className={classes.profile_left_top_upper_left}>
              <div className={classes.profile_left_top_upper_left_img}>
                <img
                  src="https://www.w3schools.com/howto/img_avatar.png"
                  alt="profile"
                />
              </div>
            </div>
            <div className={classes.profile_left_top_upper_right}>
              <div className={classes.profile_left_top_upper_right_name}>
                <h1>John Doe</h1>
              </div>
              <div className={classes.profile_left_top_upper_right_location}>
                <p>
                  Location: <span>India</span>
                </p>
              </div>
            </div>
          </div>
          <div className={classes.profile_left_top_middle}>
            <p>
              Hi, I am John Doe. I am a web developer. I love to code and I love
              to learn new things.
            </p>
          </div>
          <div className={classes.profile_left_top_lower}>
            <div>
              <p>
                Email:{" "}
                <span>
                  <a href="mailto:abc@gmail.com">abc@gmail.com</a>
                </span>
              </p>
            </div>
            <div>
              <p>
                Phone:{" "}
                <span>
                  <a href="tel:+91-1234567890">+91-1234567890</a>
                </span>
              </p>
            </div>
            <div>
              <p>
                Website:{" "}
                <span>
                  <a href="https://www.google.com">https://www.google.com</a>
                </span>
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className={classes.profile_left_middle}>
          <div className={classes.profile_left_middle_title}>
            <h1>Skills</h1>
          </div>
          <div className={classes.profile_left_middle_skills}>
            {skills.map((skill, index) => {
              return (
                <div
                  className={classes.profile_left_middle_skills_item}
                  key={index}
                >
                  <p>{skill}</p>
                </div>
              );
            })}
          </div>
        </div>
        <hr />
        <div className={classes.profile_left_bottom}></div>
      </div>
      <div className={classes.profile_right}>
        <div className={classes.profile_right_c1}>
          <div className={classes.profile_right_c1_title}>
            <h1>Experience</h1>
          </div>
          <div className={classes.profile_right_c1_content}>
            {experience.map((exp, index) => {
              return (
                <div
                  className={classes.profile_right_c1_content_item}
                  key={index}
                >
                  <div className={classes.profile_right_c1_content_item_title}>
                    <h1>{exp.title}</h1>
                  </div>
                  <div
                    className={classes.profile_right_c1_content_item_company}
                  >
                    <p>
                      Company: <span>{exp.company}</span>
                    </p>
                  </div>
                  <div
                    className={classes.profile_right_c1_content_item_location}
                  >
                    <p>
                      Location: <span>{exp.location}</span>
                    </p>
                  </div>
                  <div className={classes.profile_right_c1_content_item_from}>
                    <p>
                      From: <span>{exp.from}</span>
                    </p>
                  </div>
                  <div className={classes.profile_right_c1_content_item_to}>
                    <p>
                      To: <span>{exp.to}</span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={classes.profile_right_c2}>
          <div className={classes.profile_right_c2_title}>
            <h1>Education</h1>
          </div>
          <div className={classes.profile_right_c2_content}>
            {education.map((edu, index) => {
              return (
                <div
                  className={classes.profile_right_c2_content_item}
                  key={index}
                >
                  <div className={classes.profile_right_c2_content_item_title}>
                    <h1>{edu.title}</h1>
                  </div>
                  <div className={classes.profile_right_c2_content_item_school}>
                    <p>
                      School: <span>{edu.school}</span>
                    </p>
                  </div>
                  <div
                    className={classes.profile_right_c2_content_item_location}
                  >
                    <p>
                      Location: <span>{edu.location}</span>
                    </p>
                  </div>
                  <div className={classes.profile_right_c2_content_item_from}>
                    <p>
                      From: <span>{edu.from}</span>
                    </p>
                  </div>
                  <div className={classes.profile_right_c2_content_item_to}>
                    <p>
                      To: <span>{edu.to}</span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={classes.profile_right_c3}>
          <div className={classes.profile_right_c3_title}>
            <h1>Social Links</h1>
          </div>
          <div className={classes.profile_right_c3_content}>
            {social.map((link, index) => {
              return (
                <div
                  className={classes.profile_right_c3_content_item}
                  key={index}
                >
                  <div className={classes.profile_right_c3_content_item_title}>
                    <h1>{link.title}</h1>
                  </div>
                  <div className={classes.profile_right_c3_content_item_link}>
                    <p>
                      Link:{" "}
                      <span>
                        <a href={link.link}>{link.link}</a>
                      </span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={classes.profile_right_c4}>
          <div className={classes.profile_right_c4_title}>
            <h1>Coding Platforms</h1>
          </div>
          <div className={classes.profile_right_c4_content}>
            {codingprofiles.map((platform, index) => {
              return (
                <div
                  className={classes.profile_right_c4_content_item}
                  key={index}
                >
                  <div className={classes.profile_right_c4_content_item_title}>
                    <h1>{platform.title}</h1>
                  </div>
                  <div className={classes.profile_right_c4_content_item_link}>
                    <p>
                      Link:{" "}
                      <span>
                        <a href={platform.link}>{platform.link}</a>
                      </span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default profile
