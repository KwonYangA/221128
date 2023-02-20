//배열 약은 복사와 깊은 복사
// 얕은 복사 - 원본이 바뀜, 동기화
// 깊은 복사 - 복사본이 바뀜, 비동기

const colors = ["red", "green", "blue"];
const copy = [];

//이전 방식
for (let i = 0; i < colors.length; i++) {
  copy.push(colors[i]);
  console.log(`copy[${i}:${copy[i]}]`);
}

/*  */
colors
  .forEach(function (color) {
    copy.push(color);
    console.log(`${copy}`);
  });

  [`red`, `green`, `blue`].forEach((color) => {
    copy.push(color);
  });
