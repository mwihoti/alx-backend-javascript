const express = require('express');

const app = express();
app.get('/', (req, res) => {
  res.send('Hello Holberton school!');
});

app.listen(1245, () => {
  console.log('Server running');
});
