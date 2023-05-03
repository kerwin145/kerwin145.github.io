import React, {Children} from 'react'
import './AboutSkillsPanel.css'


const AboutSkillsPanel = ({title, skills, iconDeco}) => {
  return (
    <div className="aboutSkillsPanel">
        <h3>{title}</h3>
        <div className="aboutSkillsPanel-divider"></div>
        <ul>
            {Children.map(skills, skill =>
                <li>{skill}</li>
            )}
        </ul>
        {/* <div className="aboutSkillsPanel-deco">
          <FontAwesomeIcon icon={iconDeco} />
        </div> */}
    </div>
  )
}

export default AboutSkillsPanel