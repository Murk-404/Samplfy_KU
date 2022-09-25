import './top-data.css'
// import * as React from 'react';

import SamplfyTable from './SamplfyTable'
import React, {useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function TopData() {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className='container'>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange}>
              <Tab label="Item One" value="1" />
              <Tab label="Item Two" value="2" />
              <Tab label="Item Three" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1"><SamplfyTable index={0}/></TabPanel>
          <TabPanel value="2"><SamplfyTable index={1}/></TabPanel>
          <TabPanel value="3"><SamplfyTable index={2}/></TabPanel>
        </TabContext>
      </Box>
      
      {/* <SamplfyTable index={this.state.tab}/> */}
      {/* <div style={{ color:'#FFFFFF', fontSize:'100px', textAlign:'center'}}>Top Songs</div> */}
      
    </div>
  )
  
}

// const TopData = () => {
//   return (
//     <div id='container'>
//       <div id='text'>
//         <button> Get Access Token </button>
//       </div>
//     </div>
//   );
// };
  
// import { Box, Table, Tabs, Tab } from '@mui/material'
// import { TabContext, TabPanel, TabList } from '@mui/lab'
// import { TabContext, TabList, TabPanel, Tabs, Tab } from '@mui/lab'


// import {
//   TableContainer,
//   Table,
//   TableHead,
//   TableBody,
//   TableRow,
//   TableCell,
//   Paper,
// } from '@mui/material'
// import {db} from './/../../firebase-db'

// export default TopData;