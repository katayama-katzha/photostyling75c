window.addEventListener('load', (event) => {
  const spinner = document.getElementById('loading');
  spinner.classList.add('loaded');

});



jQuery(window).on('load', function() {
  jQuery("body").removeClass("preload");
  jQuery(".hide-content").removeClass("hide-content");
});

jQuery(function($){
  
  $(window).on('load resize', function() {
    var client_h = document.getElementById('fv').clientHeight;
    $(window).on("scroll", function () {
      const sliderHeight = client_h;
      if (sliderHeight < $(this).scrollTop()) {
        $("header").addClass("bottomScroll");
      } else {
        $("header").removeClass("bottomScroll");
      }
    });
  });

  $(function(){
    if (window.matchMedia('(max-width: 767px)').matches){
      $('.sp150').attr('data-wow-offset', '150');
      $('.sp100').attr('data-wow-offset', '100');
    }else{


    };
   

  }());
  $(window).resize(function() {
    if (window.matchMedia('(max-width: 767px)').matches){

    }else{

    }
  });
  $( function() {
    $( 'a[href^="#"]' ).on( 'click', function(e){
      var speed = 500;
      var type = 'swing';
      var href= $( this ).attr( 'href' );
      var target = $( href === '#' || href === '' ? 'html' : href );
      
      if (window.matchMedia('(max-width: 767px)').matches){
        var position = target.offset().top - 50;
      }else{
        var position = target.offset().top - 64;
      }
      $( 'html, body' ).animate( { scrollTop:position }, speed, type );
      e.preventDefault();
    });

  });

  $( function() {
    $( '.burger' ).on( 'click', function(e){
      $(this).toggleClass('active');
      $('.menu').toggleClass('active');
      e.preventDefault();
    });
    $( '.menu a' ).on( 'click', function(e){
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

    

  });


});