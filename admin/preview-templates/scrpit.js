// Sticky Header
$(window).scroll(function() {

    if ($(window).scrollTop() > 100) {
        $('.main_h').addClass('sticky');
    } else {
        $('.main_h').removeClass('sticky');
    }
});

$(function() {
  $('.scroll-down').click (function() {
    $('html, body').animate({scrollTop: $('section.ok').offset().top }, 'slow');
    return false;
  });
});

var randomImages = (function(){
  'use strict';
  return{
    init: function(){
      this.events();// init events
    },
    events: function(){
      /* random images snippet*/
      var images = [
        'https://i.redd.it/sj7vi0meld591.jpg',
        'https://i.redd.it/44fcdej5wy591.jpg',
        'https://i.redd.it/xi3ymfr4myu81.jpg'
      ];
      // create style tag in head
      var s = document.createElement('style');
      // add id
      s.id = 'random-Img';
      // type css
      s.type = 'text/css';
      // append in head
      document.head.appendChild(s);
      // math random
      var r = images[Math.floor(Math.random() * images.length)];
      // add into style
      s.textContent = '#rand-images{background-image:url('+r+') no-repeat center center fixed;background-size:cover;-moz-background-size:cover;}';
    }
  };
})();
// Ready for the war
randomImages.init();
