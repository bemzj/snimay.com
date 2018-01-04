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
//	$('.short').mouseleave(function(){
//		open  = true;
//		$(this).children('p').attr('isOpen',false);
//		$(this).children('p').siblings('.profess').slideUp();
//		$(this).children('p').siblings('img').stop().css('transform','rotate(0deg)');
//	});
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
			switch(i)
			{
				case 0:
				case 3:
				case 13:
				case 15:
				case 18:
				case 19:
				case 23:
				case 27:
				case 32:
					$('.lr1').append('<div class="floatl"><a href="###" c='+i+'>'+citys[i].n+'</a></div>');
				break;
				case 4:
				case 6:
				case 8:
				case 9:
				case 11:
				case 16:
				case 17:
				case 20:
				case 21:
				case 33:
					$('.lr2').append('<div class="floatl"><a href="###" c='+i+'>'+citys[i].n+'</a></div>');
				break;
				case 1:
				case 5:
				case 7:
				case 10:
				case 12:
				case 21:
				case 26:
				case 28:
				case 29:
					$('.lr3').append('<div class="floatl"><a href="###" c='+i+'>'+citys[i].n+'</a></div>');
				break;
				case 2:
				case 14:
				case 24:
				case 25:
				case 30:
				case 31:
				
					$('.lr4').append('<div class="floatl"><a href="###" c='+i+'>'+citys[i].n+'</a></div>');
				break;
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
			if(index < 4) {
				$('.lr').append('<div class="floatl"><a href="###" c='+i+'>' + citys[index].n + '</a></div>');
			} else if(index < 34) {
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
				$('.development').hide();
				$('.profile').addClass('animated bounceInUp');
				break;
			case 1:
				$('.development').show();
				$('.profile').hide();
				$('.honor').hide();
				$('.net').hide();
				$('.development').fadeIn(1000);
				if(dCondition==false){
					dCondition = true;
					//添加历程
					for(var i = 0; i < years.length; i++) {
						var html = '';
						if(years[i] % 2 == 1) {
							html += '<div class="mBox lBox" ><div class="mLeft" data-scroll-reveal="enter left and move 50px over 1.0s">';
							html += '<p class="mTitle">' + title[i] + '</p><p class="mContent mr' + i + ' ">' + content[i] + '</p></div>';
							html += '<div class="mMiddle"><div></div></div>';
							html += '<div class="mright" data-scroll-reveal="enter right and move 50px over 1.0s"><p>' + years[i] + '</p></div></div>';
						} else {
							html += '<div class="mBox rBox" ><div class="mLeft" data-scroll-reveal="enter right and move 50px over 1.0s">';
							html += '<p class="mTitle">' + title[i] + '</p><p class="mContent mr' + i + ' ">' + content[i] + '</p></div>';
							html += '<div class="mMiddle"><div></div></div>';
							html += '<div class="mright" data-scroll-reveal="enter left and move 50px over 1.0s"><p>' + years[i] + '</p></div></div>';
						}
						$('.dashed').prepend(html);
						//3-26 4-13 2-44 1-60
						if($('.mr' + i).height() >= 30 && $('.mr' + i).height() < 60) {
							$('.mr' + i).prev('.mTitle').css('padding-top', '60px');
						} else if($('.mr' + i).height() >= 60 && $('.mr' + i).height() < 90) {
							$('.mr' + i).prev('.mTitle').css('padding-top', '44px');
						} else if($('.mr' + i).height() >= 90 && $('.mr' + i).height() < 120) {
							$('.mr' + i).prev('.mTitle').css('padding-top', '26px');
						} else if($('.mr' + i).height() >= 120 && $('.mr' + i).height() < 150) {
							$('.mr' + i).prev('.mTitle').css('padding-top', '13px');
						}
						if((i + 1) != years.length) {
							var htmlm = '';
							htmlm += '<div class="mbox"></div>';
							$('.dashed').prepend(htmlm);
						}
					}
					//开启滑动动画
					if(!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
						(function() {
							window.scrollReveal = new scrollReveal({
								reset: true
							});
						})();
					};
				}
				break;
			case 2:
				$('.honor').show();
				$('.profile').hide();
				$('.net').hide();
				$('.development').hide();
				$('.honor').addClass('animated bounceInDown');
				break;
			case 3:
				$('.net').show();
				$('.profile').hide();
				$('.honor').hide();
				$('.development').hide();
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
	//添加历程
	var years = [2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017];
	var title = ['开创基业','骏业宏开','环保先行','扩张海外','诚信企业','突破百家','走向国际','载誉前行','影响行业','千县千店','十年磨剑','全屋定制','签约海清','聚势谋局','橱类拔萃'];
	var content = ['诗尼曼品牌运营机构正式成立','首家加盟专卖店开张，揭开了诗尼曼向全国扩张的序幕','全部产品顺利通过国家环保部门检测，达到国际级环保标准','首家海外专卖店迪拜专卖店开张，揭开海外扩张的序幕；评为“质量安全优于同类产品百佳放心企业”','突破50家专卖店，评为“中国绿色环保产品及质量.服务.信誉AAA企业”、“绿色装饰联盟优秀会员”',
		'突破100家专卖店，评为“中国整体衣柜十大品牌”、“广州主流家居建材品牌 ”','突破200家专卖店，行业首创高端雕花新品上市，米洛利II代荣获迪拜家居设计展“最佳外观设计奖”','突破300家专卖店，当选全国工商联衣柜专委会副会长单位，荣获“中国衣柜行业设计金奖”、“中国衣柜行业环保示范品牌奖”','突破500家专卖店，荣获“2011中国衣柜行业十年影响力品牌”',
		'推出“千县千店”发展战略，提升品牌软实力，德国豪迈生产线正式投产，产能接轨国际，荣获“消费者最喜爱衣柜品牌”','全面构建国际标准厂房体系，产能提高四倍；品牌广告强势登陆央视，进军大众品牌的序幕','荣获“中国环境标志产品认证”、“3A级质量、服务、信誉企业”；斥巨资打造门窗产品国际标准生产线，全面进入整体家居大发展时代',
		'当选“全国工商联衣柜专委会执行会长单位”；正式签约影视巨星海清为品牌形象代言人；正式进军门窗领域，开创品牌多元化发展战略','进一步深化shoppingmall的消费模式；制造三厂正式投产，产能翻番，“大家居”战略全面升级；电商事业部“信息科技中心”新办公楼启用，“大电商”战略恢弘启动',
		'橱类拔萃：进军橱柜领域，实力入榜“中国500最具价值品牌”；湖北荆门生产基地落成，进一步拓展大家居版图；获红星美凯龙与居然之家建材巨头战略投资，强强联合助推大家居事业发展'
	]
	var dCondition = false;
	
});