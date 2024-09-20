import React from 'react'
import  classes from "./Navbar.module.css";
import {Link} from "react-router-dom"
import niitLogo from "../../Assests/niitLogo.png"


const Navbar = () => {
  return (
    <div className={classes.container}>
      <header>
      <div className={classes.Logo}>
        <img src={niitLogo} alt="niitLogo"/>
      </div>
      <nav>
        <Link to="/">
        <li>Home</li>
        </Link>
        <Link to="/courses">
        <li>Courses</li>
        </Link>
        <Link to="/aboutus">
        <li>About Us</li>
        </Link>
        <Link to="/contactus">
        <li>Contact Us</li>
        </Link>
        <Link to="/Register">
        <button>Register</button>
        </Link>
      </nav>
      </header>
    </div>
  )
}

export default Navbar