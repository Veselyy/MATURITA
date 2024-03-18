$(document).ready(function () {
    $('#ig-fotter').hover(function(){
        var Desktop_fotter_SRC_ig = ($('#ig-fotter').attr('src') === './img/instagram-icon.svg') ? './img/instagram-icon2.svg' : './img/instagram-icon.svg';
        $('#ig-fotter').attr('src', Desktop_fotter_SRC_ig);
    });
    //najedeme na obrázek, jestli ta cesta je rovna './img/facebook-icon.svg' pokud ano přepíše se na './img/facebook-icon2.svg' a když ne tak se přepíše na './img/facebook-icon.svg'
    $('#f-fotter').hover(function(){
        var Desktop_fotter_SRC_f = ($('#f-fotter').attr('src') === './img/facebook-icon.svg') ? './img/facebook-icon2.svg' : './img/facebook-icon.svg';
        $('#f-fotter').attr('src', Desktop_fotter_SRC_f);
    });
})