import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <p>Copyright &copy; 2023. All rights reserved.</p>
      <div className='owner'>
        <span>created by</span>
        <span className='owner-name'>Atanas Irikev</span>
      </div>
    </div>
  )
}

export default Footer
