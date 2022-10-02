import React, {useState, useEffect} from 'react'
import './ArtistsTable.css'
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
// import {db} from '../../firebase-db'
// import { ref, onValue } from 'firebase/database'

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
function exist(row) {
  try {
    // DO NOT REMOVE THIS CONSOLE LOG
    console.log(row.images[2].url)
    return true;
  } catch {
    return false;
  }
}
// const SamplfyTable = () => {
export class ArtistsTable extends React.Component {
  
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
    // console.log(this.props.artistsData)

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
                <TableCell>Cover</TableCell>
                <TableCell>Artist</TableCell>
                <TableCell>Genre</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {
              this.props.artistsData.map((row,index) => {
                return(
                  <TableRow 
                    // onClick={() =>  window.open(row.external_urls.spotify, '_blank')}
                  >
                    <TableCell sx={{ fontWeight: 'bold', fontSize: 35 }}>{index + 1}</TableCell>
                    {/* {!(Object.keys(row.images).some(key => key === 2)) */}
                    {!(exist(row))
                    ?<TableCell></TableCell>
                    :<TableCell><img className='img' alt='' src={row.images[2].url}></img></TableCell>
                    }
                    {/* <TableCell><img className='img' alt='' src={row.images[0].url}></img></TableCell> */}
                    <TableCell
                      sx={{ cursor: 'pointer', fontWeight: 'bold', width: '50%', fontSize: 35 }} 
                      onClick={() =>  window.open(row.external_urls.spotify, '_blank')}
                    >{row.name}</TableCell>
                    {!(row.hasOwnProperty('genres'))
                    ?<TableCell></TableCell>
                    :<TableCell sx={{ fontWeight: 'bold', width: '50%', fontSize: 35 }}>{((row.genres[0]).charAt(0).toUpperCase() + (row.genres[0]).slice(1))}</TableCell>
                    }

                    {/* {(!row.genres['0'])
                    ?<TableCell 
                    sx={{ cursor: 'pointer', fontWeight: 'bold', width: '30%' }} 
                    // onClick={() =>  window.open(row.artists[0].external_urls.spotify, '_blank')}
                    > No Genre </TableCell>
                    :<TableCell 
                      sx={{ cursor: 'pointer', fontWeight: 'bold', width: '30%' }} 
                      // onClick={() =>  window.open(row.artists[0].external_urls.spotify, '_blank')}
                    >{row.genres['0']}</TableCell>
                    } */}

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

export default ArtistsTable