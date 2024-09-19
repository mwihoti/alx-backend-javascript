const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  const { url } = req;

  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello Holberton School!');
    res.end();
  } else if (url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');
    const databasePath = process.argv[2];

    countStudents(databasePath)
      .then((studentList) => {
        res.write(studentList); // Properly write the resolved student list to the response
        res.end();
      })
      .catch((error) => {
        res.write(error.message); // Write the error message if any
        res.end();
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('Not Found');
    res.end();
  }
});

app.listen(1245);
module.exports = app;
