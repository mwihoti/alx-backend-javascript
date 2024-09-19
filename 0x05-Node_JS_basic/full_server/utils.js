const fs = require('fs');

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const fields = { CS: [], SWE: [] };
      const lines = data.trim().split('\n');
      lines.shift();

      lines.forEach((line) => {
        const [firstname, , , field] = line.split(',');
        if (fields[field]) {
          fields[field].push(firstname);
        } else {
          fields[field] = [firstname];
        }
      });
      resolve(fields);
    });
  });
}
module.exports = readDatabase;
