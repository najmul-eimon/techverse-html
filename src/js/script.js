$(function(){
  "use strick";

  /*======================== mobile menu toggle ===========================*/
  $('.mobile-menu-toggle').on('click', function(){
    if(window.innerWidth < 768){
      $('.mobile-menu').slideToggle();
    }
    else{
      $('.mobile-menu').removeClass('hidden');
    }
  })

  $(window).on('resize', function(){
    if(window.innerWidth >= 768){
      $('.mobile-menu').removeClass('hidden').removeAttr("style").show();
    }
    else{
      $('.mobile-menu').addClass('hidden');
    }
  });

  /*======================= project slider ========================*/
  var projectSwiper = new Swiper(".project-slider", {
    spaceBetween: 24,
    grabCursor: false,
    slidesPerView: 1,
    loop: true,
    autoplay: true,
    speed: 3000,
    allowTouchMove:true,
    freeModeMomentum: false,
    breakpoints: {
      576: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2,
      }
    },
    pagination: {
      el: ".project-pagination",
      clickable: true,
    },
  });

  /*======================= Counter up ========================*/
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });

});