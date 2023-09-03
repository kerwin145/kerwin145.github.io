import React, { useEffect, useState } from 'react'
import './Navbar.css'
import NavButton from '../components/NavButton'
import {Link} from 'react-router-dom';
import { Squash as Hamburger } from 'hamburger-react'


const Navbar = () =>{
    const [isOpen, setOpen] = useState(false)

    useEffect(()=>{
        const handleWindowResize = () => setOpen(false);
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, [])

    const NavbarLinks = (smallWindow) =>{
        return(
        <div className={`__navbar-links ${smallWindow ? isOpen ? "__navbar-links-show" : "__navbar-links-hide": ""}`}>
            <Link to = "/" onClick={() => window.scrollTo(0, 0)}>
                <NavButton text = "Home" pathName = "/"/>
            </Link>

            <Link to = "/education" onClick={() => window.scrollTo(0, 0)}>
                <NavButton text = "Education"/>
            </Link>
            <Link to = "/projects" onClick={() => window.scrollTo(0, 0)}>
                <NavButton text = "Projects"/>
            </Link>

            {/* <Link to = "/cse300" onClick={() => window.scrollTo(0, 0)}>
                <NavButton text = "CSE300 Portfolio"/>
            </Link> */}

            <Link to = "/resume" onClick={() => window.scrollTo(0, 0)}>
                <NavButton text = "Resume"/>
            </Link>
        </div>
        )
    }

    return(
        <>
            <div className="__navbar">
                <div className="__navbar-menu-hamburger">
                    <Hamburger className = "__navbar-hamburger" toggled={isOpen} toggle={() => {setOpen(!isOpen); console.log(isOpen)}} />
                    {NavbarLinks(true)}
                </div>

                <div className="__navbar-menu">
                    {NavbarLinks(false)}
                </div>

                {!isOpen && 
                    <Link className = "__navbar-name" to = "/" onClick={() => window.scrollTo(0, 0)}>
                        <h3>Kelvin Cheng</h3>
                    </Link>
                }
            </div>
            
        </>
    )
}

export default Navbar