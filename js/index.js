$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - $("nav").height()
        }, 1000);
        return false;
      }
    }
  });
});

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll != 0) {
        $("#nav").addClass("top-bar");
        $(".nav-reg").addClass("nav-reg-trans");
        $("#nav-logo").removeClass("nav-logo")
    } else {
        $("#nav").removeClass("top-bar");
        $(".nav-reg").removeClass("nav-reg-trans")
        $("#nav-logo").addClass("nav-logo")
    }

    if(scroll = 10000) {
        $(".feature-left").removeClass("feature-left-trans");
        $(".feature-right").removeClass("feature-right-trans");
    } else {
        $(".feature-left").addClass("feature-left-trans");
        $(".feature-right").addClass("feature-right-trans");
    }

});
