import React from 'react'
import Hero from"../../component/Hero/Hero";
import Sponsors from '../../component/Sponsors/Sponsors';
import AboutUs from '../../component/AboutHome/AboutHome';
import Courses from '../../component/Courses/Courses';
import Students from "../../component/Students/Students";
import Testimony from "../../component/Testimonials/Testimonials";

const Home = () => {
  return (
    <div className="container">
      <Hero/>
      <Sponsors/>
      <AboutUs/>
      <Courses/>
      <Students/>
      <Testimony/>
    </div>
  )
}

export default Home