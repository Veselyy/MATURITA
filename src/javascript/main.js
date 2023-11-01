//neriskujeme že se projekt nenačte
$(document).ready(function(){

//scrolování na nadpis "Už vás nebaví psát si zápisky jako prostý text zkuste myšlenkové mapy"
$(".header-wrap__button").click(function(){
    $("html, body").animate({scrollTop: $("#Explain").offset().top},1000);
});
//první slider na webu s textem "O myšlenkové mapě"
$('.explain-text__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.explain-text__arrowLeft'),
    nextArrow: $('.explain-text__arrowRight')
});
//druhý slider na webu s obrázkama v sekci "O myšlenkové mapě"
$('.explain-image__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false
});
//třetí slider na webu s textem a obrázkem v sekci "Nabídka"
$('.offer-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.offer-slider__arrowLeft'),
    nextArrow: $('.offer-slider__arrowRight')
});

});