import concatScopes from './concatScopes';

const getCode = function() {
  if(sessionStorage.getItem("loggedIn") == false || !sessionStorage.getItem("loggedIn")){
    // const id = () => Math.random().toString(36).slice(2);
    // const state = id();
    const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
    const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI

    const SCOPES = concatScopes()
    const spotifyUrl =
      'https://accounts.spotify.com/authorize?' +
      new URLSearchParams({
        response_type: 'code',
        // state,
        client_id: CLIENT_ID,
        redirect_uri: REDIRECT_URI,
        scope: SCOPES,
      }).toString();
    window.location.replace(spotifyUrl);
    // window.open(spotifyUrl, '_blank');

  }
  else {}
}



const sendRequest = function() {
  getCode()
}

export default sendRequest