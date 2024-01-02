const express = require('express')
const spawn = require("child_process").spawn
const app = express()

const port = 3000;
const scripts_dir = `./python_scripts`;

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/run_makefile', function (req, res) {
  const pythonProcess = spawn('python3',[`${scripts_dir}/makefile.py`]);
  res.send(`Executed python script\n`);
  pythonProcess.stdout.on('data', function(data) {
    console.log(data.toString('utf-8'))
 })
})

app.listen(port);
console.log(`Server listening at port ${port}`);
