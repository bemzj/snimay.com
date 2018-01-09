$(function(){
	//实例化轮播图
	var mySwiper = new Swiper('.swiper-container-index', {
		loop: true,
		pagination: '.swiper-pagination',
		paginationClickable :true,
		autoplayDisableOnInteraction : false,
		paginationBulletRender: function (swiper, index,className) {
		    return '<span class="' + className + '">0' + (index + 1) + '</span>';
		    
		},
		effect : 'fade',
		autoplay:5000,
		onInit: function(swiper){
			//添加分页标签
			for(i=0;i<$('.swiper-pagination span').length;i++)
			{
				$('.swiper-pagination span').eq(i).text('0'+(i+1));
			}	
		},onSlideChangeStart: function(swiper){
	       if(swiper.activeIndex%2==0){
	       		$('.logoL a img').attr('src','img/logobb.png');
	       		$('header nav .navR ul li a').css('color',"#333333");
	       		$('header nav .navR ul li:nth-child(1) a').css('color',"#a51e32");
	       		$('header nav .navR ul li:nth-child(9) a img').attr('src','img/moreB.png');
	       		$('header nav .navR ul li:nth-child(10) a img').attr('src','img/searchB.png');
	       		$('header .sword').css('border-color','#C8C8C8');
	       }else{
	       		$('.logoL a img').attr('src','img/logo.png');	       		
	       		$('header nav .navR ul li a').css('color','#FFFFFF');
	       		$('header nav .navR ul li:nth-child(1) a').css('color',"#a51e32");
	       		$('header nav .navR ul li:nth-child(9) a img').attr('src','img/moreB.png');
	       		$('header nav .navR ul li:nth-child(10) a img').attr('src','img/searchB.png');
	       		$('header .sword').css('border-color','white');
	       }
	    }
	});  
	//实例化轮播图
	var mySwiperImage = new Swiper('.swiper-container-image', {
		loop: true,
		pagination: '.swiper-pagination',
		paginationClickable :true,
		autoplayDisableOnInteraction : false,
		paginationBulletRender: function (swiper, index,className) {
		    return '<span class="' + className + '">0' + (index + 1) + '</span>';
		    
		},
		autoplay:5000,
		onInit: function(swiper){
			//添加分页标签
			for(i=0;i<$('.swiper-pagination span').length;i++)
			{
				$('.swiper-pagination span').eq(i).text('0'+(i+1));
			}	
		},
	}); 
	//业务中心
	$('.moreFun').mouseover(function(){
		$(this).find('a').stop().animate({'top':'0%'},100);
		$(this).find('.imgPop').stop().animate({'top':'0%'},100);
	});
	$('.moreFun').mouseout(function(){
		$(this).find('a').stop().animate({'top':'100%'},100);
		$(this).find('.imgPop').stop().animate({'top':'100%'},100);
	});
	//咨询中心
	$('.ccImg').mouseover(function(){
		$(this).find('.ccOn').stop().slideDown(100);
	});
	$('.ccImg').mouseout(function(){
		$(this).find('.ccOn').stop().slideUp(100);
	});
});