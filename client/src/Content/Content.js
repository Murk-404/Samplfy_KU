import { NavLink } from 'react-router-dom'
import './Content.css'
import React, { useState, useEffect } from 'react';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
// function fireTest() {
//   const [customerName, setCustomerName] = useState("");
//   const [customerPassword, setCustomerPassword] = useState("");
  
//   const submit = (e) => {
//     e.preventDefault();
//     db.collection("customersData").add({
//       name: customerName,
//       password: customerPassword,
//     });
  
//     setCustomerName("");
//     setCustomerPassword("");
//   };
// }

// export default class Content extends React.Component {

  // constructor(props) {
  //   super(props)
    
  // }
  
  // render() {

function Content() {
  // const CLIENT_ID = "+++++++++++++++++++++++++++++"
  // const REDIRECT_URI = "http://localhost:3000/login"
  // const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  // const RESPONSE_TYPE = "token"

  // const [token, setToken] = useState("")

  // useEffect(() => {
  //     const hash = window.location.hash
  //     let token = window.localStorage.getItem("token")

  //     if (!token && hash) {
  //         token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

  //         window.location.hash = ""
  //         window.localStorage.setItem("token", token)
  //     }

  //     setToken(token)

  // }, [])

  // const logout = () => {
  //     setToken("")
  //     window.localStorage.removeItem("token")
  // }
  // const code = new URLSearchParams(window.location.search).get('code');

  return (
    <div className="container-container">
      <div className="row" id="text">
        <p> <span id="welcome"> Samplfy </span> <br/>Please click below to start using Samplfy</p>
      </div>
      <ButtonComponent></ButtonComponent>
      {/* <div className="row" id="button">
        
        <a id='button_text' href={AUTH_URL}> Login with Spotify </a>

      </div> */}
    </div>
  )
}

export default Content;

//   }
// }