import React from 'react'
import classes from "./AboutHome.module.css"
import niitLogo from "../../Assests/niitLogo.png";
import Student from "../../Assests/Student.png";
import backImage from "../../Assests/backImage.png";

const AboutHome = () => {
  return (
    <div className={classes.container}>
       <div className={classes.backImage}>
          <img src={backImage} alt="backImage"/>

        </div>
      <div className={classes.innerContainer}>
        <div className={classes.aboutText}>
            <div className={classes.logo}>
                <img src={niitLogo} alt="niitLogo"/>
            </div>
            <h5>About us</h5>
            <p>NIIT is a leading Skills and Talent Development Corporation that is building a manpower pool for global industry requirements.</p>
            <p>The company, which was set up in 1981 to help the nascent IT industry overcome its human resource challenges, today ranks among the world's leading training companies owing to its vast and comprehensive array of talent development programs.</p>
            <button>Learn More</button>
        </div>
        <div className={classes.aboutImage}>
          <img src={Student} alt="Student"/>

        </div>
      </div>

    </div>
  )
}

export default AboutHome