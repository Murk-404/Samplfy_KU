import React from "react";
import './features.css'
import useWindowDimensions from '../../hooks/window-dimensions'
import { isMobile } from "react-device-detect";

const Features = () => {
  const { height, width } = useWindowDimensions();

  return (
    <div id='feature-container'>
      <div id='feature-title' style={{fontSize: width <= 1000 ? '30pt' : (width / 1000) * 30 > 50 ? '50pt' : (width / 1000) * 30 + 'pt'}}>
      Available Features
        <div id='feature-title-bar'></div>
      </div>

      <div className='feature-header' style={{marginTop: '20pt'}}> Veiw all of your top songs! </div>

      <div className='feature-text-box'>
        <p>Samplfy lets you veiw your top listened-to songs, whether it be all-time, or more specific time-periods!</p>
      </div>

      <div className='feature-header'> Find your favorite artists! </div>

      <div className='feature-text-box'>
        <p>Samplfy allows you to veiw what artists you listen to the most!</p>
      </div>
      
      <div className='feature-header'> Create Playlists! </div>

      <div className='feature-text-box'>
        <p>With Samplfy, you're able to create playlists from the list of your top songs!</p>
      </div>
    </div>
  );
};
  
export default Features;