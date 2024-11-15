import React from 'react';
import classes from "./Footer.module.css";
import niitLogo from "../../Assests/NIIT Logo.png"
import itcore from "../../Assests/IT CORE LOGO.png"
import Facebook from "../../Assests/Facebook.png";
import Twitter from "../../Assests/Twitter.png";
import Instagram from "../../Assests/Instagram.png";
import Youtube from "../../Assests/Youtube.png";
import Likedln from "../../Assests/Likedln.png";
import { TiLocation } from "react-icons/ti";
import { IoCall } from "react-icons/io5";
import { PiPaperPlaneTiltFill } from "react-icons/pi";
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className={classes.container}>
        <footer>
      <hr />
      <div className={classes.footWrap}>
          <div className={classes.footLeft}>
            <Link to="/">
            <img src={niitLogo} alt="niitLogo" />
            <img src={itcore} alt="itcore"/>
            </Link>
            <p>NIIT Agbara, Suite E, Agbara Estate shopping Mall, Beside Stanbic IBTC Beach Town, Agbara.</p>
            <p><TiLocation />Beach Town, Agbara</p>
            <p><IoCall />08094355000, 08094355003</p>
            <p>www.niitagbara.com</p>
            <div className={classes.socials}>
              <div className={classes.media}>
                <img src={Facebook} alt="Facebook" />
              </div>
              <div className={classes.media}>
                <img src={Twitter} alt="Twitter" />
              </div>
              <div className={classes.media}>
                <img src={Instagram} alt="Instagram" />
              </div>
              <div className={classes.media}>
                <img src={Youtube} alt="Youtube" />
              </div>
              <div className={classes.media}>
                <img src={Likedln} alt="Likedln" />
              </div>
            </div>
          </div>
          <div className={classes.footRight}>
            <div className={classes.Info}>
              <h5>Menu</h5>
              <p>Home</p>
              <p>Courses</p>
              <p>Blog</p>
              <p>About Us</p>
              <p>Contact Us</p>
              <p>Terms & Policy</p>
            </div>
            <div className={classes.Info}>
              <h5>Account</h5>
              <p>My Account</p>
              <p>Checkout</p>
              <p>My Cart</p>
              <p>My catalog</p>
            </div>
            <div className={classes.Info}>
              <h5>Stay Connected</h5>
              <p>Facebook</p>
              <p>Instagram</p>
              <p>Twitter</p>
            </div>
          </div>
          <div className={classes.Subscribe}>
            <h5>Stay Updated</h5>
            <form>
              <input type="email" name="email" placeholder="Enter your email" />
              <button type="submit"><PiPaperPlaneTiltFill /></button>
            </form>
          </div>
      </div>
      <div className={classes.copyright}>
        <hr/>
        <p>Copyright © NIIT 2024 All rights reserved</p>
      </div>
        </footer>
    </div>
  )
}

export default Footer