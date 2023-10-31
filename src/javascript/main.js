//neriskujeme že se projekt nenačte
$(document).ready(function(){
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
});