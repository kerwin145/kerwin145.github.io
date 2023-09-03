import React, {Children, useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import './ProjectPanel.css'
import Slider from './Slider'

const ProjectsPanel = ({slides, name, development, description, languages, link, linkText, color, reversed}) => {
  const [hidden, setHidden] = useState(false)
  const [headerStyle, setheaderStyle] = useState({})
  const [descPanelStyle, setDescPanelStyle] = useState({border: `3px solid ${color}`})
  const [contentStyle, setContentStyle] = useState({})
  const orientationStyle = reversed ? {} : {flexDirection:"row-reverse"}

  const manageHiddenWideScreen = (hidden) => {
    if(hidden){
      setheaderStyle({flexDirection:"column", width: "fit-content" })
      setDescPanelStyle(reversed ? 
        {
          border: "none", 
          flex: "1",
          transform: "translateX(-50%) rotate(-90deg)",
          transitionDelay: ".6s",
          marginLeft: "2rem",
          width: "0",
        } : 
        {
          border: "none", 
          flex: "1",
          transform: "translateX(50%)  rotate(90deg)",
          transitionDelay: ".6s",
          marginRight: "2rem",
          width: "0",
        }
      )
      setContentStyle({ maxHeight: "0", transition: "all .6s ease-in"})
    }
    else{     
      setheaderStyle({})
      setDescPanelStyle({border: `3px solid ${color}`})
      setContentStyle({transitionDelay: ".4s", })
    }
  }

  const manageHiddenSmallScreen = (hidden) => {
    setDescPanelStyle({border: `3px solid ${color}`})

    if(hidden){
      setheaderStyle({})
      setContentStyle({ maxHeight: "0", transition: "all .6s ease-in"})
    }else{
      setheaderStyle({})
      setContentStyle({})
    }
  }

  useEffect(()=>{
    if(window.innerWidth <= 1024)
        manageHiddenSmallScreen(hidden)
      else
        manageHiddenWideScreen(hidden)
  }, [hidden])

  useEffect(()=>{
    const handleWindowResize = () => {

      if(window.innerWidth <= 1024){
        manageHiddenSmallScreen(hidden)
      }
      else{
        manageHiddenWideScreen(hidden)
        console.log("Managing large change")
      }
      
      // console.log(window.screen.width)
    };

    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, [hidden])


  return (
    <div className="project"  style = {orientationStyle}>
        <div className="project-description"style={descPanelStyle}>
          <div className= "project-header" style = {headerStyle}>
            <h3>{name}</h3>
            <button className='project-minimize' onClick={() => {setHidden(!hidden)}}>{hidden ? <>Expand</> : <>Hide</>}</button>
          </div>

          <div className= "project-content" style = {contentStyle}>
            {development &&
                <small>Development: {development}</small>
            }
            {description}
            <div className="project-bottom">
              <p><b> Languages: </b>{languages}</p>
              {link?
                <div className="project-link">
                  <a href={link} target="_blank" rel="noopener noreferrer">{linkText}</a>
                </div>
                :
                <div className="project-link project-link-unavailable">
                  Link Unavailable
                </div>
                
              }
            </div>
          </div>
        </div>
        <div className="project-slides">
          <Slider slides = {slides}/>
        </div>
      </div>
  )
}

ProjectsPanel.defaultProps = {
  linkText: "Project Link",
  reversed: false
}

export default ProjectsPanel