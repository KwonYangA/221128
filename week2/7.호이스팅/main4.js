// 호이스팅 때문에 선언이 끌어올려져서 오류 안남.
// 변수 : 특정데이터 값을 임시로 저장하는 공간
// -> 특정값을 자주 사용해야 할 때
// 반복적인 구문(값)이 여러 코드에서 걸쳐서 빈번히 쓰일 때
// 변수 선언 방식
// ES5 - var -> 호이스팅이슈 발생 hoisting
// ES6[let or const 사용할것, arrow function], ES7
// 변수 작성시 유의사항
// 숫자로 시작 불가, 특수문자(_, $불가), 예약어 불가, 대소문자 구분해야함
//const text; //선언과 초기화를 한번에 해야함(재할당X)
//text = "Hanamon!"; // 오류가 남

const text = "default";
//text = "Hanamon!";
console.log(text); // undefined
console.log(text);

console.log(`text의 값은 ${text} 입니다.`);
//const 고정값
//let은 변경될 수 있는 값

const 변수명 = "테스트";
console.log(변수명); //한글도 가능 함
