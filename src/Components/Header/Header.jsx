import React from 'react'
import './Header.css'

const Header = ({heading,subHeading}) => {
  return (
    <div className='Header'>
        <h1>{heading}</h1>
        <p>{subHeading}</p>
    </div>
  )
}

export default Header