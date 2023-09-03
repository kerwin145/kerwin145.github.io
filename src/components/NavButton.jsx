import React from 'react'
import './NavButton.css'

const navButton = ({text, pathName}) => {
  var classes = (window.location.pathname) === pathName? "navButton navButton-active" : "navButton"

  return (
    <button className={classes}>{text}</button>
  )
}

export default navButton