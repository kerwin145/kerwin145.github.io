import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDiscord, faInstagram, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons'

const footer = () => {
  return (
    <>
        <div className="footer">
            <div className="footer-info">
                <a href="/">  
                    <h1>Kelvin Cheng</h1>
                </a>
                <p>B.S. Computer Science | Applied Math and Stastics</p>
                <p>Email: <a href="mailto:kelvin.cheng@stonybrook.edu">kelvin.cheng@stonybrook.edu</a></p>
            </div>
            <div className="footer-socials">   
                <p>—Reach me at—</p>          
                <div className="footer-socials-linksContainer">
                    <a href="https://github.com/kerwin145">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://discordapp.com/users/347849505141555201">
                        <FontAwesomeIcon icon={faDiscord} />
                    </a>
                    <a href="https://www.instagram.com/kelvinrcheng/">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="
                    https://www.facebook.com/people/Kelvin-Cheng/pfbid0vmramBCxQ32tthqhSBpdWN2tzmY1nd3V49SzxsH5LSfndeWJe2t69MdnyPwUrQwkl/">
                        <FontAwesomeIcon icon={faFacebook}/>
                    </a>
                </div>
            </div>

        </div>
    </>
  )
}

export default footer