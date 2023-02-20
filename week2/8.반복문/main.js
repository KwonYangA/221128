let colors = ["red", "green", "blue"];

for (color in colors) {
  console.log(color, ",color:" + color[color]);
}

for (color in colors) {
  console.log(",color:" + color);
}

let items = [{ id: 1, name: "벤치프레스", count: 0 }, { id: 2, name: "랫풀다운", count: 0 },
{ id: 3, name: "스쿼트", count: 0 },
];

for (let item of items) {
  console.log(item.id + item.name);
}

const student = {
  name: "이순신",
  age: 45,
  address: "대전",
};

for (let key in student) {
  console.log(key, ",", student[key]);
}
