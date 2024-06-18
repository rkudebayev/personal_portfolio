import React from 'react';
import './About.css';
import photo from './pic1.JPG'

function About() {

  return (
    <div className='about'>
      <div className='text'>
       <h1>Hello world!</h1>
       <hr />
        <p>I'm Rasul, Front-End developer from <i className="fa-solid fa-location-dot"></i> Almaty, Kazakhstan
             fueled by curiosity and creativity. 
             My journey started with Codecademy, guiding me through HTML, CSS, and JavaScript.
             In this fast-paced field, I embrace challenges as opportunities to learn and grow. 
             Staying on top of the latest trends is as exciting to me as writing code.
          </p>
      </div>
      <div>
        <img src={photo} alt='Rasul standing in Turkey' />
      </div>
    </div>
  )
}

export default About;
