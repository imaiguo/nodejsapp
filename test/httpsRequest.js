// 在浏览器 的控制台执行它们

var xml = new XMLHttpRequest();
var url = "https://test.ephraim.site";
xml.open("GET", url, true);
xml.setRequestHeader("Content-type", "application/json");
xml.setRequestHeader("Authorization","test");
xml.send();
xml.onload = function () {
   console.log("---onload over---");
   if (xml.readyState === xml.DONE) {
      if (xml.status === 200) {
          console.log(xml.response);
      }
  }
};
