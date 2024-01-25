$(document).ready(function () {
  function smoothScroll(target) {
    $("html, body").animate({ scrollTop: $(target).offset().top }, 1200);
  }
// Ostatní scrollování
$("#Aexplain").click(function () {
    window.location.href == 'http://127.0.0.1:5500/src/index.html#' ? smoothScroll("#explain") : window.location.href = 'http://127.0.0.1:5500/src/index.html#';
  });

  $("#Amyself").click(function () {
    window.location.href == 'http://127.0.0.1:5500/src/myself.html#' ? smoothScroll("#myself") : window.location.href = 'http://127.0.0.1:5500/src/myself.html#';
  });

  // Scrolování na sekci Kontakt
  $("#Afooter").click(function () {
    smoothScroll("#footer");
  }); 
});