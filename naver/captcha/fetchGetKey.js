const myHeaders = new Headers();
myHeaders.append("X-Naver-Client-Id", "tiraSznCoZ53snQO7o8e");
myHeaders.append("X-Naver-Client-Secret", "eDaceOgR54");

const requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://openapi.naver.com/v1/captcha/nkey?code=0", requestOptions)
  .then(response => response.json())
  .then(result => {
    console.log(result.key);
  })
  .catch(error => console.log('error', error));

