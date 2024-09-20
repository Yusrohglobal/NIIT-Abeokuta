import React from 'react'
import classes from "./Sponsors.module.css";
import country from "../../Assests/country.png";
import learner from "../../Assests/learner.png";
import school from "../../Assests/school.png";
import faculty from "../../Assests/faculty.png";
import courses from "../../Assests/courses.png";
import university from "../../Assests/university.png";
import HDFC from "../../Assests/HDFC.png";
import Inoculus from "../../Assests/Inoculus.png";
import Sentienz from "../../Assests/Sentienz.png";
import HDB from "../../Assests/HDB.png";
import Solution from "../../Assests/Solution.png";
import Neptune from "../../Assests/Neptune.png";


const Sponsors = () => {
  return (
    <div className={classes.container}>
        <div className={classes.sponsor}>
            <div className={classes.icons}>
                <div className={classes.iconImage}>
                    <img src={country} alt="icon"/>
                </div>
                <div className={classes.iconText}>
                    <h5>PRESENT IN 40 COUNTIRES
                    WORLDWIDE</h5>
                </div>
            </div>
            <div className={classes.icons}>
                <div className={classes.iconImage}>
                    <img src={learner} alt="icon"/>
                </div>
                <div className={classes.iconText}>
                    <h5>IMPACTED OVER 35 MILLION LEARNERS</h5>
                </div>
            </div>
            <div className={classes.icons}>
                <div className={classes.iconImage}>
                    <img src={school} alt="icon"/>
                </div>
                <div className={classes.iconText}>
                    <h5>IMPACTED 17,000 SCHOOLS WORLDWIDE</h5>
                </div>
            </div>
            <div className={classes.icons}>
                <div className={classes.iconImage}>
                    <img src={faculty} alt="icon"/>
                </div>
                <div className={classes.iconText}>
                    <h5>WE HAVE EXPERIENCED FACULTIES</h5>
                </div>
            </div>
            <div className={classes.icons}>
                <div className={classes.iconImage}>
                    <img src={courses} alt="icon"/>
                </div>
                <div className={classes.iconText}>
                    <h5>INTERNATIONAL CERTIFICATION MAPPED COURSES</h5>
                </div>
            </div>
            <div className={classes.icons}>
                <div className={classes.iconImage}>
                    <img src={university} alt="icon"/>
                </div>
                <div className={classes.iconText}>
                    <h5>TIE-UP WITH TEESIDE UNIVERSITY</h5>
                </div>
            </div>
        </div>
        <div className={classes.sponsor2}>
        <div className={classes.iconImage}>
                    <img src={HDFC} alt="icon"/>
                </div>
                <div className={classes.iconImage}>
                    <img src={Inoculus} alt="icon"/>
                </div>
                <div className={classes.iconImage}>
                    <img src={Sentienz} alt="icon"/>
                </div>
                <div className={classes.iconImage}>
                    <img src={HDB} alt="icon"/>
                </div>
                <div className={classes.iconImage}>
                    <img src={Solution} alt="icon"/>
                </div>
                <div className={classes.iconImage}>
                    <img src={Neptune} alt="icon"/>
                </div>
        </div>
        <p>Disclaimer: The aforementioned companies have no obligation to recruit NIIT students each year</p>
        </div>
  )
}

export default Sponsors