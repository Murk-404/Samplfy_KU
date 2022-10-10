import { NavLink } from 'react-router-dom'
import sendRequest from './functions/sendRequest'
import './UserButton.css'
import blankImg from '../images/spotify-icon-logo.svg'
import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';

export default function UserButton( props ) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
      <>
        {!loading?
          <NavLink 
          to='/top-tracks' 
          id='user-button'
          // style={{ cursor: 'pointer' }} 
          onClick={ sendRequest }>
            <img src={blankImg} alt="Samplfy" id='blank-user'/><span id='blank-text'>Login</span>
          </NavLink>:
        <div id='user_dropdown' style={props.style}>
          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <div id='user-button-logged'><img style={{ borderRadius:'50%' }} src={profile} alt="Samplfy" id='logged-user'/>{props.just_text ? '' : <span id='user-text'>{name.length > 10 ? name.substring(0, 10) + '...' : name}</span>}</div>
          </Button>
        <Menu
          id="user_menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
            'float': 'right',
          }}
        >
          <NavLink 
          to='/' 
          id='logout-user-button'
          onClick={() => {sessionStorage.removeItem('loggedIn');localStorage.removeItem('username');localStorage.removeItem('profile-pic');localStorage.removeItem('display-name');window.location.replace('/')} }
          >
            Logout
          </NavLink>
        </Menu>
      </div>}
    </>
    // <div className="row" id="button">
    //   {/* <a id='button_text' href='/top-data'onClick={ sendRequest }> Login with Spotify </a> */}
    //   {/* <a id='button_text' style={{ cursor: 'pointer' }}onClick={ sendRequest }> Login with Spotify </a> */}
    
    // </div>
  )
}