const express = require('express');
const cluster = require('cluster');
const http = require('http');
const os = require('os');

const app = express();

if (cluster.isMaster){
  //fork workers

  const numCPUS = os.cpus().length
  console.log(`The operating system has ${numCPUS} cores`)
}

app.get('/', (req, res) => {
  res.send('Hello World!');
});


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

// Path: .gitignore