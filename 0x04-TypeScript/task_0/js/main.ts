interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const student1: Student = {
    firstName: 'Daniel',
    lastName: 'Mwihoti',
    age: 23,
    location: 'Kenya'
}

const student2: Student = {
    firstName: 'Ela',
    lastName: 'Dee',
    age: 22,
    location: 'Kenya'
}

const studentsList: Array<Student> = [student1, student2];

function renderStudentTable(students: Student[]) {
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');
    const headerRow = document.createElement('tr');
    const headerName = document.createElement('th');
    const headerLocation = document.createElement('th');
    headerName.textContent = 'First Name';
    headerLocation.textContent = 'Location';
    headerRow.appendChild(headerName);
    headerRow.appendChild(headerLocation);
    tbody.appendChild(headerRow);

    students.forEach((student) => {
        const row = document.createElement('tr');
        const cellName = document.createElement('td');
        const cellLocation = document.createElement('td');
    
        cellName.textContent = student.firstName;
        cellLocation.textContent = student.location;
    
        row.appendChild(cellName);
        row.appendChild(cellLocation);
        tbody.appendChild(row);
      });
    
      table.appendChild(tbody);
      document.body.appendChild(table);
    }
    
    
    renderStudentTable(studentsList);
    

