import React, {Component} from 'react'
import classes from "./Hero.module.css"
import niitLogo from "../../Assests/NIIT Logo.png"
import itcore from "../../Assests/IT CORE LOGO.png"
import heroElement from "../../Assests/line.png";
import Slider from "react-slick";

export default class Hero extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      fade: true,
      autoplaySpeed: 3000,
      cssEase: "linear",
    };
  return (
    <div className={classes.container}>
      <Slider {...settings} className={classes.slider}>
      <div className={classes.innerContainer}>
        <div className={classes.hero}>
          <div className={classes.heroImage}>
            <img src={niitLogo} alt="niitLogo" />
            <img src={itcore} alt="itcore"/>
          </div>
          <h2>LET YOUR CAREER GROWTH GO VIRAL</h2>
          <p>Welcome To The Digital Era. Get Yourself Skilled In Our Digital Marketing Program At NIIT Today.</p>

        </div>
      </div>
      <div className={classes.innerContainer1}>
        <div className={classes.hero}>
          {/* <div className={classes.heroImage}>
            <img src={niitLogo} alt="niitLogo" />

          </div> */}
          <h2>AN INVESTMENT IN KNOWLEDGE PAYS THE BEST INTEREST.</h2>
          <p>Education is not just about going to school and getting a degree. It's about widening your
          knowledge and absorbing the truth about life. Knowledge is power.</p>

        </div>
      </div>
      <div className={classes.innerContainer2}>
        <div className={classes.hero}>
          {/* <div className={classes.heroImage}>
            <img src={niitLogo} alt="niitLogo" />

          </div> */}
          <h2>TRANSFORM YOURSELF FROM A GRADUATE TO A FULL STACK PROFESSIONAL</h2>
          <p>join our post graduate programme in FULL STACK java programming and get job-ready with NIIT Digital.</p>

        </div>
      </div>
      </Slider>
      <div className={classes.heroElement}>
      <img src={heroElement} alt="heroElement" />
      </div>
    </div>
  );
};
};