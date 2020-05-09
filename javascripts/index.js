//parallax effects starts here


const main = $('.main-text');
$(window).scroll(function(){
	parallax();
});


function parallax() {
		var wScroll = $(window).scrollTop();
	if (wScroll > $('.main-text').offset().top) {
		$('.banner .html font').css({'opacity' : '1', 'transition' : 'all .4s ease'});
		$('.banner .css font').css({'opacity' : '1', 'transition' : 'all .4s ease .1s'});
		$('.banner .javascript font').css({'opacity' : '1', 'transition' : 'all .4s ease .2s'});
		$('.banner .php font').css({'opacity' : '1', 'transition' : 'all .4s ease .3s'});
		$('.header').css({'position' : 'fixed', 'top' : '0', 'right' : '0','background' : '#111111', 'box-shadow' : '0px .2vw 1vw rgb(0, 0, 0, .3)'});
		$('.logo').css({'left' : '0'});
	}
	if (wScroll < $('.main-text').offset().top) {
		$('.header').css({'position' : 'relative', 'top' : '0', 'right' : '0','background' : 'transparent', 'box-shadow' : 'none', 'transition' : 'all .3s ease'});
		$('.logo').css({'left' : '0'});
	}

	if (wScroll > $('.banner').offset().top) {
		$('.intro-text').animate({'margin-left' : '3vw', 'opacity' : '1'}, 300);
		$('.intro-image').animate({'opacity' : '1'});
		$('.social-icons').css({'opacity' : '1'});
	}

	if (wScroll > $('.verticle-line').offset().top) {
		$('.skills').animate({'opacity' : '1'});
		$('.programming-one').css({'opacity' : '1'});
		$('.programming-two').css({'opacity' : '1'});
	}

	if (wScroll > $('.skills').offset().top + 100) {
		$('.wrapper div').css({'transform' : 'scale3d(1, 1, 1)'});
	}

	if (wScroll > $('.wrapper div').offset().top) {
		$('.social-container #icons').css({'width' : '8vw', 'height' : '6.5vw', 'padding' : '1vw 0px'});
	}

	// $('.main-image').css({'top' : -17 + wScroll/4 + 'px'});
}
