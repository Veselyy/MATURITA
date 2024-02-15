$(document).ready(function () {
  function smoothScroll(target) {
    $("html, body").animate({ scrollTop: $(target).offset().top }, 1200);
  }
// Ostatní scrollování
$("#Aexplain").click(function () {
    window.location.href == 'http://127.0.0.1:5500/src/index.html#' ? smoothScroll("#explain") : window.location.href = 'http://127.0.0.1:5500/src/index.html#';
    $(".hamburger").removeClass('is-active')
    $(".navbar-links").removeClass('mobile-nav')
    $("body").removeClass('body-overflowY')
  });

  $("#Amyself").click(function () {
    window.location.href == 'http://127.0.0.1:5500/src/myself.html#' ? smoothScroll("#myself") : window.location.href = 'http://127.0.0.1:5500/src/myself.html#';
    $(".hamburger").removeClass('is-active')
    $(".navbar-links").removeClass('mobile-nav')
    $("body").removeClass('body-overflowY')
  });

  // Scrolování na sekci Kontakt
  $("#Afooter").click(function () {
    smoothScroll("#footer");
    $(".hamburger").removeClass('is-active')
    $(".navbar-links").removeClass('mobile-nav')
    $("body").removeClass('body-overflowY')
  });

  $(".hamburger").click(function(){
  $(".hamburger").toggleClass('is-active')
  $(".navbar-links").toggleClass('mobile-nav')

  var newSrcig = ($('#ig-nav').attr('src') === './img/instagram-icon.svg') ? './img/instagram-icon2.svg' : './img/instagram-icon.svg';
  $('#ig-nav').attr('src', newSrcig);

  var newSrcf = ($('#f-nav').attr('src') === './img/facebook-icon.svg') ? './img/facebook-icon2.svg' : './img/facebook-icon.svg';
  $('#f-nav').attr('src', newSrcf);

  $("body").toggleClass('body-overflowY')
  })


  

});