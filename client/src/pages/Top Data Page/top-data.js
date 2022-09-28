import './top-data.css'
// import * as React from 'react';

import SamplfyTable from './SamplfyTable'
import React, {useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {db} from '../../firebase-db'
import { ref, onValue } from 'firebase/database'
import { Bars } from 'react-loader-spinner'
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: "dark",
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
function TopData() {

  const [index, setIndex] = useState("1");
  const [sendData1, setSendData1] = useState([]);
  const [sendData2, setSendData2] = useState([]);
  const [sendData3, setSendData3] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  function waitForLocalStorage(key, cb, timer) {
    if ( ! localStorage.getItem( key ) ) {
      console.log((localStorage.getItem('username')))
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
      console.log(user)
      const dbRef = ref(db, `${user}`)
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

  const handleChange = (event, newValue) => {
    setIndex(newValue);
  };
  return (
    <div style={{ color: '#FFFFFF' }} className='container'>
      <ThemeProvider theme={theme}>
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={index}>
            <Box sx={{ borderBottom: 2, borderColor: '#FFFFFF', paddingTop: '3vh' }}>
              <TabList sx={{ fontWeight:'bold' }} textColor='#FFFFFF' indicatorColor="#FFFFFF" centered='true' onChange={handleChange}>
                <Tab sx={{ marginRight: 'auto', marginLeft: 12 }} label="Short Term" value="1" />
                {/* <Tab sx={{ marginLeft: '12vw', marginRight: '12vw' }} label="Medium Term" value="2" /> */}
                <Tab label="Medium Term" value="2" />
                <Tab sx={{ marginLeft: 'auto', marginRight: 12 }} label="All Time" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1">{!loading
              ? <div style={{paddingTop:'25vh'}}>
                  <Bars type="ThreeDots" color="#2BAD60" height="200" width="100%"/>
                </div>
              : <SamplfyTable tableData={sendData3}/>
            }</TabPanel>
            <TabPanel value="2">{!loading
              ? <div style={{paddingTop:'25vh'}}>
                  <Bars type="ThreeDots" color="#2BAD60" height="200" width="100%"/>
                </div>
              : <SamplfyTable tableData={sendData2}/>
            }</TabPanel>
            <TabPanel value="3">{!loading
              ? <div style={{paddingTop:'25vh'}}>
                  <Bars type="ThreeDots" color="#2BAD60" height="200" width="100%"/>
                </div>
              : <SamplfyTable tableData={sendData1}/>
            }</TabPanel>
          </TabContext>
        </Box>
      </ThemeProvider>
    </div>
  )
  
}

export default TopData;