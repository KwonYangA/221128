//배열 : Array
//연관된 값들을 하나의 그룹으로 묶어서 나열한 자료구조

const colors = ["red", "green", "blue"];
const c1 = colors[0];
const c2 = colors[1];
const c3 = colors[2];
const { color1, color2, color3 } = colors;

console.log(colors);

//arr.filter(callback(element[, index[, array]])[, thisArg])

colors.filter(function (color, index, array) {
  //실행문
  console.log(color);
  console.log(index);
  console.log(array);
});

//arr.forEach(callback(currentvalue[, index[, array]])[, thisArg])

colors.forEach((color) => {
  // 함수의 이름이 없다 - 사용자 호출이 불가함
  console.log(color);
});
// = colors.forEach(color=>console.log(color);)
// 단일행은 {} 생략 가능

colors.forEach(function (color, index, colors) {
  console.log(color);
});
