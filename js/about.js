$(function(){
	//打开更多
	var open  = true;
	$('.short p').click(function(){
		if(open==true)
		{
			open = false;
			if($(this).attr('isOpen')=='false')
			{
				$(this).attr('isOpen',true);
				$(this).siblings('.profess').stop().slideDown(500,function(){
					open = true;
				});
				$(this).siblings('img').stop().css('transform','rotate(180deg)');
			}else{
				$(this).attr('isOpen',false);
				$(this).siblings('.profess').slideUp(500,function(){
					open = true;
				});
				$(this).siblings('img').stop().css('transform','rotate(0deg)');
			}
		}
	});
	$('.short').mouseleave(function(){
		open  = true;
		$(this).children('p').attr('isOpen',false);
		$(this).children('p').siblings('.profess').slideUp();
		$(this).children('p').siblings('img').stop().css('transform','rotate(0deg)');
	});
	$('.profess ul li').click(function(){
		open  = true;
		$(this).parents(".short").children('p').text($(this).children('p').text());
		$(this).parents(".short").children('p').attr('isOpen',false);
		$(this).parents(".short").children('p').siblings('.profess').slideUp();
		$(this).parents(".short").children('p').siblings('img').stop().css('transform','rotate(0deg)');
	});
	var mapExist = false;
	//选择
	$('.netNavs ul li button').click(function(){
		$(this).addClass('btnActive');
		$(this).parent('li').siblings('li').find('button').removeClass('btnActive');
		var eq; 
		eq= parseInt($(this).attr('eq'));
		
		switch(eq)
		{
			case 0:
				$('.profile').show();
				$('.honor').hide();
				$('.net').hide();
				$('.profile').addClass('animated bounceInUp');
				break;
			case 1:
				break;
			case 2:
				$('.honor').show();
				$('.profile').hide();
				$('.net').hide();
				$('.honor').addClass('animated bounceInDown');
				break;
			case 3:
				$('.net').show();
				$('.profile').hide();
				$('.honor').hide();
				$('.net').addClass('animated tada');
				if(mapExist==false){
					mapExist = true;
					var c = Raphael("map_container", 600, 600);
					// 初始化地图
					var map = InitializeMap(c, "0.2", "#C9E9F7");
					// 绘制地图
					DrawMap(c, map);
				}
				
				break;
		}
	});
});