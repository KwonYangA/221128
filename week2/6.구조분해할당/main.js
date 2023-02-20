//구조 분해 할당 - 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에
// 담을 수 있게 하는 표현식

const obj = {
  a: 1,
  b: 2,
  c: 3,
  e: null,
};
//fales 0, null, undefined , NAN, ''
//구조분해시 같은 변수를 사용불가
const { a, b } = obj;
console.log(a);
console.log(b);

//초기화도 가능
const { c } = obj;

const { e = 5 } = obj;

const arr = [1, 2, 3, 4, 5];
const [i, j, ...rest] = arr;
const [i2, j2, ...abc] = arr;
console.log(i);
console.log(j);
console.log(...rest);
