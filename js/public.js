$(function(){
	//微信特效
	$('.wechat').mouseover(function(){
		$(this).find('.wtBox').show(function(){
			$(this).css({'transform':'rotate(720deg)','top':'-180px','left':'-115px','width':'265px','height':'168px','padding':'2px'})
		});
	});
	$('.wechat').mouseout(function(){
		$(this).find('.wtBox').show(function(){
			$(this).css({'transform':'rotate(0deg)','top':'-96px','left':'15px','width':'0px','height':'0px','padding':'0px'})
		});
	});
	//出现回到顶部按钮
	$(window).scroll(function(){
		if($(window).scrollTop()>0){
			$('#goToTop').slideDown();
		}else{
			$('#goToTop').slideUp();
		}
		
	});
	//回到顶部
	$('#goToTop a').click(function(){
		$('html,body').animate({  
            scrollTop: 0
        }, 500); 
	});
});