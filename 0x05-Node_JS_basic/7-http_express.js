const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 1245;
const DB_FILE = process.argv[2] || '';

// Function to count students from the CSV file
const countStudents = (dataPath) => new Promise((resolve, reject) => {
  if (!dataPath) {
    reject(new Error('Cannot load the database'));
    return;
  }

  fs.readFile(dataPath, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const lines = data.trim().split('\n');
    if (lines.length <= 1) {
      resolve('Number of students: 0');
      return;
    }

    const studentGroups = {};
    const headers = lines[0].split(',');
    const firstNameIndex = headers.indexOf('firstname');
    const fieldIndex = headers.indexOf('field');

    lines.slice(1).forEach((line) => {
      const columns = line.split(',');
      if (columns.length > 1) {
        const firstName = columns[firstNameIndex];
        const field = columns[fieldIndex];
        if (!studentGroups[field]) {
          studentGroups[field] = [];
        }
        studentGroups[field].push(firstName);
      }
    });

    const totalStudents = Object.values(studentGroups).reduce((acc, curr) => acc + curr.length, 0);
    const reportParts = [`Number of students: ${totalStudents}`];
    Object.entries(studentGroups).forEach(([field, names]) => {
      reportParts.push(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    });

    resolve(reportParts.join('\n'));
  });
});

// Route for the root URL
app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

// Route for /students URL
app.get('/students', (_, res) => {
  const responseParts = ['This is the list of our students'];

  countStudents(DB_FILE)
    .then((report) => {
      responseParts.push(report);
      res.setHeader('Content-Type', 'text/plain');
      res.send(responseParts.join('\n'));
    })
    .catch((err) => {
      responseParts.push(err.message);
      res.setHeader('Content-Type', 'text/plain');
      res.send(responseParts.join('\n'));
    });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

module.exports = app;
