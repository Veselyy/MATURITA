$(document).ready(function () {
  
  function smoothScroll(target) {
    $('html, body').animate({ scrollTop: $(target).offset().top }, 1200);
  }

  // Scrolování na sekci O myšlenkových mapách
  $('#Aexplain').click(function () {
    window.location.href.indexOf('index.html') !== -1 ? smoothScroll('#explain') : window.location.href = 'index.html';
    $('.hamburger').removeClass('is-active');
    $('.navbar-links').removeClass('mobile-nav');
    $('body').removeClass('body-overflowY');
  });
  
  // Scrolování na sekci Nástroje
  $('#Atools').click(function () {
    window.location.href.indexOf('index.html') !== -1 ? smoothScroll('#tools') : window.location.href = 'index.html';
    $('.hamburger').removeClass('is-active');
    $('.navbar-links').removeClass('mobile-nav');
    $('body').removeClass('body-overflowY');
  });

  //Přesměrování na sekci O Mně
  $('#Amyself').click(function () {
    window.location.href.indexOf('myself.html') !== -1 ? smoothScroll('#myself') : window.location.href = 'myself.html';
    $('.hamburger').removeClass('is-active');
    $('.navbar-links').removeClass('mobile-nav');
    $('body').removeClass('body-overflowY');
  });

  //Přesměrování na sekci Moje tvorba
  $('#Amyprojects').click(function () {
    window.location.href.indexOf('myself.html') !== -1 ? smoothScroll('#myprojects') : window.location = 'myself.html';
    $('.hamburger').removeClass('is-active');
    $('.navbar-links').removeClass('mobile-nav');
    $('body').removeClass('body-overflowY');
  });

  // Scrolování na sekci Kontakt
  $('#Afooter').click(function () {
    smoothScroll('#footer');
    $('.hamburger').removeClass('is-active');
    $('.navbar-links').removeClass('mobile-nav');
    $('body').removeClass('body-overflowY');
  });
 
  // navigace v mobilní verzi
  $('.hamburger').click(function(){
    $('.hamburger').toggleClass('is-active');
    $('.navbar-links').toggleClass('mobile-nav');
    //změna ikonek rozdílné barvy
    var Mobile_navbar_SRC_ig = ($('#ig-nav').attr('src') === './img/instagram-icon.svg') ?
     './img/instagram-icon2.svg' : './img/instagram-icon.svg';
    $('#ig-nav').attr('src', Mobile_navbar_SRC_ig);
  
    var Mobile_navbar_SRC_f = ($('#f-nav').attr('src') === './img/facebook-icon.svg') ?
     './img/facebook-icon2.svg' : './img/facebook-icon.svg';
    $('#f-nav').attr('src', Mobile_navbar_SRC_f);
    //aby zmizela scrollovací lišta
    $('body').toggleClass('body-overflowY');
  });
  
  $('#ig-nav').hover(function(){
    var Desktop_navbar_SRC_ig = ($('#ig-nav').attr('src') === './img/instagram-icon.svg') ?
     './img/instagram-icon2.svg' : './img/instagram-icon.svg';
    $('#ig-nav').attr('src', Desktop_navbar_SRC_ig);
  });
  
  $('#f-nav').hover(function(){
    var Desktop_navbar_SRC_f = ($('#f-nav').attr('src') === './img/facebook-icon.svg') ?
     './img/facebook-icon2.svg' : './img/facebook-icon.svg';
    $('#f-nav').attr('src', Desktop_navbar_SRC_f);
    });
});