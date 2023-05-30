import React from 'react'
import Avatarimg from '../componentes/Avatara/Avatarimg'
import logo from '../assets/img/DSlogo.png'

const Header = () => {
  return (
    <div className='Header'>
        <Avatarimg size={100} url={logo}/>
    </div>
  )
}

export default Header