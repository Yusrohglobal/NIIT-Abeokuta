import React from 'react'
import classes from "./Testimonials.module.css";
import Client from "../../Assests/adesina.png";

const Testimonials = () => {
    return (
        <div className={classes.container}>
            <div className={classes.innerContainer}>
                <h2>TESTIMONIALS</h2>
                <div className={classes.testimonySlide}>
                    <div className={classes.paragraph}>
                        <p>"Before coming to NIIT, I had only Microsoft Office and Graphic Design skills. But after spending 12 Months in NIIT, I have achieved a lot. With great joy, now I can prouldy say I have acquired Java programing and Web Development Skills."</p>
                    </div>
                    <div className={classes.wrap}>
                        <div className={classes.clientImage}>
                            <img src={Client} alt="Adesina" />
                        </div>
                        <div className={classes.clientName}>
                            <h5>Adesina Oluwayanmife Justified</h5>
                            <p>SOFTWARE ENGINEER</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials