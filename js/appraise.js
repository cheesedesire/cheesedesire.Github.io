function appraise(){
    var ul=document.querySelectorAll("ul")
var span=document.getElementsByTagName("span")
var more=document.getElementById("more")
var more1=document.getElementById("more1")
var more2=document.getElementById("more2")
var box3=document.getElementById("box3")
var pri=document.getElementById("pri")
var search=document.getElementById("search")
var ser=document.getElementsByClassName("ser")
var change1=document.getElementById("change1")
var change2=document.getElementsByClassName("change2")
var del=document.getElementsByClassName("del")
var cha1=document.getElementById("change1-1")
var cha2=document.getElementById("change1-2")
var sure=document.getElementById("sure")
var cancel=document.getElementById("cancel")
//改
var chan;
var inp=change1.getElementsByTagName("input")
for(var i=0;i<change2.length;i++){
    (function(e){
        change2[e].onclick=function(){
            change1.style.display = "block";
            chan=this.parentNode.parentNode
        }
    })(i)
}
//确定
sure.onclick=function(){
    var chan_li=chan.getElementsByTagName("li")
    chan_li[1].innerText=cha1.value
    chan_li[2].innerText=cha2.value
    change1.style.display = "none";
//				赋值后清空文本框内容
    for(var i=0;i<inp.length;i++){
        inp[i].value=""
    }
}
//取消
cancel.onclick=function(){
    change1.style.display = "none";
    for(var i=0;i<inp.length;i++){
        inp[i].value=""
    }
}
//删
var chan;
for(var i=0;i<del.length;i++){
    (function(e){
        del[e].onclick=function(){
            var bool = confirm("是否删除这行");
            if(bool){
                var del =this.parentNode.parentNode
                del.remove()
            }
            
//						}else if(this.innerText=="修改"){
//							change1.style.display = "block";
//							chan=this.parentNode.parentNode
//						}else if(this.innerText=="确定"){
//							var chan_li=chan.getElementsByTagName("li")
//							chan_li[1]=cha1.innerText
//							chan_li[2]=cha1.innerText
//							chan_li[3]=cha1.innerText
//							chan_li[4]=cha1.innerText
//						}
        }
    })(i)
}
//增
//获取下拉框的文本
var abc
more2.onchange=function(){
    var index=more2.selectedIndex
    abc=more2[index].innerText
}
more.onclick=function(){
    //新增ul
    var ul1= document.createElement("ul")
    //ul赋值内容
    ul1.innerHTML="<li>"+ul.length+"</li><li>"+more1.value+"</li><li class='ser'>"+abc+"</li><li><span class='change2'>修改</span> <span class='del'>删除</span></li>"
    box3.appendChild(ul1)
    //给新增的子元素绑定事件
    var new1=ul1.lastChild.lastChild
    new1.onclick=function(){
        var bool = confirm("是否删除这行");
        if(bool){
            var del =this.parentNode.parentNode
            del.remove()
        }
    }
}
//查
//获取查找下拉框的文本
var bcd
pri.onchange=function(){
    var index=pri.selectedIndex
    bcd=pri[index].innerText
}
search.onclick=function(){
    var ul=document.querySelectorAll("ul")
    //找到和下拉框文本一样的行
    for(var j=0;j<ser.length;j++){
        if(bcd == ser[j].innerText){
            var str=ser[j].parentNode;
            console.log(str)
        }
    }
    //删除所有行
    for(var k=1;k<ul.length;k++){   
        ul[k].remove()
    }
    //添加找到的行
    box3.appendChild(str)
}
}