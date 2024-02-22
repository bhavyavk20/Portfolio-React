import React from 'react'
import img3 from './a1.png';
import './Home.css'
export const Home = () => {
  return (
    <>
    <div className='container-fluid'>
        <div className='row flex-container'>
          <div className='col-md-6 heading'>
            <div className='head'>
              <h1 id='h1'>BHAVYA V K</h1>
              <p id='p1'>Front End Developer</p>
              <p id='p2'>I passionate about creating seamless and user friendly web applications.<br />I believe that technology has the power to transform industries and improve lives,<br />and i'm excited to be part of that change.</p>
            </div>
          </div>
          <div className='col-md-6'>
            <img src={img3} alt='image' className='img-fluid ms-lg-5 ' id='img1' />
          </div>
        </div>
      </div>
    </>
  )
}
