const sendRequest = function() {
  fetch('/login').then(
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