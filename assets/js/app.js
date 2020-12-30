'use strict';

$(document).ready(function() {
	$('#mobile-icon').click(function(){
		$(this).toggleClass('open');
        $(".overlay").toggleClass("open");
        $(".overlay a").toggleClass("open");
	});
});
