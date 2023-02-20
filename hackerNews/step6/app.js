const xhr = new XMLHttpRequest();
const NEWS = "https://api.hnpwa.com/v0/news/1.json";
const CONTENT = "https://api.hnpwa.com/v0/item/@id.json";
const container = document.querySelector("#title");
const divcontent = document.createElement("div"); //제목에 대한 상세내용

//아래 함수의 사용처는 두 군데 임
//요청 URL만 바뀜 나머지는 같음 - 그래서 파라미터를 url로 줌
function getData(url) {
  xhr.open("GET", url, false);
  xhr.send();
  return JSON.parse(xhr.responseText);
}
//뉴스목록가져오기
function newsList() {
  const news = getData(NEWS);
  const getList = [];
  getList.push("<ul>");
  for (let i = 0; i < 10; i++) {
    const div = document.createElement("div");
    getList.push(`
    <li>
    <a href='#${news[i].id}'>
    ${news[i].title}(${news[i].comments_count})
    </a>
    </li>
    `);
  }
  getList.push("</ul>");
  container.innerHTML = getList.join("");
}

//뉴스 상세 내용 보기
function newsDetail() {
  const id = this.location.hash.substring(1); //
  const newsContent = getData(CONTENT.replace("@id", id));
  container.innerHTML = `
    <h1>${newsContent.title}</h1>
    <div>
    <a href="#">목록으로</a>
    </div>
    `;
}
//라우터에서 화면 전환하기
function router() {
  const routePath = location.hash;
  if (routePath === "") {
    newsList();
  } else {
    newsDetail();
  }
}

window.addEventListener("hashchange", router);
router();
