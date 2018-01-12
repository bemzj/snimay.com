$(function(){
	var swiper = new Swiper('.swiper-container-four', {
        slidesPerView: 4,
        spaceBetween: 20,
        prevButton:'.swiper-button-prev1',
		nextButton:'.swiper-button-next1',
		loop:true
		
    });
    var swiper1 = new Swiper('.swiper-container-style', {
        prevButton:'.swiper-button-prev2',
		nextButton:'.swiper-button-next2',
		loop:true
    });
    //开启滑动动画
	if(!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
		(function() {
			window.scrollReveal = new scrollReveal({
				reset: true
			});
		})();
	};
	//为什么选择诗尼曼
	var title = [
		"大家居发展已成趋势",
		"轻松打造亿万级大商",
		"强劲研发实力",
		"全线营销助推80%增长"
	];
	var content = [
		"2017诗尼曼抓住转型升级契机，以全新设计精品、优势营销资源和全面发展战略，挥臂进军橱柜市场，再扩“大家居”版图，诗尼曼进入“聚势谋局·剑指巅峰”的黄金时期，未来5-10年，我们将与您共享百亿财富盛宴。",
		"针对各市场情况、开店模式，总部团队进行辅助营销分析。诗尼曼每年“千万大店 亿万大商”涌现已是常态，他们来自建材、名企高管、彩票小店等各行业，其人生因加入诗尼曼而得以改变，事业精彩纷呈！",
		"诗尼曼发挥自身强大的研发能力，拥有50余项研发专利，进行严苛测试，只为带来高品质产品与引领市场的革新利器，致力于为人类创造健康、环保的家居生活以及打造高质量、深内涵、精品质的家居产品。",
		"互联网时代，如何从浩瀚的信息海洋中最快最有效的攫取想要的资源，就成为商机所在。诗尼曼整各线上引流、全明星活动阵容、千万传媒广告、便捷新媒体服务等营销资源，助力终端80%年增长。"
	];
	var indexActive = 0;
	$('.jwTitle').html(title[indexActive]);
	$('.jwContent').html(content[indexActive]);
	$('.whyJoin .stepChild').click(function(){
		indexActive = $(this).index();
		$(this).addClass('scActive');
		$(this).siblings('.stepChild').removeClass('scActive');
		$('.jwTitle').html(title[indexActive]);
	$('.jwContent').html(content[indexActive]);
	});
	$('.rightNext').click(function(){
		indexActive++;
		if(indexActive==4)
		{
			indexActive=0;
		}
		$('.whyJoin .stepChild').eq(indexActive).addClass('scActive');
		$('.whyJoin .stepChild').eq(indexActive).siblings('.stepChild').removeClass('scActive');
		$('.jwTitle').html(title[indexActive]);
		$('.jwContent').html(content[indexActive]);
	});
	//
	var stepTween;
	var step = 0;
	$('.itcChild').eq(step).siblings('.itcChild').removeClass('itcChildActive');
	$('.itcChild').eq(step).addClass('itcChildActive');
	stepTween = setInterval(function(){
		
		step++;
		if(step==8)
		{
			step = 0;
		}
		$('.itcChild').eq(step).siblings('.itcChild').removeClass('itcChildActive');
		$('.itcChild').eq(step).addClass('itcChildActive');
	},2000);
	//
	$('.jmChoice button').click(function(){
		var index = $(this).index();
		$(this).addClass('jmButton');
		$(this).siblings('button').removeClass('jmButton');
		if(index==0){
			$('.modelBox').show().addClass('animated flipInX');
			$('.condition').hide();
		}else{
			$('.modelBox').hide();
			$('.condition').show().addClass('animated flipInX');
		}
	});
	//
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
	$('.area1>p').click(function(){
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
	$('.area2>p').click(function(){
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
	$('.area3>p').click(function(){
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
	//
	$('.arBtn button').click(function(){
		$(this).addClass('btnActive');
		$(this).siblings('button').removeClass('btnActive');
	});
	$('.closeJoin').click(function(){
		$('#add').animate({'width':'0%'},500,function(){
			$('#getMore').fadeIn(500);
		});
	});
	$('.getMore').click(function(){
		$('#getMore').fadeOut();
		$('#add').animate({'width':'100%'},500);
	})
});
