// Show the navbar after scrolling a little bit down
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        if($(".navbar").hasClass("hide")){
            $(".navbar").fadeOut().removeClass("hide").fadeIn("slow");
        }
    } else {
        $(".navbar").fadeOut("slow", function() {
            $(this).addClass("hide");
        });
    }
});
