import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    const databaseFile = process.argv[2];

    readDatabase(databaseFile)
      .then((fields) => {
        let output = 'This is the list of our students\n';
        Object.keys(fields).sort().forEach((field) => {
          const students = fields[field];
          output += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
        });
        response.status(200).send(output.trim());
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    const databaseFile = process.argv[2];

    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(databaseFile)
      .then((fields) => {
        const students = fields[major];
        if (students) {
          response.status(200).send(`List: ${students.join(', ')}`);
        } else {
          response.status(500).send('Cannot load the database');
        }
      });
  }
}
export default StudentsController;
