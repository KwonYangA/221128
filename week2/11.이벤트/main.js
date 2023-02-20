const a = document.querySelector("a")
console.dir(a); // 돔트리, DOM구조를 볼수 있다.
console.log(a);

a.onclick = () =>{
  console.log('링크클릭');
}

a.onclick = () =>{
  console.log('링크클릭다시');
}

a.addEventListener('click', () =>{
  console.log('클릭');
})

a.addEventListener('click', () =>{
  console.log('클릭다시');
})