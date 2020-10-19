var options = {
  strings: ["Designer", 'Developer','Designer'],
  typeSpeed: 70,
    loop:true,
    bakspaceSpeed:100,
};

var typed = new Typed('#typer', options);


  // Init Swiper
        var swiper = new Swiper('.swiper-container', {
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                loop:true,
            },
            // Enable debugger
            debugger: false,
        });

jQuery('.blog_slide').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
    arrows:true,
    prevArrow:'<i class="prev fas fa-arrow-left"> </i>',
    nextArrow:'<i class="next fas fa-arrow-right"> </i>',
    autoplay:true,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});






var mixer = mixitup('.mix-container', {
    controls: {
        toggleDefault: 'all'
       
       
    },
    selectors: {
            control: '[data-mixitup-control]'
          }
});

	
$(document).ready(function(){

	$('#bar1').barfiller({ barColor: '#6FDA44', duration: 1000,});
	$('#bar2').barfiller({ barColor: '#6FDA44', duration: 1000, });
	$('#bar3').barfiller({ barColor: '#6FDA44', duration: 1000, });
    $('#bar4').barfiller({ barColor: '#6FDA44', duration: 1000, });
	
});



jQuery(document).ready(function($) {
            $('.counter').counterUp({
                delay: 10,
                time: 1000
            });
        });









