import React from 'react'
import img2 from './pic.png';
import './About.css'
import { FaArrowLeft, FaArrowRight, FaSmileBeam, FaStar } from "react-icons/fa";

export const About = () => {
  return (
    <>
    <div className='container'>
    <div className='about'>
        <h1 className='name'>About Me</h1>
          <img src={img2} alt='image' className='img-fluid ' id='img2'  />
          <h2 id='name'>BHAVYA V K</h2>
          <p id='r1'>Web Developer</p>
          <p className="intro-text">
          I am a recent graduate with a strong passion for web development.My enthusiasm for crafting user-friendly and visually appealing websites led me to explore frameworks like React.js. I am dedicated to staying current with industry trends and continuously expanding my skill set to contribute effectively to web development projects.
          I have completed projects during my academic journey, showcasing my ability to apply theoretical knowledge to practical scenarios. As you explore my portfolio, you'll find examples of my work that highlight my creativity and determination to make a positive impact through web development.
        </p>
      
       
        <div className='container'>
        <h3>Birthday <span id='s1'>20.03.2003</span></h3>
                <h3>Address <span id='s1'>Kozhikode, Kerala</span></h3>
                <h3>Email <span id='s2'>bhavyavkshaju@gmail.com</span></h3>
                <h3>Nationality <span id='s2'>Indian</span></h3>
                <h3 className='h3'>Study <span id='s3'>University of Calicut</span></h3>
                <h3 className='h4'>Degree <span id='s3'>Graduate</span></h3>
                </div>
               
             <div className='container' id='para'>
              <h2 id='name'>Programming Skills</h2>
              <p className='intro-text'>Javascript:
              <progress id="file" value={75} max={100}></progress>
              75%</p>
              <p className='intro-text'>HTML:
              <progress id="file" value={80} max={100}></progress>
              80%</p>
              <p className='intro-text'>Java:
              <progress id="file" value={65} max={100}></progress>
              65%</p>
             </div>
     
       <div className='container' id='next'>
        <h2 id='name'>Knowledge</h2>
        <ul>
        <FaStar className='i'/>Bootstrap <br/>
        <FaStar className='i'/>React <br/>
       <FaStar className='i'/>Custom Website
        </ul>
       </div>
    </div> 
    </div>        
    </>
  )
}
