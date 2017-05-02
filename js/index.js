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

  $.getJSON("js/testimonials.js");

  var names = ["Skipper", "Reggin", "Swagger"];
  var quote = ["I love scanned app because it makes this so easy!", "Swagger asdf asd ", "asdfasda sdf asd"];
  var organization = ["Disc Golf President", "FBLA President", "NHS President"];
  var role = ["Disc Golf President", "FBLA President", "NHS President"];

  var i = 0;

  setInterval(function() {
      $("#testimonial-quote").text(quote[i]);
      $("#testimonial-name").text(names[i]);
      $("#testimonial-organization").text(organization[i] + ", ");
      $("#testimonial-role").text(role[i]);

      i++;

      if(i == names.length) {
          i = 0;
      }
  }, 5000);
});

//Allows for smooth scrolling when clicking links
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();

    if(scroll > windowHeight / 2) {
        $("#product-left").slideDown();
    } else {
        $("#product-left").slideUp();
    }

    if (scroll > (windowHeight - 100)) {
        $("#nav").addClass("nav-bar-shadow");
        $("#nav-info").slideDown();
        $("#nav-logo").removeClass("nav-logo-trans");
        $("#product-right").slideDown();
    } else {
        $("#nav").removeClass("nav-bar-shadow");
        $("#nav-info").slideUp();
        $("#nav-logo").addClass("nav-logo-trans");

        $("#product-right").slideUp();
    }
});
