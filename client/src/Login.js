import React from 'react'
import { Container } from 'react-bootstrap'

const CLIENT_ID = "53c0537d418540e08a9f37fa33e35052";

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

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=" + CLIENT_ID + "&response_type=code&redirect_uri=http://localhost:3000&scope=" + SCOPES;

export default function Login() {
  return (
    <Container className="d-flex justify-content-center align-items-center"
    style={{ minHeight: "100vh"}}>
      <a className="btn btn-success btn-lg" href={AUTH_URL}>Login with Spotify</a>
    </Container>
  )
}
