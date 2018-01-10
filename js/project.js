$(function(){
	//子区域标题导航
	$('#typeChoice .childSelect li').mouseover(function(){
		if($(this).index()==0)
		{
			$(this).addClass('lsd');
		}else{
			$(this).addClass('lsd');
			$(this).prev('li').addClass('lsdp');
		}
	});
	$('#typeChoice .childSelect li').mouseout(function(){
		if($(this).index()==0)
		{
			$(this).removeClass('lsd');
		}else{
			$(this).removeClass('lsd');
			$(this).prev('li').removeClass('lsdp');
		}
	});
	$('#typeChoice .childSelect li').click(function(){
		$('#typeChoice .childSelect li').removeClass('lsdpn');
		$('#typeChoice .childSelect li').removeClass('lsdn');
		if($(this).index()==0)
		{
			$(this).addClass('lsdn');
		}else{
			$(this).addClass('lsdn');
			$(this).prev('li').addClass('lsdpn');
		}
	});
});
