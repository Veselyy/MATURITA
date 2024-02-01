//neriskujeme že se projekt nenačte
$(document).ready(function () {
 // Zobrazení navbaru a footeru na hlavní stránce
  $('#navbar').load("navbar.html");
  $('.footerID').load("footer.html");

  
    function smoothScroll(target) {
      $("html, body").animate({ scrollTop: $(target).offset().top }, 1200);
    }
  
    function openModal(modalId) {
      $(modalId).addClass('modal-active');
    }
  
    function closeModal(modalId) {
      $(modalId).removeClass('modal-active');
    }
  
    // Scrolování na sekci explain
    $("#explainButton").click(function () {
      smoothScroll(".explainID");
    });
  
    // Scrolování na sekci O mně
    $("#myselfButton").click(function () {
      smoothScroll(".myselfID");
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


    let currentSection = 1;

    document.addEventListener('wheel', (event) => {
      if (event.deltaY > 0) {
        // Scroll dolů
        if (currentSection < document.querySelectorAll('.section').length) {
          currentSection++;
          scrollToSection(currentSection);
        }
      } else {
        // Scroll nahoru
        if (currentSection > 0) {
          currentSection--;
          scrollToSection(currentSection);
        }
      }
    });
    
    function scrollToSection(sectionNumber) {
      const section = document.getElementById(`section${sectionNumber}`);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
    
  });