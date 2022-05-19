let xhr = new XMLHttpRequest();

function processFinish(){
  console.log(xhr.responseText);
}

xhr.onload = processFinish;

xhr.open("GET", "https://www.cbr-xml-daily.ru/daily_json.js");
xhr.send();