import React from 'react'
import './ButtonComponent.css'
// import { Link } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import { Button } from 'react-bootstrap'

const CLIENT_ID = "53c0537d418540e08a9f37fa33e35052";
const REDIRECT_URI = "http://localhost:3000"

var SCOPES = "";
const SCOPES_ARR = ["ugc-image-upload",
"user-modify-playback-state",
"user-read-playback-state",
"user-read-currently-playing",
"user-follow-modify",
"user-follow-read",
"user-read-recently-played",
"user-read-playback-position",
"user-top-read",
"playlist-read-collaborative",
"playlist-modify-public",
"playlist-read-private",
"playlist-modify-private",
"app-remote-control",
"streaming",
"user-read-email",
"user-read-private",
"user-library-modify",
"user-library-read"];

SCOPES_ARR.forEach(function (key) {
  SCOPES = SCOPES + key + "%20";
});
SCOPES = SCOPES.slice(0, SCOPES.length-3);

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=" + CLIENT_ID + "&response_type=code&redirect_uri=" + REDIRECT_URI + "&scope=" + SCOPES;

// console.log(AUTH_URL);
const code = new URLSearchParams(window.location.search).get('code');

export default function ButtonComponent() {
  return (
    // <Button variant="outline-dark" size='lg'>Get Started</Button>
    // <Button >Get Started</Button>
    // <a href={AUTH_URL}>
      // <button onClick={window.location.href={AUTH_URL}}>Get Started</button>
      <a className="login-link" href={AUTH_URL} onClick={ console.log(code) }><button>Get Started</button></a>

    // </a>

  )
}
