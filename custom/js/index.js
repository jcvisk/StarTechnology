//Haciendo Includes
$(document).ready(function () {
    //Include del header
    $('#header').load('../../includes/header.html');
    //Include del footer
    $('#footer').load('../../includes/footer.html');
});

/*Inicializando WOW*/
new WOW().init();

$(window).scroll(function(){
    if ($("#nav").offset().top > 56) {
        /*Cambiando color de navbar*/
        $("#nav").removeClass("bg-transparent");
        $("#nav").addClass("bg-white");
    }else{
        /*Cambiando color de navbar*/
        $("#nav").removeClass("bg-white");
        $("#nav").addClass("bg-transparent");
    }
});


