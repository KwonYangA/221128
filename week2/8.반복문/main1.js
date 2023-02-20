let colors = ["red", "green", "blue"]; //리터럴을 이용한 배열 선언 및 초기화

//콜백함수 - 함수 호출할 때 인수(파라미터)로 함수가 들어가는 형태
//arr.forEach(callback(currentvalue[,indext[,array]])[,thisArg])

colors.forEach(function (color, index, items) {
  console.log(color);
  console.log(index);
  console.log(items);
});

//화살표함수
colors.forEach((color, index) => {
  console.log(color);
  console.log(index);
});

colors.map((color, index) => {
  console.log(color);
  console.log(index);
});
