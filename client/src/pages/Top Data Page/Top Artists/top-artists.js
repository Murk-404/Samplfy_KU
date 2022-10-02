import './top-artists.css'
// import * as React from 'react';

import ArtistsTable from './ArtistsTable'
import React, {useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {db} from '../../../firebase-db'
import { ref, onValue } from 'firebase/database'
import { Bars } from 'react-loader-spinner'
import { ThemeProvider, createTheme, green } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      light: 'rgba(30, 215, 96, 0.7)',
      main: 'rgba(30, 215, 96, 0.7)',
      dark: 'rgba(30, 215, 96, 0.7)',
      contrastText: 'rgba(30, 215, 96, 0.7)'
    }
    // background: {
    //   paper: '#FFFFFF'
    // }
  },
  typography: {
    htmlFontSize: 10,
    fontWeightBold: "700",
    fontFamily: "Arial",
  },
  
})
function TopArtists() {

  const [index, setIndex] = useState("1");
  const [sendData1, setSendData1] = useState([]);
  const [sendData2, setSendData2] = useState([]);
  const [sendData3, setSendData3] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  function waitForLocalStorage(key, cb, timer) {
    if ( ! localStorage.getItem( key ) ) {
      // console.log((localStorage.getItem('username')))
      return timer = setTimeout(
        waitForLocalStorage.bind( null, key, cb ),
        100
      )
    }
    clearTimeout( timer )
    if ( typeof cb !== 'function' ) {
      return localStorage.getItem( key )
    }
    return cb( localStorage.getItem( key ) )
  }

  if(localStorage.getItem('username') == null){
    waitForLocalStorage('username', function (value) {
      setUser(value)
    });
  } else if (user == null) {
    setUser(localStorage.getItem('username'));
  } else {}

  useEffect(() => {
    // getUser().then(() => {
    if(user !== null){
      // console.log(user)
      var folder = 'top-artists'
      const dbRef = ref(db, `${user}/${folder}`)
      // const dbRef = ref(db, `fullmtyl`)
      onValue(dbRef, (snapshot)=>{
        let records = [];
        snapshot.forEach(childSnapshot => {
          let keyName = childSnapshot.key;
          let data = childSnapshot.val();
          if(keyName !== 'user-token'){records.push({"key": keyName, "data": data})}
        })
        setSendData1(records[0].data.items)
        setSendData2(records[1].data.items)
        setSendData3(records[2].data.items)
        // console.log(`This is the data: ${sendData1}`)
        setLoading({loading: true})
      })
    }
    else {}
    // })
  },[user])
  // const theme = createTheme({
  //   overrides: {
  //     TabList: {
  //       root: {
  //         color: '#FFFFFF',
  //         "&:hover": {
  //           backgroundColor: '#FFFFFF',
  //           color: '#FFFFFF'
  //         }
  //       }
  //     }
  //   }
  // })
  const handleChange = (event, newValue) => {
    setIndex(newValue);
  };
  return (
    <div className='container'>
      <ThemeProvider theme={theme}>
        <Box sx={{ typography: 'body1' }}>
          <TabContext value={index}>
            <Box sx={{ borderColor: '#FFFFFF', paddingTop: '3vh' }}>
              <TabList 
                // TabIndicatorProps={{style: { background: 'rgba(30, 215, 96, 0.7)' }}}
                
                textColor="primary"
                // indicatorColor="primary" 
                sx={{ 
                  fontWeight:'bold',
                  "& button": { backgroundColor: 'rgba(255, 255, 255, 0.0)' },
                  "& button:hover": { backgroundColor: 'rgba(255, 255, 255, 0.3)' },
                  // "& button:focus": { backgroundColor: 'rgba(255, 255, 255, 0.3)' },
                  "& button:active": { backgroundColor: 'rgba(30, 215, 96, 0.3)' },
                  // variant: "fullWidth"
                }} 
                // textColor='green'
                centered='true' onChange={handleChange}>
                {/* <Tab sx={{ width: '33%' }} label={<span style={{ color: 'rgba(30, 215, 96, 0.7)' }}>Short Term</span>} value="1" /> */}
                <Tab sx={{ width: '33%' }} label="Short Term" value="1" />
                {/* <Tab sx={{ marginLeft: '12vw', marginRight: '12vw' }} label="Medium Term" value="2" /> */}
                <Tab sx={{ width: '33%' }} label="Medium Term" value="2" />
                <Tab sx={{ width: '33%' }} label="All Time" value="3" />
              </TabList>
            </Box>
            <TabPanel sx={{ paddingLeft: '10vw' }} value="1">{!loading
              // ? <div style={{paddingTop:'25vh'}}>
              ? <div style={{paddingTop:'25vh'}}>
                  <Bars type="ThreeDots" color="#2BAD60" height="200" width="90%"/>
                </div>
              : <ArtistsTable artistsData={sendData3}/>
            }</TabPanel>
            <TabPanel sx={{ paddingLeft: '10vw' }} value="2">{!loading
              ? <div style={{paddingTop:'25vh'}}>
                  <Bars type="ThreeDots" color="#2BAD60" height="200" width="90%"/>
                </div>
              : <ArtistsTable artistsData={sendData2}/>
            }</TabPanel>
            <TabPanel sx={{ paddingLeft: '10vw' }} value="3">{!loading
              ? <div style={{paddingTop:'25vh'}}>
                  <Bars type="ThreeDots" color="#2BAD60" height="200" width="90%"/>
                </div>
              : <ArtistsTable artistsData={sendData1}/>
            }</TabPanel>
          </TabContext>
        </Box>
      </ThemeProvider>
    </div>
  )
  
}

export default TopArtists;