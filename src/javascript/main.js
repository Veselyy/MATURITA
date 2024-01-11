//neriskujeme že se projekt nenačte
$(document).ready(function(){

//zobrazení navbaru a footeru na hlavní stránce
$('#navbar').load("navbar.html");
$('#footer').load("footer.html");

//scrolování na nadpis "Už vás nebaví psát si zápisky jako prostý text zkuste myšlenkové mapy"
$("#explainButton").click(function(){
    $("html, body").animate({scrollTop: $("#explain").offset().top},1000);
});


$("#Aexplain").click(function(){
    if(window.location.href == 'http://127.0.0.1:5500/src/index.html#')  {
        $("html, body").animate({scrollTop: $("#explain").offset().top},1000); // Plynulý scroll
    }
    else {
        window.location.href = 'http://127.0.0.1:5500/src/index.html#';
        console.log("hh");
    }
    
  
});
//Scrolování na sekci Kontakt
$("#Afooter").click(function(){
    $("html, body").animate({scrollTop: $("#footer").offset().top},1000);
});
//Scrolování na sekci O mně
$("#myselfButton").click(function(){
    $("html, body").animate({scrollTop: $("#myself").offset().top},1000);
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

// Modální okna
    $('#explainWiden_1').click(function(){
        $('#explainModal_1').addClass('modal-active');
        $('body').css("overflow", "hidden")
        });
    $('#explainClose_1').click(function(){
        $('#explainModal_1').removeClass('modal-active')
        $('body').css("overflow", "scroll")
    });
//------------------------------------------------------
    $('#explainWiden_2').click(function(){
        $('#explainModal_2').addClass('modal-active');
        $('body').css("overflow", "hidden")
        });
    $('#explainClose_2').click(function(){
        $('#explainModal_2').removeClass('modal-active')
        $('body').css("overflow", "scroll")
    });
//------------------------------------------------------
    $('#explainWiden_3').click(function(){
        $('#explainModal_3').addClass('modal-active');
        $('body').css("overflow", "hidden")
        });
    $('#explainClose_3').click(function(){
        $('#explainModal_3').removeClass('modal-active')
        $('body').css("overflow", "scroll")
    });
//------------------------------------------------------
    $('#explainWiden_4').click(function(){
        $('#explainModal_4').addClass('modal-active');
        $('body').css("overflow", "hidden")
        });
    $('#explainClose_4').click(function(){
        $('#explainModal_4').removeClass('modal-active')
        $('body').css("overflow", "scroll")
    });
//------------------------------------------------------
    $('#explainWiden_5').click(function(){
        $('#explainModal_5').addClass('modal-active');
        $('body').css("overflow", "hidden")
        });
    $('#explainClose_5').click(function(){
        $('#explainModal_5').removeClass('modal-active')
        $('body').css("overflow", "scroll")
    });



    // Modální okna O mně
    $('#myProjectsWiden_1').click(function(){
        $('#myProjectsModal_1').addClass('modal-active');
        $('body').css("overflow", "hidden")
        });
    $('#myProjectsClose_1').click(function(){
        $('#myProjectsModal_1').removeClass('modal-active')
        $('body').css("overflow", "scroll")
    });
//------------------------------------------------------
    $('#myProjectsWiden_2').click(function(){
        $('#myProjectsModal_2').addClass('modal-active');
        $('body').css("overflow", "hidden")
        });
    $('#myProjectsClose_2').click(function(){
        $('#myProjectsModal_2').removeClass('modal-active')
        $('body').css("overflow", "scroll")
    });
//------------------------------------------------------
    $('#myProjectsWiden_3').click(function(){
        $('#myProjectsModal_3').addClass('modal-active');
        $('body').css("overflow", "hidden")
        });
    $('#myProjectsClose_3').click(function(){
        $('#myProjectsModal_3').removeClass('modal-active')
        $('body').css("overflow", "scroll")
    });
//------------------------------------------------------
    $('#myProjectsWiden_4').click(function(){
        $('#myProjectsModal_4').addClass('modal-active');
        $('body').css("overflow", "hidden")
        });
    $('#myProjectsClose_4').click(function(){
        $('#myProjectsModal_4').removeClass('modal-active')
        $('body').css("overflow", "scroll")
    });
});