$(function(){
	var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 30,
        loop:true,
        prevButton:'.prev',
		nextButton:'.next',
    });
    $('.colorList').find('a').click(function(){
    	$(this).addClass('colorActive');
    	$(this).parent('li').siblings('li').find('a').removeClass('colorActive');
    });
});
