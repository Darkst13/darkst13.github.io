// Sticky Header
$(window).scroll(function() {

    if ($(window).scrollTop() > 100) {
        $('.main_h').addClass('sticky');
    } else {
        $('.main_h').removeClass('sticky');
    }
});

(function($) {
    $(function() {
      // Store menu container
      var mobileMenu = '#mobile-menu';
      // Store Trigger
      var mobileBtn = '#mobile-footer-btn';
  
      var rotation = '.mobile-btn-close';
  
      $(mobileBtn).on("click", function(e) {
        e.stopPropagation();
        if ($(mobileMenu).hasClass('mobile-menu-hide') || $(rotation).hasClass('is-rotating')) {
          $(mobileMenu).removeClass("mobile-menu-hide").addClass("mobile-menu-show");
          $(rotation).removeClass("is-rotating").addClass("is-rotating-back");
        } else {
          $(mobileMenu).removeClass("mobile-menu-show").addClass("mobile-menu-hide");
          $(rotation).removeClass('is-rotating-back').addClass('is-rotating');
        }
      });
    });
  })(jQuery);