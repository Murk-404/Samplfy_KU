import React, { useEffect, useState } from 'react'
import './ButtonComponent.css'

export default function ButtonComponent() {
  const CLIENT_ID = "53c0537d418540e08a9f37fa33e35052"
  const REDIRECT_URI = "http://localhost:3000"

  var SCOPES = "";
  const SCOPES_ARR = [
    "user-top-read",
    "user-library-read"
  ];

  SCOPES_ARR.forEach(function (key) {
    SCOPES = SCOPES + key + "%20";
  });
  SCOPES = SCOPES.slice(0, SCOPES.length-3);

  const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=" + CLIENT_ID + "&response_type=code&redirect_uri=" + REDIRECT_URI + "&scope=" + SCOPES;

  const [code, setCode] = useState("")

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get('code');
    let code_storage = window.localStorage.getItem("code")

    if (code && !code_storage) {
      window.localStorage.setItem("code", code)
      setCode(code)
      window.location.href = 'http://localhost:3000/songs'
    }
    else if (code && code_storage) {
      window.location.href = 'http://localhost:3000/songs'
    }

  }, [])
  return (
    <div className="row" id="button">
      <a id='button_text' href={AUTH_URL}> Login with Spotify </a>
    </div>
  )
}
