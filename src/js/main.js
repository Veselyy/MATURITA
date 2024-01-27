//neriskujeme že se projekt nenačte
$(document).ready(function () {
 // Zobrazení navbaru a footeru na hlavní stránce
  $('#navbar').load("navbar.html");
  $('#footer').load("footer.html");

  
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
  $('#explainSlider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '.explain-slider__arrowLeft',
      nextArrow: '.explain-slider__arrowRight'
  });

  $('#offerSlider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true
  });
  
    // Modální okna
    for (let i = 1; i <= 6; i++) {
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
  
   
  
  });