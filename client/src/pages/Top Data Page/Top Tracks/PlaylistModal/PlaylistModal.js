// import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import React, { useState } from 'react'
import { Bars } from 'react-loader-spinner'

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
  paddingTop: '1.5vh',
  paddingBottom: '1.5vh',
  paddingLeft: '3vw',
  paddingRight: '3vw',
  background: '#28a745',
  transition: 'all 0.2s ease',
  color: '#FFFFFF',
  width: '60%',
  '&:hover': {
    backgroundColor: '#1DB954',
  }
}


export default function PlaylistModal(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
    setStatus(1);
  }

  const [checked, setChecked] = useState({ public: true, private: false });
  const [status, setStatus] = useState(1);
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

  const sendRequest = function(allData) {
    const dataToSend = {
      data: allData
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
        setStatus(3)
        setTitle('')
        setDescription('')
        setChecked({ public: true, private: false })
        localStorage.setItem('completed', response.completed)
      }
    )
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(2)
    const user = localStorage.getItem('username')
    const index = props.index
    const visibility = checked.public
    const data = { title, description, user, index, visibility };
    sendRequest(data)
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
        {(status === 1)
        ?<Box sx={style}>
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
          </form>
        </Box>
        :<>{(status === 2)
          ?<div style={{paddingTop:'40vh'}}>
            <Bars type="ThreeDots" color="#2BAD60" height="200" width="100%"/>
          </div>
          :<Box sx={style}>Your playlist was added successfully!</Box>
        }
        </>
        }
      </Modal>
    </div>
  );
}