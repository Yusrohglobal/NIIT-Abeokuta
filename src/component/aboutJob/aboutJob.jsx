import React from 'react'
import classes from "./aboutJob.module.css";
import Ready from "../../Assests/aboutImg.png";
import Down from "../../Assests/citizenImg.png"

const aboutJob = () => {
  return (
    <div className={classes.container}>
        <div className={classes.jobWrap}>
            <div className={classes.jobImage}>
                <div className={classes.Image1}>
                <img src={Ready} alt="Job Ready"/>
                </div>
                <div className={classes.Image2}>
                <img src={Down} alt="Job Ready"/>
                </div>
            </div>
            <div className={classes.jobText}>
                <p>NIIT is a leading Skills and Talent Development Corporation that is building a manpower pool for global industry requirements. The company, which was set up in 1981 to help the nascent IT industry overcome its human resource challenges, today ranks among the world's leading training companies owing to its vast and comprehensive array of talent development programs. With a footprint in over 30 countries, NIIT offers training and development solutions to Individuals, Enterprises and Institutions.</p>
                <p>With a strong focus on assuming leadership role in the Digital Learning World and to further accelerate NIIT's growth and profitability, the company has charted a focused business strategy to address the Digital Transformation needs for individuals and corporate customers by offering training and consulting to help them re-invent themselves & their organisations.</p>
                <p>Through NIIT Digital, learners are able to access their learning plans and all associated content and services through an intuitive dashboard on connected Desktops/ Tabs/ Smartphones. They are also able to attend LIVE Instructor-led classes by some of the best NIIT instructors, view recorded sessions, take quizzes, and interact with their instructors & peers, in addition to a host of other features.</p>
            </div>
        </div>
        <div className={classes.business}>
            <h3>NIIT has two main lines of business across the globe – Corporate Learning Group and Skills & Careers Business.</h3>
            <p>NIIT's Corporate Learning Group (CLG) offers Managed Training Services (MTS) to market-leading companies in North America, Europe, Asia, and Oceania. The Skills & Careers Business (SNC) delivers a diverse range of learning and talent development programs to millions of individual and corporate learners in areas including Digital Transformation, Banking, Finance & Insurance, Soft Skills, Business Process Excellence, Retail Sales Enablement, Management Education, Multi-Sectoral Vocational Skills, Digital Media Marketing, and new-age IT. NIIT has incubated, StackRoute, as a digital transformation partner for corporates to build multi-skilled full stack developers at scale.</p>
            <p>As the Most Trusted Training Brand in India for 5th year in a row (Brand Trust Report, 2017), NIIT's learning and talent development solutions, continue to receive widespread recognition globally. NIIT has been named among the Top 20 Training Outsourcing Companies for the past twelve consecutive years by Training Industry, Inc. USA. Further, leading Indian ICT journal Dataquest has conferred upon NIIT the 'Top Training Company' award successively for the past 20 years, since the inception of this category. NIIT has also been featured as the 'Most Respected Education Company'- 2016 by leading financial magazine, Business World.</p>
        </div>
    </div>
  )
}

export default aboutJob