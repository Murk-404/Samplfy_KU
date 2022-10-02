const express = require('express');
const spawner = require('child_process').spawn;

const app = express();
const port = 5000;

app.listen(port, () => console.log('listening on port ' + port));
app.get('/api', (req, res) => {

  const child = spawner('python', ['C:/Spotify_React_Project/server/spot_auth.py']);
  child.stdout.on('data', (data) => {
    console.log(`This is the data: ${data}`)
    // res.json(`{ "user": ["${data}"] }`)
    res.json(`${data}`)

  });
  child.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
    res.send(data)
  });
});

// const { authorize } = require('@spotifly/auth-token');

// const SCOPE = 'user-library-read, ugc-image-upload, user-modify-playback-state, user-read-playback-state, user-read-currently-playing, user-follow-modify, user-follow-read, user-read-recently-played, user-read-playback-position, user-top-read, playlist-read-collaborative, playlist-modify-public, playlist-read-private, playlist-modify-private, app-remote-control, streaming, user-read-email, user-read-private, user-library-modify, user-library-read'

// SPOTIPY_CLIENT_ID = '53c0537d418540e08a9f37fa33e35052'
// SPOTIPY_CLIENT_SECRET = '3fc6ed86ebf6482291f9ad061aa3d5d1'

// async function asyncCall() {
//   const token = await authorize({
//     clientId: `${SPOTIPY_CLIENT_ID}`,
//     clientSecret: `${SPOTIPY_CLIENT_SECRET}`,
//     port: 5000,
//     scopes: `${SCOPE}`,
//     noEmit: true,
//   });
//   console.log(token);
// }
// console.log(asyncCall());
// console.log(token);
