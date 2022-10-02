import { NavLink } from 'react-router-dom'
import sendRequest from './functions/sendRequest'
import './UserButton.css'
import blankImg from '..\\src\\images\\spotify-icon-logo.svg'
import React, { useEffect, useState } from 'react'



export default function UserButton() {
  const [profile, setProfile] = useState(null);
  const [name, setName] = useState(null);
  const [loading, setLoading] = useState(false);
  function waitForLocalStorage(key, cb, timer) {
    if ( ! localStorage.getItem( key ) ) {
      // console.log((localStorage.getItem('username')))
      return timer = setTimeout(
        waitForLocalStorage.bind( null, key, cb ),
        100
      )
    }
    clearTimeout( timer )
    if ( typeof cb !== 'function' ) {
      return localStorage.getItem( key )
    }
    return cb( localStorage.getItem( key ) )
  }

  if(localStorage.getItem('profile-pic') == null){
    waitForLocalStorage('profile-pic', function (value) {
      setProfile(value)
    });
  } else if (profile == null) {
    setProfile(localStorage.getItem('profile-pic'));
  } else {}

  useEffect(() => {
    if(profile !== null){
      setLoading({loading: true})
      setName(localStorage.getItem('display-name'))
    }
    else {}
    // })
  },[profile])
  
  return (
    // <div className="row" id="button">
    //   {/* <a id='button_text' href='/top-data'onClick={ sendRequest }> Login with Spotify </a> */}
    //   {/* <a id='button_text' style={{ cursor: 'pointer' }}onClick={ sendRequest }> Login with Spotify </a> */}
    <>{!loading
      ?<NavLink 
        to='/top-tracks' 
        id='user-button'
        // style={{ cursor: 'pointer' }} 
        onClick={ sendRequest }>
          <img src={blankImg} alt="Samplfy" id='blank-user'/><span id='blank-text'>Login</span>
      </NavLink>
      :<NavLink 
        to='/' 
        id='user-button-logged'
        onClick={() => {sessionStorage.removeItem('loggedIn');localStorage.removeItem('username');localStorage.removeItem('profile-pic');localStorage.removeItem('display-name');window.location.replace('/')} }
        // style={{ cursor: 'pointer' }} 
        >
          {/* <img src={profile} alt="Samplfy" id='blank-user'/><span id='blank-text'>{name}</span> */}
          <img style={{ borderRadius:'50%' }} src={profile} alt="Samplfy" id='logged-user'/><span id='user-text'>{`${name}`}</span>

      </NavLink>
    }
    </>

    // </div>
  )
}