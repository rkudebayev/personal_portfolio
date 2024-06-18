import React from 'react'
import './Projects.css';
import screenshot from './screenshot.png';

function Projects() {
  return (
    <div>
      <div className='project'>

        <div className='header'>
            <h2>Projects</h2>
            <hr />
        </div>

        <div className='project1'>
            <p className='jaming'>JAMMMING</p>
            <div className='card'>
                    <img src={screenshot} alt='screenshot of landing page Jammming' />             
            <div className='card-body'>
            <p className='card-text'>
                Web application to easily access and add tracks to user's personal Spotify account's playlist. <span>
                <a href='https://jammming-add-playlist-to-spotify.netlify.app/' target='_blank' rel="noreferrer">
                Jammming
                </a></span> allows you to search a tracks, create playlist in your personal Spotify account,
                 add tracks to it, listen to track previews (if available).
            </p>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
