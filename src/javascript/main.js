//problémy s jinými knihovnami, které taky používají $
const $jq = jQuery.noConflict();

//neriskujeme že se projekt nenačte
$jq(document).ready(function(){
 //zobrazení navbaru a footeru na hlavní stránce
    $jq('#navbar').load("navbar.html")
    $jq('#footer').load("footer.html")
   
//scrolování na sekci explain
    $jq("#explainButton").click(function(){
        $jq("html, body").animate({scrollTop: $jq("#explain").offset().top},1000)
    })

//Scrolování na sekci O mně
     $jq("#myselfButton").click(function(){
        $jq("html, body").animate({scrollTop: $jq("#myself").offset().top},1000)
    })

    
    $jq("#Aexplain").click(function(){
        if(window.location.href == 'http://127.0.0.1:5500/src/index.html')  {
            $jq("html, body").animate({scrollTop: $jq("#explain").offset().top},1000) // Plynulý scroll
        }
        else {
            window.location.href = 'http://127.0.0.1:5500/src/index.html'
            console.log("hh")
        }
    })
    
   
//Scrolování na sekci Kontakt
    $jq("#Afooter").click(function(){
        $jq("html, body").animate({scrollTop: $jq("#footer").offset().top},1000)
    })
    $jq("#Afooter").click(function(){
        $jq("html, body").animate({scrollTop: $jq(".footer").offset().top},1000)
    })
    

//první slider na webu s textem "O myšlenkové mapě"
    $jq('.explain-text__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $jq('.explain-text__arrowLeft'),
        nextArrow: $jq('.explain-text__arrowRight')
    })
    
//druhý slider na webu s obrázkama v sekci "O myšlenkové mapě"
    $jq('.explain-image__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false
    })
    
//třetí slider na webu s textem a obrázkem v sekci "Nabídka"
    $jq('.offer-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $jq('.offer-slider__arrowLeft'),
        nextArrow: $jq('.offer-slider__arrowRight')
    })
    

// Modální okna
    $jq('#explainWiden_1').click(function(){
            $jq('#explainModal_1').addClass('modal-active');
            $jq('body').css("overflow", "hidden")
            })

        $jq('#explainClose_1').click(function(){
            $jq('#explainModal_1').removeClass('modal-active')
            $jq('body').css("overflow", "scroll")
        })
    //------------------------------------------------------
        $jq('#explainWiden_2').click(function(){
            $jq('#explainModal_2').addClass('modal-active');
            $jq('body').css("overflow", "hidden")
            })

        $jq('#explainClose_2').click(function(){
            $jq('#explainModal_2').removeClass('modal-active')
            $jq('body').css("overflow", "scroll")
        })
    //------------------------------------------------------
        $jq('#explainWiden_3').click(function(){
            $jq('#explainModal_3').addClass('modal-active');
            $jq('body').css("overflow", "hidden")
            })

        $jq('#explainClose_3').click(function(){
            $jq('#explainModal_3').removeClass('modal-active')
            $jq('body').css("overflow", "scroll")
        })
    //------------------------------------------------------
        $jq('#explainWiden_4').click(function(){
            $jq('#explainModal_4').addClass('modal-active');
            $jq('body').css("overflow", "hidden")
            })

        $jq('#explainClose_4').click(function(){
            $jq('#explainModal_4').removeClass('modal-active')
            $jq('body').css("overflow", "scroll")
        })
    //------------------------------------------------------
        $jq('#explainWiden_5').click(function(){
            $jq('#explainModal_5').addClass('modal-active');
            $jq('body').css("overflow", "hidden")
            })

        $jq('#explainClose_5').click(function(){
            $jq('#explainModal_5').removeClass('modal-active')
            $jq('body').css("overflow", "scroll")
        })
    
    
    // Modální okna O mně
        $jq('#myProjectsWiden_1').click(function(){
            $jq('#myProjectsModal_1').addClass('modal-active');
            $jq('body').css("overflow", "hidden")
            })

        $jq('#myProjectsClose_1').click(function(){
            $jq('#myProjectsModal_1').removeClass('modal-active')
            $jq('body').css("overflow", "scroll")
        })
    //------------------------------------------------------
        $jq('#myProjectsWiden_2').click(function(){
            $jq('#myProjectsModal_2').addClass('modal-active');
            $jq('body').css("overflow", "hidden")
            })

        $jq('#myProjectsClose_2').click(function(){
            $jq('#myProjectsModal_2').removeClass('modal-active')
            $jq('body').css("overflow", "scroll")
        })
    //------------------------------------------------------
        $jq('#myProjectsWiden_3').click(function(){
            $jq('#myProjectsModal_3').addClass('modal-active');
            $jq('body').css("overflow", "hidden")
            })

        $jq('#myProjectsClose_3').click(function(){
            $jq('#myProjectsModal_3').removeClass('modal-active')
            $jq('body').css("overflow", "scroll")
        })
    //------------------------------------------------------
        $jq('#myProjectsWiden_4').click(function(){
            $jq('#myProjectsModal_4').addClass('modal-active');
            $jq('body').css("overflow", "hidden")
            })

        $jq('#myProjectsClose_4').click(function(){
            $jq('#myProjectsModal_4').removeClass('modal-active')
            $jq('body').css("overflow", "scroll")
        })
        
    });