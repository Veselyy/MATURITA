//neriskujeme že se projekt nenačte
$(document).ready(function(){

//scrolování na nadpis "Už vás nebaví psát si zápisky jako prostý text zkuste myšlenkové mapy"
$("#Headbutton").click(function(){
    $("html, body").animate({scrollTop: $("#Explain").offset().top},1000);
});
//Scrolování na sekci Kontakt
$("#Afooter").click(function(){
    $("html, body").animate({scrollTop: $("#footer").offset().top},1000);
});
//Scrolování na sekci O myšlenkových mapách
$("#Aexplain").click(function(){
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
//zobrazení navbaru a footeru na hlavní stránce
$('#navbar').load("navbar.html");
$('#footer').load("footer.html");

// Modální okna
    $('#explainWiden_1').click(function(){
        $('#explainModal_1').addClass('modal-active');
        $('body').css("overflow", "hidden")
        });
    $('#explainClose_1').click(function(){
        $('#explainModal_1').removeClass('modal-active')
    });
//------------------------------------------------------
    $('#explainWiden_2').click(function(){
        $('#explainModal_2').addClass('modal-active');
        $('body').css("overflow", "hidden")
        });
    $('#explainClose_2').click(function(){
        $('#explainModal_2').removeClass('modal-active')
    });
//------------------------------------------------------
    $('#explainWiden_3').click(function(){
        $('#explainModal_3').addClass('modal-active');
        $('body').css("overflow", "hidden")
        });
    $('#explainClose_3').click(function(){
        $('#explainModal_3').removeClass('modal-active')
    });
//------------------------------------------------------
    $('#explainWiden_4').click(function(){
        $('#explainModal_4').addClass('modal-active');
        $('body').css("overflow", "hidden")
        });
    $('#explainClose_4').click(function(){
        $('#explainModal_4').removeClass('modal-active')
    });
//------------------------------------------------------
    $('#explainWiden_5').click(function(){
        $('#explainModal_5').addClass('modal-active');
        $('body').css("overflow", "hidden")
        });
    $('#explainClose_5').click(function(){
        $('#explainModal_5').removeClass('modal-active')
    });
});