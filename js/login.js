function setCookie(name, value, daysToLive) {
    var cookie = name + "=" + encodeComponent(value);
    if(typeof daysToLive === "number")
      cookie += "; max-age=" + (daysToLive*60*60*24);
      document.cookie = cookie ;
    }

function getCookie(name) {
    var cookies = document.cookie;
    var list = cookies.split("; "); // 解析出名/值对列表
    for(var i = 0; i < list.length; i++) {
      var arr = list[i].split("="); // 解析出名和值
      if(arr[0] == name)
      return decodeURIComponent(arr[1]); // 对cookie值解码
    }
  return "";
}


function delCookie(name) {
    setCookie(name, "", 0);
}

function checkCookie() {
    var user = getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        user = document.getElementById("username");
        if (user != "" && user != null) {
            setCookie("username", user, 365);
            alert("Welcome again " + user);
        }
    }
}