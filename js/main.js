jQuery(document).ready(function() {
	// Standard
	jQuery('.mainPanelLeft .tabs.standard .tab-links a').on('click', function(e)  {
		var currentAttrValue = jQuery(this).attr('href');

		// Show/Hide Tabs
		jQuery('.tabs #' + currentAttrValue).show().siblings().hide();
		
		// jQuery('.tabs '+currentAttrValue+' span').addClass('activeTabText').siblings().removeClass('inactiveTabText');
		// Change/remove current tab to active
		jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
		// jQuery('.'+currentAttrValue+' span').removeClass('inactiveTabText');
		// jQuery('img span').removeClass('dontShowTabText').siblings().addClass('dontShowTabText')
		e.preventDefault();
	});

	jQuery('.mainPanelRight .tabs.standard .tab-links a').on('click', function(e)  {
		var currentAttrValue = jQuery(this).attr('href');
		// Show/Hide Tabs
		jQuery('.tabs ' + currentAttrValue).show().siblings().hide();
		// Change/remove current tab to active
		jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
		e.preventDefault();
	});

	jQuery('.tab-list-text ').on('click', function(e)  {
		jQuery('.mainTabRow .row').removeClass('tab-list-active')
		jQuery(".toggleButtonText").parent('div').removeClass('tab-list-active');
		jQuery(".toggleButtonText").parent('div').addClass('toggleGroupColor');
		jQuery(this).parent('.mainTabRow .row').addClass('tab-list-active').siblings().removeClass('tab-list-active');
	});

	jQuery('.toggleButtonText').on('click', function(e)  {
		jQuery('.mainTabRow .row').removeClass('tab-list-active')
		jQuery(".toggleButtonText").parent('div').removeClass('tab-list-active');
		jQuery(this).parent('div').addClass('tab-list-active');
		jQuery(this).parent('div').removeClass('toggleGroupColor');
	});
	
});