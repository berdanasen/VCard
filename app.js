$(document).ready(function() {
    $(window).on('scroll',function() {
        var scroll = $(window).scrollTop();
        if(scroll>=50) {
            $(".sticky").addClass("stickyadd");
        } else {
            $(".sticky").removeClass("stickyadd");
        }
    })

    var typed = new Typed(".element", {
        strings: ["Berdan","a Front End Developer"],
        smartBackspace: true,
        typeSpeed: 100,
        backSpeed: 100,
        loop: true,
        loopCount: Infinity,
        startDelay: 1000
    });

    // bars
    var p = document.querySelectorAll('.progress-bar');
    p[0].setAttribute("style", "width:80%;transition:0.3s all");
    p[1].setAttribute("style", "width:85%;transition:0.5s all");
    p[2].setAttribute("style", "width:70%;transition:1s all");
    p[3].setAttribute("style", "width:65%;transition:1.4s all");
    p[4].setAttribute("style", "width:50%;transition:1.7s all");
});