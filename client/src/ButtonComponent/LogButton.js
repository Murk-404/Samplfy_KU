import sendRequest from './functions/sendRequest'
import logout from './functions/logout'
import './LogButton.css'
import { NavLink } from 'react-router-dom'
import icon from '../images/samplfy-icon-black.png'
import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";

export default function LogButton() {
  const navigate = useNavigate()

  const auth_code = new URLSearchParams(window.location.search).get('code');
  useEffect(() => {
    if((typeof auth_code) == 'string'){
      window.history.pushState({}, document.title, "/");
      console.log(auth_code)
      navigate("/top-tracks");
    }
  },[])
    
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
            id='button_text' 
            style={{ cursor: 'pointer' }} 
            onClick={ () => sendRequest() }> 
            Login with Spotify 
          </NavLink>
        </div>
        }
      </>
  )
}