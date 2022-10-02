import React, { useEffect, useState } from 'react'
const sendRequest = function() {
  fetch('/api').then(
    
    response => response.json()
    
  ).then(
    data => {
      // data = data.slice(0, -2)
      // console.log(data)
      var index = data.indexOf('$')
      var username = data.slice(0, index)
      var pfp = data.slice(index + 1, -2)
      var index1 = pfp.indexOf('$')
      var pfp1 = pfp.slice(0, index1)
      var name = pfp.slice(index1 + 1, pfp.length)
      localStorage.setItem('profile-pic', pfp1)
      localStorage.setItem('username', username)
      localStorage.setItem('display-name', name)

      sessionStorage.setItem('loggedIn', true)
    }
  )
  
}

export default sendRequest