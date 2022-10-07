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
  const child = spawner('python', ['./create_playlist.py', data[0], data[1], data[2], data[3], data[4]]);
  child.stdout.on('data', (pyData) => {
    res.json({
      completed: 'true',
    })
  });
  child.stderr.on('data', (pyData) => {
    console.log(`stderr: ${pyData}`);
    res.send(pyData)
  });
});

app.get('/login', (req, res) => {
  const child = spawner('python', ['./spot_auth.py']);
  child.stdout.on('data', (data) => {
    const dataArr = (`${data}`).split('$')
    dataArr.forEach(element => console.log(element))
    res.json({
      username: `${dataArr[0]}`,
      profile: `${dataArr[1]}`,
      name: `${dataArr[2]}`,
    })
  });
  child.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
    res.send(data)
  });
});

app.listen(port, () => console.log('listening on port ' + port));
