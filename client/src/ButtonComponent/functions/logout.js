const logout = function() {
  sessionStorage.removeItem('loggedIn');
  localStorage.removeItem('username');
  localStorage.removeItem('profile-pic');
  localStorage.removeItem('display-name');
  window.location.replace('/')
}

export default logout
