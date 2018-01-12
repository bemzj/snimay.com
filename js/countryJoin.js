$(function(){
	//开眼
	$('.closeEye').click(function(){
		$(this).siblings('input').attr('type','text');
		$(this).hide();
		$(this).siblings('.openEye').show();
	});
	//闭眼
	$('.openEye').click(function(){
		$(this).siblings('input').attr('type','password');
		$(this).hide();
		$(this).siblings('.closeEye').show();
	});
	var citys = [];
	$.get('citys.json', function(data) {
		console.log(data);
		for(var i = 0; i < data.length; i++) {
	
			var cArray = [];
			var aArray = [];
			for(var j = 0; j < data[i].city.length; j++) {
	
				aArray = [];
				if(data[i].city[j].area) {
					for(var k = 0; k < data[i].city[j].area.length; k++) {
						aArray.push(data[i].city[j].area[k].country_name);
					}
				}else{
					aArray=["城区"];
				}
				var cJoin = {
					"n": data[i].city[j].city_name,
					"a": aArray
				}
				cArray.push(cJoin);
			}
	
			var nJoin = {
				"n": data[i].province_name,
				"c": cArray
			}
			citys.push(nJoin);
		}
//		console.log(citys);
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
			switch(i)
			{
				case 0:
				case 11:
				case 12:
				case 18:
				case 19:
				case 21:
				case 23:
				case 27:
					$('.lr1').append('<div class="floatl"><a href="###" c='+i+'>'+citys[i].n+'</a></div>');
				break;
				case 2:
				case 6:
				case 7:
				case 9:
				case 13:
				case 15:
				case 16:
				case 17:
					$('.lr2').append('<div class="floatl"><a href="###" c='+i+'>'+citys[i].n+'</a></div>');
				break;
				case 3:
				case 4:
				case 5:
				case 8:
				case 14:
				case 20:
				case 22:
				case 26:
				case 28:
				case 29:
					$('.lr3').append('<div class="floatl"><a href="###" c='+i+'>'+citys[i].n+'</a></div>');
				break;
				case 1:
				case 10:
				case 24:
				case 25:
				case 30:
				
					$('.lr4').append('<div class="floatl"><a href="###" c='+i+'>'+citys[i].n+'</a></div>');
				break;
			}
			
		}
		$('.proviceBox a').click(function(){
			$(target).children(label).html($(this).html());
			$('.cbPro').html($(this).html());
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
		$('.cbPro').html("请选择市");	
		$('.cbCity').html("请选择市");
		$('.areaBox a').remove();
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
		$('.cbCity').html("请选择市");
		$('.areaBox a').remove();
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
				for(var i = 0; i < citys[index].c.length; i++) {
					$('.lr').prepend('<div class="floatl"><a href="###" c='+i+'>' + citys[index].c[i].n + '</a></div>');
				}
			$('.lr1').append('<div class="clearl">');
			$('.proviceBox a').click(function() {
				$(target).children(label).html($(this).html());
				$('.proviceBox').remove();
				$('.cbCity').html($(this).html());
				$(target).addClass('zjCity');
				$(target).attr('city', $(this).attr('c'));
				var indexp = $('.zjProvice').attr('provice');
				var indexc = $('.zjCity').attr('city');
				for(var i = 0; i < citys[indexp].c[indexc].a.length; i++) {
					$('.areaBox').prepend('<a href="###" class="floatl">' + citys[indexp].c[indexc].a[i] + '</a>');
				}
				$('.areaBox a').click(function(){
					$('.areaBox a').removeClass('areaActive');
					$(this).addClass('areaActive')
				});
			});
		} 
	}
	//游客访问
	$('.touInvist').on('click',function(){
		$('.login').hide();
		$('.tour').show().addClass('animated bounceInUp');
	});
});
