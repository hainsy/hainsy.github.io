// 
// var disp=document.getElementById("goto")
// var bottom=document.getElementById("bottom")
// var morc=document.getElementById("morc")
// var close=document.getElementById("close")
// var timer=null;
// var isTop=true;
// window.onscroll=function(){
// 	 var t = document.documentElement.scrollTop || document.body.scrollTop;
// 	if(t>=200){
// 		disp.style.display="inline"
// 	}else{
// 		disp.style.display="none"
// 	};
//    
////    if (!isTop) {
////    clearInterval(timer);
////  };
////    isTop = false;
//
//
// };
// 
// disp.onclick=function(){
////设置定时器
//  timer = setInterval(function(){
//    //获取滚动条距离顶部高度
//    var osTop = document.documentElement.scrollTop || document.body.scrollTop;
//    var ispeed = Math.floor(-osTop / 5);
//     
//    document.documentElement.scrollTop = document.body.scrollTop = osTop+ispeed;
//    //到达顶部，清除定时器
//    if (osTop == 0) {
//      clearInterval(timer);
//    };
//    
//    	isTop = true;
//    
//    
//     
//  },30);
//  
// };
//
// morc.onclick=function(){
// 	bottom.style.height="80%"
// }
// close.onclick=function(){
// 	bottom.style.height="0"
// 	
// }
 
var logo=document.querySelector(".logo");
var nav=document.querySelector(".nav_yc_box");
var i=0;
logo.onclick=function(){
	if(i===0){
		i++;
		nav.style.height="200px"
	}else{
		i=0;
		nav.style.height="0px"
	}
}
