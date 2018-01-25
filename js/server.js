$(function(){
	//打开选择
	$('.rRight a').click(function(){
		if($(this).attr('isOpen')=='false')
		{
			$(this).css('transform','rotate(-180deg)');
			$(this).attr('isOpen','true');
			var h = $(this).parent('.rRight').siblings('.rMiddle').height();
			$(this).parent('.rRight').parent('.radioBox').stop().animate({height:h+'px'},50);
		}else{
			$(this).attr('isOpen','false');
			$(this).css('transform','rotate(0deg)');
			$(this).parent('.rRight').parent('.radioBox').stop().animate({height:'60px'},50);
		}
	});
	//日期
	layui.use('laydate', function(){
	  	var laydate = layui.laydate;
	  	laydate.render({
		  elem: '.date'
		  ,calendar: true
		  ,position: 'abolute'
		  ,change: function(value, date){ //监听日期被切换
		    lay('#testView').html(value);
		  }
		});
		laydate.render({
		  elem: '.dateT'
		  ,calendar: true
		  ,position: 'abolute'
		  ,change: function(value, date){ //监听日期被切换
		    lay('#testView').html(value);
		  }
		});
	});
	$('.date').focus(function(){
		$(this).blur();
	});
	$('.dateT').focus(function(){
		$(this).blur();
	});
	layui.use('form', function(){
		  var form = layui.form;
		  
		  //监听提交
		  form.on('submit(formDemo)', function(data){
		    layer.msg(JSON.stringify(data.field));
		    return false;
		  });
	});
    $('#city').focus(function(){
		$(this).blur();
	});
	$('#cityP').focus(function(){
		$(this).blur();
	});
	//选择文件
	$('.files').change(function(){
		if($(this).val()=="")
		{
			$(this).siblings('span').text("未选择文件");
		}else{
			$(this).siblings('span').text($(this).val());
		}
		
	});
	//我要定制
	$('.iWant').click(function(){
		$(this).addClass('wbtn');
		$('.iProgrem').removeClass('wbtn');
		$('.iSuggest').removeClass('wbtn');
		$('.woWant').show();
		$('.proBlem').hide();
		$('.suggest').hide();
		$('.woWant').addClass('animated bounceInDown');
		indexEvent = 1;
	});
	$('.iSuggest').click(function(){
		$(this).addClass('wbtn');
		$('.iProgrem').removeClass('wbtn');
		$('.iWant').removeClass('wbtn');
		$('.suggest').show();
		$('.proBlem').hide();
		$('.woWant').hide();
		$('.suggest').addClass('animated bounceInUp');
		indexEvent = 3;
	});
	$('.iProgrem').click(function(){
		$(this).addClass('wbtn');
		$('.iWant').removeClass('wbtn');
		$('.iSuggest').removeClass('wbtn');
		$('.proBlem').show();
		$('.woWant').hide();
		$('.suggest').hide();
		$('.proBlem').addClass('animated flipInY');
		indexEvent = 2;
	});
	//回车事件监听
	var indexEvent = 1;
	$(document).keypress(function(event){    
    	var keynum = (event.keyCode ? event.keyCode : event.which);    
    	if(keynum == '13'){  
    		if(searchFouce==true)
    		{
    			//输入框在搜索框内
    		}else{
    			switch(indexEvent)
    			{
    				case 1:
    					console.log("1");
    					break;
    				case 2:
    					console.log("2");
    					break;
    				case 3:
    					console.log("3");
    					break;
    			}
    		}
	    }
	});
	//电话
	var pt = 0;
	var pTween = setInterval(function(){
		pt++;
		if(pt==3)
		{
			pt=0;
		}
		$('.pbBox img').attr('src','img/phones'+pt+'.png');
	},500);
	//步骤
	var stepTween;
	var sn = 0;
	stepTween = setInterval(function(){
		
		$('.stepChild').eq(sn).addClass('stepActive');
		$('.stepChild').eq(sn).siblings('.stepChild').removeClass('stepActive');
		sn++;
		if(sn==6)
		{
			sn=0;
		}
	},1000);
	
	$('.stepChild').mousemove(function(){
		sn = $(this).index()+1;
		if(sn==6)
		{
			sn = 0;
		}
		clearInterval(stepTween);
		$('.stepChild').siblings('.stepChild').removeClass('stepActive');
	});
	$('.stepChild').mouseout(function(){
		stepTween = setInterval(function() {
		
			$('.stepChild').eq(sn).addClass('stepActive');
			$('.stepChild').eq(sn).siblings('.stepChild').removeClass('stepActive');
			sn++;
			if(sn == 6) {
				sn = 0;
			}
		}, 1000);
	});
	//弹窗
//	popWindow("信息提醒","Information to remind","您的反馈意见已经发送成功。",'感谢您对诗尼曼的支持！');
	//播放视频
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
	$('.area11>p').click(function(event){
		event.stopPropagation();
		$('.proviceBox').remove();
		$('.area11').removeAttr('provice');
		$('.area22').removeAttr('city');
		$('.area33').removeAttr('area');
		getProvince('.area11','p');
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
		$('.area22>p').html("请选择市");
		$('.area33>p').html("请选择区");		
	});
	$('.area22>p').click(function(event){
		event.stopPropagation();
		$('.area22').removeAttr('city');
		$('.area33').removeAttr('area');
		$('.proviceBox').remove();
		getCity('.area22','p');
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
		$('.area33>p').html("请选择区");
	});
	$('.area33>p').click(function(event){
		event.stopPropagation();
		$('.area33').removeAttr('area');
		$('.proviceBox').remove();
		$(this).html("请选择区");
		getArea('.area33','p');
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
	$('.area111>p').click(function(event){
		event.stopPropagation();
		$('.proviceBox').remove();
		$('.area111').removeAttr('provice');
		$('.area222').removeAttr('city');
		$('.area333').removeAttr('area');
		getProvince('.area111','p');
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
		$('.area222>p').html("请选择市");
		$('.area333>p').html("请选择区");		
	});
	$('.area222>p').click(function(event){
		event.stopPropagation();
		$('.area222').removeAttr('city');
		$('.area333').removeAttr('area');
		$('.proviceBox').remove();
		getCity('.area222','p');
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
		$('.area333>p').html("请选择区");
	});
	$('.area333>p').click(function(event){
		event.stopPropagation();
		$('.area333').removeAttr('area');
		$('.proviceBox').remove();
		$(this).html("请选择区");
		getArea('.area333','p');
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
	//播放视频
	var myPlayer1 = videojs('my-video1');
	videojs("my-video1").ready(function(){
		var myPlayer = this;
		$('.playv').click(function(){
			myPlayer.play();
			$('.playVideo').hide();
		});
	});
	
	$('.netNavs ul li button').click(function(){
		$(this).addClass('btnActive');
		$(this).parent('li').siblings('li').find('button').removeClass('btnActive');
		var eq; 
		eq= parseInt($(this).attr('eq'));
		if(eq==1)
		{
			$('body').css('background-color','#EEEEEE');
			$('#fourp').css('background-color','#EEEEEE');
			
		}else{
			$('body').css('background-color','white');
			$('#fourp').css('background-color','white');
			
		}
		switch(eq)
		{
			case 0:
				$('#contact').show();
				$('#server').hide();
				$('#specialServer').hide();
				$('#tenServer').hide();
				$('#contact').addClass('animated bounceInUp');
				break;
			case 1:
				$('#contact').hide();
				$('#server').show();
				$('#specialServer').hide();
				$('#tenServer').hide();
				$('#server').addClass('animated bounceInUp');
				break;
			case 2:
				$('#contact').hide();
				$('#server').hide();
				$('#specialServer').show();
				$('#tenServer').hide();
				$('#specialServer').addClass('animated bounceInUp');
				break;
			case 3:
				$('#contact').hide();
				$('#server').hide();
				$('#specialServer').hide();
				$('#tenServer').show();
				$('#tenServer').addClass('animated bounceInUp');
				break;
		}
	});
});
var map = new AMap.Map('companyMap', {
    resizeEnable: true,
    zoom:15,
    center: [113.499548,22.951488]
});
var marker = new AMap.Marker({
    position: map.getCenter(),
    draggable: true,
    cursor: 'move',
    icon: "img/addressIcon.png"
});
marker.setMap(map);
// 设置点标记的动画效果，此处为弹跳效果
//marker.setAnimation('AMAP_ANIMATION_BOUNCE');
marker.setTitle('点击我，打开地图，广州诗尼曼家居股份有限公司欢迎您的到来！');
marker.on('click',function(e){
    marker.markOnAMAP({
    name:'广州诗尼曼家居股份有限公司',
    position:marker.getPosition()
    })
});
//打开更多
	$('.short p').click(function(){
		if($(this).attr('isOpen')=='false')
		{
			$(this).attr('isOpen',true);
			$(this).siblings('.profess').stop().slideDown();
			$(this).siblings('img').stop().css('transform','rotate(180deg)');
		}else{
			$(this).attr('isOpen',false);
			$(this).siblings('.profess').slideUp();
			$(this).siblings('img').stop().css('transform','rotate(0deg)');
		}
	});
	$('.profess ul li').click(function(){
		$(this).parents(".short").children('p').text($(this).children('p').text());
		$(this).parents(".short").children('p').attr('isOpen',false);
		$(this).parents(".short").children('p').siblings('.profess').slideUp();
		$(this).parents(".short").children('p').siblings('img').stop().css('transform','rotate(0deg)');
	});