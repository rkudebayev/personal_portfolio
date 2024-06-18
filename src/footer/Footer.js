import React from 'react'
import "./Footer.css"
function Footer() {
  return (
    <div className='footer'>
      <div className='social-media'>
        <a href='https://www.instagram.com/ras_kdb/' target='_blank' rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
        <a href='https://github.com/rkudebayev' target='_blank' rel="noreferrer"><i className="fa-brands fa-github"></i></a>
        <a href='https://www.linkedin.com/in/kudebayevrassul/' target='_blank' rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a>
      </div>
      <div className='bottom'>
        <small>Made in Almaty <i className="fa-regular fa-heart"></i></small>
      </div>
    </div>
  )
}

export default Footer
