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

  $.getJSON("https://jsonblob.com/api/jsonBlob/ffc80ef0-2f66-11e7-ae4c-4766b1558729", function(json) {

      var numberOfTestimonials = Object.keys(json).length;
      var index = 0;

      var i = 0;

      while(i < numberOfTestimonials) {
          $("#testimonials-count").append('<li class="testimonials-count-item ' + i + '"><i class="fa fa-circle"></i></li>');

          i++;
      }

      newTestimonial()

      setInterval(newTestimonial, 5000);

      function newTestimonial() {
          $("#testimonial-quote").text(json[index].quote);
          $("#testimonial-name").text(json[index].name);
          $("#testimonial-organization").text(json[index].organization + ", ");
          $("#testimonial-role").text(json[index].role);

          $("#testimonials-count ." + index).children().css("color", "white");

          var prevIndex = index - 1;

          if(prevIndex == - 1) {
              prevIndex = numberOfTestimonials - 1;
          }

          $("#testimonials-count ." + prevIndex).children().css("color", "gray");

          index++;

          if(index == numberOfTestimonials) {
              index = 0;
          }
      }
  });
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
