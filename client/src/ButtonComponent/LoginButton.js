import React, { useEffect, useState } from 'react'
import './LoginButton.css'
import { NavLink } from 'react-router-dom'


export default function LoginButton() {
  
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
    <div className="row" id="button">
      {/* <a id='button_text' href='/top-data'onClick={ sendRequest }> Login with Spotify </a> */}
      {/* <a id='button_text' style={{ cursor: 'pointer' }}onClick={ sendRequest }> Login with Spotify </a> */}
      <NavLink 
        to='/top-tracks' 
        id='button_text' 
        style={{ cursor: 'pointer' }} 
        onClick={ sendRequest }> Login with Spotify 
      </NavLink>

    </div>
  )
}
