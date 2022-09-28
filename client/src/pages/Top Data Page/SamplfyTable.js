import React, {useState, useEffect} from 'react'
import './SamplfyTable.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Bars } from 'react-loader-spinner'
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

const theme = createTheme({
  palette: {
    mode: "dark",
    // background: {
    //   paper: '#FFFFFF'
    // }
  },
  typography: {
    htmlFontSize: 12,
    fontWeightBold: "600",
    fontFamily: "Arial",
  },
  
})

// const SamplfyTable = () => {
export class SamplfyTable extends React.Component {
  
  constructor(){
    super();
    // this.state = {
    //   newData: [],
    //   // loading: false
    // }
    // const [index, setIndex] = useState(0);
  }
  
  // componentDidMount(){
  //   var ls = (localStorage.getItem('username'))
  //   // const dbRef = ref(db, `${ls}`)
  //   const dbRef = ref(db, `fullmtyl`)
  //   console.log(this.props.index)

  //   // console.log(typeof(ls))
  //   onValue(dbRef, (snapshot)=>{
  //     let records = [];
  //     snapshot.forEach(childSnapshot => {
  //       // console.log(childSnapshot)
  //       let keyName = childSnapshot.key;
  //       // console.log(keyName)
  //       let data = childSnapshot.val();
  //       if(keyName != 'user-token')
  //         records.push({"key": keyName, "data": data})
  //     })
  //     this.setState({tableData: records[this.props.index].data.items})
  //     this.setState({loading: true})
  //   })
  // }
  // componentDidMount(){
  //   if(this.props.loading){
  //     this.setState({newData: this.props.tableData})
  //   }
  // }
  render() {
    // console.log(this.props.tableData)
    // console.log(this.state.newData)

    return (
      <ThemeProvider theme={theme}>
        
        <TableContainer component={ Paper } sx={{ 
          maxHeight: '70vh', 
          maxWidth: '80vw', 
          '&::-webkit-scrollbar': {
            width: 20
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: '#FFFFFF'
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#808080',
            // borderRadius: 2
          }
        }}>
          <Table aria-label='simple table' stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>Index</TableCell>
                <TableCell>Artwork</TableCell>
                <TableCell>Track</TableCell>
                <TableCell>Artist</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {
              this.props.tableData.map((row,index) => {
                return(
                  <TableRow 
                    // onClick={() =>  window.open(row.external_urls.spotify, '_blank')}
                  >
                    <TableCell>{index + 1}</TableCell>
                    <TableCell><img className='img' src={row.album.images[2].url}></img></TableCell>
                    <TableCell 
                      sx={{ cursor: 'pointer', fontWeight: 'bold', width: '50%' }} 
                      onClick={() =>  window.open(row.external_urls.spotify, '_blank')}
                    >{row.name}</TableCell>
                    <TableCell 
                      sx={{ cursor: 'pointer', fontWeight: 'bold', width: '30%' }} 
                      onClick={() =>  window.open(row.artists[0].external_urls.spotify, '_blank')}
                    >{row.artists[0].name}</TableCell>

                  </TableRow>
                )
              })
            }
            </TableBody>
            
          </Table>
        </TableContainer>
      </ThemeProvider>
    )
  }
}

export default SamplfyTable