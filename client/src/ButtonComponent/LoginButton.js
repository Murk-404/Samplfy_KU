import React, { useEffect, useState } from 'react'
import './LoginButton.css'
import { NavLink } from 'react-router-dom'

export default function LoginButton() {
  
  // const [backendData, setBackendData] = useState([{}])

  function sendRequest() {
    // window.location.replace('http://localhost:3000/top-data')
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

  return (
    <div className="row" id="button">
      {/* <a id='button_text' href='/top-data'onClick={ sendRequest }> Login with Spotify </a> */}
      {/* <a id='button_text' style={{ cursor: 'pointer' }}onClick={ sendRequest }> Login with Spotify </a> */}
      <NavLink 
        to='/top-data' 
        id='button_text' 
        style={{ cursor: 'pointer' }} 
        onClick={ sendRequest }> Login with Spotify 
      </NavLink>

    </div>
  )
}
