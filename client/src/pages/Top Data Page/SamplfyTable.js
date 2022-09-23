import React, {useState, useEffect} from 'react'
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from '@mui/material'
import {db} from '../../firebase-db'
import { ref, onValue } from 'firebase/database'

// const SamplfyTable = () => {
export class SamplfyTable extends React.Component {
  constructor(){
    super();
    this.state = {
      tableData: []
    }
  }

  componentDidMount(){
    const dbRef = ref(db, 'fullmtyl')

    onValue(dbRef, (snapshot)=>{
      let records = [];
      snapshot.forEach(childSnapshot => {
        let keyName = childSnapshot.key;
        let data = childSnapshot.val();
        records.push({"key": keyName, "data": data})
      })
      this.setState({tableData: records[0].data.items})
    })
  }

  render() {
    return (
      <TableContainer component={ Paper } sx={{ maxHeight: '600px' }}>
        <Table aria-label='simple table' stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Index</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Track</TableCell>
              <TableCell>Artist</TableCell>
              {/* <TableCell align='center'>Email</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
          {
            this.state.tableData.map((row,index) => {
              return(
                // row.external_urls.spotify
                <TableRow 
                  // onClick={() => window.location.assign("https://www.w3schools.com")}
                  onClick={() =>  window.open(row.external_urls.spotify, '_blank')}

                  // href={row.external_urls.spotify}
                  // key={row.id} 
                  // sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
                  // console.log(records[0].data.items)
                >      
                  <TableCell>{index + 1}</TableCell>
                  <TableCell><img src={row.album.images[2].url}></img></TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.artists[0].name}</TableCell>

                  {/* <TableCell>{row[0].data.items}</TableCell> */}
                  {/* <TableCell>{row.first_name}</TableCell>
                  <TableCell>{row.last_name}</TableCell> */}
                  {/* <TableCell align='center'>{row.email}</TableCell> */}
                </TableRow>
              )
            })
          }

          </TableBody>
          
        </Table>
      </TableContainer>
    )
  }
}

// const tableData = [{
//   "id": 1,
//   "first_name": "Silvanus",
//   "last_name": "Schriren",
//   "email": "sschriren0@scientificamerican.com",
//   "gender": "Male",
//   "ip_address": "175.211.240.241"
// }, {
//   "id": 2,
//   "first_name": "Vanessa",
//   "last_name": "Hegley",
//   "email": "vhegley1@washington.edu",
//   "gender": "Female",
//   "ip_address": "132.55.182.209"
// }, {
//   "id": 3,
//   "first_name": "Chelsey",
//   "last_name": "Bodycote",
//   "email": "cbodycote2@census.gov",
//   "gender": "Bigender",
//   "ip_address": "205.249.228.49"
// }, {
//   "id": 4,
//   "first_name": "Bernadette",
//   "last_name": "Partington",
//   "email": "bpartington3@merriam-webster.com",
//   "gender": "Agender",
//   "ip_address": "185.4.196.203"
// }, {
//   "id": 5,
//   "first_name": "Bill",
//   "last_name": "Hagergham",
//   "email": "bhagergham4@facebook.com",
//   "gender": "Female",
//   "ip_address": "55.63.182.43"
// }, {
//   "id": 6,
//   "first_name": "Brandon",
//   "last_name": "Ketteman",
//   "email": "bketteman5@xing.com",
//   "gender": "Male",
//   "ip_address": "28.93.117.229"
// }, {
//   "id": 7,
//   "first_name": "Carleton",
//   "last_name": "Labbati",
//   "email": "clabbati6@admin.ch",
//   "gender": "Male",
//   "ip_address": "236.128.253.76"
// }, {
//   "id": 8,
//   "first_name": "Caroljean",
//   "last_name": "Filisov",
//   "email": "cfilisov7@github.io",
//   "gender": "Female",
//   "ip_address": "236.170.118.144"
// }, {
//   "id": 9,
//   "first_name": "Carlyle",
//   "last_name": "Lavell",
//   "email": "clavell8@alexa.com",
//   "gender": "Male",
//   "ip_address": "125.86.238.88"
// }, {
//   "id": 10,
//   "first_name": "Virge",
//   "last_name": "Clew",
//   "email": "vclew9@youku.com",
//   "gender": "Male",
//   "ip_address": "172.140.80.2"
// }]


// W

// W

export default SamplfyTable