$(document).ready(function () {
    $("#menu").mouseenter(function () {
        $("nav").show(900);
        $("#menu").fadeOut(500);
    });
    $("nav").mouseleave(function () {
        $("nav").hide(700);
        $("#menu").fadeIn(500);
    });
});

$('a[href^="#"]').click(function () {
    var the_id = $(this).attr("href");

    $('html, body').animate({
        scrollTop: $(the_id).offset().top
    }, 900);
    return false;
});


$("button").on("click", function () {
    var button = $(this);
    if (button.text() == button.data("text-swap")) {
        button.text(button.data("text-original"));
    } else {
        button.data("text-original", button.text());
        button.text(button.data("text-swap"));
    }
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 1100) {
        $('#back-to-top').fadeIn();
    } else {
        $('#back-to-top').fadeOut();
    }
});
$('#back-to-top').click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 900);
    return false;
});