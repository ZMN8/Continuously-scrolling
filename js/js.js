/**
 * Created by Administrator on 2016/8/23.
 */
var moveDIV=document.getElementById("box");
var dlNodes=moveDIV.getElementsByTagName("dl");
var flash;
/*
function moveFun(num) {
    num+=2;
    if(num<=162){
        dlNodes[0].style.marginLeft=(3-num)+"px";//本身具有外边距3px
        flash=setTimeout(function () {
            moveFun(num);
        },20)
    }else{
        moveDIV.appendChild(dlNodes[0]);
        dlNodes[dlNodes.length-1].style.marginLeft=0+"px";
        moveFun(0);
    }
}
moveFun(0);

moveDIV.onmouseenter=function(){
    clearTimeout(flash);
};
moveDIV.onmouseleave=function(){
    var num=3-parseInt(dlNodes[0].style.marginLeft);
    flash=setTimeout(function () {
        moveFun(num);
    },20)

};
*/
/*
var number=0;
function moveFunction(num) {
    number=num;
    number+=2;
    if(number<=162){
        dlNodes[0].style.marginLeft=(3-number)+"px";
    }else{
        moveDIV.appendChild(dlNodes[0]);
        dlNodes[dlNodes.length-1].style.marginLeft=0;
        number=0;
    }
}

flash=setInterval(function () {
    moveFunction(number);
},20);

moveDIV.onmouseenter=function(){
    clearInterval(flash);
    console.log(number);
};
moveDIV.onmouseleave=function(){
    flash=setInterval(function () {
        moveFunction(number);
    },20)
};

*/
function moveFunction2() {
    var margin=parseFloat(dlNodes[0].style.marginLeft);//获取第一个dl的num
    margin-=2;
    if(margin>=-159){
        dlNodes[0].style.marginLeft=margin+"px";
    }else{
        moveDIV.appendChild(dlNodes[0]);
        dlNodes[dlNodes.length-1].style.marginLeft=0;
    }
}

var flash2=setInterval(function () {
    moveFunction2();
},20);

moveDIV.onmouseenter=function(){
    clearInterval(flash2);
};
moveDIV.onmouseleave=function(){
    flash2=setInterval(function () {
        moveFunction2();
    },20);
};