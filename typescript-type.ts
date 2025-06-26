type Student = {
  firstname: string;
  lastname: string;
  age: number;
  grades: (number | string | undefined)[];
};

function showAllStudents(students: Student[]): void {
  for (const student of students) {
    showStudent(student);
  }
}

function showStudent(student: Student): void {
  const name =
    student.firstname + " " + student.lastname + " (" + student.age + ")";

  console.log(name);
  let highlight = "";
  for (let i = 0; i < name.length; i++) {
    highlight += "=";
  }
  console.log(highlight);

  let grades = "";
  for (let index = 0; index < student.grades.length; index++) {
    const grade = student.grades[index];
    if (grade === undefined) {
      grades += "*";
    } else {
      grades += grade;
    }

    if (index !== student.grades.length - 1) {
      grades += ",";
    }
  }
  console.log("Grades: " + grades);
}

showStudent({
  firstname: "Anton",
  lastname: "Bertrand",
  age: 50,
  grades: [1, 2, 1, "F", undefined],
});

const students = [
  {
    firstname: "Anton",
    lastname: "Bertrand",
    age: 50,
    grades: [1, 2, 1, "F", undefined],
  },
  {
    firstname: "Berta",
    lastname: "Fuchs",
    age: 40,
    grades: [1, 2, 3, 4, 5],
  },
  {
    firstname: "Karim",
    lastname: "Benzema",
    age: 36,
    grades: ["A", "B", "C", "D", "E"],
  },
];

showAllStudents(students);
