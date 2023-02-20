//undefined 값이 암시적으로 할당 되지 않은 상태
//기본적으로 갖는 값

let age = undefined;

console.log(age);

setTimeout(function () {
  // 콜백 함수 setTimeout이 끝나고 나면 실행
  age = 10;
  console.log(age);
}, 2000); //밀리세크 단위임
