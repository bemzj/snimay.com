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
	//省市区
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
    !function () {
        var $target = $('#cityP');

        $target.citySelect();

        $target.on('click', function (event) {
            event.stopPropagation();
            $target.citySelect('open');
        });

        $target.on('done.ydui.cityselect', function (ret) {
            $(this).val(ret.provance + ' ' + ret.city + ' ' + ret.area);
        });
    }();
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
	});
	$('.iSuggest').click(function(){
		$(this).addClass('wbtn');
		$('.iProgrem').removeClass('wbtn');
		$('.iWant').removeClass('wbtn');
		$('.suggest').show();
		$('.proBlem').hide();
		$('.woWant').hide();
		$('.suggest').addClass('animated bounceInUp');
	});
	$('.iProgrem').click(function(){
		$(this).addClass('wbtn');
		$('.iWant').removeClass('wbtn');
		$('.iSuggest').removeClass('wbtn');
		$('.proBlem').show();
		$('.woWant').hide();
		$('.suggest').hide();
		$('.proBlem').addClass('animated flipInY');
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
	
	//播放视频
	var myPlayer1 = videojs('my-video1');
	videojs("my-video1").ready(function(){
		var myPlayer = this;
		$('.playv').click(function(){
			myPlayer.play();
			$('.playVideo').hide();
		});
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