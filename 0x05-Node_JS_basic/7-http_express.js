const express = require('express');

const app = express();
app.get('/', (req, res) => {
  res.send('Hello Holberton school!');
});

app.get('/students', (req, res) => {
    const dbFilePath = process.argv[2];
    res.write('This is the list of our students\n');
    countStudents(dbFilePath)
    .then((data) => {
      res.write(data);
      res.end();
    })
    .catch((error) => {
      res.write(error.message);
      res.end();
    });
    
})

app.listen(1245, () => {
  console.log('Server running');
});

module.exports = app;

