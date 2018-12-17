
$(function(){
    $(".contentLeft ul").on({
        click:function(){
            console.log("text",$(this));
            if($(this).children('span').text()=="首页"){
                $(".contentRight #home").hide();
                return;
            }else{
            	$(".contentRight #home").show();
            	$(".contentRight firstpage").hide();
            }
            
        }
    },"li");
    
    $(".xialakuang1").hover(function(){
		$(".something1").toggle();
	})
	$(".something1").hover(function(){
		$(".something1").toggle();
	})
	$(".xialakuang2").hover(function(){
		$(".something2").toggle();
	})
	$(".something2").hover(function(){
		$(".something2").toggle();
	})
	$(".contentLeft").height($(window).height()-140);//将div高度设置为窗口高度
    $(".contentRight").height($(window).height()-140);//将div高度设置为窗口高度
    // $(".contentLeft li:first").trigger('click');
})
