const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.trim().split('\n');
        const students = lines.slice(1).filter((line) => line.trim() !== (''));
        console.log(`Number of students: ${students.length}`);

        const fieldGroups = {};
        students.forEach((student) => {
          const [firstname] = student.split(',');
          const field = student.split(',')[3];
          if (!fieldGroups[field]) {
            fieldGroups[field] = [];
          }
          fieldGroups[field].push(firstname);
        });

        for (const [field, firstname] of Object.entries(fieldGroups)) {
          console.log(`Number of students in ${field}: ${firstname.length}. List: ${firstname.join(', ')}`);
        }
        resolve();
      }
    });
  });
}

module.exports = countStudents;
