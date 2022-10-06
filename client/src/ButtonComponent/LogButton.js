import sendRequest from './functions/sendRequest'
import logout from './functions/logout'
import './LogButton.css'
import { NavLink } from 'react-router-dom'
import icon from '..\\src\\images\\samplfy-icon-black.png'
import React from 'react'


export default function LogButton() {

  return (
    <>
      {!(sessionStorage.getItem("loggedIn") == false || !sessionStorage.getItem("loggedIn"))
      ?<div className="row" id="button">
        <img src={icon} alt="Icon" id='icon'/>
        <NavLink 
          to='/' 
          id='button_text' 
          style={{ cursor: 'pointer' }} 
          onClick={ logout }> Logout of Samplfy 
        </NavLink>
      </div>
      :<div className="row" id="button">
        <img src={icon} alt="Icon" id='icon'/>
        <NavLink 
          to='/top-tracks' 
          id='button_text' 
          style={{ cursor: 'pointer' }} 
          onClick={ sendRequest }> 
          Login with Spotify 
        </NavLink>
      </div>
      }
    </>
    
    
  )
}