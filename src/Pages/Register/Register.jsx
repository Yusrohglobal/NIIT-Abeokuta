import React,  {useRef, useState} from 'react';
import classes from "./Register.module.css";
import emailjs from "@emailjs/browser";

const Result = () => {
  return <p>Your Application has been submitted successfully</p>
};


const Register = () => {
  const [result, showResult] = useState(false, true);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm(
      "service_ry8yfzg",
      "template_w6a3fis",
      form.current,
      "JwrpL52hIffJ2wiYB"
    )
    .then(
      (result) => {
        console.log(result.text);
        console.log(
          "Your Application has been submitted successfully"
        );
      },
      (error) => {
        console.log(error.text);
        console.log("Message not sent");
      }
    );

    form.current.reset();
    showResult(true);
  };
  setTimeout(() => {
    showResult(false);
  }, 5000);


  return (
    <div className={classes.container}>
        <div className={classes.hero}>
        <h3>COURSE REGISTRATION</h3>
        </div>
        <form ref={form} onSubmit={sendEmail}  className={classes.Register}>
          <h3>Welcome to NIIT Abeokuta</h3>
          <label for="Full_name" >Full name</label><br/>
          <input type="text" id="Full_Name" name="Full_Name" placeholder='Please enter your full name' required/><br/>

        <label for="Email" >Email</label><br/>
          <input type="" id="Email" name="Email" placeholder='Please enter your email address' required/><br/>

          <label for="Phone Number" >Phone Number</label><br/>
          <input type="Phone Number" id="Phone Number" name="Phone Number" placeholder required/><br/>

          <label for="Location" >Location</label><br/>
          <input type="text" id="Location" name="Location" placeholder='Please enter your house address' required/><br/>

          <label for="Gender" >Gender</label><br/>
          <input type="text" id="Gender" name="Gender" placeholder='Please select  your Gender' required/><br/>

          <label for="Course to Study" >Course to Study</label><br/>
          <input type="text" id="Course to Study" name="Course to Study" placeholder='Please select  your Course to Study' required/><br/>

          <label for="Mode of Attendance" >Mode of Attendance</label><br/>
          <input type="text" id="Mode of Attendance" name="Mode of Attendance" placeholder='Please select  your  prefered Mode' required/><br/>

          <div className={classes.submit}>
          <button>SUBMIT</button>
          </div>
          <div className={classes.myRow}>{result ? <Result /> : null} </div>
          </form>
    </div>
  );
};

export default Register