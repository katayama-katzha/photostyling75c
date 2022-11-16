window.addEventListener('load', (event) => {
  const spinner = document.getElementById('loading');
  spinner.classList.add('loaded');

});



jQuery(window).on('load', function() {
  jQuery("body").removeClass("preload");
  jQuery(".hide-content").removeClass("hide-content");
});

jQuery(function($){
  $(function(){
    if (window.matchMedia('(max-width: 767px)').matches){
      $('#items .card:nth-child(2n + 1)').attr('data-wow-delay', '0.2s');

    }else{

    }
   
    $(window).resize(function() {
    if (window.matchMedia('(max-width: 767px)').matches){
      $('#items .card:nth-child(2n + 1)').attr('data-wow-delay', '0.2s');

    }else{
      $('#items .card:nth-child(3n + 1)').attr('data-wow-delay', '0.2s');

    }
  
    
  
  
  });
  }());
  $( function() {
    $( 'a[href^="#"]' ).on( 'click', function(e){
      var speed = 500;
      var type = 'swing';
      var href= $( this ).attr( 'href' );
      var target = $( href === '#' || href === '' ? 'html' : href );
      var position = target.offset().top - 64;
      $( 'html, body' ).animate( { scrollTop:position }, speed, type );
      e.preventDefault();
    });
  });

  $( function() {
    $( '.burger' ).on( 'click', function(e){
      $(this).toggleClass('active');
      $('.right').toggleClass('active');
      $('.menu').toggleClass('active');
      e.preventDefault();
    });
    $( '.close' ).on( 'click', function(e){
      $('.burger').removeClass('active');
      $('.menu').removeClass('active');
      e.preventDefault();
    });
    $( '.box-ttl' ).on( 'click', function(e){
      $(this).toggleClass('active');
      $(this).next().slideToggle(600);
      e.preventDefault();
    });
  });


  $(function () {
    $(window).on("scroll", function () {
      const sliderHeight = 500;
      if (sliderHeight < $(this).scrollTop()) {
        $(".totop").addClass("bottomScroll");
      } else {
        $(".totop").removeClass("bottomScroll");
      }
    });
    $(window).on("scroll", function () {
      const sliderHeight = 1000;
      if (sliderHeight < $(this).scrollTop()) {
        $("header").addClass("bottomScroll");
      } else {
        $("header").removeClass("bottomScroll");
      }
    });
  });


});