import React, { useEffect, useState } from 'react'
import './ButtonComponent.css'

export default function ButtonComponent() {
  
  const [backendData, setBackendData] = useState([{}])

  function sendRequest() {
    fetch('/api').then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
        localStorage.setItem('username', data)
        console.log(data)
        window.href = 'http://localhost:3000/top-data'
        // console.log(backendData)
      }
    )
    
  }

  return (
    <div className="row" id="button">
      {/* <a id='button_text' href='/top-data'onClick={ sendRequest }> Login with Spotify </a> */}
      <a id='button_text' onClick={ sendRequest }> Login with Spotify </a>
    </div>
  )
}
