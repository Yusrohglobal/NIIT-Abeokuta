import React from 'react'
import classes from ".//testProps.module.css";
// import niitLogo from "../../Assests/NIIT Logo.png";
// import itcore from "../../Assests/IT CORE LOGO.png"
// import Student from "../../Assests/Student.png";
// import backImage from "../../Assests/backImage.png";
import { Link } from 'react-router-dom';

const testProps = (props) => {
  return (
    <div className={classes.container}>
    <div className={classes.backImage}>
       <img src={props.background} alt="backImage"/>

     </div>
   <div className={classes.innerContainer}>
     <div className={classes.aboutText}>
         <div className={classes.logo}>
             <img src={props.Logo} alt="niitLogo"/>
             <img src={props.itcore} alt="itcore"/>
         </div>
         <h5>{props.about}</h5>
         <p>{props.text}</p>
         <p>{props.text1}</p>
         <Link to="/aboutus">
         <button>{props.more}</button>
         </Link>
     </div>
     <div className={classes.aboutImage}>
       <img src={props.Student} alt="Student"/>

     </div>
   </div>

 </div>
  )
}

export default testProps