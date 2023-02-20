//객체

const student = {
  name: "이순신",
  age: 55,
};

console.log(student);
console.log(student.name);
console.log(student["name"]);
let key = "name";
console.log(student[key]);

function Student() {
  this.name = "강감찬";
  this.age = 56;
}

const student1 = new Student();
console.log(student1);
console.log(student1.name);
console.log(student1["name"]);

const student2 = new Object();
student2.name = "김유신";
student2.age = 55;
console.log(student2);
console.log(student2.name);
console.log(student2["name"]);

const student3 = {
  name: "다쿠",
  age: 28,
};

const student4 = {
  name: "훈발이",
  age: 24,
  parent: student3,
};

console.log(student3);
console.log(student4);

const students = [student3, student4];
console.log(students);
console.log(students[0].name);
console.log(students[1]["parent"]["name"]);
