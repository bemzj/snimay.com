$(function(){
	var swiper = new Swiper('.swiper-container-four', {
        slidesPerView: 4,
        paginationClickable: true,
        spaceBetween: 20,
        prevButton:'.swiper-button-prev',
		nextButton:'.swiper-button-next',
		loop:true
		
    });
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
});
