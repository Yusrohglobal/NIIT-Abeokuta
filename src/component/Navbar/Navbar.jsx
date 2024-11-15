import React, {useState} from 'react'
import  classes from "./Navbar.module.css";
import {Link} from "react-router-dom"
import niitLogo from "../../Assests/NIIT Logo.png"
import itcore from "../../Assests/IT CORE LOGO.png"
import { RxHamburgerMenu } from 'react-icons/rx';
import {MdClose} from "react-icons/md";

const Navbar = () => {
const [navOpen, setNavOpen] =useState(false);
const handleNavToggle = () => {
  setNavOpen(!navOpen);
};
const handleNavLinkClick = () => {
  setNavOpen(false);
};
  return (
    <div className={classes.container}>
      <header>
        {/* <div className={classes.niitLogos}> */}
      <div className={classes.logo}>
        <Link to="/" className={classes.navLink} omClick= {handleNavLinkClick}>
        <img src={niitLogo} alt="niitLogo"/>
        <img src={itcore} alt="itcore"/>
        </Link>
      </div>
      {/* <div className={classes.itcore}>
        <Link to="/" className={classes.navLink} omClick= {handleNavLinkClick}>
        <img src={itcore} alt="itcore"/>
        </Link>
      </div> */}
      {/* </div> */}
      <nav className={classes.navMenu}>
        <Link to="/" className={classes.navLink} omClick= {handleNavLinkClick}>
        <li>Home</li>
        </Link>
        <Link to="/courses" className={classes.navLink} omClick= {handleNavLinkClick}>
        <li>Courses</li>
        </Link>
        <Link to="/aboutus" className={classes.navLink} omClick= {handleNavLinkClick}>
        <li>About Us</li>
        </Link>
        <Link to="/contactus" className={classes.navLink} omClick= {handleNavLinkClick}>
        <li>Contact Us</li>
        </Link>
        <Link to="/Register" className={classes.navLink} omClick= {handleNavLinkClick}>
        <button>Register</button>
        </Link>
      </nav>
      <div className={classes.hamburger} onClick={handleNavToggle}>
        {navOpen ? (<RxHamburgerMenu className ={classes.Icons}/>
        ):(
          <MdClose className={classes.Icons}/>  
      )}
      </div>
      <div className={navOpen ? classes.active : classes.mobileMenu}>
      <nav className={classes.mobileNav}>
        <Link to="/" className={classes.navLink} omClick= {handleNavLinkClick}>
        <li>Home</li>
        </Link>
        <Link to="/courses" className={classes.navLink} omClick= {handleNavLinkClick}>
        <li>Courses</li>
        </Link>
        <Link to="/aboutus" className={classes.navLink} omClick= {handleNavLinkClick}>
        <li>About Us</li>
        </Link>
        <Link to="/contactus" className={classes.navLink} omClick= {handleNavLinkClick}>
        <li>Contact Us</li>
        </Link>
        <Link to="/Register" className={classes.navLink} omClick= {handleNavLinkClick}>
        <button>Register</button>
        </Link>
      </nav>
      <div className={classes.hamburger} onClick={handleNavToggle}>
        {navOpen ? (<RxHamburgerMenu className ={classes.Icons}/>
        ):(
          <MdClose className={classes.Icons}/>  
      )}
      </div>
      </div>
      </header>
    </div>
  )
}

export default Navbar