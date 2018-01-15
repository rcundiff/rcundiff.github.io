
$(document).ready(function() {
	if(window.location.hash === '#project/details'){
		window.location = '#project';
	}

	particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 66,
      "density": {
        "enable": true,
        "value_area": 600
      }
    },
    "color": {
      "value": "#f7f0f0"
    },
    "shape": {
      "type": "triangle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.09,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 0.4,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 256,
        "size_min": 13.81,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 200,
      "color": "#fff",
      "opacity": 0.23,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 3,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.1
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

	jQuery('#status').delay(500).fadeOut(500);
	jQuery('#preloader').delay(1000).fadeOut('slow');
	var initRight = 0;
	var anchors = [];
	if ($(window).width() > 768) {
		anchors = ['main','project', 'about'];
		$('.section.skills').remove();
	} else {
		anchors = ['main','project', 'skills', 'about'];
	}
	$('#fullpage').fullpage(
		{
			anchors: anchors,
			lockAnchors: false,
			scrollOverflow: true,
			slidesNavigation: false,
			controlArrows: false,
			slidesNavPosition: 'bottom',
			loopHorizontal: false,
			scrollOverflowReset: true,
			scrollOverflowOptions: {
				'fadeScrollbars' : true
			},
			onLeave: function(index, nextIndex){
				$('.navbar-nav li a').removeClass('active');
				$('.navbar-nav li a.'+nextIndex).addClass('active');
				if(index===1 || index === 3){
					$('.navbar-nav').removeClass('white');
					// $('.bar').css('background-color','#ED2');
					$('.menu-mob-btn').css('color', '#111');
					$('.flickity-viewport').focus();
				}
				if ($(document).width() < 768) {

					if(nextIndex === 3){
						$('.menu-mob-btn').css('color', '#fff');
					}
				}
				if(nextIndex === 1 || nextIndex === 3){

					$('.navbar-nav').addClass('white');
					// $('.bar').css('background-color','#ED2');
				}
				if(nextIndex === 1){
					$('.menu-mob-btn').css('color', '#fff');
				}
				initRight = (nextIndex - index)*72 + initRight;

				$('.bar').animate({
					right:initRight,
					width:$('.'+nextIndex + ' span').width()
				},400);
			},
			onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){
				// console.log(slideIndex);
				if(slideIndex === 1){
					$.fn.fullpage.setAllowScrolling(true, 'up, down');
					$.fn.fullpage.setKeyboardScrolling(true, 'up, down');
					if ($(window).width() < 768) $('.menu-mob').fadeIn();
				}
				if(nextSlideIndex === 1){

					$.fn.fullpage.setAllowScrolling(false, 'up, down');
					if ($(window).width() < 768) $('.menu-mob').fadeOut();
					$.fn.fullpage.setKeyboardScrolling(false, 'up, down');
				}

			}
		});
	// $.fn.fullpage.setAllowScrolling(false);
	$.fn.fullpage.setAllowScrolling(false, 'right');
	$.fn.fullpage.setKeyboardScrolling(false, 'left, right');
	$(function(){
		setTimeout(function(){
			$('.typed-text').fadeIn(300);
			// $('.typed-text').addClass('animated fadeIn');
			setTimeout(function(){
				$('#element').typed({
					strings: ['<strong>Neuroscientist</strong>','<strong>Researcher</strong>','<strong>Advocate</strong>'],
					contentType:'html',
					typeSpeed: 100,
					showCursor: true,
					backSpeed: 0,
					backDelay: 1000,
					loop:true,
				});
			},500);
		},1000);
	});

	$('.navbar').width($(window).height());
	$('.bar').css({
		right:(parseInt($('.navbar-nav li a.active').attr('class').split(' ')[1]) - 1)*72,
		width:$('.navbar-nav li a.active span').width(),
		display: 'block'
	});
	if($('.main').hasClass('active')){
		$('.navbar-nav').addClass('white');
		$('.bar').css({'right': '0', 'width':'37px'});
	}

	$('.card-header').on('click',
		function(){
			if($(this).parent().hasClass('is-selected')){
				var id = $(this).attr('data');
				$('.details-hidden').hide();
				$('#' + id).show();
				setTimeout(function(){
					window.location = '#project/details';
					if($('.showreel') && !$('.showreel.sr' + id).hasClass('flickity-enabled')){
						$('.showreel.sr' + $(this).attr('data')).flickity({
							imagesLoaded: true,
							percentPosition: false,
							cellAlign: 'left'
						});
					}
					$('.back').css({'-webkit-transform':'translate(0)'});
					$.fn.fullpage.setAllowScrolling(false, 'up, down');
					$('.menu-mob').fadeOut();
					$.fn.fullpage.setKeyboardScrolling(false, 'up, down');
				}, 10);
				$.fn.fullpage.reBuild();
				// $('.details').css('height', $('.details').find('#' + id).height());
			}
		}
	);
	$('.view-gallery').on('click',function(){

		if(!$('.image-bg.img-' + $(this).attr('data') + ' .full-img').hasClass('flickity-enabled')){
			$('.image-bg.img-' + $(this).attr('data') + ' .full-img').flickity({
				imagesLoaded: true,
				percentPosition: false,
				cellAlign: 'left'
			});
		}
		$('.image-bg.img-' + $(this).attr('data')).fadeIn();
		$(document).keyup(function(e) {
			if (e.keyCode === 27) {
				$('.image-bg').fadeOut();
			}
		});
	});
	$('.full-img-rep').click(function(){
		$('.image-bg').fadeOut();
	});
	$('.skills-sub > div').css('margin-left', $('.container').css('margin-left'));
	$('.about-sub > div').css('padding-right', $('.container').css('margin-left'));
	$('.back a').on('click', function(){
		$.fn.fullpage.moveSlideLeft();
		$('.back').css({'-webkit-transform':'translate(100px)'});
	});
});
