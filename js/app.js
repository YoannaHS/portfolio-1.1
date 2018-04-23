$(document).ready(function () {
    // Inicializando Parallax
    $('.parallax').parallax();
    // Menú Hamburguesa
    $(".cross").hide();
    $(".menu").hide();
    $(".hamburger").click(function () {
        $(".menu").slideToggle("slow", function () {
            $(".hamburger").hide();
            $(".cross").show();
        });
    });

    $(".cross").click(function () {
        $(".menu").slideToggle("slow", function () {
            $(".cross").hide();
            $(".hamburger").show();
        });
    });

    // Carrousel way-out
    $('.carousel').carousel();

    $('.carousel.carousel-slider').carousel({
        fullWidth: true
      });
    
});