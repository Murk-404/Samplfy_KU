import './Content.css'
import React from 'react';
import LogButton from '../ButtonComponent/LogButton';

function Content() {
  return (
    <div className="container-container">
      {(sessionStorage.getItem("loggedIn") == false || !sessionStorage.getItem("loggedIn"))
      ?<div className="row" id="text">
        <p> <span id="welcome"> Samplfy </span> <br/>Please click below to start using Samplfy</p>
      </div>
      :<div className="row" id="text">
        <p> <span id="welcome"> Samplfy </span> <br/>Would you like to log out?</p>
      </div> 
      }
      <LogButton></LogButton>
    </div>
  )
}

export default Content;