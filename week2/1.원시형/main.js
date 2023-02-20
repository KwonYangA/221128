//객체 데이터
//var - 호이스팅 이슈인해서 사용불가
//const - 재할당 불가


const num = 5; // 선언과 초기화
const pi = 3.14;
//num = 1; 재할당이 불가
num = 1;
console.log(num);
console.log(no);

console.log(typeof pi);
//NaN -> Not a Number - 숫자로 표기할 수 없음
console.log(typeof (num + undefined)); // NaN
