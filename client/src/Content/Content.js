import './Content.css'
import React from 'react';
import LogButton from '../ButtonComponent/LogButton';

function Content() {
  return (
    <>
      <div className="container-container" style={{marginTop: '10%'}}>
        {(sessionStorage.getItem("loggedIn") == false || !sessionStorage.getItem("loggedIn"))
        ?<p id='text'> <span id="welcome"> Samplfy </span> <br/>Please click below to start using Samplfy</p>
        :<p id='text'> <span id="welcome"> Samplfy </span> <br/>Would you like to log out?</p>
        }
        
      </div>
      <LogButton></LogButton>
    </>
  )
}

export default Content;