const xhr = new XMLHttpRequest();
const NEWS = "https://api.hnpwa.com/v0/news/1.json";
const CONTENT = "https://api.hnpwa.com/v0/item/@id.json";
const divcontent = document.createElement("div"); //제목에 대한 상세내용
//아래 함수의 사용처는 두 군데 임
//요청 URL만 바뀜 나머지는 같음 - 그래서 파라미터를 url로 줌
function getData(url) {
  xhr.open("GET", url, false);
  xhr.send();
  return JSON.parse(xhr.responseText);
}

const news = getData(NEWS);
const ul = document.createElement("ul");

window.addEventListener("hashchange", function () {
  //console.log("해시가 변경됨");
  // console.log(location.hash); //#34577246
  const id = this.location.hash.substring(1); //#제거

  const newcontent = getData(CONTENT.replace("@id", id));
  const h1 = this.document.createElement("h1");
  console.log(newcontent.title);
  h1.innerHTML = newcontent.title;
  divcontent.appendChild(h1);
});

for (let i = 0; i < 10; i++) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = `#${news[i].id}`;
  ul.appendChild(li);
  li.appendChild(a);
  a.innerHTML = `${news[i].title}(${news[i].comments_count})`;
}



document.querySelector("#title").appendChild(ul);
document.querySelector("#title").appendChild(divcontent);
