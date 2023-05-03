import React from 'react'
import './Intro.css'
import homeMainImg from '../images/homeMainImg.JPG' 

const Intro = () => {
  return (
    <>
        <div className = "intro">
            <div className="intro-statement">
                <h1>Kelvin Cheng</h1>
                <h3>Computer Science and Applied Mathematics major</h3>
            </div>
            <div className="intro-img">
                <img src={homeMainImg} alt="" />
            </div>
        </div>
        
    </>
  )
}

export default Intro