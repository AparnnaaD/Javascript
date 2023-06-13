const Marks = require('./marks');
class Student{
constructor(rollno,firstname,lastname)
{
this.rollno=rollno;
this.firstname=firstname;
this.lastname=lastname;
this.marks = [];
this.totalMarks = 0;
}
addMark(subjectname, mark) {
    const newMark = new Marks(subjectname, mark);
    this.marks.push(newMark);
    this.totalMarks += mark;
  }
  calculateTotalMarks() {
    this.totalMarks = 0;
    this.marks.forEach((mark) => {
      this.totalMarks += mark.mark;
    });}
    calculateTotalPercentage()
    {
  return this.totalMarks / (this.marks.length * 100) * 100;
    };
 static getStudentsWithDistinction = (students) => {
    const studentsWithDistinction = students.filter((student) => student.totalMarks >= 200);
    return studentsWithDistinction.length;
  };
 static getStudentDetailsByRollNo = (students, rollNum) => {
  const student=students.find((student) => student.rollno === rollNum);
    if (student) {
      console.log(`${student.rollno} ${student.firstname} ${student.lastname} ${student.totalMarks}`);
}
else {
console.log("student not found");}
  };
    }
    //first student
    const student1 = new Student(1, 'Unni', 'Krish');
    student1.addMark('English', 70);
    student1.addMark('Hindi', 60);
    student1.addMark('Urdu', 50);
    //second student
    const student2=new Student(2,'Aparnna','D');
    student2.addMark('English',80);
    student2.addMark('Hindi', 60);
     student2.addMark('Urdu', 70);
     //Third Student
     const student3=new Student(3,'Deepa','O');
     student3.addMark('English',90);
     student3.addMark('Hindi',78);
     student3.addMark('Urdu',90);
     const students=[student1,student2,student3];
    students.forEach((student) => student.calculateTotalMarks());
     //get array response
     const resultPercentage = students.map((student) => student.calculateTotalPercentage());
     console.log('Result Percentage:', resultPercentage);
     //getting student data for distinction
     const studentsWithDistinction = Student.getStudentsWithDistinction(students);
       console.log(`Students with Distinction: ${studentsWithDistinction}`);
    // Get student details by roll number
Student.getStudentDetailsByRollNo(students, 1);