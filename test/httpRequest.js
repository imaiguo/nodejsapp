
// 发送http请求

var xml = new XMLHttpRequest();
var url = "http://test.ephraim.site:3000";
xml.open("GET", url, true);
xml.setRequestHeader("Content-type", "application/json");
xml.setRequestHeader("Authorization","test");
xml.send();
xml.onload = function () {
   console.log("---onload over---");
   if (xml.readyState === xml.DONE) {
      if (xml.status === 200) {
          console.log(xml.responseText);
      }
  }
};


var xml = new XMLHttpRequest();
var url = "https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png";
xml.open("GET", url, true);
xml.setRequestHeader("Content-type", "application/json");
xml.setRequestHeader("Authorization","test");
xml.send();
xml.onload = function () {
   console.log("---onload over---");
   if (xml.readyState === xml.DONE) {
      if (xml.status === 200) {
          console.log(xml.responseText);
      }
  }
};

