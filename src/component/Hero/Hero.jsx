import React from 'react'
import classes from "./Hero.module.css"
import niitLogo from "../../Assests/niitLogo.png"
import heroElement from "../../Assests/line.png";

const Hero = () => {
  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <div className={classes.hero}>
          <div className={classes.heroImage}>
            <img src={niitLogo} alt="niitLogo" />

          </div>
          <h2>LET YOUR CAREER GROWTH GO VIRAL</h2>
          <p>Welcome To The Digital Era. Get Yourself Skilled In Our Digital Marketing Program At NIIT Today.</p>

        </div>
      </div>
      <div className={classes.heroElement}>
        <img src={heroElement} alt="heroElement" />
      </div>
    </div>
  );
};

export default Hero