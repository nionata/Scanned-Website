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
    var windowHeight = $(window).height();

    if(scroll > windowHeight / 2) {

    }

    if (scroll > (windowHeight - 100)) {
        $("#nav").addClass("nav-bar-shadow");
        $("#nav-info").slideDown();
        $("#nav-logo").removeClass("nav-logo-trans");
    } else {
        $("#nav").removeClass("nav-bar-shadow");
        $("#nav-info").slideUp();
        $("#nav-logo").addClass("nav-logo-trans");
    }
});
