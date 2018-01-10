$(function(){
	//子区域标题导航
	$('.childSelect li').mouseover(function(){
		if($(this).index()==0)
		{
			$(this).addClass('lsd');
		}else{
			$(this).addClass('lsd');
			$(this).prev('li').addClass('lsdp');
		}
	});
	$('.childSelect li').mouseout(function(){
		if($(this).index()==0)
		{
			$(this).removeClass('lsd');
		}else{
			$(this).removeClass('lsd');
			$(this).prev('li').removeClass('lsdp');
		}
	});
	$('.childSelect li').click(function(){
		$('.childSelect li').removeClass('lsdpn');
		$('.childSelect li').removeClass('lsdn');
		if($(this).index()==0)
		{
			$(this).addClass('lsdn');
		}else{
			$(this).addClass('lsdn');
			$(this).prev('li').addClass('lsdpn');
		}
	});
	$('.seriesBox ul li a').mouseover(function(){
		$('.seriesBox ul li a').removeClass('liActive');
		$(this).addClass('liActive');
	});
	$('.seriesBox ul li a').mouseout(function(){
		$('.seriesBox ul li a').removeClass('liActive');
	});
	$('.seriesBox ul li a').click(function(){
		$('.seriesBox ul li a').removeClass('hasChoices');
		$(this).addClass('hasChoices');
	});
	setLeft();
});
function setLeft(){
	//超过几行
	var col = parseInt($('.seriesBox ul').children('li').length/10);
	var length = $('.seriesBox ul').children('li').length%10;
	for(var i=0;i<col;i++)
	{
		$('.seriesBox ul li').eq(i*10).css('margin-left','50px');
		$('.seriesBox').append('<div class="linediv" style="top:'+(61*(i+1))+'px"></div>');
	}
	if(length!=0)
	{
		$('.seriesBox ul li').eq(i*10).css('margin-left',(1200-length*110)/2+'px');
	}
}
