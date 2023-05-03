import React from 'react'
import './NavButton.css'

const navButton = ({text, pathName}) => {
  var classes = (window.location.pathname) === pathName? "navButton navButton-active" : "navButton"
  console.log(classes)

  console.log(window.location.pathname === pathName)
  return (
    <button className={classes}>{text}</button>
  )
}

export default navButton