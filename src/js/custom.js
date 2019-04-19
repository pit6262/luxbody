$(window).on('load', function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('html').addClass('ios');
	};
	$('body').removeClass('loaded');
});

$(function(){


  $('.open-menu').on('click', function(){
    $('.navbar').toggleClass('open')
  })

 

	/* ---------------------------------------------- /*
	 * Styler
	/* ---------------------------------------------- */
  if($('.styler').length){
      $('.styler').styler();
  };

  if($('.banner-slider').length){
      $('.banner-slider').slick({
        arrows: false,
        dots: true
      });
  };





	/* ---------------------------------------------- /*
	 * Tabs
	/* ---------------------------------------------- */
	$('.tabs a').click(function(){
		$(this).parents('.tab-wrap').find('.tab-cont').addClass('hide');
		$(this).parent().siblings().removeClass('active');
		var id = $(this).attr('href');
		$(id).removeClass('hide');
		$(this).parent().addClass('active');

   
    var bl_top = $(id).offset().top -30;
    $('body,html').animate({scrollTop: bl_top}, 300);
   
		return false
	});

  /* ---------------------------------------------- /*
   * Video
  /* ---------------------------------------------- */
  $('.video__play').on('click', function(){
    var dataYoutubeLink = $(this).parents('.js-video').attr('data-youtube-link');
    $(this).parents('.js-video').html('<iframe class="video-frame" src="https://www.youtube.com/embed/'+ dataYoutubeLink +'?autoplay=1" allowfullscreen></iframe>');
    $('.js-video').addClass('active');
  });


  $('a.anchor').bind('click.smoothscroll',function () {
    var target = $(this).attr('href'),
            bl_top = $(target).offset().top;
    $('body,html').animate({scrollTop: bl_top}, 600);
    return false;
  });
  


 initMap()
});


if($('#map').length){
    function initMap() {
        var myLatLng = {lat: 50.435555, lng: 30.527627};

        // Create a map object and specify the DOM element
        // for display.
        var map = new google.maps.Map(document.getElementById('map'), {
          center: myLatLng,
          zoom: 17,
          disableDefaultUI: true
        });

        // Create a marker and set its position.
        var marker = new google.maps.Marker({
          map: map,
          position: myLatLng,
          icon: 'img/marker.png'
        });
    }

   

};


$(document).scroll(function () {
    //stick nav to top of page
    var y = $(this).scrollTop() -20;
    var header = $('#main').offset().top;
    if (y > header) {
        $('.header').addClass('sticky');
    } else {
        $('.header').removeClass('sticky');
    }
});

