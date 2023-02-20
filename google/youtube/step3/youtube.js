const keyword = document.querySelector("#keyword");

keyword.addEventListener("keypress", (event) => {
  console.log("onkeypress =>" + event.keyCode);
  //사용자가 입력한 검색어를 찾는 함수 호출
  handleSearch();
});
//사용자가 입력한 검색어 읽어오기
const handleSearch = () => {
  const user = document.querySelector("#keyword").value;
  console.log("사용자가 입력한 검색어 ==>" + user);
  search(user);
};
//사용자가 입력한 검색어로 조건 검색 구현하기
//손흥민 검색시
const search = (query) => {
  const ajax = new XMLHttpRequest();
  const key = "AIzaSyD9MSXw9K6XTYU_r_pCkRBnkFL674sMFmY";
  const search_URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${key}`;
  const sony = [];
  ajax.open("GET", search_URL, false);
  ajax.send();

  const sons = JSON.parse(ajax.response);
  console.log(sons);
  console.log("사용자가 입력한 bts 받음 :" + query);
  sony.push(`<ul class = "videos">`);
  const items = sons.items;
  for (let i = 0; i < items.length; i++) {
    sony.push(`<li class = "container">`);
    sony.push(`<div class = "video">`);
    sony.push(
      `<img class = "thumbnail" src ='${items[i].snippet.thumbnails.medium.url}'/>`
    );
    sony.push(`<div>`);
    sony.push(`<p class="title">${items[i].snippet.title}</p>`);
    sony.push(`<p class="channelTitle">${items[i].snippet.channelTitle}</p>`);
    sony.push(`</div>`);
    sony.push(`</div>`);
    sony.push(`</li>`);
  }
  sony.push(`</ul>`);
  document.querySelector("#root").innerHTML = sony.join("");
};
