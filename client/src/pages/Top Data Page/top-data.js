import './top-data.css'
import SamplfyTable from './SamplfyTable'
import React, {useState, useEffect} from 'react'
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



export class TopData extends React.Component {
  constructor() {
    super()
    this.state = {
      tableData: []
    }
  }
  render() {
    return (
      <SamplfyTable />
    )
  }
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
  
export default TopData;