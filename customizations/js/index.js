/*Inicializando WOW*/
new WOW().init();

$(window).scroll(function(){
    if ($("#nav").offset().top > 56) {
        /*Cambiando color de navbar*/
        $("#nav").removeClass("bg-transparent");
        $("#nav").addClass("bg-white");
        /*Cambiado logo*/
        /*$("#logo_header").attr("src","img/logo/layout2-white.svg");*/
        /*Cambiado el icono de toggle*/
        /*$('#toggler-icon').css("background-image", "url(img/icons/toggler-icon.svg)");*/
    }else{
        /*Cambiando color de navbar*/
        $("#nav").removeClass("bg-white");
        $("#nav").addClass("bg-transparent");
        /*Cambiado logo*/
        /*$("#logo_header").attr("src","img/logo/layout2.svg");*/
        /*Cambiado el icono de toggle*/
        /*$('#toggler-icon').css("background-image", "url(img/icons/toggler-icon-blue.svg)");*/
    }
});