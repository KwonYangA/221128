//현재페이지가 몇번째 페이지인지 알고 있어야 한다.
//상태 관리하는걸 react에서는 store
const xhr = new XMLHttpRequest();
const NEWS = "https://api.hnpwa.com/v0/news/1.json";
const CONTENT = "https://api.hnpwa.com/v0/item/@id.json";
const container = document.querySelector("#title");
const divcontent = document.createElement("div");
//페이징 처리 - 1step //상태를 관리하는 객체 필요
const store = {
  currentPage: 1, //현재 내가 바라보는 페이지 번호
};
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
  for (let i = (store.currentPage - 1) * 10; i < store.currentPage * 10; i++) {
    getList.push(`
    <li>
    <a href='#/show/${news[i].id}'>
    ${news[i].title}(${news[i].comments_count})
    </a>
    </li>
    `);
  }
  getList.push("</ul>");
  getList.push("<div>");
  getList.push(
    `<a href='#/page/${
      store.currentPage > 1 ? store.currentPage - 1 : 1
    }'>이전</a>`
  );
  getList.push("&nbsp;&nbsp;"); //링크사이 띄어쓰기
  getList.push(`<a href='#/page/${store.currentPage + 1}'>다음</a>`);
  getList.push("</div>");
  container.innerHTML = getList.join("");
}

//뉴스 상세 내용 보기
function newsDetail() {
  const id = this.location.hash.substring(7); //상세보기시 앞에 #/show/가 있으니까
  const newsContent = getData(CONTENT.replace("@id", id));
  container.innerHTML = `
    <h1>${newsContent.title}</h1>
    <div>
    <a href="#/page/${store.currentPage}">목록</a>
    </div>
    `;
}
//라우터에서 화면 전환하기
function router() {
  //글 목록의 링크는 #. 그러면 location.href에 #이 들어왔을 텐데
  //왜 이게 참일까? location.href에 #만 들어오면 빈값을 반환
  //그래서 이코드가 작동하는 것
  const routePath = location.hash;
  if (routePath === "") {
    //첫 진입 일때는 newsList를 호출
    newsList();
  } else if (routePath.indexOf("#/page/") >= 0) {
    //해시값 중에서 숫자값만 추출하기
    //#을 제거하고 문자열 길이를 계산 한 후 문자열을 숫자로 바꾸어야함
    store.currentPage = Number(routePath.substring(7));
    newsList();
  } else {
    newsDetail();
  }
}

window.addEventListener("hashchange", router);
router();
