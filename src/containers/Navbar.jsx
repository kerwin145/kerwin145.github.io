import React from 'react'
import './Navbar.css'
import NavButton from '../components/NavButton'
import {Link} from 'react-router-dom';


const Navbar = () =>{
    return(
        <>
            <div className="__navbar">
                <div className="__navbar-menu">
                    <Link to = "/" onClick={() => window.scrollTo(0, 0)}>
                        <NavButton text = "Home" pathName = "/"/>
                    </Link>

                    <Link to = "/education" onClick={() => window.scrollTo(0, 0)}>
                        <NavButton text = "Education"/>
                    </Link>
                    <Link to = "/projects" onClick={() => window.scrollTo(0, 0)}>
                        <NavButton text = "Projects"/>
                    </Link>

                    <Link to = "/cse300" onClick={() => window.scrollTo(0, 0)}>
                        <NavButton text = "CSE300 Portfolio"/>
                    </Link>

                    <Link to = "/resume" onClick={() => window.scrollTo(0, 0)}>
                        <NavButton text = "Resume"/>
                    </Link>
                </div>

                <Link to = "/" onClick={() => window.scrollTo(0, 0)}>
                    <h3>Kelvin Cheng</h3>
                </Link>
            </div>
        </>
    )
}

export default Navbar