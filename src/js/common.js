$(function() {

	$('#icon-menu').click(function() {
		 var menuItems = $('#icon-menu-items');

    	if(menuItems.is(':visible'))
        	menuItems.slideUp('slow');
    	else
        	menuItems.slideDown('slow');
		})
  
});

  