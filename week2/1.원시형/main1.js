const num = 5; // 선언과 초기화

const num2 = 1;

console.log(num + 1); //6
console.log(num + num2);
console.log(num + undefined); // NaN

const str1 = `hello`;
const str2 = ``;

console.log(str1);

const a = 0.1;
const b = 0.2;

console.log(a + b); // 0.3X 오류
console.log(typeof (a + b).toFiext(1));
console.log(typeof Number((a + b).toFiext(1)));
