import React, {Children} from 'react'
import PropTypes from 'prop-types'
import './ProjectPanel.css'
import Slider from './Slider'

const ProjectsPanel = ({slides, name, development, description, languages, link, linkText, color}) => {
  let borderStr = color? `3px solid ${color}` : 'none'
  let linkNull = (link==null)
  console.log(linkNull)

  return (
    <div className="project">
      <div className="project-slides">
        <Slider slides = {slides}/>
      </div>
      <div className="project-content"style={{border: borderStr }}>
          <h3>{name}</h3>

          {development?
                    <small>Developed {development}</small>
          : <></>
          }

          {description}
          <div className="project-bottom">
            <p><b> Languages: </b>{languages}</p>
            {linkNull?
              <></>:
              <div className="project-link">
                <a href={link} target="_blank" rel="noopener noreferrer">{linkText}</a>
              </div>
              
            }
          </div>
      </div>
    </div>

  )


}

ProjectsPanel.defaultProps = {
  linkText: "Project Link"
}

export default ProjectsPanel