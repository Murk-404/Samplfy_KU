import React, { useEffect, useState } from 'react'

const sendRequest = function(props) {
  const dataToSend = {
    // username: props.user,
    title: props,
    // description: props.description,
    // dataArr: props.dataArr,
  }
  fetch('/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataToSend)
  }).then(
    data => {
      localStorage.setItem('profile-pic', data.profile)
      localStorage.setItem('username', data.username)
      localStorage.setItem('display-name', data.name)
      sessionStorage.setItem('loggedIn', true)
    }
  )
  
}

export default sendRequest