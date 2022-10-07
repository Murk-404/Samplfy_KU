import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About Page/about';
import Home from './pages/Home Page/home';
import TopTracks from './pages/Top Data Page/Top Tracks/top-tracks';
import TopArtists from './pages/Top Data Page/Top Artists/top-artists';
import Features from './pages/Features Page/features';

const Main = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home />}> </Route>
      <Route exact path='/features' element={<Features />}> </Route>
      <Route exact path='/about' element={<About />}> </Route>
      <Route exact path='/top-tracks' element={<TopTracks />}> </Route>
      <Route exact path='/top-artists' element={<TopArtists />}> </Route>
    </Routes>
  );
}

export default Main;