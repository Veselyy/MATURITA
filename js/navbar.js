$(document).ready(function () {
  function smoothScroll(target) {
    $("html, body").animate({ scrollTop: $(target).offset().top }, 1200);
  }
// Scrolování na sekci O myšlenkových mapách
$("#Aexplain").click(function () {
    window.location.href == 'https://veselyy.github.io/MATURITA/#' ? smoothScroll("#explain") : window.location.href = 'https://veselyy.github.io/MATURITA/#';
    $(".hamburger").removeClass('is-active')
    $(".navbar-links").removeClass('mobile-nav')
    $("body").removeClass('body-overflowY')
  });
  
  // Scrolování na sekci Nástroje
  $("#Atools").click(function () {
    window.location.href == 'https://veselyy.github.io/MATURITA/#' ? smoothScroll("#tools") : window.location.href = 'https://veselyy.github.io/MATURITA/#';
    $(".hamburger").removeClass('is-active')
    $(".navbar-links").removeClass('mobile-nav')
    $("body").removeClass('body-overflowY')
  });

  //Přesměrování na sekci O Mně
  $("#Amyself").click(function () {
    window.location.href == 'http://127.0.0.1:5500/myself.html#' ? smoothScroll("#myself") : window.location.href = 'http://127.0.0.1:5500/myself.html#';
    $(".hamburger").removeClass('is-active')
    $(".navbar-links").removeClass('mobile-nav')
    $("body").removeClass('body-overflowY')
  });

  //Přesměrování na sekci Moje tvorba
  $("#Amyprojects").click(function () {
    window.location.href == 'http://127.0.0.1:5500/myself.html#' ? smoothScroll("#myprojects") : window.location.href = 'http://127.0.0.1:5500/myself.html#';
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


$("#ig-nav").hover(function(){
  var newHoverig = ($('#ig-nav').attr('src') === './img/instagram-icon.svg') ? './img/instagram-icon2.svg' : './img/instagram-icon.svg'
  $('#ig-nav').attr('src', newHoverig)
});

$("#f-nav").hover(function(){
  var newHoverf = ($('#f-nav').attr('src') === './img/facebook-icon.svg') ? './img/facebook-icon2.svg' : './img/facebook-icon.svg'
  $('#f-nav').attr('src', newHoverf)
  });

  
});