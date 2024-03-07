$(document).ready(function () {
    $("#ig-fot").hover(function(){
        var newHoverig = ($('#ig-fot').attr('src') === './img/instagram-icon.svg') ? './img/instagram-icon2.svg' : './img/instagram-icon.svg'
        $('#ig-fot').attr('src', newHoverig)
      });
      
      $("#f-fot").hover(function(){
        var newHoverf = ($('#f-fot').attr('src') === './img/facebook-icon.svg') ? './img/facebook-icon2.svg' : './img/facebook-icon.svg'
        $('#f-fot').attr('src', newHoverf)
        });
})