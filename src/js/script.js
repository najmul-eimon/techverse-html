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
      console.log('hi');
    }
    else{
      $('.mobile-menu').addClass('hidden');
    }
  });
});