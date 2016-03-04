$(document).ready(function () {
    $("#menu").mouseenter(function () {
        $("nav").show(500);
        $("#menu").hide(700);
    });
    $("nav").mouseleave(function () {
        $("nav").hide(600);
        $("#menu").show(600);
    });
});

$('a[href^="#"]').click(function () {
    var the_id = $(this).attr("href");

    $('html, body').animate({
        scrollTop: $(the_id).offset().top
    }, 'slow');
    return false;
});

/*progress-line et progress-point à tester en jquery avec fade-in et fade-out + greyscale et couleur selon le niveau du scroll*/
$
$(selector).fadeIn(speed, easing, callback)