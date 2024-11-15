import React from 'react'
import TProps from "../../component/testProps/testProps"
import niitLogo from "../../Assests/NIIT Logo.png";
// import itcore from "../../Assests/IT CORE LOGO.png"
import Student from "../../Assests/Student.png";
// import backImage from "../../Assests/backImage.png";
import background from "../../Assests/backImage.png";
const contactAbout = () => {
  return (
    <div>
        <TProps
         background={background}
         logo={niitLogo}
         about="contact"
         text= "laideschool"
         text1= "manlastlongletter"
         more="Explore more"
         student={Student}
        />
    </div>
  )
}

export default contactAbout