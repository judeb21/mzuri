'use strict';

$(document).ready(function() {
	$('#mobile-icon').click(function(){
		$(this).toggleClass('open');
        $(".overlay").toggleClass("open");
        $(".overlay a").toggleClass("open");
	});
	if (window.innerWidth > 992) {
		var prevScrollpos = window.pageYOffset;
		window.onscroll = function() {
			var currentScrollPos = window.pageYOffset;
			if (prevScrollpos < currentScrollPos) {
				$("#navbar").addClass("header__unpin");
			} else {
				$("#navbar").removeClass("header__unpin");
			}
			prevScrollpos = currentScrollPos;
		}
	}
});
