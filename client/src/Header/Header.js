import sendRequest from '../ButtonComponent/functions/sendRequest'
import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'
import logo from '..\\src\\images\\samplfy-logo-new.png'
import UserButton from '../ButtonComponent/UserButton'
import logo2 from '../images/samplfy-icon-frame.png'
import Dropdown from './Dropdown/dropdown'
import useWindowDimensions from '../hooks/window-dimensions'

export default function Header() {
  const { height, width } = useWindowDimensions();
  var user_button_width = null;
  try {
    user_button_width = document.getElementById('user-button-logged').offsetWidth;
  } catch(err) {}

  const width1 = (1275 + (user_button_width != null ? user_button_width - 140 : 0))
  const width2 = (715 + (user_button_width != null ? user_button_width - 140 : 0))

  var header_content = (
    <div id='menu_buttons'>
      <NavLink to='/features' style={{textDecoration: 'none'}}> <span class='nav_text'>Features</span> </NavLink>
      <div className='text-divider'></div>
      <NavLink to='/about' style={{textDecoration: 'none'}}> <span class='nav_text'>About</span> </NavLink>
      <div className='text-divider'></div>
      {(sessionStorage.getItem("loggedIn") == false || !sessionStorage.getItem("loggedIn"))
      ? <NavLink id='login' to='/top-tracks' onClick={ () => sendRequest() } style={{ textDecoration: 'none'}}> <span class='nav_text'>Top Tracks</span> </NavLink>
      : <NavLink to='/top-tracks' style={{ textDecoration: 'none'}}> <span class='nav_text'>Top Tracks</span> </NavLink>
      }
      <div className='text-divider'></div>
      <NavLink to='/top-artists' style={{ textDecoration: 'none'}}> <span class='nav_text'>Top Artists</span> </NavLink>
      <div className='text-divider'></div>
      <div id='user-container'><UserButton id='user-button' just_text={width <= 425} /></div>
    </div>);

  if (width <= width1) {
    header_content = (    
      <Dropdown style={{
        float: width <= width2 ? 'left' : 'right',
        paddingLeft: width <= width2 ? '30px' : ''
        }}>
        {width <= width2 ? <NavLink to='/' style={{textDecoration: 'none'}}> <span class='nav_text'>Home</span> </NavLink> : ''}
        <NavLink to='/features' style={{textDecoration: 'none'}}> <span class='nav_text'>Features</span> </NavLink>
        <NavLink to='/about' style={{textDecoration: 'none'}}> <span class='nav_text'>About</span> </NavLink>
        {(sessionStorage.getItem("loggedIn") == false || !sessionStorage.getItem("loggedIn"))
        ? <NavLink id='login' to='/top-tracks' onClick={ () => sendRequest() } style={{ textDecoration: 'none'}}> <span class='nav_text'>Top Tracks</span> </NavLink>
        : <NavLink to='/top-tracks' style={{ textDecoration: 'none'}}> <span class='nav_text'>Top Tracks</span> </NavLink>
        }
        <NavLink to='/top-artists' style={{ textDecoration: 'none'}}> <span class='nav_text'>Top Artists</span> </NavLink>
      </Dropdown>
      );
  };
  
  return (
    <div id='nav_bar'>
      {width <= width2 ? '' : <NavLink to='/'> <img src={logo} alt="Samplfy" id='logo'/> </NavLink>}
      {width <= width1 ? <div id='user-container'> <UserButton id='user-button' just_text={width <= 425} /> </div> : ''}
      {header_content}
    </div>
  );
};