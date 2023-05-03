import React from 'react'
import './Education.css'
import { education_sbu, education_hhs} from '../images'

const Education = () => {
  return (
    <div className="education">
        <h1>Education</h1>
            <div className="education-panel">
                <img src={education_sbu} alt="SBU" />
                <div className="education-panel-content">
                    <h3>Stony Brook University</h3>
                    <span className='education-term'>
                        <small>Bachelors in Computer Science; Bachelors in Applied Mathematics and Statistics</small>
                        <small>2021-2025</small>
                    </span>
                    <small>Honors College; Computer Science Honors Program</small>
                    <ul><h5>Relevant Coursework</h5>
                        <li>Comp Sci A: Honors & Comp Sci B: Honors(CSE160 & CSE 260)</li>
                        <li>System Fundamentals (CSE220)</li>
                        <li>Technical Communications (CSE300)</li>
                        <li>Analysis of Algorithms: Honors(CSE385)</li>
                        <li>Introduction to Data Science: Honors (CSE351)</li>
                        <li>Finite Mathematical Structures (AMS301)</li>
                        <li>Survey of Probability and Statistics (AMS310)</li>
                    </ul>
                    <ul><h5>Awards</h5>
                        <li>Dean's List: Fall 2021, Spring 2022, Spring 2023</li>
                        <li>Academic Achievement Award 2023 </li>
                    </ul>
                    <h5>University Employment:</h5>
                    <p>Currently, I'm work for the Division of Information Technology, where I diagnose customer tech issues sourced from in-person walk-ins and over the phone calls. These issues range from wi-fi connectivity and password resets to computer setups. I was responsible for ensuring a resolution was reached by documenting and escalating the customer's requests to appropriate internal and external teams. I also work both on the field and behind the scenes, setting up and preparing physical devices for redeployment across campus.
                    </p>
                </div>
            </div>

            <div className="education-panel">

                <div className="education-panel-content">
                    <h3>Hewlett High School</h3>
                    <span className='education-term'>
                        <small>Advanced Regents Diploma</small>
                        <small>2017-2021</small>
                    </span>
                    <ul><h5>Relevant Coursework</h5>
                        <li>Independent Research</li>
                        <li>AP Calculus BC</li>
                        <li>AP Physics C</li>
                        <li>AP Computer Science A</li>
                        <li>Multivariable Calculus</li>
                        <li>AP English Literature and Composition</li>
                    </ul>
                    <ul><h5>Awards</h5>
                        <li>Bausch + Lomb Honorary Science Award (2021)</li>
                        <li>National Honor Society (2021)</li>
                        <li>Cerificate of Recognition for AP Computer Science (2020)</li>
                        <li>Modern Music Masters (2018- 2021)</li>
                    </ul>
                </div>
                <img src={education_hhs} alt="Hewlett HS" />

            </div>
    </div>
  )
}

export default Education