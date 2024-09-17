const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    // Split the file content by new lines
    const lines = data.trim().split('\n');
    if (lines.length === 0) throw new Error('Cannot load the database');
    // Extract the header (the first line) and data rows
    const students = lines.slice(1).filter((line) => line.trim() !== ''); // Remove empty lines
    // Count the total number of students
    console.log(`Number of students: ${students.length}`);

    // Group students by their field
    const fieldGroups = {};
    students.forEach((student) => {
      const [firstname, field] = student.split(',');
      if (!fieldGroups[field]) {
        fieldGroups[field] = [];
      }
      fieldGroups[field].push(firstname);
    });

    // Log the number of students in each field and the list of their first names
    for (const [field, firstnames] of Object.entries(fieldGroups)) {
      console.log(`Number of students in ${field}: ${firstnames.length}. List: ${firstnames.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
