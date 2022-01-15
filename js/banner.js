window.addEventListener('load',function(){
    //获取元素
    var arrow_l = document.querySelector('.arrow-l');
    var arrow_r = document.querySelector('.arrow-r');
    var focus = document.querySelector('.focus');
    var focusWidth = focus.offsetWidth;
    //鼠标经过focus 就显示隐藏的图标
    focus.addEventListener('mouseenter',function(){
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
        clearInterval(timer);
        timer = null;
    });
    focus.addEventListener('mouseenter',function(){
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
        timer = setInterval(function(){
            arrow_r.click();
        },2000);
    });
    //动态生成小圆圈 有几张图片，我就生成几个小圆圈
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('.circle')
    console.log(ul.children.length);
    for(var i = 0;i < ul.children.length;i++){
        var li = document.createElement('li');
        li.setAttribute('index',i);
        ol.appendChild(li);
        li.addEventListener('click',function(){
            for(var i = 0; i < ol.children.length;i++){
                ol.children[i].className = '';
            }
            this.className = 'current';
            //点击小圆圈，移动图片
            var index = this.getAttribute('index');
            num = index;
            circle = index;
            console.log(focusWidth);
            console.log(index);
            animate(ul,-index * focusWidth);
        })
    }
    ol.children[0].className = 'current';

    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);

    var num = 0;
    var circle = 0;
    // 右侧按钮
    arrow_r.addEventListener('click',function(){
        if(num == ul.children.length-1){
            ul.style,left = 0;
            num = 0;
        }
        num++;
        animate(ul,-num*focusWidth);
        circle++;
        if(circle == ul.children.length-1){
            circle = 0;
        }
        circleChange();
    })
    // 左侧按钮
    arrow_l.addEventListener('click',function(){
        if(num == 0){
            num = ul.children.length-1;
            ul.style,left = -num*focusWidth+'px';
            
        }
        num--;
        animate(ul,-num*focusWidth);
        circle++;
        if(circle == 0){
            circle =  ol.children.length-1;;
        }
        circle = circle < 0 ? ol.children.length-1 : circle;
        circleChange();
    });

    function circleChange() {
        for(var i = 0;i < ol.children.length;i++){
            ol.children[i].className='';
        }
        ol.children[circle].className='current';
    }
    timer = setInterval(function(){
        arrow_r.click();
    },2000);
    // 新闻模块切换模式
    var tab_list = document.querySelector('.tab_list');
    var lis = tab_list.querySelectorAll('li');
    var items = document.querySelectorAll('.item');
    for(var i = 0;i < lis.length;i++){
        lis[i].setAttribute('data-index',i);
        lis[i].onclick = function() {
            for(var i = 0;i < lis.length;i++){
                lis[i].className = '';
            }
            this.className = 'current';
            var index = this.getAttribute('data-index');
            window.location.hash = index;
            // console.log(index);
            for(var i = 0;i < items.length;i++){
                items[i].style.display = 'none';
            }
            items[index].style.display = 'block';
        }
    }
})


