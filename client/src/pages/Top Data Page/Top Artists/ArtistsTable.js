import React from 'react'
import './ArtistsTable.css'
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

export class ArtistsTable extends React.Component {
  
  render() {
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
                  <TableRow>
                    <TableCell sx={{ fontWeight: 'bold', fontSize: 35 }}>{index + 1}</TableCell>
                    {!(exist(row))
                    ?<TableCell></TableCell>
                    :<TableCell><img className='img' alt='' src={row.images[2].url}></img></TableCell>
                    }
                    <TableCell
                      sx={{ cursor: 'pointer', fontWeight: 'bold', width: '50%', fontSize: 35 }} 
                      onClick={() =>  window.open(row.external_urls.spotify, '_blank')}
                    >{row.name}</TableCell>
                    {!(row.hasOwnProperty('genres'))
                    ?<TableCell></TableCell>
                    :<TableCell sx={{ fontWeight: 'bold', width: '50%', fontSize: 35 }}>{((row.genres[0]).charAt(0).toUpperCase() + (row.genres[0]).slice(1))}</TableCell>
                    }
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