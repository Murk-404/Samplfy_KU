import './top-tracks.css'
import PlaylistModal from './PlaylistModal/PlaylistModal';
import TracksTable from './TracksTable'
import React, {useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {db} from '../../../firebase-db'
import { ref, onValue } from 'firebase/database'
import { Bars } from 'react-loader-spinner'
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      light: 'rgba(30, 215, 96, 0.7)',
      main: 'rgba(30, 215, 96, 0.7)',
      dark: 'rgba(30, 215, 96, 0.7)',
      contrastText: 'rgba(30, 215, 96, 0.7)'
    }
  },
  typography: {
    htmlFontSize: 10,
    fontWeightBold: "700",
    fontFamily: "Arial",
  },
  
})
function TopTracks() {

  const [index, setIndex] = useState("1");
  const [sendData1, setSendData1] = useState([]);
  const [sendData2, setSendData2] = useState([]);
  const [sendData3, setSendData3] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  function waitForLocalStorage(key, cb, timer) {
    if ( ! localStorage.getItem( key ) ) {
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
    if(user !== null){
      var folder = 'top-tracks'
      const dbRef = ref(db, `${user}/${folder}`)
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
        setLoading({loading: true})
      })
    }
    else {}
  },[user])

  const handleChange = (newValue) => {
    setIndex(newValue);
  };
  return (
    <div style={{ color: '#FFFFFF' }} className='container'>
      <ThemeProvider theme={theme}>
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={index}>
          <Box sx={{ borderColor: '#FFFFFF', paddingTop: '3vh' }}>
              <TabList 
                textColor="primary"
                sx={{ 
                  fontWeight:'bold',
                  "& button": { backgroundColor: 'rgba(255, 255, 255, 0.0)' },
                  "& button:hover": { backgroundColor: 'rgba(255, 255, 255, 0.3)' },
                  "& button:active": { backgroundColor: 'rgba(30, 215, 96, 0.3)' },
                }} 
                centered='true' onChange={handleChange}>
                <Tab sx={{ width: '33%' }} label="Short Term" value="1" />
                <Tab sx={{ width: '33%' }} label="Medium Term" value="2" />
                <Tab sx={{ width: '33%' }} label="All Time" value="3" />
              </TabList>
            </Box>
            <TabPanel sx={{ paddingLeft: '10vw' }} value="1">{!loading
              ? <div style={{paddingTop:'25vh'}}>
                  <Bars type="ThreeDots" color="#2BAD60" height="200" width="90%"/>
                </div>
              : <TracksTable tracksData={sendData3}/>
            }</TabPanel>
            <TabPanel sx={{ paddingLeft: '10vw' }} value="2">{!loading
              ? <div style={{paddingTop:'25vh'}}>
                  <Bars type="ThreeDots" color="#2BAD60" height="200" width="90%"/>
                </div>
              : <TracksTable tracksData={sendData2}/>
            }</TabPanel>
            <TabPanel sx={{ paddingLeft: '10vw' }} value="3">{!loading
              ? <div style={{paddingTop:'25vh'}}>
                  <Bars type="ThreeDots" color="#2BAD60" height="200" width="90%"/>
                </div>
              : <TracksTable tracksData={sendData1}/>
            }</TabPanel>
          </TabContext>
          {!loading?<></>:<PlaylistModal index={index}/>} 
        </Box>
      </ThemeProvider>
    </div>
  )
}

export default TopTracks;