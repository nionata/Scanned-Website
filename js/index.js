//Short hand for document ready in jQuery
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

//Allows for smooth scrolling when clicking links
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 800) {
        $("#nav").addClass("top-bar");
        $(".nav-reg").slideDown();
        $("#nav-logo").removeClass("nav-logo")
    } else {
        $("#nav").removeClass("top-bar");
        $(".nav-reg").slideUp();
        $("#nav-logo").addClass("nav-logo");
    }

    if(scroll = 10000) {
        $(".feature-left").removeClass("feature-left-trans");
        $(".feature-right").removeClass("feature-right-trans");
    } else {
        $(".feature-left").addClass("feature-left-trans");
        $(".feature-right").addClass("feature-right-trans");
    }

});
