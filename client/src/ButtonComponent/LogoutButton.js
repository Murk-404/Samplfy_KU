import React from 'react'
import { NavLink } from 'react-router-dom'

export default function LogoutButton() {
  return (
    <div className="row" id="button">
      <NavLink 
        to='/' 
        id='button_text' 
        style={{ cursor: 'pointer' }} 
        onClick={() => {sessionStorage.removeItem('loggedIn');window.location.replace('/')} }> Logout of Samplfy 
      </NavLink>
    </div>
  )
}
