const logout = function() {
  sessionStorage.removeItem('loggedIn');
  localStorage.removeItem('username');
  localStorage.removeItem('profile-pic');
  localStorage.removeItem('display-name');
  localStorage.removeItem('auth-code');
  window.location.replace('/')
}

export default logout
