$(function(){
	//省市区三级联动
	!function () {
        var $target = $('#city');

        $target.citySelect();

        $target.on('click', function (event) {
            event.stopPropagation();
            $target.citySelect('open');
        });

        $target.on('done.ydui.cityselect', function (ret) {
            $(this).val(ret.provance + ' ' + ret.city + ' ' + ret.area);
        });
    }();
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
			$('.logoL a img').attr('src','img/logobb.png');
	       	$('header nav .navR ul li a').css('color',"#333333");
	       	$('header nav .navR ul li:nth-child(7) a').css('color',"#a51e32");
	       	$('header nav .navR ul li:nth-child(9) a img').attr('src','img/moreB.png');
	       	$('header nav .navR ul li:nth-child(10) a img').attr('src','img/searchB.png');
		}
	});
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
	//子区域标题导航
	$('.childSelect li').click(function(){
		$(this).addClass('lsdn');
		$(this).siblings('li').removeClass('lsdn');
		$(this).siblings('li').removeClass('lsdpn');
		$(this).prev('li').addClass('lsdpn');
	});
	function getProvince(target,label){
		/* 
		 * target为父级
		 * label为装子级的东西
		 */
		var html = "";
		html += '<div class="proviceBox"><p>省份</p>';
		html+= '<div class="list"><div class="lLeft floatl"><p>A-G</p></div><div class="lRight  floatl lr1"></div></div><div class="clearl"></div>';
		html+= '<div class="list"><div class="lLeft floatl"><p>H-K</p></div><div class="lRight  floatl lr2"></div></div><div class="clearl"></div>';
		html+= '<div class="list"><div class="lLeft floatl"><p>L-S</p></div><div class="lRight  floatl lr3"></div></div><div class="clearl"></div>';
		html+= '<div class="list"><div class="lLeft floatl"><p>T-Z</p></div><div class="lRight  floatl lr4"></div></div><div class="clearl"></div>';
		html +=	'</div>';
		$(target).append(html);
		for(var i=0;i<citys.length;i++)
		{
			if(i<6)
			{
				$('.lr1').append('<div class="floatl"><a href="###" c='+i+'>'+citys[i].n+'</a></div>');
			}else if(i<16)
			{
				$('.lr2').append('<div class="floatl"><a href="###" c='+i+'>'+citys[i].n+'</a></div>');
			}else if(i<25)
			{
				$('.lr3').append('<div class="floatl"><a href="###" c='+i+'>'+citys[i].n+'</a></div>');
			}else{
				$('.lr4').append('<div class="floatl"><a href="###" c='+i+'>'+citys[i].n+'</a></div>');
			}
			
		}
		$('.proviceBox a').click(function(){
			$(target).children(label).html($(this).html());
			$('.proviceBox').remove();
			$(target).addClass('zjProvice');
			$(target).attr('provice',$(this).attr('c'));
		});
	}
	$('.area1>p').click(function(event){
		event.stopPropagation();
		$('.proviceBox').remove();
		$('.area1').removeAttr('provice');
		$('.area2').removeAttr('city');
		$('.area3').removeAttr('area');
		getProvince('.area1','p');
		if($(window).height()-($(this).offset().top-$(window).scrollTop())>=($('.proviceBox').height()+20))
		{
			$('.proviceBox').css('top','65px');
		}else if($(this).offset().top-$(window).scrollTop()>($('.proviceBox').height()+20)){
			$('.proviceBox').css('top',-($('.proviceBox').height()+20)+'px');
		}
		if($(window).width()-$(this).offset().left>=($('.proviceBox').width()+10)){
			$('.proviceBox').css('left','0px');
		}else if($(window).width()-$(this).offset().left<($('.proviceBox').width()+10)){
			$('.proviceBox').css('left',($(this).width()-$('.proviceBox').width())+'px');
		}
		$(this).html("请选择省");
		$('.area2>p').html("请选择市");
		$('.area3>p').html("请选择区");		
	});
	$('.area2>p').click(function(event){
		event.stopPropagation();
		$('.area2').removeAttr('city');
		$('.area3').removeAttr('area');
		$('.proviceBox').remove();
		getCity('.area2','p');
		if($(window).height()-($(this).offset().top-$(window).scrollTop())>=($('.proviceBox').height()+20))
		{
			$('.proviceBox').css('top','65px');
		}else if($(this).offset().top-$(window).scrollTop()>($('.proviceBox').height()+20)){
			$('.proviceBox').css('top',-($('.proviceBox').height()+20)+'px');
		}
		if($(window).width()-$(this).offset().left>=($('.proviceBox').width()+10)){
			$('.proviceBox').css('left','0px');
		}else if($(window).width()-$(this).offset().left<($('.proviceBox').width()+10)){
			$('.proviceBox').css('left',($(this).width()-$('.proviceBox').width())+'px');
		}
		$(this).html("请选择市");
		$('.area3>p').html("请选择区");
	});
	$('.area3>p').click(function(event){
		event.stopPropagation();
		$('.area3').removeAttr('area');
		$('.proviceBox').remove();
		$(this).html("请选择区");
		getArea('.area3','p');
		if($(window).height()-($(this).offset().top-$(window).scrollTop())>=($('.proviceBox').height()+20))
		{
			$('.proviceBox').css('top','65px');
		}else if($(this).offset().top-$(window).scrollTop()>($('.proviceBox').height()+20)){
			$('.proviceBox').css('top',-($('.proviceBox').height()+20)+'px');
		}
		if($(window).width()-$(this).offset().left>=($('.proviceBox').width()+10)){
			$('.proviceBox').css('left','0px');
		}else if($(window).width()-$(this).offset().left<($('.proviceBox').width()+10)){
			$('.proviceBox').css('left',($(this).width()-$('.proviceBox').width())+'px');
		}
	});
	function getCity(target,label){
		var html = "";
		html += '<div class="proviceBox"><p>市</p>';
		html+= '<div class="list"><div class="lLeft floatl"><p>A-G</p></div><div class="lRight  floatl lr"></div></div><div class="clearl"></div>	</div>';
		html +=	'</div>';
		$(target).append(html);
		$('.proviceBox').width(500);
		$('.proviceBox .lLeft').remove();
		var index = $('.zjProvice').attr('provice');
		if(typeof index == 'undefined'){
			$('.lr').prepend('<div class="floatl" style="width:100%"><a href="###">'+"请先选择省份"+'</a></div>');
			$('.proviceBox a').click(function() {
				$('.proviceBox').remove();
			});
		}else{
			if(index ==0||index ==23||index==25||index==30) {
				$('.lr').append('<div class="floatl"><a href="###" c='+i+'>' + citys[index].n + '</a></div>');
			} else{
				for(var i = 0; i < citys[index].c.length; i++) {
					$('.lr').prepend('<div class="floatl"><a href="###" c='+i+'>' + citys[index].c[i].n + '</a></div>');
				}
			};
			$('.lr1').append('<div class="clearl">');
			$('.proviceBox a').click(function() {
				$(target).children(label).html($(this).html());
				$('.proviceBox').remove();
				$(target).addClass('zjCity');
				$(target).attr('city', $(this).attr('c'));
			});
		} 
	}
	function getArea(target,label){
		var html = "";
		html += '<div class="proviceBox"><p>区</p>';
		html+= '<div class="list"><div class="lLeft floatl"><p>A-G</p></div><div class="lRight  floatl lr"></div></div><div class="clearl"></div>	</div>';
		html +=	'</div>';
		$(target).append(html);
		$('.proviceBox').width(500);
		$('.proviceBox .lLeft').remove();
		var indexp = $('.zjProvice').attr('provice');
		var indexc = $('.zjCity').attr('city');
		if(typeof indexc == 'undefined' || typeof indexp == 'undefined' ){
			$('.lr').prepend('<div class="floatl" style="width:100%"><a href="###">'+"请先选择省区或市区"+'</a></div>');
			$('.proviceBox a').click(function() {
				$('.proviceBox').remove();
			});
		}else{
			if(indexp ==0||indexp ==23||indexp==25||indexp==30) {
				for(var i=0;i<citys[indexp].c[0].a.length;i++)
				{
					$('.lr').append('<div class="floatl"><a href="###" c='+i+'>' + citys[indexp].c[0].a[i] + '</a></div>');
				}
				
			} else{
				for(var i = 0; i < citys[indexp].c[indexc].a.length; i++) {
					$('.lr').prepend('<div class="floatl"><a href="###" c='+i+'>' + citys[indexp].c[indexc].a[i] + '</a></div>');
				}
			};
			$('.lr1').append('<div class="clearl">');
			$('.proviceBox a').click(function() {
				$(target).children(label).html($(this).html());
				$('.proviceBox').remove();
				$(target).attr('area', $(this).attr('c'));
			});
		} 
	}
	
});