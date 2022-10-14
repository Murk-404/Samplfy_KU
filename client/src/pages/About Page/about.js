import React from "react";
import './about.css'
import useWindowDimensions from '../../hooks/window-dimensions'
  
const About = () => {
  const { height, width } = useWindowDimensions();

    return (
      <div id='about-container'>
        <div id='about-title' style={{fontSize: width <= 1000 ? '30pt' : (width / 1000) * 30 > 50 ? '50pt' : (width / 1000) * 30 + 'pt'}}>
        About Us
          <div id='about-title-bar'></div>
        </div>

        <div className='about-header'> What is Samplfy? </div>

        <div className='about-text-box'>
          <p>Samplfy was created by Tyler Fullmer and Eli Chapman for the 2022 KU High School Design Competition.</p>
        </div>

        <div className='about-header'> Why was Samplfy made? </div>

        <div className='about-text-box'>
          <p>We both have a passion for music, and use Spotify often. As such, we desired a better way to analyze what songs we listen to.</p>
        </div>

        <div className='about-header'> Creation of Samplfy </div>

        <div className='about-text-box'>
          <p>The project took over a month to complete and marks the creation of our first functional website.</p>
        </div>
      </div>
    );
};
  
export default About;