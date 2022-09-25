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
    mode: "light",
    background: {
      paper: '#FFFFFF'
    }
  },
  typography: {
    htmlFontSize: 12,
    fontWeightBold: "800",
    fontFamily: "Arial",
  },
  
})

// const SamplfyTable = () => {
export class SamplfyTable extends React.Component {
  
  constructor(){
    super();
    this.state = {
      tableData: [],
      loading: false
    }
    // const [index, setIndex] = useState(0);
  }
  
  componentDidMount(){
    var ls = (localStorage.getItem('username'))
    // const dbRef = ref(db, `${ls}`)
    const dbRef = ref(db, `fullmtyl`)
    console.log(this.props.index)

    // console.log(typeof(ls))
    onValue(dbRef, (snapshot)=>{
      let records = [];
      snapshot.forEach(childSnapshot => {
        // console.log(childSnapshot)
        let keyName = childSnapshot.key;
        // console.log(keyName)
        let data = childSnapshot.val();
        if(keyName != 'user-token')
          records.push({"key": keyName, "data": data})
      })
      this.setState({tableData: records[this.props.index].data.items})
      this.setState({loading: true})
    })
  }

  render() {
    return (
      
      <ThemeProvider theme={theme}>
        {/* <button onClick={this.setState({index: this.state.index + 1})}>Click</button> */}
        {!this.state.loading 
        ? <div style={{paddingTop:'25vh'}}><Bars type="ThreeDots" color="#2BAD60" height="200" width="100%"/></div>
        : <TableContainer component={ Paper } sx={{ 
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
              this.state.tableData.map((row,index) => {
                return(
                  <TableRow 
                    // onClick={() =>  window.open(row.external_urls.spotify, '_blank')}
                  >
                    <TableCell>{index + 1}</TableCell>
                    <TableCell><img src={row.album.images[2].url}></img></TableCell>
                    <TableCell 
                      sx={{ cursor: 'pointer', fontWeight: 'bold' }} 
                      onClick={() =>  window.open(row.external_urls.spotify, '_blank')}
                    >{row.name}</TableCell>
                    <TableCell 
                      sx={{ cursor: 'pointer', fontWeight: 'bold' }} 
                      onClick={() =>  window.open(row.artists[0].external_urls.spotify, '_blank')}
                    >{row.artists[0].name}</TableCell>

                  </TableRow>
                )
              })
            }
            </TableBody>
            
          </Table>
        </TableContainer>}
      </ThemeProvider>
    )
  }
}

export default SamplfyTable