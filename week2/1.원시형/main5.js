//객체 데이터
//좌중괄호 우중괄호 {}로 묶이는 것을 객체라 함
const student = {
  name: "이순신",
  age: 45,
  tel: null,
};

console.log(student);
console.log(student.name);
console.log(student.age);
console.log(student["name"]);
console.log(student.tel);
console.log(student.email); //없는 속성 출력하려고 하면 undefined
