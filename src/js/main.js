//neriskujeme že se projekt nenačte
$(document).ready(function () {

    function smoothScroll(target) {
      $("html, body").animate({ scrollTop: $(target).offset().top }, 1200);
    }
  
    function openModal(modalId) {
      $(modalId).addClass('modal-active');
      $('body').css("overflow", "hidden");
    }
  
    function closeModal(modalId) {
      $(modalId).removeClass('modal-active');
      $('body').css("overflow", "scroll");
    }
  
    // Scrolování na sekci explain
    $("#explainButton").click(function () {
      smoothScroll("#explain");
    });
  
    // Scrolování na sekci O mně
    $("#myselfButton").click(function () {
      smoothScroll("#myself");
    });

    // Slidery
  $('#explainTextSlider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '.explain-text__arrowLeft',
      nextArrow: '.explain-text__arrowRight'
  });

  $('#offerSlider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '.offer-slider__arrowLeft',
      nextArrow: '.offer-slider__arrowRight'
  });
  
    // Modální okna
    for (let i = 1; i <= 5; i++) {
      $(`#explainWiden_${i}`).click(function () {
        openModal(`#explainModal_${i}`);
      });
  
      $(`#explainClose_${i}`).click(function () {
        closeModal(`#explainModal_${i}`);
      });
    }
  
    // Modální okna O mně
    for (let i = 1; i <= 4; i++) {
      $(`#myProjectsWiden_${i}`).click(function () {
        openModal(`#myProjectsModal_${i}`);
      });
  
      $(`#myProjectsClose_${i}`).click(function () {
        closeModal(`#myProjectsModal_${i}`);
      });
    }
  
    // Zobrazení navbaru a footeru na hlavní stránce
    $('#navbar').load("navbar.html");
    $('#footer').load("footer.html");
  
  });