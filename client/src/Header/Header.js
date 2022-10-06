import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'
import logo from '..\\src\\images\\samplfy-logo-new.png'
import UserButton from '../ButtonComponent/UserButton'
import logo2 from '../images/samplfy-icon-frame.png'
import Dropdown from './Dropdown/dropdown'
import useWindowDimensions from '../hooks/window-dimensions'
import { useState } from 'react'

export default function Header() {
  const { height, width } = useWindowDimensions();
  const [loggedIn, setLoggedIn] = useState(false)
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
        setLoggedIn(true)
        // console.log(backendData)
      }
    )
    
  }
  var logo_content = logo;
  var header_content = (
    <div id='menu_buttons'>
      <NavLink to='/features' style={{textDecoration: 'none'}}> <span class='nav_text'>Features</span> </NavLink>
      <div className='text-divider'></div>
      <NavLink to='/about' style={{textDecoration: 'none'}}> <span class='nav_text'>About</span> </NavLink>
      <div className='text-divider'></div>
      {!loggedIn
      ? <NavLink to='/top-tracks' style={{ textDecoration: 'none'}}> <span class='nav_text'>Top Tracks</span> </NavLink>
      : <NavLink id='login' to='/top-tracks' onClick={ sendRequest } style={{ textDecoration: 'none'}}> <span class='nav_text'>Top Tracks</span> </NavLink>
      }
      <div className='text-divider'></div>
      <NavLink to='/top-artists' style={{ textDecoration: 'none'}}> <span class='nav_text'>Top Artists</span> </NavLink>
      <div className='text-divider'></div>
      <div id='user-container'>
        <UserButton id='user-button' />      
      </div>
    </div>);

  if (width <= 1275) {
    header_content = (    
      <Dropdown>
        <NavLink to='/features' style={{textDecoration: 'none'}}> <span class='nav_text'>Features</span> </NavLink>
        <NavLink to='/about' style={{textDecoration: 'none'}}> <span class='nav_text'>About</span> </NavLink>
        {!loggedIn
        ? <NavLink to='/top-tracks' style={{ textDecoration: 'none'}}> <span class='nav_text'>Top Tracks</span> </NavLink>
        : <NavLink id='login' to='/top-tracks' onClick={ sendRequest } style={{ textDecoration: 'none'}}> <span class='nav_text'>Top Tracks</span> </NavLink>
        }
        <NavLink to='/top-artists' style={{ textDecoration: 'none'}}> <span class='nav_text'>Top Artists</span> </NavLink>
      </Dropdown>
      );
  };

  if (width <= 715) {
    logo_content = logo2;
  };

  return (
    <div id='nav_bar'>
      <NavLink to='/'> <img src={logo_content} alt="Samplfy" id='logo'/> </NavLink>
      {width <= 1275 ? <div id='user-container' style={{  marginTop: '14pt'}}> <UserButton id='user-button' /> </div> : ''}
      {header_content}
    </div>
  );
};