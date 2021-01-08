'use strict';

$(document).ready(function(){
  $('.accordion__list > .accordion__content > .accordion__panel').hide();
    
  $('.accordion__list > .accordion__content').click(function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active").find(".accordion__panel").slideUp();
    } else {
      $(".accordion__list > .accordion__content.active .accordion__panel").slideUp();
      $(".accordion__list > .accordion__content.active").removeClass("active");
      $(this).addClass("active").find(".accordion__panel").slideDown();
    }
    return false;
  });
  
});