(function($) {

  "use strict";

  var isMobile = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i).test(navigator.userAgent || navigator.vendor || window.opera);

  // SMOOTH SCROLL
  $('a[href^="#"]').on( "click", function(e) {
	  e.preventDefault();
	  $(window).stop(true).scrollTo(this.hash, {duration:600, interrupt:true, axis: 'y', easing: 'easeInOutExpo'});
  });

  // 100% VIEWPORT HEIGHT
  function resizeDiv() {
	var vh = $(window).height();
	$('.vh100').css({'height': vh + 'px'});
	$('.step').css({'min-height': vh + 'px'});
	$('.steps-init .steps').css({'margin-top': '-' + vh + 'px'});
  }
  $(window).on('resize', function() {
	resizeDiv();
  });

  if (!isMobile) {

  	  // INIT STEP-BY-STEP SECTION ON MOBILE
	  $( '.steps-block' ).prepend( '<div class="steps-bg vh100"><div class="steps-bgcontainer"></div></div>' );

	  $( '.steps-block .step' ).each(function(index){
	  	var bgImg = $(this).data('bg');
	  	$( '.steps-bgcontainer' ).append( '<div class="step-bg vh100" style="background-image:url('+bgImg+')"><div class="overlay"></div></div>' );
	  });

	  $( '.step' ).waypoint( function( direction ) {
	      if( direction === 'up' ) {
	        var current = $(this.element).index( );
	        $('.step-bg').eq(current).removeClass('active');
	      }
	      else {
	        var current = $(this.element).index( );
	        $('.step-bg').eq(current).addClass('active');      	
	      }
	  }, {
	    offset: '50%'
	  });

	  $('.steps-bg').Stickyfill();

	  $( '.steps-block' ).addClass('steps-init');

  } else {

	  $( '.steps-block .step' ).each(function(index){
	  	$(this).css('background-image','url('+$(this).data('bg')+')');
	  });

  }

  $(window).load(function(){

  	  resizeDiv();

	  // FADE OUT LOADING
	  $('.loading-modal').delay(400).fadeOut(400, function() {
	    $('body').removeClass('loading');
	  });

  });

})(jQuery);
