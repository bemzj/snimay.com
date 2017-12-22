$(function(){
	//步骤循环
	var step = 1;
	$('.stepChild').eq(0).addClass('scActive');
	$('.stepChild').eq(0).find('.spl').css('background-position-y','-66px');
	var stepTween;
	stepTween = setInterval(function(){
		if(step-1<0)
		{
			$('.stepChild').eq(2).removeClass('scActive');
			$('.stepChild').eq(2).find('.spl').css('background-position-y',-132*2+'px');
		}else{
			$('.stepChild').eq(step-1).removeClass('scActive');
			$('.stepChild').eq(step-1).find('.spl').css('background-position-y',-132*(step-1)+'px');
		}
		
		$('.stepChild').eq(step).addClass('scActive');
		$('.stepChild').eq(step).find('.spl').css('background-position-y',-66-132*step+'px');
		if(++step==3)
		{
			step = 0;
		}
	},4000);
	for(var i=0;i<6;i++)
	{
		$('.btBox').eq(i).animate({"margin-left":0,"opacity":1},400*(i+1));
	}
	
	//
	
	function getProvince(target,label){
		/* 
		 * target为父级
		 * label为装子级的东西
		 */
		var html = "";
		html += '<div class="proviceBox"><p>省份</p>';
		html+= '<div class="list"><div class="lLeft floatl"><p>A-G</p></div><div class="lRight  floatl lr1"></div></div><div class="clearl"></div>	</div>';
		html+= '<div class="list"><div class="lLeft floatl"><p>H-K</p></div><div class="lRight  floatl lr2"><div class="clearl"></div></div><div class="clearl"></div>	</div>';
		html+= '<div class="list"><div class="lLeft floatl"><p>L-S</p></div><div class="lRight  floatl lr3"><div class="clearl"></div></div><div class="clearl"></div>	</div>';
		html+= '<div class="list"><div class="lLeft floatl"><p>T-Z</p></div><div class="lRight  floatl lr4"><div class="clearl"></div></div><div class="clearl"></div>	</div>';
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
		$('.lr1').append('<div class="clearl">');
		$('.lr1').append('<div class="clearl">');
		$('.lr1').append('<div class="clearl">');
		$('.lr1').append('<div class="clearl">');
		$('.proviceBox a').click(function(){
			$(target).children(label).html($(this).html());
			$('.proviceBox').remove();
			$(target).addClass('zjProvice');
			$(target).attr('provice',$(this).attr('c'));
		});
	}														
	function getCity(target,label){
		var html = "";
		html += '<div class="proviceBox"><p>市</p>';
		html+= '<div class="list"><div class="lLeft floatl"><p>A-G</p></div><div class="lRight  floatl lr"></div></div><div class="clearl"></div>	</div>';
		html +=	'</div>';
		$('.pro').append(html);
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
				$('.lr').append('<div class="floatl"><a href="###">' + citys[index].n + '</a></div>');
			} else if(index < 34) {
				for(var i = 0; i < citys[index].c.length; i++) {
					$('.lr').prepend('<div class="floatl"><a href="###"c='+i+'>' + citys[index].c[i].n + '</a></div>');
				}
			};
			$('.lr1').append('<div class="clearl">');
			$('.proviceBox a').click(function() {
				$(target).children(label).html($(this).html());
				$('.proviceBox').remove();
				$(target).addClass('zjCity');
				$(target).attr('provice', $(this).attr('c'));
			});
		} 
	}
	function getArea(target,label){
		var html = "";
		html += '<div class="proviceBox"><p>市</p>';
		html+= '<div class="list"><div class="lLeft floatl"><p>A-G</p></div><div class="lRight  floatl lr"></div></div><div class="clearl"></div>	</div>';
		html +=	'</div>';
		$('.pro').append(html);
		$('.proviceBox').width(500);
		$('.proviceBox .lLeft').remove();
		var indexc = $('.zjCity').attr('provice');
		if(typeof indexc == 'undefined'){
			$('.lr').prepend('<div class="floatl" style="width:100%"><a href="###">'+"请先选择省区或市区"+'</a></div>');
			$('.proviceBox a').click(function() {
				$('.proviceBox').remove();
			});
		}else{
			if(index < 4) {
				$('.lr').append('<div class="floatl"><a href="###">' + citys[index].n + '</a></div>');
			} else if(index < 34) {
				for(var i = 0; i < citys[index].c.length; i++) {
					$('.lr').prepend('<div class="floatl"><a href="###">' + citys[index].c[i].n + '</a></div>');
				}
			};
			$('.lr1').append('<div class="clearl">');
			$('.proviceBox a').click(function() {
				$(target).children(label).html($(this).html());
				$('.proviceBox').remove();
				$(target).attr('provice', $(this).attr('c'));
			});
		} 
	}

});
