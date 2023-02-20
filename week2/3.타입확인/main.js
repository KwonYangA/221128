//데이터 타입

const a = 5;

console.log(typeof a);

console.log(typeof "이순신" == "string");
console.log(typeof a == "number");
console.log(typeof undefined == "undefined");
console.log(typeof null == "object");
console.log(typeof true == "boolean");
console.log(typeof [] == "object"); //배열
console.log(typeof {} == "object"); //객체
console.log(typeof function () {} == "function");

function methodA() {
  console.log("methodA");
}

methodA();
console.log(methodA);

console.log([].constructor === Array); // == 값 같은지, === 값과 타입 비교
console.log({}.constructor === Object);
console.log(Object.prototype.toString.call(null).slice(8, -1) === `Null`);

function checkType(data) {
  return Object.prototype.toString.call(data).slice(8, -1);
}

const checkType2 = (data) => {
  //ES6, ECMScrip(2016)
  return Object.prototype.toString.call(data).slice(8, -1);
};

console.log(checkType(null));
console.log(checkType(undefined));
console.log(checkType("강감찬"));
