const express = require('express');
const spawner = require('child_process').spawn;
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.post('/playlist', (req, res) => {
  console.log(req.body.data)
  const data = [req.body.data.title,req.body.data.description,req.body.data.user,req.body.data.index,req.body.data.visibility.toString()];
  const child = spawner('python', ['C:/Spotify_React_Project/server/create_playlist.py', data[0], data[1], data[2], data[3], data[4]]);
  child.stdout.on('data', (pyData) => {
    // console.log(pyData.toString());
    // const dataArr = (`${pyData.toString()}`).split('$')
    // dataArr.forEach(element => console.log(element))
    res.json({
      completed: 'true',
      // resTitle: `${dataArr[0]}`,
      // resDescription: `${dataArr[1]}`,
      // username: `${dataArr[2]}`,
      // index: `${dataArr[3]}`

    })
    // res.json(`{ "user": ["${data}"] }`)
    // res.json(`${data}`)

  });
  child.stderr.on('data', (pyData) => {
    console.log(`stderr: ${pyData}`);
    res.send(pyData)
  });
});

app.get('/api', (req, res) => {

  // console.log(req.body.email)
  // const email = req.body.email
  // const child = spawner('python', ['C:/Spotify_React_Project/server/spot_auth.py', email]);
  const child = spawner('python', ['C:/Spotify_React_Project/server/spot_auth.py']);
  child.stdout.on('data', (data) => {
    const dataArr = (`${data}`).split('$')
    dataArr.forEach(element => console.log(element))
    res.json({
      username: `${dataArr[0]}`,
      profile: `${dataArr[1]}`,
      name: `${dataArr[2]}`,
    })
    // res.json(`{ "user": ["${data}"] }`)
    // res.json(`${data}`)

  });
  child.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
    res.send(data)
  });
});

app.listen(port, () => console.log('listening on port ' + port));


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
