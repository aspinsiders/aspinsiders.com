




/*
     FILE ARCHIVED ON 20:57:32 Feb 2, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:50:04 Feb 4, 2016.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
$(function() {
	jQuery('.tb .submenu').hover(function () {	
			jQuery(this).children('ul').removeClass('submenu-hide').addClass('submenu-show');
		}, 
		function () {
			jQuery(this).children('ul').removeClass('submenu-show').addClass('submenu-hide');
	});
	
});

