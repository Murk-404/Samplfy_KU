import React, { useEffect, useState } from 'react'

// const dataToSend = {
//   email: 'test@example.com'
// }

const sendRequest = function() {
  // fetch('/api', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify(dataToSend)
  // }).then(
  fetch('/api').then(
    
    response => response.json()
    
  ).then(
    data => {
      localStorage.setItem('profile-pic', data.profile)
      localStorage.setItem('username', data.username)
      localStorage.setItem('display-name', data.name)
      sessionStorage.setItem('loggedIn', true)
    }
  )
  
}

export default sendRequest