//Nullsh     ,
//삼항연산자
//조건? 참:거짓

const a = 1;

console.log(a < 2 ? "참" : "거짓");

const 판정 = a < 2 ? "참" : "거짓";
console.log(판정);

console.log(undefined ?? null); //널 병합 연산자(??)
console.log(true ?? 1 ?? 3); // true
console.log(null ?? 1 ?? 3); // 1

//or 연산자 인 경우
const no = 0;
const num = no || 7;

console.log(num);

//Nullish병합 연산자를 이용하면 - 왼쪽부터 비교하는 것은 OR연산자와 동일
//그러나 null, undefined 건너 뛰고 나머지 데이터 만나면 처음 만나자 마자 반환

const num2 = no ?? 7;

console.log(num2); // 0
