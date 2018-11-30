$(function() {


	//menu in icons
	$('#icon-menu').click(function() {
		 var menuItems = $('#icon-menu-items');

    	if(menuItems.is(':visible'))
        	menuItems.slideUp('slow');
    	else
        	menuItems.slideDown('slow');
		})


	//menu in tabs
	$('#tabs-menu').click(function() {
		 var menuItems = $('#tabs-menu-content');

    	if(menuItems.is(':visible'))
        	menuItems.slideUp('slow');
    	else
        	menuItems.slideDown('slow');
		})
  
});

  