// import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
// import createPlaylist from './functions/createPlaylist'
import React, { useEffect, useState } from 'react'

// const sendRequest = function() {
//   const dataToSend = {
//     // username: props.user,
//     title: props.title,
//     // description: props.description,
//     // dataArr: props.dataArr,
//   }
//   fetch('/api', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(dataToSend)
//   }).then(
//     data => {
//       localStorage.setItem('profile-pic', data.profile)
//       localStorage.setItem('username', data.username)
//       localStorage.setItem('display-name', data.name)
//       sessionStorage.setItem('loggedIn', true)
//     }
//   )
  
// }

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const button = {
  borderRadius: '90px',
  // marginTop: '8em',
  paddingTop: '1.5vh',
  paddingBottom: '1.5vh',
  paddingLeft: '3vw',
  paddingRight: '3vw',
  background: '#1DB954',
  transition: 'all 0.2s ease',
  // display: 'flex',
  // justifyContent: 'center',
  // alignItems: 'center',
  color: '#FFFFFF',
  width: '60%',
  '&:hover': {
    backgroundColor: '#28a745',
  }
}


export default function PlaylistModal(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [checked, setChecked] = useState({ public: true, private: false });
  const [completed, setCompleted] = useState(false);
  const changeRadio = (e) => {
    setChecked(() => {
      return {
        public: false,
        private: false,
        [e.target.value]: true
      };
    });
  };
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // useEffect(() => {
    
  // },[completed])

  const sendRequest = function(allData) {
    const dataToSend = {
      // username: props.user,
      data: allData
      // description: props.description,
      // dataArr: props.dataArr,
    }
    fetch('/playlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataToSend)
    })
    .then(response => response.json())
    .then(
      response => {
        // console.log('Title: ' + response.resTitle)
        // console.log('Description: ' + response.resDescription)
        // console.log('User: ' + response.username)
        // setCompleted(true);
        localStorage.setItem('completed', response.completed)
        // localStorage.setItem('username', data.username)
        // localStorage.setItem('display-name', data.name)
        // sessionStorage.setItem('loggedIn', true)
      }
    )
    
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = localStorage.getItem('username')
    const index = props.index
    const visibility = checked.public
    const data = { title, description, user, index, visibility };
    sendRequest(data)
    // console.log(data);
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Button sx={button} onClick={handleOpen}>Create Playlist</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ color: '#FFFFFF' }}
      >
        <Box sx={style}>
          <h2>Create Playlist</h2>
          
          <form onSubmit={handleSubmit}>
            <h6>Enter Title</h6>
            <input 
              type='text' 
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <h6>Enter Description</h6>
            <textarea 
            type='text' 
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <h6>Select Visibility</h6>
            <div>
              <input 
                type="radio" 
                checked={checked.public}
                value="public" 
                onChange={changeRadio}
              /> Public
              <input 
                type="radio" 
                checked={checked.private}
                value="private" 
                onChange={changeRadio}
              /> Private
            </div>
            <div>
              <button>Submit</button>
            </div>
            {/* <select>
              <option value="public">Public</option>
              <option value="private">Private</option>
            </select> */}
          </form>
        </Box>
      </Modal>
    </div>
  );
}

// {/* <form onSubmit={this.handleSubmit}> */}
//           {/* <form onSubmit={ createPlaylist('TEST') }> */}
//           <form>
//             {/* <label>
//               Name: */}
//               {/* <input type="text" value={this.state.value} onChange={this.handleChange} /> */}
//               {/* <textarea value={() => {setTitle(value)}} onChange={this.handleChange} /> */}
//               <textarea />

//             {/* </label> */}
//             <input type="submit" value="Submit" />
//           </form>
//           {/* <Typography id="modal-modal-title" variant="h6" component="h2">
//             Text in a modal
//           </Typography>
//           <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//             Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//           </Typography> */}