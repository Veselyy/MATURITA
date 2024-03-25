//toto nám zajistí, že se kód načte až po načtení stránky, abz nedošlo, že nějaké prvky nenajde
$(document).ready(function () {
 // Zobrazení navigace a formuláře na hlavní stránce
  $('#navbar').load('navbar.html');
  $('#footer').load('footer.html');

  /*definování funkce scrollování na danou sekci, target = cílový element, 
  offset je že to dojede úplně nahoru toho elementu*/
  function smoothScroll(target) {
    $('html, body').animate({ scrollTop: $(target).offset().top }, 1200);
  }

  $('#explainButton').click(function () {
    smoothScroll('#explain');
  });
  
  // Scrolování na sekci O mně
  $('#myselfButton').click(function () {
    smoothScroll('#myself');
  });

  // Slidery
  $('#explainSlider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '.explain-slider__arrowLeft',
    nextArrow: '.explain-slider__arrowRight'
  });

  $('#toolsSlider').slick({
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
  
  // Modální okna O Mně
  for (let i = 1; i <= 4; i++) {
    $(`#myProjectsWiden_${i}`).click(function () {
      openModal(`#myProjectsModal_${i}`);
    });
  
    $(`#myProjectsClose_${i}`).click(function () {
      closeModal(`#myProjectsModal_${i}`);
    });
  }
});