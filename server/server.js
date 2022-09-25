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

