import React, {useState} from 'react'
import './About.css'
import AboutSkillsPanel from '../components/AboutSkillsPanel'
import {piano, pingpong, turtle, ski} from '../images'
const About = () => {
    const [aboutExpl, setExpl] = useState({
        title: "",
        text: "Click on an icon for more information!"
    });

    const panelTexts = {
        piano:{
            title: "Piano",
            text: "Since I was 5, playing the pianist has been one of my favorite past times! My favorite composer has to be Chopin, but I also like Rachmaninoff and Liszt.",
        },
        pingpong:{
            title: "Table Tennis",
            text: "I enjoy the fast-paced nature of this sport and the satsifaction of landing a fast shot or a sneaky spin ball."
        },
        ski:{
            title: "Skiing",
            text: "Every winter, I go skiing. Some of my favorite places include Mont-Tremblant, Sugarloaf, and Killington."
            
        },
        turtle: {
            title: "Todd the Turtle",
            text: "He likes the computer. Either it's warm or he wants my attention. Probably because it's warm."
        },

    }
    
  return (
    <>
        <div className="about">
            <div className="about-text">
                <h1>About Me</h1>
                <p>
                    I'm a rising senior studying Computer Science and Applied Math (AMS) at Stony Brook University!   
                </p>
                <p>             
                    My *technical* interests lie in making apps that are both fun and educational, whether it be through web or game devleopment. I am most familiar with Javascript and ReactJS (which this website is built in!), but also have proficiency in Java and Python.
                </p> 
                <p>
                    Over the Summer of 2024, I will working at Stony Brook's Computer Science department handling the migration of websites built on the Drupal CMS. When semester starts, I will be continuing my position at the University's IT department as client support. There, I handle taks ranging from handling reception and assisting customers over the phone to working on university and student devices and deploying them across campus, all while closely working with new student hires, familiarizing them with the lines of work.
                </p> 
                <p>
                    My favorite hobby is playing classical piano and violin. I also enjoy playing table tennsi. I find enjoyment in these hobbies because, despite being muslce memory based, they more importantly allow me apply critical thinking skills and unwind from my day-to-day stresses.
                </p>
               
            </div>
            <div className="about-skills-bg">
                <div className="about-skills-content">
                    <h1>Skills</h1>
                    <div className="about-skills-panel">
                        <AboutSkillsPanel
                        title = "Programming Lanuages"
                        skills = {["JS/HTML/CSS", "Java",  "C",  "Python", "SQL", "C#", "MIPS"]}
                        />
                        <AboutSkillsPanel
                        title = "Development Tools"
                        skills = {["ReactJS", "NodeJS", "MongoDB", "Nginx", "git/Github", "Upcloud", "Unity", "Firebase", "Postman"]}
                        />                     
                        <AboutSkillsPanel
                        title = "Lanuages"
                        skills = {["English - native", "Chinese - proficient", "French - elementary", "Shanghainese - proficient"]}
                        />
                    </div>
                </div>
            </div>
            <div className="about-hobbies-container">
                <h1>My Hobbies</h1>
              
                <div className="about-hobbies-expl">
                    <h3>
                        {aboutExpl.title}
                    </h3>
                    <p>     
                        {aboutExpl.text}
                    </p>
                </div>
                <div className="about-hobbies">
                    <img src = {piano} alt="" style = {{border: "5px solid var(--main-bg)"}} onClick={()=>setExpl({
                        title: panelTexts.piano.title,
                        text: panelTexts.piano.text
                    })}/>
                    <img src = {pingpong} style = {{border: "5px solid var(--primary)"}} alt="" onClick={()=>setExpl({
                        title: panelTexts.pingpong.title,
                        text: panelTexts.pingpong.text
                    })}/>
                    <img src = {ski} style = {{border: "5px solid var(--accent)"}} alt="" onClick={()=>setExpl({
                        title: panelTexts.ski.title,
                        text: panelTexts.ski.text
                    })}/>
                    <img src = {turtle} style = {{border: "5px solid var(--secondary)"}} alt="" onClick={()=>setExpl({
                        title: panelTexts.turtle.title,
                        text: panelTexts.turtle.text
                    })}/>
                </div>
            </div>

        </div>
    </>
  )
}

export default About