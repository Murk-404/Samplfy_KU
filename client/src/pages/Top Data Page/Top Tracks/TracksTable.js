import React from 'react'
import './TracksTable.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from '@mui/material'

const theme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    htmlFontSize: 10,
    fontWeightBold: "700",
    fontFamily: "Arial",
  },
  
})

export class TracksTable extends React.Component {
  
  render() {

    return (
      <ThemeProvider theme={theme}>
        
        <TableContainer component={ Paper } sx={{ 
          maxHeight: '70vh', 
          maxWidth: '80vw', 
          display: 'flex',
          '&::-webkit-scrollbar': {
            width: 20
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: '#FFFFFF'
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#808080',
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
              this.props.tracksData.map((row,index) => {
                return(
                  <TableRow>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell><img className='img' alt='' src={row.album.images[2].url}></img></TableCell>
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

export default TracksTable