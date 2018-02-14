jQuery(document).ready(function() {
	// Standard
	jQuery('.mainPanelLeft .tabs.standard .tab-links a').on('click', function(e)  {
		var currentAttrValue = jQuery(this).attr('href');

		// Show/Hide Tabs
		jQuery('.tabs ' + currentAttrValue).show().siblings().hide();
		

		// Change/remove current tab to active
		jQuery(this).parent('li').addClass('active').siblings().removeClass('active');

		jQuery(this).children('span').addClass('').siblings().removeClass('dontShowTabText');
		// jQuery('img span').removeClass('dontShowTabText').siblings().addClass('dontShowTabText')
		e.preventDefault();
	});

	
});