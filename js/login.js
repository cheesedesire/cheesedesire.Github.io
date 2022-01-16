function setCookie(name,value,days){
    const date = new Date();
    date.setDate(date.getDate() + days);
    if(!getCookie(name)){
        console.log(1);
        document.cookie=name+"="+escape(value)+";"+((days==null)?"":"dates="+date.toGMTString());
        return true;
    }else{
        return false;
    }

}

function getCookie(name){
    if(document.cookie.length > 0){
        let start = document.cookie.indexOf(name + "=");
        let end = -1;
        if(start != -1){
            start = start + name.length + 1;
            end = document.cookie.indexOf(";" , start);
            if(end == -1){
                end = document.cookie.length;
            }
            return document.cookie.substring(start , end);
        }
    }

}

function register(){
    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;
    if(setCookie(name, password, 365)){
        document.getElementById("name").value="";
        document.getElementById("password").value="";
        alert("注册成功");
        document.getElementById("zhuce").style="visibility:hidden;";
    }else{
        alert("注册失败!" + "该用户已存在！");
    }
}

function login(){
    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;
    if(getCookie(name) == password){
        alert("登录成功");
        document.getElementById("name").value="";
        document.getElementById("password").value="";
        window.location.replace("appraise.html")
    } else if (getCookie(name) == null) {
        alert("登陆失败" + "无此用户");
    }else{
        alert("登录失败" + "用户名或者密码错误");
    }
}
function show(){
    if(document.cookie.length <= 0){
        document.getElementById("div").innerHTML="无";
    }else{
        document.getElementById("div").innerHTML=document.cookie;
    }
}

function gotoregister(){
    document.getElementById("zhuce").style="visibility:visible;";
}