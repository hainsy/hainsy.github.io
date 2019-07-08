
    //返回顶部
    $(window).scroll(function(){
        if($(window).scrollTop()>200){
            $("#Gotop").show();
        }else{
            $("#Gotop").hide();
        }			
    });
    $("#Gotop").click(function(){
        $("html,body").animate({"scrollTop":0},800);
    });
