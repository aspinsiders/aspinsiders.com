$(function() {
	jQuery('.tb .submenu').hover(function () {	
			jQuery(this).children('ul').removeClass('submenu-hide').addClass('submenu-show');
		}, 
		function () {
			jQuery(this).children('ul').removeClass('submenu-show').addClass('submenu-hide');
	});
	
});

