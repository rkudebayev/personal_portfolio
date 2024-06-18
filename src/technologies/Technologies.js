import React from 'react'
import './Technologies.css'

function Technologies() {
  return (
    <div className='tech'>
      <h2>Technologies</h2>
      <hr />
      <div className='tech-stack'>
      <ul className='left-list'>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Git & GitHub</li>
        <li>React</li>
      </ul> 
      <ul>
        <li>Redux <i class="fa-brands fa-redux"></i></li>
        <li>Web Design</li>
        <li>Build Tools</li>
        <li>Data Structures</li>
        <li>Algorithms</li>
      </ul>
      </div>
    </div>
  )
}

export default Technologies
