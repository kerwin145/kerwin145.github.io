import React from 'react'
import './Projects.css'
import ProjectPanel from '../components/ProjectPanel';
import { NorthStream1, NorthStream2, NorthStream3, NorthStream4, NorthStream5,
  QuickMaths1, QuickMaths2, QuickMaths3, QuickMaths4, QuickMaths5,
  ToT1, ToT2, ToT3, ToT4,
  TaskTracker1, TaskTracker2, TaskTracker3,
  Blvd1, Blvd2,
  Antrho1, Antrho2, Antrho3, Antrho4, Antrho5 
 } from '../images';

const Projects = () => {
  const NorthStreamSlides = [
    {
      "image": NorthStream1,
      "subTitle": "Home Screen"
    },
    {
      "image": NorthStream2,
      "subTitle": "Upgrades Screen"
    },
    {
      "image": NorthStream3,
      "subTitle": "All upgrades completed and unlocked"
    },
    {
      "image": NorthStream4,
      "subTitle": "Battle Screen"
    },
    {
      "image": NorthStream5,
      "subTitle": "End Screen"
    },
  ]
  const QuickMathsSlides = [
    {
      "image": QuickMaths1,
      "subTitle": "Home Screen"
    },
    {
      "image": QuickMaths2,
      "subTitle": "Level Select"
    },
    {
      "image": QuickMaths3,
      "subTitle": "Question Screen"
    },
    {
      "image": QuickMaths4,
      "subTitle": "Results Screen"
    },
    {
      "image": QuickMaths5,
      "subTitle": "Achievements + notification"
    },
  ]
  const ToTSlides = [
    {
      "image": ToT1,
      "subTitle": "Home Screen"
    },
    {
      "image": ToT2,
      "subTitle": "Level Select Screen"
    },
    {
      "image": ToT3,
      "subTitle": "Level Screen"
    },
    {
      "image": ToT4,
      "subTitle": "End Screen"
    },
  ]
  const TaskTrackerSlides = [
    {
      "image": TaskTracker1,
      "subTitle": "Overview"
    },
    {
      "image": TaskTracker2,
      "subTitle": "Swapping Tasks by holding and dragging"
    },
    {
      "image": TaskTracker3,
      "subTitle": "Tasks swapped!"
    },
  ]
  const BlvdSlides = [
    {
      "image": Blvd1,
      "subTitle": "Home page"
    },
    {
      "image": Blvd2,
      "subTitle": "Photo page"
    },
  ]
  const AnthroSlides = [
    {
      "image": Antrho1,
      "subTitle": "Login"
    },
    {
      "image": Antrho2,
      "subTitle": "Home"
    },
    {
      "image": Antrho3,
      "subTitle": "Data view"
    },
    {
      "image": Antrho4,
      "subTitle": "Input Form"
    },
    {
      "image": Antrho5,
      "subTitle": "Admin Dashboard"
    },
  ]
  return (
    <div className="projects">  
        <h1>Projects</h1>
        <ProjectPanel 
          slides = {AnthroSlides}
          name = "Anthropology Database Website"
          development= "Summer 2023"
          description = {
            <span>
              <p>
                Developed during Summer of 2023, this was my first project where I formally delved into full stack development.
              </p>
              <p>
                Working with a classmate, we helped develop an exisiting website that displayed nonhuman primate data for the Stony Brook Anthropology department. 
              </p>
              <p>
                Features we added including an input form whose fields update based off the database schema, 8 different views to display data in a nicely formatted fashion, and an administrator dashboard.
              </p>
            </span>
          }
          languages = "ReactJS, CSS, NodeJS, ExpressJS, MariaDB (SQL)"
          color = "var(--accent)"
          reversed = {true}
        />
        <ProjectPanel 
          slides = {BlvdSlides}
          name = "Blvd Academy Website"
          development= "December 2021 - Now"
          description = {
            <span>
              <p>
                This website began development during Winter break of Freshman year, where I wanted to learn about web development. It is currently being updated seasonally to provide up-to-date information for the school.
              </p>
              <p>
                Frankly, this was my first touch at web development. Having followed a few tutorials prior, this website was the first project I undertook myself. I learned how to use different css layouts and use react components, routing, and state hooks.
              </p>
              <p>
                Notable sections of this website include the toggle for language (which switches between two preloaded texts), faculty slides, which was made with a react component, as well as the photo gallery, which was formatted through css grid-template-areas.
              </p>
            </span>
          }
          languages = "React, JSX, HTML, CSS"
          color = "var(--primary)"
          link = "https://github.com/kerwin145/blvd-academy-website"
        />
        <ProjectPanel 
          slides = {TaskTrackerSlides}
          name = "JS Task Tracker"
          development= "December 2022"
          description = {
            <span>
              <p>
                Developed during Fall semester 2022, over winter break, following <a href="https://www.youtube.com/watch?v=6eFwtaZf6zc&ab_channel=TylerPotts"  target="_blank" rel="noopener noreferrer">a <u>tutorial</u></a> from Youtuber Tyler Potts
              </p>
              <p>
                Here, I learned more about javascript, especially DOM manipulation.
              </p>
              <p>
                The base project included two categories with saving tasks to local storage. I additional added the capability to swap tasks around, where the task will follow your cursor until released.
              </p>
            </span>
          }
          languages = "JavaScript, HTML, CSS"
          color = "var(--secondary)"
          link = "https://github.com/kerwin145/Type-on-Time"
          reversed = {true}
        />
        <ProjectPanel 
          slides = {ToTSlides}
          name = "Type on Time"
          development= "September 2022"
          description = {
            <span>
              <p>
                Developed during a fall semester hackathon, I lead a team to create an application that combined piano-tiles like gameplay with typing.
              </p>
              <p>
                Here, I learned to work with the teammates and designate tasks according to our strengths, as well as collaborating using Github.
              </p>
              <p>
                Notable features include 3 different game modes, a scoring system (admittedly pretty inflated) that judges how accurately you times your keypress. 
              </p>
            </span>
          }
          languages = "Java"
          color = "var(--accent)"
          link = "https://github.com/kerwin145/Type-on-Time"
        />
        <ProjectPanel 
          slides = {QuickMathsSlides}
          name = "Quick Maths"
          development= "Oct 2021-April 2022"
          description = {
            <span>
              <p>
                Developed in Senior year of high school, continuing through Freshman year of college, this was a passion project of mine, as I wanted to improve my mental math.
              </p>
              <p>
                I developed my own API for an improved java rectangle that could render cycle through multiple color settings that could be both solid colors or gradient combination of multiple colors.
              </p>
              <p>
                Notable features include mix and matchable problem set customizations 2 challenge modes, an achievements system, as well as time/statistic tracking. 
              </p>
            </span>
          }
          languages = "Java"
          color = "var(--primary)"
          link = "https://github.com/kerwin145/Quick-Maths"
          reversed = {true}
        />
        <ProjectPanel 
          slides = {NorthStreamSlides}
          name = "Tales of Northstream"
          development= "May 2020-February 2022"
          description = {
            <span>
              <p>
                Developed in Summer of quarantine, Tales of North Stream is a space shooter like game, where the player's objective is to survive as long as possible through infinite waves.
              </p>
              <p>This was first time I learned how to use a game loop in Java and work on a larger scale project.</p>
              <p>
                Notable features include 3 different minibosses, upgrades, and abilities! Bosses and enemy spawns will scale as the stages progress.
              </p>
            </span>
          }
          languages = "Java"
          color = "var(--secondary)"
          link = "https://github.com/kerwin145/TalesOfNorthStream"
        />
    </div>
  )
}

export default Projects