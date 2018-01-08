$(function(){
	//子区域标题导航
	$('.childSelect li').click(function(){
		$(this).addClass('lsdn');
		$(this).siblings('li').removeClass('lsdn');
		$(this).siblings('li').removeClass('lsdpn');
		$(this).prev('li').addClass('lsdpn');
		var index = parseInt($(this).attr('index'));
		console.log(index);
		switch(index){
			case 0:
				$('.company').show();
				$('.videoCenter').hide();
				$('.media').hide();
				$('.email').hide();
				$('.company').addClass('animated bounceInUp');
				break;
			case 1:
				$('.media').show();
				$('.videoCenter').hide();
				$('.company').hide();
				$('.email').hide();
				$('.media').addClass('animated bounceInUp');
				break;
			case 2:
				$('.videoCenter').show();
				$('.email').hide();
				$('.company').hide();
				$('.media').hide();
				$('.videoCenter').addClass('animated bounceInUp');
				break;
				break;
			case 3:
				$('.email').show();
				$('.videoCenter').hide();
				$('.company').hide();
				$('.media').hide();
				$('.email').addClass('animated bounceInUp');
				break;
		}
	});
	//返回媒体报道列表
	$('.newsReturn').click(function(){
		$('#news').show();
		$('.media').show();
		$('#details').hide();
		$('.newsD').hide();
		$('.media').addClass('animated bounceInUp');
	});
	//查看详情
	$('.readMore').click(function(){
		$('#news').hide();
		$('.media').hide();
		$('#details').show();
		$('.newsD').show();
		$('.newsD').addClass('animated bounceInUp');
	});
	//电子报刊
	$('.emailReturn').click(function(){
		$('#news').show();
		$('.email').show();
		$('#details').hide();
		$('.emailDetails').hide();
		$('.email').addClass('animated bounceInUp');
	});
	var first = false;
	//查看电子报刊详情
	$('.lookMore').click(function(){
		$('#news').hide();
		$('.email').hide();
		$('#details').show();
		$('.emailDetails').show();
		$('.emailDetails').addClass('animated tada');
		if(first == false)
		{
			first = true;
			var swiper = new Swiper('.swiper-container', {
				slidesPerView: 3,
				spaceBetween: 30,
				loop: true,
				centeredSlides: true,
				slidesPerview: 'auto',
				loopedSlides: 5,
				autoplay: 5000,
				nextButton: '.swiper-button-next',
				prevButton: '.swiper-button-prev',
			});
		}
	});
});