$(function(){
  "use strick";

  /*======================== preloader ===========================*/
  $(document).ready(function() {
    $("#preloader").fadeOut(500); 
  });

  /*======================== mobile menu toggle ===========================*/
  $('.mobile-menu-toggle').on('click', function(){
    if(window.innerWidth < 768){
      $('.mobile-menu').slideToggle();
      $('.overlay').toggleClass('hidden');
    }
    else{
      $('.mobile-menu').removeClass('hidden');
      $('.overlay').addClass('hidden');
    }
  });

  $('.overlay').on('click', function(){
    $(this).addClass('hidden');
    $('.mobile-menu').slideUp();
  })

  $(window).on('resize', function(){
    if(window.innerWidth >= 768){
      $('.mobile-menu').removeClass('hidden').removeAttr("style").show();
      $('.overlay').addClass('hidden');
    }
    else{
      $('.mobile-menu').addClass('hidden');
    }
  });

  /*======================= project slider ========================*/
  var projectSwiper = new Swiper(".project-slider", {
    spaceBetween: 24,
    grabCursor: true,
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

  /*======================= service tab ========================*/
  $('.tabs-nav li:first-child').addClass('active');
  $('.tab-content').hide();
  $('.tab-content:first').show();

  // Click function
  $('.tabs-nav li').click(function(){
    $('.tabs-nav li').removeClass('active');
    $(this).addClass('active');
    $('.tab-content').hide();
    
    var activeTab = $(this).find('a').attr('href');
    $(activeTab).fadeIn();
    return false;
  });

  /*======================= latest blog tab filtering ========================*/

  $('.blog-filter-btns button').on('click', function (event) {
    $(this).parent().siblings('.active').removeClass('active');
    $(this).parent().addClass('active');
  });

  var gridContainer = document.querySelector('#blog-grid-container');

  if(gridContainer){
    var mixer = mixitup(gridContainer);
  }

});