import React from 'react'
import './Navbar.css'
import logo from '../Assets/Images/thopstechLogo.png'
function Navbar() {
  return (
    <div className='Navbar' height='50px' marginLeft='10%' marginright='10%'  >
        <div className='brand'>
            <div className='logo'>
            <img src={logo}/>
            </div> 
            <div>
            <p className='companyname'>ThopsTech</p>
            </div>
        </div>
        <div>
            <ul className='links'>
                <a href='#'>Services</a>
                <a href='#'>Management</a>
                <a href='#'>Placements</a>
                <a href='#'>Contact us</a>
            </ul>
        </div>   
    </div>
  )
}

export default Navbar
