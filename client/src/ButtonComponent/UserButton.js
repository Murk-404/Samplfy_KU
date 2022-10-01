import React from 'react'
import { NavLink } from 'react-router-dom'
import './UserButton.css'
import blankImg from '..\\src\\images\\blank-user.png'


export default function UserButton() {
  function sendRequest() {
    fetch('/api').then(
      
      response => response.json()
      
    ).then(
      data => {
        data = data.slice(0, -2)
        localStorage.setItem('username', data)
        sessionStorage.setItem('loggedIn', true)
      }
    )
    
  }
  return (
    // <div className="row" id="button">
    //   {/* <a id='button_text' href='/top-data'onClick={ sendRequest }> Login with Spotify </a> */}
    //   {/* <a id='button_text' style={{ cursor: 'pointer' }}onClick={ sendRequest }> Login with Spotify </a> */}
      <NavLink 
        to='/top-tracks' 
        id='user-button'
        // style={{ cursor: 'pointer' }} 
        onClick={ sendRequest }><img src={blankImg} alt="Samplfy" id='blank-user'/><span id='blank-text'>Login with Spotify</span>
      </NavLink>

    // </div>
  )
}