import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About Page/about';
import Home from './pages/Home Page/home';
import TopData from './pages/Top Data Page/top-data';
import Features from './pages/Features Page/features';
// import Login from './pages/Login/login';

// const CLIENT_ID = "53c0537d418540e08a9f37fa33e35052";
// const REDIRECT_URI = "http://localhost:3000/login"

// var SCOPES = "";
// const SCOPES_ARR = ["ugc-image-upload",
// "user-modify-playback-state",
// "user-read-playback-state",
// "user-read-currently-playing",
// "user-follow-modify",
// "user-follow-read",
// "user-read-recently-played",
// "user-read-playback-position",
// "user-top-read",
// "playlist-read-collaborative",
// "playlist-modify-public",
// "playlist-read-private",
// "playlist-modify-private",
// "app-remote-control",
// "streaming",
// "user-read-email",
// "user-read-private",
// "user-library-modify",
// "user-library-read"];

// SCOPES_ARR.forEach(function (key) {
//   SCOPES = SCOPES + key + "%20";
// });
// SCOPES = SCOPES.slice(0, SCOPES.length-3);

// const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=" + CLIENT_ID + "&response_type=code&redirect_uri=" + REDIRECT_URI + "&scope=" + SCOPES;

const Main = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home />}> </Route>
      <Route exact path='/features' element={<Features />}> </Route>
      <Route exact path='/about' element={<About />}> </Route>
      <Route exact path='/top-data' element={<TopData />}> </Route>
    </Routes>
  );
}

export default Main;