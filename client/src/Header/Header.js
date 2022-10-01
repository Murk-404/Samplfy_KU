import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'
import logo from '..\\src\\images\\samplfy-logo-new.png'
import UserButton from '../ButtonComponent/UserButton'

function sendRequest() {
  fetch('/api').then(
    
    response => response.json()
    
  ).then(
    data => {
      data = data.slice(0, -2)
      // setBackendData(data)
      // localStorage.setItem('type', typeof(data))
      localStorage.setItem('username', data)
      sessionStorage.setItem('loggedIn', true)
      // console.log(backendData)
    }
  )
  
}

export default function Header() {
  return (
    <div id='header'>
      <div id='nav_bar'>
        <NavLink to='/'> <img src={logo} alt="Samplfy" id='logo'/> </NavLink>
        {/* <div class='nav_button_divider'></div> */}
        <NavLink to='/features'> <span class='nav_text'>Features</span> </NavLink>
        <NavLink to='/about'> <span class='nav_text'>About</span> </NavLink>
        {(sessionStorage.getItem("loggedIn") == false || !sessionStorage.getItem("loggedIn"))
        ? <NavLink id='login' to='/top-tracks' onClick={ sendRequest }> <span class='nav_text' id='login' >Top Tracks</span> </NavLink>
        : <NavLink to='/top-tracks'> <span class='nav_text'>Top Tracks</span> </NavLink>
        }
        <NavLink to='/top-artists'> <span class='nav_text'>Top Artists</span> </NavLink>
      </div>
      <div className='user-container'>
        <UserButton/>      
      </div>
    </div>
  )
}