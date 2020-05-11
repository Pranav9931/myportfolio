const menu = document.querySelector('#menubar');
const header = document.querySelector('.header');
const menucontainer = document.querySelector('.menu-container');
const text = document.querySelector('.portfolio-text');
const items = document.querySelector('.menu-items');
const close = document.querySelector('.close');


menu.addEventListener('click', function() {
		menucontainer.style.left = '0%';	
		menucontainer.style.opacity = '1';
		text.style.opacity = '1';
		items.style.opacity = '1';
		items.style.top = '20vw';
		menucontainer.style.transition = 'all .4s ease-out';
		$('.menu-items li').css({'opacity' : '1', 'margin-bottom' : '0px'});
		$('.menu-items input').animate({'width' : '48vw'}, 1000);
});

$('.close').on('click', function() {
	$('.menu-items li').css({'opacity' : '0', 'margin-bottom' : '10vw'});
	text.style.opacity = '.4';
	items.style.top = '30vw';
	items.style.opacity = '0';
	menucontainer.style.left = '-80%';
	menucontainer.style.opacity = '0';
	menucontainer.style.transition = 'all .4s ease-out .8s';
	$('.menu-items input').animate({'width' : '0vw'}, 700);

});

//self functioning
$('.menu-container li:nth-child(2)').on('click', function(){
	$('html, body').animate({
		scrollTop : $('.intro').offset().top - 400
	}, 500); 
	$('.menu-items li').css({'opacity' : '0', 'margin-bottom' : '10vw'});
	text.style.opacity = '.4';
	items.style.top = '30vw';
	items.style.opacity = '0';
	menucontainer.style.left = '-80%';
	menucontainer.style.opacity = '0';
	menucontainer.style.transition = 'all .4s ease-out .8s';
	$('.menu-items input').animate({'width' : '0vw'}, 700);

})
$('.main').on('click', function(){
	$('html, body').animate({
		scrollTop : $('.sign').offset().top - 400
	}, 1000); 

})
$('.menu-container li:nth-child(3)').on('click', function(){
	$('html, body').animate({
		scrollTop : $('.skills').offset().top
	}, 500); 
	$('.menu-items li').css({'opacity' : '0', 'margin-bottom' : '10vw'});
	text.style.opacity = '.4';
	items.style.top = '30vw';
	items.style.opacity = '0';
	menucontainer.style.left = '-80%';
	menucontainer.style.opacity = '0';
	menucontainer.style.transition = 'all .4s ease-out .8s';
	$('.menu-items input').animate({'width' : '0vw'}, 700);

})
$('.menu-container li:nth-child(4)').on('click', function(){
	$('html, body').animate({
		scrollTop : $('.projects').offset().top
	}, 500); 
	$('.menu-items li').css({'opacity' : '0', 'margin-bottom' : '10vw'});
	text.style.opacity = '.4';
	items.style.top = '30vw';
	items.style.opacity = '0';
	menucontainer.style.left = '-80%';
	menucontainer.style.opacity = '0';
	menucontainer.style.transition = 'all .4s ease-out .8s';
	$('.menu-items input').animate({'width' : '0vw'}, 700);

})



//parallax effect

$(window).on('scroll', function() {
	parallax();
});


function parallax() {
	var wScroll = $(window).scrollTop();
	$('.main-image').css({'bottom' : 38 -  + wScroll*0.009 + 'em' , 'opacity' : 1 - wScroll/2000 - ''});
	$('.main-text').css({'bottom' : 7.5 -  + wScroll*0.001 + 'em'});
	$('.main-text-second').css({'bottom' : 7 -  + wScroll*0.001 + 'em'});
	$('.header button').css({'bottom' : 3 -  + wScroll*0.001 + 'em'});
	$('.intro').css({'top' : 20 -  + wScroll*0.009 + 'vh'});

//effects from here
	if (wScroll > $('.main-image').offset().top + 100) {
		$('.intro-image').css({'margin-left' : '0vw', 'opacity' : '1'});
	}
	if (wScroll > $('.main-text').offset().top) {
		$('.intro-text-second').animate({'margin-top' : '2vh', 'opacity' : '1'}, 700);
	}
	if (wScroll > $('.intro-image').offset().top) {
		$('.skills .html').animate({'margin-left' : '-3em', 'opacity' : '1'}, 100);
		$('.skills .css').animate({'margin-left' : '-1.2em', 'opacity' : '1'}, 300);
		$('.skills .javascript').animate({'margin-left' : '-3em', 'opacity' : '1'}, 500);
	}
	if (wScroll > $('.intro-text-second').offset().top) {
		$('.skills .php').animate({'margin-left' : '-1.2em', 'opacity' : '1'}, 300);
		$('.skills .jquery').animate({'margin-left' : '-3em', 'opacity' : '1'}, 500);
	}
	if (wScroll > $('.skills .html').offset().top) {
		$('.cardone').animate({'margin-left' :'0', 'opacity' : '1'}, 500);
	}
	if (wScroll > $('.skills .javascript').offset().top) {
		$('.cardtwo').animate({'margin-left' :'0', 'opacity' : '1'}, 500);
	}
	if (wScroll > $('.cardone').offset().top + 200) {
		$('.cardthree').animate({'margin-left' :'0', 'opacity' : '1'}, 500);
	}
	if (wScroll > $('.cardthree').offset().top + 300) {
		$('.projectone').animate({'left' : '50%' , 'opacity' : '1'}, 500);
	}
	if (wScroll > $('.social').offset().top + 100) {
		$('.projecttwo').animate({'left' : '50%' , 'opacity' : '1'}, 500);
	}
	if (wScroll > $('.projectone').offset().top + 100) {
		$('.projectthree').animate({'left' : '50%' , 'opacity' : '1'}, 500);
	}
	if (wScroll > $('.projecttwo').offset().top + 100) {
		$('.projectfour').animate({'left' : '50%' , 'opacity' : '1'}, 500);
	}
}




//load more content when reched bottom

$(window).on('scroll', function() {
    if($(window).scrollTop() >= $(document).height() - ($(window).height() + 300)) {
		const load = document.querySelector('.load');
		const lower = document.querySelector('.lower-part');
		setTimeout(function(){
			$('.lower-part').addClass('show');
		}, 1500);
		$('.load').css({'opacity' : '0' , 'margin-top' : '-3em' , 'transition' : 'all .5s ease-out 1s'});
		$('.social').css({'top' : '0em' , 'transition' : 'all .7s ease-out 1.5s' , 'letter-spacing' : '0em'});
		$('.lower-part').css({'top' : '0em'});
		$('.social .icons').css({'transform' :'scale3d(1, 1, 1)'});
		}
});


