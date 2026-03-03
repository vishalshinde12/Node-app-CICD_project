const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('hi friends I am Vishal Shinde, How are  you ?');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
